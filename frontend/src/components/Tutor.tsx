"use client";
import { useTutorContext } from "@/lib/tutor-context";
import { useTutorEngine } from "@/lib/use-tutor-engine";
import { TutorPane } from "./TutorPane";

/* Desktop tutor surface — a fixed right-edge panel docked under the HUD.
 * Mobile uses MobileTutor (FAB + fullscreen overlay) wrapping the same
 * TutorPane, so chat behavior stays single-source.
 */
export function Tutor() {
  const { title, placeholder, visible } = useTutorContext();
  const engine = useTutorEngine();

  if (!visible) return null;

  return (
    <div
      className="fixed right-0 bottom-0 w-96 flex flex-col border-t border-l border-[#1a1a1a] bg-black/95 backdrop-blur z-30"
      style={{ top: "var(--hud-h, 102px)" }}
    >
      <TutorPane
        title={title}
        placeholder={placeholder}
        messages={engine.messages}
        input={engine.input}
        onInput={engine.setInput}
        onSend={engine.send}
        busy={engine.busy}
        status={engine.status}
        pendingImages={engine.pendingImages}
        onAddImage={engine.addPendingImage}
        onRemoveImage={engine.removePendingImage}
      />
    </div>
  );
}
