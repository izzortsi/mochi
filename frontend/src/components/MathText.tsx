"use client";
import katex from "katex";
import { useEffect, useMemo } from "react";

// One-time client-only init for katex/contrib/copy-tex. The module's
// top-level executes `document.addEventListener("copy", …)` to swap
// rendered KaTeX with its LaTeX source on copy — but accessing
// `document` at module load crashes Next.js prerendering. A dynamic
// import inside useEffect defers it to the browser. The import has
// internal caching so calling this from many MathText instances still
// runs the side effect exactly once.
let _copyTexLoaded = false;
function loadCopyTexOnce() {
  if (_copyTexLoaded) return;
  _copyTexLoaded = true;
  // @ts-expect-error — contrib module ships no types
  import("katex/contrib/copy-tex").catch(() => {
    _copyTexLoaded = false; // allow retry if the import failed
  });
}

interface Props { children: string; className?: string; }

interface Segment { type: "text" | "inline" | "display"; value: string; }

function splitSegments(src: string): Segment[] {
  const out: Segment[] = [];
  let i = 0;
  while (i < src.length) {
    if (src.startsWith("$$", i)) {
      const end = src.indexOf("$$", i + 2);
      if (end === -1) { out.push({ type: "text", value: src.slice(i) }); break; }
      out.push({ type: "display", value: src.slice(i + 2, end) });
      i = end + 2;
    } else if (src[i] === "$") {
      const end = src.indexOf("$", i + 1);
      if (end === -1) { out.push({ type: "text", value: src.slice(i) }); break; }
      out.push({ type: "inline", value: src.slice(i + 1, end) });
      i = end + 1;
    } else {
      const nextDollar = src.indexOf("$", i);
      const end = nextDollar === -1 ? src.length : nextDollar;
      if (end > i) out.push({ type: "text", value: src.slice(i, end) });
      i = end;
    }
  }
  return out;
}

function renderSegment(seg: Segment, idx: number): React.ReactElement {
  if (seg.type === "text") {
    return <span key={idx} style={{ whiteSpace: "pre-wrap" }}>{seg.value}</span>;
  }
  const html = katex.renderToString(seg.value, {
    throwOnError: false,
    displayMode: seg.type === "display",
    output: "htmlAndMathml",
  });
  return <span key={idx} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MathText({ children, className }: Props) {
  const segments = useMemo(() => splitSegments(children), [children]);
  useEffect(() => { loadCopyTexOnce(); }, []);
  return <span className={className}>{segments.map(renderSegment)}</span>;
}
