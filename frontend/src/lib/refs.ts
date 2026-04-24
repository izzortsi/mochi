import type { CardUid, PhaseName, Tier } from "./types";

/* Compact reference codes the user can type in chat to point at a specific
 * phase (or prompt within retrieval/elaborate) on the current day, without
 * having to paste a full card-uid.
 *
 *   {tier}:{phase}          → whole phase (prime/core/check)
 *   {tier}:{phase}{index}   → specific prompt (retrieval/elaborate, 1-based)
 *
 *   tier letter: b (bronze) · s (silver) · g (gold)
 *   phase letter: p (prime) · c (core) · r (retrieval) · e (elaborate) ·
 *                 k (check — "k" because "c" is already core)
 *
 *   s:p   → silver's prime
 *   s:r1  → silver's 1st retrieval prompt
 *   g:e2  → gold's 2nd elaborate prompt
 */

export const TIER_LETTER: Record<Tier, string> = {
  bronze: "b",
  silver: "s",
  gold: "g",
};

export const PHASE_LETTER: Record<PhaseName, string> = {
  prime: "p",
  core: "c",
  retrieval: "r",
  elaborate: "e",
  check: "k",
};

// Parse the tier segment out of a cardUid like "c1-d3-silver-0".
export function tierFromCardUid(cardUid: CardUid): Tier | null {
  const m = cardUid.match(/-(bronze|silver|gold)-/);
  return (m ? m[1] : null) as Tier | null;
}

// Build a phase-level ref: "s:p", "g:k". Returns null if tier can't be
// parsed (e.g. a malformed cardUid) so callers fall back cleanly.
export function phaseRef(cardUid: CardUid, phase: PhaseName): string | null {
  const tier = tierFromCardUid(cardUid);
  if (!tier) return null;
  return `${TIER_LETTER[tier]}:${PHASE_LETTER[phase]}`;
}

// Build a prompt-level ref: "s:r1", "g:e2". Index is 1-based so it matches
// the numbered list the UI renders. Only meaningful for retrieval/elaborate.
export function promptRef(
  cardUid: CardUid,
  phase: "retrieval" | "elaborate",
  zeroBasedIndex: number,
): string | null {
  const base = phaseRef(cardUid, phase);
  if (!base) return null;
  return `${base}${zeroBasedIndex + 1}`;
}
