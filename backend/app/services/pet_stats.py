from __future__ import annotations
import random


# Pet attribute keys. Keep the order stable — display order in the UI follows
# this tuple.
STAT_KEYS = ("perseverance", "curiosity", "audacity", "knowledge")

# Each stat starts at this value before any redistribution is applied.
# A 4-stat pet thus has a fixed total budget of len(STAT_KEYS) * BASELINE.
BASELINE = 10

# Floor / ceiling for any individual stat after rolling. Keeps the spread
# tight so no stat is ever zero (would feel punitive) or wildly dominant.
STAT_MIN = 5
STAT_MAX = 15

# How many random point-transfers to apply when rolling a fresh stat block.
# Higher → more variance from baseline. 12 transfers on 4 stats produces a
# noticeable spread without ever pushing a stat past STAT_MIN/MAX.
ROLL_TRANSFERS = 12


def roll_stats() -> dict[str, int]:
    """Roll a balanced stat block.

    Sum is fixed at len(STAT_KEYS) * BASELINE. Variance is introduced by a
    series of single-point transfers: pick a giver and a taker at random,
    move 1 point if both ends still respect [STAT_MIN, STAT_MAX]. A baseline
    pet is exactly {k: BASELINE for k in STAT_KEYS}; rolled pets shift
    around that center.
    """
    stats = [BASELINE] * len(STAT_KEYS)
    for _ in range(ROLL_TRANSFERS):
        give = random.randrange(len(STAT_KEYS))
        take = random.randrange(len(STAT_KEYS))
        if give == take:
            continue
        if stats[give] <= STAT_MIN:
            continue
        if stats[take] >= STAT_MAX:
            continue
        stats[give] -= 1
        stats[take] += 1
    return dict(zip(STAT_KEYS, stats))


def baseline_stats() -> dict[str, int]:
    """Default block — used when a pet record predates the stat system."""
    return {k: BASELINE for k in STAT_KEYS}


# Bonus points distributed each time the pet evolves to a new stage.
# Three stage transitions (spark → emberling → ember → fire) deliver
# 3 × EVOLUTION_BONUS_POINTS additional points across the pet's lifetime,
# layering on top of the rolled 40-point base.
EVOLUTION_BONUS_POINTS = 4

# Hard ceiling for stats post-evolution. Higher than the roll cap so growth
# is real, but bounded so a fully-evolved pet doesn't go to absurd numbers.
STAT_MAX_EVOLVED = 25


def evolve_stats(stats: dict[str, int]) -> dict[str, int]:
    """Apply one stage's worth of stat growth.

    Distributes EVOLUTION_BONUS_POINTS, weighted toward the lowest-rolled
    stat — so lopsided pets gradually catch up rather than compound their
    weaknesses. Caps at STAT_MAX_EVOLVED per stat to keep numbers readable.
    """
    new_stats = {k: int(stats.get(k, BASELINE)) for k in STAT_KEYS}
    for _ in range(EVOLUTION_BONUS_POINTS):
        # Pick from the lowest tier (within 2 of the minimum) so growth
        # smooths the spread.
        min_val = min(new_stats[k] for k in STAT_KEYS)
        candidates = [k for k in STAT_KEYS
                      if new_stats[k] <= min_val + 2 and new_stats[k] < STAT_MAX_EVOLVED]
        if not candidates:
            # Everything's at the ceiling.
            break
        chosen = random.choice(candidates)
        new_stats[chosen] += 1
    return new_stats
