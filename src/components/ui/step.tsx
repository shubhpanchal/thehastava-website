import React from "react";

export interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function Step({ number, title, description, icon, className = "" }: StepProps) {
  return (
    <li
      className={`relative flex flex-col md:items-center md:text-center gap-4 group list-none ${className}`}
    >
      {/* Circle Icon and Number Badge */}
      <div className="flex md:flex-col items-center gap-4 md:gap-3">
        {/* Icon Circle */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-ivory-light border border-ivory-dark text-gold shadow-premium z-10 transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        
        {/* Step Number Circle */}
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-ivory font-sans text-xs font-bold shadow-sm z-10">
          {number}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-1.5 pl-[4.5rem] md:pl-0">
        <h3 className="font-serif text-lg font-medium text-navy tracking-wide">
          {title}
        </h3>
        <p className="font-sans text-xs text-slate-muted leading-relaxed max-w-xs md:mx-auto">
          {description}
        </p>
      </div>
    </li>
  );
}
