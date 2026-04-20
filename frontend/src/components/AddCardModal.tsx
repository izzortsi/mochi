"use client";
import { useEffect, useRef, useState } from "react";
import { X, Plus } from "lucide-react";
import { ontology } from "@/lib/ontology";
import { WsClient } from "@/lib/ws";
import type { Course, Tier, ConceptNode, ConnectionStatus } from "@/lib/types";
import { MathText } from "./MathText";

interface Props {
  courseId: number;
  days: Array<{ id: number; title: string }>;
  onClose: () => void;
  onSaved: () => void;
}

interface Chip { id: string; label: string; isNew: boolean; }

function toKebab(key: string): string {
  return key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function kebabKeys(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    out[toKebab(k)] = v;
  }
  return out;
}

export function AddCardModal({ courseId, days, onClose, onSaved }: Props) {
  const [dayId, setDayId] = useState<number | null>(days[0]?.id ?? null);
  const [tier, setTier] = useState<Tier>("bronze");
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [conceptPool, setConceptPool] = useState<ConceptNode[]>([]);
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WsClient | null>(null);

  useEffect(() => {
    ontology.fetchConceptMapAll()
      .then(m => setConceptPool(m.nodes))
      .catch(() => setConceptPool([]));
    const ws = new WsClient("ws://localhost:4000/ws", () => {}, setStatus);
    ws.connect();
    wsRef.current = ws;
    return () => ws.disconnect();
  }, []);

  const chipIds = new Set(chips.map(c => c.id));
  const suggestions = query.trim().length > 0
    ? conceptPool.filter(c =>
        (c.id.includes(query.toLowerCase()) || c.label.toLowerCase().includes(query.toLowerCase()))
        && !chipIds.has(c.id))
    : [];
  const queryMatchesExisting = conceptPool.some(c => c.id === query.trim());
  const canMintNew = query.trim().length > 0 && !queryMatchesExisting && !chipIds.has(query.trim());

  const addChip = (id: string, label: string, isNew: boolean) => {
    setChips(xs => [...xs, { id, label, isNew }]);
    setQuery("");
  };
  const removeChip = (id: string) => setChips(xs => xs.filter(c => c.id !== id));

  const canSave = dayId !== null && text.trim() !== "" && detail.trim() !== "" && !saving;

  const save = async () => {
    if (!canSave || !wsRef.current || dayId === null) return;
    setSaving(true);
    setError(null);
    try {
      const course: Course = await ontology.fetchCourse(courseId);
      const day = course.days.find(d => d.id === dayId);
      if (!day) throw new Error(`day ${dayId} not found in course ${courseId}`);
      const nextIndex = day.cards.filter(c => c.tier === tier).length;
      const cardUid = `c${courseId}-d${dayId}-${tier}-${nextIndex}`;

      const ws = wsRef.current;
      const call = (name: string, args: Record<string, unknown>): Promise<void> =>
        new Promise((resolve) => {
          const requestId = Math.random().toString(36).slice(2, 10);
          ws.send(JSON.stringify({ call: name, args: kebabKeys(args), requestId }));
          setTimeout(resolve, 60);
        });

      for (const chip of chips) {
        if (chip.isNew) {
          await call("create-concept", { conceptId: chip.id, label: chip.label });
        }
      }
      await call("create-card", {
        cardUid, courseId, dayId, tier,
        taskIndex: nextIndex, text, detail,
      });
      for (const chip of chips) {
        await call("tag-card", { cardUid, conceptId: chip.id });
      }

      onSaved();
    } catch (e) {
      setError(String(e));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-xl p-6 w-[36rem] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display text-xl">Add card</h2>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>

        <div className="text-xs opacity-50 mb-3">ws: {status}</div>
        {error && <div className="mb-3 p-2 rounded bg-phase3/20 text-phase3 text-sm">{error}</div>}

        <label className="block mb-3">
          <span className="text-sm opacity-70">Day</span>
          <select
            className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
            value={dayId ?? ""}
            onChange={e => setDayId(parseInt(e.target.value, 10))}
          >
            {days.map(d => <option key={d.id} value={d.id}>Day {d.id} — {d.title}</option>)}
          </select>
        </label>

        <div className="mb-3">
          <span className="text-sm opacity-70">Tier</span>
          <div className="mt-1 flex gap-2">
            {(["bronze", "silver", "gold"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-3 py-1 rounded border text-xs uppercase tracking-wider ${
                  tier === t ? "border-[#f5f0e8]" : "border-[#2a2a2a] opacity-60"
                }`}
              >{t}</button>
            ))}
          </div>
        </div>

        <label className="block mb-1">
          <span className="text-sm opacity-70">Problem text (LaTeX)</span>
          <textarea
            className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2 font-mono text-sm"
            rows={3}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </label>
        {text && (
          <div className="mb-3 p-2 rounded bg-[#050505] text-sm">
            <div className="text-xs opacity-40 mb-1">preview</div>
            <MathText>{text}</MathText>
          </div>
        )}

        <label className="block mb-1">
          <span className="text-sm opacity-70">Solution (LaTeX)</span>
          <textarea
            className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2 font-mono text-sm"
            rows={3}
            value={detail}
            onChange={e => setDetail(e.target.value)}
          />
        </label>
        {detail && (
          <div className="mb-3 p-2 rounded bg-[#050505] text-sm">
            <div className="text-xs opacity-40 mb-1">preview</div>
            <MathText>{detail}</MathText>
          </div>
        )}

        <div className="mb-4">
          <span className="text-sm opacity-70">Concepts</span>
          <div className="mt-1 flex flex-wrap gap-1 mb-2">
            {chips.map(c => (
              <span key={c.id} className={`text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${c.isNew ? "bg-phase1/30" : "bg-[#1a1a1a]"}`}>
                {c.label}
                <button onClick={() => removeChip(c.id)} className="opacity-60 hover:opacity-100"><X className="w-3 h-3" /></button>
              </span>
            ))}
          </div>
          <input
            className="w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-1 text-sm"
            placeholder="search or add concept…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {(suggestions.length > 0 || canMintNew) && (
            <div className="mt-1 max-h-32 overflow-y-auto border border-[#2a2a2a] rounded bg-[#050505]">
              {suggestions.map(s => (
                <button
                  key={s.id}
                  className="w-full text-left px-3 py-1 text-xs hover:bg-[#1a1a1a]"
                  onClick={() => addChip(s.id, s.label, false)}
                >
                  {s.label} <span className="opacity-40">{s.id}</span>
                </button>
              ))}
              {canMintNew && (
                <button
                  className="w-full text-left px-3 py-1 text-xs hover:bg-[#1a1a1a] text-phase1 inline-flex items-center gap-1"
                  onClick={() => addChip(query.trim(), query.trim(), true)}
                >
                  <Plus className="w-3 h-3" /> create &quot;{query.trim()}&quot;
                </button>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 rounded bg-[#1a1a1a] hover:bg-[#2a2a2a]">Cancel</button>
          <button
            onClick={save}
            disabled={!canSave}
            className="px-3 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30"
          >{saving ? "saving…" : "Save"}</button>
        </div>
      </div>
    </div>
  );
}
