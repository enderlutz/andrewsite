"use client";

import { Reveal } from "@/components/reveal";
import { valueStatement } from "@/lib/content";

export function ValueStatement() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Reveal className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            <span className="h-px w-8 bg-ink/40" />
            Value statement
          </Reveal>
          <Reveal as="h2" className="display text-5xl md:text-6xl">
            Built for the <span className="italic">long game.</span>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-ink/80 md:text-lg">
              {valueStatement}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
