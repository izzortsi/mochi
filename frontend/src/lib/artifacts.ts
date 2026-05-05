/* Artifact block parser. The tutor can author small interactive
 * documents — graphs, simulations, step-throughs — by emitting:
 *
 *     <artifact type="html" id="phase-portrait" title="dy/dt = -y">
 *     <!DOCTYPE html>
 *     ...self-contained HTML/JS/CSS...
 *     </artifact>
 *
 * The frontend strips the block from the prose, stashes its body, and
 * mounts a sandboxed iframe in its place. Block content is preserved in
 * the assistant message's raw content (alongside <tool> blocks) so chat
 * replay reconstructs the iframe on reload — same convention as tools.
 *
 * Limits: only "type=html" recognized for now. Other types parse but
 * render as a placeholder so we can add them incrementally.
 */

export interface Artifact {
  type: string;       // "html" — only renderer wired; future: "svg", "react"
  id: string;         // Stable id; used as the React key + iframe name
  title: string;      // Header label
  body: string;       // Raw content between the tags
}

export type AssistantSegment =
  | { kind: "text"; text: string }
  | { kind: "artifact"; artifact: Artifact };

const TAG_RE = /<artifact\b([^>]*)>([\s\S]*?)<\/artifact>/g;

function parseAttrs(raw: string): Record<string, string> {
  const out: Record<string, string> = {};
  // Match key="value" — the whitespace around `=` and quote style are
  // both forgiving; the model's exact output will vary.
  const re = /(\w[\w-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw)) !== null) {
    out[m[1]] = m[2] ?? m[3] ?? m[4] ?? "";
  }
  return out;
}

// Remove ALL <artifact>…</artifact> blocks from raw text. Used as the
// counterpart to stripToolBlocks when rendering the assistant prose
// without the iframes interleaved.
export function stripArtifacts(content: string): string {
  return content.replace(TAG_RE, "").trim();
}

// Split assistant raw content into ordered text + artifact segments.
// Text segments are returned even when empty so callers can decide
// whether to render them (Markdown drops blank ones naturally).
export function segmentAssistantContent(content: string): AssistantSegment[] {
  const out: AssistantSegment[] = [];
  let cursor = 0;
  TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = TAG_RE.exec(content)) !== null) {
    const before = content.slice(cursor, m.index);
    if (before.trim()) out.push({ kind: "text", text: before });
    const attrs = parseAttrs(m[1] ?? "");
    out.push({
      kind: "artifact",
      artifact: {
        type: (attrs.type || "html").toLowerCase(),
        id: attrs.id || `artifact-${out.length}`,
        title: attrs.title || "Artifact",
        body: m[2],
      },
    });
    cursor = m.index + m[0].length;
  }
  const tail = content.slice(cursor);
  if (tail.trim()) out.push({ kind: "text", text: tail });
  return out;
}
