import React from "react";

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display-2xl" | "display-xl" | "display-lg" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  theme?: "dark" | "light" | "auto";
  gradient?: "none" | "blue-cyan" | "white-slate" | "indigo-cyan";
}

export function Heading({
  as: Component = "h2",
  variant = "h2",
  theme = "auto",
  gradient = "none",
  className = "",
  children,
  ...props
}: HeadingProps) {
  const variantStyles = {
    "display-2xl": "font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.02]",
    "display-xl": "font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.06]",
    "display-lg": "font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1]",
    h1: "font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]",
    h2: "font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.18]",
    h3: "font-sans text-xl sm:text-2xl font-bold tracking-tight leading-[1.25]",
    h4: "font-sans text-lg sm:text-xl font-semibold tracking-tight leading-[1.3]",
    h5: "font-sans text-base sm:text-lg font-semibold tracking-normal leading-[1.4]",
    h6: "font-sans text-sm sm:text-base font-semibold tracking-normal leading-[1.4]",
  }[variant];

  const themeStyles = {
    auto: "",
    light: "text-slate-900",
    dark: "text-white",
  }[theme];

  const gradientStyles = {
    none: "",
    "blue-cyan": "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent",
    "white-slate": "bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent",
    "indigo-cyan": "bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent",
  }[gradient];

  return (
    <Component
      className={`text-balance ${variantStyles} ${themeStyles} ${gradientStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

// Text Component
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  variant?: "lead" | "body-lg" | "body" | "small" | "xs";
  theme?: "dark" | "light" | "muted" | "auto";
}

export function Text({
  as: Component = "p",
  variant = "body",
  theme = "auto",
  className = "",
  children,
  ...props
}: TextProps) {
  const variantStyles = {
    lead: "text-lg sm:text-xl leading-relaxed font-normal",
    "body-lg": "text-base sm:text-lg leading-relaxed font-normal",
    body: "text-sm sm:text-base leading-normal font-normal",
    small: "text-xs sm:text-sm leading-normal font-normal",
    xs: "text-xs leading-normal font-normal",
  }[variant];

  const themeStyles = {
    auto: "",
    light: "text-slate-800",
    dark: "text-slate-200",
    muted: "text-slate-500 dark:text-slate-400",
  }[theme];

  return (
    <Component className={`${variantStyles} ${themeStyles} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

// Monospace Data Text Component for telemetry & logs
export interface DataTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "emerald" | "amber" | "rose" | "muted";
  size?: "xs" | "sm" | "base" | "lg";
  glow?: boolean;
}

export function DataText({
  variant = "default",
  size = "sm",
  glow = false,
  className = "",
  children,
  ...props
}: DataTextProps) {
  const sizeStyles = {
    xs: "text-[10px] tracking-wide",
    sm: "text-xs tracking-wider",
    base: "text-sm tracking-wider",
    lg: "text-base tracking-widest",
  }[size];

  const variantStyles = {
    default: "text-slate-700 dark:text-slate-300",
    cyan: "text-cyan-600 dark:text-cyan-300",
    emerald: "text-emerald-600 dark:text-emerald-300",
    amber: "text-amber-600 dark:text-amber-300",
    rose: "text-rose-600 dark:text-rose-300",
    muted: "text-slate-400 dark:text-slate-500",
  }[variant];

  const glowStyles = glow ? "drop-shadow-[0_0_8px_currentColor]" : "";

  return (
    <span
      className={`font-mono font-medium uppercase select-all ${sizeStyles} ${variantStyles} ${glowStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}

// Eyebrow Component for section headers
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "cyan" | "indigo" | "dark" | "light";
  signalPulse?: boolean;
}

export function Eyebrow({
  variant = "blue",
  signalPulse = true,
  className = "",
  children,
  ...props
}: EyebrowProps) {
  const variantStyles = {
    blue: "text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10",
    cyan: "text-cyan-600 dark:text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
    indigo: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    dark: "text-slate-300 border-white/10 bg-white/5",
    light: "text-slate-700 border-slate-200 bg-slate-100",
  }[variant];

  const dotColors = {
    blue: "bg-blue-500",
    cyan: "bg-cyan-400",
    indigo: "bg-indigo-500",
    dark: "bg-slate-400",
    light: "bg-slate-500",
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-widest ${variantStyles} ${className}`.trim()}
      {...props}
    >
      {signalPulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors}`} />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
