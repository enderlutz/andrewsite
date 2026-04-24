"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { highlights } from "@/lib/content";
import { Sparkles } from "lucide-react";

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            <span className="h-px w-8 bg-ink/40" />
            Selected highlights
          </Reveal>
          <Reveal as="h2" className="display text-5xl md:text-7xl">
            Recent <span className="italic">wins.</span>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm text-ink/70">
            A running list of things worth pointing at — roles, competitions,
            coverage. Bigger list on the resume.
          </p>
        </Reveal>
      </div>

      <Stagger
        className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        staggerChildren={0.08}
      >
        {highlights.map((h, i) => (
          <StaggerItem key={h.title}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              data-cursor="highlight"
              className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-cream p-7 transition-colors hover:border-ink/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl transition-opacity group-hover:bg-accent/35"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                  <span>
                    {h.period} · {h.org}
                  </span>
                  <span className="font-display text-base text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="display mt-6 text-3xl md:text-4xl">{h.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  {h.description}
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                    <Sparkles className="h-3.5 w-3.5" />
                    {h.metric}
                  </span>
                </div>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
