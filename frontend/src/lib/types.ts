export type Tier = "bronze" | "silver" | "gold";
export type DayTier = Tier | "none";

export interface TaskItem {
  text: string;
  detail: string;
}

export interface TaskGroup {
  tier: Tier;
  label: string;
  items: TaskItem[];
}

export interface StudyDay {
  id: number;
  phase: number;
  phaseTitle: string;
  title: string;
  icon: string;
  summary: string;
  keyInsight: string;
  tasks: TaskGroup[];
}

export interface UserProgress {
  xp: number;
  streak: number;
  bestStreak: number;
  lastCompleted: string | null;
  completedTasks: Record<string, boolean>;
  dayTiers: Record<string, DayTier>;
}

export interface GeneratedTask {
  id: string;
  dayId: number;
  tier: Tier;
  sourceTaskIndex: number;
  text: string;
  detail: string;
  createdAt: string;
}

export type ChatRole = "user" | "assistant" | "tool";

export interface ChatMessage {
  role: ChatRole;
  content: string;
  toolName: string | null;
  timestamp: string;
}

export type ConnectionStatus = "connecting" | "connected" | "disconnected";

export type LlmProvider = "zai";

export interface LlmConfig {
  provider: LlmProvider;
  apiKey: string;
  model: string;
  baseUrl: string;
}
