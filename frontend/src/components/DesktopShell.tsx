"use client";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Tutor } from "./Tutor";
import { TutorAwareMain } from "@/lib/tutor-context";

/* The current desktop layout, extracted from app/layout.tsx so the
 * mobile/desktop fork lives in one place. The Tutor pane and HUD pet
 * column are the bits that don't fit on a phone — those stay desktop-
 * only; MobileShell renders different chrome around the same pages.
 */
export function DesktopShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <TutorAwareMain>{children}</TutorAwareMain>
      <Tutor />
    </>
  );
}
