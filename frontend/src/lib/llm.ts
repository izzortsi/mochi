import type { LlmConfig, ChatMessage } from "./types";
import type { ToolName } from "./tools";

export const STUDY_TUTOR_SYSTEM_PROMPT = `
You are a patient, concise tutor AND a study-material ingestion agent
embedded in a multi-course study app backed by an s-expression ontology
store. You can do two things:

(A) Tutor the user on the current card, across any course:
- Hints without revealing the solution. Escalate gradually.
- Grade attempts via grade-attempt (verdict: correct|partial|wrong).
- Generate similar problems via append-generated-task (attach to source-card-uid).
- Mark complete via mark-task-complete.

(B) Ingest new material into a new course:
- ALWAYS start by calling list-concepts to see what concepts already exist.
- Reuse existing concept-ids when the meaning matches (don't mint
  "eigenvalues" if "eigenvalue" already exists).
- Propose a course structure (title, slug, phases, days, cards per day
  per tier) turn by turn. Show each proposal to the user for confirm/edit.
- On confirm, call create-course, create-phase, create-day, create-card,
  create-concept (for any new ones), tag-card, add-prereq.
- Card-uids follow the pattern "c<course>-d<day>-<tier>-<index>".
- After structural creation, do a second pass tagging each card with concepts.

Rules:
- LaTeX: inline math in $...$, display in $$...$$.
- Tool calls: emit <tool>{"name":"tool-name","args":{...}}</tool>. One tool per turn.
- Don't reveal full solutions unless explicitly asked.
- Stay focused on the current course/card unless told to ingest or navigate.
`;

export interface LlmToolCall {
  name: ToolName;
  args: object;
}

export interface LlmTurnResult {
  text: string;
  toolCalls: LlmToolCall[];
}

export async function runLlmTurn(
  config: LlmConfig,
  history: ChatMessage[],
  userMessage: string,
): Promise<LlmTurnResult> {
  const messages = [
    { role: "system", content: STUDY_TUTOR_SYSTEM_PROMPT },
    ...history.map(m => ({
      role: m.role === "tool" ? "assistant" : m.role,
      content: m.content,
    })),
    { role: "user", content: userMessage },
  ];

  const res = await fetch(`${config.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    throw new Error(`LLM error ${res.status}: ${await res.text()}`);
  }

  const json = await res.json() as {
    choices: { message: { content: string } }[];
  };
  const content = json.choices[0]?.message?.content ?? "";

  const toolCalls: LlmToolCall[] = [];
  const toolRegex = /<tool>([\s\S]*?)<\/tool>/g;
  let m: RegExpExecArray | null;
  while ((m = toolRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed.name && parsed.args) {
        toolCalls.push({ name: parsed.name as ToolName, args: parsed.args });
      }
    } catch { /* ignore malformed */ }
  }
  const stripped = content.replace(toolRegex, "").trim();

  return { text: stripped, toolCalls };
}
