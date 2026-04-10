"use client";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { MathText } from "./MathText";
import type { TaskItem, Tier } from "@/lib/types";

interface Props {
  dayId: number;
  tier: Tier;
  index: number;
  item: TaskItem;
  completed: boolean;
  onToggle: (completed: boolean) => void;
}

export function TaskCard({ item, completed, onToggle }: Props) {
  const [reveal, setReveal] = useState(false);
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
          <MathText>{item.text}</MathText>
          <button
            className="mt-2 text-xs opacity-50 hover:opacity-100 flex items-center gap-1"
            onClick={() => setReveal(r => !r)}
          >
            <ChevronDown className={`w-3 h-3 transition-transform ${reveal ? "rotate-180" : ""}`} />
            {reveal ? "hide solution" : "reveal solution"}
          </button>
          {reveal && (
            <div className="mt-2 p-3 rounded bg-[#0a0a14] font-mono text-sm">
              <MathText>{item.detail}</MathText>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
