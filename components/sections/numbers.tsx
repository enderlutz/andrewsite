"use client";

import { CountUp } from "@/components/count-up";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { quickNumbers } from "@/lib/content";

export function Numbers() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-4 pb-10 md:px-10 md:pt-6 md:pb-14">
      <Reveal className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
        <span className="h-px w-8 bg-ink/40" />
        By the numbers
      </Reveal>

      <div className="border-t border-ink/20">
        <Stagger
          className="grid grid-cols-2 divide-ink/10 md:grid-cols-4 md:divide-x"
          staggerChildren={0.12}
        >
          {quickNumbers.map((n, i) => (
            <StaggerItem
              key={n.label}
              className="flex flex-col gap-3 py-10 md:px-8"
            >
              <div className="display text-6xl leading-none text-ink md:text-[5.5rem]">
                <CountUp
                  to={n.to}
                  prefix={n.prefix}
                  suffix={n.suffix}
                />
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                {n.label}
              </div>
              <div className="text-[10px] text-ink/30">
                {String(i + 1).padStart(2, "0")}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
