"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { api, camelizeKeys } from "@/lib/api";

interface PetState {
  id: string | null;
  name: string | null;
  stage: string;
  health: number;
  happiness: number;
  mood: string;
  art: Record<string, string[]>;
  died?: string | null;
  born?: string | null;
  lastFed?: string | null;
  totalXpEarned?: number;
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

function pickFrame(art: Record<string, string[]>, mood: string, tick: number): string[] {
  let frame: string[];
  if (mood === "dead") frame = art.dead?.length ? art.dead : art.idle || [];
  else if (mood === "waiting") frame = art.idle || [];
  else if (mood === "sleeping") frame = art.sleeping?.length ? art.sleeping : art.idle || [];
  else if (mood === "eating") frame = art.eating?.length ? art.eating : art.idle || [];
  else if (mood === "happy" || mood === "idle") {
    const frames = [art.idle, art.happy];
    frame = frames[tick % 2]?.length ? frames[tick % 2] : art.idle || [];
  } else {
    frame = art.idle || [];
  }
  return trimBlankLines(frame);
}

function trimBlankLines(rows: string[]): string[] {
  // Drop leading/trailing all-whitespace rows so the pet takes as much
  // vertical space as its actual silhouette, not the 12-row canvas.
  let start = 0;
  while (start < rows.length && rows[start].trim() === "") start++;
  let end = rows.length;
  while (end > start && rows[end - 1].trim() === "") end--;
  return rows.slice(start, end);
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

export function PetCreature() {
  const [pet, setPet] = useState<PetState | null>(null);
  const [tick, setTick] = useState(0);
  const [showHatch, setShowHatch] = useState(false);
  const [hatchName, setHatchName] = useState("");
  const [hatching, setHatching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [heartKey, setHeartKey] = useState(0);
  const [petStatus, setPetStatus] = useState<"ok" | "cooldown" | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const refresh = useCallback(() => {
    fetchPet().then(setPet).catch(() => {});
  }, []);

  useEffect(() => {
    refresh();
    pollingRef.current = setInterval(refresh, 60000);
    return () => { if (pollingRef.current) clearInterval(pollingRef.current); };
  }, [refresh]);

  useEffect(() => {
    const frameInterval = setInterval(() => setTick(t => t + 1), 3000);
    return () => clearInterval(frameInterval);
  }, []);

  useEffect(() => {
    return () => {
      if (reactionTimerRef.current) clearTimeout(reactionTimerRef.current);
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    };
  }, []);

  if (!pet) return null;

  const isCoal = pet.stage === "coal";
  const isDead = !!pet.died || pet.mood === "dead";
  const colorClass = MOOD_COLORS[pet.mood] || "text-gray-300";
  const frame = pickFrame(pet.art, pet.mood, tick);
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
      await api.petPet();
      setPetStatus("ok");
      setHeartKey((k) => k + 1); // remount the heart so animation restarts
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
          {petStatus === "ok" && (
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
        </AnimatePresence>
      </motion.div>

      {!isCoal && (
        <div className="flex flex-col gap-0.5 min-w-[100px]">
          {pet.name && (
            <span
              className="text-[11px] font-semibold truncate max-w-[100px] opacity-90"
              style={{ textShadow: "0 0 8px rgba(255,255,255,0.15)" }}
            >
              {pet.name}
            </span>
          )}
          <div className="flex items-center gap-1">
            <span className="text-[9px] opacity-50 w-8">HP</span>
            <div className="w-20 h-2.5 rounded-full bg-[#1a1a1a] overflow-hidden">
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
            <div className="w-20 h-2.5 rounded-full bg-[#1a1a1a] overflow-hidden">
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
              <div className="w-16 h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
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
          {pet.totalXpEarned != null && (
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

    </div>
  );
}
