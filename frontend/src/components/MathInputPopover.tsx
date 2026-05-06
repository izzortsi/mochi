"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Check } from "lucide-react";

/* MathLive-backed editor used as a transient popover from the chat
 * input. The user authors a math snippet here; on commit the LaTeX
 * source is handed back to the textarea wrapped in $...$.
 *
 * MathLive is a web component that calls customElements.define at
 * module load — that requires a DOM, so we dynamic-import it inside
 * useEffect to avoid crashing Next.js prerender. The math-field
 * itself is mounted only after that import resolves.
 */

interface Props {
  initial?: string;
  onCommit: (latex: string) => void;
  onCancel: () => void;
}

// Loosen the JSX typing for the custom element. mathlive ships its own
// types but the JSX intrinsic registration lives in `mathlive/types`,
// which conflicts with React's strict children typing. A minimal shim
// keeps the editor strongly typed elsewhere without pulling that in.
type MathfieldElement = HTMLElement & { value: string };

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "math-field": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<MathfieldElement> },
        HTMLElement
      >;
    }
  }
}

export function MathInputPopover({ initial = "", onCommit, onCancel }: Props) {
  const fieldRef = useRef<MathfieldElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    // Dynamic import — the custom element registration touches
    // window/customElements which don't exist during SSR.
    import("mathlive").then(() => {
      if (alive) setReady(true);
    });
    return () => { alive = false; };
  }, []);

  // Once the field exists, push the initial LaTeX in and focus.
  useEffect(() => {
    if (!ready) return;
    const el = fieldRef.current;
    if (!el) return;
    if (initial) el.value = initial;
    setTimeout(() => el.focus(), 0);
  }, [ready, initial]);

  const commit = () => {
    const el = fieldRef.current;
    if (!el) return;
    const v = el.value.trim();
    if (v) onCommit(v);
    else onCancel();
  };

  // Esc cancels, Cmd/Ctrl+Enter commits — Enter alone stays available
  // to MathLive (used inside fractions, matrices, etc.).
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
    } else if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      commit();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onCancel}
      onKeyDown={onKey}
    >
      <div
        className="w-full max-w-xl bg-[#0c0c0c] border border-[#2a2a2a] rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.6)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-3 py-2 border-b border-[#1f1f1f] flex items-center gap-3">
          <span className="font-display text-sm tracking-wide">Insert math</span>
          <span className="text-[10px] uppercase tracking-wider font-mono opacity-50">
            ⌘↵ commit · esc cancel
          </span>
          <span className="ml-auto flex items-center gap-1">
            <button
              onClick={commit}
              aria-label="Insert"
              title="Insert (⌘↵)"
              className="p-1 rounded hover:bg-[#1a1a1a] text-amber-300"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={onCancel}
              aria-label="Cancel"
              title="Cancel (esc)"
              className="p-1 rounded hover:bg-[#1a1a1a]"
            >
              <X className="w-4 h-4 opacity-60 hover:opacity-100" />
            </button>
          </span>
        </div>
        <div className="p-3">
          {ready ? (
            <math-field
              ref={fieldRef}
              style={{
                width: "100%",
                fontSize: "20px",
                background: "#050505",
                color: "#fafafa",
                border: "1px solid #1f1f1f",
                borderRadius: "4px",
                padding: "8px",
              }}
            >
              {initial}
            </math-field>
          ) : (
            <div className="text-[10px] uppercase tracking-wider font-mono opacity-50 py-4 text-center">
              loading…
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
