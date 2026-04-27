"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

// Shared celebration screen — spring-animated checkmark with an
// expanding ring pulse, cascading title/description/extras/reset.
// Used by both the booking calendar's "done" step and the contact
// form's post-submit state.
export function SuccessState({
  title,
  description,
  children,
  onReset,
  resetLabel = "Start over",
}: {
  title: string;
  description: string;
  children?: ReactNode;
  onReset?: () => void;
  resetLabel?: string;
}) {
  return (
    <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
      <div className="relative flex h-16 w-16 items-center justify-center">
        {/* Expanding ring radiates out, fades */}
        <motion.span
          initial={{ scale: 0.6, opacity: 0.55 }}
          animate={{ scale: 2.3, opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.15 }}
          className="absolute inset-0 rounded-full bg-accent"
        />
        {/* Second ring, slightly delayed */}
        <motion.span
          initial={{ scale: 0.6, opacity: 0.35 }}
          animate={{ scale: 2.8, opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.35 }}
          className="absolute inset-0 rounded-full bg-accent"
        />
        {/* Checkmark bubble */}
        <motion.span
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent/25 text-accent"
        >
          <Check className="h-8 w-8" strokeWidth={3} />
        </motion.span>
      </div>

      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="display mt-6 text-4xl"
      >
        {title}
      </motion.h4>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-3 max-w-sm text-sm text-ink/70"
      >
        {description}
      </motion.p>

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}

      {onReset && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          onClick={onReset}
          className="mt-8 text-xs uppercase tracking-wider text-ink/50 underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
        >
          {resetLabel}
        </motion.button>
      )}
    </div>
  );
}
