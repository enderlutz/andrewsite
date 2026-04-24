"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SHORT = "AB-M.";
const FULL = "Andrew Bieh-Mintah";

type CaretPhase = "hidden" | "solid" | "blinking";

// Typewriter logo — on hover-capable desktop devices, hovering types the
// full name with a caret that blinks 3× at the end. On touch devices
// (phones / tablets), renders a plain logo with no animation.
export function Logo() {
  const [mounted, setMounted] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState(SHORT);
  const [caret, setCaret] = useState<CaretPhase>("hidden");

  useEffect(() => {
    setMounted(true);
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const target = hovered ? FULL : SHORT;

  // Drive the text one character at a time.
  useEffect(() => {
    if (!canHover) return;
    if (text === target) return;
    const prefixLen = commonPrefixLength(text, target);

    const timer = window.setTimeout(
      () => {
        if (text.length > prefixLen) {
          setText(text.slice(0, -1));
        } else if (text.length < target.length) {
          setText(target.slice(0, text.length + 1));
        }
      },
      text.length > prefixLen ? 18 : 32,
    );

    return () => window.clearTimeout(timer);
  }, [canHover, text, target]);

  // Drive the caret phase.
  useEffect(() => {
    if (!canHover) return;
    if (!hovered) {
      setCaret("hidden");
      return;
    }
    if (text === FULL) {
      setCaret("blinking");
      const hide = window.setTimeout(() => setCaret("hidden"), 1900);
      return () => window.clearTimeout(hide);
    }
    setCaret("solid");
  }, [canHover, hovered, text]);

  // Non-hover devices (phones, tablets) + initial SSR render — plain logo.
  if (!mounted || !canHover) {
    return (
      <Link
        href="/"
        className="inline-block whitespace-nowrap font-display text-xl tracking-tight"
      >
        {SHORT}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block whitespace-nowrap font-display text-xl tracking-tight"
    >
      {/* Invisible ghost reserves width for the longest string so the
          rest of the nav doesn't shift when the name expands. */}
      <span aria-hidden className="invisible">
        {FULL}
      </span>
      <span className="absolute inset-0 flex items-center">
        {text}
        {caret === "solid" && (
          <span
            aria-hidden
            className="ml-[2px] inline-block h-[0.9em] w-[2px] translate-y-[1px] bg-ink/70"
          />
        )}
        {caret === "blinking" && (
          <span
            aria-hidden
            className="ml-[2px] inline-block h-[0.9em] w-[2px] translate-y-[1px] bg-ink/70 [animation:caret_0.6s_ease-in-out_3_forwards]"
          />
        )}
      </span>
    </Link>
  );
}

function commonPrefixLength(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}
