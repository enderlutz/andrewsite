// Abstract SVG placeholders that look intentional — used when an image
// slot is empty so the site feels finished even without real photos.

import { cn } from "@/lib/utils";

type Variant = 0 | 1 | 2 | 3 | 4 | 5;

const PALETTES: Array<[string, string, string]> = [
  ["#F7F5F0", "#F25C29", "#171717"], // cream / accent / ink
  ["#EADBCF", "#1F4D3A", "#171717"], // mocha / forest
  ["#F3E7D3", "#2E4BA8", "#171717"], // parchment / cobalt
  ["#F25C29", "#FBD8C1", "#171717"], // accent-heavy
  ["#171717", "#F25C29", "#F7F5F0"], // inverted dark
  ["#E8D5C4", "#111111", "#F25C29"], // sand / charcoal
];

export function Placeholder({
  variant = 0,
  label,
  initials,
  className,
}: {
  variant?: Variant;
  label?: string;
  initials?: string;
  className?: string;
}) {
  const [bg, accent, ink] = PALETTES[variant % PALETTES.length];
  const dark = variant === 4;

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={label ?? "Decorative placeholder"}
    >
      <defs>
        <radialGradient id={`bloom-${variant}`} cx="30%" cy="20%" r="75%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="55%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id={`grain-${variant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
        </filter>
      </defs>

      <rect width="400" height="500" fill={bg} />
      <rect width="400" height="500" fill={`url(#bloom-${variant})`} />

      {/* geometric elements that rotate based on variant for visual variety */}
      {variant % 3 === 0 && (
        <circle cx="310" cy="380" r="80" fill={accent} opacity="0.85" />
      )}
      {variant % 3 === 1 && (
        <rect
          x="60"
          y="330"
          width="140"
          height="140"
          fill={accent}
          opacity="0.85"
          transform="rotate(-8 130 400)"
        />
      )}
      {variant % 3 === 2 && (
        <path
          d="M 40 440 Q 200 300 360 440"
          stroke={accent}
          strokeWidth="24"
          fill="none"
          strokeLinecap="round"
        />
      )}

      {initials && (
        <text
          x="32"
          y="110"
          fontFamily="Instrument Serif, Georgia, serif"
          fontSize="120"
          fill={ink}
          opacity="0.92"
        >
          {initials}
        </text>
      )}

      {label && (
        <text
          x="32"
          y="470"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="500"
          letterSpacing="2"
          fill={dark ? bg : ink}
          opacity="0.7"
        >
          {label.toUpperCase()}
        </text>
      )}

      <rect width="400" height="500" filter={`url(#grain-${variant})`} opacity="0.6" />
    </svg>
  );
}
