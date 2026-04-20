"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import type { Course, UserProgress, Tier, DayView, CardUid, PhaseName } from "@/lib/types";
import { MathText } from "@/components/MathText";
import { SessionCard } from "@/components/SessionCard";
import { StudyChat } from "@/components/StudyChat";

const TIER_COLORS: Record<Tier, string> = {
  bronze: "#b8803a", silver: "#b8b8b8", gold: "#e6c200",
};

export default function DayDetail() {
  const params = useParams<{ id: string; dayId: string }>();
  const router = useRouter();
  const courseId = parseInt(params.id, 10);
  const dayId = parseInt(params.dayId, 10);
  const [course, setCourse] = useState<Course | null>(null);
  const [day, setDay] = useState<DayView | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  const refresh = useCallback(() => {
    ontology.fetchCourse(courseId).then(c => {
      setCourse(c);
      setDay(c.days.find(d => d.id === dayId) ?? null);
    }).catch(() => setCourse(null));
    api.fetchProgress().then(setProgress).catch(() => {});
  }, [courseId, dayId]);

  useEffect(refresh, [refresh]);

  const togglePhase = async (cardUid: CardUid, phase: PhaseName, next: boolean) => {
    if (next) await api.completePhase(cardUid, phase);
    else await api.uncompletePhase(cardUid, phase);
    refresh();
  };

  const handleDelete = async (cardUid: CardUid) => {
    await api.deleteCard(cardUid);
    refresh();
  };

  if (!course || !day || !progress) return <div className="opacity-50">loading…</div>;

  const completedPhases = progress.completedPhases ?? {};
  const dayCards = day.cards ?? [];
  const cardsByTier: Record<Tier, typeof dayCards> = { bronze: [], silver: [], gold: [] };
  for (const c of dayCards) cardsByTier[c.tier].push(c);

  const maxDay = Math.max(...course.days.map(d => d.id));
  const minDay = Math.min(...course.days.map(d => d.id));

  return (
    <div className="pr-[26rem]">
      <div className="mb-4">
        <button onClick={() => router.push(`/course/${courseId}`)} className="text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100 flex items-center gap-1">
          <ChevronLeft className="w-3 h-3" /> {course.title}
        </button>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-display leading-none">{day.icon}</span>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-mono opacity-60">Day {day.id}</div>
            <h1 className="font-display text-2xl leading-tight">{day.title}</h1>
          </div>
        </div>
        {day.keyInsight && (
          <div className="mt-3 p-2 border border-[#1f1f1f] bg-[#0c0c0c]">
            <div className="text-[10px] uppercase tracking-wider font-mono opacity-50 mb-0.5">Key Insight</div>
            <MathText className="text-xs">{day.keyInsight}</MathText>
          </div>
        )}
      </div>

      {(["bronze", "silver", "gold"] as const).map(tier => (
        <section key={tier} className="mb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-wider mb-1.5" style={{ color: TIER_COLORS[tier] }}>
            {tier}
          </h2>
          <div className="space-y-1.5">
            {cardsByTier[tier].map(card => (
              <SessionCard
                key={card.cardUid}
                cardUid={card.cardUid}
                concepts={card.concepts}
                notes={card.notes ?? []}
                phases={card.phases}
                completedPhases={completedPhases[card.cardUid] ?? {}}
                onTogglePhase={(phase, next) => togglePhase(card.cardUid, phase, next)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="flex justify-between mt-6 text-xs font-mono uppercase tracking-wider">
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId <= minDay}
          onClick={() => router.push(`/course/${courseId}/day/${dayId - 1}`)}
        ><ChevronLeft className="w-3 h-3" /> prev</button>
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId >= maxDay}
          onClick={() => router.push(`/course/${courseId}/day/${dayId + 1}`)}
        >next <ChevronRight className="w-3 h-3" /></button>
      </div>

      <StudyChat
        courseId={courseId}
        dayId={dayId}
        course={course}
        day={day}
        progress={progress}
        onProgressChanged={refresh}
      />
    </div>
  );
}
