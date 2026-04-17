import { getJson, camelizeKeys } from "./api";
import type {
  CourseSummary, Course, ConceptMapData, NextUpItem,
  ConceptPageData, ConceptId, NoteSummary, NoteDetail,
  NotesGraphData, LlmProvider,
} from "./types";

export const ontology = {
  listCourses: () => getJson<CourseSummary[]>("/api/courses"),
  fetchCourse: (id: number) => getJson<Course>(`/api/course?id=${id}`),
  fetchConceptMap: (courseId: number) =>
    getJson<ConceptMapData>(`/api/concept-map?course-id=${courseId}`),
  fetchConceptMapAll: () => getJson<ConceptMapData>("/api/concept-map/all"),
  fetchNextUp: (courseId: number) =>
    getJson<{ nextUp: NextUpItem[] }>(`/api/next-up?course-id=${courseId}`),
  fetchConcept: (conceptId: ConceptId) =>
    getJson<ConceptPageData>(`/api/concept?id=${encodeURIComponent(conceptId)}`),
  listPdfs: () => getJson<{ files: string[] }>("/api/pdfs"),
  uploadPdf: async (file: File): Promise<{ filename: string }> => {
    const buf = await file.arrayBuffer();
    const res = await fetch(`/api/pdfs/upload?name=${encodeURIComponent(file.name)}`, {
      method: "POST",
      headers: { "Content-Type": "application/octet-stream" },
      body: buf,
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`upload ${file.name}: ${res.status} ${body}`);
    }
    const json = await res.json() as { files: string };
    return { filename: json.files };
  },
  autoImport: async (params: {
    filename: string;
    provider: LlmProvider;
    apiKey: string;
    model: string;
    mode: "new" | "extend";
    title?: string;
    targetCourseId?: number;
    maxPages?: number;
  }): Promise<{ ok: boolean; courseId: number }> => {
    const body: Record<string, unknown> = {
      provider: params.provider,
      filename: params.filename,
      model: params.model,
      mode: params.mode,
    };
    if (params.provider === "zai") body["api-key"] = params.apiKey;
    if (params.title) body.title = params.title;
    if (params.maxPages) body["max-pages"] = params.maxPages;
    if (params.targetCourseId != null)
      body["target-course-id"] = params.targetCourseId;
    const res = await fetch("/api/import/auto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`auto-import: ${res.status} ${text.slice(0, 500)}`);
    }
    const json = await res.json() as Record<string, unknown>;
    return camelizeKeys<{ ok: boolean; courseId: number }>(json);
  },
  listNotes: (domain?: string, tag?: string) => {
    const params = new URLSearchParams();
    if (domain) params.set("domain", domain);
    if (tag) params.set("tag", tag);
    const qs = params.toString();
    return getJson<NoteSummary[]>(`/api/notes${qs ? `?${qs}` : ""}`);
  },
  fetchNotesGraph: () => getJson<NotesGraphData>("/api/notes/graph"),
  fetchNote: (id: string) =>
    getJson<NoteDetail>(`/api/note?id=${encodeURIComponent(id)}`),
  listDomains: () => getJson<{ domains: string[] }>("/api/notes/domains"),
};
