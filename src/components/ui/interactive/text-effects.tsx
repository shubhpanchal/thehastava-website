"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const GLYPHS = "010101_<>[]{}/*#XYZ$!%&~";

export interface ScrambleTextProps {
  text: string;
  trigger?: "hover" | "view" | "both";
  speed?: number; // ms per iteration
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
}

export function ScrambleText({
  text,
  trigger = "hover",
  speed = 25,
  className = "",
  as: Component = "span",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  const scramble = useCallback(() => {
    if (isScrambling || prefersReduced) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, speed);
  }, [isScrambling, prefersReduced, text, speed]);

  useEffect(() => {
    if ((trigger === "view" || trigger === "both") && isInView) {
      scramble();
    }
  }, [isInView, trigger, scramble]);

  const handleMouseEnter = () => {
    if (trigger === "hover" || trigger === "both") {
      scramble();
    }
  };

  return (
    <Component
      ref={ref as React.Ref<never>}
      onMouseEnter={handleMouseEnter}
      className={`font-mono select-none ${className}`}
    >
      {displayText}
    </Component>
  );
}

// Staggered Character / Word Split Reveal
export interface TextSplitProps {
  text: string;
  splitBy?: "words" | "chars";
  stagger?: number;
  delay?: number;
  className?: string;
}

export function TextSplit({
  text,
  splitBy = "words",
  stagger = 0.04,
  delay = 0,
  className = "",
}: TextSplitProps) {
  const prefersReduced = useReducedMotion();
  const tokens = splitBy === "words" ? text.split(" ") : text.split("");

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {tokens.map((token, idx) => (
        <motion.span
          key={`${token}-${idx}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="inline-block"
        >
          {token}
          {splitBy === "words" && idx < tokens.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
