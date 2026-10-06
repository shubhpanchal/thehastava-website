# HASTAVA Website Master Plan

**Version:** 1.0  
**Status:** Approved direction  
**Repository branch:** `rebrand/ai-data-automation`

## 1. Brand position

HASTAVA is an AI, Data & Automation partner for businesses.

Primary message:

> Turn Manual Work Into Growth.

Descriptor:

> AI | DATA | AUTOMATION  
> FOR BUSINESSES

The site must sell business outcomes first and technology second.

## 2. Primary website goals

1. Establish HASTAVA as a credible B2B technology/automation partner.
2. Help prospects quickly recognize their own operational problems.
3. Turn networking conversations into website-driven discovery calls.
4. Showcase real solution work without overstating unverified outcomes.
5. Provide a foundation that can grow into case studies, service pages, resources, and lead-generation workflows.

## 3. Approved sitemap

### Core
- `/` — Home
- `/services` — Services overview
- `/case-studies` — Case studies
- `/case-studies/harivishva` — Harivishva showcase
- `/about` — About HASTAVA
- `/contact` — Discovery/contact

### Supporting
- `/privacy-policy`
- `/terms-and-conditions`

Future routes may be added only through the change-control process.

## 4. Homepage structure

### Hero
Headline: **Turn Manual Work Into Growth.**

Supporting copy:
AI, data, and automation solutions that eliminate repetitive work, connect systems, and help businesses operate faster.

Primary CTA:
**Book a Discovery Call**

Secondary CTA:
**See What We Automate**

Hero visual:
A manual-input → HASTAVA intelligence → business-output workflow.

### What We Do
Four pillars:
- AI Automation
- Data & Analytics
- Document Intelligence
- Business Systems

### Real Solutions. Real Impact.
Featured HASTAVA showcase:
**Harivishva**

Must clearly distinguish demo/showcase status from verified production outcomes.

### What Can We Automate?
Examples:
- Sales
- Operations
- Finance
- Customer Service
- Management

### How We Work
1. Discover
2. Identify
3. Build
4. Deploy
5. Improve

### Why Businesses Choose HASTAVA
- Business-first
- Practical AI
- Data expertise
- Built for you

### Final CTA
> Have a process that feels unnecessarily manual?

CTA:
**Book a Discovery Call**

## 5. Page rules

### Services
Sell problems and outcomes, then explain the supporting technology.

### Case studies
Use:
**Challenge → Solution → Outcome/Status**

Never publish invented metrics.

### About
Build founder credibility through practical engineering + automation expertise. Keep it concise.

### Contact
Make the CTA about discussing a process/problem, not a generic contact form.

## 6. Visual system

### Colors
- Deep navy: `#061326`
- Primary blue: `#2563EB`
- Indigo: `#4F46E5`
- Cyan accent: `#06B6D4`
- Neutral surfaces: white / slate-50 / slate-200

### Design language
- Premium B2B technology
- Clean geometric typography
- Large whitespace
- Dark hero sections
- Blue/indigo/cyan gradients used selectively
- Subtle glass/translucent surfaces
- Product/workflow visualizations instead of generic AI stock imagery

Do not introduce:
- generic robot imagery
- excessive gradients
- unnecessary 3D
- decorative visual noise
- handicraft/export branding

## 7. Animation policy

Use animation to communicate hierarchy and interaction, not decoration.

Approved:
- Motion reveal-on-scroll
- Staggered card entrances
- Subtle hover elevation
- Button/icon micro-interactions
- Gentle floating hero elements
- Scroll-linked effects where useful

Rules:
- Keep durations restrained.
- Respect `prefers-reduced-motion`.
- Avoid animation on every element.
- Avoid motion that blocks reading or interaction.

## 8. Approved libraries

### Core
- Next.js
- React
- Tailwind CSS

### UI motion
- **Motion** via `motion/react`

### Icons
- **Lucide React**

Add additional libraries only when a concrete design/engineering need exists.

Potential later additions:
- React Hook Form + Zod for the production contact form
- A carousel library only when a real carousel is required

Avoid adding large UI/3D libraries without a justified requirement.

## 9. Technical principles

- Keep the site fast and SEO-friendly.
- Prefer server components.
- Use client components only where interaction or animation requires them.
- Keep reusable UI primitives in `src/components`.
- Keep content/config separate from presentation where practical.
- Avoid vendor lock-in where a small local component is sufficient.
- Maintain accessibility and keyboard navigation.
- Keep responsive behavior intentional across mobile, tablet, and desktop.

## 10. Repository state

Development branch:
`rebrand/ai-data-automation`

The branch contains the first rebrand pass. `main` remains protected from this in-progress redesign.

## 11. Definition of done

A page is complete only when:
- visual hierarchy matches the approved design direction
- responsive layouts work
- all links are functional
- animation is intentional and accessible
- metadata is present
- no legacy handicraft messaging remains
- no unverified business claims are presented as facts
- build/lint passes locally
- the page has been reviewed at desktop and mobile widths

## 12. Change control

Before adding a new page, major section, design language, or dependency:
1. Confirm the requirement.
2. Check whether it fits the approved sitemap and positioning.
3. Decide whether it belongs in the current release or a future phase.
4. Update this document before implementation when the scope changes.

**The source of truth is this document plus the approved logo/brand identity.**
