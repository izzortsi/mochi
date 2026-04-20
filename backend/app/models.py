from __future__ import annotations
from pydantic import BaseModel


Tier = str
DayTier = str
CardUid = str
ConceptId = str
MasteryState = str


class PrimePhase(BaseModel):
    goal: str = ""
    prior_knowledge: str = ""


class CorePhase(BaseModel):
    exposition: str = ""
    worked_example: str = ""
    problem: str = ""


class RetrievalPrompt(BaseModel):
    id: str
    prompt: str
    answer: str = ""
    concept: ConceptId | None = None


class RetrievalPhase(BaseModel):
    prompts: list[RetrievalPrompt] = []


class ElaboratePrompt(BaseModel):
    id: str
    prompt: str


class ElaboratePhase(BaseModel):
    prompts: list[ElaboratePrompt] = []


class CheckPhase(BaseModel):
    prompt: str = ""
    rubric: str = ""


class SessionPhases(BaseModel):
    prime: PrimePhase = PrimePhase()
    core: CorePhase = CorePhase()
    retrieval: RetrievalPhase = RetrievalPhase()
    elaborate: ElaboratePhase = ElaboratePhase()
    check: CheckPhase = CheckPhase()


PHASE_NAMES: tuple[str, ...] = ("prime", "core", "retrieval", "elaborate", "check")


class Card(BaseModel):
    tier: Tier
    task_index: int
    # Legacy fields — mirrored to/from phases.core for back-compat.
    text: str = ""
    detail: str = ""
    concepts: list[ConceptId] = []
    notes: list[str] = []
    phases: SessionPhases = SessionPhases()


class Day(BaseModel):
    id: int
    phase: int
    title: str
    icon: str = "*"
    summary: str = ""
    key_insight: str = ""
    cards: list[Card] = []


class Phase(BaseModel):
    num: int
    title: str


class ConceptDef(BaseModel):
    id: ConceptId
    label: str


class CourseDef(BaseModel):
    id: int
    title: str
    slug: str
    phases: list[Phase] = []
    days: list[Day] = []
    concepts: list[ConceptDef] = []
    prereqs: list[list[ConceptId]] = []


class Progress(BaseModel):
    xp: int = 0
    streak: int = 0
    best_streak: int = 0
    last_completed: str | None = None
    completed_tasks: dict[CardUid, bool] = {}
    # Per-phase completion: sessionUid -> { prime: bool, core: bool, ... }
    completed_phases: dict[CardUid, dict[str, bool]] = {}
    day_tiers: dict[str, DayTier] = {}
    generated_tasks: list[dict] = []
    attempts: list[dict] = []


class ChatMessage(BaseModel):
    role: str
    content: str
    tool_name: str | None = None
    timestamp: str = ""


class ConceptNode(BaseModel):
    id: ConceptId
    label: str
    mastery: MasteryState = "not-started"
    card_count: int = 0


class ConceptEdge(BaseModel):
    from_: ConceptId
    to: ConceptId

    model_config = {"populate_by_name": True}

    def dict_for_api(self) -> dict:
        return {"from": self.from_, "to": self.to}


class CourseSummary(BaseModel):
    id: int
    title: str
    slug: str
    day_count: int
    total_cards: int
    completed_cards: int
    completion_pct: float


class CourseView(BaseModel):
    id: int
    title: str
    slug: str
    phases: list[list]  # [[num, title], ...]
    days: list[dict]


class ConceptPageData(BaseModel):
    concept_id: ConceptId
    label: str
    mastery: MasteryState
    by_course: list[dict]


class ConceptAlias(BaseModel):
    canonical: ConceptId
    aliases: list[ConceptId] = []


class SrsItem(BaseModel):
    """A retrieval prompt tracked through the Leitner spacing schedule."""
    # Globally unique id: "{cardUid}::{promptId}"
    id: str
    card_uid: CardUid
    prompt_id: str
    prompt: str
    answer: str
    concept: ConceptId | None = None
    box: int = 1              # 1..5; interval grows with box
    due: str                  # ISO date (YYYY-MM-DD)
    last_reviewed: str | None = None
    lapses: int = 0


class Note(BaseModel):
    id: str
    title: str
    domain: str = ""
    tags: list[str] = []
    content: str = ""
    related: list[str] = []
    source: str = ""


class TutorNote(BaseModel):
    """One-line observation the tutor jots about a specific session.

    Injected back into the page context on future visits so the tutor
    doesn't repeat hints the user has already absorbed.
    """
    id: str
    card_uid: CardUid
    body: str
    source: str = "tutor"  # "tutor" | "user"
    created_at: str = ""
