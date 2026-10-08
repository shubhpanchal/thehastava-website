import React from "react";

export interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

export function Step({
  number,
  title,
  description,
  icon,
  className = "",
  variant = "light",
}: StepProps) {
  const isDark = variant === "dark";

  return (
    <li
      className={`relative flex flex-col md:items-center md:text-center gap-4 group list-none ${className}`}
    >
      {/* Circle Icon and Number Badge */}
      <div className="flex md:flex-col items-center gap-4 md:gap-3">
        {/* Icon Circle */}
        <div
          className={`relative flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 group-hover:scale-105 z-10 ${
            isDark
              ? "bg-[#061326] border-blue-500/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:border-cyan-400"
              : "bg-blue-50/80 border-blue-200 text-blue-600 shadow-sm group-hover:border-blue-400"
          }`}
        >
          {icon}
        </div>

        {/* Step Number Circle */}
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full font-mono text-xs font-bold shadow-xs z-10 ${
            isDark
              ? "bg-cyan-500 text-[#061326]"
              : "bg-blue-600 text-white"
          }`}
        >
          {number}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-1.5 pl-[4.5rem] md:pl-0">
        <h3
          className={`font-sans text-lg font-bold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-sans text-xs sm:text-sm leading-relaxed max-w-xs md:mx-auto ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>
    </li>
  );
}
