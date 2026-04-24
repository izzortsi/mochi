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
import { api, PET_REFRESH_EVENT } from "./api";
import type { UserProgress } from "./types";

/* Shared progress store for the HUD surfaces (Header, Tutor). Fetches once
 * on mount, re-fetches whenever PET_REFRESH_EVENT fires — the same event the
 * pet listens to after a completion — so both the pet card and the Tutor's
 * XP strip update together without each component issuing its own request.
 */

interface ProgressValue {
  progress: UserProgress | null;
  multiplier: number;
  refresh: () => void;
}

const Ctx = createContext<ProgressValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  const refresh = useCallback(() => {
    api.fetchProgress().then(setProgress).catch(() => {});
  }, []);

  useEffect(() => {
    refresh();
    const onRefresh = () => refresh();
    window.addEventListener(PET_REFRESH_EVENT, onRefresh);
    return () => window.removeEventListener(PET_REFRESH_EVENT, onRefresh);
  }, [refresh]);

  const multiplier = progress ? 1 + Math.floor(progress.streak / 3) : 1;

  const value = useMemo(
    () => ({ progress, multiplier, refresh }),
    [progress, multiplier, refresh],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProgress(): ProgressValue {
  const c = useContext(Ctx);
  if (!c) throw new Error("useProgress outside ProgressProvider");
  return c;
}
