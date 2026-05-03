"use client";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { api, camelizeKeys, PET_REFRESH_EVENT } from "@/lib/api";

// Each mood is a list of frame variants (the pet animates by cycling them).
// Pre-multi-frame pets had `string[]` per mood; the migration in the backend
// re-renders any such pets, but we keep a runtime guard in `pickFrame` too.
type Frame = string[];
type MoodArt = Frame[] | Frame; // legacy single-frame still tolerated

// Floating chips above the pet: HP / JOY / XP gains, plus stage evolution.
type FloatingKind = "hp" | "joy" | "xp" | "evolve";
interface FloatingDelta { id: number; kind: FloatingKind; text: string; }

const FLOATING_STYLES: Record<FloatingKind, string> = {
  hp:     "text-emerald-300 border-emerald-700/50",
  joy:    "text-pink-300 border-pink-700/50",
  xp:     "text-amber-300 border-amber-700/50",
  evolve: "text-yellow-200 border-yellow-600/60",
};

let _floatId = 0;
function nextFloatId(): number { return ++_floatId; }

interface PetState {
  id: string | null;
  name: string | null;
  stage: string;
  health: number;
  happiness: number;
  mood: string;
  art: Record<string, MoodArt>;
  died?: string | null;
  born?: string | null;
  lastFed?: string | null;
  totalXpEarned?: number;
  rehatchTokens?: number;
  stats?: {
    perseverance: number;
    curiosity: number;
    audacity: number;
    knowledge: number;
  };
}

const MOOD_COLORS: Record<string, string> = {
  happy: "text-amber-300",
  idle: "text-orange-300",
  hungry: "text-orange-400",
  sad: "text-orange-500",
  desperate: "text-red-500",
  dead: "text-stone-500",
  waiting: "text-stone-400",
};

const MOOD_ANIM: Record<string, { animate: object; transition: object }> = {
  happy: {
    animate: { y: [0, -2, 0] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
  idle: {
    animate: { scale: [1, 1.02, 1] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  hungry: {
    animate: { rotate: [0, -1, 1, -1, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  sad: {
    animate: { opacity: [1, 0.6, 1] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  desperate: {
    animate: { x: [0, -1.5, 1.5, -1, 1, 0] },
    transition: { duration: 0.5, repeat: Infinity, ease: "linear" },
  },
  dead: {
    animate: { opacity: [1, 0.35, 1] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
  waiting: {
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const STAGE_BORDER: Record<string, string> = {
  coal: "#57534e",
  spark: "#fbbf24",
  emberling: "#f59e0b",
  ember: "#f97316",
  fire: "#fb923c",
};

const STAGE_XP_THRESHOLDS: Record<string, { current: number; next: number | null }> = {
  spark: { current: 0, next: 100 },
  emberling: { current: 100, next: 500 },
  ember: { current: 500, next: 1500 },
  fire: { current: 1500, next: null },
};

// One-shot reactions triggered by clicking the pet. Picked at random on each
// click and cleared by setTimeout so the mood loop resumes afterward.
type Reaction = "vibrate" | "hop" | "spin";
const REACTION_KEYS: Reaction[] = ["vibrate", "hop", "spin"];

const REACTIONS: Record<Reaction, {
  animate: Record<string, number[]>;
  transition: { duration: number; ease: string };
  holdMs: number;
}> = {
  vibrate: {
    animate: { x: [0, -2, 2, -2, 2, -1, 1, 0] },
    transition: { duration: 0.5, ease: "easeOut" },
    holdMs: 550,
  },
  hop: {
    animate: { y: [0, -10, 0, -4, 0] },
    transition: { duration: 0.6, ease: "easeOut" },
    holdMs: 650,
  },
  spin: {
    animate: { rotate: [0, 15, -15, 10, -5, 0] },
    transition: { duration: 0.7, ease: "easeOut" },
    holdMs: 750,
  },
};

// Normalize a mood entry to a list of frames. Tolerates both the new
// `string[][]` shape and legacy `string[]` (treats it as a single frame).
function asFrames(entry: MoodArt | undefined): Frame[] {
  if (!entry || (Array.isArray(entry) && entry.length === 0)) return [];
  // Legacy: array of strings → wrap as one frame.
  if (typeof (entry as Frame)[0] === "string") return [entry as Frame];
  return entry as Frame[];
}

// Compute the inclusive [start, endExclusive) row range that is non-blank
// in *any* frame of *any* mood. We use this as a stable trim window so the
// pet's rendered height doesn't change across animation frames or mood
// transitions — without a stable window the header would reflow every tick
// (different variants put sparks on different rows), cascading into the
// Tutor panel via the ResizeObserver. Stage transitions still recompute it.
function computeStableBounds(art: Record<string, MoodArt>): { start: number; end: number } {
  let start = Number.POSITIVE_INFINITY;
  let end = -1;
  for (const entry of Object.values(art ?? {})) {
    for (const frame of asFrames(entry)) {
      for (let i = 0; i < frame.length; i++) {
        if (frame[i].trim() !== "") {
          if (i < start) start = i;
          if (i > end) end = i;
        }
      }
    }
  }
  if (end < 0) return { start: 0, end: 0 };
  return { start: start === Number.POSITIVE_INFINITY ? 0 : start, end: end + 1 };
}

function pickFrame(
  art: Record<string, MoodArt>,
  mood: string,
  tick: number,
  bounds: { start: number; end: number },
): string[] {
  // Map UI moods to which mood-art bucket to draw from.
  const sourceMood =
    mood === "waiting" ? "idle" :
    mood === "hungry" || mood === "sad" || mood === "desperate" ? "idle" :
    mood;

  let frames = asFrames(art[sourceMood]);
  if (!frames.length) frames = asFrames(art.idle);
  if (!frames.length) return [];

  const frame = frames[tick % frames.length] ?? frames[0];
  return frame.slice(bounds.start, bounds.end);
}

async function fetchPet(): Promise<PetState> {
  const res = await fetch("/api/pet");
  if (!res.ok) throw new Error("pet fetch failed");
  return camelizeKeys<PetState>(await res.json());
}

async function hatchPet(name: string): Promise<{ ok: boolean; name: string }> {
  const res = await fetch("/api/pet/hatch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text.slice(0, 300));
  }
  return camelizeKeys<{ ok: boolean; name: string }>(await res.json());
}

async function rehatchPet(): Promise<{ ok: boolean; rehatchTokens: number }> {
  const res = await fetch("/api/pet/rehatch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text.slice(0, 300));
  }
  return camelizeKeys<{ ok: boolean; rehatchTokens: number }>(await res.json());
}

function healthGradient(hp: number): { background: string; boxShadow: string } {
  if (hp > 60) return {
    background: "linear-gradient(90deg, #22c55e, #4ade80)",
    boxShadow: "0 0 6px rgba(34,197,94,0.3)",
  };
  if (hp > 30) return {
    background: "linear-gradient(90deg, #eab308, #facc15)",
    boxShadow: "0 0 6px rgba(234,179,8,0.3)",
  };
  return {
    background: "linear-gradient(90deg, #dc2626, #ef4444)",
    boxShadow: "0 0 8px rgba(220,38,38,0.4)",
  };
}

interface PetCreatureProps {
  // Trim the stats column to just name + HP + Joy. Stage XP, rehatch
  // button, the four-stat grid, and the total-XP line all hide. Used in
  // the mobile tutor sheet where vertical space is at a premium.
  compact?: boolean;
}

export function PetCreature({ compact = false }: PetCreatureProps = {}) {
  const [pet, setPet] = useState<PetState | null>(null);
  const [tick, setTick] = useState(0);
  const [showHatch, setShowHatch] = useState(false);
  const [hatchName, setHatchName] = useState("");
  const [hatching, setHatching] = useState(false);
  const [rerolling, setRerolling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [heartKey, setHeartKey] = useState(0);
  const [petStatus, setPetStatus] = useState<"ok" | "cooldown" | null>(null);
  const [quote, setQuote] = useState<string | null>(null);
  const [quoteKey, setQuoteKey] = useState(0);
  const quoteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showRerollConfirm, setShowRerollConfirm] = useState(false);
  // Floating "+N HP" / "+N JOY" / "+N XP" / EVOLVED chips that rise above
  // the pet whenever the deltas land — gamification feedback so studying
  // visibly feeds the creature.
  const [floats, setFloats] = useState<FloatingDelta[]>([]);
  const prevPetRef = useRef<PetState | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const refresh = useCallback(() => {
    fetchPet().then(setPet).catch(() => {});
  }, []);

  useEffect(() => {
    refresh();
    // Slow background poll keeps mood/decay in sync; immediate refreshes
    // come from the PET_REFRESH_EVENT below (fired by api.complete /
    // completePhase right after the user feeds their pet via studying).
    pollingRef.current = setInterval(refresh, 30000);
    const onFeed = () => refresh();
    window.addEventListener(PET_REFRESH_EVENT, onFeed);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
      window.removeEventListener(PET_REFRESH_EVENT, onFeed);
    };
  }, [refresh]);

  // Diff incoming pet state vs the last seen; float gains as chips. Only
  // POSITIVE deltas — decay is silent so the pet doesn't constantly nag.
  useEffect(() => {
    const prev = prevPetRef.current;
    prevPetRef.current = pet;
    if (!pet || !prev || prev.id !== pet.id) return;

    const additions: FloatingDelta[] = [];
    const dHp  = Math.round((pet.health    ?? 0) - (prev.health    ?? 0));
    const dJoy = Math.round((pet.happiness ?? 0) - (prev.happiness ?? 0));
    const dXp  = Math.round((pet.totalXpEarned ?? 0) - (prev.totalXpEarned ?? 0));
    if (dXp  >= 1) additions.push({ id: nextFloatId(), kind: "xp",  text: `+${dXp} XP`  });
    if (dHp  >= 1) additions.push({ id: nextFloatId(), kind: "hp",  text: `+${dHp} HP`  });
    if (dJoy >= 1) additions.push({ id: nextFloatId(), kind: "joy", text: `+${dJoy} JOY` });
    if (prev.stage !== pet.stage && pet.stage !== "coal") {
      additions.push({ id: nextFloatId(), kind: "evolve", text: `→ ${pet.stage}` });
      // Surface the per-stat growth granted by the backend's evolve_stats
      // helper. Only fires on stage transitions so re-roll variance stays
      // silent (re-rolls swap stats, evolution adds them).
      if (prev.stats && pet.stats) {
        const labels: Record<keyof NonNullable<PetState["stats"]>, string> = {
          perseverance: "PER",
          curiosity: "CUR",
          audacity: "AUD",
          knowledge: "KNO",
        };
        for (const k of Object.keys(labels) as (keyof typeof labels)[]) {
          const before = prev.stats[k];
          const after = pet.stats[k];
          const dStat = after - before;
          if (dStat >= 1) {
            additions.push({ id: nextFloatId(), kind: "evolve", text: `+${dStat} ${labels[k]}` });
          }
        }
      }
    }
    if (additions.length === 0) return;
    setFloats(curr => [...curr, ...additions]);
    // Auto-expire each chip ~2.4s after it's added (matches the rise+fade
    // animation duration on the rendered side).
    for (const f of additions) {
      setTimeout(() => setFloats(curr => curr.filter(x => x.id !== f.id)), 2400);
    }
  }, [pet]);

  useEffect(() => {
    const frameInterval = setInterval(() => setTick(t => t + 1), 800);
    return () => clearInterval(frameInterval);
  }, []);

  useEffect(() => {
    return () => {
      if (reactionTimerRef.current) clearTimeout(reactionTimerRef.current);
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
      if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
    };
  }, []);

  // Stable bounding box across all moods × variants for this art bag —
  // recomputes only when the art object reference changes (stage transition
  // or rehatch), not every animation tick. MUST be declared before any
  // early-return so the hook order stays consistent across renders.
  const bounds = useMemo(
    () => pet ? computeStableBounds(pet.art) : { start: 0, end: 0 },
    [pet?.art],
  );

  if (!pet) return null;

  const isCoal = pet.stage === "coal";
  const isDead = !!pet.died || pet.mood === "dead";
  const colorClass = MOOD_COLORS[pet.mood] || "text-gray-300";
  const frame = pickFrame(pet.art, pet.mood, tick, bounds);
  const anim = MOOD_ANIM[pet.mood] || MOOD_ANIM.idle;

  const stageLabel = pet.stage?.charAt(0).toUpperCase() + pet.stage?.slice(1);
  const thresholds = STAGE_XP_THRESHOLDS[pet.stage];
  const xpToNext = thresholds?.next ?? null;
  const xpForCurrent = thresholds?.current ?? 0;
  const xpProgress = xpToNext && pet.totalXpEarned != null
    ? Math.min(100, ((pet.totalXpEarned - xpForCurrent) / (xpToNext - xpForCurrent)) * 100)
    : 100;

  const handleHatch = async () => {
    setHatching(true);
    setError(null);
    try {
      await hatchPet(hatchName);
      setShowHatch(false);
      setHatchName("");
      refresh();
    } catch (e) {
      setError(String(e));
    } finally {
      setHatching(false);
    }
  };

  // Click on the re-roll button → open in-app confirm modal.
  const requestRehatch = () => {
    if (rerolling) return;
    if ((pet?.rehatchTokens ?? 0) <= 0) return;
    setShowRerollConfirm(true);
  };

  // User confirmed in the modal → spend the token.
  const confirmRehatch = async () => {
    setShowRerollConfirm(false);
    setRerolling(true);
    try {
      await rehatchPet();
      refresh();
    } catch {
      // best-effort; refresh will surface real state next tick
    } finally {
      setRerolling(false);
    }
  };

  const handleClick = () => {
    if (isCoal || isDead) {
      setShowHatch(true);
      return;
    }
    const next = REACTION_KEYS[Math.floor(Math.random() * REACTION_KEYS.length)];
    setReaction(next);
    if (reactionTimerRef.current) clearTimeout(reactionTimerRef.current);
    reactionTimerRef.current = setTimeout(
      () => setReaction(null),
      REACTIONS[next].holdMs,
    );
  };

  const handlePet = async (e: React.MouseEvent) => {
    e.preventDefault(); // suppress the browser context menu
    if (isCoal || isDead) return;
    try {
      const resp = await api.petPet();
      setPetStatus("ok");
      if (resp.quote) {
        // Pet "speaks" via Haiku — show its line for ~6s. Falls back to the
        // floating heart if the LLM is unavailable / returned nothing.
        setQuote(resp.quote);
        setQuoteKey((k) => k + 1);
        if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
        quoteTimerRef.current = setTimeout(() => setQuote(null), 6000);
      } else {
        setHeartKey((k) => k + 1);
      }
      refresh();
    } catch {
      setPetStatus("cooldown");
    }
    if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    statusTimerRef.current = setTimeout(() => setPetStatus(null), 1200);
  };

  const lowHealth = !isCoal && pet.health <= 30;
  const hpStyle = healthGradient(pet.health);
  const stageBorderColor = STAGE_BORDER[pet.stage] || "#6366f1";

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="cursor-pointer select-none flex items-end relative"
        onClick={handleClick}
        onContextMenu={handlePet}
        title={(pet.name || "coal") + " · right-click to pet"}
        animate={reaction ? REACTIONS[reaction].animate : anim.animate}
        transition={reaction ? REACTIONS[reaction].transition : anim.transition}
        key={reaction ?? "mood"}
        style={{ transformOrigin: "center bottom" }}
      >
        <motion.div
          animate={isDead ? {} : {
            filter: [
              "drop-shadow(0 0 3px currentColor)",
              "drop-shadow(0 0 8px currentColor)",
              "drop-shadow(0 0 3px currentColor)",
            ],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "center bottom" }}
        >
          <pre className={`${colorClass} text-[8px] leading-[9px] font-mono m-0 p-0 transition-colors duration-1000`}>
            {frame.join("\n")}
          </pre>
        </motion.div>
        <AnimatePresence>
          {quote && (
            <motion.div
              key={`quote-${quoteKey}`}
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, transition: { duration: 0.5 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full max-w-[260px] text-[11px] italic font-display text-amber-200/90 px-2.5 py-1 rounded-md bg-black/85 border border-amber-900/60 shadow-[0_0_12px_rgba(251,146,60,0.25)] pointer-events-none whitespace-pre-wrap text-center leading-tight"
              style={{ textShadow: "0 0 6px rgba(251,146,60,0.4)" }}
            >
              {quote}
            </motion.div>
          )}
          {!quote && petStatus === "ok" && (
            <motion.div
              key={`heart-${heartKey}`}
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{ opacity: [0, 1, 1, 0], y: -28, scale: [0.6, 1.1, 1, 0.9] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute left-1/2 -top-1 -translate-x-1/2 text-[12px] text-pink-400 font-mono pointer-events-none"
            >
              &lt;3
            </motion.div>
          )}
          {petStatus === "cooldown" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="absolute left-1/2 -top-1 -translate-x-1/2 text-[9px] text-neutral-500 font-mono uppercase tracking-wider pointer-events-none"
            >
              zzz
            </motion.div>
          )}
          {/* Floating gain chips. Multiple stack vertically by index so two
              deltas arriving at the same tick don't overlap each other. */}
          {floats.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 0, scale: 0.7 }}
              animate={{ opacity: [0, 1, 1, 0], y: -38 - i * 14, scale: [0.7, 1, 1, 0.95] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className={`absolute left-1/2 -top-2 -translate-x-1/2 px-1.5 py-0.5 rounded border bg-black/85 text-[10px] font-mono uppercase tracking-wider pointer-events-none ${FLOATING_STYLES[f.kind]}`}
              style={{ textShadow: "0 0 6px currentColor" }}
            >
              {f.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!isCoal && isDead && (
        <motion.div
          className="flex flex-col gap-1 min-w-[140px] px-2 py-1.5 rounded border border-red-800/60 bg-red-950/30"
          animate={{ boxShadow: [
            "0 0 4px rgba(220,38,38,0.25)",
            "0 0 14px rgba(220,38,38,0.55)",
            "0 0 4px rgba(220,38,38,0.25)",
          ] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-baseline gap-2">
            <span className="text-[11px] font-semibold text-red-200">
              {pet.name ?? "your pet"} died
            </span>
          </div>
          <span className="text-[9px] opacity-60 font-mono">
            {pet.totalXpEarned != null ? `${pet.totalXpEarned} XP earned` : ""}
          </span>
          <button
            onClick={() => setShowHatch(true)}
            className="self-start text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded border border-amber-700/60 bg-amber-900/30 text-amber-100 hover:border-amber-500 hover:bg-amber-800/50"
          >
            ↻ hatch new
          </button>
        </motion.div>
      )}

      {!isCoal && !isDead && (
        <div className="flex flex-col gap-0.5 min-w-[160px]">
          {pet.name && (
            <span
              className="text-[11px] font-semibold truncate max-w-[160px] opacity-90"
              style={{ textShadow: "0 0 8px rgba(255,255,255,0.15)" }}
            >
              {pet.name}
            </span>
          )}
          <div className="flex items-center gap-1">
            <span className="text-[9px] opacity-50 w-8">HP</span>
            <div className="w-28 h-2.5 rounded-full bg-[#1a1a1a] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  ...hpStyle,
                  width: `${Math.max(0, Math.min(100, pet.health))}%`,
                }}
                animate={lowHealth ? { opacity: [1, 0.4, 1] } : {}}
                transition={lowHealth ? { duration: 1, repeat: Infinity, ease: "easeInOut" } : {}}
              />
            </div>
            <span className="text-[9px] opacity-50">{Math.round(pet.health)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] opacity-50 w-8">Joy</span>
            <div className="w-28 h-2.5 rounded-full bg-[#1a1a1a] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #a855f7, #c084fc)",
                  boxShadow: "0 0 6px rgba(168,85,247,0.3)",
                  width: `${Math.max(0, Math.min(100, pet.happiness))}%`,
                }}
              />
            </div>
            <span className="text-[9px] opacity-50">{Math.round(pet.happiness)}</span>
          </div>
          {!compact && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <motion.span
                className="text-[9px] px-2 py-0.5 rounded bg-[#1a1a1a]"
                style={{ borderLeft: `2px solid ${stageBorderColor}` }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {stageLabel}
              </motion.span>
              {xpToNext != null && pet.totalXpEarned != null && (
                <div className="w-24 h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${xpProgress}%`,
                      background: "linear-gradient(90deg, #6366f1, #818cf8)",
                      boxShadow: "0 0 4px rgba(99,102,241,0.3)",
                    }}
                  />
                </div>
              )}
            </div>
          )}
          {!compact && !isDead && (pet.rehatchTokens ?? 0) > 0 && (
            <button
              onClick={requestRehatch}
              disabled={rerolling}
              title="Re-roll the pet's appearance and stats. Keeps name, XP, and HP."
              className="self-start mt-0.5 text-[9px] uppercase tracking-wider font-mono px-1.5 py-0.5 rounded border border-violet-700/40 bg-violet-900/20 text-violet-200 hover:border-violet-500 hover:bg-violet-900/40 disabled:opacity-30"
            >
              {rerolling ? "rerolling…" : `↻ re-roll · ${pet.rehatchTokens}`}
            </button>
          )}
          {!compact && pet.stats && (
            <div
              className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[9px] font-mono opacity-70 mt-0.5"
              title="perseverance · curiosity · audacity · knowledge"
            >
              <span><span className="opacity-50">PER</span> {pet.stats.perseverance}</span>
              <span><span className="opacity-50">CUR</span> {pet.stats.curiosity}</span>
              <span><span className="opacity-50">AUD</span> {pet.stats.audacity}</span>
              <span><span className="opacity-50">KNO</span> {pet.stats.knowledge}</span>
            </div>
          )}
          {!compact && pet.totalXpEarned != null && (
            <span className="text-[9px] opacity-40">{pet.totalXpEarned} XP</span>
          )}
        </div>
      )}

      <AnimatePresence>
        {showHatch && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setShowHatch(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-xl p-6 w-80 overflow-hidden"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="h-0.5 w-full -mt-6 -mx-6 mb-5"
                style={{ background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)" }}
              />
              <h2 className="font-display text-xl mb-4">Hatch a new pet</h2>
              {error && <div className="mb-3 p-2 rounded bg-phase3/20 text-phase3 text-sm">{error}</div>}
              <input
                className="w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2 text-sm mb-4 focus:ring-1 focus:ring-phase1/50 focus:border-phase1/50 outline-none"
                placeholder="Name your pet (or leave blank for random)"
                value={hatchName}
                onChange={e => setHatchName(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleHatch(); }}
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowHatch(false)} className="px-3 py-2 rounded bg-[#1a1a1a] hover:bg-[#2a2a2a] text-sm">Cancel</button>
                <motion.button
                  onClick={handleHatch}
                  disabled={hatching}
                  className="px-3 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >{hatching ? "generating..." : "Hatch!"}</motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRerollConfirm && pet && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setShowRerollConfirm(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-[#0c0c0c] border border-violet-900/60 rounded-xl p-6 w-[22rem] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="h-0.5 w-full -mt-6 -mx-6 mb-5"
                style={{ background: "linear-gradient(90deg, #6d28d9, #c084fc, #f59e0b)" }}
              />
              <h2 className="font-display text-xl mb-1">Re-roll {pet.name}?</h2>
              <p className="text-xs opacity-60 font-mono mb-4">
                {pet.rehatchTokens} re-roll{pet.rehatchTokens === 1 ? "" : "s"} left · this is irreversible
              </p>
              <div className="text-[11px] font-mono space-y-2 mb-5">
                <div>
                  <span className="text-emerald-400 uppercase tracking-wider">keeps</span>
                  <span className="opacity-70 ml-2">name · stage · XP · HP · joy</span>
                </div>
                <div>
                  <span className="text-violet-300 uppercase tracking-wider">re-rolls</span>
                  <span className="opacity-70 ml-2">parts · hue · rarity · 4 stats</span>
                </div>
                {pet.stats && (
                  <div className="pt-2 mt-2 border-t border-[#1a1a1a]">
                    <div className="opacity-50 text-[10px] uppercase tracking-wider mb-1">current stats</div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 opacity-80">
                      <span><span className="opacity-50">PER</span> {pet.stats.perseverance}</span>
                      <span><span className="opacity-50">CUR</span> {pet.stats.curiosity}</span>
                      <span><span className="opacity-50">AUD</span> {pet.stats.audacity}</span>
                      <span><span className="opacity-50">KNO</span> {pet.stats.knowledge}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowRerollConfirm(false)}
                  className="px-3 py-2 rounded bg-[#1a1a1a] hover:bg-[#2a2a2a] text-sm"
                >
                  Cancel
                </button>
                <motion.button
                  onClick={confirmRehatch}
                  disabled={rerolling}
                  className="px-3 py-2 rounded bg-violet-700 hover:bg-violet-600 disabled:opacity-30 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  ↻ Re-roll
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
