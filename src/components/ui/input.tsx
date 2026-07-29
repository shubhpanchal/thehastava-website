import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "underlined";
  multiline?: boolean;
  rows?: number;
}

export const Input = React.forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  InputProps
>(
  (
    {
      className = "",
      label,
      error,
      helperText,
      variant = "default",
      multiline = false,
      rows = 4,
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const baseStyles =
      "w-full font-sans text-sm text-navy placeholder:text-slate-muted/50 focus:outline-none transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      default:
        "px-4 py-3 bg-ivory-light border border-ivory-dark rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20",
      underlined:
        "px-0 py-2.5 bg-transparent border-b border-ivory-dark rounded-none focus:border-gold",
    };

    const combinedInputClass = `${baseStyles} ${variants[variant]} ${
      error ? "border-red-500! focus:border-red-500! focus:ring-red-500/10!" : ""
    } ${className}`.trim();

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-slate"
          >
            {label}
            {required && <span className="ml-1 text-gold">*</span>}
          </label>
        )}

        <div className="relative">
          {multiline ? (
            <textarea
              id={inputId}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              disabled={disabled}
              rows={rows}
              className={combinedInputClass}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              id={inputId}
              ref={ref as React.Ref<HTMLInputElement>}
              disabled={disabled}
              className={combinedInputClass}
              {...props}
            />
          )}
        </div>

        {error && (
          <p className="font-sans text-xs text-red-500 tracking-wide mt-0.5">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p className="font-sans text-xs text-slate-muted/80 tracking-wide mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
