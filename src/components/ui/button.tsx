import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "glow" | "telemetry";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  cursorText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      icon,
      iconPosition = "right",
      href,
      cursorText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none active:scale-[0.98]";

    const sizes = {
      xs: "px-3 py-1.5 text-xs font-semibold gap-1 rounded-lg",
      sm: "px-4 py-2 text-xs font-semibold gap-1.5 rounded-lg",
      md: "px-5 py-2.5 text-sm font-semibold gap-2 rounded-xl",
      lg: "px-7 py-3.5 text-base font-semibold gap-2.5 rounded-xl",
      xl: "px-8 py-4 text-base sm:text-lg font-bold gap-3 rounded-2xl",
    };

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5 border border-blue-400/20",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 border border-white/15 backdrop-blur-sm shadow-xs",
      outline:
        "bg-transparent text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/20 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30",
      ghost:
        "bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
      cyan:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-0.5",
      glow:
        "relative bg-[#061326] text-cyan-300 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:border-cyan-300",
      telemetry:
        "bg-[#07172e] text-cyan-300 border border-cyan-500/40 font-mono text-xs uppercase tracking-wider hover:bg-cyan-950/50 hover:border-cyan-400",
    };

    const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`.trim();

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="inline-flex items-center shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && (
          <span className="inline-flex items-center shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          data-cursor="button"
          data-cursor-text={cursorText}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={combinedClassName}
        data-cursor="button"
        data-cursor-text={cursorText}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
