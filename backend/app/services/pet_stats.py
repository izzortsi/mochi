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
