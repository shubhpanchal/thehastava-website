import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "symbol" | "text";
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "full", light = false, className = "", size = "md" }: LogoProps) {
  const primaryColor = light ? "text-ivory" : "text-navy";
  const accentColor = "text-gold";

  // Size metrics
  const sizes = {
    sm: { symbol: 32, text: "text-lg", gap: "gap-2" },
    md: { symbol: 48, text: "text-2xl", gap: "gap-3" },
    lg: { symbol: 64, text: "text-3xl", gap: "gap-4" },
  };

  const currentSize = sizes[size];

  // SVG representation of the HASTAVA symbol (H + Hand + Lotus)
  const symbolSvg = (
    <svg
      width={currentSize.symbol}
      height={currentSize.symbol}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block flex-shrink-0 transition-all duration-300"
    >
      {/* Serif Letter H - Left Pillar */}
      <path
        d="M24 15 H40 M32 15 V85 M24 85 H40"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        className={primaryColor}
      />
      {/* Serif Letter H - Right Pillar */}
      <path
        d="M60 15 H76 M68 15 V85 M60 85 H76"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        className={primaryColor}
      />

      {/* Crossbar & Golden Hand holding Lotus */}
      {/* Hand swooping from left to right */}
      <path
        d="M32 50 C 32 50, 42 55, 48 51 C 54 47, 66 38, 70 38 C 72 38, 64 45, 58 48 C 52 51, 45 54, 38 60 C 34 63, 30 70, 25 75"
        stroke="var(--color-gold)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ornate sleeve lines on hand */}
      <path
        d="M27 71 L31 75 M29 68 L34 72"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Lotus base and petals sitting above the hand */}
      <path
        d="M50 38 C 50 38, 48 30, 45 32 C 42 34, 46 41, 50 42 C 54 41, 58 34, 55 32 C 52 30, 50 38, 50 38 Z"
        fill="var(--color-gold)"
        className={accentColor}
      />
      <path
        d="M50 38 C 50 38, 53 26, 50 24 C 47 26, 50 38, 50 38 Z"
        fill="var(--color-gold)"
        className={accentColor}
      />
      <path
        d="M50 38 C 50 38, 44 26, 41 29 C 38 32, 45 37, 50 38 Z"
        fill="var(--color-gold)"
        className={accentColor}
      />
      <path
        d="M50 38 C 50 38, 56 26, 59 29 C 62 32, 55 37, 50 38 Z"
        fill="var(--color-gold)"
        className={accentColor}
      />
    </svg>
  );

  const textMarkup = (
    <div className="flex flex-col leading-none">
      <span
        className={`font-serif uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${currentSize.text} ${primaryColor}`}
      >
        HAST<span className="text-gold">A</span>V<span className="text-gold">A</span>
      </span>
      {variant === "full" && (
        <span
          className="text-[0.45rem] sm:text-[0.55rem] tracking-[0.16em] uppercase font-sans font-medium mt-1 text-gold"
        >
          Crafted by Hands, Delivered with Pride
        </span>
      )}
    </div>
  );

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none outline-none focus-visible:ring-1 focus-visible:ring-gold ${currentSize.gap} ${className}`}
    >
      {variant !== "text" && symbolSvg}
      {variant !== "symbol" && textMarkup}
    </Link>
  );
}
