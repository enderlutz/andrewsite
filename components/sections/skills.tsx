"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { skills } from "@/lib/content";

const GROUPS: Array<{ key: keyof typeof skills; label: string }> = [
  { key: "finance", label: "Finance" },
  { key: "sales", label: "Sales" },
  { key: "other", label: "Other" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 pt-10 pb-28 md:px-10 md:pt-16 md:pb-40"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            02 — Skills
          </div>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            The <span className="italic">toolbox.</span>
          </h2>
          <p className="mt-5 max-w-sm text-ink/70">
            Built at the intersection of rigorous finance training and live-fire
            sales experience.
          </p>
        </Reveal>

        <div className="md:col-span-8">
          <div className="space-y-10">
            {GROUPS.map((g) => (
              <Reveal key={g.key}>
                <div className="border-t border-ink/20 pt-6">
                  <div className="mb-5 flex items-baseline justify-between">
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
                      {g.label}
                    </div>
                    <div className="font-display text-xl text-ink/30">
                      {String(GROUPS.findIndex((x) => x.key === g.key) + 1).padStart(
                        2,
                        "0",
                      )}
                    </div>
                  </div>
                  <Stagger
                    className="flex flex-wrap gap-2"
                    staggerChildren={0.04}
                  >
                    {skills[g.key].map((s) => (
                      <StaggerItem key={s}>
                        <span
                          data-cursor="skill"
                          className="inline-flex cursor-default items-center rounded-full border border-ink/20 bg-cream px-4 py-2 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                        >
                          {s}
                        </span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
