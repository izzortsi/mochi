"use client";
import { useState } from "react";
import { ChevronDown, Check, Trash2 } from "lucide-react";
import Link from "next/link";
import { MathText } from "./MathText";
import type { CardUid, ConceptId } from "@/lib/types";

interface Props {
  cardUid: CardUid;
  text: string;
  detail: string;
  concepts: ConceptId[];
  notes: string[];
  completed: boolean;
  onToggle: (completed: boolean) => void;
  onDelete?: (cardUid: CardUid) => void;
}

export function TaskCard({ cardUid, text, detail, concepts, notes, completed, onToggle, onDelete }: Props) {
  const [reveal, setReveal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className={`rounded-xl border p-4 transition-colors ${completed ? "border-gold/50 bg-[#1a1a10]" : "border-[#2a2a3f] bg-[#121222]"}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(!completed)}
          className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${completed ? "bg-gold border-gold" : "border-[#3a3a4f]"}`}
          aria-label={completed ? "mark incomplete" : "mark complete"}
        >
          {completed && <Check className="w-3 h-3 text-[#0f0f1a]" />}
        </button>
        <div className="flex-1">
          <MathText>{text}</MathText>
          {concepts.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {concepts.map(c => (
                <Link key={c} href={`/concept/${encodeURIComponent(c)}`} className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a2a] hover:bg-[#2a2a3f] opacity-70">
                  {c}
                </Link>
              ))}
            </div>
          )}
          {notes.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {notes.map(n => (
                <Link key={n} href={`/notes/${encodeURIComponent(n)}`} className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a10] hover:bg-[#2a2a1f] text-gold/70 border border-gold/20">
                  {n}
                </Link>
              ))}
            </div>
          )}
          <button
            className="mt-2 text-xs opacity-50 hover:opacity-100 flex items-center gap-1"
            onClick={() => setReveal(r => !r)}
          >
            <ChevronDown className={`w-3 h-3 transition-transform ${reveal ? "rotate-180" : ""}`} />
            {reveal ? "hide solution" : "reveal solution"}
          </button>
          {reveal && (
            <div className="mt-2 p-3 rounded bg-[#0a0a14] font-mono text-sm">
              <MathText>{detail}</MathText>
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
                aria-label="delete card"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
