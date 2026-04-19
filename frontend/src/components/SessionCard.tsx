"use client";
import { useState } from "react";
import { ChevronDown, Check, Trash2 } from "lucide-react";
import Link from "next/link";
import { MathText } from "./MathText";
import type { CardUid, ConceptId, SessionPhases, PhaseName } from "@/lib/types";
import { PHASE_NAMES } from "@/lib/types";

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
      className={`rounded-xl border transition-colors ${
        fullyDone ? "border-gold/50 bg-[#1a1a10]" : "border-[#2a2a3f] bg-[#121222]"
      }`}
    >
      <div className="flex items-start gap-3 p-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-wider opacity-50">
              {doneCount}/{PHASE_NAMES.length} phases
            </span>
            <div className="flex-1 h-1 rounded-full bg-[#1a1a2a] overflow-hidden">
              <div
                className="h-full rounded-full bg-gold/60"
                style={{ width: `${(doneCount / PHASE_NAMES.length) * 100}%` }}
              />
            </div>
          </div>
          {(concepts.length > 0 || notes.length > 0) && (
            <div className="mb-2 flex flex-wrap gap-1">
              {concepts.map((c) => (
                <Link
                  key={c}
                  href={`/concept/${encodeURIComponent(c)}`}
                  className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a2a] hover:bg-[#2a2a3f] opacity-70"
                >
                  {c}
                </Link>
              ))}
              {notes.map((n) => (
                <Link
                  key={n}
                  href={`/notes/${encodeURIComponent(n)}`}
                  className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a10] hover:bg-[#2a2a1f] text-gold/70 border border-gold/20"
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
                  className="text-xs px-2 py-1 rounded bg-red-600/80 hover:bg-red-600 text-white"
                >
                  delete
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="text-xs px-2 py-1 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f] opacity-70"
                >
                  cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmDelete(true)}
                className="opacity-20 hover:opacity-60 transition-opacity"
                aria-label="delete session"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="divide-y divide-[#1a1a2a] border-t border-[#1a1a2a]">
        {PHASE_NAMES.map((p) => {
          const done = !!completedPhases?.[p];
          const isOpen = open[p];
          return (
            <div key={p}>
              <div className="flex items-center gap-3 px-4 py-2">
                <button
                  onClick={() => onTogglePhase(p, !done)}
                  className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                    done ? "bg-gold border-gold" : "border-[#3a3a4f]"
                  }`}
                  aria-label={done ? `mark ${p} incomplete` : `mark ${p} complete`}
                >
                  {done && <Check className="w-3 h-3 text-[#0f0f1a]" />}
                </button>
                <button
                  onClick={() => setOpen((s) => ({ ...s, [p]: !s[p] }))}
                  className="flex items-center gap-2 flex-1 text-left"
                >
                  <span className={`text-sm font-medium ${done ? "opacity-50" : ""}`}>
                    {PHASE_META[p].label}
                  </span>
                  <span className="text-xs opacity-40">— {PHASE_META[p].hint}</span>
                  <ChevronDown
                    className={`w-3 h-3 ml-auto opacity-50 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-sm">
                  <PhaseContent phase={p} phases={phases} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PhaseContent({ phase, phases }: { phase: PhaseName; phases: SessionPhases }) {
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
        {prompts.map((p) => <RetrievalItem key={p.id} prompt={p} />)}
      </ol>
    );
  }
  if (phase === "elaborate") {
    const prompts = phases.elaborate.prompts;
    if (!prompts.length) return <Empty />;
    return (
      <ol className="space-y-2 list-decimal list-inside">
        {prompts.map((p) => (
          <li key={p.id}><MathText>{p.prompt}</MathText></li>
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
      <div className="text-xs uppercase tracking-wider opacity-40 mb-1">{label}</div>
      {children}
    </div>
  );
}

function Empty() {
  return <div className="text-xs opacity-40 italic">(empty — add content via LLM import or edit)</div>;
}

function RetrievalItem({
  prompt,
}: {
  prompt: { id: string; prompt: string; answer: string };
}) {
  const [show, setShow] = useState(false);
  return (
    <li>
      <MathText>{prompt.prompt}</MathText>
      {prompt.answer && (
        <div className="mt-1">
          <button
            onClick={() => setShow((s) => !s)}
            className="text-xs opacity-50 hover:opacity-100 flex items-center gap-1"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform ${show ? "rotate-180" : ""}`}
            />
            {show ? "hide answer" : "reveal answer"}
          </button>
          {show && (
            <div className="mt-1 p-2 rounded bg-[#0a0a14] font-mono text-xs">
              <MathText>{prompt.answer}</MathText>
            </div>
          )}
        </div>
      )}
    </li>
  );
}
