"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import type { Course, UserProgress, DayTier, DayView } from "@/lib/types";
import { DayCard } from "@/components/DayCard";
import { ProgressRing } from "@/components/ProgressRing";
import { ResetModal } from "@/components/ResetModal";
import { NextUpPanel } from "@/components/NextUpPanel";
import { ConceptMapPanel } from "@/components/ConceptMapPanel";
import { AddCardModal } from "@/components/AddCardModal";
import { useSetTutorContext } from "@/lib/tutor-context";

function countCompletedInDay(day: DayView, completed: Record<string, boolean>): number {
  let n = 0;
  for (const card of day.cards) if (completed[card.cardUid]) n++;
  return n;
}

// Course-level summary for the tutor. Lighter than the per-day StudyChat
// context: lists every day with title, phase, tier, and completion ratio,
// but not individual card text/solutions — those load when the user
// drills into a day.
function buildCourseDashboardContext(
  course: Course,
  progress: UserProgress,
): string {
  const completed = progress.completedTasks ?? {};
  const dayTiers = progress.dayTiers ?? {};
  const days = (course.days ?? []).map(d => ({ ...d, cards: d.cards ?? [] }));
  const phases = (course.phases ?? []) as Array<[number, string]>;

  const lines: string[] = [
    "# CURRENT PAGE",
    "View: Course dashboard",
    `Course ${course.id}: ${course.title}`,
  ];

  if (phases.length) {
    lines.push("");
    lines.push("Phases:");
    for (const [num, title] of phases) lines.push(`  ${num}. ${title}`);
  }

  lines.push("");
  lines.push("Days:");
  const phaseNums = Array.from(new Set(days.map(d => d.phase))).sort((a, b) => a - b);
  for (const phaseNum of phaseNums) {
    for (const d of days.filter(x => x.phase === phaseNum)) {
      const total = d.cards.length;
      const done = countCompletedInDay(d, completed);
      const tier = dayTiers[`${course.id}.${d.id}`] ?? "none";
      lines.push(`  Day ${d.id} (phase ${phaseNum}): ${d.title} [${done}/${total}, tier=${tier}]`);
      if (d.keyInsight) lines.push(`    Key insight: ${d.keyInsight}`);
    }
  }

  const totalTasks = days.reduce((a, d) => a + d.cards.length, 0);
  const completedCount = days.reduce((a, d) => a + countCompletedInDay(d, completed), 0);
  lines.push("");
  lines.push(
    `Course progress: ${completedCount}/${totalTasks} cards completed.` +
    ` Overall: ${progress.xp} XP, streak ${progress.streak}.`,
  );
  return lines.join("\n");
}

export default function CourseDashboard() {
  const params = useParams<{ id: string }>();
  const courseId = parseInt(params.id, 10);
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showReset, setShowReset] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);

  const refresh = useCallback(() => {
    ontology.fetchCourse(courseId).then(setCourse).catch(() => setCourse(null));
    api.fetchProgress().then(setProgress).catch(() => {});
  }, [courseId]);

  useEffect(refresh, [refresh]);

  const doReset = async () => { await api.reset(); setShowReset(false); refresh(); };

  const handleDeleteDay = async (dayId: number) => {
    await api.deleteDay(courseId, dayId);
    refresh();
  };

  // Push a course-level pageContext into the tutor while this page is
  // mounted. Hook must run unconditionally — fall back to a placeholder
  // before the data loads so the call is stable across renders.
  useSetTutorContext({
    courseId,
    pageContext: course && progress
      ? buildCourseDashboardContext(course, progress)
      : `# CURRENT PAGE\nView: Course dashboard\nCourse ${courseId} (loading)`,
    title: course ? `Course · ${course.title}` : "Course",
    placeholder: "Ask about a day, request the next-up suggestion, or grade your progress…",
  });

  if (!course || !progress) return <div className="opacity-50">loading…</div>;

  const completed = progress.completedTasks ?? {};
  const dayTiers = progress.dayTiers ?? {};
  const days = (course.days ?? []).map(d => ({ ...d, cards: d.cards ?? [] }));
  const totalTasks = days.reduce((a, d) => a + d.cards.length, 0);
  const completedCount = days.reduce((a, d) => a + countCompletedInDay(d, completed), 0);
  const pct = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

  const phasesShown = Array.from(new Set(days.map(d => d.phase))).sort((a, b) => a - b);

  return (
    <div>
      <div className="flex items-center gap-6 mb-8">
        <ProgressRing pct={pct} size={64} />
        <div>
          <div className="text-sm opacity-50">{course.title}</div>
          <div className="font-mono">{completedCount} / {totalTasks} cards</div>
        </div>
        <button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowAddCard(true)}>+ add card</button>
        <button className="text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
      </div>

      <NextUpPanel courseId={courseId} days={days} />

      {phasesShown.map(phaseNum => {
        const phaseDays = days.filter(d => d.phase === phaseNum);
        const phaseTitle = ((course.phases ?? []).find(p => p[0] === phaseNum)?.[1]) ?? `Phase ${phaseNum}`;
        return (
          <section key={phaseNum} className="mb-8">
            <h2 className="font-display text-lg mb-3 opacity-70">Phase {phaseNum} — {phaseTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phaseDays.map(day => {
                const tier = (dayTiers[`${courseId}.${day.id}`] ?? "none") as DayTier;
                return (
                  <DayCard
                    key={day.id}
                    courseId={courseId}
                    day={day}
                    tier={tier}
                    completedCount={countCompletedInDay(day, completed)}
                    totalCount={day.cards.length}
                    onDelete={handleDeleteDay}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      <ConceptMapPanel courseId={courseId} />

      {showAddCard && (
        <AddCardModal
          courseId={courseId}
          days={days.map(d => ({ id: d.id, title: d.title }))}
          onClose={() => setShowAddCard(false)}
          onSaved={() => { setShowAddCard(false); refresh(); }}
        />
      )}

      {showReset && <ResetModal onConfirm={doReset} onCancel={() => setShowReset(false)} />}
    </div>
  );
}
