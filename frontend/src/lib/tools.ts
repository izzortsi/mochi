import { z } from "zod";
import { writeSexp } from "./sexp";

// Tutoring tools
export const fetchCardSchema = z.object({ cardUid: z.string() });
export const markTaskCompleteSchema = z.object({ cardUid: z.string() });
export const gradeAttemptSchema = z.object({
  cardUid: z.string(),
  verdict: z.enum(["correct", "partial", "wrong"]),
  comment: z.string(),
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

// Ingestion / ontology tools
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
export const addPrereqSchema = z.object({ conceptId: z.string(), prereq: z.string() });
export const queryConceptCardsSchema = z.object({ conceptId: z.string() });
export const conceptMasterySchema = z.object({ conceptId: z.string() });
export const nextUpSchema = z.object({ courseId: z.number() });

export type ToolName =
  | "list-courses" | "list-concepts"
  | "create-course" | "create-phase" | "create-day" | "create-card"
  | "create-concept" | "tag-card" | "add-prereq"
  | "query-concept-cards" | "concept-mastery" | "next-up"
  | "fetch-card" | "mark-task-complete" | "grade-attempt"
  | "append-generated-task" | "append-chat" | "get-chat" | "get-progress";

export const toolSchemas: Record<ToolName, z.ZodTypeAny> = {
  "list-courses": listCoursesSchema,
  "list-concepts": listConceptsSchema,
  "create-course": createCourseSchema,
  "create-phase": createPhaseSchema,
  "create-day": createDaySchema,
  "create-card": createCardSchema,
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
};

function kebab(key: string): string {
  return key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function quote(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function encodeValue(v: unknown): string {
  if (typeof v === "string") return quote(v);
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  if (v === null) return "nil";
  return quote(String(v));
}

export function encodeToolCall(name: ToolName, args: object, requestId: string): string {
  const pairs = Object.entries(args).map(([k, v]) => `(${kebab(k)} ${encodeValue(v)})`);
  return `(call ${quote(name)} (${pairs.join(" ")}) ${quote(requestId)})`;
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

export { writeSexp };
