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

function countCompletedInDay(day: DayView, completed: Record<string, boolean>): number {
  let n = 0;
  for (const card of day.cards) if (completed[card.cardUid]) n++;
  return n;
}

export default function CourseDashboard() {
  const params = useParams<{ id: string }>();
  const courseId = parseInt(params.id, 10);
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showReset, setShowReset] = useState(false);

  const refresh = useCallback(() => {
    ontology.fetchCourse(courseId).then(setCourse).catch(() => setCourse(null));
    api.fetchProgress().then(setProgress).catch(() => {});
  }, [courseId]);

  useEffect(refresh, [refresh]);

  const doReset = async () => { await api.reset(); setShowReset(false); refresh(); };

  if (!course || !progress) return <div className="opacity-50">loading…</div>;

  const completed = progress.completedTasks ?? {};
  const dayTiers = progress.dayTiers ?? {};
  const totalTasks = course.days.reduce((a, d) => a + d.cards.length, 0);
  const completedCount = course.days.reduce((a, d) => a + countCompletedInDay(d, completed), 0);
  const pct = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

  const phasesShown = Array.from(new Set(course.days.map(d => d.phase))).sort((a, b) => a - b);

  return (
    <div>
      <div className="flex items-center gap-6 mb-8">
        <ProgressRing pct={pct} size={64} />
        <div>
          <div className="text-sm opacity-50">{course.title}</div>
          <div className="font-mono">{completedCount} / {totalTasks} cards</div>
        </div>
        <button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
      </div>

      <NextUpPanel courseId={courseId} days={course.days} />

      {phasesShown.map(phaseNum => {
        const phaseDays = course.days.filter(d => d.phase === phaseNum);
        const phaseTitle = (course.phases.find(p => p[0] === phaseNum)?.[1]) ?? `Phase ${phaseNum}`;
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
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      <ConceptMapPanel courseId={courseId} />

      {showReset && <ResetModal onConfirm={doReset} onCancel={() => setShowReset(false)} />}
    </div>
  );
}
