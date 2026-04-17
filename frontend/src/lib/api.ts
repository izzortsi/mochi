import type { UserProgress, CardUid } from "./types";

export function camelizeKey(key: string): string {
  return key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function camelizeKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) return obj.map(camelizeKeys) as unknown as T;
  if (obj !== null && typeof obj === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      // Leave card-uids and "courseId.dayId" keys intact.
      if (/^c\d+-d\d+-/.test(k) || /^\d+\.\d+$/.test(k)) {
        out[k] = camelizeKeys(v);
      } else {
        out[camelizeKey(k)] = camelizeKeys(v);
      }
    }
    return out as T;
  }
  return obj as T;
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

async function postJson<T>(path: string, body: object): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

async function deleteJson<T>(path: string, body: object): Promise<T> {
  const res = await fetch(path, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

export const api = {
  fetchProgress: () => getJson<UserProgress>("/api/progress"),
  complete: (cardUid: CardUid) =>
    postJson<UserProgress>("/api/progress/complete", { "card-uid": cardUid }),
  uncomplete: (cardUid: CardUid) =>
    postJson<UserProgress>("/api/progress/uncomplete", { "card-uid": cardUid }),
  deleteCard: (cardUid: CardUid) =>
    deleteJson<{ ok: boolean }>("/api/card", { "card-uid": cardUid }),
  deleteCourse: (courseId: number) =>
    deleteJson<{ ok: boolean }>("/api/course", { "course-id": courseId }),
  deleteDay: (courseId: number, dayId: number) =>
    deleteJson<{ ok: boolean }>("/api/day", { "course-id": courseId, "day-id": dayId }),
  reset: () => postJson<UserProgress>("/api/progress/reset", {}),
};

export { getJson, postJson };
