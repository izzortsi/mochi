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
    <header className="border-b border-[#1a1a1a] px-4 py-2 flex items-center justify-between sticky top-0 bg-black/95 backdrop-blur z-40">
      <Link href="/" className="font-display text-lg text-neutral-100">study plan</Link>
      <nav className="flex items-center gap-4 ml-6 text-xs uppercase tracking-wider font-mono opacity-70">
        <Link href="/review" className="hover:opacity-100 hover:text-neutral-100">review</Link>
        <Link href="/concept-map" className="hover:opacity-100 hover:text-neutral-100">concepts</Link>
        <Link href="/notes" className="hover:opacity-100 hover:text-neutral-100">notes</Link>
      </nav>
      <PetCreature />
      <div className="flex items-center gap-3">
        {progress && <XPBar xp={progress.xp} multiplier={multiplier} />}
        {progress && <StreakBadge streak={progress.streak} best={progress.bestStreak} />}
        <button onClick={() => setShowSettings(true)} aria-label="Settings">
          <SettingsIcon className="w-4 h-4 opacity-60 hover:opacity-100" />
        </button>
      </div>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </header>
  );
}
