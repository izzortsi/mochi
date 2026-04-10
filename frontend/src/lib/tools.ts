import { z } from "zod";
import { writeSexp } from "./sexp";

/*
 * Tool schemas for the study-plan LLM tutor. Each tool has:
 *   - a Zod schema for validation
 *   - an s-expression encoder (args -> alist pairs)
 *
 * Call frame: (call "tool-name" ((key "value") ...) "request-id")
 */

export const fetchDaySchema = z.object({ dayId: z.number() });
export const fetchTaskSchema = z.object({
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  taskIndex: z.number(),
});
export const markTaskCompleteSchema = fetchTaskSchema;
export const overlayTaskSchema = z.object({
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  taskIndex: z.number(),
  text: z.string(),
  detail: z.string(),
});
export const gradeAttemptSchema = z.object({
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  taskIndex: z.number(),
  text: z.string(),
  verdict: z.enum(["correct", "partial", "wrong"]),
  comment: z.string(),
});
export const appendGeneratedTaskSchema = z.object({
  id: z.string(),
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  sourceTaskIndex: z.number(),
  text: z.string(),
  detail: z.string(),
});
export const appendChatSchema = z.object({
  dayId: z.number(),
  role: z.enum(["user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().nullable(),
});
export const getChatSchema = z.object({ dayId: z.number() });
export const getProgressSchema = z.object({});

export type ToolName =
  | "fetch-day"
  | "fetch-task"
  | "mark-task-complete"
  | "overlay-task"
  | "grade-attempt"
  | "append-generated-task"
  | "append-chat"
  | "get-chat"
  | "get-progress";

export const toolSchemas: Record<ToolName, z.ZodTypeAny> = {
  "fetch-day": fetchDaySchema,
  "fetch-task": fetchTaskSchema,
  "mark-task-complete": markTaskCompleteSchema,
  "overlay-task": overlayTaskSchema,
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

export interface ValidatedCall {
  ok: true;
  frame: string;
  args: object;
  requestId: string;
}

export interface ValidationError {
  ok: false;
  error: string;
}

export function validateAndEncode(
  name: ToolName,
  rawArgs: unknown,
): ValidatedCall | ValidationError {
  const schema = toolSchemas[name];
  if (!schema) return { ok: false, error: `unknown tool: ${name}` };
  const parsed = schema.safeParse(rawArgs);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.message };
  }
  const requestId = Math.random().toString(36).slice(2, 10);
  return {
    ok: true,
    frame: encodeToolCall(name, parsed.data, requestId),
    args: parsed.data,
    requestId,
  };
}

export { writeSexp };
