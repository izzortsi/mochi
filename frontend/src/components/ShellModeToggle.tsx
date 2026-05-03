"use client";
import { Smartphone, Monitor } from "lucide-react";
import { useShell } from "@/lib/shell-context";

/* One-click toggle between desktop and mobile shells. Useful for
 * previewing the mobile chrome from a desktop browser, and as an
 * escape hatch if a user prefers one mode at a viewport size where
 * auto-detect would pick the other.
 *
 * Click flips the override; the choice persists in localStorage via
 * ShellProvider. There's no "back to auto" affordance here — toggling
 * twice from auto puts you back at the matching auto mode, which is
 * functionally the same. (The override is still set; we don't expose
 * clearing it because the user can just toggle again to flip.)
 */
export function ShellModeToggle({ className }: { className?: string }) {
  const { mode, setOverride } = useShell();
  const next = mode === "desktop" ? "mobile" : "desktop";
  const label = mode === "desktop" ? "Preview mobile shell" : "Switch to desktop shell";
  const Icon = mode === "desktop" ? Smartphone : Monitor;
  return (
    <button
      onClick={() => setOverride(next)}
      title={label}
      aria-label={label}
      className={className ?? "p-1 rounded hover:bg-[#1a1a1a]"}
    >
      <Icon className="w-4 h-4 opacity-60 hover:opacity-100" />
    </button>
  );
}
