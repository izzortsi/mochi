"use client";
import { motion } from "framer-motion";

interface Props { pct: number; size?: number; stroke?: number; }

function strokeColor(pct: number): string {
  if (pct >= 75) return "#ffd700";
  if (pct >= 50) return "#ec4899";
  if (pct >= 25) return "#8b5cf6";
  return "#6366f1";
}

export function ProgressRing({ pct, size = 48, stroke = 4 }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  const color = strokeColor(pct);

  const angle = -Math.PI / 2 + (pct / 100) * 2 * Math.PI;
  const dotX = size / 2 + r * Math.cos(angle);
  const dotY = size / 2 + r * Math.sin(angle);

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2} cy={size / 2} r={r}
        stroke="#1e1e30" strokeWidth={stroke} fill="none" opacity={0.6}
      />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        stroke={color} strokeWidth={stroke + 4} fill="none"
        strokeDasharray={c} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ filter: "blur(3px)" }}
        initial={{ strokeDashoffset: c, opacity: 0.15 }}
        animate={{ strokeDashoffset: offset, opacity: 0.15 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        stroke={color} strokeWidth={stroke} fill="none"
        strokeDasharray={c} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
      {pct > 0 && pct < 100 && (
        <motion.circle
          cx={dotX} cy={dotY} r={stroke}
          fill={color}
          animate={{ r: [stroke, stroke + 1, stroke], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.text
        x="50%" y="54%" textAnchor="middle"
        fill="#f5f0e8" fontSize="11" fontWeight="600"
        fontFamily="JetBrains Mono, monospace"
        style={{ textShadow: "0 0 6px rgba(245,240,232,0.2)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        {Math.round(pct)}%
      </motion.text>
    </svg>
  );
}
