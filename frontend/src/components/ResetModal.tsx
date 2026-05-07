"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props { onConfirm: () => void; onCancel: () => void; }

export function ResetModal({ onConfirm, onCancel }: Props) {
  // Portal to document.body so a `backdrop-filter` ancestor (e.g. the
  // sticky desktop header) doesn't capture our `position: fixed` and
  // make the modal render at header-height instead of viewport-height.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-xl p-6 w-full max-w-sm">
        <h2 className="font-display text-xl mb-2">Reset all progress?</h2>
        <p className="text-sm opacity-70 mb-4">XP, streak, and completed tasks will be zeroed. PDFs and overrides are not affected.</p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-2 rounded bg-[#1a1a1a] hover:bg-[#2a2a2a]" onClick={onCancel}>Cancel</button>
          <button className="px-3 py-2 rounded bg-phase3 hover:bg-phase2" onClick={onConfirm}>Reset</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
