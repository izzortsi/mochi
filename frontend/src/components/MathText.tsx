"use client";
import katex from "katex";
import { useMemo } from "react";

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
    output: "html",
  });
  return <span key={idx} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MathText({ children, className }: Props) {
  const segments = useMemo(() => splitSegments(children), [children]);
  return <span className={className}>{segments.map(renderSegment)}</span>;
}
