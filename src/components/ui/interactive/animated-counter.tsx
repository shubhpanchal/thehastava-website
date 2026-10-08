"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export interface AnimatedCounterProps {
  value: number;
  duration?: number; // duration in seconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1.8,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string>(
    prefersReduced ? value.toFixed(decimals) : "0"
  );

  useEffect(() => {
    if (!isInView || prefersReduced) {
      if (prefersReduced) setDisplayValue(value.toFixed(decimals));
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const startValue = 0;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease-out cubic function for engineering deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * easeOut;

      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue.toFixed(decimals));
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, decimals, prefersReduced]);

  return (
    <span ref={ref} className={`font-mono font-bold select-all ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
