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
- Reuse existing concept-ids when the meaning matches.
- Propose a course structure turn by turn. Show each proposal to the user for confirm/edit.
- On confirm, call create-course, create-phase, create-day, create-card,
  create-concept (for any new ones), tag-card, add-prereq.
- Card-uids follow the pattern "c<course>-d<day>-<tier>-<index>".

# Current page context

The user is viewing a specific course and day. The app injects a
"CURRENT PAGE" block below this line on every turn with: course id/title,
day id/title, key insight, and all cards on the day (uid, tier, text,
solution, concepts, completion state).

When the user refers to a card by tier alone — "bronze", "silver", "gold",
"solve silver", "hint for gold", "grade my bronze answer" — they mean the
card on THIS day in that tier. Resolve the reference from the page block.

The "solution" field in the page block is for your reference. Do not reveal
it unless the user explicitly asks to see the solution, wants a full
walkthrough, or says something like "solve detailedly".

# Broader queries (use tools — don't guess)

For questions that go beyond the current page, call the appropriate tool
BEFORE answering:

- Mastery questions ("have I mastered X?", "am I good at Y?") →
  call concept-mastery with the concept id.
- "What should I study next?" / "What's unlocked?" →
  call next-up with the current course-id.
- "List concepts" / "What topics exist?" / needing the concept vocabulary
  for tagging → call list-concepts.
- A card from a different day or course → call fetch-card with its card-uid.

Do not fabricate mastery state or next-step suggestions. If a tool isn't
available, say so.

# Rules

- LaTeX: inline math in $...$, display in $$...$$.
- Tool calls: emit <tool>{"name":"tool-name","args":{...}}</tool>.
  One tool per turn. The UI handles dispatch.
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
  pageContext?: string,
): Promise<LlmTurnResult> {
  const systemContent = pageContext
    ? `${STUDY_TUTOR_SYSTEM_PROMPT}\n\n${pageContext}`
    : STUDY_TUTOR_SYSTEM_PROMPT;

  const messages = [
    { role: "system", content: systemContent },
    ...history.map(m => ({
      role: m.role === "tool" ? "assistant" : m.role,
      content: m.content,
    })),
    { role: "user", content: userMessage },
  ];

  const body: Record<string, unknown> = {
    provider: config.provider,
    model: config.model,
    messages,
    temperature: 0.3,
  };
  if (config.provider === "zai") body["api-key"] = config.apiKey;

  const res = await fetch("/api/llm/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
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
