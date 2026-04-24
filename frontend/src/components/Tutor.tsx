"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Send, Database } from "lucide-react";
import { loadConfig, isConfigured } from "@/lib/settings";
import { runLlmTurn } from "@/lib/llm";
import { validateAndEncode, type ToolName } from "@/lib/tools";
import { WsClient } from "@/lib/ws";
import { api } from "@/lib/api";
import { useTutorContext } from "@/lib/tutor-context";
import type { ChatMessage, ConnectionStatus } from "@/lib/types";
import { MathText } from "./MathText";
import { MarkdownContent } from "./MarkdownContent";
import { CHAT_APPENDED_EVENT, type ChatAppendedDetail } from "./SessionCard";

// Maximum tool-call iterations per user turn. Each iteration is one LLM
// round-trip: {assistant reply → optional tool dispatch → feed result back}.
// Loop exits early when the model stops emitting <tool> blocks. Cap prevents
// a confused model from looping on a tool that keeps failing.
const MAX_TOOL_ITERATIONS = 8;

// Remove <tool>…</tool> blocks from an assistant message's raw content so
// the chat UI shows only the prose. We still STORE the raw content (blocks
// included) — the LLM needs to see its own prior tool calls when the loop
// re-enters with results.
function stripToolBlocks(content: string): string {
  return content.replace(/<tool>[\s\S]*?<\/tool>/g, "").trim();
}

// Compact inline indicator for a tool call in the chat stream. The full
// content of the tool response isn't visually relevant to the user — it's
// context for the model, not the reader — so we render just the name + a
// status dot. Green = ran to completion, red = the tool errored (detected
// by the "<name> failed:" prefix wired into the dispatch path below).
function ToolChip({ name, ok }: { name: string; ok: boolean }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono opacity-50">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          ok ? "bg-emerald-500/70" : "bg-red-500/70"
        }`}
      />
      <span>{name}</span>
    </div>
  );
}

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

/* Mounted once at the layout root. Reads scope (courseId, pageContext, etc.)
 * from TutorContext — pages call useSetTutorContext({...}) to update it. */
export function Tutor() {
  const { courseId, pageContext, onToolCall, title, placeholder, visible } =
    useTutorContext();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WsClient | null>(null);
  const pendingRef = useRef<Map<string, (resp: string) => void>>(new Map());

  useEffect(() => {
    const ws = new WsClient(
      process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:4000/ws",
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

    // Local history snapshot we extend synchronously across the loop —
    // setMessages is async, so we can't rely on `messages` reflecting
    // turns we just appended.
    let history: ChatMessage[] = [...(messages ?? []), userMsg];

    try {
      for (let iter = 0; iter < MAX_TOOL_ITERATIONS; iter++) {
        const result = await runLlmTurn(config, history, pageContext);
        const assistantMsg: ChatMessage = {
          // Store the RAW model output so the next iteration's history
          // faithfully shows the <tool> call block this assistant turn
          // emitted. stripToolBlocks() trims it down for the chat UI.
          role: "assistant",
          content: result.raw,
          toolName: null,
          timestamp: new Date().toISOString(),
        };
        pushMessage(assistantMsg);
        history = [...history, assistantMsg];

        if (result.toolCalls.length === 0) break;

        for (const call of result.toolCalls) {
          let toolContent: string;
          try {
            toolContent = await callTool(call.name, call.args);
            onToolCall?.(call.name, true);
          } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            // Prefix "<name> failed:" is the signal the ToolChip reads to
            // paint the status dot red. Also gives the LLM a clear
            // instruction to retry with corrected args.
            toolContent = `${call.name} failed: ${summarizeToolError(msg)}. Retry with complete args (see tool schema).`;
            onToolCall?.(call.name, false);
          }
          const toolMsg: ChatMessage = {
            role: "tool",
            content: toolContent,
            toolName: call.name,
            timestamp: new Date().toISOString(),
          };
          pushMessage(toolMsg);
          history = [...history, toolMsg];
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

  // Pairs with the sticky header from Header.tsx: the panel docks flush to
  // the right + bottom edges and tucks directly under the header's border,
  // reading as one continuous HUD surface instead of a floating card.
  const statusDot =
    status === "connected" ? "bg-emerald-500" :
    status === "connecting" ? "bg-amber-500" :
    "bg-stone-600";

  if (!visible) return null;

  return (
    <div
      className="fixed right-0 bottom-0 w-96 flex flex-col border-t border-l border-[#1a1a1a] bg-black/95 backdrop-blur z-30"
      style={{ top: "var(--hud-h, 102px)" }}
    >
      <div className="px-3 py-2 border-b border-[#1a1a1a] flex items-center justify-between gap-2">
        <span className="font-display text-sm tracking-wide">{title}</span>
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
          <span
            className="text-[10px] uppercase tracking-wider font-mono opacity-60 flex items-center gap-1.5"
            title={`connection: ${status}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
            {status}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {(messages ?? []).map((m, i) => {
          if (m.role === "tool") {
            // Minimal chip — tool name + status dot. The full payload is
            // kept in `m.content` for replay into the LLM; no need to show
            // it to the user.
            const ok = !/^\S+ failed:/.test(m.content);
            return (
              <ToolChip key={i} name={m.toolName ?? "tool"} ok={ok} />
            );
          }
          if (m.role === "assistant") {
            const display = stripToolBlocks(m.content);
            // Pure tool-dispatch turns (no prose, just a <tool> block)
            // collapse to nothing visible — the adjacent ToolChip carries
            // the signal that something happened.
            if (!display) return null;
            return (
              <div key={i} className="text-sm">
                <div className="text-[10px] uppercase tracking-wider font-mono opacity-40 mb-1">
                  assistant
                </div>
                <div className="text-neutral-200">
                  <MarkdownContent content={display} compact />
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="text-sm">
              <div className="text-[10px] uppercase tracking-wider font-mono opacity-40 mb-1">
                user
              </div>
              <div className="text-neutral-100 whitespace-pre-wrap">
                <MathText>{m.content}</MathText>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-[#1a1a1a] p-2 flex gap-2">
        <textarea
          className="flex-1 bg-[#050505] border border-[#1a1a1a] rounded px-2 py-1 text-sm resize-none outline-none focus:border-[#2a2a2a]"
          rows={2}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder={placeholder}
        />
        <button
          onClick={send}
          disabled={busy}
          className="px-2 disabled:opacity-30 text-neutral-300 hover:text-neutral-100"
          title="send"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
