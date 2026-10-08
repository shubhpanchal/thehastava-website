"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, type HTMLMotionProps } from "motion/react";

export interface InteractiveCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  spotlightColor?: string;
  enableTilt?: boolean;
  withCorners?: boolean;
  theme?: "dark" | "light";
  children?: React.ReactNode;
}

export function InteractiveCard({
  spotlightColor = "rgba(6, 182, 212, 0.15)",
  enableTilt = true,
  withCorners = true,
  theme = "dark",
  className = "",
  children,
  ...props
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  // Mouse coordinates relative to card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D tilt values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    if (enableTilt && !prefersReduced) {
      const centerX = width / 2;
      const centerY = height / 2;
      const tiltX = ((y - centerY) / centerY) * -5;
      const tiltY = ((x - centerX) / centerX) * 5;
      rotateX.set(tiltX);
      rotateY.set(tiltY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt && !prefersReduced
          ? {
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1000,
            }
          : undefined
      }
      className={`relative rounded-2xl border overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#061326] border-white/10 text-white hover:border-blue-500/40"
          : "bg-white border-slate-200 text-slate-900 hover:border-blue-400 shadow-sm"
      } ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mouseX.get()}px ${mouseY.get()}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Technical Lab Corner Markers */}
      {withCorners && (
        <>
          <span className="absolute top-2 left-2 h-2 w-2 border-t border-l border-cyan-400/50 pointer-events-none" />
          <span className="absolute top-2 right-2 h-2 w-2 border-t border-r border-cyan-400/50 pointer-events-none" />
          <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-cyan-400/50 pointer-events-none" />
          <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-cyan-400/50 pointer-events-none" />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
