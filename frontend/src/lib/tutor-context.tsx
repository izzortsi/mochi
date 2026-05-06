"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* The Tutor lives at the layout root and reads its current scope from this
 * context. Pages tell it which course thread to write into and what to put
 * in the system prompt's "CURRENT PAGE" block by calling
 * useSetTutorContext({...}) — instead of mounting their own <Tutor /> with
 * props. Routes that aren't tutoring surfaces (e.g. /intro) hide it via
 * { visible: false }.
 *
 * Active channel vs page courseId
 * ───────────────────────────────
 * The chat the user sees is sticky and lives in localStorage; the page
 * COURSE ID is whatever the current route reports. They were the same
 * thing for a while, which meant every nav stomped the visible
 * conversation. Now we pin a (threadId, channelId) PAIR:
 *
 *   - `courseId`        — page-derived, drives the system prompt's
 *                         CURRENT PAGE block. Updates on every nav.
 *   - `pinnedChannel`   — user-controlled (sticky). When set, the tutor
 *                         pane reads/writes that exact channel
 *                         regardless of where the user is on the site.
 *                         When null, the engine resolves to the most
 *                         recent channel for the current page's course
 *                         (creating one on demand at first send).
 *
 * Channels exist so the LLM context window doesn't grow forever — each
 * is a discrete conversation with its own history.
 */

const PIN_LS = "mochi-active-thread";

export interface TutorContextState {
  courseId: number;
  pageContext: string;
  title: string;
  placeholder: string;
  onToolCall?: (toolName: string, ok: boolean) => void;
  visible: boolean;
}

export interface PinnedChannel {
  threadId: number;
  channelId: string;
}

interface TutorContextValue extends TutorContextState {
  setContext: (partial: Partial<TutorContextState>) => void;
  // Pinned channel (sticky in localStorage). Null means "follow page".
  pinnedChannel: PinnedChannel | null;
  // The thread id whose channels the engine should consider — pinned
  // thread, or page courseId when unpinned. Channel resolution happens
  // inside the engine because it needs the channel list.
  effectiveThreadId: number;
  pinChannel: (pin: PinnedChannel) => void;
  unpinChannel: () => void;
}

const DEFAULTS: TutorContextState = {
  courseId: 0,
  pageContext: "",
  title: "Tutor",
  placeholder: "Ask anything about your studies…",
  visible: true,
};

const TutorCtx = createContext<TutorContextValue | null>(null);

function readPinFromStorage(): PinnedChannel | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(PIN_LS);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof parsed.threadId === "number" &&
      typeof parsed.channelId === "string" &&
      parsed.channelId
    ) {
      return { threadId: parsed.threadId, channelId: parsed.channelId };
    }
  } catch {
    /* legacy "5"-as-number-string from the pre-channel pin format —
     * treat as no-pin and let the user re-pin from the new picker. */
  }
  return null;
}

export function TutorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TutorContextState>(DEFAULTS);
  const [pinnedChannel, setPinnedChannel] = useState<PinnedChannel | null>(null);

  // Hydrate sticky pin once on mount. SSR returns null; the effect
  // reconciles to whatever localStorage says — same pattern the shell
  // uses for its desktop/mobile override.
  useEffect(() => {
    setPinnedChannel(readPinFromStorage());
  }, []);

  const setContext = useCallback((partial: Partial<TutorContextState>) => {
    setState((s) => ({ ...s, ...partial }));
  }, []);

  const pinChannel = useCallback((pin: PinnedChannel) => {
    setPinnedChannel(pin);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(PIN_LS, JSON.stringify(pin));
    }
  }, []);
  const unpinChannel = useCallback(() => {
    setPinnedChannel(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(PIN_LS);
    }
  }, []);

  const effectiveThreadId = pinnedChannel?.threadId ?? state.courseId;
  const value = useMemo(
    () => ({
      ...state,
      setContext,
      pinnedChannel,
      effectiveThreadId,
      pinChannel,
      unpinChannel,
    }),
    [state, setContext, pinnedChannel, effectiveThreadId, pinChannel, unpinChannel],
  );
  return <TutorCtx.Provider value={value}>{children}</TutorCtx.Provider>;
}

export function useTutorContext(): TutorContextValue {
  const ctx = useContext(TutorCtx);
  if (!ctx) throw new Error("useTutorContext outside TutorProvider");
  return ctx;
}

/* Pages call this with their own scope. The serialized partial object keys
 * the effect, so the context updates whenever any field changes. We do NOT
 * reset on unmount — an SPA navigation will mount the next page's hook and
 * overwrite the fields it cares about; resetting would briefly flash the
 * defaults during the transition.
 */
export function useSetTutorContext(partial: Partial<TutorContextState>) {
  const { setContext } = useTutorContext();
  const key = JSON.stringify(partial);
  useEffect(() => {
    setContext(partial);
    // key already encodes partial, so disabling exhaustive-deps is correct.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setContext]);
}

/* <main> wrapper that reserves right padding for the docked Tutor when it's
 * visible — and zero padding when a page (e.g. /intro) hides it. Lives next
 * to the context so the layout doesn't need to import a separate component
 * just to read `visible`. */
export function TutorAwareMain({ children }: { children: ReactNode }) {
  const { visible } = useTutorContext();
  return (
    <main
      className={
        "mx-auto max-w-6xl px-4 py-5 " + (visible ? "pr-[26rem]" : "")
      }
    >
      {children}
    </main>
  );
}
