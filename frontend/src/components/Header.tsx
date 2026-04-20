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
    <header className="border-b border-[#1a1a1a] sticky top-0 bg-black/95 backdrop-blur z-40">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-6">
        <Link href="/intro" className="font-display text-lg text-neutral-100" title="intro">study plan</Link>
        <nav className="flex items-center gap-4 text-xs uppercase tracking-wider font-mono opacity-70">
          <Link href="/review" className="hover:opacity-100 hover:text-neutral-100">review</Link>
          <Link href="/memory" className="hover:opacity-100 hover:text-neutral-100">memory</Link>
          <Link href="/concept-map" className="hover:opacity-100 hover:text-neutral-100">concepts</Link>
          <Link href="/notes" className="hover:opacity-100 hover:text-neutral-100">notes</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <PetCreature />
          {progress && (
            <div className="flex items-center gap-3 pl-3 border-l border-[#1a1a1a]">
              <XPBar xp={progress.xp} multiplier={multiplier} />
              <StreakBadge streak={progress.streak} best={progress.bestStreak} />
            </div>
          )}
          <button
            onClick={() => setShowSettings(true)}
            aria-label="Settings"
            className="pl-3 border-l border-[#1a1a1a]"
          >
            <SettingsIcon className="w-4 h-4 opacity-60 hover:opacity-100" />
          </button>
        </div>
      </div>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </header>
  );
}
