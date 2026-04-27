"use client";

import { Mail, Phone, Linkedin, FileText } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { ContactPair } from "@/components/sections/contact-pair";
import { useResume } from "@/components/resume-viewer";
import { site } from "@/lib/content";

export function Contact() {
  const { open: openResume } = useResume();
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
          — Contact
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <Reveal
              as="h2"
              className="display text-6xl leading-[0.95] md:text-[8rem]"
            >
              {site.contactTitle.split(" ").map((word, i, arr) => (
                <span
                  key={i}
                  className={i === arr.length - 1 ? "italic text-accent" : ""}
                >
                  {word}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-lg text-lg text-ink/75">
                {site.contactIntro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              <DirectLink
                icon={<Mail className="h-4 w-4 text-accent" />}
                href={`mailto:${site.email}`}
                primary={site.email}
                cta="email →"
              />
              <DirectLink
                icon={<Phone className="h-4 w-4 text-accent" />}
                href={`tel:${site.phone}`}
                primary={site.phone}
                cta="call →"
              />
              <DirectLink
                icon={<Linkedin className="h-4 w-4 text-accent" />}
                href={site.linkedinUrl}
                primary="LinkedIn"
                cta="open →"
              />
              <Magnetic>
                <button
                  onClick={openResume}
                  className="group flex w-full items-center justify-between rounded-2xl border border-ink/15 bg-ink/[0.02] px-5 py-4 transition-colors hover:border-accent hover:bg-ink/[0.05]"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-accent" />
                    <span className="text-sm">Resume (PDF)</span>
                  </span>
                  <span className="text-xs uppercase tracking-wider text-ink/60 transition-colors group-hover:text-accent">
                    view →
                  </span>
                </button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* ───── Calendar / Form pair ───── */}
        <div className="mt-20 md:mt-28">
          <Reveal className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            <span className="h-px w-8 bg-ink/40" />
            Two ways forward
          </Reveal>
          <Reveal as="h3" className="display mb-2 text-4xl md:text-6xl">
            Book a call, or <span className="italic">drop a note.</span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mb-8 max-w-xl text-sm text-ink/60">
              Start typing in either one — the other folds out of the way.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactPair email={site.email} name={site.name} />
          </Reveal>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-ink/50 md:px-10">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="uppercase tracking-wider">{site.footerNote}</span>
        </div>
      </div>
    </section>
  );
}

function DirectLink({
  icon,
  href,
  primary,
  cta,
}: {
  icon: React.ReactNode;
  href: string;
  primary: string;
  cta: string;
}) {
  return (
    <Magnetic>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="group flex items-center justify-between rounded-2xl border border-ink/15 bg-ink/[0.02] px-5 py-4 transition-colors hover:border-accent hover:bg-ink/[0.05]"
      >
        <span className="flex items-center gap-3">
          {icon}
          <span className="text-sm">{primary}</span>
        </span>
        <span className="text-xs uppercase tracking-wider text-ink/60 transition-colors group-hover:text-accent">
          {cta}
        </span>
      </a>
    </Magnetic>
  );
}
