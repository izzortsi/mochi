"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ontology } from "@/lib/ontology";
import { loadConfig, isConfigured } from "@/lib/settings";
import type { CourseSummary } from "@/lib/types";

type Step = "pick" | "importing" | "done";
type Mode = "new" | "extend";

export function ImportWizard() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("pick");
  const [mode, setMode] = useState<Mode>("new");
  const [files, setFiles] = useState<string[]>([]);
  const [filename, setFilename] = useState("");
  const [title, setTitle] = useState("");
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [targetCourseId, setTargetCourseId] = useState<number | null>(null);
  const [maxPages, setMaxPages] = useState(30);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    ontology.listPdfs().then(r => setFiles(r?.files ?? [])).catch(e => setError(String(e)));
    ontology.listCourses().then(setCourses).catch(() => setCourses([]));
  }, []);

  useEffect(() => {
    if (step !== "importing") { setElapsed(0); return; }
    timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
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

  const startImport = async () => {
    const config = loadConfig();
    if (!isConfigured(config)) {
      setError("LLM provider not configured — open Settings first.");
      return;
    }
    setStep("importing");
    setError(null);
    try {
      const result = await ontology.autoImport({
        filename,
        provider: config.provider,
        apiKey: config.apiKey,
        model: config.model,
        mode,
        title: mode === "new" ? title : undefined,
        targetCourseId: mode === "extend" ? targetCourseId ?? undefined : undefined,
        maxPages,
      });
      setStep("done");
      setTimeout(() => router.push(`/course/${result.courseId}`), 800);
    } catch (e) {
      setError(String(e));
      setStep("pick");
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl mb-4">Import course</h1>
      {error && <div className="mb-4 p-3 rounded bg-phase3/20 text-phase3 text-sm">{error}</div>}

      {step === "pick" && (
        <div className="space-y-4">
          <div>
            <span className="text-sm opacity-70">Mode</span>
            <div className="mt-1 flex gap-2">
              <button
                className={`px-3 py-1 rounded border text-xs ${mode === "new" ? "border-[#f5f0e8]" : "border-[#2a2a2a] opacity-60"}`}
                onClick={() => setMode("new")}
              >New course</button>
              <button
                className={`px-3 py-1 rounded border text-xs ${mode === "extend" ? "border-[#f5f0e8]" : "border-[#2a2a2a] opacity-60"}`}
                onClick={() => setMode("extend")}
              >Extend existing course</button>
            </div>
          </div>

          <label className="block">
            <span className="text-sm opacity-70">Source file</span>
            <select
              className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
              value={filename}
              onChange={e => setFilename(e.target.value)}
            >
              <option value="">— pick a file from backend/pdfs/ —</option>
              {files.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </label>

          <label className="block">
            <span className="text-sm opacity-70">Max pages to OCR</span>
            <input
              type="number"
              min={1}
              max={100}
              className="mt-1 w-24 bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
              value={maxPages}
              onChange={e => setMaxPages(Math.max(1, parseInt(e.target.value, 10) || 10))}
            />
            <span className="ml-2 text-xs opacity-40">lower = faster (~30s/page)</span>
          </label>

          <div>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleUpload}
                disabled={uploading}
                className="text-sm file:mr-2 file:px-2 file:py-1 file:rounded file:border file:border-[#2a2a2a] file:bg-[#1a1a1a] file:text-[#f5f0e8] hover:file:bg-[#2a2a2a] file:cursor-pointer"
              />
              {uploading && <span className="text-xs opacity-60">uploading…</span>}
            </div>
          </div>

          {mode === "new" && (
            <label className="block">
              <span className="text-sm opacity-70">Course title</span>
              <input
                className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
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
                className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
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
            onClick={startImport}
          >Import</button>
        </div>
      )}

      {step === "importing" && (
        <div className="space-y-3">
          <div className="opacity-60">extracting PDF text → calling LLM → committing to store… ({elapsed}s)</div>
          <div className="w-full bg-[#1a1a1a] rounded-full h-2 overflow-hidden">
            <div className="h-full bg-phase1 rounded-full animate-pulse" style={{ width: "60%" }} />
          </div>
        </div>
      )}

      {step === "done" && <div className="text-phase1">course imported — redirecting…</div>}
    </div>
  );
}
