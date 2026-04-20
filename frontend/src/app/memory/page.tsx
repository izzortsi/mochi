"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, Trash2 } from "lucide-react";
import { api } from "@/lib/api";
import { MarkdownContent } from "@/components/MarkdownContent";
import type { ChatThread, TutorNote } from "@/lib/types";

export default function MemoryPage() {
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [notes, setNotes] = useState<TutorNote[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setLoading(true);
    Promise.all([api.memory.fetchAllChats(), api.memory.fetchTutorNotes()])
      .then(([c, n]) => {
        setThreads(c.threads);
        setNotes(n.notes);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(refresh, [refresh]);

  const deleteTurn = async (courseId: number, index: number) => {
    await api.memory.deleteChatTurn(courseId, index);
    refresh();
  };

  const wipeCourse = async (courseId: number) => {
    if (!confirm(`Wipe all chat for course ${courseId}?`)) return;
    await api.memory.wipeChat(courseId);
    refresh();
  };

  const deleteNote = async (id: string) => {
    await api.memory.deleteTutorNote(id);
    refresh();
  };

  if (loading) return <div className="opacity-50">loading…</div>;

  const notesByCard: Record<string, TutorNote[]> = {};
  for (const n of notes) (notesByCard[n.cardUid] ||= []).push(n);
  const sortedCards = Object.keys(notesByCard).sort();

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
          {threads.map((t) => (
            <div key={t.courseId} className="border border-[#1a1a1a] bg-[#0c0c0c]">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a1a1a]">
                <span className="text-xs uppercase tracking-wider font-mono opacity-70">
                  course {t.courseId} · {t.messages.length} turns
                </span>
                <button
                  onClick={() => wipeCourse(t.courseId)}
                  className="text-[10px] uppercase tracking-wider font-mono text-red-400 hover:text-red-300"
                >
                  wipe
                </button>
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
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-wider opacity-70 mb-3 border-b border-[#1a1a1a] pb-1">
          Tutor notes
        </h2>
        {sortedCards.length === 0 && (
          <div className="text-xs opacity-40 italic font-mono">
            no tutor notes yet — they appear as the tutor observes your sessions
          </div>
        )}
        <div className="space-y-3">
          {sortedCards.map((cardUid) => (
            <div key={cardUid} className="border border-[#1a1a1a] bg-[#0c0c0c]">
              <div className="px-3 py-2 border-b border-[#1a1a1a]">
                <span className="text-xs uppercase tracking-wider font-mono opacity-70">
                  {cardUid}
                </span>
              </div>
              <div className="divide-y divide-[#1a1a1a]">
                {notesByCard[cardUid].map((n) => (
                  <div key={n.id} className="flex items-start gap-3 px-3 py-2 hover:bg-[#0f0f0f]">
                    <span className="text-[10px] uppercase tracking-wider font-mono opacity-40 min-w-[50px] mt-0.5">
                      {n.source}
                    </span>
                    <div className="flex-1 text-sm">
                      <div className="text-neutral-200">{n.body}</div>
                      {n.createdAt && (
                        <div className="text-[10px] opacity-30 font-mono mt-1">{n.createdAt}</div>
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
          ))}
        </div>
      </section>
    </div>
  );
}
