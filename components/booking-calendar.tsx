"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Video,
  ArrowLeft,
  Calendar as CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SuccessState } from "@/components/success-state";

type Step = "date" | "time" | "details" | "done";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function BookingCalendar({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 60);
    return d;
  }, [today]);

  const [monthStart, setMonthStart] = useState(() => {
    const d = new Date(today);
    d.setDate(1);
    return d;
  });

  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    visitorEmail: "",
    notes: "",
  });

  const timezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    [],
  );

  const days = useMemo(
    () => buildMonth(monthStart, today, maxDate),
    [monthStart, today, maxDate],
  );

  const timeSlots = useMemo(buildTimeSlots, []);

  function prevMonth() {
    const prev = new Date(monthStart);
    prev.setMonth(prev.getMonth() - 1);
    if (
      prev.getFullYear() < today.getFullYear() ||
      (prev.getFullYear() === today.getFullYear() &&
        prev.getMonth() < today.getMonth())
    ) {
      return;
    }
    setMonthStart(prev);
  }

  function nextMonth() {
    const next = new Date(monthStart);
    next.setMonth(next.getMonth() + 1);
    setMonthStart(next);
  }

  function pickDate(d: Date) {
    setSelectedDate(d);
    setSelectedTime(null);
    setStep("time");
  }

  function pickTime(t: string) {
    if (selectedTime === t) {
      setStep("details");
    } else {
      setSelectedTime(t);
    }
  }

  function confirmTime() {
    if (selectedTime) setStep("details");
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const subject = `Intro call — ${form.firstName} ${form.lastName}`.trim();
    const body = [
      `Hi ${name.split(" ")[0]},`,
      "",
      `I'd like to book the 30-minute intro call for:`,
      `${formatLongDate(selectedDate)} at ${selectedTime} (${timezone})`,
      "",
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.visitorEmail}`,
      "",
      form.notes ? `Notes: ${form.notes}` : "",
      "",
      `Looking forward to it.`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStep("done");
  }

  function reset() {
    setStep("date");
    setSelectedDate(null);
    setSelectedTime(null);
    setForm({
      firstName: "",
      lastName: "",
      visitorEmail: "",
      notes: "",
    });
  }

  const monthCanGoBack =
    monthStart.getFullYear() > today.getFullYear() ||
    (monthStart.getFullYear() === today.getFullYear() &&
      monthStart.getMonth() > today.getMonth());

  return (
    <div className="overflow-hidden rounded-2xl border border-cream/15 bg-cream/[0.02] shadow-subtle">
      {/* Compact top header with event info */}
      <div className="border-b border-cream/10 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 font-display text-base text-accent">
              A
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-cream/50">
                {name}
              </div>
              <div className="font-display text-lg leading-tight">
                Intro call
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-cream/65">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" /> 30 min
            </span>
            <span className="flex items-center gap-1.5">
              <Video className="h-3.5 w-3.5 text-accent" /> Zoom or phone
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-accent" />
              <span className="truncate">{timezone}</span>
            </span>
          </div>
        </div>

        {step !== "date" && selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-cream/10 bg-cream/[0.02] px-3 py-2 text-xs"
          >
            <span className="font-medium uppercase tracking-[0.15em] text-cream/50">
              Selected
            </span>
            <span className="text-cream">{formatLongDate(selectedDate)}</span>
            {selectedTime && (
              <>
                <span className="text-cream/40">·</span>
                <span className="text-cream">{selectedTime}</span>
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Step content */}
      <div className="relative min-h-[480px] p-6 md:p-8">
        <AnimatePresence mode="wait">
          {step === "date" && (
            <StepWrap key="date">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-medium text-cream">Select a Date</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevMonth}
                    disabled={!monthCanGoBack}
                    aria-label="Previous month"
                    className="rounded-full border border-cream/15 p-1.5 text-cream transition-colors enabled:hover:border-accent disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="min-w-[130px] text-center text-sm font-medium">
                    {MONTH_NAMES[monthStart.getMonth()]}{" "}
                    {monthStart.getFullYear()}
                  </div>
                  <button
                    onClick={nextMonth}
                    aria-label="Next month"
                    className="rounded-full border border-cream/15 p-1.5 text-cream transition-colors hover:border-accent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 text-center text-[10px] font-medium uppercase tracking-wider text-cream/50">
                {WEEKDAYS.map((w) => (
                  <div key={w} className="py-2">
                    {w}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => {
                  const isSelected =
                    selectedDate?.toDateString() === d.date.toDateString();
                  return (
                    <button
                      key={i}
                      onClick={() => d.isAvailable && pickDate(d.date)}
                      disabled={!d.isAvailable}
                      className={cn(
                        "relative flex aspect-square items-center justify-center rounded-full text-sm transition-colors",
                        !d.isCurrentMonth && "text-cream/20",
                        d.isCurrentMonth &&
                          d.isAvailable &&
                          "bg-cream/[0.04] font-medium text-cream hover:bg-accent hover:text-cream",
                        d.isCurrentMonth && !d.isAvailable && "text-cream/25",
                        d.isToday && "ring-1 ring-inset ring-accent",
                        isSelected && "bg-accent text-cream hover:bg-accent",
                      )}
                    >
                      {d.date.getDate()}
                    </button>
                  );
                })}
              </div>
            </StepWrap>
          )}

          {step === "time" && selectedDate && (
            <StepWrap key="time">
              <BackRow
                onClick={() => setStep("date")}
                label="Back to calendar"
              />
              <h4 className="mt-3 text-sm font-medium">
                {formatLongDate(selectedDate)}
              </h4>
              <p className="text-xs text-cream/50">Pick a time</p>

              <div className="mt-5 grid max-h-[380px] grid-cols-2 gap-2 overflow-y-auto pr-2 sm:grid-cols-3">
                {timeSlots.map((t) => {
                  const selected = selectedTime === t;
                  return (
                    <div key={t} className="relative">
                      <button
                        onClick={() => pickTime(t)}
                        className={cn(
                          "w-full rounded-lg border px-3 py-3 text-sm font-medium transition-all",
                          selected
                            ? "border-accent bg-accent/15 text-cream"
                            : "border-cream/20 bg-cream/[0.02] text-cream hover:border-accent",
                        )}
                      >
                        {t}
                      </button>
                      {selected && (
                        <motion.button
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          onClick={confirmTime}
                          className="absolute inset-y-0 right-0 flex w-[46%] items-center justify-center rounded-lg bg-accent text-sm font-medium text-cream"
                        >
                          Confirm
                        </motion.button>
                      )}
                    </div>
                  );
                })}
              </div>
            </StepWrap>
          )}

          {step === "details" && (
            <StepWrap key="details">
              <BackRow onClick={() => setStep("time")} label="Back to time" />
              <h4 className="mt-3 text-sm font-medium">Enter your details</h4>
              <p className="mt-1 text-xs text-cream/50">
                We'll finalize over email in under 24 hours.
              </p>

              <form onSubmit={submit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="First name">
                    <input
                      required
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      className={inputCls}
                      placeholder="Jane"
                    />
                  </Field>
                  <Field label="Last name">
                    <input
                      required
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                      className={inputCls}
                      placeholder="Doe"
                    />
                  </Field>
                </div>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.visitorEmail}
                    onChange={(e) =>
                      setForm({ ...form, visitorEmail: e.target.value })
                    }
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="Anything that will help prepare for our meeting">
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    className={`${inputCls} resize-none`}
                    placeholder="Role context, timing, shared connections…"
                  />
                </Field>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-cream/50">
                    Opens your email app to confirm.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
                  >
                    Schedule event
                  </button>
                </div>
              </form>
            </StepWrap>
          )}

          {step === "done" && (
            <StepWrap key="done">
              <SuccessState
                title="You're scheduled."
                description="Your email app should have opened with the booking pre-filled — send it and you'll get a confirmation from Andrew within 24 hours."
                onReset={reset}
                resetLabel="Book another time"
              >
                {selectedDate && selectedTime && (
                  <div className="mt-6 rounded-xl border border-cream/10 bg-cream/[0.02] px-5 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-accent" />
                      {formatLongDate(selectedDate)}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      {selectedTime} ({timezone})
                    </div>
                  </div>
                )}
              </SuccessState>
            </StepWrap>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ───── helpers ─────

function StepWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BackRow({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-cream/60 transition-colors hover:text-accent"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

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

const inputCls =
  "block w-full rounded-lg border border-cream/15 bg-cream/[0.03] px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 transition-colors focus:border-accent focus:outline-none focus:ring-0";

function buildMonth(monthStart: Date, today: Date, maxDate: Date) {
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const gridStart = new Date(year, month, 1 - firstDayIndex);
  const days: Array<{
    date: Date;
    isCurrentMonth: boolean;
    isAvailable: boolean;
    isToday: boolean;
  }> = [];

  for (let i = 0; i < 42; i++) {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + i);
    date.setHours(0, 0, 0, 0);
    const isCurrentMonth = date.getMonth() === month;
    const isPast = date < today;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isAvailable = !isPast && !isWeekend && date <= maxDate;
    const isToday = date.getTime() === today.getTime();
    days.push({ date, isCurrentMonth, isAvailable, isToday });
  }
  return days;
}

function buildTimeSlots() {
  const slots: string[] = [];
  for (let hour = 9; hour < 17; hour++) {
    slots.push(formatTime(hour, 0));
    slots.push(formatTime(hour, 30));
  }
  return slots;
}

function formatTime(hour: number, minute: number) {
  const h = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const ampm = hour >= 12 ? "pm" : "am";
  const m = minute.toString().padStart(2, "0");
  return `${h}:${m} ${ampm}`;
}

function formatLongDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
