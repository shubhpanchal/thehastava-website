import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "blue" | "cyan" | "indigo" | "emerald" | "amber" | "rose" | "dark";
  size?: "xs" | "sm" | "md";
  pulse?: boolean;
  mono?: boolean;
}

export function Badge({
  variant = "neutral",
  size = "sm",
  pulse = false,
  mono = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-sm",
  }[size];

  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border-slate-200/80 dark:bg-white/10 dark:text-slate-300 dark:border-white/15",
    blue: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-500/30",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-500/30",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-500/30",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-500/30",
    amber: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-500/30",
    rose: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-500/30",
    dark: "bg-slate-900 text-white border-slate-800",
  }[variant];

  const pulseColors = {
    neutral: "bg-slate-400",
    blue: "bg-blue-500",
    cyan: "bg-cyan-400",
    indigo: "bg-indigo-500",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    rose: "bg-rose-400",
    dark: "bg-white",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-semibold tracking-wide ${
        mono ? "font-mono" : "font-sans"
      } ${sizeStyles} ${variantStyles} ${className}`.trim()}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColors}`} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${pulseColors}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

// Tech Stack Tag Primitive
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline" | "ghost";
}

export function Tag({
  variant = "outline",
  className = "",
  children,
  ...props
}: TagProps) {
  const variantStyles = {
    solid: "bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200",
    outline: "border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-transparent",
    ghost: "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white",
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[11px] font-medium tracking-wide ${variantStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
