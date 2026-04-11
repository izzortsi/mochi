"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ontology } from "@/lib/ontology";
import { loadConfig, isConfigured } from "@/lib/settings";
import { fetchPdfText } from "@/lib/pdfExtract";
import { WsClient } from "@/lib/ws";
import type { ConnectionStatus, CourseSummary, Course } from "@/lib/types";

type Step = "pick" | "parsing" | "review" | "committing" | "done";
type Mode = "new" | "extend";

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
interface ParsedExtension {
  newPhases: Array<{ num: number; title: string }>;
  newDays: ParsedDay[];
  insertedCards: Array<{
    dayId: number;
    tier: "bronze" | "silver" | "gold";
    text: string;
    detail: string;
    concepts: string[];
  }>;
  newConcepts: Array<{ id: string; label: string }>;
  newPrereqs: string[][];
}

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
  const [mode, setMode] = useState<Mode>("new");
  const [files, setFiles] = useState<string[]>([]);
  const [filename, setFilename] = useState("");
  const [title, setTitle] = useState("");
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [targetCourseId, setTargetCourseId] = useState<number | null>(null);
  const [parsedNew, setParsedNew] = useState<ParsedCourse | null>(null);
  const [parsedExtend, setParsedExtend] = useState<ParsedExtension | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const [uploading, setUploading] = useState(false);
  const [parseElapsed, setParseElapsed] = useState(0);
  const wsRef = useRef<WsClient | null>(null);

  useEffect(() => {
    if (step !== "parsing") { setParseElapsed(0); return; }
    const t = setInterval(() => setParseElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, [step]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const { filename: uploaded } = await ontology.uploadPdf(file);
      const list = await ontology.listPdfs();
      setFiles(list?.files ?? []);
      setFilename(uploaded);
    } catch (err) {
      setError(String(err));
    } finally {
      setUploading(false);
      if (e.target) e.target.value = "";
    }
  };

  useEffect(() => {
    ontology.listPdfs().then(r => setFiles(r?.files ?? [])).catch(e => setError(String(e)));
    ontology.listCourses().then(setCourses).catch(() => setCourses([]));
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
      const body: Record<string, unknown> = {
        "api-key": config.apiKey,
        text,
        model: config.model,
        mode,
      };
      if (mode === "new") body.title = title;
      if (mode === "extend") body["target-course-id"] = targetCourseId;
      const res = await fetch("/api/import/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errBody = await res.text();
        throw new Error(`parse: ${res.status} ${errBody.slice(0, 300)}`);
      }
      const envelope = await res.json() as { choices: { message: { content: string } }[] };
      const content = envelope.choices[0]?.message?.content ?? "";
      const clean = content.replace(/^```(?:json)?\s*/, "").replace(/```\s*$/, "");
      try {
        if (mode === "new") {
          const p = JSON.parse(clean) as ParsedCourse;
          setParsedNew(p);
          setParsedExtend(null);
        } else {
          const p = JSON.parse(clean) as ParsedExtension;
          setParsedExtend(p);
          setParsedNew(null);
        }
      } catch (parseErr) {
        throw new Error(`LLM returned non-JSON response:\n${content.slice(0, 300)}`);
      }
      setStep("review");
    } catch (e) {
      setError(String(e));
      setStep("pick");
    }
  };

  const commit = async () => {
    if (!wsRef.current) return;
    const ws = wsRef.current;
    setStep("committing");
    try {
      const call = (name: string, args: Record<string, unknown>): Promise<void> =>
        new Promise((resolve) => {
          const requestId = Math.random().toString(36).slice(2, 10);
          ws.send(buildFrame(name, args, requestId));
          setTimeout(resolve, 60);
        });

      if (mode === "new" && parsedNew) {
        const p = parsedNew;
        await call("create-course", { title: p.title, slug: p.slug });
        const coursesRes = await ontology.listCourses();
        const courseId = Math.max(...coursesRes.map(c => c.id));

        for (const ph of p.phases) {
          await call("create-phase", { courseId, phaseNum: ph.num, title: ph.title });
        }
        for (const c of p.concepts) {
          await call("create-concept", { conceptId: c.id, label: c.label });
        }
        for (const edge of p.prereqs) {
          await call("add-prereq", { conceptId: edge[0], prereq: edge[1] });
        }
        for (const d of p.days) {
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
      } else if (mode === "extend" && parsedExtend && targetCourseId !== null) {
        const p = parsedExtend;
        const courseId = targetCourseId;

        const snapshot: Course = await ontology.fetchCourse(courseId);
        const tierIndex: Record<string, number> = {};
        for (const d of snapshot.days) {
          for (const tier of ["bronze", "silver", "gold"] as const) {
            tierIndex[`${d.id}.${tier}`] = d.cards.filter(c => c.tier === tier).length;
          }
        }

        for (const c of p.newConcepts) {
          await call("create-concept", { conceptId: c.id, label: c.label });
        }
        for (const edge of p.newPrereqs) {
          await call("add-prereq", { conceptId: edge[0], prereq: edge[1] });
        }
        for (const ph of p.newPhases) {
          await call("create-phase", { courseId, phaseNum: ph.num, title: ph.title });
        }
        for (const d of p.newDays) {
          await call("create-day", {
            courseId, dayId: d.id, phaseNum: d.phase, title: d.title,
            icon: d.icon, summary: d.summary, keyInsight: d.keyInsight,
          });
          const localIndex: Record<string, number> = { bronze: 0, silver: 0, gold: 0 };
          for (const card of d.cards) {
            const idx = localIndex[card.tier]++;
            const cardUid = `c${courseId}-d${d.id}-${card.tier}-${idx}`;
            await call("create-card", {
              cardUid, courseId, dayId: d.id, tier: card.tier,
              taskIndex: idx, text: card.text, detail: card.detail,
            });
            for (const concept of card.concepts) {
              await call("tag-card", { cardUid, conceptId: concept });
            }
          }
        }
        for (const card of p.insertedCards) {
          const key = `${card.dayId}.${card.tier}`;
          const idx = tierIndex[key] ?? 0;
          tierIndex[key] = idx + 1;
          const cardUid = `c${courseId}-d${card.dayId}-${card.tier}-${idx}`;
          await call("create-card", {
            cardUid, courseId, dayId: card.dayId, tier: card.tier,
            taskIndex: idx, text: card.text, detail: card.detail,
          });
          for (const concept of card.concepts) {
            await call("tag-card", { cardUid, conceptId: concept });
          }
        }

        setStep("done");
        setTimeout(() => router.push(`/course/${courseId}`), 800);
      }
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
          <div>
            <span className="text-sm opacity-70">Mode</span>
            <div className="mt-1 flex gap-2">
              <button
                className={`px-3 py-1 rounded border text-xs ${mode === "new" ? "border-[#f5f0e8]" : "border-[#2a2a3f] opacity-60"}`}
                onClick={() => setMode("new")}
              >New course</button>
              <button
                className={`px-3 py-1 rounded border text-xs ${mode === "extend" ? "border-[#f5f0e8]" : "border-[#2a2a3f] opacity-60"}`}
                onClick={() => setMode("extend")}
              >Extend existing course</button>
            </div>
          </div>

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

          <div>
            <span className="text-sm opacity-70">Or upload a new PDF</span>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleUpload}
                disabled={uploading}
                className="text-sm file:mr-2 file:px-2 file:py-1 file:rounded file:border file:border-[#2a2a3f] file:bg-[#1a1a2a] file:text-[#f5f0e8] hover:file:bg-[#2a2a3f] file:cursor-pointer"
              />
              {uploading && <span className="text-xs opacity-60">uploading…</span>}
            </div>
          </div>

          {mode === "new" && (
            <label className="block">
              <span className="text-sm opacity-70">Course title</span>
              <input
                className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Steinbruch Ch 5"
              />
            </label>
          )}

          {mode === "extend" && (
            <label className="block">
              <span className="text-sm opacity-70">Target course</span>
              <select
                className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
                value={targetCourseId ?? ""}
                onChange={e => setTargetCourseId(e.target.value ? parseInt(e.target.value, 10) : null)}
              >
                <option value="">— pick an existing course —</option>
                {courses.map(c => <option key={c.id} value={c.id}>Course {c.id} — {c.title}</option>)}
              </select>
            </label>
          )}

          <button
            className="px-4 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30"
            disabled={
              !filename ||
              (mode === "new" && !title) ||
              (mode === "extend" && targetCourseId === null)
            }
            onClick={parse}
          >Parse</button>
        </div>
      )}

      {step === "parsing" && (
        <div className="opacity-60">extracting pdf text + calling llm… ({parseElapsed}s)</div>
      )}

      {step === "review" && parsedNew && (
        <ReviewTree parsed={parsedNew} onCommit={commit} />
      )}
      {step === "review" && parsedExtend && (
        <ReviewExtend parsed={parsedExtend} onCommit={commit} />
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

function ReviewExtend({ parsed, onCommit }: { parsed: ParsedExtension; onCommit: () => void }) {
  const grouped: Record<number, ParsedExtension["insertedCards"]> = {};
  for (const c of parsed.insertedCards) {
    (grouped[c.dayId] ??= []).push(c);
  }
  return (
    <div>
      {parsed.newPhases.length > 0 && (
        <div className="mb-4">
          <div className="text-sm opacity-60">New phases</div>
          <ul className="list-disc pl-6">
            {parsed.newPhases.map(p => <li key={p.num}>{p.num}. {p.title}</li>)}
          </ul>
        </div>
      )}
      {parsed.newDays.length > 0 && (
        <div className="mb-4">
          <div className="text-sm opacity-60">New days ({parsed.newDays.length})</div>
          <ul className="space-y-2">
            {parsed.newDays.map(d => (
              <li key={d.id} className="p-3 rounded border border-[#2a2a3f]">
                <div className="font-display">{d.icon} Day {d.id} — {d.title}</div>
                <div className="text-xs opacity-60">Phase {d.phase} · {d.cards.length} cards</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {Object.keys(grouped).length > 0 && (
        <div className="mb-4">
          <div className="text-sm opacity-60">Added to existing days</div>
          <ul className="space-y-2">
            {Object.entries(grouped).map(([dayId, cards]) => (
              <li key={dayId} className="p-3 rounded border border-[#2a2a3f]">
                <div className="font-display">Day {dayId} — {cards.length} new cards</div>
                <ul className="mt-1 text-xs opacity-70 space-y-1">
                  {cards.map((c, i) => (
                    <li key={i}>
                      <span className="uppercase tracking-wider">{c.tier}</span> — {c.text.slice(0, 80)}{c.text.length > 80 && "…"}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-4">
        <div className="text-sm opacity-60">New concepts ({parsed.newConcepts.length})</div>
        <div className="flex flex-wrap gap-1 mt-1">
          {parsed.newConcepts.map(c => (
            <span key={c.id} className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a2a]">{c.label}</span>
          ))}
        </div>
      </div>
      <button className="px-4 py-2 rounded bg-phase1 hover:bg-phase2" onClick={onCommit}>Commit to store</button>
    </div>
  );
}
