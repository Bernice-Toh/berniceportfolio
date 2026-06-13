# Product

## Register

brand

## Users

Recruiters, internship supervisors, lecturers and scholarship panels in Singapore reviewing Bernice Toh Jiayi (Higher Nitec in AI Applications, ITE College Central). They arrive from a resume link, skim on a laptop or phone in under three minutes, and decide whether the work feels credible and the person feels capable.

## Product Purpose

A static single-page-app portfolio that presents Bernice's projects, internship, awards, testimonials, skills and education as papers inside one signature folder. Success: a visitor remembers "the folder site", finds the capstone (ThreatVision) and the NHG internship within two clicks, and opens at least one certificate or testimonial PDF.

## Brand Personality

Playful, polished, diligent. The folder conceit is stationery made digital: warm pink paper, tidy tabs, small delights (petals, particle bursts, gravity pills) that never get in the way of reading. Motion should feel like iOS: calm, springy, physical; never busy or gimmicky.

## Anti-references

- Generic SaaS landing-page grammar (hero metric blocks, gradient text, glass cards everywhere).
- Dark "developer terminal" portfolios; this is warm and personal, not techy-cool.
- Template portfolio themes where the folder would become just another card grid.

## Design Principles

1. The folder is sacred: every surface keeps the tab-toolbar + light-pink face language; new UI must read as paper, tab, or desk.
2. Color theme is fixed: the existing pink/peach/mint palette in `src/styles/theme.css` is the identity; refine light and depth, never replace hues.
3. Motion is physical: exponential ease-outs and gentle springs, transform/opacity/filter only, every animation interruptible and reduced-motion aware.
4. Delight stays in the margins: decorative layers (petals, pills, particles) sit behind or beside content and never block reading or clicking.
5. Content first: a skimming recruiter must never wait on an animation to read a fact.

## Accessibility & Inclusion

- Maintain WCAG AA contrast (tab ink on pink toolbar already tuned for AA; keep body text ≥ 4.5:1).
- Full `prefers-reduced-motion` alternatives for every animation (global rule + JS hooks via `useReducedMotion`).
- Keyboard: visible focus rings, Escape/backdrop close on overlays, QuickJump roving highlight.
