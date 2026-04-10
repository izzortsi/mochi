"use client";
import type { DayTier } from "@/lib/types";

const COLORS: Record<DayTier, string> = {
  none: "#3a3a4f",
  bronze: "#cd7f32",
  silver: "#c0c0c0",
  gold: "#ffd700",
};

export function TierBadge({ tier, size = 14 }: { tier: DayTier; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size, height: size, borderRadius: "50%",
        background: COLORS[tier],
        boxShadow: tier === "gold" ? "0 0 12px #ffd700aa" : undefined,
      }}
      aria-label={`tier ${tier}`}
    />
  );
}
