"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useCursor } from "./cursor-context";
import type { CursorState } from "@/lib/design-system/tokens";

export function CustomCursor() {
  const { cursorState, cursorText, setCursorState, resetCursor } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer follower ring (spring physics)
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    if (typeof window !== "undefined") {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isCoarse || prefersReduced) {
        setIsTouchDevice(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      resetCursor();
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global event delegation for data-cursor attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      const textEl = target.closest("[data-cursor-text]") as HTMLElement | null;

      if (cursorEl) {
        const state = cursorEl.getAttribute("data-cursor") as CursorState;
        const text = textEl?.getAttribute("data-cursor-text") || "";
        setCursorState(state || "button", text);
        return;
      }

      // Auto-detect standard links and buttons if not explicitly annotated
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, select");
      if (interactiveEl) {
        setCursorState("button");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const relatedTarget = e.relatedTarget as HTMLElement | null;
      const currentInteractive = target.closest("[data-cursor], a, button, [role='button'], input, textarea, select");
      const nextInteractive = relatedTarget?.closest("[data-cursor], a, button, [role='button'], input, textarea, select");

      if (currentInteractive && !nextInteractive) {
        resetCursor();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible, resetCursor, setCursorState]);

  if (isTouchDevice || cursorState === "hidden") {
    return null;
  }

  // Ring styling and size variants based on state
  const isLarge = cursorState === "explore" || cursorState === "view" || cursorState === "data" || cursorState === "drag";
  const isButton = cursorState === "button" || cursorState === "link";

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300 select-none"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Precision Center Dot (Direct Position) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorState === "data"
              ? "h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]"
              : isLarge
              ? "h-1.5 w-1.5 bg-cyan-300"
              : isButton
              ? "h-2 w-2 bg-blue-500 scale-125"
              : "h-1.5 w-1.5 bg-blue-500"
          }`}
        />
      </motion.div>

      {/* Smooth Spring Follower Ring / Morphing Badge */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: isLarge ? 1 : isButton ? 1.3 : 1,
            width: isLarge ? 76 : isButton ? 40 : 28,
            height: isLarge ? 76 : isButton ? 40 : 28,
            borderColor:
              cursorState === "data"
                ? "rgba(6, 182, 212, 0.8)"
                : cursorState === "explore"
                ? "rgba(34, 211, 238, 0.7)"
                : isButton
                ? "rgba(59, 130, 246, 0.6)"
                : "rgba(37, 99, 235, 0.35)",
            backgroundColor: isLarge
              ? "rgba(6, 19, 38, 0.85)"
              : isButton
              ? "rgba(37, 99, 235, 0.08)"
              : "rgba(37, 99, 235, 0.03)",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="rounded-full border backdrop-blur-[1px] flex items-center justify-center text-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isLarge && (
              <motion.span
                key={cursorText || cursorState}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300 px-1 leading-tight"
              >
                {cursorText || (cursorState === "data" ? "[DATA]" : cursorState)}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
