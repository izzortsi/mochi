"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ontology } from "@/lib/ontology";
import type { NoteDetail } from "@/lib/types";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Tutor } from "@/components/Tutor";

const NOTES_SCOPE_COURSE_ID = 0;

function buildNoteContext(note: NoteDetail): string {
  const lines = [
    "# CURRENT PAGE",
    "View: Note detail",
    `Note id: ${note.id}`,
    `Title: ${note.title}`,
    note.domain ? `Domain: ${note.domain}` : null,
    note.tags.length ? `Tags: ${note.tags.join(", ")}` : null,
    note.source ? `Source: ${note.source}` : null,
    "",
    "Content:",
    note.content,
  ].filter(Boolean) as string[];

  if (note.related.length) {
    lines.push("");
    lines.push("Related notes:");
    for (const r of note.related) {
      lines.push(`- ${r.id}: ${r.title}${r.domain ? ` (${r.domain})` : ""}`);
    }
  }
  return lines.join("\n");
}

export default function NotePage() {
  const params = useParams<{ id: string }>();
  const noteId = decodeURIComponent(params.id);
  const [note, setNote] = useState<NoteDetail | null>(null);

  useEffect(() => {
    ontology.fetchNote(noteId).then(setNote).catch(() => setNote(null));
  }, [noteId]);

  if (!note) return <div className="opacity-50">loading…</div>;

  const pageContext = buildNoteContext(note);

  return (
    <div className="pr-[26rem]">
      <Link href="/notes" className="text-xs opacity-50 hover:opacity-100 flex items-center gap-1">
        <ChevronLeft className="w-3 h-3" /> knowledge base
      </Link>

      <div className="mt-4">
        <h1 className="font-display text-3xl">{note.title}</h1>
        <div className="flex items-center gap-3 mt-2">
          {note.domain && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-phase1/20 text-phase1">{note.domain}</span>
          )}
          {note.tags.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] opacity-60">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-none">
        <MarkdownContent content={note.content} />
      </div>

      {note.related.length > 0 && (
        <section className="mt-8 pt-6 border-t border-[#2a2a2a]">
          <h2 className="font-display text-lg opacity-70 mb-3">Related Notes</h2>
          <div className="flex flex-wrap gap-2">
            {note.related.map(r => (
              <Link
                key={r.id}
                href={`/notes/${encodeURIComponent(r.id)}`}
                className="px-3 py-1.5 rounded-lg border border-[#2a2a2a] bg-[#0c0c0c] hover:border-[#404040] text-sm"
              >
                {r.title}
                {r.domain && <span className="ml-2 opacity-40 text-xs">{r.domain}</span>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {note.source && (
        <div className="mt-6 text-xs opacity-40">Source: {note.source}</div>
      )}

      <Tutor
        courseId={NOTES_SCOPE_COURSE_ID}
        pageContext={pageContext}
        title={`Notes · ${note.title.slice(0, 30)}${note.title.length > 30 ? "…" : ""}`}
        placeholder="Ask about this note, request a clarification, or connect to another concept…"
      />
    </div>
  );
}
