import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "underlined" | "mono";
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
      "w-full text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      default:
        "px-4 py-3 bg-white dark:bg-[#07172e] border border-slate-200 dark:border-white/15 rounded-xl focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20 shadow-xs",
      underlined:
        "px-0 py-2.5 bg-transparent border-b border-slate-200 dark:border-white/15 rounded-none focus:border-blue-500 dark:focus:border-cyan-400",
      mono:
        "px-4 py-3 bg-[#07172e] text-cyan-300 font-mono text-xs border border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 placeholder:text-cyan-600",
    };

    const combinedInputClass = `${baseStyles} ${variants[variant]} ${
      error ? "border-rose-500! focus:border-rose-500! focus:ring-rose-500/20!" : ""
    } ${className}`.trim();

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
          >
            {label}
            {required && <span className="ml-1 text-blue-500 dark:text-cyan-400">*</span>}
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
          <p className="font-sans text-xs text-rose-500 tracking-wide mt-0.5">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p className="font-sans text-xs text-slate-500 dark:text-slate-400 tracking-wide mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
