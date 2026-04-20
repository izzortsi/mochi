"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Send, Database } from "lucide-react";
import { loadConfig, isConfigured } from "@/lib/settings";
import { runLlmTurn } from "@/lib/llm";
import { validateAndEncode, type ToolName } from "@/lib/tools";
import { WsClient } from "@/lib/ws";
import { api } from "@/lib/api";
import type { ChatMessage, ConnectionStatus } from "@/lib/types";
import { MathText } from "./MathText";
import { MarkdownContent } from "./MarkdownContent";
import { CHAT_APPENDED_EVENT, type ChatAppendedDetail } from "./SessionCard";

function summarizeToolError(raw: string): string {
  try {
    const parsed: Array<{ path?: unknown[]; code?: string; message?: string }> =
      JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const missing = parsed
        .filter((e) => e?.code === "invalid_type" && e?.message === "Required")
        .map((e) => (e.path || []).join("."))
        .filter(Boolean);
      if (missing.length) return `missing required fields: ${missing.join(", ")}`;
    }
  } catch {
    /* not JSON */
  }
  return raw.length > 200 ? raw.slice(0, 200) + "…" : raw;
}

export interface TutorProps {
  /** The chat thread to read/write. Use 0 as a reserved "notes-scope" thread. */
  courseId: number;
  /** System-prompt addendum describing what the user is currently looking at. */
  pageContext: string;
  /** Called after a tool call completes; e.g. to refresh progress state. */
  onToolCall?: (toolName: string, ok: boolean) => void;
  /** Panel title. Defaults to "Tutor". */
  title?: string;
  /** Textarea placeholder. */
  placeholder?: string;
}

export function Tutor({
  courseId,
  pageContext,
  onToolCall,
  title = "Tutor",
  placeholder = "Ask a question, request a hint, or share a thought…",
}: TutorProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WsClient | null>(null);
  const pendingRef = useRef<Map<string, (resp: string) => void>>(new Map());

  useEffect(() => {
    const ws = new WsClient(
      "ws://localhost:4000/ws",
      (msg) => {
        if (msg.requestId) {
          const resolver = pendingRef.current.get(msg.requestId);
          if (resolver) {
            resolver(JSON.stringify(msg.ok ? msg.result : { error: msg.error }));
            pendingRef.current.delete(msg.requestId);
          }
        }
      },
      setStatus,
    );
    ws.connect();
    wsRef.current = ws;
    return () => ws.disconnect();
  }, []);

  // Live-append when a retrieval/elaborate attempt on the same course pipes in.
  useEffect(() => {
    const onAppended = (e: Event) => {
      const ce = e as CustomEvent<ChatAppendedDetail>;
      if (!ce.detail || ce.detail.courseId !== courseId) return;
      setMessages((prev) => [...(prev ?? []), ce.detail.message]);
    };
    window.addEventListener(CHAT_APPENDED_EVENT, onAppended);
    return () => window.removeEventListener(CHAT_APPENDED_EVENT, onAppended);
  }, [courseId]);

  // Rehydrate chat on course change.
  useEffect(() => {
    let cancelled = false;
    api.memory.fetchChat(courseId).then((resp) => {
      if (cancelled) return;
      setMessages(Array.isArray(resp?.messages) ? resp.messages : []);
    }).catch(() => {
      if (!cancelled) setMessages([]);
    });
    return () => { cancelled = true; };
  }, [courseId]);

  const callTool = useCallback((name: ToolName, args: object): Promise<string> => {
    return new Promise((resolve, reject) => {
      const result = validateAndEncode(name, args);
      if (!result.ok) return reject(new Error(result.error));
      pendingRef.current.set(result.requestId, resolve);
      wsRef.current?.send(result.frame);
      setTimeout(() => {
        if (pendingRef.current.has(result.requestId)) {
          pendingRef.current.delete(result.requestId);
          reject(new Error("tool timeout"));
        }
      }, 15000);
    });
  }, []);

  const persistTurn = useCallback((msg: ChatMessage) => {
    api.memory.appendChat(courseId, msg).catch(() => {});
  }, [courseId]);

  const pushMessage = useCallback((msg: ChatMessage) => {
    setMessages((m) => [...m, msg]);
    persistTurn(msg);
  }, [persistTurn]);

  const send = async () => {
    if (!input.trim() || busy) return;
    const config = loadConfig();
    if (!isConfigured(config)) {
      pushMessage({
        role: "assistant",
        content: "Configure your API key in Settings first.",
        toolName: null,
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const userMsg: ChatMessage = {
      role: "user", content: input, toolName: null, timestamp: new Date().toISOString(),
    };
    pushMessage(userMsg);
    setInput("");
    setBusy(true);

    try {
      const result = await runLlmTurn(config, messages ?? [], userMsg.content, pageContext);
      const assistantMsg: ChatMessage = {
        role: "assistant", content: result.text || "(calling tool)",
        toolName: null, timestamp: new Date().toISOString(),
      };
      pushMessage(assistantMsg);

      for (const call of result.toolCalls) {
        pushMessage({
          role: "tool", content: `→ ${call.name}`, toolName: call.name,
          timestamp: new Date().toISOString(),
        });
        try {
          const resp = await callTool(call.name, call.args);
          pushMessage({
            role: "tool", content: resp, toolName: call.name,
            timestamp: new Date().toISOString(),
          });
          onToolCall?.(call.name, true);
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          const summary = summarizeToolError(msg);
          pushMessage({
            role: "tool",
            content: `${call.name} failed: ${summary}. Retry with complete args (see tool schema).`,
            toolName: call.name,
            timestamp: new Date().toISOString(),
          });
          onToolCall?.(call.name, false);
        }
      }
    } catch (e) {
      pushMessage({
        role: "assistant", content: `error: ${String(e)}`,
        toolName: null, timestamp: new Date().toISOString(),
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 top-[140px] w-96 flex flex-col rounded-xl border border-[#2a2a2a] bg-[#000000]/95 backdrop-blur">
      <div className="px-4 py-2 border-b border-[#1a1a1a] flex items-center justify-between gap-2">
        <span className="font-display">{title}</span>
        <div className="flex items-center gap-3">
          <Link
            href="/memory"
            target="_blank"
            className="text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100 flex items-center gap-1"
            title="View & manage tutor memory"
          >
            <Database className="w-3 h-3" />
            memory
          </Link>
          <span className="text-[10px] uppercase tracking-wider font-mono opacity-40">
            {status}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
        {(messages ?? []).map((m, i) => (
          <div key={i} className="text-sm">
            <div className="text-[10px] uppercase tracking-wider font-mono opacity-40 mb-1">
              {m.role}
            </div>
            {m.role === "assistant" ? (
              <div className="text-neutral-200">
                <MarkdownContent content={m.content} compact />
              </div>
            ) : m.role === "tool" ? (
              <pre className="font-mono text-xs opacity-60 whitespace-pre-wrap break-words m-0">
                {m.content}
              </pre>
            ) : (
              <div className="text-neutral-100 whitespace-pre-wrap">
                <MathText>{m.content}</MathText>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-[#1a1a1a] p-2 flex gap-2">
        <textarea
          className="flex-1 bg-[#050505] border border-[#1a1a1a] rounded px-2 py-1 text-sm resize-none"
          rows={2}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder={placeholder}
        />
        <button onClick={send} disabled={busy} className="px-2 disabled:opacity-30">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
