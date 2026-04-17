from __future__ import annotations
from pydantic import BaseModel


Tier = str
DayTier = str
CardUid = str
ConceptId = str
MasteryState = str


class Card(BaseModel):
    tier: Tier
    task_index: int
    text: str
    detail: str
    concepts: list[ConceptId] = []
    notes: list[str] = []


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


class Note(BaseModel):
    id: str
    title: str
    domain: str = ""
    tags: list[str] = []
    content: str = ""
    related: list[str] = []
    source: str = ""
