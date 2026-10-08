"use client";

import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { transitions } from "@/lib/design-system/motion";

export type ScrollRevealProps = HTMLMotionProps<"div"> & {
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
};

export function ScrollReveal({
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 0.5,
  threshold = 0.15,
  once = true,
  children,
  className = "",
  ...props
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  const getInitial = () => {
    if (prefersReduced) return { opacity: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.94 };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    if (prefersReduced) return { opacity: 1 };
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount: threshold }}
      transition={{
        duration: prefersReduced ? 0.01 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: transitions.emphasis.ease,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Staggered Container for orchestrating child entrances
export interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delay?: number;
  threshold?: number;
}

export function StaggerGroup({
  stagger = 0.08,
  delay = 0,
  threshold = 0.1,
  children,
  className = "",
  ...props
}: StaggerGroupProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReduced ? 0 : stagger,
            delayChildren: prefersReduced ? 0 : delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div">) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
        visible: prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, transition: transitions.emphasis },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
