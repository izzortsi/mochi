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
 */

export interface TutorContextState {
  courseId: number;
  pageContext: string;
  title: string;
  placeholder: string;
  onToolCall?: (toolName: string, ok: boolean) => void;
  visible: boolean;
}

interface TutorContextValue extends TutorContextState {
  setContext: (partial: Partial<TutorContextState>) => void;
}

const DEFAULTS: TutorContextState = {
  courseId: 0,
  pageContext: "",
  title: "Tutor",
  placeholder: "Ask anything about your studies…",
  visible: true,
};

const TutorCtx = createContext<TutorContextValue | null>(null);

export function TutorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TutorContextState>(DEFAULTS);
  const setContext = useCallback((partial: Partial<TutorContextState>) => {
    setState((s) => ({ ...s, ...partial }));
  }, []);
  const value = useMemo(() => ({ ...state, setContext }), [state, setContext]);
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
