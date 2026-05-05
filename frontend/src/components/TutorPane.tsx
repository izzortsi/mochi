"use client";
import { useState } from "react";
import Link from "next/link";
import { Send, Database, X, Maximize2, Minimize2 } from "lucide-react";
import type { ChatMessage, ConnectionStatus } from "@/lib/types";
import { api } from "@/lib/api";
import { segmentAssistantContent } from "@/lib/artifacts";
import { MathText } from "./MathText";
import { MarkdownContent } from "./MarkdownContent";
import { ArtifactBlock } from "./ArtifactBlock";

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
  // Pasted image attachments for the next user turn. Engine owns the
  // state; the pane handles paste upload + thumbnail UI.
  pendingImages: string[];
  onAddImage: (url: string) => void;
  onRemoveImage: (url: string) => void;
}

// Remove <tool>…</tool> blocks from an assistant message's raw content
// before splitting into segments. We STORE the raw content (blocks
// included) — the LLM needs to see its own prior tool calls when the
// loop re-enters with results — but for display we drop them.
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
  onToggleExpand, expanded, pendingImages, onAddImage, onRemoveImage,
}: Props) {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = Array.from(e.clipboardData?.items ?? []);
    const images = items.filter((it) => it.kind === "file" && it.type.startsWith("image/"));
    if (images.length === 0) return;
    e.preventDefault();
    setUploadError(null);
    setUploading(true);
    try {
      for (const it of images) {
        const file = it.getAsFile();
        if (!file) continue;
        const { url } = await api.uploadChatImage(file);
        onAddImage(url);
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
    }
  };
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
            // Drop tool blocks first (they're rendered via ToolChip on
            // adjacent tool messages), then split the remainder into
            // text + artifact segments so iframes render inline with
            // the prose, in the same order the model emitted them.
            const cleaned = stripToolBlocks(m.content);
            const segments = segmentAssistantContent(cleaned);
            if (segments.length === 0) return null;
            return (
              <div key={i} className="text-sm">
                <div className="text-[10px] uppercase tracking-wider font-mono opacity-40 mb-1">
                  assistant
                </div>
                <div className="text-neutral-200 space-y-2">
                  {segments.map((seg, j) =>
                    seg.kind === "text" ? (
                      <MarkdownContent key={j} content={seg.text} compact />
                    ) : (
                      <ArtifactBlock key={seg.artifact.id + j} artifact={seg.artifact} />
                    ),
                  )}
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="text-sm">
              <div className="text-[10px] uppercase tracking-wider font-mono opacity-40 mb-1">
                user
              </div>
              {m.content && (
                <div className="text-neutral-100 whitespace-pre-wrap mb-1">
                  <MathText>{m.content}</MathText>
                </div>
              )}
              {m.images && m.images.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {m.images.map((url) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={url}
                      src={url}
                      alt="attachment"
                      className="max-h-32 rounded border border-[#1f1f1f] object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {(pendingImages.length > 0 || uploading || uploadError) && (
        <div className="border-t border-[#1a1a1a] px-2 py-2 flex flex-wrap items-center gap-2">
          {pendingImages.map((url) => (
            <div key={url} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt="attachment"
                className="h-14 w-14 object-cover rounded border border-[#1f1f1f]"
              />
              <button
                onClick={() => onRemoveImage(url)}
                aria-label="Remove attachment"
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black/90 border border-[#2a2a2a] flex items-center justify-center hover:bg-red-900/70"
              >
                <X className="w-2.5 h-2.5 opacity-70" />
              </button>
            </div>
          ))}
          {uploading && (
            <span className="text-[10px] uppercase tracking-wider font-mono opacity-50">
              uploading…
            </span>
          )}
          {uploadError && (
            <span className="text-[10px] font-mono text-red-400">{uploadError}</span>
          )}
        </div>
      )}
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
          onPaste={handlePaste}
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
