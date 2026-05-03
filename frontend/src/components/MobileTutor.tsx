"use client";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { useTutorContext } from "@/lib/tutor-context";
import { useTutorEngine } from "@/lib/use-tutor-engine";
import { TutorPane } from "./TutorPane";
import { PetCreature } from "./PetCreature";

/* Mobile tutor surface — floating action button (bottom-right) that
 * opens a fullscreen overlay with the same TutorPane. Distinct from the
 * desktop Tutor, but shares useTutorEngine so chat state, persistence,
 * tool dispatch, and the WebSocket lifecycle live in one place.
 *
 * Hidden when the page sets visible=false on TutorContext (e.g. /intro).
 */
export function MobileTutor() {
  const { title, placeholder, visible } = useTutorContext();
  const engine = useTutorEngine();
  // Two-state UI: closed (FAB only) and open. When open, `expanded`
  // toggles between half-height bottom sheet (the default — leaves cards
  // visible above for cross-reference) and fullscreen.
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Publish the sheet's current height to the document so MobileShell's
  // <main> can pad its bottom to match. Without this, the sheet covers
  // the bottom of the page and the cards underneath are unreachable
  // (the body has nothing past them to scroll into view).
  useEffect(() => {
    const h = !open ? "0px" : expanded ? "100vh" : "55vh";
    document.documentElement.style.setProperty("--mochi-sheet-h", h);
    return () => {
      document.documentElement.style.removeProperty("--mochi-sheet-h");
    };
  }, [open, expanded]);

  if (!visible) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open tutor"
        title="Open tutor"
        className="fixed bottom-4 right-4 z-30 w-12 h-12 rounded-full border border-[#2a2a2a] bg-black/90 backdrop-blur flex items-center justify-center shadow-[0_0_12px_rgba(251,146,60,0.25)] hover:border-orange-500/60 hover:shadow-[0_0_18px_rgba(251,146,60,0.45)] transition-colors"
      >
        <Flame className="w-5 h-5 text-orange-300" />
        {engine.busy && (
          <span
            className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse"
            aria-hidden
          />
        )}
      </button>

      {open && (
        <div
          className={
            "fixed left-0 right-0 bottom-0 z-40 flex flex-col bg-black/50 backdrop-blur-md border-t border-[#1f1f1f] " +
            (expanded
              ? "top-0"
              : "h-[55vh] rounded-t-xl shadow-[0_-12px_24px_rgba(0,0,0,0.5)]")
          }
        >
          {/* Pet card sits above the chat — the tutor IS the pet, so the
              two share a single surface on mobile too. Only rendered in
              fullscreen mode; the half-sheet is too cramped to spare the
              vertical space, so the pet hides until the user expands.
              overflow-x-auto so wider stages (fire/ember) can scroll
              horizontally on narrow viewports without breaking the
              layout. */}
          {expanded && (
            <div className="border-b border-[#1f1f1f] px-3 py-2 overflow-x-auto flex items-center justify-center">
              <PetCreature />
            </div>
          )}
          <TutorPane
            title={title}
            placeholder={placeholder}
            messages={engine.messages}
            input={engine.input}
            onInput={engine.setInput}
            onSend={engine.send}
            busy={engine.busy}
            status={engine.status}
            onClose={() => setOpen(false)}
            onToggleExpand={() => setExpanded((v) => !v)}
            expanded={expanded}
          />
        </div>
      )}
    </>
  );
}
