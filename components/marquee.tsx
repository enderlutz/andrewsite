export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      aria-hidden
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex shrink-0 items-center whitespace-nowrap font-display text-4xl md:text-6xl"
          >
            {item}
            <span className="ml-6 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
