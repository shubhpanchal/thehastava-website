import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "standard" | "elevated" | "bordered" | "interactive" | "laboratory" | "telemetry" | "flat";
  hoverable?: boolean;
  withCorners?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = "",
      variant = "bordered",
      hoverable = false,
      withCorners = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "relative flex flex-col overflow-hidden transition-all duration-300 ease-out";

    const variants = {
      flat: "bg-white dark:bg-[#0B1528] border-0",
      standard: "bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 rounded-2xl shadow-xs",
      bordered: "bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 rounded-2xl shadow-xs",
      elevated: "bg-white dark:bg-[#0F203C] border border-slate-200/60 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-black/40 rounded-2xl",
      interactive: "bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 rounded-2xl hover:border-blue-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-cyan-500/5 hover:-translate-y-1",
      laboratory: "bg-[#061326]/90 border border-blue-500/30 text-white rounded-2xl shadow-xl shadow-blue-950/40 backdrop-blur-md",
      telemetry: "bg-[#07172e] border border-cyan-500/30 text-cyan-300 rounded-xl shadow-md font-mono",
    };

    const hoverStyles = hoverable && variant !== "interactive"
      ? "hover:-translate-y-1 hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-400"
      : "";

    const combinedClassName = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`.trim();

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {withCorners && (
          <>
            <span className="absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-cyan-400/60 pointer-events-none" />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-cyan-400/60 pointer-events-none" />
            <span className="absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l border-cyan-400/60 pointer-events-none" />
            <span className="absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-cyan-400/60 pointer-events-none" />
          </>
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`flex flex-col gap-1.5 p-6 pb-3 ${className}`} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`font-sans text-xl font-bold tracking-tight text-slate-900 dark:text-white ${className}`}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${className}`}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-3 flex-1 ${className}`} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-3 border-t border-slate-100 dark:border-white/10 ${className}`}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

// CardMedia wraps next/image or general media for clean hover-zoom effects
export const CardMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden aspect-4/3 bg-slate-100 dark:bg-slate-800 group ${className}`}
      {...props}
    >
      <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
        {children}
      </div>
    </div>
  )
);
CardMedia.displayName = "CardMedia";
