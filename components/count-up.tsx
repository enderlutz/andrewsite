"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Two-phase animation: first the digits scramble with random values
// (slot-machine effect), then they smoothly count up to the target.
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;

    const scrambleMs = 500;
    const countMs = 1100;
    const digits = Math.max(1, String(to).length);
    const max = Math.pow(10, digits);

    let rafId = 0;
    let startTime: number | null = null;

    function tick(now: number) {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;

      if (elapsed < scrambleMs) {
        setDisplay(Math.floor(Math.random() * max));
        rafId = requestAnimationFrame(tick);
      } else if (elapsed < scrambleMs + countMs) {
        const t = (elapsed - scrambleMs) / countMs;
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(to * eased));
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(to);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
