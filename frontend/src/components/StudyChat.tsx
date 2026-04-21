"use client";
import { useCallback, useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Course, DayView, UserProgress, TutorNote } from "@/lib/types";
import { useSetTutorContext } from "@/lib/tutor-context";

function buildPageContext(
  course: Course,
  day: DayView,
  progress: UserProgress,
  notesByCard: Record<string, TutorNote[]>,
): string {
  const completed = progress.completedTasks ?? {};
  const tiers: Array<"bronze" | "silver" | "gold"> = ["bronze", "silver", "gold"];

  const lines: string[] = [];
  lines.push("# CURRENT PAGE");
  lines.push(`Course ${course.id}: ${course.title}`);
  lines.push(`Day ${day.id}: ${day.title}`);
  if (day.keyInsight) lines.push(`Key insight: ${day.keyInsight}`);
  lines.push("");
  lines.push("Cards on this day:");

  for (const tier of tiers) {
    const cards = day.cards.filter(c => c.tier === tier);
    for (const c of cards) {
      const done = completed[c.cardUid] ? "✓ completed" : "○ not completed";
      lines.push("");
      lines.push(`${tier.toUpperCase()} (card-uid: ${c.cardUid}) [${done}]`);
      lines.push(`  Text: ${c.text}`);
      lines.push(`  Solution (internal — don't reveal unless asked): ${c.detail}`);
      if (c.concepts.length > 0) lines.push(`  Concepts: ${c.concepts.join(", ")}`);
      const notes = notesByCard[c.cardUid] || [];
      if (notes.length > 0) {
        lines.push(`  Tutor notes:`);
        for (const n of notes) {
          lines.push(`    - [${n.source}] ${n.body}`);
        }
      }
    }
  }

  lines.push("");
  lines.push(`Overall course progress: ${progress.xp} XP, streak ${progress.streak}.`);
  return lines.join("\n");
}

interface Props {
  courseId: number;
  dayId: number;
  course: Course;
  day: DayView;
  progress: UserProgress;
  onProgressChanged: () => void;
}

/* Day-level chat: registers the rich card-aware context with the global
 * Tutor instead of mounting its own. Renders nothing — the Tutor is in the
 * layout. */
export function StudyChat({ course, day, progress, onProgressChanged }: Props) {
  const [notesByCard, setNotesByCard] = useState<Record<string, TutorNote[]>>({});

  const refetchNotes = useCallback(() => {
    api.memory.fetchTutorNotes().then((resp) => {
      const byCard: Record<string, TutorNote[]> = {};
      for (const n of resp.notes) (byCard[n.cardUid] ||= []).push(n);
      setNotesByCard(byCard);
    }).catch(() => {});
  }, []);

  useEffect(() => { refetchNotes(); }, [course.id, refetchNotes]);

  const pageContext = buildPageContext(course, day, progress, notesByCard);

  useSetTutorContext({
    courseId: course.id,
    pageContext,
    placeholder: "Ask for a hint, grade your attempt, or request a similar problem…",
    onToolCall: (toolName, ok) => {
      if (!ok) return;
      if (toolName === "mark-task-complete") onProgressChanged();
      if (toolName === "record-tutor-note") refetchNotes();
    },
  });

  return null;
}
