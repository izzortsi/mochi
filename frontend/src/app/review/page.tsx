"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { api } from "@/lib/api";
import { MathText } from "@/components/MathText";
import type { SrsItem, SrsStats, SrsVerdict } from "@/lib/types";
import { useSetTutorContext } from "@/lib/tutor-context";

function buildReviewContext(args: {
  current: SrsItem | undefined;
  idx: number;
  queueLen: number;
  totalDue: number;
  stats: SrsStats | null;
  reveal: boolean;
}): string {
  const { current, idx, queueLen, totalDue, stats, reveal } = args;
  const lines: string[] = ["# CURRENT PAGE", "View: SRS Review (spaced repetition queue)"];
  if (stats) {
    const boxes = Object.entries(stats.byBox)
      .map(([k, v]) => `${k}→${v}`)
      .join("  ");
    lines.push(`Tracked: ${stats.total} items · Due today: ${totalDue} · Boxes: ${boxes}`);
  }
  if (!current) {
    lines.push("", "Queue is empty — user has cleared today's reviews.");
    return lines.join("\n");
  }
  lines.push("", `Position: ${idx + 1} of ${queueLen}`);
  lines.push(`Current item: card-uid ${current.cardUid} · box ${current.box} · ${current.lapses} lapse(s)`);
  if (current.concept) lines.push(`Concept: ${current.concept}`);
  lines.push(`Answer revealed: ${reveal ? "yes" : "no (user is still trying to recall)"}`);
  lines.push("", "Prompt:");
  lines.push(current.prompt.length > 400 ? current.prompt.slice(0, 400) + "…" : current.prompt);
  if (reveal && current.answer) {
    lines.push("", "Answer (now visible to the user):");
    lines.push(current.answer.length > 400 ? current.answer.slice(0, 400) + "…" : current.answer);
  }
  return lines.join("\n");
}

export default function ReviewPage() {
  const [queue, setQueue] = useState<SrsItem[]>([]);
  const [totalDue, setTotalDue] = useState(0);
  const [stats, setStats] = useState<SrsStats | null>(null);
  const [idx, setIdx] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setLoading(true);
    Promise.all([api.srsDue(50), api.srsStats()])
      .then(([due, s]) => {
        setQueue(due.items);
        setTotalDue(due.totalDue);
        setStats(s);
        setIdx(0);
        setReveal(false);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(refresh, [refresh]);

  const grade = async (verdict: SrsVerdict) => {
    const current = queue[idx];
    if (!current) return;
    await api.srsReview(current.id, verdict);
    setReveal(false);
    if (idx + 1 >= queue.length) {
      refresh();
    } else {
      setIdx((i) => i + 1);
    }
  };

  const current = queue[idx];
  const done = !current;

  useSetTutorContext({
    courseId: 0,
    pageContext: loading
      ? "# CURRENT PAGE\nView: SRS Review (loading)"
      : buildReviewContext({ current, idx, queueLen: queue.length, totalDue, stats, reveal }),
    title: "Tutor · Review",
    placeholder: done
      ? "Reviews cleared. Ask anything…"
      : "Stuck? Ask for a hint without revealing the answer…",
  });

  if (loading) return <div className="opacity-50">loading…</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-xs opacity-50 hover:opacity-100 flex items-center gap-1 mb-6"
      >
        <ChevronLeft className="w-3 h-3" /> courses
      </Link>

      <h1 className="font-display text-3xl mb-2">Review</h1>
      <p className="text-sm opacity-60 mb-6">
        Answer from memory. No peeking until you&apos;ve tried.
      </p>

      {stats && (
        <div className="mb-6 flex gap-4 text-xs opacity-60">
          <span>{stats.total} items tracked</span>
          <span>{totalDue} due today</span>
          <span>
            boxes:{" "}
            {Object.entries(stats.byBox)
              .map(([k, v]) => `${k}→${v}`)
              .join("  ")}
          </span>
        </div>
      )}

      {done ? (
        <div className="rounded-xl border border-[#2a2a2a] bg-[#0c0c0c] p-8 text-center">
          <div className="text-5xl mb-3">✓</div>
          <h2 className="font-display text-xl mb-2">Nothing due today</h2>
          <p className="text-sm opacity-60">
            New items appear here when you complete the retrieval phase of a session.
            Come back tomorrow for spaced review.
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-3 flex items-center justify-between text-xs opacity-50">
            <span>
              {idx + 1} of {queue.length}
            </span>
            <span>
              box {current.box}
              {current.lapses > 0 && ` · ${current.lapses} lapse${current.lapses > 1 ? "s" : ""}`}
            </span>
          </div>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#0c0c0c] p-6">
            <div className="mb-4">
              <MathText>{current.prompt}</MathText>
            </div>

            {reveal && current.answer && (
              <div className="mt-4 p-4 rounded bg-[#050505] border border-[#2a2a2a]">
                <div className="text-xs uppercase tracking-wider opacity-40 mb-2">
                  Answer
                </div>
                <MathText>{current.answer}</MathText>
              </div>
            )}

            {!reveal ? (
              <button
                onClick={() => setReveal(true)}
                className="mt-4 px-4 py-2 rounded bg-phase1 hover:bg-phase2 text-sm"
              >
                Reveal answer
              </button>
            ) : (
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => grade("wrong")}
                  className="flex-1 px-4 py-3 rounded bg-red-900/40 hover:bg-red-900/60 border border-red-900/50 text-sm"
                >
                  Missed — back to box 1
                </button>
                <button
                  onClick={() => grade("correct")}
                  className="flex-1 px-4 py-3 rounded bg-green-900/40 hover:bg-green-900/60 border border-green-900/50 text-sm"
                >
                  Got it — next box
                </button>
              </div>
            )}
          </div>

          {current.concept && (
            <div className="mt-3 text-xs opacity-50">
              concept:{" "}
              <Link
                href={`/concept/${encodeURIComponent(current.concept)}`}
                className="underline hover:opacity-100"
              >
                {current.concept}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
