"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Send, Database, X, Maximize2, Minimize2, Sigma, Paperclip, FileText, Pencil,
} from "lucide-react";
import type { ChatMessage, ConnectionStatus, PdfAttachment } from "@/lib/types";
import { api } from "@/lib/api";
import { segmentAssistantContent } from "@/lib/artifacts";
import { MathText } from "./MathText";
import { MarkdownContent } from "./MarkdownContent";
import { ArtifactBlock } from "./ArtifactBlock";
import dynamic from "next/dynamic";
import { ThreadPicker } from "./ThreadPicker";
import { SketchInputPopover } from "./SketchInputPopover";

// Client-only because MathInputPopover statically imports `mathlive`,
// which calls customElements.define at module load — that crashes
// during SSR. next/dynamic with ssr:false also pins a stable chunk
// boundary so HMR doesn't shuffle the chunk hash out from under the
// browser (the source of the recurring ChunkLoadError on this file).
// SketchInputPopover is imported statically — it uses only React and
// the 2D canvas API with no module-load DOM side effects, so SSR is
// fine and we avoid the dynamic-chunk dance.
const MathInputPopover = dynamic(
  () => import("./MathInputPopover").then((m) => m.MathInputPopover),
  { ssr: false },
);

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
  // PDF attachments for the next user turn. Same shape as images but
  // uploaded via a paperclip-triggered file picker (paste of arbitrary
  // files is unreliable cross-browser, especially on mobile).
  pendingPdfs: PdfAttachment[];
  onAddPdf: (pdf: PdfAttachment) => void;
  onRemovePdf: (url: string) => void;
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
  pendingPdfs, onAddPdf, onRemovePdf,
}: Props) {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [mathOpen, setMathOpen] = useState(false);
  const [sketchOpen, setSketchOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Splice a $...$ math snippet into the textarea at the current cursor.
  // Falls back to appending when the textarea hasn't been focused yet
  // (selectionStart is null on unmounted/never-focused elements).
  const insertMath = (latex: string) => {
    const ta = textareaRef.current;
    const wrapped = `$${latex}$`;
    if (!ta) {
      onInput(input + wrapped);
      return;
    }
    const start = ta.selectionStart ?? input.length;
    const end = ta.selectionEnd ?? input.length;
    const next = input.slice(0, start) + wrapped + input.slice(end);
    onInput(next);
    // Restore cursor to just after the inserted snippet on the next tick,
    // once React has re-rendered with the new value.
    setTimeout(() => {
      const cursor = start + wrapped.length;
      ta.focus();
      ta.setSelectionRange(cursor, cursor);
    }, 0);
  };

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

  // Paperclip-triggered upload. Routes the file to the right endpoint
  // by mime type — images keep the existing flow, PDFs go through the
  // new endpoint and queue as PdfAttachment chips. Anything else gets
  // an inline error.
  const handlePickedFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploadError(null);
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        // iOS Safari frequently delivers PDFs picked from the Files app
        // with an empty file.type. Use the filename extension as a
        // fallback so the dispatch doesn't bail to "unsupported".
        const lower = file.name.toLowerCase();
        const isPdf =
          file.type === "application/pdf" || lower.endsWith(".pdf");
        const isImage =
          file.type.startsWith("image/") ||
          /\.(png|jpe?g|gif|webp)$/.test(lower);
        if (isPdf) {
          const { url, label } = await api.uploadChatPdf(file);
          onAddPdf({ url, label });
        } else if (isImage) {
          const { url } = await api.uploadChatImage(file);
          onAddImage(url);
        } else {
          setUploadError(`unsupported file type: ${file.type || file.name}`);
        }
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
      // Reset the input so picking the same file twice in a row still fires onChange.
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // SketchInputPopover hands us a finished PNG blob; we wrap it in a
  // File so the existing upload endpoint's content-type validation
  // accepts it, then route the resulting URL through the same
  // pendingImages flow as paste/paperclip uploads. The sketch is
  // indistinguishable from any other attached image once queued. The
  // modal closes immediately on commit — matching paste behavior, so
  // the user sees the thumbnail appear before upload finishes.
  const handleSketchCommit = async (blob: Blob) => {
    setSketchOpen(false);
    setUploadError(null);
    setUploading(true);
    try {
      const file = new File([blob], `sketch-${Date.now()}.png`, { type: "image/png" });
      const { url } = await api.uploadChatImage(file);
      onAddImage(url);
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
        <span className="font-display text-sm tracking-wide truncate">{title}</span>
        <div className="flex items-center gap-3">
          <ThreadPicker />
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
              {m.pdfs && m.pdfs.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {m.pdfs.map((pdf) => (
                    <a
                      key={pdf.url}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-[#1f1f1f] bg-[#0a0a0a] text-xs font-mono hover:border-amber-700/60"
                      title={pdf.label}
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-300" />
                      <span className="max-w-[14rem] truncate">{pdf.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {(pendingImages.length > 0 || pendingPdfs.length > 0 || uploading || uploadError) && (
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
          {pendingPdfs.map((pdf) => (
            <div
              key={pdf.url}
              className="relative inline-flex items-center gap-1.5 px-2 py-1 rounded border border-[#1f1f1f] bg-[#0a0a0a] text-xs font-mono pr-5"
              title={pdf.label}
            >
              <FileText className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              <span className="max-w-[10rem] truncate">{pdf.label}</span>
              <button
                onClick={() => onRemovePdf(pdf.url)}
                aria-label="Remove PDF"
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
          ref={textareaRef}
          className="flex-1 bg-[#050505] border border-[#1a1a1a] rounded px-2 py-1 text-sm resize-none outline-none focus:border-[#2a2a2a]"
          rows={2}
          value={input}
          onChange={(e) => onInput(e.target.value)}
          onKeyDown={(e) => {
            // Cmd/Ctrl+M opens the math editor; same shortcut works
            // when focus is in the textarea even while it's empty.
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "m") {
              e.preventDefault();
              setMathOpen(true);
              return;
            }
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          onPaste={handlePaste}
          placeholder={placeholder}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf,image/png,image/jpeg,image/gif,image/webp"
          multiple
          hidden
          onChange={(e) => handlePickedFiles(e.target.files)}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-2 text-neutral-400 hover:text-amber-300"
          title="Attach PDF or image"
          aria-label="Attach PDF or image"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        <button
          onClick={() => setSketchOpen(true)}
          className="px-2 text-neutral-400 hover:text-amber-300"
          title="Sketch (handwrite or draw to send as image)"
          aria-label="Open sketch pad"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button
          onClick={() => setMathOpen(true)}
          className="px-2 text-neutral-400 hover:text-amber-300"
          title="Insert math (⌘M)"
          aria-label="Insert math"
        >
          <Sigma className="w-4 h-4" />
        </button>
        <button
          onClick={onSend}
          disabled={busy}
          className="px-2 disabled:opacity-30 text-neutral-300 hover:text-neutral-100"
          title="send"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      {mathOpen && (
        <MathInputPopover
          onCommit={(latex) => {
            insertMath(latex);
            setMathOpen(false);
          }}
          onCancel={() => setMathOpen(false)}
        />
      )}
      {sketchOpen && (
        <SketchInputPopover
          onCommit={handleSketchCommit}
          onCancel={() => setSketchOpen(false)}
        />
      )}
    </div>
  );
}
