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
};
