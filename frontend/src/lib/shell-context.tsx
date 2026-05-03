"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* Shell mode = which top-level chrome to render (DesktopShell vs
 * MobileShell). Default is auto-detected from the viewport width; the
 * user can pin a manual override via ShellModeToggle. The override
 * persists in localStorage so a "preview mobile on desktop" session
 * survives reloads.
 */

export const MOBILE_BREAKPOINT_PX = 768;
const STORAGE_KEY = "mochi-shell-override";

export type ShellMode = "desktop" | "mobile";
export type ShellOverride = ShellMode | null;

interface ShellValue {
  mode: ShellMode;
  // null = auto-detect via viewport. "desktop"/"mobile" = pinned by user.
  override: ShellOverride;
  setOverride: (v: ShellOverride) => void;
}

const Ctx = createContext<ShellValue | null>(null);

export function ShellProvider({ children }: { children: ReactNode }) {
  // Auto-detected mode from window width. Default to "desktop" so the
  // SSR HTML matches the client's first paint on desktop (the common
  // case) — mobile users get a one-frame swap after mount.
  const [auto, setAuto] = useState<ShellMode>("desktop");
  const [override, setOverrideState] = useState<ShellOverride>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "desktop" || stored === "mobile") {
      setOverrideState(stored);
    }
    const check = () => {
      setAuto(window.innerWidth < MOBILE_BREAKPOINT_PX ? "mobile" : "desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const setOverride = useCallback((v: ShellOverride) => {
    if (v === null) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, v);
    setOverrideState(v);
  }, []);

  const mode: ShellMode = override ?? auto;

  const value = useMemo(
    () => ({ mode, override, setOverride }),
    [mode, override, setOverride],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useShell(): ShellValue {
  const c = useContext(Ctx);
  if (!c) throw new Error("useShell outside ShellProvider");
  return c;
}
