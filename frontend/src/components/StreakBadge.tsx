"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

function glowForStreak(streak: number): { boxShadow: string; bg: string; border?: string } {
  if (streak >= 14) return {
    boxShadow: "0 0 12px rgba(245,158,11,0.5), 0 0 28px rgba(245,158,11,0.25), 0 0 40px rgba(245,158,11,0.1)",
    bg: "#1f1a10",
    border: "1px solid rgba(245,158,11,0.3)",
  };
  if (streak >= 7) return {
    boxShadow: "0 0 12px rgba(245,158,11,0.4), 0 0 28px rgba(245,158,11,0.15)",
    bg: "#1f1a10",
  };
  if (streak >= 3) return {
    boxShadow: "0 0 10px rgba(245,158,11,0.35), 0 0 20px rgba(245,158,11,0.15)",
    bg: "#141009",
  };
  return { boxShadow: "none", bg: "#1a1a1a" };
}

function flameAnimation(streak: number) {
  if (streak >= 14) return {
    animate: { scale: [1, 1.15, 1], y: [0, -2, 0], opacity: [1, 0.7, 1] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  };
  if (streak >= 7) return {
    animate: { scale: [1, 1.15, 1], y: [0, -2, 0] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  };
  if (streak >= 3) return {
    animate: { y: [0, -1.5, 0] },
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  };
  return {};
}

export function StreakBadge({ streak, best }: { streak: number; best: number }) {
  const glow = glowForStreak(streak);
  const flame = flameAnimation(streak);
  const pulseGlow = streak >= 7;

  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1"
      style={{
        background: glow.bg,
        boxShadow: glow.boxShadow,
        border: glow.border,
      }}
      animate={pulseGlow ? {
        boxShadow: [
          "0 0 12px rgba(245,158,11,0.4)",
          "0 0 18px rgba(245,158,11,0.6)",
          "0 0 12px rgba(245,158,11,0.4)",
        ],
      } : {}}
      transition={pulseGlow ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
    >
      <motion.div animate={flame.animate} transition={flame.transition}>
        <Flame className="w-4 h-4 text-phase4" />
      </motion.div>
      <motion.span
        key={streak}
        className="font-mono text-sm"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {streak}
      </motion.span>
      <span className="text-xs opacity-50">best {best}</span>
    </motion.div>
  );
}
