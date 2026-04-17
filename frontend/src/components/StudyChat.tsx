"use client";
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { loadConfig, isConfigured } from "@/lib/settings";
import { runLlmTurn } from "@/lib/llm";
import { validateAndEncode, type ToolName } from "@/lib/tools";
import { WsClient } from "@/lib/ws";
import type { ChatMessage, ConnectionStatus, Course, DayView, UserProgress } from "@/lib/types";
import { MathText } from "./MathText";

function buildPageContext(course: Course, day: DayView, progress: UserProgress): string {
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

  const callTool = (name: ToolName, args: object): Promise<string> => {
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
  };

  const send = async () => {
    if (!input.trim() || busy) return;
    const config = loadConfig();
    if (!isConfigured(config)) {
      setMessages(m => [...m, {
        role: "assistant", content: "Configure your API key in Settings first.",
        toolName: null, timestamp: new Date().toISOString(),
      }]);
      return;
    }

    const userMsg: ChatMessage = {
      role: "user", content: input, toolName: null, timestamp: new Date().toISOString(),
    };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setBusy(true);

    try {
      const context = buildPageContext(course, day, progress);
      const result = await runLlmTurn(config, messages, userMsg.content, context);
      const assistantMsg: ChatMessage = {
        role: "assistant", content: result.text || "(calling tool)",
        toolName: null, timestamp: new Date().toISOString(),
      };
      setMessages(m => [...m, assistantMsg]);

      for (const call of result.toolCalls) {
        setMessages(m => [...m, {
          role: "tool", content: `→ ${call.name}`, toolName: call.name,
          timestamp: new Date().toISOString(),
        }]);
        try {
          const resp = await callTool(call.name, call.args);
          setMessages(m => [...m, {
            role: "tool", content: resp, toolName: call.name,
            timestamp: new Date().toISOString(),
          }]);
          if (call.name === "mark-task-complete") {
            onProgressChanged();
          }
        } catch (e) {
          setMessages(m => [...m, {
            role: "tool", content: `error: ${String(e)}`, toolName: call.name,
            timestamp: new Date().toISOString(),
          }]);
        }
      }
    } catch (e) {
      setMessages(m => [...m, {
        role: "assistant", content: `error: ${String(e)}`,
        toolName: null, timestamp: new Date().toISOString(),
      }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 top-20 w-96 flex flex-col rounded-xl border border-[#2a2a3f] bg-[#0f0f1a]/95 backdrop-blur">
      <div className="px-4 py-2 border-b border-[#1a1a2a] flex items-center justify-between">
        <span className="font-display">Tutor</span>
        <span className="text-xs opacity-50">{status}</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm ${m.role === "user" ? "text-paper" : m.role === "assistant" ? "opacity-80" : "opacity-50 font-mono text-xs"}`}
          >
            <div className="text-xs opacity-40 mb-1">{m.role}</div>
            <MathText>{m.content}</MathText>
          </div>
        ))}
      </div>
      <div className="border-t border-[#1a1a2a] p-2 flex gap-2">
        <textarea
          className="flex-1 bg-[#0a0a14] border border-[#1a1a2a] rounded px-2 py-1 text-sm resize-none"
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
