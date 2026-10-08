"use client";

import React from "react";
import { motion } from "motion/react";

export function ProcessFlowConnector() {
  return (
    <div
      className="hidden lg:block absolute top-14 left-10 right-10 h-[2px] bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-300 pointer-events-none"
      aria-hidden="true"
    >
      {/* Subtle Animated Progress Wave */}
      <motion.div
        animate={{
          x: ["-10%", "110%"],
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -translate-y-1/2 h-2 w-8 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]"
      />
    </div>
  );
}
