"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { XPBar } from "./XPBar";
import { StreakBadge } from "./StreakBadge";
import { Settings } from "./Settings";
import { PetCreature } from "./PetCreature";
import { CoursesIcon, ReviewIcon, MemoryIcon, ConceptsIcon, NotesIcon } from "./Icons";
import { api } from "@/lib/api";
import type { UserProgress } from "@/lib/types";

export function Header() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => { api.fetchProgress().then(setProgress).catch(() => {}); }, []);

  // Publish the header's actual rendered height as a CSS variable so the
  // Tutor panel (and any other docked surface) can sit flush beneath it.
  // The pet's ASCII art varies with stage/mood, so the header height is not
  // constant — re-measure on every resize.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const apply = () => {
      document.documentElement.style.setProperty("--hud-h", `${el.offsetHeight}px`);
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const multiplier = progress ? 1 + Math.floor(progress.streak / 3) : 1;

  return (
    <header
      ref={headerRef}
      className="border-b border-[#1a1a1a] sticky top-0 bg-black/95 backdrop-blur z-40"
    >
      <div className="max-w-6xl mx-auto px-4 py-[44px] flex items-center gap-6">
        <Link href="/intro" className="font-display text-lg text-neutral-100" title="intro">mochi</Link>
        <nav className="flex items-center gap-4 text-xs uppercase tracking-wider font-mono opacity-70">
          <Link href="/" className="flex items-center gap-1.5 hover:opacity-100 hover:text-neutral-100"><CoursesIcon className="w-3.5 h-3.5" />courses</Link>
          <Link href="/review" className="flex items-center gap-1.5 hover:opacity-100 hover:text-neutral-100"><ReviewIcon className="w-3.5 h-3.5" />review</Link>
          <Link href="/memory" className="flex items-center gap-1.5 hover:opacity-100 hover:text-neutral-100"><MemoryIcon className="w-3.5 h-3.5" />memory</Link>
          <Link href="/concept-map" className="flex items-center gap-1.5 hover:opacity-100 hover:text-neutral-100"><ConceptsIcon className="w-3.5 h-3.5" />concepts</Link>
          <Link href="/notes" className="flex items-center gap-1.5 hover:opacity-100 hover:text-neutral-100"><NotesIcon className="w-3.5 h-3.5" />notes</Link>
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
