"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ontology } from "@/lib/ontology";
import type { ConceptMapData } from "@/lib/types";
import { ConceptMap } from "./ConceptMap";

export function ConceptMapPanel({ courseId }: { courseId: number }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ConceptMapData | null>(null);

  useEffect(() => {
    if (open && !data) {
      ontology.fetchConceptMap(courseId).then(setData).catch(() => setData(null));
    }
  }, [open, data, courseId]);

  return (
    <section className="mb-8">
      <button
        className="flex items-center gap-2 font-display text-lg opacity-70 hover:opacity-100"
        onClick={() => setOpen(o => !o)}
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-0" : "-rotate-90"}`} />
        Concept map
      </button>
      {open && (
        data ? <ConceptMap data={data} cacheKey={`course-${courseId}`} /> : <div className="opacity-50 mt-2">loading map…</div>
      )}
    </section>
  );
}
