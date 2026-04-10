"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { StudyDay, UserProgress, DayTier } from "@/lib/types";
import { DayCard } from "@/components/DayCard";
import { ProgressRing } from "@/components/ProgressRing";
import { ResetModal } from "@/components/ResetModal";

function countTasks(day: StudyDay): number {
  return day.tasks.reduce((a, g) => a + g.items.length, 0);
}

function countCompleted(day: StudyDay, completed: Record<string, boolean>): number {
  let n = 0;
  for (const g of day.tasks) {
    for (let i = 0; i < g.items.length; i++) {
      if (completed[`${day.id}-${g.tier}-${i}`]) n++;
    }
  }
  return n;
}

export default function Dashboard() {
  const [days, setDays] = useState<StudyDay[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showReset, setShowReset] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = () => {
    api.fetchDays().then(setDays).catch(e => setError(`fetchDays: ${e}`));
    api.fetchProgress().then(setProgress).catch(e => setError(`fetchProgress: ${e}`));
  };

  useEffect(refresh, []);

  const doReset = async () => { await api.reset(); setShowReset(false); refresh(); };

  if (error) return <div className="text-phase3">error: {error}</div>;
  if (!days.length || !progress) return <div className="opacity-50">loading…</div>;

  const totalTasks = days.reduce((a, d) => a + countTasks(d), 0);
  const completedCount = Object.keys(progress.completedTasks ?? {}).length;
  const pct = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

  const phases = [1, 2, 3, 4] as const;

  return (
    <div>
      <div className="flex items-center gap-6 mb-8">
        <ProgressRing pct={pct} size={64} />
        <div>
          <div className="text-sm opacity-50">Total Progress</div>
          <div className="font-mono">{completedCount} / {totalTasks} tasks</div>
        </div>
        <button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
      </div>

      {phases.map(phaseNum => {
        const phaseDays = days.filter(d => d.phase === phaseNum);
        if (phaseDays.length === 0) return null;
        const phaseTitle = phaseDays[0].phaseTitle;
        return (
          <section key={phaseNum} className="mb-8">
            <h2 className="font-display text-lg mb-3 opacity-70">Phase {phaseNum} — {phaseTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phaseDays.map(day => {
                const tier = ((progress.dayTiers ?? {})[String(day.id)] ?? "none") as DayTier;
                return (
                  <DayCard
                    key={day.id}
                    day={day}
                    tier={tier}
                    completedCount={countCompleted(day, progress.completedTasks ?? {})}
                    totalCount={countTasks(day)}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      {showReset && <ResetModal onConfirm={doReset} onCancel={() => setShowReset(false)} />}
    </div>
  );
}
