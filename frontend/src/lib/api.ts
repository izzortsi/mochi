import type { StudyDay, UserProgress, GeneratedTask, Tier } from "./types";

export function camelizeKey(key: string): string {
  return key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function camelizeKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) return obj.map(camelizeKeys) as unknown as T;
  if (obj !== null && typeof obj === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      out[camelizeKey(k)] = camelizeKeys(v);
    }
    return out as T;
  }
  return obj as T;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

async function post<T>(path: string, body: object): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

export const api = {
  fetchDays: () => get<StudyDay[]>("/api/days"),
  fetchDay: (id: number) => get<StudyDay>(`/api/day?id=${id}`),
  fetchProgress: () => get<UserProgress>("/api/progress"),
  complete: (dayId: number, tier: Tier, taskIndex: number) =>
    post<UserProgress>("/api/progress/complete", {
      "day-id": dayId, tier, "task-index": taskIndex,
    }),
  uncomplete: (dayId: number, tier: Tier, taskIndex: number) =>
    post<UserProgress>("/api/progress/uncomplete", {
      "day-id": dayId, tier, "task-index": taskIndex,
    }),
  reset: () => post<UserProgress>("/api/progress/reset", {}),
  fetchGenerated: (dayId: number) =>
    get<GeneratedTask[]>(`/api/generated?day-id=${dayId}`),
};
