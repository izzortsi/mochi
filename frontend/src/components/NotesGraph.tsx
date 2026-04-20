"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  forceSimulation, forceManyBody, forceLink, forceCenter, forceCollide,
  forceX, forceY,
  type Simulation, type SimulationNodeDatum, type SimulationLinkDatum,
} from "d3-force";
import type { NotesGraphData } from "@/lib/types";

interface Node extends SimulationNodeDatum {
  id: string;
  label: string;
  domain: string;
  tags: string[];
}
interface Link extends SimulationLinkDatum<Node> { source: string | Node; target: string | Node; }

const DOMAIN_PALETTE = [
  "#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4",
  "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#84cc16",
];

function domainColor(domain: string, domains: string[]): string {
  const idx = domains.indexOf(domain);
  return DOMAIN_PALETTE[idx % DOMAIN_PALETTE.length] ?? "#6366f1";
}

export function NotesGraph({ data, cacheKey, height = 560 }: { data: NotesGraphData; cacheKey: string; height?: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();
  const [tick, setTick] = useState(0);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });

  const nodesRef = useRef<Node[]>([]);
  const linksRef = useRef<Link[]>([]);
  const simRef = useRef<Simulation<Node, Link> | null>(null);

  const domains = [...new Set(data.nodes.map(n => n.domain).filter(Boolean))].sort();

  useEffect(() => {
    const nodes: Node[] = data.nodes.map(n => ({
      id: n.id, label: n.label, domain: n.domain, tags: n.tags,
    }));
    const links: Link[] = data.edges.map(e => ({ source: e.from, target: e.to }));

    try {
      const raw = localStorage.getItem(`study-plan.notes-graph.${cacheKey}`);
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
      .force("link", forceLink<Node, Link>(links).id(d => d.id).distance(90).strength(0.4))
      .force("charge", forceManyBody<Node>().strength(-80))
      .force("center", forceCenter(400, height / 2))
      .force("x", forceX<Node>(400).strength(0.08))
      .force("y", forceY<Node>(height / 2).strength(0.08))
      .force("collide", forceCollide<Node>().radius(22))
      .alphaDecay(0.03);

    sim.on("tick", () => setTick(t => t + 1));
    sim.on("end", () => {
      const out: Record<string, { x: number; y: number }> = {};
      for (const n of nodes) if (n.x !== undefined && n.y !== undefined) out[n.id] = { x: n.x, y: n.y };
      try { localStorage.setItem(`study-plan.notes-graph.${cacheKey}`, JSON.stringify(out)); } catch { /* ignore */ }
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
    <div>
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
        <g transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}>
          {linksRef.current.map((l, i) => {
            const s = typeof l.source === "object" ? l.source as Node : nodesRef.current.find(n => n.id === l.source);
            const t = typeof l.target === "object" ? l.target as Node : nodesRef.current.find(n => n.id === l.target);
            if (!s || !t || s.x == null || t.x == null) return null;
            return <line key={i} x1={s.x} y1={s.y} x2={t.x} y2={t.y} stroke="#2a2a2a" strokeWidth={1.5} />;
          })}
          {nodesRef.current.map(n => {
            const fill = n.domain ? domainColor(n.domain, domains) : "#404040";
            return (
              <g
                key={n.id}
                transform={`translate(${n.x ?? 0}, ${n.y ?? 0})`}
                onMouseDown={(e) => onMouseDownNode(e, n.id)}
                onClick={() => { if (!didDragRef.current) router.push(`/notes/${encodeURIComponent(n.id)}`); }}
                style={{ cursor: "pointer" }}
              >
                <circle r={14} fill={fill} stroke="#000000" strokeWidth={2} />
                <text y={26} textAnchor="middle" fill="#f5f0e8" fontSize="9" fontFamily="JetBrains Mono, monospace">
                  {n.label.length > 28 ? n.label.slice(0, 26) + "…" : n.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      <div className="flex flex-wrap gap-3 mt-3">
        {domains.map(d => (
          <span key={d} className="flex items-center gap-1.5 text-xs">
            <span className="w-3 h-3 rounded-full" style={{ background: domainColor(d, domains) }} />
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
