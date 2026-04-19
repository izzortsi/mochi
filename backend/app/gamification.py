from __future__ import annotations
from datetime import date


TIER_XP = {"bronze": 10, "silver": 25, "gold": 50}
TIER_RANK = {"bronze": 0, "silver": 1, "gold": 2}

# A session has 5 phases; each phase completed earns 20% of the session XP.
# Summing all five equals the full session XP (no extra bonus).
PHASE_COUNT = 5


def streak_multiplier(streak: int) -> int:
    return 1 + streak // 3


def xp_for_card(tier: str, streak: int) -> int:
    return TIER_XP.get(tier, 10) * streak_multiplier(streak)


def xp_for_phase(tier: str, streak: int) -> int:
    """Per-phase XP. Integer-rounded; summed over 5 phases equals xp_for_card."""
    total = xp_for_card(tier, streak)
    return max(1, total // PHASE_COUNT)


def compute_day_tier(completed_cards_of_tier: dict[str, list[bool]]) -> str:
    bronze_done = all(completed_cards_of_tier.get("bronze", []))
    silver_done = all(completed_cards_of_tier.get("silver", []))
    gold_done = all(completed_cards_of_tier.get("gold", []))
    if bronze_done and silver_done and gold_done:
        return "gold"
    if bronze_done and silver_done:
        return "silver"
    if bronze_done:
        return "bronze"
    return "none"


def update_streak(progress, reached_gold: bool):
    if not reached_gold:
        return
    today = date.today().isoformat()
    lc = progress.last_completed
    if lc is None:
        progress.streak = 1
    elif lc == today:
        pass
    elif lc == date.fromordinal(date.today().toordinal() - 1).isoformat():
        progress.streak += 1
    else:
        progress.streak = 1
    progress.last_completed = today
    if progress.streak > progress.best_streak:
        progress.best_streak = progress.streak


def card_uid_for(course_id: int, day_id: int, tier: str, index: int) -> str:
    return f"c{course_id}-d{day_id}-{tier}-{index}"
