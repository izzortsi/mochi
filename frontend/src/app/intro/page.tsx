"use client";
import { useEffect } from "react";
import Link from "next/link";
import { IntroScene } from "@/components/IntroScene";
import { useTutorContext } from "@/lib/tutor-context";

export default function IntroPage() {
  // The intro is a full-screen splash; hide the docked tutor here, and
  // restore it on unmount so navigating away (e.g. via the enter button)
  // doesn't leave the tutor permanently hidden on the next route.
  const { setContext } = useTutorContext();
  useEffect(() => {
    setContext({ visible: false });
    return () => setContext({ visible: true });
  }, [setContext]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center -mx-4 -my-5 px-4 py-8 bg-black">
      <div className="mb-8 overflow-x-auto w-full flex justify-center">
        <IntroScene />
      </div>
      <div className="text-center">
        <h1 className="font-display text-4xl text-neutral-100 tracking-wide mb-2">
          mochi
        </h1>
        <p className="text-[11px] uppercase tracking-[0.3em] font-mono opacity-60 text-neutral-400 mb-6">
          we keep the fire going
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-[11px] uppercase tracking-[0.25em] font-mono border border-neutral-700 hover:border-orange-400 hover:text-orange-300 text-neutral-300 transition-colors"
        >
          enter
        </Link>
      </div>
    </div>
  );
}
