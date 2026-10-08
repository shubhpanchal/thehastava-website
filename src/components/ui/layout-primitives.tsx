import React from "react";

// Container Primitive
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "page" | "content" | "narrow" | "full";
  gutter?: "none" | "sm" | "md" | "lg";
  withGuides?: boolean;
}

export function Container({
  size = "page",
  gutter = "md",
  withGuides = false,
  className = "",
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    page: "max-w-[1440px]",
    content: "max-w-[1120px]",
    narrow: "max-w-[768px]",
    full: "max-w-full",
  }[size];

  const gutterStyles = {
    none: "px-0",
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-6 sm:px-8 lg:px-12",
  }[gutter];

  return (
    <div
      className={`relative w-full mx-auto ${sizeStyles} ${gutterStyles} ${className}`.trim()}
      {...props}
    >
      {withGuides && (
        <>
          {/* Subtle Technical Corner Alignment Markers */}
          <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-blue-500/40 pointer-events-none" />
          <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-blue-500/40 pointer-events-none" />
          <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-blue-500/40 pointer-events-none" />
          <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-blue-500/40 pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
}

// Section Primitive
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "dark" | "surface" | "blueprint" | "gradient-dark";
  containerSize?: "page" | "content" | "narrow" | "full";
}

export function Section({
  spacing = "lg",
  background = "default",
  containerSize = "page",
  className = "",
  children,
  ...props
}: SectionProps) {
  const spacingStyles = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16 md:py-20",
    lg: "py-16 sm:py-24 md:py-28",
    xl: "py-20 sm:py-28 md:py-36",
  }[spacing];

  const backgroundStyles = {
    default: "bg-white text-slate-900",
    dark: "bg-[#030712] text-white",
    surface: "bg-slate-50 text-slate-900 border-y border-slate-200/70",
    blueprint: "bg-[#061326] text-white relative hero-grid",
    "gradient-dark": "bg-gradient-to-br from-[#061326] via-[#0A1A33] to-[#0F284D] text-white",
  }[background];

  return (
    <section
      className={`relative w-full overflow-hidden ${spacingStyles} ${backgroundStyles} ${className}`.trim()}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

// Grid Primitive
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  colsSm?: 1 | 2 | 3 | 4 | 6 | 12;
  colsMd?: 1 | 2 | 3 | 4 | 6 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

export function Grid({
  cols = 1,
  colsSm,
  colsMd,
  colsLg,
  gap = "md",
  className = "",
  children,
  ...props
}: GridProps) {
  const baseCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
    12: "grid-cols-12",
  }[cols];

  const smCols = colsSm
    ? {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        6: "sm:grid-cols-6",
        12: "sm:grid-cols-12",
      }[colsSm]
    : "";

  const mdCols = colsMd
    ? {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        6: "md:grid-cols-6",
        12: "md:grid-cols-12",
      }[colsMd]
    : "";

  const lgCols = colsLg
    ? {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        6: "lg:grid-cols-6",
        12: "lg:grid-cols-12",
      }[colsLg]
    : "";

  const gapStyles = {
    none: "gap-0",
    xs: "gap-2 sm:gap-3",
    sm: "gap-3 sm:gap-4",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-8 sm:gap-12",
  }[gap];

  return (
    <div
      className={`grid ${baseCols} ${smCols} ${mdCols} ${lgCols} ${gapStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

// Stack Primitive
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-responsive";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
}

export function Stack({
  direction = "col",
  align = "stretch",
  justify = "start",
  gap = "md",
  wrap = false,
  className = "",
  children,
  ...props
}: StackProps) {
  const directionStyles = {
    col: "flex-col",
    row: "flex-row",
    "row-responsive": "flex-col sm:flex-row",
  }[direction];

  const alignStyles = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  }[align];

  const justifyStyles = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }[justify];

  const gapStyles = {
    none: "gap-0",
    xs: "gap-1.5",
    sm: "gap-3",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-8 sm:gap-12",
  }[gap];

  return (
    <div
      className={`flex ${directionStyles} ${alignStyles} ${justifyStyles} ${gapStyles} ${
        wrap ? "flex-wrap" : ""
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
