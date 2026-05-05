"use client";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Sparkles, X, Code as CodeIcon } from "lucide-react";
import type { Artifact } from "@/lib/artifacts";

/* KaTeX is auto-injected into every artifact's srcDoc so the model can
 * use $...$ / $$...$$ delimiters without thinking about it. The iframe
 * pulls KaTeX from jsdelivr (allowed by our doc) on each open; one
 * fetch per modal-open is fine for the study-app cadence.
 */
const KATEX_INJECT = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" crossorigin="anonymous"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof renderMathInElement === "function") {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\\\[", right: "\\\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\\\(", right: "\\\\)", display: false }
        ],
        throwOnError: false
      });
    }
  });
</script>
`;

function injectKatex(html: string): string {
  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, KATEX_INJECT + "</head>");
  }
  if (/<body[^>]*>/i.test(html)) {
    return html.replace(/<body([^>]*)>/i, (_m, attrs) => `<body${attrs}>${KATEX_INJECT}`);
  }
  // Fragment — wrap in a minimal shell so KaTeX has a place to load.
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${KATEX_INJECT}</head><body>${html}</body></html>`;
}

/* Inline pill that opens a fullscreen modal with the artifact rendered.
 *
 * Sandbox: only allow-scripts. The iframe inherits a null origin from
 * srcDoc, so it can't read parent cookies/localStorage or call mochi's
 * API. CDN fetches (unpkg, jsdelivr) work normally — those servers
 * send permissive CORS.
 *
 * The pill stays inline where the artifact was emitted in the chat
 * stream; the modal is summoned on demand. Keeps the chat scannable
 * and avoids running iframes on every replay scroll.
 */

const FULLSCREEN_Z = 60;

export function ArtifactBlock({ artifact }: { artifact: Artifact }) {
  const [open, setOpen] = useState(false);
  const [showSource, setShowSource] = useState(false);
  // Track when document.body is available so we can portal. SSR has no
  // body, and React hydration would mismatch if we tried to render the
  // portal during the first server pass.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const supported = artifact.type === "html";
  // Augment the body with KaTeX once per artifact so opening/closing
  // the modal repeatedly doesn't re-string-replace each time.
  const srcDoc = useMemo(
    () => (supported ? injectKatex(artifact.body) : artifact.body),
    [artifact.body, supported],
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 my-1 px-2.5 py-1.5 rounded border border-amber-700/40 bg-amber-900/15 hover:border-amber-500/70 hover:bg-amber-900/30 text-amber-100 transition-colors"
        title={supported ? "Open artifact" : "View source (unsupported type)"}
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span className="text-xs font-mono">{artifact.title}</span>
        <span className="text-[9px] uppercase tracking-wider opacity-50 font-mono">
          {artifact.type}
        </span>
      </button>

      {open && mounted && createPortal(
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur flex flex-col"
          style={{ zIndex: FULLSCREEN_Z }}
        >
          <div className="px-3 py-2 border-b border-[#1f1f1f] flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="font-display text-sm tracking-wide">
              {artifact.title}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-mono opacity-50">
              {artifact.type}
            </span>
            <span className="ml-auto flex items-center gap-1">
              <button
                onClick={() => setShowSource((v) => !v)}
                title={showSource ? "Show rendered" : "View source"}
                aria-label={showSource ? "Show rendered" : "View source"}
                className={
                  "p-1 rounded hover:bg-[#1a1a1a] " +
                  (showSource ? "text-amber-300" : "opacity-60 hover:opacity-100")
                }
              >
                <CodeIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-1 rounded hover:bg-[#1a1a1a]"
              >
                <X className="w-4 h-4 opacity-60 hover:opacity-100" />
              </button>
            </span>
          </div>

          {showSource || !supported ? (
            <pre className="flex-1 overflow-auto p-3 text-xs font-mono whitespace-pre-wrap m-0 bg-[#050505]">
              {artifact.body}
            </pre>
          ) : (
            <iframe
              title={artifact.title}
              name={artifact.id}
              // allow-scripts, NOT allow-same-origin — the iframe lives
              // at a null origin so JS inside can't read parent state
              // or call mochi's API.
              sandbox="allow-scripts"
              srcDoc={srcDoc}
              className="flex-1 w-full bg-white border-0 block"
            />
          )}
        </div>,
        document.body,
      )}
    </>
  );
}
