"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, Trash2, ExternalLink } from "lucide-react";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import { MarkdownContent } from "@/components/MarkdownContent";
import type { ChatThread, TutorNote, CourseSummary } from "@/lib/types";

interface CardRef {
  courseId: number;
  dayId: number;
  tier: string;
  taskIndex: number;
}

function parseCardUid(uid: string): CardRef | null {
  const m = uid.match(/^c(\d+)-d(\d+)-([^-]+)-(\d+)$/);
  if (!m) return null;
  return {
    courseId: parseInt(m[1], 10),
    dayId: parseInt(m[2], 10),
    tier: m[3],
    taskIndex: parseInt(m[4], 10),
  };
}

export default function MemoryPage() {
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [notes, setNotes] = useState<TutorNote[]>([]);
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setLoading(true);
    Promise.all([
      api.memory.fetchAllChats(),
      api.memory.fetchTutorNotes(),
      ontology.listCourses(),
    ])
      .then(([c, n, cs]) => {
        setThreads(c.threads);
        setNotes(n.notes);
        setCourses(cs);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(refresh, [refresh]);

  const courseById: Record<number, CourseSummary> = {};
  for (const c of courses) courseById[c.id] = c;

  const deleteTurn = async (courseId: number, index: number) => {
    await api.memory.deleteChatTurn(courseId, index);
    refresh();
  };

  const wipeCourse = async (courseId: number) => {
    const title = courseById[courseId]?.title ?? `course ${courseId}`;
    if (!confirm(`Wipe all chat for ${title}?`)) return;
    await api.memory.wipeChat(courseId);
    refresh();
  };

  const deleteNote = async (id: string) => {
    await api.memory.deleteTutorNote(id);
    refresh();
  };

  if (loading) return <div className="opacity-50">loading…</div>;

  // Group tutor notes by course (derived from cardUid prefix), then by cardUid
  // within each course. Cards that don't parse land under "unknown".
  type CourseNoteGroup = { courseId: number | null; byCard: Record<string, TutorNote[]> };
  const courseGroups = new Map<number | "unknown", CourseNoteGroup>();
  for (const n of notes) {
    const ref = parseCardUid(n.cardUid);
    const key: number | "unknown" = ref?.courseId ?? "unknown";
    let group = courseGroups.get(key);
    if (!group) {
      group = { courseId: ref?.courseId ?? null, byCard: {} };
      courseGroups.set(key, group);
    }
    (group.byCard[n.cardUid] ||= []).push(n);
  }
  const noteCourseKeys = Array.from(courseGroups.keys()).sort((a, b) => {
    if (a === "unknown") return 1;
    if (b === "unknown") return -1;
    return (a as number) - (b as number);
  });

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/"
        className="text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100 flex items-center gap-1 mb-4"
      >
        <ChevronLeft className="w-3 h-3" /> courses
      </Link>

      <h1 className="font-display text-2xl mb-1">Memory</h1>
      <p className="text-xs opacity-60 mb-6 font-mono">
        Everything the tutor remembers: chat threads per course, and tutor notes per session.
        Delete what you don&apos;t want it to keep.
      </p>

      <section className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-wider opacity-70 mb-3 border-b border-[#1a1a1a] pb-1">
          Chat threads
        </h2>
        {threads.length === 0 && (
          <div className="text-xs opacity-40 italic font-mono">no chat recorded yet</div>
        )}
        <div className="space-y-4">
          {threads.map((t) => {
            const isNotesScope = t.courseId === 0;
            const course = courseById[t.courseId];
            const label = isNotesScope ? "notes" : `course ${t.courseId}`;
            const openHref = isNotesScope ? "/notes" : `/course/${t.courseId}`;
            const titleNode = isNotesScope ? (
              <Link
                href="/notes"
                className="text-sm font-display truncate hover:underline decoration-neutral-600 text-neutral-100"
              >
                Knowledge base
              </Link>
            ) : course ? (
              <Link
                href={`/course/${t.courseId}`}
                className="text-sm font-display truncate hover:underline decoration-neutral-600 text-neutral-100"
              >
                {course.title}
              </Link>
            ) : (
              <span className="text-sm font-mono opacity-40 italic truncate">
                course deleted
              </span>
            );
            return (
              <div key={t.courseId} className="border border-[#1a1a1a] bg-[#0c0c0c]">
                <div className="flex items-center justify-between gap-3 px-3 py-2 border-b border-[#1a1a1a]">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider font-mono opacity-50 flex-shrink-0">
                      {label}
                    </span>
                    {titleNode}
                    <span className="text-[10px] font-mono opacity-40 flex-shrink-0">
                      · {t.messages.length} turn{t.messages.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {(course || isNotesScope) && (
                      <Link
                        href={openHref}
                        className="text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100 flex items-center gap-1"
                      >
                        open <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                    <button
                      onClick={() => wipeCourse(t.courseId)}
                      className="text-[10px] uppercase tracking-wider font-mono text-red-400 hover:text-red-300"
                    >
                      wipe
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-[#1a1a1a]">
                  {t.messages.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 px-3 py-2 hover:bg-[#0f0f0f]">
                      <span className="text-[10px] uppercase tracking-wider font-mono opacity-50 min-w-[60px] mt-0.5">
                        {m.role}
                      </span>
                      <div className="flex-1 text-sm min-w-0">
                        {m.role === "assistant" ? (
                          <div className="text-neutral-200">
                            <MarkdownContent content={m.content} compact />
                          </div>
                        ) : m.role === "tool" ? (
                          <pre className="font-mono text-xs opacity-60 whitespace-pre-wrap break-words m-0">
                            {m.content}
                          </pre>
                        ) : (
                          <div className="text-neutral-100 whitespace-pre-wrap">{m.content}</div>
                        )}
                        {m.timestamp && (
                          <div className="text-[10px] opacity-30 font-mono mt-1">{m.timestamp}</div>
                        )}
                      </div>
                      <button
                        onClick={() => deleteTurn(t.courseId, i)}
                        className="opacity-20 hover:opacity-70 transition-opacity flex-shrink-0"
                        aria-label="delete turn"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-wider opacity-70 mb-3 border-b border-[#1a1a1a] pb-1">
          Tutor notes
        </h2>
        {noteCourseKeys.length === 0 && (
          <div className="text-xs opacity-40 italic font-mono">
            no tutor notes yet — they appear as the tutor observes your sessions
          </div>
        )}
        <div className="space-y-5">
          {noteCourseKeys.map((key) => {
            const group = courseGroups.get(key)!;
            const course = group.courseId != null ? courseById[group.courseId] : undefined;
            const sortedCards = Object.keys(group.byCard).sort();
            return (
              <div key={String(key)}>
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-mono opacity-50">
                    {key === "unknown" ? "unknown" : `course ${key}`}
                  </span>
                  {course ? (
                    <Link
                      href={`/course/${group.courseId}`}
                      className="text-sm font-display hover:underline decoration-neutral-600 text-neutral-100"
                    >
                      {course.title}
                    </Link>
                  ) : (
                    <span className="text-sm font-mono opacity-40 italic">
                      {key === "unknown" ? "(orphan notes)" : "course deleted"}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {sortedCards.map((cardUid) => {
                    const ref = parseCardUid(cardUid);
                    return (
                      <div key={cardUid} className="border border-[#1a1a1a] bg-[#0c0c0c]">
                        <div className="px-3 py-2 border-b border-[#1a1a1a] flex items-center justify-between gap-3">
                          <span className="text-[11px] uppercase tracking-wider font-mono opacity-70 truncate">
                            {cardUid}
                          </span>
                          {ref && (
                            <Link
                              href={`/course/${ref.courseId}/day/${ref.dayId}`}
                              className="text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100 flex items-center gap-1 flex-shrink-0"
                            >
                              day {ref.dayId} <ExternalLink className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                        <div className="divide-y divide-[#1a1a1a]">
                          {group.byCard[cardUid].map((n) => (
                            <div key={n.id} className="flex items-start gap-3 px-3 py-2 hover:bg-[#0f0f0f]">
                              <span className="text-[10px] uppercase tracking-wider font-mono opacity-40 min-w-[50px] mt-0.5">
                                {n.source}
                              </span>
                              <div className="flex-1 text-sm">
                                <div className="text-neutral-200">{n.body}</div>
                                {n.createdAt && (
                                  <div className="text-[10px] opacity-30 font-mono mt-1">
                                    {n.createdAt}
                                  </div>
                                )}
                              </div>
                              <button
                                onClick={() => deleteNote(n.id)}
                                className="opacity-20 hover:opacity-70 transition-opacity flex-shrink-0"
                                aria-label="delete note"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
