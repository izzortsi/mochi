"use client";

interface Props { pct: number; size?: number; stroke?: number; }

export function ProgressRing({ pct, size = 48, stroke = 4 }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} stroke="#1a1a2a" strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2} cy={size/2} r={r}
        stroke="#ffd700" strokeWidth={stroke} fill="none"
        strokeDasharray={c} strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />
      <text x="50%" y="54%" textAnchor="middle" fill="#f5f0e8" fontSize="11" fontFamily="JetBrains Mono, monospace">
        {Math.round(pct)}%
      </text>
    </svg>
  );
}
