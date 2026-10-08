"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { CursorState } from "@/lib/design-system/tokens";

interface CursorContextType {
  cursorState: CursorState;
  cursorText: string;
  setCursorState: (state: CursorState, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorState, setCursorStateInternal] = useState<CursorState>("default");
  const [cursorText, setCursorText] = useState<string>("");

  const setCursorState = useCallback((state: CursorState, text = "") => {
    setCursorStateInternal(state);
    setCursorText(text);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorStateInternal("default");
    setCursorText("");
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorState,
        cursorText,
        setCursorState,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
