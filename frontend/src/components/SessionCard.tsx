"use client";
import { useState } from "react";
import { ChevronDown, Check, Trash2, Sparkles } from "lucide-react";
import Link from "next/link";
import { MathText } from "./MathText";
import type {
  CardUid, ConceptId, SessionPhases, PhaseName, EvalResult, EvalKind, ChatMessage,
} from "@/lib/types";
import { PHASE_NAMES } from "@/lib/types";
import { evalAttempt } from "@/lib/llm";
import { loadConfig, isConfigured } from "@/lib/settings";
import { api } from "@/lib/api";
import { phaseRef, promptRef } from "@/lib/refs";

// Event fired after any attempt (retrieval or elaborate) is persisted to the
// course chat thread. StudyChat listens for this so it can append the turn
// to its in-memory history live, without a reload.
export const CHAT_APPENDED_EVENT = "studyplan:chat-appended";
export interface ChatAppendedDetail {
  courseId: number;
  message: ChatMessage;
}

function parseCourseId(cardUid: string): number | null {
  const m = cardUid.match(/^c(\d+)-/);
  return m ? parseInt(m[1], 10) : null;
}

interface Props {
  cardUid: CardUid;
  concepts: ConceptId[];
  notes: string[];
  phases: SessionPhases;
  completedPhases: Partial<Record<PhaseName, boolean>>;
  onTogglePhase: (phase: PhaseName, next: boolean) => void;
  onDelete?: (cardUid: CardUid) => void;
}

const PHASE_META: Record<PhaseName, { label: string; hint: string }> = {
  prime: { label: "Prime", hint: "Activate prior knowledge. State the goal." },
  core: { label: "Core", hint: "Read through the material." },
  retrieval: { label: "Retrieval", hint: "Answer from memory, no peeking." },
  elaborate: { label: "Elaborate", hint: "Explain in your own words." },
  check: { label: "Check", hint: "Self-assess against the rubric." },
};

// Small inline code for addressing a phase/prompt in chat. Non-interactive
// on purpose — user types the ref themselves; this is the visible cheat
// sheet. Tooltip explains the scheme so first-time readers don't have to
// guess what "s:r1" means.
function RefPill({ code }: { code: string }) {
  return (
    <span
      title="Reference code — type it in chat to point the tutor at this item."
      className="text-[9px] font-mono px-1 py-px rounded bg-[#141414] border border-[#242424] text-neutral-500 tracking-wider"
    >
      {code}
    </span>
  );
}

export function SessionCard({
  cardUid, concepts, notes, phases, completedPhases, onTogglePhase, onDelete,
}: Props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [open, setOpen] = useState<Record<PhaseName, boolean>>({
    prime: false, core: false, retrieval: false, elaborate: false, check: false,
  });
  const doneCount = PHASE_NAMES.filter((p) => completedPhases?.[p]).length;
  const fullyDone = doneCount === PHASE_NAMES.length;

  return (
    <div
      className={`border transition-colors ${
        fullyDone ? "border-gold/40 bg-[#141009]" : "border-[#1f1f1f] bg-[#0c0c0c]"
      }`}
    >
      <div className="flex items-start gap-2 px-3 py-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] uppercase tracking-wider opacity-50 font-mono">
              {doneCount}/{PHASE_NAMES.length}
            </span>
            <div className="flex-1 h-px bg-[#1f1f1f]">
              <div
                className="h-full bg-gold/70"
                style={{ width: `${(doneCount / PHASE_NAMES.length) * 100}%` }}
              />
            </div>
          </div>
          {(concepts.length > 0 || notes.length > 0) && (
            <div className="flex flex-wrap gap-1">
              {concepts.map((c) => (
                <Link
                  key={c}
                  href={`/concept/${encodeURIComponent(c)}`}
                  className="text-[10px] px-1.5 py-px bg-[#141414] hover:bg-[#2a2a2a] text-neutral-300"
                >
                  {c}
                </Link>
              ))}
              {notes.map((n) => (
                <Link
                  key={n}
                  href={`/notes/${encodeURIComponent(n)}`}
                  className="text-[10px] px-1.5 py-px bg-[#141009] hover:bg-[#26220f] text-gold/80 border border-gold/20"
                >
                  {n}
                </Link>
              ))}
            </div>
          )}
        </div>
        {onDelete && (
          <div className="flex-shrink-0">
            {confirmDelete ? (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onDelete(cardUid)}
                  className="text-[10px] px-1.5 py-0.5 bg-red-700 hover:bg-red-600 text-white"
                >
                  delete
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="text-[10px] px-1.5 py-0.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-neutral-400"
                >
                  cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmDelete(true)}
                className="opacity-20 hover:opacity-70 transition-opacity"
                aria-label="delete session"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="divide-y divide-[#1a1a1a] border-t border-[#1a1a1a]">
        {PHASE_NAMES.map((p) => {
          const done = !!completedPhases?.[p];
          const isOpen = open[p];
          const ref = phaseRef(cardUid, p);
          return (
            <div key={p}>
              <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#0f0f0f] transition-colors">
                <button
                  onClick={() => onTogglePhase(p, !done)}
                  className={`w-3.5 h-3.5 border flex items-center justify-center flex-shrink-0 ${
                    done ? "bg-gold border-gold" : "border-[#404040] hover:border-[#666]"
                  }`}
                  aria-label={done ? `mark ${p} incomplete` : `mark ${p} complete`}
                >
                  {done && <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />}
                </button>
                <button
                  onClick={() => setOpen((s) => ({ ...s, [p]: !s[p] }))}
                  className="flex items-center gap-2 flex-1 text-left min-w-0"
                >
                  <span className={`text-[11px] uppercase tracking-wider font-mono ${done ? "opacity-40" : "text-neutral-200"}`}>
                    {PHASE_META[p].label}
                  </span>
                  {ref && <RefPill code={ref} />}
                  <span className="text-[10px] opacity-40 truncate">{PHASE_META[p].hint}</span>
                  <ChevronDown
                    className={`w-3 h-3 ml-auto opacity-40 transition-transform flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isOpen && (
                <div className="px-3 pb-3 pt-1 text-sm bg-[#080808]">
                  <PhaseContent phase={p} phases={phases} cardUid={cardUid} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PhaseContent({
  phase, phases, cardUid,
}: { phase: PhaseName; phases: SessionPhases; cardUid: CardUid }) {
  if (phase === "prime") {
    const { goal, priorKnowledge } = phases.prime;
    if (!goal && !priorKnowledge) return <Empty />;
    return (
      <div className="space-y-2">
        {goal && <Labeled label="Goal"><MathText>{goal}</MathText></Labeled>}
        {priorKnowledge && (
          <Labeled label="Prior knowledge"><MathText>{priorKnowledge}</MathText></Labeled>
        )}
      </div>
    );
  }
  if (phase === "core") {
    const { exposition, workedExample, problem } = phases.core;
    if (!exposition && !workedExample && !problem) return <Empty />;
    return (
      <div className="space-y-2">
        {exposition && (
          <Labeled label="Exposition"><MathText>{exposition}</MathText></Labeled>
        )}
        {workedExample && (
          <Labeled label="Worked example">
            <MathText>{workedExample}</MathText>
          </Labeled>
        )}
        {problem && <Labeled label="Problem"><MathText>{problem}</MathText></Labeled>}
      </div>
    );
  }
  if (phase === "retrieval") {
    const prompts = phases.retrieval.prompts;
    if (!prompts.length) return <Empty />;
    return (
      <ol className="space-y-3 list-decimal list-inside">
        {prompts.map((p, i) => (
          <RetrievalItem key={p.id} prompt={p} cardUid={cardUid} index={i} />
        ))}
      </ol>
    );
  }
  if (phase === "elaborate") {
    const prompts = phases.elaborate.prompts;
    if (!prompts.length) return <Empty />;
    return (
      <ol className="space-y-3 list-decimal list-inside">
        {prompts.map((p, i) => (
          <ElaborateItem key={p.id} prompt={p} cardUid={cardUid} index={i} />
        ))}
      </ol>
    );
  }
  const { prompt, rubric } = phases.check;
  if (!prompt && !rubric) return <Empty />;
  return (
    <div className="space-y-2">
      {prompt && <Labeled label="Prompt"><MathText>{prompt}</MathText></Labeled>}
      {rubric && <Labeled label="Rubric"><MathText>{rubric}</MathText></Labeled>}
    </div>
  );
}

function Labeled({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider opacity-40 mb-0.5 font-mono">{label}</div>
      {children}
    </div>
  );
}

function Empty() {
  return <div className="text-[11px] opacity-30 italic">empty</div>;
}

function RetrievalItem({
  prompt, cardUid, index,
}: {
  prompt: { id: string; prompt: string; answer: string; concept?: string | null };
  cardUid: CardUid;
  index: number;
}) {
  const [show, setShow] = useState(false);
  const ref = promptRef(cardUid, "retrieval", index);
  return (
    <li>
      <span className="inline-flex items-center gap-1.5">
        {ref && <RefPill code={ref} />}
        <MathText>{prompt.prompt}</MathText>
      </span>
      <AttemptBox
        kind="retrieval"
        prompt={prompt.prompt}
        answer={prompt.answer}
        concept={prompt.concept ?? null}
        cardUid={cardUid}
        promptId={prompt.id}
      />
      {prompt.answer && (
        <div className="mt-1">
          <button
            onClick={() => setShow((s) => !s)}
            className="text-[11px] opacity-40 hover:opacity-100 flex items-center gap-1 font-mono uppercase tracking-wider"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform ${show ? "rotate-180" : ""}`}
            />
            {show ? "hide answer" : "reveal"}
          </button>
          {show && (
            <div className="mt-1 p-2 border border-[#1f1f1f] bg-[#050505] font-mono text-xs">
              <MathText>{prompt.answer}</MathText>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

function ElaborateItem({
  prompt, cardUid, index,
}: {
  prompt: { id: string; prompt: string };
  cardUid: CardUid;
  index: number;
}) {
  const ref = promptRef(cardUid, "elaborate", index);
  return (
    <li>
      <span className="inline-flex items-center gap-1.5">
        {ref && <RefPill code={ref} />}
        <MathText>{prompt.prompt}</MathText>
      </span>
      <AttemptBox
        kind="elaborate"
        prompt={prompt.prompt}
        cardUid={cardUid}
        promptId={prompt.id}
      />
    </li>
  );
}

const RETRIEVAL_VERDICT_STYLE: Record<string, string> = {
  correct: "border-green-800/60 text-green-300",
  partial: "border-amber-800/60 text-amber-300",
  wrong: "border-red-800/60 text-red-300",
};

const ELABORATE_VERDICT_STYLE: Record<string, string> = {
  strong: "border-green-800/60 text-green-300",
  adequate: "border-amber-800/60 text-amber-300",
  weak: "border-red-800/60 text-red-300",
};

function AttemptBox({
  kind,
  prompt,
  answer,
  concept,
  cardUid,
  promptId,
}: {
  kind: EvalKind;
  prompt: string;
  answer?: string;
  concept?: string | null;
  cardUid: CardUid;
  promptId: string;
}) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<EvalResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [piped, setPiped] = useState(false);

  const pipeToTutor = async (r: EvalResult, attempt: string) => {
    const courseId = parseCourseId(cardUid);
    if (courseId == null) return;
    const lines = [
      `[${kind}-eval · ${cardUid} / ${promptId}]`,
      `prompt: ${prompt}`,
      `attempt: ${attempt}`,
      `verdict: ${r.verdict}`,
      r.feedback ? `feedback: ${r.feedback}` : null,
    ].filter(Boolean);
    const message: ChatMessage = {
      role: "tool",
      content: lines.join("\n"),
      toolName: `${kind}-eval`,
      timestamp: new Date().toISOString(),
    };
    try {
      await api.memory.appendChat(courseId, message);
      setPiped(true);
      // Let any open StudyChat on this course update in-place.
      window.dispatchEvent(
        new CustomEvent<ChatAppendedDetail>(CHAT_APPENDED_EVENT, {
          detail: { courseId, message },
        }),
      );
    } catch {
      // non-fatal — the eval result still shows, just not piped
    }
  };

  const submit = async () => {
    if (!text.trim() || busy) return;
    const config = loadConfig();
    if (!isConfigured(config)) {
      setError("Configure your LLM provider in Settings first.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const r = await evalAttempt(config, {
        kind,
        prompt,
        attempt: text,
        answer,
        concept: concept ?? undefined,
      });
      setResult(r);
      pipeToTutor(r, text);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const styleMap =
    kind === "retrieval" ? RETRIEVAL_VERDICT_STYLE : ELABORATE_VERDICT_STYLE;

  return (
    <div className="mt-1.5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={kind === "retrieval" ? "your answer…" : "explain in your own words…"}
        rows={kind === "retrieval" ? 2 : 3}
        className="w-full bg-[#050505] border border-[#1f1f1f] focus:border-[#404040] outline-none p-1.5 text-xs font-mono resize-y placeholder:opacity-30"
      />
      <div className="mt-1 flex items-center gap-2">
        <button
          onClick={submit}
          disabled={busy || !text.trim()}
          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-mono px-2 py-1 border border-neutral-700 hover:border-neutral-500 hover:bg-[#141414] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-3 h-3" />
          {busy ? "evaluating…" : "submit for eval"}
        </button>
        {result && (
          <button
            onClick={() => {
              setResult(null);
              setError(null);
              setText("");
            }}
            className="text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100"
          >
            clear
          </button>
        )}
      </div>
      {error && (
        <div className="mt-1 text-[11px] text-red-400 font-mono">{error}</div>
      )}
      {result && (
        <div
          className={`mt-1.5 border p-2 text-xs ${
            styleMap[result.verdict] ?? "border-[#2a2a2a] text-neutral-300"
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <span className="text-[10px] uppercase tracking-wider font-mono opacity-70">
              {result.verdict}
            </span>
            {piped && (
              <span className="text-[9px] uppercase tracking-wider font-mono opacity-40">
                · piped to tutor
              </span>
            )}
          </div>
          <div className="text-neutral-200">
            <MathText>{result.feedback}</MathText>
          </div>
        </div>
      )}
    </div>
  );
}
