import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "symbol" | "text";
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ light = false, className = "", size = "md" }: LogoProps) {
  // Determine logo source image based on background tone
  const logoSrc = light ? "/images/logo-light.png" : "/images/logo-dark.png";

  // Dimension mapping for sizing consistency
  const dimensions = {
    sm: { width: 68, height: 64 },
    md: { width: 107, height: 100 },
    lg: { width: 150, height: 140 },
  };

  const currentDims = dimensions[size] || dimensions.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-xs ${className}`}
      aria-label="HASTAVA Home"
    >
      <Image
        src={logoSrc}
        alt="HASTAVA Logo"
        width={currentDims.width}
        height={currentDims.height}
        className="object-contain transition-opacity duration-300"
        priority
      />
    </Link>
  );
}
