"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { BookingCalendar } from "@/components/booking-calendar";
import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";

type Side = "calendar" | "form";
type Active = "none" | Side;

export function ContactPair({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const [active, setActive] = useState<Active>("none");
  const [hovered, setHovered] = useState<Side | null>(null);

  function engage(side: Side) {
    setActive(side);
  }

  function dismiss() {
    setActive("none");
  }

  // Uses lg-hover: (hover:hover AND min-width 1024px). Tablets stay stacked.
  const cols =
    active === "calendar"
      ? "lg-hover:grid-cols-[1fr_56px]"
      : active === "form"
        ? "lg-hover:grid-cols-[56px_1fr]"
        : "lg-hover:grid-cols-2";

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6",
        "transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        cols,
      )}
    >
      <Pane
        side="left"
        label="Calendar"
        collapsed={active === "form"}
        focused={hovered === "calendar" && active === "none"}
        dimmed={hovered === "form" && active === "none"}
        showDismiss={active === "calendar"}
        onEnter={() => setHovered("calendar")}
        onLeave={() => setHovered(null)}
        onEngage={() => engage("calendar")}
        onDismiss={dismiss}
      >
        <BookingCalendar email={email} name={name} />
      </Pane>

      <Pane
        side="right"
        label="Form"
        collapsed={active === "calendar"}
        focused={hovered === "form" && active === "none"}
        dimmed={hovered === "calendar" && active === "none"}
        showDismiss={active === "form"}
        onEnter={() => setHovered("form")}
        onLeave={() => setHovered(null)}
        onEngage={() => engage("form")}
        onDismiss={dismiss}
      >
        <ContactForm email={email} />
      </Pane>
    </div>
  );
}

function Pane({
  side,
  label,
  collapsed,
  focused,
  dimmed,
  showDismiss,
  onEnter,
  onLeave,
  onEngage,
  onDismiss,
  children,
}: {
  side: "left" | "right";
  label: string;
  collapsed: boolean;
  focused: boolean;
  dimmed: boolean;
  showDismiss: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onEngage: () => void;
  onDismiss: () => void;
  children: ReactNode;
}) {
  // Toggle `inert` on the hidden content so tab / screen reader skip it
  // while the pane is collapsed. Only applies at lg-hover — on touch
  // devices the pane is never collapsed.
  const innerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const isCollapsibleDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (min-width: 1024px)").matches;
    if (collapsed && isCollapsibleDevice) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  }, [collapsed]);

  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() => {
        if (!collapsed) onEngage();
      }}
      onFocus={() => {
        if (!collapsed) onEngage();
      }}
      onKeyDown={() => {
        if (!collapsed) onEngage();
      }}
      animate={{
        scale: collapsed ? 1 : focused ? 1.01 : dimmed ? 0.98 : 1,
        opacity: collapsed ? 1 : dimmed ? 0.55 : 1,
        y: collapsed ? 0 : focused ? -4 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      // overflow-hidden only when collapsed — otherwise it clips magnetic
      // pull on hover.
      className={cn(
        "relative min-w-0",
        collapsed && "lg-hover:overflow-hidden lg-hover:rounded-2xl",
      )}
    >
      {/* Collapsed rail — only rendered visible at lg-hover when collapsed */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEngage();
        }}
        tabIndex={collapsed ? 0 : -1}
        aria-label={`Expand ${label.toLowerCase()}`}
        aria-hidden={!collapsed}
        className={cn(
          "absolute inset-0 z-10 hidden items-center justify-center rounded-2xl border border-cream/15 bg-cream/[0.02] transition-colors",
          collapsed &&
            "lg-hover:flex lg-hover:hover:border-accent lg-hover:hover:bg-cream/[0.04]",
        )}
      >
        <span
          className={cn(
            "select-none font-display text-xs font-medium uppercase tracking-[0.5em] text-cream/70",
            side === "left" ? "-rotate-90" : "rotate-90",
          )}
        >
          {label}
        </span>
      </button>

      {/* Dismiss ✕ — returns layout to 50/50 on desktop */}
      {showDismiss && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          aria-label="Return to split view"
          className="absolute right-3 top-3 z-20 hidden rounded-full border border-cream/20 bg-ink/70 p-1.5 text-cream/70 backdrop-blur transition-colors hover:border-accent hover:text-accent lg-hover:inline-flex"
        >
          <X className="h-3 w-3" />
        </button>
      )}

      {/* Real pane content — faded out and inert when collapsed at lg-hover */}
      <div
        ref={innerRef}
        className={cn(
          "transition-opacity duration-300",
          collapsed &&
            "lg-hover:pointer-events-none lg-hover:opacity-0",
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
