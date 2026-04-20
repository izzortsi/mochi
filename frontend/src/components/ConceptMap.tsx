"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  forceSimulation, forceManyBody, forceLink, forceCenter, forceCollide,
  forceX, forceY,
  type Simulation, type SimulationNodeDatum, type SimulationLinkDatum,
} from "d3-force";
import type { ConceptMapData } from "@/lib/types";

interface Node extends SimulationNodeDatum {
  id: string;
  label: string;
  mastery: "not-started" | "learning" | "mastered";
  cardCount: number;
}
interface Link extends SimulationLinkDatum<Node> { source: string | Node; target: string | Node; }

const MASTERY_FILL: Record<Node["mastery"], string> = {
  "not-started": "#404040",
  "learning": "#f59e0b",
  "mastered": "#22c55e",
};

export function ConceptMap({ data, cacheKey, height = 480 }: { data: ConceptMapData; cacheKey: string; height?: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();
  const [tick, setTick] = useState(0);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });

  const nodesRef = useRef<Node[]>([]);
  const linksRef = useRef<Link[]>([]);
  const simRef = useRef<Simulation<Node, Link> | null>(null);

  useEffect(() => {
    const nodes: Node[] = data.nodes.map(n => ({
      id: n.id, label: n.label, mastery: n.mastery, cardCount: n.cardCount,
    }));
    const links: Link[] = data.edges.map(e => ({ source: e.from, target: e.to }));

    try {
      const raw = localStorage.getItem(`study-plan.concept-map.${cacheKey}`);
      if (raw) {
        const cached: Record<string, { x: number; y: number }> = JSON.parse(raw);
        for (const n of nodes) {
          if (cached[n.id]) { n.x = cached[n.id].x; n.y = cached[n.id].y; }
        }
      }
    } catch { /* ignore */ }

    nodesRef.current = nodes;
    linksRef.current = links;

    const sim = forceSimulation<Node, Link>(nodes)
      .force("link", forceLink<Node, Link>(links).id(d => d.id).distance(80).strength(0.5))
      .force("charge", forceManyBody<Node>().strength(-90))
      .force("center", forceCenter(320, height / 2))
      .force("x", forceX<Node>(320).strength(0.01))
      .force("y", forceY<Node>(height / 2).strength(0.01))
      .force("collide", forceCollide<Node>().radius(d => 16 + d.cardCount * 2))
      .alphaDecay(0.03);

    sim.on("tick", () => setTick(t => t + 1));
    sim.on("end", () => {
      const out: Record<string, { x: number; y: number }> = {};
      for (const n of nodes) if (n.x !== undefined && n.y !== undefined) out[n.id] = { x: n.x, y: n.y };
      try { localStorage.setItem(`study-plan.concept-map.${cacheKey}`, JSON.stringify(out)); } catch { /* ignore */ }
    });
    simRef.current = sim;

    return () => { sim.stop(); };
  }, [data, cacheKey, height]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => ({ ...t, k: Math.max(0.3, Math.min(3, t.k * factor)) }));
  };

  const dragState = useRef<{ dragging: boolean; nodeId: string | null; panStart: { x: number; y: number } | null }>({
    dragging: false, nodeId: null, panStart: null,
  });
  const didDragRef = useRef(false);

  const onMouseDownNode = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    didDragRef.current = false;
    dragState.current = { dragging: true, nodeId: id, panStart: null };
  };
  const onMouseDownBg = (e: React.MouseEvent) => {
    didDragRef.current = false;
    dragState.current = { dragging: true, nodeId: null, panStart: { x: e.clientX - transform.x, y: e.clientY - transform.y } };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragState.current.dragging) return;
    if (dragState.current.nodeId) {
      const rect = svgRef.current!.getBoundingClientRect();
      const sx = (e.clientX - rect.left - transform.x) / transform.k;
      const sy = (e.clientY - rect.top - transform.y) / transform.k;
      const n = nodesRef.current.find(n => n.id === dragState.current.nodeId);
      if (n) { n.fx = sx; n.fy = sy; }
      simRef.current?.alpha(0.3).restart();
      didDragRef.current = true;
    } else if (dragState.current.panStart) {
      const start = dragState.current.panStart;
      setTransform(t => ({ ...t, x: e.clientX - start.x, y: e.clientY - start.y }));
      didDragRef.current = true;
    }
  };
  const onMouseUp = () => {
    if (dragState.current.dragging && dragState.current.nodeId) {
      const n = nodesRef.current.find(n => n.id === dragState.current.nodeId);
      if (n) { n.fx = undefined; n.fy = undefined; }
    }
    dragState.current = { dragging: false, nodeId: null, panStart: null };
  };

  void tick;

  return (
    <svg
      ref={svgRef}
      width="100%"
      height={height}
      onWheel={onWheel}
      onMouseDown={onMouseDownBg}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{ background: "#050505", borderRadius: 12, cursor: "grab" }}
    >
      <defs>
        <marker id="arrow" viewBox="0 -5 10 10" refX="18" refY="0" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,-5L10,0L0,5" fill="#444" />
        </marker>
      </defs>
      <g transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}>
        {linksRef.current.map((l, i) => {
          const s = typeof l.source === "object" ? l.source as Node : nodesRef.current.find(n => n.id === l.source);
          const t = typeof l.target === "object" ? l.target as Node : nodesRef.current.find(n => n.id === l.target);
          if (!s || !t || s.x == null || t.x == null) return null;
          return <line key={i} x1={s.x} y1={s.y} x2={t.x} y2={t.y} stroke="#2a2a2a" strokeWidth={1.5} markerEnd="url(#arrow)" />;
        })}
        {nodesRef.current.map(n => (
          <g
            key={n.id}
            transform={`translate(${n.x ?? 0}, ${n.y ?? 0})`}
            onMouseDown={(e) => onMouseDownNode(e, n.id)}
            onClick={() => { if (!didDragRef.current) router.push(`/concept/${encodeURIComponent(n.id)}`); }}
            style={{ cursor: "pointer" }}
          >
            <circle r={12 + n.cardCount * 2} fill={MASTERY_FILL[n.mastery]} stroke="#000000" strokeWidth={2} />
            <text y={28} textAnchor="middle" fill="#f5f0e8" fontSize="10" fontFamily="JetBrains Mono, monospace">{n.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
