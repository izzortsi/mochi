"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TierBadge } from "./TierBadge";
import type { DayView, DayTier } from "@/lib/types";

interface Props {
  courseId: number;
  day: DayView;
  tier: DayTier;
  completedCount: number;
  totalCount: number;
}

const PHASE_ACCENT: Record<number, string> = {
  1: "#6366f1", 2: "#8b5cf6", 3: "#ec4899", 4: "#f59e0b",
};

export function DayCard({ courseId, day, tier, completedCount, totalCount }: Props) {
  const pct = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  const accent = PHASE_ACCENT[day.phase] ?? "#6366f1";
  return (
    <Link href={`/course/${courseId}/day/${day.id}`}>
      <motion.article
        className="rounded-xl border border-[#1a1a2a] bg-[#121222] p-4 hover:border-[#2a2a3f] transition-colors cursor-pointer h-full"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="text-3xl font-display" style={{ color: accent }}>{day.icon}</div>
          <TierBadge tier={tier} />
        </div>
        <div className="text-xs opacity-50 uppercase tracking-wider" style={{ color: accent }}>
          Day {day.id}
        </div>
        <h3 className="font-display text-lg mt-1 mb-2">{day.title}</h3>
        <p className="text-sm opacity-70 line-clamp-2">{day.summary}</p>
        <div className="mt-3 h-1 rounded-full bg-[#1a1a2a] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: accent }}
          />
        </div>
      </motion.article>
    </Link>
  );
}
