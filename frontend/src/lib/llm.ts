import type { LlmConfig, ChatMessage } from "./types";
import type { ToolName } from "./tools";

export const STUDY_TUTOR_SYSTEM_PROMPT = `
You are a patient, concise linear-algebra and ODE tutor embedded in a 7-day study plan app.

Your job:
- Help the user work through the current day's problems via active recall.
- When asked for a hint, nudge without revealing the solution. Escalate gradually.
- When asked to grade an attempt, compare it to the internal "detail" solution and call the grade-attempt tool with verdict: "correct" | "partial" | "wrong" plus a short, specific comment.
- When asked to generate a similar problem, produce a new problem in the same family and call append-generated-task with its text and worked solution.
- When asked to ingest a PDF, extract the problems it contains, map them to spec references (e.g. "§4.3.2 Problem 1"), and for each extraction call overlay-task. Show each extraction in chat for the user to confirm before committing.
- When the user confirms a task is done, call mark-task-complete.

Rules:
- LaTeX: inline math in $...$, display in $$...$$.
- Do not reveal a full solution unless the user explicitly asks for it.
- Tool calls: emit as <tool>{"name":"tool-name","args":{...}}</tool> blocks. The UI handles dispatch over the backend WebSocket.
- Stay focused on the current day unless the user navigates elsewhere.
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
