"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Magnetic } from "@/components/magnetic";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur-md bg-cream/70 border-b border-ink/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                  active ? "text-ink" : "text-ink/60 hover:text-ink",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-ink/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream transition-transform hover:-translate-y-0.5"
            >
              Say hello
            </Link>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="rounded-full border border-ink/20 p-2 md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-1 h-0.5 w-5 bg-ink transition-transform",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2.5 h-0.5 w-5 bg-ink transition-transform",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-ink/10 bg-cream md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-3 font-display text-2xl"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-max items-center rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream"
              >
                Say hello
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
