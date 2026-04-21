// Pixel-art SVG icons on a 16x16 grid. Use `className` for size + color
// (fill="currentColor"). shape-rendering="crispEdges" preserves pixel edges
// at any scale — pair with size-4 (16px) for 1:1 rendering.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  shapeRendering: "crispEdges" as const,
};

// Books standing on a shelf — courses (varied heights for clear silhouette)
export function CoursesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="2" height="11" />
      <rect x="5" y="4" width="2" height="9" />
      <rect x="8" y="3" width="2" height="10" />
      <rect x="11" y="5" width="2" height="8" />
      <rect x="1" y="13" width="13" height="1" />
    </svg>
  );
}

// Hourglass — review (SRS, scheduled recall)
export function ReviewIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="2" width="10" height="1" />
      <rect x="3" y="3" width="10" height="1" />
      <rect x="4" y="4" width="8" height="1" />
      <rect x="5" y="5" width="6" height="1" />
      <rect x="6" y="6" width="4" height="1" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="6" y="9" width="4" height="1" />
      <rect x="5" y="10" width="6" height="1" />
      <rect x="4" y="11" width="8" height="1" />
      <rect x="3" y="12" width="10" height="1" />
      <rect x="3" y="13" width="10" height="1" />
    </svg>
  );
}

// 2x2 grid of "cells" — memory (storage / SRS bank)
export function MemoryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="5" height="5" />
      <rect x="9" y="2" width="5" height="5" />
      <rect x="2" y="9" width="5" height="5" />
      <rect x="9" y="9" width="5" height="5" />
    </svg>
  );
}

// Connected nodes — concept map
export function ConceptsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      {/* edges (drawn first so nodes overlap them) */}
      <rect x="4" y="3" width="1" height="5" />
      <rect x="5" y="8" width="1" height="1" />
      <rect x="6" y="9" width="1" height="1" />
      <rect x="7" y="10" width="1" height="1" />
      <rect x="8" y="11" width="1" height="1" />
      <rect x="9" y="12" width="1" height="1" />
      <rect x="5" y="3" width="6" height="1" />
      {/* nodes */}
      <rect x="2" y="1" width="3" height="3" />
      <rect x="11" y="1" width="3" height="3" />
      <rect x="2" y="11" width="3" height="3" />
      <rect x="11" y="11" width="3" height="3" />
    </svg>
  );
}

// Stacked horizontal lines — notes (page of text)
export function NotesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="12" height="1" />
      <rect x="2" y="3" width="12" height="1" />
      <rect x="2" y="6" width="9" height="1" />
      <rect x="2" y="7" width="9" height="1" />
      <rect x="2" y="10" width="11" height="1" />
      <rect x="2" y="11" width="11" height="1" />
    </svg>
  );
}
