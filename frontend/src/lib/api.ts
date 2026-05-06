import type {
  UserProgress, CardUid, PhaseName, SrsItem, SrsStats, SrsVerdict,
  ChatThread, ChatMessage, TutorNote,
} from "./types";

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

async function deletePath<T>(path: string): Promise<T> {
  const res = await fetch(path, { method: "DELETE" });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

// Fired by completion endpoints so the PetCreature in the HUD refreshes
// without waiting for its 30-60s poll. Listeners diff the new pet state
// against the previous and float the deltas as gamification feedback.
export const PET_REFRESH_EVENT = "pet-refresh";
function emitPetRefresh() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(PET_REFRESH_EVENT));
  }
}

export const api = {
  fetchProgress: () => getJson<UserProgress>("/api/progress"),
  complete: (cardUid: CardUid) =>
    postJson<UserProgress>("/api/progress/complete", { "card-uid": cardUid })
      .then((r) => { emitPetRefresh(); return r; }),
  uncomplete: (cardUid: CardUid) =>
    postJson<UserProgress>("/api/progress/uncomplete", { "card-uid": cardUid }),
  completePhase: (cardUid: CardUid, phase: PhaseName) =>
    postJson<UserProgress>("/api/progress/complete-phase", { "card-uid": cardUid, phase })
      .then((r) => { emitPetRefresh(); return r; }),
  uncompletePhase: (cardUid: CardUid, phase: PhaseName) =>
    postJson<UserProgress>("/api/progress/uncomplete-phase", { "card-uid": cardUid, phase }),
  deleteCard: (cardUid: CardUid) =>
    deleteJson<{ ok: boolean }>("/api/card", { "card-uid": cardUid }),
  deleteCourse: (courseId: number) =>
    deleteJson<{ ok: boolean }>("/api/course", { "course-id": courseId }),
  deleteDay: (courseId: number, dayId: number) =>
    deleteJson<{ ok: boolean }>("/api/day", { "course-id": courseId, "day-id": dayId }),
  reset: () => postJson<UserProgress>("/api/progress/reset", {}),
  srsDue: (limit = 50) =>
    getJson<{ items: SrsItem[]; totalDue: number }>(`/api/srs/due?limit=${limit}`),
  srsStats: () => getJson<SrsStats>("/api/srs/stats"),
  srsReview: (id: string, verdict: SrsVerdict) =>
    postJson<{ ok: boolean; item: SrsItem }>("/api/srs/review", { id, verdict }),
  memory: {
    fetchAllChats: () =>
      getJson<{ threads: ChatThread[] }>("/api/memory/chat"),
    fetchChat: (courseId: number) =>
      getJson<{ courseId: number; messages: ChatMessage[] }>(
        `/api/memory/chat?course-id=${courseId}`,
      ),
    appendChat: (courseId: number, m: ChatMessage) =>
      postJson<{ ok: boolean; count: number }>("/api/memory/chat/append", {
        "course-id": courseId,
        role: m.role,
        content: m.content,
        "tool-name": m.toolName,
        timestamp: m.timestamp,
        images: m.images ?? [],
      }),
    deleteChatTurn: (courseId: number, index: number) =>
      deletePath<{ ok: boolean }>(
        `/api/memory/chat/turn?course-id=${courseId}&index=${index}`,
      ),
    wipeChat: (courseId: number) =>
      deletePath<{ ok: boolean }>(`/api/memory/chat?course-id=${courseId}`),
    fetchTutorNotes: (cardUid?: string) =>
      getJson<{ notes: TutorNote[] }>(
        cardUid
          ? `/api/memory/tutor-notes?card-uid=${encodeURIComponent(cardUid)}`
          : "/api/memory/tutor-notes",
      ),
    deleteTutorNote: (id: string) =>
      deletePath<{ ok: boolean }>(
        `/api/memory/tutor-notes/${encodeURIComponent(id)}`,
      ),
  },
  uploadChatImage: async (file: File): Promise<{ name: string; url: string }> => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/chat-image", { method: "POST", body: fd });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text.slice(0, 200));
    }
    return camelizeKeys<{ name: string; url: string }>(await res.json());
  },
  petPet: () =>
    fetch("/api/pet/pet", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" })
      .then(async (r) => {
        if (!r.ok) {
          const text = await r.text();
          throw new Error(text.slice(0, 200));
        }
        return camelizeKeys<{
          ok: boolean;
          happiness: number;
          health: number;
          quote: string | null;
        }>(await r.json());
      }),
};

export { getJson, postJson };
