import type { LlmConfig, LlmProvider } from "./types";

const STORAGE_KEY = "study-plan-settings";

const DEFAULT_CONFIG: LlmConfig = {
  provider: "zai",
  apiKey: "",
  model: "GLM-5.1",
  baseUrl: "https://api.z.ai/api/coding/paas/v4",
};

export interface ModelOption { id: string; label: string; }

const ZAI_MODELS: ModelOption[] = [
  { id: "GLM-5.1", label: "GLM-5.1" },
  { id: "GLM-5", label: "GLM-5" },
  { id: "GLM-5-Turbo", label: "GLM-5 Turbo" },
  { id: "GLM-4.7-Flash", label: "GLM-4.7 Flash" },
];

const ANTHROPIC_MODELS: ModelOption[] = [
  { id: "claude-opus-4-7", label: "Claude Opus 4.7" },
  { id: "claude-opus-4-6", label: "Claude Opus 4.6" },
  { id: "claude-sonnet-4-6", label: "Claude Sonnet 4.6" },
  { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5" },
];

export const MODEL_OPTIONS = ZAI_MODELS;

export function modelsForProvider(provider: LlmProvider): ModelOption[] {
  return provider === "anthropic-oauth" ? ANTHROPIC_MODELS : ZAI_MODELS;
}

export function defaultModelForProvider(provider: LlmProvider): string {
  return modelsForProvider(provider)[0].id;
}

function isProvider(v: unknown): v is LlmProvider {
  return v === "zai" || v === "anthropic-oauth";
}

export function loadConfig(): LlmConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw) as Partial<LlmConfig>;
    const provider: LlmProvider = isProvider(parsed.provider) ? parsed.provider : "zai";
    return {
      provider,
      apiKey: parsed.apiKey ?? DEFAULT_CONFIG.apiKey,
      model: parsed.model ?? defaultModelForProvider(provider),
      baseUrl: parsed.baseUrl ?? DEFAULT_CONFIG.baseUrl,
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function saveConfig(config: LlmConfig): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function isConfigured(config: LlmConfig): boolean {
  if (config.provider === "anthropic-oauth") return true;
  return config.apiKey.length > 0;
}
