"use client";

import React from "react";
import { Tooltip } from "./tooltip";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  ariaLabel: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = "ghost",
      size = "md",
      tooltip,
      tooltipPosition = "top",
      ariaLabel,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "h-8 w-8 p-1.5 text-xs rounded-lg",
      md: "h-10 w-10 p-2 text-sm rounded-xl",
      lg: "h-12 w-12 p-3 text-base rounded-2xl",
    }[size];

    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/20 active:scale-95",
      secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/15 active:scale-95",
      outline: "border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 active:scale-95",
      ghost: "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95",
      cyan: "bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 active:scale-95",
    }[variant];

    const buttonElement = (
      <button
        ref={ref}
        aria-label={ariaLabel}
        data-cursor="button"
        className={`inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none ${sizeStyles} ${variantStyles} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );

    if (tooltip) {
      return (
        <Tooltip content={tooltip} position={tooltipPosition}>
          {buttonElement}
        </Tooltip>
      );
    }

    return buttonElement;
  }
);

IconButton.displayName = "IconButton";
