"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SmartImage } from "@/components/smart-image";
import { images } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

const TEASERS: Array<{
  href: string;
  slot: keyof typeof images.teasers;
  index: string;
  label: string;
  blurb: string;
  variant: 0 | 1 | 2 | 3 | 4 | 5;
}> = [
  {
    href: "/about",
    slot: "about",
    index: "01",
    label: "About",
    blurb: "The story behind the spreadsheets.",
    variant: 1,
  },
  {
    href: "/skills",
    slot: "skills",
    index: "02",
    label: "Skills",
    blurb: "Finance rigor. Sales instincts. Useful stuff.",
    variant: 2,
  },
  {
    href: "/education",
    slot: "education",
    index: "03",
    label: "Education",
    blurb: "Where the curiosity got sharpened.",
    variant: 3,
  },
  {
    href: "/contact",
    slot: "contact",
    index: "04",
    label: "Contact",
    blurb: "The inbox is always on.",
    variant: 5,
  },
];

export function PageTeasers() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <Reveal className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
        Wander the site
      </Reveal>
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {TEASERS.map((t) => (
          <StaggerItem key={t.href}>
            <Link
              href={t.href}
              data-cursor={t.label.toLowerCase()}
              className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-cream"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[5/4] w-full"
              >
                <SmartImage
                  src={images.teasers[t.slot]}
                  alt={t.label}
                  variant={t.variant}
                  label={t.label}
                  className="h-full w-full"
                />
              </motion.div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
                    {t.index}
                  </div>
                  <div className="mt-1 font-display text-3xl md:text-4xl">
                    {t.label}
                  </div>
                  <div className="mt-1 text-sm text-ink/70">{t.blurb}</div>
                </div>
                <div className="mt-1 rounded-full border border-ink/20 p-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
