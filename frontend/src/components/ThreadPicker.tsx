"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, Pin, PinOff, Plus, Pencil, X } from "lucide-react";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import { useTutorContext } from "@/lib/tutor-context";
import { CHANNELS_CHANGED_EVENT } from "@/lib/use-tutor-engine";
import type { ChatThread, CourseSummary, ChatChannel } from "@/lib/types";

/* Compact dropdown for switching the tutor's active chat channel.
 *
 * Hierarchy: thread (course or Notes) → channels. Switching to a
 * channel pins (threadId, channelId) so navigation stops stomping the
 * conversation. "Follow current page" unpins and lets the engine pick
 * the most-recent channel of whichever course the user is on.
 *
 * Channels can be created (+ button) and renamed (pencil). Naming is
 * also auto-derived from the first user message when left blank — the
 * picker keeps showing "(unnamed)" until that auto-name lands.
 */

interface ThreadGroup {
  threadId: number;
  label: string;
  channels: ChatChannel[];
}

function labelForCourse(courseId: number, courses: Map<number, CourseSummary>): string {
  if (courseId === 0) return "Notes";
  const course = courses.get(courseId);
  if (course) return course.title;
  return `course ${courseId} (deleted)`;
}

function fallbackChannelLabel(c: ChatChannel): string {
  if (c.name) return c.name;
  return "(unnamed)";
}

export function ThreadPicker() {
  const { courseId, pinnedChannel, pinChannel, unpinChannel } = useTutorContext();
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState<ThreadGroup[]>([]);
  const [courseMap, setCourseMap] = useState<Map<number, CourseSummary>>(new Map());
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState("");
  const [creatingFor, setCreatingFor] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const refresh = () => {
    Promise.all([
      api.memory.fetchAllChats().catch(() => ({ threads: [] as ChatThread[] })),
      ontology.listCourses().catch(() => [] as CourseSummary[]),
    ]).then(([chat, courseList]) => {
      const cMap = new Map(courseList.map((c) => [c.id, c] as const));
      setCourseMap(cMap);
      const ids = new Set<number>([0, courseId]);
      if (pinnedChannel) ids.add(pinnedChannel.threadId);
      for (const t of chat.threads) ids.add(t.courseId);
      for (const c of courseList) ids.add(c.id);
      const threadById = new Map(chat.threads.map((t) => [t.courseId, t] as const));
      const list: ThreadGroup[] = Array.from(ids).map((id) => ({
        threadId: id,
        label: labelForCourse(id, cMap),
        channels: threadById.get(id)?.channels ?? [],
      }));
      list.sort((a, b) => {
        if (a.threadId === 0) return -1;
        if (b.threadId === 0) return 1;
        return a.threadId - b.threadId;
      });
      setGroups(list);
    });
  };

  useEffect(() => {
    refresh();
    // Engine emits this whenever it creates / renames a channel; keep
    // the dropdown in sync without a per-keystroke poll.
    const handler = () => refresh();
    window.addEventListener(CHANNELS_CHANGED_EVENT, handler);
    return () => window.removeEventListener(CHANNELS_CHANGED_EVENT, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, pinnedChannel?.threadId, pinnedChannel?.channelId]);

  // Click-away close. Mouse-down captures clicks before they hit the
  // pane's input handlers underneath.
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [open]);

  const pinned = pinnedChannel !== null;

  // Resolve the label shown on the pill button. When pinned, find the
  // channel's name; when not, show the page's course label since the
  // engine will follow it.
  let buttonLabel = "Tutor";
  if (pinnedChannel) {
    const grp = groups.find((g) => g.threadId === pinnedChannel.threadId);
    const ch = grp?.channels.find((c) => c.id === pinnedChannel.channelId);
    const courseLabel = labelForCourse(pinnedChannel.threadId, courseMap);
    const chLabel = ch ? fallbackChannelLabel(ch) : "channel";
    buttonLabel = `${courseLabel} · ${chLabel}`;
  } else {
    buttonLabel = labelForCourse(courseId, courseMap);
  }

  const handlePick = (threadId: number, channelId: string) => {
    pinChannel({ threadId, channelId });
    setOpen(false);
  };

  const handleFollowPage = () => {
    unpinChannel();
    setOpen(false);
  };

  const handleCreate = async (threadId: number, name: string) => {
    setCreatingFor(null);
    const trimmed = name.trim();
    const resp = await api.memory.createChannel(threadId, trimmed);
    refresh();
    pinChannel({ threadId, channelId: resp.channel.id });
    setOpen(false);
  };

  const startRename = (channelId: string, currentName: string) => {
    setRenamingId(channelId);
    setRenameDraft(currentName);
  };

  const commitRename = async (threadId: number, channelId: string) => {
    const trimmed = renameDraft.trim();
    setRenamingId(null);
    setRenameDraft("");
    if (!trimmed) return;
    await api.memory.renameChannel(threadId, channelId, trimmed);
    refresh();
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100"
        title={pinned ? "Pinned channel — click to switch" : "Following page — click to pin a channel"}
      >
        {pinned ? <Pin className="w-3 h-3" /> : <PinOff className="w-3 h-3" />}
        <span className="max-w-[12rem] truncate">{buttonLabel}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-72 max-h-96 overflow-auto bg-black/95 border border-[#2a2a2a] shadow-lg z-50 text-xs">
          <button
            onClick={handleFollowPage}
            className={
              "w-full text-left px-3 py-1.5 flex items-center gap-2 border-b border-[#1a1a1a] hover:bg-[#0f0f0f] " +
              (!pinned ? "text-amber-300" : "opacity-80")
            }
          >
            {!pinned ? <Check className="w-3 h-3" /> : <span className="w-3" />}
            <span>Follow current page</span>
          </button>
          {groups.map((g) => (
            <div key={g.threadId} className="border-b border-[#1a1a1a]">
              <div className="px-3 py-1.5 flex items-center justify-between bg-[#0a0a0a]">
                <span className="text-[10px] uppercase tracking-wider font-mono opacity-60 truncate">
                  {g.label}
                </span>
                <button
                  onClick={() =>
                    setCreatingFor(creatingFor === g.threadId ? null : g.threadId)
                  }
                  className="opacity-50 hover:opacity-100 flex-shrink-0"
                  title="New chat"
                  aria-label="New chat"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              {creatingFor === g.threadId && (
                <NewChannelInput
                  onCommit={(name) => handleCreate(g.threadId, name)}
                  onCancel={() => setCreatingFor(null)}
                />
              )}
              {g.channels.length === 0 && creatingFor !== g.threadId && (
                <div className="px-3 py-1.5 opacity-30 italic">no channels</div>
              )}
              {g.channels.map((c) => {
                const active =
                  pinned &&
                  pinnedChannel!.threadId === g.threadId &&
                  pinnedChannel!.channelId === c.id;
                const isRenaming = renamingId === c.id;
                return (
                  <div
                    key={c.id}
                    className={
                      "group flex items-center gap-1 hover:bg-[#0f0f0f] " +
                      (active ? "text-amber-300" : "")
                    }
                  >
                    {isRenaming ? (
                      <input
                        autoFocus
                        value={renameDraft}
                        onChange={(e) => setRenameDraft(e.target.value)}
                        onBlur={() => commitRename(g.threadId, c.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            commitRename(g.threadId, c.id);
                          } else if (e.key === "Escape") {
                            setRenamingId(null);
                            setRenameDraft("");
                          }
                        }}
                        className="flex-1 bg-[#050505] border border-[#2a2a2a] rounded px-2 py-1 mx-2 my-1 outline-none focus:border-[#404040]"
                      />
                    ) : (
                      <>
                        <button
                          onClick={() => handlePick(g.threadId, c.id)}
                          className="flex-1 text-left px-3 py-1.5 flex items-center gap-2 min-w-0"
                        >
                          {active ? <Check className="w-3 h-3 flex-shrink-0" /> : <span className="w-3 flex-shrink-0" />}
                          <span className="flex-1 truncate">
                            {c.name || <span className="opacity-50 italic">{fallbackChannelLabel(c)}</span>}
                          </span>
                          <span className="text-[10px] opacity-40 font-mono flex-shrink-0">
                            {c.messageCount ?? c.messages?.length ?? 0}
                          </span>
                        </button>
                        <button
                          onClick={() => startRename(c.id, c.name)}
                          className="opacity-0 group-hover:opacity-50 hover:opacity-100 px-1 flex-shrink-0"
                          title="Rename"
                          aria-label="Rename channel"
                        >
                          <Pencil className="w-3 h-3" />
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* Inline input for creating a new channel. The empty-name path is
 * intentional: an unnamed channel will auto-name itself from the first
 * user message via use-tutor-engine.deriveChannelName. */
function NewChannelInput({
  onCommit,
  onCancel,
}: {
  onCommit: (name: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="px-2 py-1 flex items-center gap-1">
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Channel name (optional)…"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onCommit(value);
          } else if (e.key === "Escape") {
            onCancel();
          }
        }}
        className="flex-1 bg-[#050505] border border-[#2a2a2a] rounded px-2 py-1 outline-none focus:border-[#404040]"
      />
      <button
        onClick={() => onCommit(value)}
        className="opacity-50 hover:opacity-100 px-1"
        title="Create"
      >
        <Check className="w-3 h-3" />
      </button>
      <button
        onClick={onCancel}
        className="opacity-50 hover:opacity-100 px-1"
        title="Cancel"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
