import { z } from "zod";

export const fetchCardSchema = z.object({ cardUid: z.string() });
export const markTaskCompleteSchema = z.object({ cardUid: z.string() });
export const gradeAttemptSchema = z.object({
  cardUid: z.string(),
  verdict: z.enum(["correct", "partial", "wrong"]),
  comment: z.string().default(""),
});
export const appendGeneratedTaskSchema = z.object({
  id: z.string(),
  sourceCardUid: z.string(),
  tier: z.enum(["bronze", "silver", "gold"]),
  text: z.string(),
  detail: z.string(),
});
export const appendChatSchema = z.object({
  courseId: z.number(),
  role: z.enum(["user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().nullable(),
});
export const getChatSchema = z.object({ courseId: z.number() });
export const getProgressSchema = z.object({});
export const recordTutorNoteSchema = z.object({
  cardUid: z.string(),
  body: z.string(),
});
export const getTutorNotesSchema = z.object({
  cardUid: z.string().optional().default(""),
});
export const addNoteSchema = z.object({
  noteId: z.string(),
  title: z.string(),
  content: z.string(),
  domain: z.string().optional().default(""),
  tags: z.array(z.string()).optional().default([]),
  related: z.array(z.string()).optional().default([]),
});
export const listNotesSchema = z.object({
  domain: z.string().optional().default(""),
});
export const fetchNoteSchema = z.object({ noteId: z.string() });
// Update is a partial — every field except noteId is optional and only
// touched when explicitly passed.
export const updateNoteSchema = z.object({
  noteId: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  domain: z.string().optional(),
  tags: z.array(z.string()).optional(),
  related: z.array(z.string()).optional(),
});
export const deleteNoteSchema = z.object({ noteId: z.string() });

export const listCoursesSchema = z.object({});
export const listConceptsSchema = z.object({});
export const createCourseSchema = z.object({ title: z.string(), slug: z.string() });
export const createPhaseSchema = z.object({
  courseId: z.number(), phaseNum: z.number(), title: z.string(),
});
export const createDaySchema = z.object({
  courseId: z.number(), dayId: z.number(), phaseNum: z.number(),
  title: z.string(), icon: z.string(), summary: z.string(), keyInsight: z.string(),
});
export const createCardSchema = z.object({
  cardUid: z.string(),
  courseId: z.number(), dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  taskIndex: z.number(),
  text: z.string(), detail: z.string(),
});
export const createConceptSchema = z.object({ conceptId: z.string(), label: z.string() });
export const tagCardSchema = z.object({ cardUid: z.string(), conceptId: z.string() });
export const deleteCardSchema = z.object({ cardUid: z.string() });
export const deleteCourseSchema = z.object({ courseId: z.number() });
export const deleteDaySchema = z.object({ courseId: z.number(), dayId: z.number() });export const addPrereqSchema = z.object({ conceptId: z.string(), prereq: z.string() });
export const queryConceptCardsSchema = z.object({ conceptId: z.string() });
export const conceptMasterySchema = z.object({ conceptId: z.string() });
export const nextUpSchema = z.object({ courseId: z.number() });

export type ToolName =
  | "list-courses" | "list-concepts"
  | "create-course" | "create-phase" | "create-day" | "create-card" | "delete-card"
  | "delete-course" | "delete-day"
  | "create-concept" | "tag-card" | "add-prereq"
  | "query-concept-cards" | "concept-mastery" | "next-up"
  | "fetch-card" | "mark-task-complete" | "grade-attempt"
  | "append-generated-task" | "append-chat" | "get-chat" | "get-progress"
  | "record-tutor-note" | "get-tutor-notes"
  | "add-note" | "list-notes" | "fetch-note" | "update-note" | "delete-note";

export const toolSchemas: Record<ToolName, z.ZodTypeAny> = {
  "list-courses": listCoursesSchema,
  "list-concepts": listConceptsSchema,
  "create-course": createCourseSchema,
  "create-phase": createPhaseSchema,
  "create-day": createDaySchema,
  "create-card": createCardSchema,
  "delete-card": deleteCardSchema,
  "delete-course": deleteCourseSchema,
  "delete-day": deleteDaySchema,
  "create-concept": createConceptSchema,
  "tag-card": tagCardSchema,
  "add-prereq": addPrereqSchema,
  "query-concept-cards": queryConceptCardsSchema,
  "concept-mastery": conceptMasterySchema,
  "next-up": nextUpSchema,
  "fetch-card": fetchCardSchema,
  "mark-task-complete": markTaskCompleteSchema,
  "grade-attempt": gradeAttemptSchema,
  "append-generated-task": appendGeneratedTaskSchema,
  "append-chat": appendChatSchema,
  "get-chat": getChatSchema,
  "get-progress": getProgressSchema,
  "record-tutor-note": recordTutorNoteSchema,
  "get-tutor-notes": getTutorNotesSchema,
  "add-note": addNoteSchema,
  "list-notes": listNotesSchema,
  "fetch-note": fetchNoteSchema,
  "update-note": updateNoteSchema,
  "delete-note": deleteNoteSchema,
};

function toKebab(key: string): string {
  return key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function kebabKeys(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    out[toKebab(k)] = v;
  }
  return out;
}

export function encodeToolCall(name: ToolName, args: object, requestId: string): string {
  return JSON.stringify({ call: name, args: kebabKeys(args as Record<string, unknown>), requestId });
}

export interface ValidatedCall { ok: true; frame: string; args: object; requestId: string; }
export interface ValidationError { ok: false; error: string; }

export function validateAndEncode(name: ToolName, rawArgs: unknown): ValidatedCall | ValidationError {
  const schema = toolSchemas[name];
  if (!schema) return { ok: false, error: `unknown tool: ${name}` };
  const parsed = schema.safeParse(rawArgs);
  if (!parsed.success) return { ok: false, error: parsed.error.message };
  const requestId = Math.random().toString(36).slice(2, 10);
  return {
    ok: true,
    frame: encodeToolCall(name, parsed.data, requestId),
    args: parsed.data,
    requestId,
  };
}
