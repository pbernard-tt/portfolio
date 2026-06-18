# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Paul Bernard's personal developer portfolio — a static marketing site built with **Astro 5** + **Tailwind CSS v4**, output as static HTML/CSS and served by nginx in Docker. Designed to deploy on **Dokploy** via the bundled `Dockerfile`.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server at http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # serve the production build locally
```

There is no test suite or linter configured. Verify changes by building and viewing in a browser.

## Architecture

- **Content is decoupled from presentation.** All copy, links, projects, tags, and the tech stack live in `src/data/site.ts` as typed `const` objects. Components import from it and render — so routine content edits touch only that one file, never the components.
- **Pages compose components.** `src/pages/index.astro` is the single page; it stacks section components (`Hero`, `About`, `Work`, `Experience`, `Capabilities`, `Stack`, `Timeline`, `Contact`) inside `src/layouts/Layout.astro`. `SectionHead.astro` is a shared label/heading/lead block.
- **Design tokens live in `src/styles/global.css`** under Tailwind v4's `@theme` block (colors like `--color-blue`, fonts, radii, shadows) plus reusable `@layer components` classes (`.surface`, `.btn`, `.chip`, `.gradient-text`, `.container-x`, `.section`). Re-theme by editing tokens, not individual components.
- **Images go through `astro:assets`.** Source files in `src/assets/` (portrait) and `src/assets/logos/` (Konvelo, Vulkan, ConcordeApp) are imported and rendered with `<Image>`, which emits responsive optimized WebP at build time. Logo keys in `site.ts` (`konvelo`/`vulkan`/`concorde`) map to imports in `Work.astro`.

## Conventions / gotchas

- **Responsive grids must declare an explicit base column** (e.g. `grid-cols-1 md:grid-cols-3`). A bare `grid` with only a `sm:`/`lg:` column definition falls back to an implicit auto-sized column that can overflow the container on mobile. `html, body { overflow-x: hidden }` in `global.css` is a backstop, not a substitute.
- **Scroll-reveal**: elements with `data-reveal` fade in via the IntersectionObserver script in `Layout.astro` (respects `prefers-reduced-motion`). Add the attribute to opt a block in.
- Set the production domain in `astro.config.mjs` (`site:`) — it drives canonical and Open Graph URLs.

## Deployment (Dokploy)

`Dockerfile` is multi-stage: `node:22-alpine` builds the static site, `nginx:1.27-alpine` serves `/dist` using `nginx.conf` (gzip, asset caching, security headers, port 80). In Dokploy use build type **Dockerfile**, exposed **port 80**, add a domain for auto-HTTPS. No env vars or runtime services. See `README.md` for full steps.

- `portfolio-base.html` is the original single-file prototype, kept for reference only; excluded from the Docker build via `.dockerignore`.
