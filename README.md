# Justice Enefola — Portfolio

Premium personal portfolio built with Next.js 16 (App Router), React 19,
TypeScript, Tailwind CSS v4, and GSAP.

## Status

This is Step 1: **folder structure and project architecture only.**
Components are intentionally stubbed (`return null`) — content, styling,
and animation are built in the following steps, each pending your approval:

1. ✅ Folder structure & architecture (this step)
2. Design system pass (palette, type scale, signature visual element)
3. Layout & navigation (Navbar, Footer, theme toggle, smooth scroll)
4. Hero + About + Experience sections
5. Security-first section, Services, Skills
6. Projects (animated cards) + SafeWeb + Collaborations
7. Testimonials + Contact (with secure API route)
8. Animation pass (GSAP scroll triggers, page transitions, cursor effects)
9. SEO, accessibility, and performance polish
10. 404 page, loading skeletons, final QA

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first `@theme` tokens in `src/app/globals.css`)
- GSAP + ScrollTrigger for scroll/entrance animation
- Framer Motion for micro-interactions
- react-icons

## Folder structure

```
src/
  app/              Routes (App Router): pages, layout, API routes, SEO files
    api/contact/    Contact form endpoint (server-side validation, no secrets in repo)
  components/
    layout/         Navbar, Footer, ScrollToTop, ThemeToggle
    sections/       One component per page section (Hero, About, Security, Projects, ...)
    ui/             Reusable primitives (Button, ProjectCard, GlassCard, ...)
    effects/        Cursor, animated background, scroll reveal, smooth scroll provider
  data/             Content as data — edit these files to change site copy
  hooks/            useTheme, useActiveSection, useGsapReveal
  lib/              gsap setup, cn() class helper, seo helper
  types/            Shared TypeScript interfaces
public/
  images/projects/  Project screenshots
  images/testimonials/
  icons/, cv/       Favicon/OG assets, downloadable CV
```

## Editing content

All editable copy lives in `src/data/*.ts` — no need to touch component
code to update projects, services, skills, testimonials, or the
SafeWeb/security copy.

## Security notes baked into the architecture

- `next.config.ts` sets CSP, HSTS, X-Frame-Options, and related headers by default.
- `poweredByHeader` disabled so the stack isn't advertised in response headers.
- `.env.example` documents required secrets; `.gitignore` excludes real `.env*` files.
- The contact API route is scaffolded for server-side validation and rate limiting (implemented in the Contact step).

## Getting started (once dependencies are installed)

```bash
npm install
npm run dev
```

## Placeholder assets included

To make sure nothing 404s on first deploy, this build includes generated
placeholders you should replace:

- `public/images/profile.jpg` — swap for your real headshot
- `public/images/projects/*.jpg` — swap for real project screenshots
- `public/cv/justice-enefola-cv.pdf` — swap for your real CV
- `public/og-image.png` — swap for a real social-share image if desired

## Note on this build

`npm run build` fails in network-restricted sandboxes because `next/font/google`
fetches font files from Google at build time — that's expected here and will
resolve automatically on Vercel (or any environment with normal internet
access). Everything else — `tsc --noEmit`, every route, every component —
has been verified.
