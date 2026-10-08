# HASTAVA Interactive Design System (v1.0)
**Phase 0: Foundation & Interactive Design System**

---

## 1. Vision & Core Philosophy

HASTAVA is an **AI, Data & Automation company**. The website is engineered as an interactive digital laboratory rather than a conventional marketing site.

### The Visual Thesis:
$$\text{DATA} \longrightarrow \text{INTELLIGENCE} \longrightarrow \text{AUTOMATION} \longrightarrow \text{ACTION} \longrightarrow \text{RESULTS}$$

### Aesthetic Archetypes:
1. **AI Laboratory**: Clean precision, dark base surfaces, glowing signal pathways, deterministic status feeds.
2. **Data Infrastructure**: Monospace telemetry readouts, low latency, structured schemas, pipeline nodes.
3. **Premium Digital Product**: Fluid micro-animations, subtle magnetic interactions, restrained typography, and accessible keyboard navigation.

---

## 2. Typography System

The typography system pairs high-legibility geometric sans fonts with high-precision monospace fonts for data values and system telemetry.

### Font Families:
- **Primary Sans / Body**: `Manrope` (`--font-sans`)
- **Technical Display**: `Space Grotesk` (`--font-display`)
- **Data / Telemetry / Code**: `JetBrains Mono` (`--font-mono`)

### Type Scale:
| Token / Component | Size / Clamp | Weight | Tracking | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `display-2xl` | `clamp(3.25rem, 5.5vw, 5.5rem)` | 800 (Extrabold) | `-0.04em` | Major Hero statements |
| `display-xl` | `clamp(2.5rem, 4.2vw, 4.25rem)` | 800 (Extrabold) | `-0.035em` | Primary section headers |
| `display-lg` | `clamp(2rem, 3.2vw, 3.25rem)` | 700 (Bold) | `-0.03em` | Feature headlines |
| `h1` | `clamp(1.85rem, 2.75vw, 2.75rem)` | 800 (Extrabold) | `-0.025em` | Page titles |
| `h2` | `clamp(1.5rem, 2.25vw, 2.25rem)` | 700 (Bold) | `-0.025em` | Section titles |
| `h3` | `clamp(1.25rem, 1.75vw, 1.75rem)` | 700 (Bold) | `-0.02em` | Card headlines |
| `h4` | `clamp(1.1rem, 1.35vw, 1.35rem)` | 600 (Semibold) | `-0.01em` | Subsection titles |
| `body-lg` | `clamp(1.0625rem, 1.25vw, 1.25rem)`| 400 (Normal) | `0em` | Lead paragraphs |
| `body` | `1rem (16px)` | 400 (Normal) | `0em` | Standard copy |
| `body-sm` | `0.875rem (14px)` | 400 (Normal) | `0em` | Secondary descriptions |
| `data-mono-base` | `0.875rem (14px)` | 500 (Medium) | `0.02em` | System logs, live code |
| `data-mono-sm` | `0.75rem (12px)` | 600 (Semibold) | `0.04em` | Telemetry readouts |
| `data-mono-xs` | `0.6875rem (11px)` | 700 (Bold) | `0.08em` | Node badges, status tags |

---

## 3. Color System

A restrained, high-contrast palette built for deep-space UI surfaces, electric signal accents, and deterministic telemetry status.

### Semantic Palette:
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `hastava-deep` | `#030712` | Root dark space background |
| `hastava-navy` | `#061326` | Laboratory panel background |
| `hastava-slate` | `#0B1528` | Elevated card & node surface |
| `hastava-surface-elevated` | `#0F203C` | Highlighted modal / hover surface |
| `hastava-blue` | `#2563EB` | Primary brand accent & active state |
| `hastava-cyan` | `#06B6D4` | Intelligence, data stream signal, pulse |
| `hastava-indigo` | `#4F46E5` | Automation engine & compute pipeline |
| `telemetry-success` | `#10B981` | Online status, completed execution |
| `telemetry-warning` | `#F59E0B` | Syncing, heavy queue, attention |
| `telemetry-error` | `#F43F5E` | Failed pipeline, disconnect |

---

## 4. Spacing, Grid & Layout System

- **Page Max Width**: `1440px` (`90rem` / `container-custom`)
- **Content Max Width**: `1120px` (`70rem` / `container-narrow`)
- **Narrow Max Width**: `768px` (`48rem`)
- **Section Vertical Spacing**:
  - Mobile: `py-12` (`3rem`)
  - Tablet: `py-16` to `py-20` (`4rem` – `5rem`)
  - Desktop: `py-24` to `py-28` (`6rem` – `7rem`)
- **Grid Layouts**: Flexible 12-column CSS grid system (`Grid`, `Stack`) with blueprint corner markers.

---

## 5. Motion Language & Tokens

Animations are **deliberate, controlled, and engineering-grade**. Never gratuitous.

### Timing Tokens:
- `--duration-instant`: `100ms` (hover state toggles, active taps)
- `--duration-fast`: `200ms` (dropdowns, tooltips, button morphs)
- `--duration-normal`: `350ms` (card reveals, section transitions)
- `--duration-slow`: `500ms` (data stream sweeps, major layouts)
- `--duration-deliberate`: `800ms` (diagram assembly, pipeline progress)

### Easing Tokens:
- `--ease-standard`: `cubic-bezier(0.2, 0, 0, 1)`
- `--ease-emphasis`: `cubic-bezier(0.16, 1, 0.3, 1)`
- `--ease-smooth`: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- `--ease-exit`: `cubic-bezier(0.7, 0, 0.84, 0)`

### Reduced Motion Guarantee:
When `prefers-reduced-motion: reduce` is detected:
- Motion loops and scroll animations are disabled.
- Transforms collapse to instant opacity transitions ($<10\text{ms}$).
- Usability and content hierarchy remain $100\%$ preserved.

---

## 6. Custom Cursor System

The custom cursor provides smooth, hardware-accelerated tracking with dynamic morphing states:

### Cursor States:
1. `default`: 6px precision cyan dot + 28px subtle spring follower ring.
2. `button` / `link`: Ring expands with blue tint and magnetic lock.
3. `explore`: 76px radar ring with monospace `EXPLORE` label.
4. `view`: 76px radar ring with monospace `VIEW` label.
5. `drag`: 76px ring with monospace `DRAG` label.
6. `data`: Precision bracketed `[DATA]` inspect mode.
7. `hidden`: Gracefully fades out when leaving viewport.

### Declarative Usage:
```tsx
<button data-cursor="button">Click Me</button>
<div data-cursor="explore" data-cursor-text="INSPECT">Hover Area</div>
<div data-cursor="data">System Node</div>
```
*Note: The cursor is automatically disabled on touch devices (`pointer: coarse`).*

---

## 7. Reusable Component Foundation

Located in `src/components/ui/`:

| Component | File | Key Features |
| :--- | :--- | :--- |
| `Heading`, `Text`, `DataText`, `Eyebrow` | `typography.tsx` | Responsive clamps, gradient text, monospace data telemetry, live ping badges. |
| `Button` | `button.tsx` | Variants: `primary`, `secondary`, `outline`, `ghost`, `cyan`, `glow`, `telemetry`. Sizes: `xs` to `xl`. Integrated cursor & loading. |
| `IconButton` | `icon-button.tsx` | Accessible tooltips, magnetic hover, round/square sizing. |
| `Card` | `card.tsx` | Variants: `bordered`, `elevated`, `interactive`, `laboratory`, `telemetry`. Corner bracket guides. |
| `Container`, `Section`, `Grid`, `Stack` | `layout-primitives.tsx` | Blueprint corner guides, responsive 12-col grids, flex alignment. |
| `Badge`, `Tag` | `badge.tsx` | Live signal dots, monospace code badges, semantic status tags. |
| `Divider` | `divider.tsx` | Technical labeled dividers `[01 // PIPELINE]`, glowing signal lines. |
| `Tooltip` | `tooltip.tsx` | Micro-tooltips with smooth spring transitions. |
| `Input` | `input.tsx` | Laboratory focus rings, validation feedback, monospace input mode. |
| `Step` | `step.tsx` | Monospace numbered workflow steps with glowing icons. |

---

## 8. Interactive Primitives

Located in `src/components/ui/interactive/`:

- **`ScrollReveal`**: Viewport-triggered progressive reveals (`up`, `down`, `left`, `right`, `scale`, `fade`).
- **`StaggerGroup` & `StaggerChild`**: Orchestrates child component cascades.
- **`Magnetic`**: Physics-based cursor attraction for buttons and icons.
- **`InteractiveCard`**: Dynamic mouse spotlight beam + 3D tilt tracking.
- **`AnimatedCounter`**: Smooth deceleration ticker for data metrics and stats.
- **`ScrambleText`**: Cybernetic AI matrix decoding cipher effect on hover or view.
- **`TextSplit`**: Staggered word/character entrance animation.
- **`HoverReveal`**: Contextual popovers and telemetry detail overlays.
- **`Parallax`**: Scroll-driven depth offset for background elements.

---

## 9. Data & System Visual Language Primitives

Located in `src/components/ui/system/`:

- **`SystemNode`**: Graph and pipeline node supporting the 5 stages (`source`, `model`, `engine`, `action`, `metric`) with live statuses (`idle`, `active`, `processing`, `success`, `warning`, `error`).
- **`DataConnector`**: Animated SVG/CSS connection wires with traveling signal packets and telemetry labels.
- **`StatusIndicator`**: Radar pulse status dot (`online`, `processing`, `syncing`, `idle`, `offline`, `error`).
- **`TelemetryBadge`**: Key-value data readout with monospace font, units, and delta indicators.
- **`ProcessingState`**: Step-by-step pipeline execution progress tracker with real-time spinners.

---

## 10. Performance & Accessibility Standards

- **GPU Acceleration**: Animations exclusively leverage `transform` and `opacity` with CSS `will-change` optimization.
- **Zero Layout Shift**: Strict layout sizing and dimension reservations prevent CLS.
- **WCAG AA Compliance**: High-contrast ratios on dark and light surfaces.
- **Focus Indicators**: Visible 2px focus rings (`:focus-visible`) for all interactive controls.
- **Mobile First**: All hover interactions have touch-first fallback equivalents.
