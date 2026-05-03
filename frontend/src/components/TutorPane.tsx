"use client";
import Link from "next/link";
import { Send, Database, X, Maximize2, Minimize2 } from "lucide-react";
import type { ChatMessage, ConnectionStatus } from "@/lib/types";
import { MathText } from "./MathText";
import { MarkdownContent } from "./MarkdownContent";

/* Presentational chat pane — header (title + memory link + status dot),
 * scrollable message list, input row. No state of its own; the desktop
 * fixed panel and the mobile fullscreen overlay both wrap this and feed
 * it the same engine output (see useTutorEngine).
 *
 * The optional onClose slot lets the mobile overlay render a close
 * button in the header without bloating the desktop layout. Desktop
 * passes it null and the slot collapses.
 */

interface Props {
  title: string;
  placeholder: string;
  messages: ChatMessage[];
  input: string;
  onInput: (v: string) => void;
  onSend: () => void;
  busy: boolean;
  status: ConnectionStatus;
  onClose?: () => void;
  // When provided, renders an expand/collapse button in the header. The
  // mobile sheet uses this to let the user trade card-reading space for
  // chat-reading space; desktop omits it (the panel size is fixed).
  onToggleExpand?: () => void;
  expanded?: boolean;
}

// Remove <tool>…</tool> blocks from an assistant message's raw content so
// the chat UI shows only the prose. We still STORE the raw content (blocks
// included) — the LLM needs to see its own prior tool calls when the loop
// re-enters with results.
function stripToolBlocks(content: string): string {
  return content.replace(/<tool>[\s\S]*?<\/tool>/g, "").trim();
}

// Compact inline indicator for a tool call. Green = ran, red = failed
// (detected by the "<name> failed:" prefix the engine writes).
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

export function TutorPane({
  title, placeholder, messages, input, onInput, onSend, busy, status, onClose,
  onToggleExpand, expanded,
}: Props) {
  const statusDot =
    status === "connected" ? "bg-emerald-500" :
    status === "connecting" ? "bg-amber-500" :
    "bg-stone-600";

  return (
    <div className="flex-1 min-h-0 flex flex-col">
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
          {onToggleExpand && (
            <button
              onClick={onToggleExpand}
              aria-label={expanded ? "Collapse tutor" : "Expand tutor"}
              title={expanded ? "Collapse" : "Expand"}
              className="p-1 rounded hover:bg-[#1a1a1a]"
            >
              {expanded ? (
                <Minimize2 className="w-4 h-4 opacity-60 hover:opacity-100" />
              ) : (
                <Maximize2 className="w-4 h-4 opacity-60 hover:opacity-100" />
              )}
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close tutor"
              className="p-1 -mr-1 rounded hover:bg-[#1a1a1a]"
            >
              <X className="w-4 h-4 opacity-60 hover:opacity-100" />
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {(messages ?? []).map((m, i) => {
          if (m.role === "tool") {
            const ok = !/^\S+ failed:/.test(m.content);
            return <ToolChip key={i} name={m.toolName ?? "tool"} ok={ok} />;
          }
          if (m.role === "assistant") {
            const display = stripToolBlocks(m.content);
            // Pure tool-dispatch turns (no prose, just a <tool> block)
            // collapse — the adjacent ToolChip carries the signal.
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
          onChange={(e) => onInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder={placeholder}
        />
        <button
          onClick={onSend}
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
