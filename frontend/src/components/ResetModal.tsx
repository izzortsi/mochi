"use client";

interface Props { onConfirm: () => void; onCancel: () => void; }

export function ResetModal({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#121222] border border-[#2a2a3f] rounded-xl p-6 w-96">
        <h2 className="font-display text-xl mb-2">Reset all progress?</h2>
        <p className="text-sm opacity-70 mb-4">XP, streak, and completed tasks will be zeroed. PDFs and overrides are not affected.</p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-2 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f]" onClick={onCancel}>Cancel</button>
          <button className="px-3 py-2 rounded bg-phase3 hover:bg-phase2" onClick={onConfirm}>Reset</button>
        </div>
      </div>
    </div>
  );
}
