import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
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
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

    const sizes = {
      sm: "px-4 py-2 text-xs font-semibold gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold gap-2",
      lg: "px-7 py-3.5 text-base font-semibold gap-2.5",
    };

    const variants = {
      primary:
        "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 border border-white/15 backdrop-blur-sm active:translate-y-0",
      outline:
        "bg-transparent text-slate-800 border border-slate-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 active:translate-y-0",
      ghost:
        "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 active:translate-y-0",
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
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
