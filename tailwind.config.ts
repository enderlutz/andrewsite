import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Only matches on real mouse-pointer devices at lg+. Tablets
        // (including iPads in landscape) are pointer:coarse and miss it.
        "lg-hover": { raw: "(hover: hover) and (min-width: 1024px)" },
      },
      colors: {
        // Dark theme: `cream` is the page background, `ink` is the text.
        // Names kept for minimal churn; swap hex values to flip the whole site.
        cream: "#171717",
        ink: "#F7F5F0",
        accent: "#F25C29",
        accentMuted: "#E8D5C4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
