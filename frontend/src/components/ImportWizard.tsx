"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ontology } from "@/lib/ontology";
import { loadConfig, isConfigured } from "@/lib/settings";
import { fetchPdfText } from "@/lib/pdfExtract";
import { WsClient } from "@/lib/ws";
import type { ConnectionStatus } from "@/lib/types";

type Step = "pick" | "parsing" | "review" | "committing" | "done";

interface ParsedCard {
  tier: "bronze" | "silver" | "gold";
  text: string;
  detail: string;
  concepts: string[];
}
interface ParsedDay {
  id: number;
  phase: number;
  title: string;
  icon: string;
  summary: string;
  keyInsight: string;
  cards: ParsedCard[];
}
interface ParsedCourse {
  title: string;
  slug: string;
  phases: Array<{ num: number; title: string }>;
  days: ParsedDay[];
  concepts: Array<{ id: string; label: string }>;
  prereqs: string[][];
}

// Build an s-expression tool call frame directly (bypasses tools.ts schemas).
function kebab(key: string): string {
  return key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}
function quote(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function encodeValue(v: unknown): string {
  if (typeof v === "string") return quote(v);
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  if (v === null) return "nil";
  return quote(String(v));
}
function buildFrame(name: string, args: Record<string, unknown>, requestId: string): string {
  const pairs = Object.entries(args).map(([k, v]) => `(${kebab(k)} ${encodeValue(v)})`);
  return `(call ${quote(name)} (${pairs.join(" ")}) ${quote(requestId)})`;
}

export function ImportWizard() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("pick");
  const [files, setFiles] = useState<string[]>([]);
  const [filename, setFilename] = useState("");
  const [title, setTitle] = useState("");
  const [parsed, setParsed] = useState<ParsedCourse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WsClient | null>(null);

  useEffect(() => {
    ontology.listPdfs().then(r => setFiles(r.files)).catch(e => setError(String(e)));
    const client = new WsClient("ws://localhost:4000/ws", () => {}, setStatus);
    client.connect();
    wsRef.current = client;
    return () => client.disconnect();
  }, []);

  const parse = async () => {
    setStep("parsing");
    setError(null);
    try {
      const text = await fetchPdfText(filename);
      const config = loadConfig();
      if (!isConfigured(config)) throw new Error("API key not configured");
      const res = await fetch("/api/import/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "api-key": config.apiKey, text, title, model: config.model,
        }),
      });
      if (!res.ok) throw new Error(`parse: ${res.status}`);
      const envelope = await res.json() as { choices: { message: { content: string } }[] };
      const content = envelope.choices[0]?.message?.content ?? "";
      const clean = content.replace(/^```(?:json)?\s*/, "").replace(/```\s*$/, "");
      const p = JSON.parse(clean) as ParsedCourse;
      setParsed(p);
      setStep("review");
    } catch (e) {
      setError(String(e));
      setStep("pick");
    }
  };

  const commit = async () => {
    if (!parsed || !wsRef.current) return;
    const ws = wsRef.current;
    setStep("committing");
    try {
      const call = (name: string, args: Record<string, unknown>): Promise<void> =>
        new Promise((resolve) => {
          const requestId = Math.random().toString(36).slice(2, 10);
          ws.send(buildFrame(name, args, requestId));
          // Fire and forget with a small delay so the backend processes in order.
          setTimeout(resolve, 60);
        });

      await call("create-course", { title: parsed.title, slug: parsed.slug });

      // Read back the new course id from REST (auto-incremented server-side).
      const coursesRes = await ontology.listCourses();
      const courseId = Math.max(...coursesRes.map(c => c.id));

      for (const ph of parsed.phases) {
        await call("create-phase", { courseId, phaseNum: ph.num, title: ph.title });
      }

      for (const c of parsed.concepts) {
        await call("create-concept", { conceptId: c.id, label: c.label });
      }
      for (const edge of parsed.prereqs) {
        await call("add-prereq", { conceptId: edge[0], prereq: edge[1] });
      }

      for (const d of parsed.days) {
        await call("create-day", {
          courseId, dayId: d.id, phaseNum: d.phase, title: d.title,
          icon: d.icon, summary: d.summary, keyInsight: d.keyInsight,
        });
        for (let i = 0; i < d.cards.length; i++) {
          const card = d.cards[i];
          const cardUid = `c${courseId}-d${d.id}-${card.tier}-${i}`;
          await call("create-card", {
            cardUid, courseId, dayId: d.id, tier: card.tier,
            taskIndex: i, text: card.text, detail: card.detail,
          });
          for (const concept of card.concepts) {
            await call("tag-card", { cardUid, conceptId: concept });
          }
        }
      }

      setStep("done");
      setTimeout(() => router.push(`/course/${courseId}`), 800);
    } catch (e) {
      setError(String(e));
      setStep("review");
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl mb-4">Import course</h1>
      <div className="text-xs opacity-50 mb-4">ws: {status}</div>
      {error && <div className="mb-4 p-3 rounded bg-phase3/20 text-phase3 text-sm">{error}</div>}

      {step === "pick" && (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm opacity-70">Source file</span>
            <select
              className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
              value={filename}
              onChange={e => setFilename(e.target.value)}
            >
              <option value="">— pick a file from backend/pdfs/ —</option>
              {files.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm opacity-70">Course title</span>
            <input
              className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Steinbruch Ch 5"
            />
          </label>
          <button
            className="px-4 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30"
            disabled={!filename || !title}
            onClick={parse}
          >Parse</button>
        </div>
      )}

      {step === "parsing" && <div className="opacity-60">extracting pdf text + calling llm…</div>}

      {step === "review" && parsed && (
        <ReviewTree parsed={parsed} onCommit={commit} />
      )}

      {step === "committing" && <div className="opacity-60">committing facts to ontology store…</div>}
      {step === "done" && <div className="text-phase1">course imported — redirecting…</div>}
    </div>
  );
}

function ReviewTree({ parsed, onCommit }: { parsed: ParsedCourse; onCommit: () => void }) {
  return (
    <div>
      <div className="mb-4">
        <div className="text-sm opacity-60">Title</div>
        <div className="font-display text-xl">{parsed.title}</div>
      </div>
      <div className="mb-4">
        <div className="text-sm opacity-60">Phases</div>
        <ul className="list-disc pl-6">
          {parsed.phases.map(p => <li key={p.num}>{p.num}. {p.title}</li>)}
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-sm opacity-60">Days</div>
        <ul className="space-y-2">
          {parsed.days.map(d => (
            <li key={d.id} className="p-3 rounded border border-[#2a2a3f]">
              <div className="font-display">{d.icon} Day {d.id} — {d.title}</div>
              <div className="text-xs opacity-60">Phase {d.phase} · {d.cards.length} cards</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-sm opacity-60">Concepts ({parsed.concepts.length})</div>
        <div className="flex flex-wrap gap-1 mt-1">
          {parsed.concepts.map(c => (
            <span key={c.id} className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a2a]">{c.label}</span>
          ))}
        </div>
      </div>
      <button className="px-4 py-2 rounded bg-phase1 hover:bg-phase2" onClick={onCommit}>Commit to store</button>
    </div>
  );
}
