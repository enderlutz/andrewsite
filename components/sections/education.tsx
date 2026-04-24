"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/content";

export function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            03 — Education
          </div>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Where the <span className="italic">curiosity</span> got sharpened.
          </h2>
        </Reveal>

        <div className="md:col-span-8">
          <div ref={timelineRef} className="relative">
            {/* Static track behind the drawing line */}
            <div className="absolute left-0 top-2 h-full w-px bg-ink/10" />
            {/* Accent line that draws in as the section scrolls through */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-2 w-px origin-top bg-accent"
            />

            <div className="space-y-12">
              {education.map((e, i) => (
                <div key={e.school} className="relative pl-8">
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                      delay: i * 0.08,
                    }}
                    className="absolute left-[-5px] top-2 inline-flex h-2.5 w-2.5 rounded-full bg-accent"
                  />
                  <Reveal delay={i * 0.08}>
                    <div className="text-xs uppercase tracking-[0.2em] text-ink/60">
                      {e.period}
                    </div>
                    <div className="mt-2 font-display text-3xl md:text-4xl">
                      {e.school}
                    </div>
                    <div className="mt-1 text-ink/70">{e.credential}</div>
                    <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                      {e.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
