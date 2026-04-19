"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { camelizeKeys } from "@/lib/api";

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

function pickFrame(art: Record<string, string[]>, mood: string, tick: number): string[] {
  if (mood === "dead") return art.dead?.length ? art.dead : art.idle || [];
  if (mood === "waiting") return art.idle || [];
  if (mood === "sleeping") return art.sleeping?.length ? art.sleeping : art.idle || [];
  if (mood === "eating") return art.eating?.length ? art.eating : art.idle || [];
  if (mood === "happy" || mood === "idle") {
    const frames = [art.idle, art.happy];
    return frames[tick % 2]?.length ? frames[tick % 2] : art.idle || [];
  }
  return art.idle || [];
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
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    if (isCoal || isDead) setShowHatch(true);
  };

  const lowHealth = !isCoal && pet.health <= 30;
  const hpStyle = healthGradient(pet.health);
  const stageBorderColor = STAGE_BORDER[pet.stage] || "#6366f1";

  return (
    <div className="flex items-start gap-3">
      <motion.div
        className="cursor-pointer select-none"
        onClick={handleClick}
        title={pet.name || "coal"}
        animate={anim.animate}
        transition={anim.transition}
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
          <pre className={`${colorClass} text-[11px] leading-[12px] font-mono m-0 p-0 transition-colors duration-1000`}>
            {frame.join("\n")}
          </pre>
        </motion.div>
      </motion.div>

      {!isCoal && (
        <div className="flex flex-col gap-1 min-w-[110px] pt-1">
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
            <div className="w-20 h-2.5 rounded-full bg-[#1a1a2a] overflow-hidden">
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
            <div className="w-20 h-2.5 rounded-full bg-[#1a1a2a] overflow-hidden">
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
              className="text-[9px] px-2 py-0.5 rounded bg-[#1a1a2a]"
              style={{ borderLeft: `2px solid ${stageBorderColor}` }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {stageLabel}
            </motion.span>
            {xpToNext != null && pet.totalXpEarned != null && (
              <div className="w-16 h-1.5 rounded-full bg-[#1a1a2a] overflow-hidden">
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
              className="bg-[#121222] border border-[#2a2a3f] rounded-xl p-6 w-80 overflow-hidden"
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
                className="w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2 text-sm mb-4 focus:ring-1 focus:ring-phase1/50 focus:border-phase1/50 outline-none"
                placeholder="Name your pet (or leave blank for random)"
                value={hatchName}
                onChange={e => setHatchName(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleHatch(); }}
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowHatch(false)} className="px-3 py-2 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f] text-sm">Cancel</button>
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
