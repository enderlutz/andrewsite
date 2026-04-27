"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/marquee";
import { pullQuote, skillsMarquee } from "@/lib/content";

export function PullQuote() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-40 md:pb-16">
      {/* Single subtle marquee at the foot of the section — just enough
          motion to feel alive without competing with the quote. */}
      <Marquee
        items={skillsMarquee}
        className="absolute bottom-8 opacity-15"
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-ink/60"
        >
          — in his words
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display text-4xl leading-[1.05] md:text-7xl"
        >
          {pullQuote}
        </motion.blockquote>
      </div>
    </section>
  );
}
