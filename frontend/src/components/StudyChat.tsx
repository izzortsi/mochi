"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Send, Database } from "lucide-react";
import { loadConfig, isConfigured } from "@/lib/settings";
import { runLlmTurn } from "@/lib/llm";
import { validateAndEncode, type ToolName } from "@/lib/tools";
import { WsClient } from "@/lib/ws";
import { api } from "@/lib/api";
import type {
  ChatMessage, ConnectionStatus, Course, DayView, UserProgress, TutorNote,
} from "@/lib/types";
import { MathText } from "./MathText";
import { MarkdownContent } from "./MarkdownContent";
import { CHAT_APPENDED_EVENT, type ChatAppendedDetail } from "./SessionCard";

function summarizeToolError(raw: string): string {
  // Zod errors come through as JSON-encoded arrays; pluck the missing field names.
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
    /* not JSON, fall through */
  }
  return raw.length > 200 ? raw.slice(0, 200) + "…" : raw;
}

function buildPageContext(
  course: Course,
  day: DayView,
  progress: UserProgress,
  notesByCard: Record<string, TutorNote[]>,
): string {
  const completed = progress.completedTasks ?? {};
  const tiers: Array<"bronze" | "silver" | "gold"> = ["bronze", "silver", "gold"];

  const lines: string[] = [];
  lines.push("# CURRENT PAGE");
  lines.push(`Course ${course.id}: ${course.title}`);
  lines.push(`Day ${day.id}: ${day.title}`);
  if (day.keyInsight) lines.push(`Key insight: ${day.keyInsight}`);
  lines.push("");
  lines.push("Cards on this day:");

  for (const tier of tiers) {
    const cards = day.cards.filter(c => c.tier === tier);
    for (const c of cards) {
      const done = completed[c.cardUid] ? "✓ completed" : "○ not completed";
      lines.push("");
      lines.push(`${tier.toUpperCase()} (card-uid: ${c.cardUid}) [${done}]`);
      lines.push(`  Text: ${c.text}`);
      lines.push(`  Solution (internal — don't reveal unless asked): ${c.detail}`);
      if (c.concepts.length > 0) lines.push(`  Concepts: ${c.concepts.join(", ")}`);
      const notes = notesByCard[c.cardUid] || [];
      if (notes.length > 0) {
        lines.push(`  Tutor notes:`);
        for (const n of notes) {
          lines.push(`    - [${n.source}] ${n.body}`);
        }
      }
    }
  }

  lines.push("");
  lines.push(`Overall course progress: ${progress.xp} XP, streak ${progress.streak}.`);
  return lines.join("\n");
}

interface Props {
  courseId: number;
  dayId: number;
  course: Course;
  day: DayView;
  progress: UserProgress;
  onProgressChanged: () => void;
}

export function StudyChat({ course, day, progress, onProgressChanged }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const [notesByCard, setNotesByCard] = useState<Record<string, TutorNote[]>>({});
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

  // Live-append when an attempt elsewhere on the page pipes to the tutor.
  useEffect(() => {
    const onAppended = (e: Event) => {
      const ce = e as CustomEvent<ChatAppendedDetail>;
      if (!ce.detail || ce.detail.courseId !== course.id) return;
      setMessages((prev) => [...(prev ?? []), ce.detail.message]);
    };
    window.addEventListener(CHAT_APPENDED_EVENT, onAppended);
    return () => window.removeEventListener(CHAT_APPENDED_EVENT, onAppended);
  }, [course.id]);

  // Rehydrate chat + fetch tutor notes on course change.
  useEffect(() => {
    let cancelled = false;
    api.memory.fetchChat(course.id).then((resp) => {
      if (cancelled) return;
      setMessages(Array.isArray(resp?.messages) ? resp.messages : []);
    }).catch(() => {
      if (!cancelled) setMessages([]);
    });
    api.memory.fetchTutorNotes().then((resp) => {
      if (cancelled) return;
      const byCard: Record<string, TutorNote[]> = {};
      for (const n of resp.notes) {
        (byCard[n.cardUid] ||= []).push(n);
      }
      setNotesByCard(byCard);
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [course.id]);

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

  // Fire-and-forget persistence of a new turn via REST so it doesn't depend
  // on the WS being connected yet (otherwise the first turn after mount can
  // fall into the 15s WS-timeout hole and be silently dropped).
  const persistTurn = useCallback((msg: ChatMessage) => {
    api.memory.appendChat(course.id, msg).catch(() => {});
  }, [course.id]);

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
      const context = buildPageContext(course, day, progress, notesByCard);
      const result = await runLlmTurn(config, messages ?? [], userMsg.content, context);
      const assistantMsg: ChatMessage = {
        role: "assistant", content: result.text || "(calling tool)",
        toolName: null, timestamp: new Date().toISOString(),
      };
      pushMessage(assistantMsg);

      let notesDirty = false;
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
          if (call.name === "mark-task-complete") {
            onProgressChanged();
          }
          if (call.name === "record-tutor-note") {
            notesDirty = true;
          }
        } catch (e) {
          // Feed validation errors back into the chat as a structured message
          // so the tutor can correct itself on the next turn.
          const msg = e instanceof Error ? e.message : String(e);
          const summary = summarizeToolError(msg);
          pushMessage({
            role: "tool",
            content: `${call.name} failed: ${summary}. Retry with complete args (see tool schema).`,
            toolName: call.name,
            timestamp: new Date().toISOString(),
          });
        }
      }
      if (notesDirty) {
        api.memory.fetchTutorNotes().then((resp) => {
          const byCard: Record<string, TutorNote[]> = {};
          for (const n of resp.notes) (byCard[n.cardUid] ||= []).push(n);
          setNotesByCard(byCard);
        }).catch(() => {});
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
    <div className="fixed right-4 bottom-4 top-20 w-96 flex flex-col rounded-xl border border-[#2a2a2a] bg-[#000000]/95 backdrop-blur">
      <div className="px-4 py-2 border-b border-[#1a1a1a] flex items-center justify-between gap-2">
        <span className="font-display">Tutor</span>
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
          placeholder="Ask for a hint, grade your attempt, or request a similar problem…"
        />
        <button onClick={send} disabled={busy} className="px-2 disabled:opacity-30">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
