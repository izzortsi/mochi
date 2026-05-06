"use client";
import type { ReactNode } from "react";
import { useShell } from "@/lib/shell-context";
import { DesktopShell } from "./DesktopShell";
import { MobileShell } from "./MobileShell";

/* Top-level shell selector. Reads `mode` from ShellContext, which folds
 * the auto-detected viewport with the user's manual override.
 */
export function ShellSwitch({ children }: { children: ReactNode }) {
  const { mode } = useShell();
  return mode === "mobile"
    ? <MobileShell>{children}</MobileShell>
    : <DesktopShell>{children}</DesktopShell>;
}
