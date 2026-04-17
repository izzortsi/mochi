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
  happy: "text-green-400",
  idle: "text-green-300",
  hungry: "text-yellow-400",
  sad: "text-orange-400",
  desperate: "text-red-400",
  dead: "text-gray-500",
  waiting: "text-gray-400",
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
  egg: "#6366f1",
  hatchling: "#7c3aed",
  baby: "#8b5cf6",
  teen: "#ec4899",
  adult: "#f59e0b",
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

async function regeneratePet(): Promise<{ ok: boolean; name: string }> {
  const res = await fetch("/api/pet/regenerate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
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
  const [blink, setBlink] = useState(false);
  const [showHatch, setShowHatch] = useState(false);
  const [hatchName, setHatchName] = useState("");
  const [hatching, setHatching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [regenerating, setRegenerating] = useState(false);
  const [showRegen, setShowRegen] = useState(false);
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

  useEffect(() => {
    const doBlink = () => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    };
    const interval = setInterval(doBlink, 3500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  if (!pet) return null;

  const isEgg = pet.stage === "egg";
  const isDead = !!pet.died || pet.mood === "dead";
  const colorClass = MOOD_COLORS[pet.mood] || "text-gray-300";
  const frame = pickFrame(pet.art, pet.mood, tick);
  const anim = MOOD_ANIM[pet.mood] || MOOD_ANIM.idle;

  const stageLabel = pet.stage?.charAt(0).toUpperCase() + pet.stage?.slice(1);
  const xpToNext = pet.stage === "adult"
    ? null
    : pet.stage === "teen" ? 1500
    : pet.stage === "baby" ? 500
    : 100;
  const xpForCurrent = pet.stage === "adult" ? 1500
    : pet.stage === "teen" ? 500
    : pet.stage === "baby" ? 100
    : 0;
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

  const handleRegenerate = async () => {
    setRegenerating(true);
    setError(null);
    try {
      await regeneratePet();
      setShowRegen(false);
      refresh();
    } catch (e) {
      setError(String(e));
    } finally {
      setRegenerating(false);
    }
  };

  const handleClick = () => {
    if (isEgg || isDead) setShowHatch(true);
  };

  const lowHealth = !isEgg && pet.health <= 30;
  const hpStyle = healthGradient(pet.health);
  const stageBorderColor = STAGE_BORDER[pet.stage] || "#6366f1";

  return (
    <div className="flex items-start gap-3">
      <motion.div
        className="cursor-pointer select-none"
        onClick={handleClick}
        title={pet.name || "egg"}
        animate={anim.animate}
        transition={anim.transition}
        style={{ filter: "drop-shadow(0 0 4px currentColor)", opacity: 0.9 }}
      >
        <motion.div
          animate={{ scaleY: blink && !isDead ? 0.1 : 1 }}
          transition={{ duration: 0.08 }}
          style={{ transformOrigin: "center center" }}
        >
          <pre className={`${colorClass} text-[11px] leading-[12px] font-mono m-0 p-0 transition-colors duration-1000`}>
            {frame.join("\n")}
          </pre>
        </motion.div>
      </motion.div>

      {!isEgg && (
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
          {!isDead && (
            <motion.button
              onClick={() => setShowRegen(true)}
              className="text-[9px] opacity-40 hover:opacity-80 mt-0.5 transition-opacity border-l border-[#2a2a3f] pl-1.5 hover:border-[#3a3a4f]"
              title="Re-roll appearance"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              re-roll
            </motion.button>
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

      <AnimatePresence>
        {showRegen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setShowRegen(false)}
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
              <h2 className="font-display text-xl mb-2">Re-roll pet?</h2>
              <p className="text-sm opacity-50 mb-4">Keep {pet.name} but generate a new look.</p>
              {error && <div className="mb-3 p-2 rounded bg-phase3/20 text-phase3 text-sm">{error}</div>}
              <div className="border-t border-[#2a2a3f] my-3" />
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowRegen(false)} className="px-3 py-2 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f] text-sm">Cancel</button>
                <motion.button
                  onClick={handleRegenerate}
                  disabled={regenerating}
                  className="px-3 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >{regenerating ? "generating..." : "Re-roll"}</motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
