import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-gold" | "ghost";
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
    // Base luxury styling classes
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    // Size variants
    const sizes = {
      sm: "px-4 py-2.5 text-xs font-semibold rounded-xs",
      md: "px-6 py-3.5 text-sm font-semibold rounded-sm",
      lg: "px-8 py-4 text-base font-semibold rounded-md",
    };

    // Style variants matching HASTAVA's luxury brand
    const variants = {
      primary: "bg-navy text-ivory border border-navy hover:bg-navy-light hover:border-navy-light hover:text-gold-light",
      secondary: "bg-gold text-navy-dark border border-gold hover:bg-gold-dark hover:border-gold-dark hover:text-white",
      outline: "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
      "outline-gold": "bg-transparent text-gold border border-gold hover:bg-gold hover:text-navy-dark",
      ghost: "bg-transparent text-navy hover:text-gold link-underline-gold px-1! py-1!",
    };

    const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`.trim();

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
          <span className="mr-2 inline-flex items-center">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && (
          <span className="ml-2 inline-flex items-center">{icon}</span>
        )}
      </>
    );

    // If an href is provided, render as NextJS Link
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
