"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export interface HoverRevealProps {
  trigger: React.ReactNode;
  revealContent: React.ReactNode;
  className?: string;
}

export function HoverReveal({
  trigger,
  revealContent,
  className = "",
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block ${className}`}
    >
      <div>{trigger}</div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 mt-2 z-30"
          >
            {revealContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
