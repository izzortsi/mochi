"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { XPBar } from "./XPBar";
import { StreakBadge } from "./StreakBadge";
import { Settings } from "./Settings";
import { PetCreature } from "./PetCreature";
import { api } from "@/lib/api";
import type { UserProgress } from "@/lib/types";

export function Header() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => { api.fetchProgress().then(setProgress).catch(() => {}); }, []);

  const multiplier = progress ? 1 + Math.floor(progress.streak / 3) : 1;

  return (
    <header className="border-b border-[#1a1a2a] px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0f0f1a]/90 backdrop-blur z-40">
      <Link href="/" className="font-display text-xl">study plan</Link>
      <nav className="flex items-center gap-4 ml-6 text-sm opacity-60">
        <Link href="/concept-map" className="hover:opacity-100">concepts</Link>
        <Link href="/notes" className="hover:opacity-100">notes</Link>
      </nav>
      <PetCreature />
      <div className="flex items-center gap-4">
        {progress && <XPBar xp={progress.xp} multiplier={multiplier} />}
        {progress && <StreakBadge streak={progress.streak} best={progress.bestStreak} />}
        <button onClick={() => setShowSettings(true)} aria-label="Settings">
          <SettingsIcon className="w-5 h-5 opacity-60 hover:opacity-100" />
        </button>
      </div>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </header>
  );
}
