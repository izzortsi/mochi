"use client";
import { useEffect, useState } from "react";
import { ontology } from "@/lib/ontology";
import type { ConceptMapData } from "@/lib/types";
import { ConceptMap } from "@/components/ConceptMap";

export default function GlobalConceptMapPage() {
  const [data, setData] = useState<ConceptMapData | null>(null);

  useEffect(() => {
    ontology.fetchConceptMapAll().then(setData).catch(() => setData(null));
  }, []);

  if (!data) return <div className="opacity-50">loading…</div>;

  return (
    <div className="ml-[-6rem] mr-[calc(50%-50vw+11.5rem)]">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-3xl mb-2">Concept map</h1>
        <p className="text-sm opacity-60 mb-4">Every concept across every course. Click a node to open its page. Drag to reposition, scroll to zoom.</p>
      </div>
      <ConceptMap data={data} cacheKey="global" height={600} />
    </div>
  );
}
