# Docstician — Landing Page

Marketing landing page for **Docstician**, an AI-powered clinical speech-to-text
documentation assistant for licensed clinicians (physiotherapists, physicians,
and dentists). The site explains the product, tells its story, and collects
early-access sign-ups while the product is in active development.

Built as a premium, animation-rich single-page experience with a small set of
supporting content pages.

---

## Tech stack

| Concern        | Choice |
| -------------- | ------ |
| Framework      | [React 19](https://react.dev/) |
| Build tool     | [Vite 5](https://vite.dev/) |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@theme`) |
| Animation      | [GSAP](https://gsap.com/) + ScrollTrigger |
| Routing        | [React Router v7](https://reactrouter.com/) |
| Icons          | [lucide-react](https://lucide.dev/) |
| Linting        | [Oxlint](https://oxc.rs/) |

> **Node version:** the project is pinned to Vite 5 for compatibility with
> Node 20.17. If you upgrade to Node 20.19+ / 22.12+ you can move to a newer
> Vite if desired.

---

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

The dev server prints its local URL (default `http://localhost:5173`). If that
port is taken, run with an explicit free port, e.g. `npm run dev -- --port 5188`.

---

## Environment variables

Create a `.env` file (see `.env.example`):

```bash
# The Google Form the "Join the waitlist" buttons link to
VITE_WAITLIST_FORM_URL=https://forms.gle/YOUR_GOOGLE_FORM_ID
```

All "Join the waitlist" CTAs across the site open this URL in a new tab. If the
variable is not set, a placeholder URL is used.

---

## Routes

The site is a small multi-page app served through React Router:

| Path             | Page |
| ---------------- | ---- |
| `/`              | Home — the full marketing landing page |
| `/how-it-works`  | Detailed "How it works" page (clinician journey + AI pipeline) |
| `/privacy`       | Privacy Policy (placeholder template) |
| `/terms`         | Terms of Service (placeholder template) |
| `*`              | 404 Not Found |

Because this is a client-side–routed SPA, deep links to `/privacy`, `/terms`,
etc. require the host to fall back to `index.html`. A `public/_redirects` file is
included for Netlify-style hosts; configure an equivalent rewrite for other
platforms (e.g. a rewrite of all paths to `/index.html`).

---

## Project structure

```
src/
├── main.jsx                     # App entry (BrowserRouter)
├── App.jsx                      # Route definitions
├── index.css                    # Tailwind theme, design tokens, base styles
│
├── lib/
│   ├── constants.js             # Nav/legal links, waitlist URL, section copy
│   └── gsapSetup.js             # GSAP + ScrollTrigger registration
│
├── hooks/
│   ├── useScrollReveal.js       # Staggered scroll-reveal for [data-reveal]
│   └── useMagneticHover.js      # Magnetic-pull hover effect for CTAs
│
├── components/
│   ├── layout/
│   │   ├── Layout.jsx           # Navbar + Outlet + Footer shell
│   │   ├── Navbar.jsx           # Sticky nav + mobile blur-overlay menu
│   │   ├── Footer.jsx
│   │   └── ScrollManager.jsx    # Scroll-to-top / hash scrolling on route change
│   │
│   ├── sections/                # Home-page sections
│   │   ├── Hero.jsx
│   │   ├── hero/HeroProductVisual.jsx   # Live waveform + typed SOAPIER note
│   │   ├── hero/soapierNote.js          # Full SOAPIER clerking document data
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ProductPreview.jsx
│   │   ├── Trust.jsx
│   │   └── FinalCta.jsx
│   │
│   └── ui/                      # Reusable primitives
│       ├── Logo.jsx, NavLink.jsx, MagneticButton.jsx
│       ├── SectionHeading.jsx, PageHero.jsx, LegalSection.jsx
│       ├── GlowOrb.jsx, StatusPill.jsx, CountUpStat.jsx
│
└── pages/
    ├── Home.jsx
    ├── HowItWorksPage.jsx
    ├── Privacy.jsx
    ├── Terms.jsx
    └── NotFound.jsx
```

---

## Design system

Design tokens live in `src/index.css` under Tailwind's `@theme` block:

- **Surfaces** — `ink-*` (deep clinical-dark navy/near-black backgrounds)
- **Text** — `mist-*` (cool light greys)
- **Accents** — `teal-*` (signature AI/clinical cyan) and `violet-*` (secondary)
- **Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (note UI)

Shared component classes (`.glass-panel`, `.btn-primary`, `.eyebrow`,
`.text-gradient`, glow helpers, etc.) are defined in the same file.

---

## Animations

- Scroll-triggered reveals via GSAP ScrollTrigger (`useScrollReveal`).
- The hero features a live "consultation" panel with an animated waveform and a
  draft-note panel that **types out a full SOAPIER physiotherapy clerking
  document** line by line, auto-scrolling as it writes.
- Magnetic hover on primary CTAs, animated count-up metrics, and section
  timelines.
- All motion respects `prefers-reduced-motion` — reduced-motion users get the
  content revealed statically without the animations.

---

## Notes

- The product is **in active development**; the primary conversion action is
  joining the waitlist (Google Form), not signing up for the product.
- The Privacy Policy and Terms of Service pages are **placeholder templates**
  and must be reviewed by qualified legal counsel before launch.
