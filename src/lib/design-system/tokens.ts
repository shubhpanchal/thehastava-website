/**
 * HASTAVA Interactive Design System Tokens
 * Phase 0: Foundation & Design System
 * 
 * Aesthetic Core: AI Laboratory + Data Infrastructure + Premium Digital Product
 * Visual Principle: DATA → INTELLIGENCE → AUTOMATION → ACTION → RESULTS
 */

export const colors = {
  // Brand & Semantic Primary
  hastava: {
    navy: '#061326',
    deep: '#030712',
    slate: '#0B1528',
    surface: '#0F1D32',
    surfaceElevated: '#142540',
    blue: '#2563EB',
    indigo: '#4F46E5',
    cyan: '#06B6D4',
    cyanLight: '#22D3EE',
    emerald: '#10B981',
    amber: '#F59E0B',
    rose: '#F43F5E',
  },
  // Surface tokens (Dark / Technical Base)
  dark: {
    background: '#030712',
    foreground: '#F8FAFC',
    surface: '#0B1528',
    surfaceElevated: '#0F203C',
    surfaceOverlay: 'rgba(11, 21, 40, 0.85)',
    border: '#1E293B',
    borderSubtle: '#0F1C30',
    borderGlow: 'rgba(37, 99, 235, 0.3)',
    borderGlowCyan: 'rgba(6, 182, 212, 0.35)',
    muted: '#1E293B',
    mutedForeground: '#94A3B8',
  },
  // Surface tokens (Light Mode / Content)
  light: {
    background: '#FFFFFF',
    foreground: '#0F172A',
    surface: '#F8FAFC',
    surfaceElevated: '#FFFFFF',
    surfaceOverlay: 'rgba(255, 255, 255, 0.9)',
    border: '#E2E8F0',
    borderSubtle: '#F1F5F9',
    borderGlow: 'rgba(37, 99, 235, 0.2)',
    borderGlowCyan: 'rgba(6, 182, 212, 0.2)',
    muted: '#F1F5F9',
    mutedForeground: '#64748B',
  },
  // Telemetry & Status Indicators
  telemetry: {
    idle: '#64748B',
    active: '#3B82F6',
    processing: '#06B6D4',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#F43F5E',
  },
} as const;

export const typography = {
  fonts: {
    sans: 'var(--font-sans)',
    display: 'var(--font-display)',
    mono: 'var(--font-mono)',
  },
  scales: {
    display2xl: 'clamp(3.25rem, 5.5vw, 5.5rem)',
    displayXl: 'clamp(2.5rem, 4.2vw, 4.25rem)',
    displayLg: 'clamp(2rem, 3.2vw, 3.25rem)',
    h1: 'clamp(1.85rem, 2.75vw, 2.75rem)',
    h2: 'clamp(1.5rem, 2.25vw, 2.25rem)',
    h3: 'clamp(1.25rem, 1.75vw, 1.75rem)',
    h4: 'clamp(1.1rem, 1.35vw, 1.35rem)',
    bodyLg: 'clamp(1.0625rem, 1.25vw, 1.25rem)',
    bodyBase: '1rem',
    bodySm: '0.875rem',
    bodyXs: '0.75rem',
    monoBase: '0.875rem',
    monoSm: '0.75rem',
    monoXs: '0.6875rem',
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.04em',
    wider: '0.08em',
    widest: '0.16em',
    mono: '0.02em',
  },
  lineHeights: {
    tight: 1.05,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.65,
    loose: 1.8,
  },
} as const;

export const spacing = {
  pageMaxWidth: '1440px',
  contentMaxWidth: '1120px',
  narrowMaxWidth: '768px',
  sections: {
    mobile: '4rem',
    tablet: '6rem',
    desktop: '8rem',
    hero: '10rem',
  },
  containers: {
    paddingMobile: '1.25rem',
    paddingTablet: '2rem',
    paddingDesktop: '2.5rem',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const motionTokens = {
  durations: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    deliberate: 0.8,
  },
  easings: {
    standard: [0.2, 0, 0, 1] as const,
    emphasis: [0.16, 1, 0.3, 1] as const,
    smooth: [0.25, 0.1, 0.25, 1] as const,
    exit: [0.7, 0, 0.84, 0] as const,
  },
  springs: {
    snappy: { type: 'spring', stiffness: 400, damping: 30 } as const,
    gentle: { type: 'spring', stiffness: 200, damping: 25 } as const,
    bouncy: { type: 'spring', stiffness: 300, damping: 15 } as const,
  },
} as const;

export const cursorStates = [
  'default',
  'link',
  'button',
  'explore',
  'drag',
  'view',
  'data',
  'text',
  'hidden',
] as const;

export type CursorState = (typeof cursorStates)[number];
