export type Tier = "bronze" | "silver" | "gold";
export type DayTier = Tier | "none";
export type CardUid = string;
export type ConceptId = string;
export type MasteryState = "not-started" | "learning" | "mastered";

export interface TaskItem {
  text: string;
  detail: string;
}

export type PhaseName = "prime" | "core" | "retrieval" | "elaborate" | "check";

export const PHASE_NAMES: PhaseName[] = [
  "prime", "core", "retrieval", "elaborate", "check",
];

export interface RetrievalPrompt {
  id: string;
  prompt: string;
  answer: string;
  concept: ConceptId | null;
}

export interface ElaboratePrompt {
  id: string;
  prompt: string;
}

export interface SessionPhases {
  prime: { goal: string; priorKnowledge: string };
  core: { exposition: string; workedExample: string; problem: string };
  retrieval: { prompts: RetrievalPrompt[] };
  elaborate: { prompts: ElaboratePrompt[] };
  check: { prompt: string; rubric: string };
}

export interface CardView {
  cardUid: CardUid;
  tier: Tier;
  taskIndex: number;
  text: string;
  detail: string;
  concepts: ConceptId[];
  notes: string[];
  phases: SessionPhases;
}

export interface DayView {
  id: number;
  phase: number;
  title: string;
  icon: string;
  summary: string;
  keyInsight: string;
  cards: CardView[];
}

export type Phase = [number, string];

export interface CourseSummary {
  id: number;
  title: string;
  slug: string;
  dayCount: number;
  totalCards: number;
  completedCards: number;
  completionPct: number;
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  phases: Phase[];
  days: DayView[];
}

export interface UserProgress {
  xp: number;
  streak: number;
  bestStreak: number;
  lastCompleted: string | null;
  completedTasks: Record<CardUid, boolean> | null;
  completedPhases: Record<CardUid, Record<PhaseName, boolean>> | null;
  dayTiers: Record<string, DayTier> | null;
}

export interface ConceptNode {
  id: ConceptId;
  label: string;
  mastery: MasteryState;
  cardCount: number;
}

export interface ConceptEdge {
  from: ConceptId;
  to: ConceptId;
}

export interface ConceptMapData {
  nodes: ConceptNode[];
  edges: ConceptEdge[];
}

export interface NextUpItem {
  cardUid: CardUid;
}

export interface ConceptPageData {
  conceptId: ConceptId;
  label: string;
  mastery: MasteryState;
  byCourse: Array<{
    courseId: number;
    cards: Array<{ cardUid: CardUid; text: string }>;
  }>;
}

export type ChatRole = "user" | "assistant" | "tool";

export interface ChatMessage {
  role: ChatRole;
  content: string;
  toolName: string | null;
  timestamp: string;
}

export interface NoteSummary {
  id: string;
  title: string;
  domain: string;
  tags: string[];
  related: string[];
  source: string;
}

export interface NoteDetail {
  id: string;
  title: string;
  domain: string;
  tags: string[];
  content: string;
  related: { id: string; title: string; domain: string }[];
  source: string;
}

export interface NotesGraphNode {
  id: string;
  label: string;
  domain: string;
  tags: string[];
}

export interface NotesGraphData {
  nodes: NotesGraphNode[];
  edges: { from: string; to: string }[];
}

export type ConnectionStatus = "connecting" | "connected" | "disconnected";

export interface SrsItem {
  id: string;
  cardUid: CardUid;
  promptId: string;
  prompt: string;
  answer: string;
  concept: ConceptId | null;
  box: number;
  due: string;
  lastReviewed: string | null;
  lapses: number;
}

export interface SrsStats {
  total: number;
  due: number;
  byBox: Record<string, number>;
}

export type SrsVerdict = "correct" | "wrong";

export type EvalKind = "retrieval" | "elaborate";

export interface EvalResult {
  verdict: string; // "correct"|"partial"|"wrong" for retrieval; "strong"|"adequate"|"weak" for elaborate
  feedback: string;
}

export type LlmProvider = "zai" | "anthropic-oauth";

export interface LlmConfig {
  provider: LlmProvider;
  apiKey: string;
  model: string;
  baseUrl: string;
}
