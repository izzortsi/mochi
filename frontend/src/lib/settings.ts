import type { LlmConfig } from "./types";

const STORAGE_KEY = "study-plan-settings";

const DEFAULT_CONFIG: LlmConfig = {
  provider: "zai",
  apiKey: "",
  model: "GLM-4.7-Flash",
  baseUrl: "https://api.z.ai/api/coding/paas/v4",
};

export interface ModelOption { id: string; label: string; }

export const MODEL_OPTIONS: ModelOption[] = [
  { id: "GLM-5.1", label: "GLM-5.1" },
  { id: "GLM-5", label: "GLM-5" },
  { id: "GLM-5-Turbo", label: "GLM-5 Turbo" },
  { id: "GLM-4.7-Flash", label: "GLM-4.7 Flash" },
];

export function loadConfig(): LlmConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw) as Partial<LlmConfig>;
    return {
      provider: "zai",
      apiKey: parsed.apiKey ?? DEFAULT_CONFIG.apiKey,
      model: parsed.model ?? DEFAULT_CONFIG.model,
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
  return config.apiKey.length > 0;
}
