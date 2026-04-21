"use client";
import { useEffect, useState } from "react";
import { ontology } from "@/lib/ontology";
import type { NotesGraphData, NoteSummary } from "@/lib/types";
import { NotesGraph } from "@/components/NotesGraph";
import { Tutor } from "@/components/Tutor";

const NOTES_SCOPE_COURSE_ID = 0;

function buildNotesListContext(
  notes: NoteSummary[],
  domains: string[],
  filter: string,
): string {
  const lines = [
    "# CURRENT PAGE",
    "View: Knowledge base (notes list)",
    `Total notes: ${notes.length}`,
    `Domains: ${domains.join(", ") || "(none)"}`,
    filter ? `Active domain filter: ${filter}` : "Active domain filter: (none)",
    "",
    "Recent notes:",
    ...notes.slice(0, 30).map(n => {
      const tagStr = n.tags.length ? ` [${n.tags.join(", ")}]` : "";
      return `- ${n.id}: ${n.title} (${n.domain || "no domain"})${tagStr}`;
    }),
  ];
  return lines.join("\n");
}

function truncate(s: string, len = 120): string {
  const flat = s.replace(/\n+/g, " ").replace(/\$\$?/g, "").trim();
  return flat.length > len ? flat.slice(0, len).trim() + "…" : flat;
}

type Tab = "graph" | "list";

export default function NotesPage() {
  const [graphData, setGraphData] = useState<NotesGraphData | null>(null);
  const [notes, setNotes] = useState<NoteSummary[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [filter, setFilter] = useState("");
  const [tab, setTab] = useState<Tab>("graph");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      ontology.fetchNotesGraph().catch(() => null),
      ontology.listNotes().catch(() => []),
      ontology.listDomains().then(r => r.domains).catch(() => []),
    ]).then(([g, n, d]) => {
      if (!g && !n.length) setError("No notes found. Import a PDF to generate notes alongside your course.");
      setGraphData(g);
      setNotes(n);
      setDomains(d);
    });
  }, []);

  const filtered = filter
    ? notes.filter(n => n.domain === filter)
    : notes;

  const filteredGraph: NotesGraphData | null = graphData && filter
    ? (() => {
        const keep = new Set(
          graphData.nodes.filter(n => n.domain === filter).map(n => n.id),
        );
        return {
          nodes: graphData.nodes.filter(n => keep.has(n.id)),
          edges: graphData.edges.filter(e => keep.has(e.from) && keep.has(e.to)),
        };
      })()
    : graphData;

  if (error && !graphData) return <div className="opacity-50">{error}</div>;

  const pageContext = buildNotesListContext(notes, domains, filter);

  return (
    <div className="mx-[calc(50%-50vw)] w-screen px-4 pr-[26rem]">
      <h1 className="font-display text-3xl mb-2">Knowledge Base</h1>
      <p className="text-sm opacity-60 mb-4">Atomic notes extracted from your courses. Click a node to read.</p>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex rounded-lg border border-[#2a2a2a] overflow-hidden">
          <button
            className={`px-3 py-1.5 text-sm ${tab === "graph" ? "bg-[#2a2a2a]" : "hover:bg-[#1a1a1a]"}`}
            onClick={() => setTab("graph")}
          >Graph</button>
          <button
            className={`px-3 py-1.5 text-sm ${tab === "list" ? "bg-[#2a2a2a]" : "hover:bg-[#1a1a1a]"}`}
            onClick={() => setTab("list")}
          >List</button>
        </div>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="bg-[#0c0c0c] border border-[#2a2a2a] rounded px-2 py-1 text-sm"
        >
          <option value="">All domains</option>
          {domains.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <span className="text-xs opacity-50">{filtered.length} notes</span>
      </div>

      {tab === "graph" && filteredGraph && filteredGraph.nodes.length > 0 && (
        <NotesGraph
          data={filteredGraph}
          cacheKey={filter || "global"}
          height={560}
        />
      )}
      {tab === "graph" && filteredGraph && filteredGraph.nodes.length === 0 && (
        <div className="opacity-50">
          {filter
            ? `No notes in "${filter}". Clear the filter or import more material.`
            : "No notes yet. Import a PDF to generate notes."}
        </div>
      )}

      {tab === "list" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(n => (
            <a
              key={n.id}
              href={`/notes/${encodeURIComponent(n.id)}`}
              className="block p-4 rounded-xl border border-[#2a2a2a] bg-[#0c0c0c] hover:border-[#404040] transition-colors"
            >
              <div className="font-display text-base mb-1">{n.title}</div>
              {n.domain && <div className="text-xs opacity-50 mb-2">{n.domain}</div>}
              {n.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {n.tags.map(t => (
                    <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-[#1a1a1a] opacity-60">{t}</span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}

      <Tutor
        courseId={NOTES_SCOPE_COURSE_ID}
        pageContext={pageContext}
        title="Knowledge base"
        placeholder="Ask about a note, search for a concept, or request a connection…"
      />
    </div>
  );
}
