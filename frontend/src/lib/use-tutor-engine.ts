"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { loadConfig, isConfigured } from "./settings";
import { runLlmTurn } from "./llm";
import { validateAndEncode, type ToolName } from "./tools";
import { WsClient } from "./ws";
import { api } from "./api";
import { useTutorContext } from "./tutor-context";
import { segmentAssistantContent } from "./artifacts";
import {
  CHAT_APPENDED_EVENT,
  type ChatAppendedDetail,
} from "@/components/SessionCard";
import type { ChatChannel, ChatMessage, ConnectionStatus } from "./types";

// Fired whenever the engine has persisted a fresh artifact emission. The
// /artifacts page listens so it can refresh in the background while the
// tutor is mid-conversation.
export const ARTIFACT_SAVED_EVENT = "mochi:artifact-saved";

// Fired when the channel list for any course changes (create / rename /
// delete). The picker listens so its dropdown stays in sync without a
// per-keystroke poll.
export const CHANNELS_CHANGED_EVENT = "mochi:channels-changed";

// Maximum tool-call iterations per user turn. Each iteration is one LLM
// round-trip: {assistant reply → optional tool dispatch → feed result back}.
// Loop exits early when the model stops emitting <tool> blocks. Cap prevents
// a confused model from looping on a tool that keeps failing.
const MAX_TOOL_ITERATIONS = 8;

// Maximum length for an auto-derived channel name. Keeps the picker
// dropdown readable and lines up with the truncation the picker uses
// when displaying.
const AUTO_NAME_MAX_LEN = 40;

function summarizeToolError(raw: string): string {
  try {
    const parsed: Array<{ path?: unknown[]; code?: string; message?: string }> =
      JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const missing = parsed
        .filter((e) => e?.code === "invalid_type" && e?.message === "Required")
        .map((e) => (e.path || []).join("."))
        .filter(Boolean);
      if (missing.length) return `missing required fields: ${missing.join(", ")}`;
    }
  } catch {
    /* not JSON */
  }
  return raw.length > 200 ? raw.slice(0, 200) + "…" : raw;
}

function deriveChannelName(input: string): string {
  // Collapse whitespace then take a chat-bubble-sized prefix. Strip
  // trailing punctuation only so "What's an eigenvalue?" → "What's an
  // eigenvalue" doesn't leave a dangling "What's an eige…?".
  const compact = input.replace(/\s+/g, " ").trim();
  if (!compact) return "";
  if (compact.length <= AUTO_NAME_MAX_LEN) return compact.replace(/[?.!,;:]+$/, "");
  return compact.slice(0, AUTO_NAME_MAX_LEN).trim() + "…";
}

function emitChannelsChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CHANNELS_CHANGED_EVENT));
  }
}

export interface TutorEngine {
  messages: ChatMessage[];
  input: string;
  setInput: (v: string) => void;
  send: () => void;
  busy: boolean;
  status: ConnectionStatus;
  // Images queued to attach to the next user turn. Already uploaded to
  // /api/chat-image; URLs accumulate here and are flushed onto the user
  // message at send-time.
  pendingImages: string[];
  addPendingImage: (url: string) => void;
  removePendingImage: (url: string) => void;
  // Effective chat coordinates (resolved from pin or page).
  threadId: number;
  channel: ChatChannel | null;
  // Whether the current channel is sticky-pinned vs auto-following the page.
  channelPinned: boolean;
}

/* The Tutor's chat engine, separated from chrome so the desktop fixed
 * panel and the mobile fullscreen overlay can reuse it without
 * duplicating the WebSocket lifecycle, message history, tool-call loop,
 * or persistence wiring.
 */
export function useTutorEngine(): TutorEngine {
  const { effectiveThreadId, pinnedChannel, pinChannel, pageContext, onToolCall } =
    useTutorContext();
  const courseId = effectiveThreadId;

  const [channel, setChannel] = useState<ChatChannel | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const [pendingImages, setPendingImages] = useState<string[]>([]);
  const wsRef = useRef<WsClient | null>(null);
  const pendingRef = useRef<Map<string, (resp: string) => void>>(new Map());
  // The id we asked for last so the resolver effect can decide whether
  // to ignore a slow response that no longer matches the active state.
  const requestedKeyRef = useRef<string>("");
  // (threadId, channelId) of whatever's currently in `channel` state.
  // Channel ids alone aren't globally unique — every legacy course
  // has a channel with id "default" — so the skip guard has to key
  // off the pair, not the bare channel id.
  const cachedRef = useRef<{ threadId: number; channelId: string } | null>(null);

  const addPendingImage = useCallback((url: string) => {
    setPendingImages((cur) => (cur.includes(url) ? cur : [...cur, url]));
  }, []);
  const removePendingImage = useCallback((url: string) => {
    setPendingImages((cur) => cur.filter((u) => u !== url));
  }, []);

  useEffect(() => {
    const ws = new WsClient(
      process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:4000/ws",
      (msg) => {
        if (msg.requestId) {
          const resolver = pendingRef.current.get(msg.requestId);
          if (resolver) {
            resolver(JSON.stringify(msg.ok ? msg.result : { error: msg.error }));
            pendingRef.current.delete(msg.requestId);
          }
        }
      },
      setStatus,
    );
    ws.connect();
    wsRef.current = ws;
    return () => ws.disconnect();
  }, []);

  // Resolve the active channel for the current (threadId, pin) combo.
  //
  //   - Pinned: fetch that exact channel by id.
  //   - Unpinned: fetch the course's channel list and pick the most
  //     recent (last in the array). When the course has no channels,
  //     the engine starts with channel=null; send() will create one
  //     lazily on first user turn.
  //
  // Skip the fetch when our local channel already matches the active
  // pin — happens right after send() auto-pins to a freshly-created
  // channel. Without the skip, the round-trip races against the
  // in-flight appendChat and can clobber local messages mid-turn.
  //
  // We also capture a per-request key so a stale response from a
  // previous (threadId, channelId) pair can't overwrite the current
  // selection when the user switches channels rapidly.
  useEffect(() => {
    if (
      pinnedChannel &&
      cachedRef.current &&
      cachedRef.current.threadId === pinnedChannel.threadId &&
      cachedRef.current.channelId === pinnedChannel.channelId
    ) {
      return;
    }
    const requestKey = pinnedChannel
      ? `pin:${pinnedChannel.threadId}:${pinnedChannel.channelId}`
      : `latest:${courseId}`;
    requestedKeyRef.current = requestKey;

    let cancelled = false;
    const finalize = (threadId: number, ch: ChatChannel | null) => {
      if (cancelled) return;
      if (requestedKeyRef.current !== requestKey) return;
      cachedRef.current = ch ? { threadId, channelId: ch.id } : null;
      setChannel(ch);
      setMessages(ch?.messages ?? []);
    };

    if (pinnedChannel) {
      api.memory
        .fetchChannel(pinnedChannel.threadId, pinnedChannel.channelId)
        .then((resp) => finalize(pinnedChannel.threadId, resp.channel))
        .catch(() => finalize(pinnedChannel.threadId, null));
    } else {
      api.memory
        .fetchCourseChannels(courseId)
        .then((resp) => {
          const list = resp.channels ?? [];
          finalize(courseId, list.length ? list[list.length - 1] : null);
        })
        .catch(() => finalize(courseId, null));
    }
    return () => { cancelled = true; };
  }, [courseId, pinnedChannel]);

  // Live-append when SessionCard pipes a retrieval/elaborate result. The
  // event detail now carries channelId — we filter so messages from a
  // different channel don't crash into the visible one.
  useEffect(() => {
    const onAppended = (e: Event) => {
      const ce = e as CustomEvent<ChatAppendedDetail>;
      const detail = ce.detail;
      if (!detail) return;
      if (detail.courseId !== courseId) return;
      if (channel && detail.channelId && detail.channelId !== channel.id) return;
      setMessages((prev) => [...(prev ?? []), detail.message]);
    };
    window.addEventListener(CHAT_APPENDED_EVENT, onAppended);
    return () => window.removeEventListener(CHAT_APPENDED_EVENT, onAppended);
  }, [courseId, channel]);

  const callTool = useCallback((name: ToolName, args: object): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Inject the active channel-id for chat-scoped tools so the LLM
      // doesn't need to know about channels at all — its append-chat
      // and get-chat calls automatically target what the user is reading.
      const augmented: Record<string, unknown> =
        name === "append-chat" || name === "get-chat"
          ? { ...(args as Record<string, unknown>), channelId: channel?.id ?? null }
          : (args as Record<string, unknown>);
      const result = validateAndEncode(name, augmented);
      if (!result.ok) return reject(new Error(result.error));
      pendingRef.current.set(result.requestId, resolve);
      wsRef.current?.send(result.frame);
      setTimeout(() => {
        if (pendingRef.current.has(result.requestId)) {
          pendingRef.current.delete(result.requestId);
          reject(new Error("tool timeout"));
        }
      }, 15000);
    });
  }, [channel]);

  // Mirror any <artifact> blocks in an assistant message into the
  // persistent artifacts store. The artifact id is stable, so re-emits
  // overwrite — no duplicates on chat replay.
  const persistArtifacts = useCallback((content: string) => {
    const segments = segmentAssistantContent(content);
    let savedAny = false;
    for (const seg of segments) {
      if (seg.kind !== "artifact") continue;
      const a = seg.artifact;
      api.artifacts.save({
        id: a.id,
        type: a.type,
        title: a.title,
        body: a.body,
        courseId,
      }).catch(() => {});
      savedAny = true;
    }
    if (savedAny && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(ARTIFACT_SAVED_EVENT));
    }
  }, [courseId]);

  const send = useCallback(async () => {
    // Allow sending image-only turns (no text) — useful for "what is in
    // this image?" prompts. Block only when both are empty.
    if (!input.trim() && pendingImages.length === 0) return;
    if (busy) return;
    const config = loadConfig();
    if (!isConfigured(config)) {
      const errMsg: ChatMessage = {
        role: "assistant",
        content: "Configure your API key in Settings first.",
        toolName: null,
        timestamp: new Date().toISOString(),
      };
      setMessages((m) => [...m, errMsg]);
      return;
    }

    // Resolve the channel we'll write into. If there isn't one (fresh
    // course / unpinned), spin up a new channel at first send.
    let activeChannel = channel;
    let didCreate = false;
    if (!activeChannel) {
      try {
        const resp = await api.memory.createChannel(courseId);
        activeChannel = resp.channel;
        setChannel(activeChannel);
        // Mark this channel as the cached one BEFORE the upcoming
        // pinChannel re-render fires the resolver effect. Without
        // this, the effect would race the in-flight appendChat and
        // could clobber local messages mid-turn.
        cachedRef.current = { threadId: courseId, channelId: activeChannel.id };
        didCreate = true;
      } catch (e) {
        const errMsg: ChatMessage = {
          role: "assistant",
          content: `Failed to start a new chat: ${String(e)}`,
          toolName: null,
          timestamp: new Date().toISOString(),
        };
        setMessages((m) => [...m, errMsg]);
        return;
      }
    }

    // Auto-name on first send: if the channel has no manual name yet,
    // derive one from this turn's text. Fire-and-forget — naming is a
    // UX nicety, not a correctness requirement.
    if (activeChannel && !activeChannel.name && input.trim()) {
      const derived = deriveChannelName(input);
      if (derived) {
        const nameTarget: ChatChannel = activeChannel;
        api.memory
          .renameChannel(courseId, nameTarget.id, derived)
          .then(() => {
            setChannel((c) => (c && c.id === nameTarget.id ? { ...c, name: derived } : c));
            emitChannelsChanged();
          })
          .catch(() => {});
        activeChannel = { ...activeChannel, name: derived };
      }
    }

    // Auto-pin to the active channel so navigation doesn't stomp the
    // conversation. Skipped when we're already pinned somewhere.
    if (
      !pinnedChannel ||
      pinnedChannel.threadId !== courseId ||
      pinnedChannel.channelId !== activeChannel.id
    ) {
      pinChannel({ threadId: courseId, channelId: activeChannel.id });
    }

    if (didCreate) emitChannelsChanged();

    const userMsg: ChatMessage = {
      role: "user",
      content: input,
      toolName: null,
      timestamp: new Date().toISOString(),
      images: pendingImages.length ? [...pendingImages] : undefined,
    };
    setMessages((m) => [...m, userMsg]);
    api.memory.appendChat(courseId, userMsg, activeChannel.id).catch(() => {});

    setInput("");
    setPendingImages([]);
    setBusy(true);

    // Local history snapshot we extend synchronously across the loop —
    // setMessages is async, so we can't rely on `messages` reflecting
    // turns we just appended.
    let history: ChatMessage[] = [...(messages ?? []), userMsg];

    const persistAndLocal = (msg: ChatMessage) => {
      setMessages((m) => [...m, msg]);
      api.memory.appendChat(courseId, msg, activeChannel!.id).catch(() => {});
      if (msg.role === "assistant") persistArtifacts(msg.content);
    };

    try {
      for (let iter = 0; iter < MAX_TOOL_ITERATIONS; iter++) {
        const result = await runLlmTurn(config, history, pageContext);
        const assistantMsg: ChatMessage = {
          role: "assistant",
          content: result.raw,
          toolName: null,
          timestamp: new Date().toISOString(),
        };
        persistAndLocal(assistantMsg);
        history = [...history, assistantMsg];

        if (result.toolCalls.length === 0) break;

        for (const call of result.toolCalls) {
          let toolContent: string;
          try {
            toolContent = await callTool(call.name, call.args);
            onToolCall?.(call.name, true);
          } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            // Prefix "<name> failed:" is the signal ToolChip reads to paint
            // the status dot red. Also instructs the LLM to retry with
            // corrected args.
            toolContent = `${call.name} failed: ${summarizeToolError(msg)}. Retry with complete args (see tool schema).`;
            onToolCall?.(call.name, false);
          }
          const toolMsg: ChatMessage = {
            role: "tool",
            content: toolContent,
            toolName: call.name,
            timestamp: new Date().toISOString(),
          };
          persistAndLocal(toolMsg);
          history = [...history, toolMsg];
        }
      }
    } catch (e) {
      persistAndLocal({
        role: "assistant", content: `error: ${String(e)}`,
        toolName: null, timestamp: new Date().toISOString(),
      });
    } finally {
      setBusy(false);
    }
  }, [
    input, busy, messages, pageContext, callTool, onToolCall, pendingImages,
    channel, courseId, pinnedChannel, pinChannel, persistArtifacts,
  ]);

  return {
    messages, input, setInput, send, busy, status,
    pendingImages, addPendingImage, removePendingImage,
    threadId: courseId,
    channel,
    channelPinned: pinnedChannel !== null,
  };
}
