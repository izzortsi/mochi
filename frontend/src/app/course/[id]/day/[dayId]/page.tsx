"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import type { Course, UserProgress, Tier, DayView, CardUid } from "@/lib/types";
import { MathText } from "@/components/MathText";
import { TaskCard } from "@/components/TaskCard";
import { StudyChat } from "@/components/StudyChat";

const TIER_COLORS: Record<Tier, string> = {
  bronze: "#cd7f32", silver: "#c0c0c0", gold: "#ffd700",
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

  const toggle = async (cardUid: CardUid, current: boolean) => {
    if (current) await api.uncomplete(cardUid);
    else await api.complete(cardUid);
    refresh();
  };

  if (!course || !day || !progress) return <div className="opacity-50">loading…</div>;

  const completed = progress.completedTasks ?? {};
  const dayCards = day.cards ?? [];
  const cardsByTier: Record<Tier, typeof dayCards> = { bronze: [], silver: [], gold: [] };
  for (const c of dayCards) cardsByTier[c.tier].push(c);

  const maxDay = Math.max(...course.days.map(d => d.id));
  const minDay = Math.min(...course.days.map(d => d.id));

  return (
    <div className="pr-[26rem]">
      <div className="mb-6">
        <button onClick={() => router.push(`/course/${courseId}`)} className="text-xs opacity-50 hover:opacity-100 flex items-center gap-1">
          <ChevronLeft className="w-3 h-3" /> {course.title}
        </button>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="text-5xl font-display">{day.icon}</span>
          <div>
            <div className="text-xs uppercase tracking-wider opacity-50">Day {day.id}</div>
            <h1 className="font-display text-3xl">{day.title}</h1>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-xl border border-[#2a2a3f] bg-[#121222]">
          <div className="text-xs uppercase tracking-wider opacity-50 mb-1">Key Insight</div>
          <MathText className="text-sm">{day.keyInsight}</MathText>
        </div>
      </div>

      {(["bronze", "silver", "gold"] as const).map(tier => (
        <section key={tier} className="mb-6">
          <h2 className="font-display text-lg mb-3" style={{ color: TIER_COLORS[tier] }}>
            {tier}
          </h2>
          <div className="space-y-3">
            {cardsByTier[tier].map(card => (
              <TaskCard
                key={card.cardUid}
                cardUid={card.cardUid}
                text={card.text}
                detail={card.detail}
                concepts={card.concepts}
                completed={!!completed[card.cardUid]}
                onToggle={(next) => toggle(card.cardUid, !next)}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="flex justify-between mt-8 text-sm">
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId <= minDay}
          onClick={() => router.push(`/course/${courseId}/day/${dayId - 1}`)}
        ><ChevronLeft className="w-4 h-4" /> previous</button>
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId >= maxDay}
          onClick={() => router.push(`/course/${courseId}/day/${dayId + 1}`)}
        >next <ChevronRight className="w-4 h-4" /></button>
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
