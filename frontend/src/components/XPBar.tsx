"use client";
import { motion } from "framer-motion";

interface Props { xp: number; multiplier: number; max?: number; }

export function XPBar({ xp, multiplier, max = 1000 }: Props) {
  const pct = Math.min(100, (xp / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-2 w-64 rounded-full bg-[#1a1a2a] overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)" }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <span className="font-mono text-sm">
        {xp} XP {multiplier > 1 && <span className="text-phase4">×{multiplier}</span>}
      </span>
    </div>
  );
}
