"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SmartImage } from "@/components/smart-image";
import { backstory, images, stats } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:px-10 md:pt-40"
    >
      <Reveal className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
        01 — About
      </Reveal>

      <Reveal as="h1" className="display mb-12 text-5xl md:text-8xl">
        The short version of
        <br />
        a <span className="italic">long</span> curiosity.
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <SmartImage
              src={images.aboutPortrait}
              alt="Andrew Bieh-Mintah"
              initials="AB-M"
              label="On campus"
              variant={2}
              className="aspect-[4/5] w-full rounded-2xl border border-ink/10"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7">
          <Stagger className="space-y-5 text-lg leading-relaxed text-ink/80 md:text-xl">
            {backstory.map((p, i) => (
              <StaggerItem key={i}>
                <p>{p}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="border-t border-ink/20 pt-4">
                  <div className="font-display text-4xl md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.15em] text-ink/60">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
