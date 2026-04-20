"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ontology } from "@/lib/ontology";
import type { ConceptPageData } from "@/lib/types";
import { MathText } from "@/components/MathText";

const MASTERY_COLOR: Record<string, string> = {
  "not-started": "#404040",
  "learning": "#f59e0b",
  "mastered": "#22c55e",
};

export default function ConceptPage() {
  const params = useParams<{ id: string }>();
  const conceptId = decodeURIComponent(params.id);
  const [data, setData] = useState<ConceptPageData | null>(null);

  useEffect(() => {
    ontology.fetchConcept(conceptId).then(setData).catch(() => setData(null));
  }, [conceptId]);

  if (!data) return <div className="opacity-50">loading…</div>;

  return (
    <div>
      <Link href="/concept-map" className="text-xs opacity-50 hover:opacity-100">← concept map</Link>
      <div className="mt-2 flex items-center gap-3">
        <div
          className="w-4 h-4 rounded-full"
          style={{ background: MASTERY_COLOR[data.mastery] }}
          aria-label={`mastery ${data.mastery}`}
        />
        <h1 className="font-display text-3xl">{data.label}</h1>
        <span className="text-xs uppercase tracking-wider opacity-50">{data.mastery}</span>
      </div>

      {data.byCourse.map(group => (
        <section key={group.courseId} className="mt-6">
          <h2 className="font-display text-lg opacity-70 mb-2">Course {group.courseId}</h2>
          <ul className="space-y-2">
            {group.cards.map(c => (
              <li key={c.cardUid} className="p-3 rounded border border-[#2a2a2a] bg-[#0c0c0c]">
                <MathText>{c.text}</MathText>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
