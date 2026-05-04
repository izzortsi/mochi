"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { loadConfig, isConfigured } from "./settings";
import { runLlmTurn } from "./llm";
import { validateAndEncode, type ToolName } from "./tools";
import { WsClient } from "./ws";
import { api } from "./api";
import { useTutorContext } from "./tutor-context";
import {
  CHAT_APPENDED_EVENT,
  type ChatAppendedDetail,
} from "@/components/SessionCard";
import type { ChatMessage, ConnectionStatus } from "./types";

// Maximum tool-call iterations per user turn. Each iteration is one LLM
// round-trip: {assistant reply → optional tool dispatch → feed result back}.
// Loop exits early when the model stops emitting <tool> blocks. Cap prevents
// a confused model from looping on a tool that keeps failing.
const MAX_TOOL_ITERATIONS = 8;

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
}

/* The Tutor's chat engine, separated from chrome so the desktop fixed
 * panel and the mobile fullscreen overlay can reuse it without
 * duplicating the WebSocket lifecycle, message history, tool-call loop,
 * or persistence wiring.
 */
export function useTutorEngine(): TutorEngine {
  const { courseId, pageContext, onToolCall } = useTutorContext();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const [pendingImages, setPendingImages] = useState<string[]>([]);
  const wsRef = useRef<WsClient | null>(null);
  const pendingRef = useRef<Map<string, (resp: string) => void>>(new Map());

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

  // Live-append when a retrieval/elaborate attempt on the same course pipes in.
  useEffect(() => {
    const onAppended = (e: Event) => {
      const ce = e as CustomEvent<ChatAppendedDetail>;
      if (!ce.detail || ce.detail.courseId !== courseId) return;
      setMessages((prev) => [...(prev ?? []), ce.detail.message]);
    };
    window.addEventListener(CHAT_APPENDED_EVENT, onAppended);
    return () => window.removeEventListener(CHAT_APPENDED_EVENT, onAppended);
  }, [courseId]);

  // Rehydrate chat on course change.
  useEffect(() => {
    let cancelled = false;
    api.memory.fetchChat(courseId).then((resp) => {
      if (cancelled) return;
      setMessages(Array.isArray(resp?.messages) ? resp.messages : []);
    }).catch(() => {
      if (!cancelled) setMessages([]);
    });
    return () => { cancelled = true; };
  }, [courseId]);

  const callTool = useCallback((name: ToolName, args: object): Promise<string> => {
    return new Promise((resolve, reject) => {
      const result = validateAndEncode(name, args);
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
  }, []);

  const persistTurn = useCallback((msg: ChatMessage) => {
    api.memory.appendChat(courseId, msg).catch(() => {});
  }, [courseId]);

  const pushMessage = useCallback((msg: ChatMessage) => {
    setMessages((m) => [...m, msg]);
    persistTurn(msg);
  }, [persistTurn]);

  const send = useCallback(async () => {
    // Allow sending image-only turns (no text) — useful for "what is in
    // this image?" prompts. Block only when both are empty.
    if (!input.trim() && pendingImages.length === 0) return;
    if (busy) return;
    const config = loadConfig();
    if (!isConfigured(config)) {
      pushMessage({
        role: "assistant",
        content: "Configure your API key in Settings first.",
        toolName: null,
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const userMsg: ChatMessage = {
      role: "user",
      content: input,
      toolName: null,
      timestamp: new Date().toISOString(),
      images: pendingImages.length ? [...pendingImages] : undefined,
    };
    pushMessage(userMsg);
    setInput("");
    setPendingImages([]);
    setBusy(true);

    // Local history snapshot we extend synchronously across the loop —
    // setMessages is async, so we can't rely on `messages` reflecting
    // turns we just appended.
    let history: ChatMessage[] = [...(messages ?? []), userMsg];

    try {
      for (let iter = 0; iter < MAX_TOOL_ITERATIONS; iter++) {
        const result = await runLlmTurn(config, history, pageContext);
        const assistantMsg: ChatMessage = {
          role: "assistant",
          content: result.raw,
          toolName: null,
          timestamp: new Date().toISOString(),
        };
        pushMessage(assistantMsg);
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
          pushMessage(toolMsg);
          history = [...history, toolMsg];
        }
      }
    } catch (e) {
      pushMessage({
        role: "assistant", content: `error: ${String(e)}`,
        toolName: null, timestamp: new Date().toISOString(),
      });
    } finally {
      setBusy(false);
    }
  }, [input, busy, messages, pageContext, callTool, pushMessage, onToolCall, pendingImages]);

  return {
    messages, input, setInput, send, busy, status,
    pendingImages, addPendingImage, removePendingImage,
  };
}
