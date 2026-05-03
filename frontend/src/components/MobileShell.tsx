"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { CoursesIcon, ReviewIcon, MemoryIcon, ConceptsIcon, NotesIcon } from "./Icons";
import { ShellModeToggle } from "./ShellModeToggle";
import { MobileTutor } from "./MobileTutor";

/* Mobile chrome — single-row top bar with a hamburger menu. No Tutor
 * surface yet (next iteration: bottom-sheet or /chat fullscreen). No
 * pet card in the header (also next). The job here is just to make
 * the existing pages reachable on a phone without the desktop shell's
 * fixed w-96 Tutor pane stomping on the viewport.
 */
export function MobileShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b border-[#1a1a1a] sticky top-0 bg-black/95 backdrop-blur z-40">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link
            href="/intro"
            className="font-display text-lg text-neutral-100"
            title="intro"
          >
            mochi
          </Link>
          <div className="ml-auto flex items-center gap-1">
            <ShellModeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-1 rounded hover:bg-[#1a1a1a]"
            >
              <Menu className="w-5 h-5 opacity-70" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-[#1a1a1a] flex flex-col text-sm font-mono uppercase tracking-wider"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/" className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#0f0f0f]">
              <CoursesIcon className="w-3.5 h-3.5" />
              courses
            </Link>
            <Link href="/review" className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#0f0f0f]">
              <ReviewIcon className="w-3.5 h-3.5" />
              review
            </Link>
            <Link href="/memory" className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#0f0f0f]">
              <MemoryIcon className="w-3.5 h-3.5" />
              memory
            </Link>
            <Link href="/concept-map" className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#0f0f0f]">
              <ConceptsIcon className="w-3.5 h-3.5" />
              concepts
            </Link>
            <Link href="/notes" className="flex items-center gap-2 px-4 py-3 hover:bg-[#0f0f0f]">
              <NotesIcon className="w-3.5 h-3.5" />
              notes
            </Link>
          </nav>
        )}
      </header>
      <main
        className="px-4 py-4"
        // MobileTutor publishes --mochi-sheet-h while the sheet is open so
        // the bottom of the page is reachable by scrolling cards up past
        // the sheet. Defaults to 0 when the sheet is closed.
        style={{ paddingBottom: "calc(1rem + var(--mochi-sheet-h, 0px))" }}
      >
        {children}
      </main>
      <MobileTutor />
    </>
  );
}
