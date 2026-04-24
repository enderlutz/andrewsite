"use client";

import { useEffect } from "react";
import { site } from "@/lib/content";

// ASCII "AB-M" greeting logged once to the browser console.
// Harmless easter egg for recruiters / devs who open DevTools.
const ASCII = `
  █████╗ ██████╗        ███╗   ███╗
 ██╔══██╗██╔══██╗       ████╗ ████║
 ███████║██████╔╝ ===== ██╔████╔██║
 ██╔══██║██╔══██╗       ██║╚██╔╝██║
 ██║  ██║██████╔╝       ██║ ╚═╝ ██║
 ╚═╝  ╚═╝╚═════╝        ╚═╝     ╚═╝
`;

export function ConsoleHello() {
  useEffect(() => {
    // Avoid duplicate prints on fast-refresh
    if ((window as unknown as { __consoleHello?: boolean }).__consoleHello)
      return;
    (window as unknown as { __consoleHello?: boolean }).__consoleHello = true;

    console.log(
      "%c" + ASCII,
      "color: #F25C29; font-family: ui-monospace, monospace; line-height: 1.1;",
    );
    console.log(
      "%cHey, curious one.",
      "font-size: 14px; color: #171717; font-weight: 600;",
    );
    console.log(
      "%cFinance brain. Sales instinct. Army vet.",
      "color: #6b6b6b;",
    );
    console.log(
      `%cIf you're poking around the code, you'd probably get along.%c  →  ${site.email}`,
      "color: #6b6b6b;",
      "color: #F25C29; font-weight: 600;",
    );
  }, []);

  return null;
}
