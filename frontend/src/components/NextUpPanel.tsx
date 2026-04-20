"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ontology } from "@/lib/ontology";
import type { DayView, CardUid } from "@/lib/types";

interface Props { courseId: number; days: DayView[]; }

interface Resolved { cardUid: CardUid; dayId: number; tier: string; text: string; }

function tierColor(tier: string): string {
  switch (tier) {
    case "bronze": return "#cd7f32";
    case "silver": return "#c0c0c0";
    case "gold": return "#ffd700";
    default: return "#666";
  }
}

export function NextUpPanel({ courseId, days }: Props) {
  const [items, setItems] = useState<Resolved[]>([]);

  useEffect(() => {
    ontology.fetchNextUp(courseId).then(res => {
      const resolved: Resolved[] = [];
      for (const it of res.nextUp) {
        for (const d of days) {
          const c = d.cards.find(c => c.cardUid === it.cardUid);
          if (c) {
            resolved.push({ cardUid: c.cardUid, dayId: d.id, tier: c.tier, text: c.text });
            break;
          }
        }
      }
      setItems(resolved);
    }).catch(() => setItems([]));
  }, [courseId, days]);

  if (items.length === 0) return null;

  return (
    <section className="mb-8 rounded-xl border border-[#2a2a2a] bg-[#0c0c0c] p-4">
      <h2 className="font-display text-lg mb-3">Next up</h2>
      <ul className="space-y-2">
        {items.map(it => (
          <li key={it.cardUid}>
            <Link
              href={`/course/${courseId}/day/${it.dayId}`}
              className="flex items-start gap-3 text-sm hover:opacity-100 opacity-80"
            >
              <span className="text-xs uppercase tracking-wider" style={{ color: tierColor(it.tier) }}>{it.tier}</span>
              <span className="flex-1 line-clamp-1">{it.text}</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
