"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Trash2, ExternalLink } from "lucide-react";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import { ArtifactBlock } from "@/components/ArtifactBlock";
import { ARTIFACT_SAVED_EVENT } from "@/lib/use-tutor-engine";
import { useSetTutorContext } from "@/lib/tutor-context";
import { segmentAssistantContent } from "@/lib/artifacts";
import type { ArtifactRecord, CourseSummary } from "@/lib/types";

const BACKFILL_FLAG = "mochi-artifacts-backfilled";

// Scan every existing chat thread for <artifact> blocks and mirror them
// into the artifacts store. The save endpoint is idempotent (upsert by
// id), so running this twice is harmless — but the sessionStorage flag
// keeps it to once per browser session anyway.
async function backfillFromChatHistory(): Promise<number> {
  if (typeof window !== "undefined" && window.sessionStorage.getItem(BACKFILL_FLAG)) return 0;
  const { threads } = await api.memory.fetchAllChats();
  let count = 0;
  for (const t of threads) {
    for (const ch of t.channels) {
      const messages = ch.messages ?? [];
      for (const m of messages) {
        if (m.role !== "assistant") continue;
        const segments = segmentAssistantContent(m.content);
        for (const seg of segments) {
          if (seg.kind !== "artifact") continue;
          await api.artifacts.save({
            id: seg.artifact.id,
            type: seg.artifact.type,
            title: seg.artifact.title,
            body: seg.artifact.body,
            courseId: t.courseId,
          }).catch(() => {});
          count += 1;
        }
      }
    }
  }
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(BACKFILL_FLAG, "1");
  }
  return count;
}

const ARTIFACTS_SCOPE_COURSE_ID = 0;

function buildArtifactsContext(rows: ArtifactRecord[]): string {
  const lines = [
    "# CURRENT PAGE",
    "View: Artifacts library",
    `Total artifacts: ${rows.length}`,
    "",
    "Recent artifacts:",
    ...rows.slice(0, 30).map((a) => `- ${a.id} (${a.type}) "${a.title}" — course ${a.courseId}`),
  ];
  return lines.join("\n");
}

function formatTimestamp(ts: string): string {
  if (!ts) return "";
  // Cheap ISO trim — drops fractional seconds + tz from "2026-05-06T13:42:01.123456".
  return ts.replace("T", " ").slice(0, 16);
}

export default function ArtifactsPage() {
  const [rows, setRows] = useState<ArtifactRecord[]>([]);
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    Promise.all([
      api.artifacts.list().catch(() => ({ artifacts: [] as ArtifactRecord[] })),
      ontology.listCourses().catch(() => [] as CourseSummary[]),
    ]).then(([r, cs]) => {
      setRows(r.artifacts);
      setCourses(cs);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    // Backfill once per session, then refresh. The backfill is a no-op
    // when there's nothing in chat history matching <artifact>.
    backfillFromChatHistory()
      .catch(() => 0)
      .finally(refresh);
  }, [refresh]);

  // Live-refresh while the tutor is open in the background — every saved
  // artifact emits ARTIFACT_SAVED_EVENT.
  useEffect(() => {
    const handler = () => refresh();
    window.addEventListener(ARTIFACT_SAVED_EVENT, handler);
    return () => window.removeEventListener(ARTIFACT_SAVED_EVENT, handler);
  }, [refresh]);

  const pageContext = buildArtifactsContext(rows);
  useSetTutorContext({
    courseId: ARTIFACTS_SCOPE_COURSE_ID,
    pageContext,
    title: "Artifacts",
    placeholder: "Ask the tutor to remix or extend an artifact, or to author a new one…",
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this artifact? It will still live in the chat history.")) return;
    await api.artifacts.delete(id);
    refresh();
  };

  const courseById: Record<number, CourseSummary> = {};
  for (const c of courses) courseById[c.id] = c;

  // Group by course so users can find a graph they made for "Linear Algebra"
  // without scrolling through everything.
  const groups = new Map<number, ArtifactRecord[]>();
  for (const r of rows) {
    if (!groups.has(r.courseId)) groups.set(r.courseId, []);
    groups.get(r.courseId)!.push(r);
  }
  const courseKeys = Array.from(groups.keys()).sort((a, b) => {
    if (a === 0) return -1;
    if (b === 0) return 1;
    return a - b;
  });

  if (loading) return <div className="opacity-50">loading…</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-display text-2xl mb-1">Artifacts</h1>
      <p className="text-xs opacity-60 mb-6 font-mono">
        Interactive documents the tutor authored mid-chat. Click any pill to open it in the sandboxed viewer.
      </p>

      {rows.length === 0 && (
        <div className="text-xs opacity-40 italic font-mono">
          no artifacts yet — ask the tutor to demonstrate a concept and one will appear here
        </div>
      )}

      <div className="space-y-7">
        {courseKeys.map((cid) => {
          const list = groups.get(cid)!;
          const isNotesScope = cid === 0;
          const course = courseById[cid];
          const label = isNotesScope ? "notes / general" : `course ${cid}`;
          return (
            <section key={cid}>
              <div className="mb-2 flex items-baseline gap-2 border-b border-[#1a1a1a] pb-1">
                <span className="text-[10px] uppercase tracking-wider font-mono opacity-50">
                  {label}
                </span>
                {isNotesScope ? (
                  <Link
                    href="/notes"
                    className="text-sm font-display hover:underline decoration-neutral-600 text-neutral-100 flex items-center gap-1"
                  >
                    Knowledge base <ExternalLink className="w-3 h-3" />
                  </Link>
                ) : course ? (
                  <Link
                    href={`/course/${cid}`}
                    className="text-sm font-display hover:underline decoration-neutral-600 text-neutral-100 flex items-center gap-1"
                  >
                    {course.title} <ExternalLink className="w-3 h-3" />
                  </Link>
                ) : (
                  <span className="text-sm font-mono opacity-40 italic">
                    course deleted
                  </span>
                )}
                <span className="ml-auto text-[10px] font-mono opacity-40">
                  {list.length} artifact{list.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="space-y-2">
                {list.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 px-3 py-2 border border-[#1a1a1a] bg-[#0c0c0c]"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="mb-1">
                        <ArtifactBlock
                          artifact={{
                            id: a.id,
                            type: a.type,
                            title: a.title || a.id,
                            body: a.body,
                          }}
                        />
                      </div>
                      <div className="text-[10px] font-mono opacity-40 flex items-center gap-3">
                        <span>{a.id}</span>
                        {a.createdAt && <span>{formatTimestamp(a.createdAt)}</span>}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="opacity-20 hover:opacity-70 transition-opacity flex-shrink-0 mt-1"
                      aria-label="delete artifact"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
