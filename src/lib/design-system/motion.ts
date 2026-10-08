/**
 * HASTAVA Motion Language System
 * Phase 0: Foundation & Design System
 * 
 * Defines standardized Framer Motion variants, easing curves, and reduced-motion compliant animations.
 */

import { type Variants, type Transition } from "motion/react";
import { motionTokens } from "./tokens";

export const transitions = {
  instant: {
    duration: motionTokens.durations.instant,
    ease: motionTokens.easings.standard,
  } as Transition,
  fast: {
    duration: motionTokens.durations.fast,
    ease: motionTokens.easings.standard,
  } as Transition,
  normal: {
    duration: motionTokens.durations.normal,
    ease: motionTokens.easings.smooth,
  } as Transition,
  emphasis: {
    duration: motionTokens.durations.normal,
    ease: motionTokens.easings.emphasis,
  } as Transition,
  slow: {
    duration: motionTokens.durations.slow,
    ease: motionTokens.easings.smooth,
  } as Transition,
  deliberate: {
    duration: motionTokens.durations.deliberate,
    ease: motionTokens.easings.emphasis,
  } as Transition,
  springSnappy: motionTokens.springs.snappy as Transition,
  springGentle: motionTokens.springs.gentle as Transition,
};

// Standard Entrance Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.normal,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.emphasis,
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.emphasis,
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.emphasis,
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.emphasis,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.emphasis,
  },
};

// Staggered Container Variants
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.emphasis,
  },
};

// Telemetry Radar & Pulse Variants
export const telemetryPulse: Variants = {
  idle: { scale: 1, opacity: 0.7 },
  active: {
    scale: [1, 1.25, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  processing: {
    scale: [1, 1.4, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Signal Flow Packet Motion
export const signalFlowHorizontal: Variants = {
  initial: { x: "-10%", opacity: 0 },
  animate: {
    x: "110%",
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Helper for Accessible Reduced Motion
export function getAccessibleVariants(standardVariants: Variants, prefersReduced: boolean): Variants {
  if (!prefersReduced) return standardVariants;

  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
  };
}
