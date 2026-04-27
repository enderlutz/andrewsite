"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Linkedin, FileText, FolderOpen } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { SmartImage } from "@/components/smart-image";
import { useResume } from "@/components/resume-viewer";
import { images, site } from "@/lib/content";

const LINE_ONE = ["Andrew", "Bieh-", "Mintah."];
const LINE_TWO = ["Finance", "brain.", "Sales", "instinct."];

const parent = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.09 } },
};
// Pure mask reveal — no opacity fade, the word rises from below the
// overflow-hidden parent so you see a clean top-edge emerge.
const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { open: openResume } = useResume();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative mx-auto max-w-6xl px-6 pb-10 pt-32 md:px-10 md:pb-14 md:pt-36"
    >
      <motion.div
        aria-hidden
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-0 top-24 -z-10 h-64 w-64 rounded-full bg-accent/70 blur-3xl md:right-10 md:top-28 md:h-[22rem] md:w-[22rem]"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <motion.div style={{ y: textY }} className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60"
          >
            <span className="h-px w-8 bg-ink/40" />
            {site.role}
          </motion.div>

          <motion.h1
            variants={parent}
            initial="hidden"
            animate="visible"
            className="display text-[12vw] leading-[0.95] md:text-[7.5rem]"
          >
            <span className="block overflow-hidden">
              {LINE_ONE.map((w, i) => (
                <motion.span key={i} variants={word} className="mr-3 inline-block">
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden italic text-ink/70">
              {LINE_TWO.map((w, i) => (
                <motion.span key={i} variants={word} className="mr-3 inline-block">
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-ink/75 md:text-lg"
          >
            Out of the Army, onto the sales floor. Building toward a career at
            the intersection of capital, people, and the smart bets in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <button
                type="button"
                onClick={openResume}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-accent"
              >
                <FileText className="h-4 w-4" /> Resume
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </Magnetic>
            <Magnetic>
              <Link
                href={site.portfolioUrl}
                data-cursor="open"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <FolderOpen className="h-4 w-4" /> Portfolio
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="linkedin"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: portraitY }}
          className="md:col-span-4"
        >
          <div className="relative">
            <SmartImage
              src={images.portrait}
              alt={`Portrait of ${site.name}`}
              initials="AB-M"
              label="Andrew Bieh-Mintah"
              variant={0}
              priority
              className="aspect-[4/5] w-full rounded-2xl border border-ink/10 shadow-subtle"
            />
            <Link
              href="/about"
              data-cursor="meet"
              className="absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream transition-transform hover:-translate-y-0.5"
            >
              Meet Andrew →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
