"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { SuccessState } from "@/components/success-state";

// Simple mailto-based form — on submit, opens the user's email client
// with the note pre-filled, then shows a success celebration.
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const senderEmail = String(data.get("email") || "");
    const reason = String(data.get("reason") || "General");
    const message = String(data.get("message") || "");

    const subject = `Portfolio contact — ${reason}`;
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      `Reason: ${reason}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    form.reset();
    setSent(true);
  }

  return (
    <div className="relative min-h-[480px] rounded-2xl border border-cream/15 bg-cream/[0.02] p-6 md:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <SuccessState
              title="Note sent."
              description="Your email app should have opened with the note pre-filled — send it and Andrew will be in touch within a day."
              onReset={() => setSent(false)}
              resetLabel="Write another"
            />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  name="name"
                  type="text"
                  className={inputCls}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  name="email"
                  type="email"
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </Field>
            </div>

            <Field label="Reason">
              <select name="reason" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Pick one
                </option>
                <option>Internship / job opportunity</option>
                <option>Sales competition / event</option>
                <option>Intro through a friend</option>
                <option>Just saying hi</option>
              </select>
            </Field>

            <Field label="Message">
              <textarea
                required
                name="message"
                rows={4}
                className={`${inputCls} resize-none`}
                placeholder="Share a bit of context — role, timing, whatever matters."
              />
            </Field>

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-cream/50">
                Opens in your email app with the note pre-filled.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
              >
                Send note
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "block w-full rounded-lg border border-cream/15 bg-cream/[0.03] px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 transition-colors focus:border-accent focus:outline-none focus:ring-0";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-cream/60">
        {label}
      </span>
      {children}
    </label>
  );
}
