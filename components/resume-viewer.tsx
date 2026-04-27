"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/content";

type Ctx = { isOpen: boolean; open: () => void; close: () => void };
const ResumeContext = createContext<Ctx | null>(null);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the modal is up
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Esc closes
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // On touch devices (phones + iPads), iOS Safari can't render PDFs in
  // iframes reliably. Open the PDF in a new tab instead of the modal.
  const open = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      window.open(site.resumeUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setIsOpen(true);
  };

  return (
    <ResumeContext.Provider
      value={{
        isOpen,
        open,
        close: () => setIsOpen(false),
      }}
    >
      {children}
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}

function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Resume — ${site.name}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Dim backdrop — click to close */}
          <button
            aria-label="Close resume"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-black/75 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
                Resume · {site.name}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1.5 text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* PDF viewer — uses the browser's native PDF renderer */}
            <iframe
              src={`${site.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
              title={`Resume for ${site.name}`}
              className="w-full flex-1 bg-cream/5"
            />

            {/* Action bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 bg-cream px-5 py-4">
              <div className="text-xs text-ink/60">
                Like what you see?{" "}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="link-underline font-medium text-ink"
                >
                  Let's talk.
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-cream px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:border-ink"
                >
                  Contact <ArrowUpRight className="h-3 w-3" />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-cream px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:border-ink"
                >
                  <Mail className="h-3 w-3" />
                  Email
                </a>
                <a
                  href={site.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-3 w-3" />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
