import { getJson } from "./api";
import type {
  CourseSummary, Course, ConceptMapData, NextUpItem,
  ConceptPageData, ConceptId,
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
};
