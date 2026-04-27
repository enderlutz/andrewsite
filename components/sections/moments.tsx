"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SmartImage } from "@/components/smart-image";
import { images } from "@/lib/content";

// Varied column spans + aspect ratios create a magazine-style mosaic
// without relying on a full masonry library.
const LAYOUT: Array<{
  col: string;
  aspect: string;
  variant: 0 | 1 | 2 | 3 | 4 | 5;
}> = [
  { col: "md:col-span-7", aspect: "aspect-[4/3]", variant: 1 },
  { col: "md:col-span-5", aspect: "aspect-[3/4]", variant: 2 },
  { col: "md:col-span-4", aspect: "aspect-square", variant: 5 },
  { col: "md:col-span-4", aspect: "aspect-square", variant: 0 },
  { col: "md:col-span-4", aspect: "aspect-square", variant: 3 },
  { col: "md:col-span-12", aspect: "aspect-[16/7]", variant: 4 },
];

export function Moments() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
      <Reveal className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
        Gallery
      </Reveal>
      <Reveal as="h2" className="display mb-12 text-5xl md:text-7xl">
        A few <span className="italic">moments.</span>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {images.moments.map((m, i) => {
          const layout = LAYOUT[i] ?? LAYOUT[0];
          return (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28, scale: 1.08 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.07,
              }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-ink/10 ${layout.col}`}
            >
              <SmartImage
                src={m.src}
                alt={m.caption}
                variant={layout.variant}
                label={m.caption}
                className={`${layout.aspect} w-full`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-cream/90 to-transparent p-4 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-transform duration-500 group-hover:translate-y-0">
                {m.caption}
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
