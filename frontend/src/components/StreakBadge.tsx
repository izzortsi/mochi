"use client";
import { Flame } from "lucide-react";

export function StreakBadge({ streak, best }: { streak: number; best: number }) {
  const glow = streak >= 7 ? "0 0 16px #f59e0b" : streak >= 3 ? "0 0 8px #f59e0baa" : "none";
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#1a1a2a]"
      style={{ boxShadow: glow }}
    >
      <Flame className="w-4 h-4 text-phase4" />
      <span className="font-mono text-sm">{streak}</span>
      <span className="text-xs opacity-50">best {best}</span>
    </div>
  );
}
