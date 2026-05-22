"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Eraser, Undo2, X } from "lucide-react";

interface Props {
  onCommit: (blob: Blob) => void;
  onCancel: () => void;
}

// A single drawn stroke — the points captured between one pointerdown
// and its matching pointerup. Pressure defaults to 0.5 for inputs that
// don't report it (mouse, finger); stylus reports 0..1 and we vary
// the line width on it for a more natural ink feel.
type Point = { x: number; y: number; pressure: number };
type Stroke = { points: Point[]; pointerId: number };

// Stroke styling. Ink is near-black so the exported PNG carries crisp
// signal against the paper-white background; line width has a small
// pressure response so a stylus user sees their pressure honored
// without it being noisy on a mouse. Round caps + joins suppress
// visible mitre artifacts at stroke turning points.
const INK = "#0a0a0a";
const PAPER = "#fafafa";
const BASE_WIDTH = 1.5;
const PRESSURE_WIDTH = 2.5;

/**
 * A simple ink canvas the tutor can write into freehand — for sketching
 * math, diagrams, or handwriting that's easier to draw than type.
 *
 * Strokes are captured as point sequences and stored declaratively in a
 * ref-held stack. The visible canvas is rendered imperatively for
 * responsiveness (one segment per pointermove), and re-rendered from
 * the stack whenever a stroke ends or is undone — so the saved state
 * and the displayed state never drift after a completed action.
 *
 * Pressure controls stroke width; quadratic curves through midpoints
 * smooth the polyline so handwriting reads naturally even at slow
 * drawing speeds. Multi-touch is intentionally locked to a single
 * pointer to prevent accidental second-finger strokes from corrupting
 * the active one.
 *
 * On commit, the canvas is exported as a PNG blob via canvas.toBlob
 * and handed off to the parent — which routes it through the existing
 * image-attachment upload flow (POST /api/chat-image → addPendingImage).
 */
export function SketchInputPopover({ onCommit, onCancel }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const currentRef = useRef<Stroke | null>(null);
  const dprRef = useRef(1);
  // Mirror of strokesRef.current.length > 0 — drives the disabled
  // state of undo/clear/send buttons. Kept in React state so toolbar
  // affordances update visually without us forcing a re-render manually.
  const [hasInk, setHasInk] = useState(false);
  // Drag offset from the panel's natural centered position. The
  // backdrop centers the panel via flexbox; this state shifts it via
  // CSS transform when the user drags the header. Resets on re-open —
  // the modal is intentionally short-lived.
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  // While dragging, the pointer-down position plus the offset at that
  // moment — used to compute deltas on every pointer-move.
  const dragRef = useRef<{
    startX: number; startY: number;
    offsetX: number; offsetY: number;
  } | null>(null);

  // One-time canvas setup: size the backing buffer for the display
  // resolution × devicePixelRatio so ink stays crisp on HiDPI, scale
  // the context once so all drawing uses CSS pixel coordinates, paint
  // the paper background, and install the default ink styles.
  // Resize isn't observed — the popover panel is a fixed-size modal,
  // so the canvas dimensions established at mount remain valid.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = INK;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Take keyboard focus so the panel-level shortcuts (⌘↵ send,
    // ⌘Z undo, esc cancel) reach us without the user clicking first.
    panelRef.current?.focus();
  }, []);

  // Replay every saved stroke against a freshly-painted paper. Called
  // after a stroke completes (so the smoothed final geometry replaces
  // the rough incremental segments drawn during the gesture) and after
  // undo / clear (which mutate the stroke stack).
  const redraw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = dprRef.current;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = INK;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const stroke of strokesRef.current) drawStroke(ctx, stroke);
  };

  // Render one stroke. A single-point stroke (a tap) is drawn as a
  // small filled dot so it doesn't visually disappear; multi-point
  // strokes use quadratic curves through midpoints — a standard
  // smoothing trick that gives handwriting a natural, ink-like feel
  // without needing full curve interpolation.
  const drawStroke = (ctx: CanvasRenderingContext2D, stroke: Stroke) => {
    const pts = stroke.points;
    if (pts.length === 0) return;
    if (pts.length === 1) {
      const p = pts[0];
      ctx.beginPath();
      ctx.fillStyle = INK;
      ctx.arc(p.x, p.y, BASE_WIDTH * (0.5 + p.pressure), 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      ctx.lineWidth = BASE_WIDTH + a.pressure * PRESSURE_WIDTH;
      ctx.quadraticCurveTo(a.x, a.y, mx, my);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mx, my);
    }
    const last = pts[pts.length - 1];
    ctx.lineWidth = BASE_WIDTH + last.pressure * PRESSURE_WIDTH;
    ctx.lineTo(last.x, last.y);
    ctx.stroke();
  };

  // Convert a pointer event into a canvas-local point. clientX/Y are
  // viewport-relative; subtracting the bounding rect gives coordinates
  // that line up with the ctx.scale(dpr) already applied at init.
  // Pointer events with pressure==0 are non-stylus inputs (mouse,
  // unsupported touch) — substitute 0.5 so they get a stable
  // mid-weight stroke rather than degenerate hairlines.
  const ptFromEvent = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure > 0 ? e.pressure : 0.5,
    };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // Lock to one pointer at a time. A second finger or pen tip during
    // an active stroke is ignored, not allowed to clobber the in-flight
    // stroke. This matches how single-touch sketch apps behave and
    // avoids the corruption case of two pointers writing into one
    // stroke buffer.
    if (currentRef.current) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    currentRef.current = { points: [ptFromEvent(e)], pointerId: e.pointerId };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const stroke = currentRef.current;
    if (!stroke) return;
    if (stroke.pointerId !== e.pointerId) return;
    const p = ptFromEvent(e);
    stroke.points.push(p);
    // Incremental draw — just the latest segment. The full smoothed
    // version replaces this rough version on pointerup via redraw().
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pts = stroke.points;
    if (pts.length < 2) return;
    const a = pts[pts.length - 2];
    const b = pts[pts.length - 1];
    ctx.beginPath();
    ctx.lineWidth = BASE_WIDTH + b.pressure * PRESSURE_WIDTH;
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  };

  const endStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const stroke = currentRef.current;
    if (!stroke) return;
    if (stroke.pointerId !== e.pointerId) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Pointer capture may have already been released by the browser
      // when pointerCancel fires; releasing again throws. Safe to ignore.
    }
    strokesRef.current.push(stroke);
    currentRef.current = null;
    setHasInk(true);
    // Replay everything so the in-flight rough segments get replaced
    // with the smoothed quadratic version. Without this, the saved
    // stroke stack and the visible canvas would diverge slightly.
    redraw();
  };

  const undo = () => {
    if (strokesRef.current.length === 0) return;
    strokesRef.current.pop();
    setHasInk(strokesRef.current.length > 0);
    redraw();
  };

  const clear = () => {
    strokesRef.current = [];
    setHasInk(false);
    redraw();
  };

  // Keep at least DRAG_MARGIN px of the panel within the viewport so
  // the user can always grab the header to drag back. The panel is
  // centered by flex; offset.x/y shifts that center. Maximum |offset|
  // = viewport/2 + panel/2 - margin (derived from "panel edge must
  // stay within [margin, viewport - margin]").
  const DRAG_MARGIN = 40;
  const clampOffset = (pos: { x: number; y: number }) => {
    const panel = panelRef.current;
    if (!panel) return pos;
    const rect = panel.getBoundingClientRect();
    const maxX = window.innerWidth / 2 + rect.width / 2 - DRAG_MARGIN;
    const maxY = window.innerHeight / 2 + rect.height / 2 - DRAG_MARGIN;
    return {
      x: Math.max(-maxX, Math.min(maxX, pos.x)),
      y: Math.max(-maxY, Math.min(maxY, pos.y)),
    };
  };

  // Header is the drag handle. Clicks that originate on a button
  // inside the header (undo/clear/send/cancel) skip drag initiation
  // so the click still reaches its target.
  const onHeaderPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      offsetX: dragOffset.x,
      offsetY: dragOffset.y,
    };
  };

  const onHeaderPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    setDragOffset(clampOffset({
      x: d.offsetX + (e.clientX - d.startX),
      y: d.offsetY + (e.clientY - d.startY),
    }));
  };

  const onHeaderPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Pointer capture may already have been released by the browser
      // on pointerCancel; releasing again throws. Safe to ignore.
    }
    dragRef.current = null;
  };

  const commit = () => {
    const canvas = canvasRef.current;
    if (!canvas || strokesRef.current.length === 0) {
      onCancel();
      return;
    }
    canvas.toBlob((blob) => {
      if (blob) onCommit(blob);
      else onCancel();
    }, "image/png");
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
    } else if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      commit();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      undo();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onCancel}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        onKeyDown={onKey}
        // Transform shifts the panel from its flex-centered position
        // without changing layout. Width prefers 1100px but yields to
        // 90vw on narrow viewports so mobile still sees a usable
        // canvas — the original max-w-2xl is dropped since the new
        // width supersedes it.
        style={{ transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)` }}
        className="w-[min(1100px,90vw)] bg-[#0c0c0c] border border-[#2a2a2a] rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.6)] overflow-hidden focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          // cursor-move signals draggability on the title / hint area;
          // the button-group span overrides to cursor-pointer so the
          // four icon buttons don't pretend to be draggable. select-none
          // suppresses the text selection that would otherwise start
          // when the user drags across the title text.
          className="px-3 py-2 border-b border-[#1f1f1f] flex items-center gap-3 cursor-move select-none"
          onPointerDown={onHeaderPointerDown}
          onPointerMove={onHeaderPointerMove}
          onPointerUp={onHeaderPointerUp}
          onPointerCancel={onHeaderPointerUp}
        >
          <span className="font-display text-sm tracking-wide">Sketch</span>
          <span className="text-[10px] uppercase tracking-wider font-mono opacity-50">
            ⌘↵ send · ⌘Z undo · esc cancel
          </span>
          <span className="ml-auto flex items-center gap-1 cursor-pointer">
            <button
              onClick={undo}
              disabled={!hasInk}
              aria-label="Undo last stroke"
              title="Undo (⌘Z)"
              className="p-1 rounded hover:bg-[#1a1a1a] disabled:opacity-20"
            >
              <Undo2 className="w-4 h-4 opacity-60 hover:opacity-100" />
            </button>
            <button
              onClick={clear}
              disabled={!hasInk}
              aria-label="Clear canvas"
              title="Clear"
              className="p-1 rounded hover:bg-[#1a1a1a] disabled:opacity-20"
            >
              <Eraser className="w-4 h-4 opacity-60 hover:opacity-100" />
            </button>
            <button
              onClick={commit}
              disabled={!hasInk}
              aria-label="Send sketch"
              title="Send (⌘↵)"
              className="p-1 rounded hover:bg-[#1a1a1a] text-amber-300 disabled:opacity-20"
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
          <canvas
            ref={canvasRef}
            tabIndex={-1}
            // touch-none keeps the browser from scrolling the page when
            // the user drags a finger across the canvas on mobile.
            // bg-white gives the ink crisp contrast; the tutor sees the
            // white-paper PNG instead of pulling colors from the
            // surrounding dark UI.
            className="w-full h-[60vh] max-h-[420px] bg-white rounded border border-[#1f1f1f] cursor-crosshair touch-none focus:outline-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endStroke}
            onPointerCancel={endStroke}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
