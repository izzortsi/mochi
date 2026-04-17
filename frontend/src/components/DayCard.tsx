"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { TierBadge } from "./TierBadge";
import type { DayView, DayTier } from "@/lib/types";

interface Props {
  courseId: number;
  day: DayView;
  tier: DayTier;
  completedCount: number;
  totalCount: number;
  onDelete?: (dayId: number) => void;
}

const PHASE_ACCENT: Record<number, string> = {
  1: "#6366f1", 2: "#8b5cf6", 3: "#ec4899", 4: "#f59e0b",
};

export function DayCard({ courseId, day, tier, completedCount, totalCount, onDelete }: Props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const pct = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  const accent = PHASE_ACCENT[day.phase] ?? "#6366f1";
  return (
    <motion.article
      className="rounded-xl border border-[#1a1a2a] bg-[#121222] p-4 hover:border-[#2a2a3f] transition-colors h-full relative"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link href={`/course/${courseId}/day/${day.id}`} className="cursor-pointer block">
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
      </Link>
      {onDelete && (
        <div className="absolute top-3 right-3">
          {confirmDelete ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onDelete(day.id)}
                className="text-xs px-2 py-1 rounded bg-red-600/80 hover:bg-red-600 text-white"
              >
                delete
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-xs px-2 py-1 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f] opacity-70"
              >
                cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="opacity-20 hover:opacity-60 transition-opacity"
              aria-label="delete day"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </motion.article>
  );
}
