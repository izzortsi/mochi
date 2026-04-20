"use client";
import { motion } from "framer-motion";
import type { DayTier } from "@/lib/types";

const TIER_STYLES: Record<DayTier, { background: string; boxShadow: string; outline?: string }> = {
  none: {
    background: "#2a2a2a",
    boxShadow: "none",
  },
  bronze: {
    background: "#cd7f32",
    boxShadow: "inset 0 0 3px rgba(205,127,50,0.3), 0 0 6px rgba(205,127,50,0.2)",
  },
  silver: {
    background: "radial-gradient(circle at 35% 35%, #e8e8e8, #c0c0c0)",
    boxShadow: "inset 0 0 3px rgba(192,192,192,0.4), 0 0 8px rgba(192,192,192,0.25)",
  },
  gold: {
    background: "radial-gradient(circle at 35% 35%, #fff4b0, #ffd700)",
    boxShadow:
      "inset 0 0 4px rgba(255,215,0,0.4), 0 0 14px rgba(255,215,0,0.5), 0 0 28px rgba(255,215,0,0.2)",
    outline: "1px solid rgba(255,215,0,0.25)",
  },
};

export function TierBadge({ tier, size = 16 }: { tier: DayTier; size?: number }) {
  const style = TIER_STYLES[tier];
  return (
    <motion.span
      layout
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: tier === "none" ? 0.5 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: style.background,
        boxShadow: style.boxShadow,
        outline: style.outline,
        outlineOffset: style.outline ? "2px" : undefined,
        border: tier === "none" ? "1px solid #404040" : undefined,
      }}
      aria-label={`tier ${tier}`}
    />
  );
}
