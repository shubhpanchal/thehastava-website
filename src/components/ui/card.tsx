import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "bordered" | "gold-accent" | "flat";
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "bordered", hoverable = false, children, ...props }, ref) => {
    const baseStyles = "relative flex flex-col overflow-hidden transition-all duration-300 ease-out";
    
    const variants = {
      flat: "bg-ivory-light border-0",
      bordered: "bg-ivory-light border border-ivory-dark rounded-sm",
      "gold-accent": "bg-ivory-light border-t-2 border-t-gold border-x border-b border-ivory-dark rounded-b-sm rounded-t-xs",
      elevated: "bg-ivory-light shadow-premium rounded-sm",
    };

    const hoverStyles = hoverable
      ? "hover:-translate-y-1 hover:shadow-premium-hover"
      : "";

    const combinedClassName = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`.trim();

    return (
      <div ref={ref} className={combinedClassName} {...props}>
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
  ({ className = "", ...props }, ref) => (
    <h3 ref={ref} className={`font-serif text-xl font-medium text-navy tracking-wide ${className}`} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = "", ...props }, ref) => (
    <p ref={ref} className={`font-sans text-xs text-slate-muted tracking-wide ${className}`} {...props} />
  )
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
    <div ref={ref} className={`flex items-center p-6 pt-3 border-t border-ivory-dark/30 ${className}`} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

// CardMedia wraps next/image or general media for clean hover-zoom effects
export const CardMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden aspect-4/3 bg-ivory-dark/10 group ${className}`}
      {...props}
    >
      <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
        {children}
      </div>
    </div>
  )
);
CardMedia.displayName = "CardMedia";
