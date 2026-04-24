import Image from "next/image";
import { cn } from "@/lib/utils";
import { Placeholder } from "./placeholder";

// Use next/image when a real src is set, otherwise render a styled
// placeholder so empty slots look intentional.
export function SmartImage({
  src,
  alt,
  variant = 0,
  initials,
  label,
  className,
  priority,
}: {
  src?: string;
  alt: string;
  variant?: 0 | 1 | 2 | 3 | 4 | 5;
  initials?: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src && src.length > 0) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className={cn("overflow-hidden", className)}>
      <Placeholder variant={variant} initials={initials} label={label} />
    </div>
  );
}
