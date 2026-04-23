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
  degree: number;
}

// Map degree centrality to a circle radius. sqrt scale keeps high-degree
// nodes visibly bigger without letting outliers dominate the canvas.
const NODE_RADIUS_BASE = 8;
const NODE_RADIUS_PER_SQRT_DEGREE = 3;
function nodeRadius(degree: number): number {
  return NODE_RADIUS_BASE + Math.sqrt(degree) * NODE_RADIUS_PER_SQRT_DEGREE;
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

// Extra repulsion applied only between same-domain nodes — spreads each
// cluster open without affecting between-cluster spacing. Larger value =
// more intra-cluster spread.
const INTRA_DOMAIN_REPULSION = 600;

// Custom d3-force that applies an inverse-square repulsion only between
// pairs of nodes that share a domain. d3 calls force(alpha) every tick;
// initialize(nodes) is invoked once when the force is added to the sim.
function intraDomainCharge(strength: number) {
  let nodes: Node[] = [];
  function force(alpha: number) {
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        if (a.domain !== b.domain) continue;
        const dx = (b.x ?? 0) - (a.x ?? 0);
        const dy = (b.y ?? 0) - (a.y ?? 0);
        const dist2 = Math.max(1, dx * dx + dy * dy);
        const f = (strength * alpha) / dist2;
        a.vx = (a.vx ?? 0) - dx * f;
        a.vy = (a.vy ?? 0) - dy * f;
        b.vx = (b.vx ?? 0) + dx * f;
        b.vy = (b.vy ?? 0) + dy * f;
      }
    }
  }
  force.initialize = (n: Node[]) => { nodes = n; };
  return force;
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
    // Compute degree centrality once per dataset. Every edge contributes
    // one to each endpoint; nodes with no edges score zero and render at
    // the minimum radius.
    const degrees: Record<string, number> = {};
    for (const e of data.edges) {
      degrees[e.from] = (degrees[e.from] ?? 0) + 1;
      degrees[e.to]   = (degrees[e.to]   ?? 0) + 1;
    }
    const nodes: Node[] = data.nodes.map(n => ({
      id: n.id,
      label: n.label,
      domain: n.domain,
      tags: n.tags,
      degree: degrees[n.id] ?? 0,
    }));
    const links: Link[] = data.edges.map(e => ({ source: e.from, target: e.to }));

    // Cache key is version-suffixed so old localStorage positions don't
    // seed the simulation after a layout change (centrality sizing,
    // degree-aware link strength, intra-domain repulsion). Bump the
    // version when the force config or data semantics change materially.
    const STORAGE_KEY = `study-plan.notes-graph.v2.${cacheKey}`;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const cached: Record<string, { x: number; y: number }> = JSON.parse(raw);
        for (const n of nodes) {
          if (cached[n.id]) { n.x = cached[n.id].x; n.y = cached[n.id].y; }
        }
      }
    } catch { /* ignore */ }

    nodesRef.current = nodes;
    linksRef.current = links;

    // Link strength inversely scales with the higher-degree endpoint's
    // degree, so a hub with 20 neighbours pulls each one less hard than
    // a leaf with 1 neighbour. Result: dense hubs splay open instead of
    // collapsing into a tight knot. Distance bumped from 90 -> 130 and
    // charge from -80 -> -140 to give the whole layout more breathing room.
    const sim = forceSimulation<Node, Link>(nodes)
      .force("link",
        forceLink<Node, Link>(links)
          .id(d => d.id)
          .distance(130)
          .strength(l => {
            const s = l.source as Node;
            const t = l.target as Node;
            return 1 / (1 + Math.max(s.degree ?? 1, t.degree ?? 1));
          }),
      )
      .force("charge", forceManyBody<Node>().strength(-140))
      .force("intra", intraDomainCharge(INTRA_DOMAIN_REPULSION))
      .force("center", forceCenter(400, height / 2))
      .force("x", forceX<Node>(400).strength(0.01))
      .force("y", forceY<Node>(height / 2).strength(0.01))
      .force("collide", forceCollide<Node>().radius(d => nodeRadius(d.degree) + 8))
      .alphaDecay(0.03);

    sim.on("tick", () => setTick(t => t + 1));
    sim.on("end", () => {
      const out: Record<string, { x: number; y: number }> = {};
      for (const n of nodes) if (n.x !== undefined && n.y !== undefined) out[n.id] = { x: n.x, y: n.y };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(out)); } catch { /* ignore */ }
    });
    simRef.current = sim;

    return () => { sim.stop(); };
  }, [data, cacheKey, height]);

  // React's onWheel is registered passive in React 17+, so e.preventDefault()
  // there is silently ignored and the page scrolls instead of zooming.
  // Attach the listener manually with { passive: false } to claim the wheel.
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      setTransform(t => ({ ...t, k: Math.max(0.3, Math.min(3, t.k * factor)) }));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

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
            const r = nodeRadius(n.degree);
            return (
              <g
                key={n.id}
                transform={`translate(${n.x ?? 0}, ${n.y ?? 0})`}
                onMouseDown={(e) => onMouseDownNode(e, n.id)}
                onClick={() => { if (!didDragRef.current) router.push(`/notes/${encodeURIComponent(n.id)}`); }}
                style={{ cursor: "pointer" }}
              >
                <circle r={r} fill={fill} stroke="#000000" strokeWidth={2} />
                <text y={r + 12} textAnchor="middle" fill="#f5f0e8" fontSize="9" fontFamily="JetBrains Mono, monospace">
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
