"use client";

import { Reveal } from "@/components/reveal";
import { portfolio } from "@/lib/content";

export function PortfolioGallery() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-cream/60">
          Portfolio
        </div>
        <h1 className="display mt-4 text-5xl md:text-7xl">
          Selected <span className="italic">work.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
          A walk-through of recent projects, pitches, and presentations.
        </p>
      </Reveal>

      <div className="mt-16 space-y-8 md:mt-24 md:space-y-12">
        {portfolio.map((src, i) => (
          <Reveal key={src}>
            <figure className="overflow-hidden rounded-lg ring-1 ring-cream/10 shadow-2xl shadow-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Portfolio page ${i + 1}`}
                className="block h-auto w-full"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
