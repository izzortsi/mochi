"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { api } from "@/lib/api";
import type { StudyDay, UserProgress, Tier } from "@/lib/types";
import { MathText } from "@/components/MathText";
import { TaskCard } from "@/components/TaskCard";
import { StudyChat } from "@/components/StudyChat";

const TIER_COLORS: Record<Tier, string> = {
  bronze: "#cd7f32", silver: "#c0c0c0", gold: "#ffd700",
};

export default function DayDetail() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const dayId = parseInt(params.id, 10);
  const [day, setDay] = useState<StudyDay | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  const refresh = useCallback(() => {
    api.fetchDay(dayId).then(setDay).catch(() => setDay(null));
    api.fetchProgress().then(setProgress).catch(() => {});
  }, [dayId]);

  useEffect(refresh, [refresh]);

  const toggle = async (tier: Tier, idx: number, current: boolean) => {
    if (current) await api.uncomplete(dayId, tier, idx);
    else await api.complete(dayId, tier, idx);
    refresh();
  };

  if (!day || !progress) return <div className="opacity-50">loading…</div>;

  return (
    <div className="pr-[26rem]">
      <div className="mb-6">
        <button onClick={() => router.push("/")} className="text-xs opacity-50 hover:opacity-100 flex items-center gap-1">
          <ChevronLeft className="w-3 h-3" /> dashboard
        </button>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="text-5xl font-display">{day.icon}</span>
          <div>
            <div className="text-xs uppercase tracking-wider opacity-50">Day {day.id} · {day.phaseTitle}</div>
            <h1 className="font-display text-3xl">{day.title}</h1>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-xl border border-[#2a2a3f] bg-[#121222]">
          <div className="text-xs uppercase tracking-wider opacity-50 mb-1">Key Insight</div>
          <MathText className="text-sm">{day.keyInsight}</MathText>
        </div>
      </div>

      {day.tasks.map(group => (
        <section key={group.tier} className="mb-6">
          <h2 className="font-display text-lg mb-3" style={{ color: TIER_COLORS[group.tier] }}>
            {group.label} — {group.tier}
          </h2>
          <div className="space-y-3">
            {group.items.map((item, i) => {
              const key = `${day.id}-${group.tier}-${i}`;
              return (
                <TaskCard
                  key={key} dayId={day.id} tier={group.tier} index={i}
                  item={item}
                  completed={!!(progress.completedTasks ?? {})[key]}
                  onToggle={(next) => toggle(group.tier, i, !next)}
                />
              );
            })}
          </div>
        </section>
      ))}

      <div className="flex justify-between mt-8 text-sm">
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId <= 1}
          onClick={() => router.push(`/day/${dayId - 1}`)}
        ><ChevronLeft className="w-4 h-4" /> previous</button>
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId >= 7}
          onClick={() => router.push(`/day/${dayId + 1}`)}
        >next <ChevronRight className="w-4 h-4" /></button>
      </div>

      <StudyChat dayId={dayId} onProgressChanged={refresh} />
    </div>
  );
}
