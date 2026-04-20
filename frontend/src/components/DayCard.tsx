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
  1: "#8888ff", 2: "#b088ff", 3: "#ff88c0", 4: "#ffaa55",
};

export function DayCard({ courseId, day, tier, completedCount, totalCount, onDelete }: Props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const pct = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  const accent = PHASE_ACCENT[day.phase] ?? "#8888ff";
  return (
    <motion.article
      className="border border-[#1a1a1a] bg-[#0c0c0c] p-3 hover:border-[#2a2a2a] transition-colors h-full relative"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link href={`/course/${courseId}/day/${day.id}`} className="cursor-pointer block">
        <div className="flex items-start justify-between mb-2">
          <div className="text-2xl font-display leading-none" style={{ color: accent }}>{day.icon}</div>
          <TierBadge tier={tier} />
        </div>
        <div className="text-[10px] opacity-60 uppercase tracking-wider font-mono" style={{ color: accent }}>
          Day {day.id}
        </div>
        <h3 className="font-display text-base mt-0.5 mb-1 leading-tight">{day.title}</h3>
        <p className="text-xs opacity-60 line-clamp-2 leading-snug">{day.summary}</p>
        <div className="mt-2 h-px bg-[#1a1a1a]">
          <div className="h-full" style={{ width: `${pct}%`, background: accent }} />
        </div>
      </Link>
      {onDelete && (
        <div className="absolute top-2 right-2">
          {confirmDelete ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onDelete(day.id)}
                className="text-[10px] px-1.5 py-0.5 bg-red-700 hover:bg-red-600 text-white"
              >
                delete
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-[10px] px-1.5 py-0.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-neutral-400"
              >
                cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="opacity-20 hover:opacity-70 transition-opacity"
              aria-label="delete day"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </motion.article>
  );
}
