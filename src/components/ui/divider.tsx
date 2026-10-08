import React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "subtle" | "solid" | "dashed" | "glow-blue" | "glow-cyan" | "technical-labeled";
  label?: string;
}

export function Divider({
  orientation = "horizontal",
  variant = "subtle",
  label,
  className = "",
  ...props
}: DividerProps) {
  const isHorizontal = orientation === "horizontal";

  if (variant === "technical-labeled" && label && isHorizontal) {
    return (
      <div
        className={`relative flex items-center justify-center my-6 w-full ${className}`}
        role="separator"
        {...props}
      >
        <div className="grow border-t border-slate-200 dark:border-white/10" />
        <span className="shrink-0 px-3 font-mono text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
          [ {label} ]
        </span>
        <div className="grow border-t border-slate-200 dark:border-white/10" />
      </div>
    );
  }

  const variantStyles: Record<string, string> = {
    subtle: isHorizontal
      ? "border-t border-slate-200/80 dark:border-white/10 my-4"
      : "border-l border-slate-200/80 dark:border-white/10 mx-4 h-full",
    solid: isHorizontal
      ? "border-t-2 border-slate-300 dark:border-white/20 my-4"
      : "border-l-2 border-slate-300 dark:border-white/20 mx-4 h-full",
    dashed: isHorizontal
      ? "border-t border-dashed border-slate-300 dark:border-white/20 my-4"
      : "border-l border-dashed border-slate-300 dark:border-white/20 mx-4 h-full",
    "glow-blue": isHorizontal
      ? "h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-6 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
      : "w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent mx-6 h-full shadow-[0_0_8px_rgba(37,99,235,0.4)]",
    "glow-cyan": isHorizontal
      ? "h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent my-6 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
      : "w-[1px] bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent mx-6 h-full shadow-[0_0_8px_rgba(6,182,212,0.5)]",
    "technical-labeled": isHorizontal
      ? "border-t border-slate-200/80 dark:border-white/10 my-4"
      : "border-l border-slate-200/80 dark:border-white/10 mx-4 h-full",
  };

  return (
    <div
      className={`shrink-0 ${variantStyles[variant] || variantStyles.subtle} ${className}`.trim()}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
}
