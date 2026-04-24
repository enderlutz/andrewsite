"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { competencies } from "@/lib/content";

export function Competencies() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Reveal className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            <span className="h-px w-8 bg-ink/40" />
            Core competencies
          </Reveal>
          <Reveal as="h2" className="display text-5xl md:text-6xl">
            What he brings <span className="italic">to the table.</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-sm text-ink/70">
              Finance rigor on one side, sales instinct on the other. The
              combination is rarer than it should be.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <div className="border-t border-ink/20">
            {competencies.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  data-cursor="more"
                  className="group relative grid grid-cols-12 items-baseline gap-4 border-b border-ink/20 py-6 md:py-8"
                >
                  <motion.span
                    aria-hidden
                    variants={{
                      rest: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="pointer-events-none absolute inset-x-0 -top-px h-px bg-accent"
                  />

                  <span className="col-span-2 font-mono text-xs text-ink/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <motion.h3
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 8 },
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="display col-span-10 text-3xl md:col-span-4 md:text-4xl"
                  >
                    {c.title}
                  </motion.h3>

                  <p className="col-span-12 text-sm leading-relaxed text-ink/70 md:col-span-6">
                    {c.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
