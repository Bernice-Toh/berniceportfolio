# PROJECT_GUIDE — Bernice Portfolio

## Project Overview

- **Name / purpose**: Folder-shaped portfolio site for Bernice Toh Jiayi (AI Applications student, ITE College Central). The signature design: a dark-pink tab toolbar popping above a light-pink content face, combining into a folder cut-out. Every page renders inside the face.
- **Tech stack**: Vite 5 · React 18 · react-router-dom 6. No backend, no database, no AI runtime (static site).
- **Run locally**: `npm install` then `npm run dev`
- **Build**: `npm run build` (outputs `dist/`)
- **Deploy**: Vercel (SPA rewrites in `vercel.json`). Live URL: not deployed yet — Fabian is verifying locally first. Production build last verified 2026-06-11.

## Folder Structure

- `src/pages/` — one JSX file per route, lazy-loaded.
- `src/components/` — shared reusable components; `src/components/Home/` holds Home-specific components.
- `src/styles/` — all CSS: `theme.css` (every design token), `global.css` (reset + base), `folder.css` (folder shell), `components.css` (shared components), `pages.css` (per-page layouts).
- `src/utils/` — `portfolioData.js`: section/route map + full project data (shared by router, QuickJump, Projects page).
- `src/hooks/` — `useReducedMotion.js`.
- `src/context/` — `QuickJumpContext.jsx`: open/close state for the QuickJump panel.
- `public/pdfs/` — downloadable testimonials and certificates.
- `src/assets/`, `src/ai/`, `src/db/` — not present: no static assets yet, no AI features, no database (modules inactive).

## Page and Route Map

| Route | Page file |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/projects` (+ `#slug` deep links) | `src/pages/Projects.jsx` |
| `/experience` | `src/pages/Experience.jsx` |
| `/recognitions` | `src/pages/Recognitions.jsx` |
| `/testimonials` | `src/pages/Testimonials.jsx` |
| `/skills` | `src/pages/Skills.jsx` |
| `/education` | `src/pages/Education.jsx` |
| `*` | redirect to `/` |

Routing lives in `src/App.jsx` only.

## Component Registry

- `FolderShell.jsx` — the folder: tab toolbar (NavLinks + sliding active pill), light-pink face, glow art layer, internal scroll area, Suspense boundary, QuickJump mount. Used by: every route (layout).
- `QuickJump.jsx` — slide-in searchable panel (pages + projects), keyboard accessible. Used by: shell; opened from Home CTA.
- `PetalCanvas.jsx` — seeded drifting-petal canvas (Home only), reduced-motion aware, pauses on hidden tab. Used by: FolderShell on `/`.
- `ParticleButton.jsx` — primary CTA with decorative particle burst. Used by: Home.
- `LoadingDots.jsx` — bouncing-dots Suspense fallback. Used by: FolderShell.
- `SectionIntro.jsx` — title + lead page header (`display` prop = oversized title; `mega` prop = ~3x display variant added 2026-06-12; eyebrow pill removed 2026-06-11). Used by: Projects, Experience, Recognitions (mega), Education.
- `Home/HeroCards.jsx` — stacked document cards in the hero. Used by: Home.
- `Projects/ProjectFilter.jsx` — sticky left rail: search box + per-category filter buttons with counts. Used by: Projects.
- `Projects/ProjectModal.jsx` — full-screen "open file" overlay: image + key info left, full story right; Esc/backdrop close. Used by: Projects.
- `Testimonials/RotatingTitle.jsx` — "Testimonial from" header with source pill rotating every 4 s (Internship Supervisor / ITE Lecturer / Secondary School), reduced-motion aware. Used by: Testimonials.
- `Skills/SkillsetHero.jsx` — giant SKILLSETS wordmark + lead (draggable pills removed 2026-06-12, replaced by GravityPills). Used by: Skills.
- `Skills/GravityPills.jsx` — 2x-size tag pills that drop with a bouncy staggered gravity animation (right-weighted distribution) and settle along the page bottom behind all content (z-index 0). Pills stay interactive: grabbable/tossable, dragged pill lifts above siblings so pills pile without clipping; reduced-motion collapses the drop via global rule; smaller sizing ≤820px. Used by: Skills.

## Color Theme Reference (`src/styles/theme.css`)

- Primary: `--paper`, `--ink`, `--ink-soft`, `--ink-faint`, `--pink-50…400`, `--pink-accent`, `--pink-deep`, `--glow`.
- Folder: `--folder-back`, `--folder-back-2`, `--face`, `--face-2`, `--desk`, `--tab-ink`, `--tab-ink-strong`.
- Secondary (Peachy Delight, accents only): `--mint`, `--mint-soft`, `--peach`, `--peach-soft`, `--blush`, `--blush-soft`, `--rose`, `--mauve`, `--mauve-soft`, `--mauve-deep`.
- Featured-award accents (added 2026-06-12): `--coral`, `--gold`, `--gold-deep`, `--gold-glow`; plus `--text-mega`, `--tracking-airy`, `--shadow-feature`, `--shadow-pill-depth`.
- Plus typography scale (`--text-*`, `--weight-*`, `--leading-*`), spacing (`--space-1…8`), radii (`--radius-*`), shadows (`--shadow-*`), motion (`--ease-out`, `--ease-in-out`, `--dur-*`).
- Known exception: the toolbar's curved-corner SVG data-URI in `folder.css` hardcodes the folder gradient hexes (SVG data-URIs cannot read CSS variables). Keep in sync with `--folder-back`/`--folder-back-2`.

## Environment Variables

None required.

## Known Limitations and TODOs

- **LinkedIn URL**: `LINKS.linkedin` in `src/utils/portfolioData.js` is a placeholder. Replace with Bernice's real profile URL.
- Profile photo and per-project images not yet provided; design works without them.
- Naming: site uses "Edusave Certificate of Academic Achievement 2022" (per Recognition list + certificate PDF); the source doc's Education section called it "Edusave Merit Bursary 2022". Confirm with Bernice.
- QuickJump panel has light dialog semantics (Escape + backdrop close, roving option highlight) but no full focus trap.
- Root-level source PDFs/DOCX, `brainstorms/` and `dist/` were removed 2026-06-11 (all were git/deploy-ignored; certificates/testimonials live in `public/pdfs/`).
- 2026-06-11 redesign: home hero "Bernice's Folder", 4 awards, QuickJump grouped Pages/Projects; Projects = filter rail + image placeholders + full-screen modal; Experience title "More than you expect" (OSDP moved to Education "Life at ITE"); Recognitions = Crafted.artt 3rd-place hero + other awards (certificates open in new tab, no downloads); Testimonials rotating header, PDFs open in new tab; Skills SKILLSETS hero + Scikit-Learn, TensorFlow, Premiere Pro, Premiere Rush.
- Project card/modal images are placeholders (accent gradients); swap in real screenshots when available.
