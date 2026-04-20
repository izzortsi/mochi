"use client";
import { motion } from "framer-motion";

interface Props { xp: number; multiplier: number; max?: number; }

export function XPBar({ xp, multiplier, max = 1000 }: Props) {
  const pct = Math.min(100, (xp / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative h-3 w-72 rounded-full bg-[#1a1a1a] overflow-hidden"
        style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)",
            boxShadow: "0 0 12px 2px rgba(99,102,241,0.25), 0 0 24px 4px rgba(245,158,11,0.1)",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-y-0 w-full pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          />
        </motion.div>
      </div>
      <span className="font-mono text-sm flex items-center gap-1.5">
        <motion.span
          key={xp}
          initial={{ opacity: 0, y: -4, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          {xp}
        </motion.span>
        <span className="opacity-50">XP</span>
        {multiplier > 1 && (
          <motion.span
            className="px-1.5 py-0.5 rounded bg-phase4/20 text-phase4 font-mono text-xs font-semibold"
            style={{ boxShadow: "0 0 8px rgba(245,158,11,0.3)" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            x{multiplier}
          </motion.span>
        )}
      </span>
    </div>
  );
}
