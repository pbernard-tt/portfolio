# Paul Bernard — Portfolio

A premium, fast, content-driven developer portfolio. Built with **Astro 5** + **Tailwind CSS v4**, shipped as static HTML/CSS (zero JS framework runtime) and deployed via Docker (nginx) — designed to deploy cleanly on **Dokploy**.

## Why this stack

- **Astro** — content-first, ships pure HTML/CSS by default (one tiny scroll-reveal script). Fast, future-proof, component-based.
- **Tailwind CSS v4** — design tokens live in one file (`src/styles/global.css`), so re-theming is trivial.
- **Static output + nginx** — no runtime to manage, tiny image, the most reliable Dokploy deployment path.
- **Optimized images** — `astro:assets` converts the source portrait/logos to responsive WebP at build time.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → ./dist
npm run preview    # preview the production build
```

## Customizing content

**All copy, links, projects, tags, and the tech stack live in [`src/data/site.ts`](src/data/site.ts).** Edit that one file — components read from it. No component changes needed for routine content updates.

- **Images** — replace files in `src/assets/` (portrait) and `src/assets/logos/` (brand logos). Keep filenames or update the imports in `Hero.astro` / `Work.astro`.
- **Theme** — brand colors, fonts, radii, and shadows are CSS variables under `@theme` in `src/styles/global.css`.
- **Production domain** — set `site` in `astro.config.mjs` (drives canonical + Open Graph URLs).

## Project structure

```
src/
  data/site.ts          # ← single source of truth for all content
  styles/global.css     # design tokens (@theme) + reusable component classes
  layouts/Layout.astro  # <head>, SEO/OG meta, fonts, scroll-reveal script
  components/            # Nav, Hero, About, Work, Experience, Capabilities,
                         #   Stack, Timeline, Contact, SectionHead
  pages/index.astro      # composes the sections
  assets/                # portrait + logos (build-time optimized)
public/                  # favicon, static passthrough
Dockerfile               # multi-stage: node build → nginx serve
nginx.conf               # gzip, caching, security headers
```

## Deploying on Dokploy

This repo ships a production `Dockerfile`, so use Dokploy's **Application → Dockerfile** build type (most reliable; no Nixpacks guesswork).

1. Push this repo to GitHub/GitLab (or use a Git provider Dokploy can reach).
2. In Dokploy: **Create → Application**.
3. **Provider:** point it at this repository and branch.
4. **Build Type:** `Dockerfile` (path: `./Dockerfile`).
5. **Port:** `80` — the nginx container listens on 80. Set this as the container/exposed port so Dokploy's Traefik proxy routes to it.
6. **Domain:** add your domain under the app's Domains tab; Dokploy provisions HTTPS via Let's Encrypt automatically.
7. **Deploy.** Subsequent pushes redeploy (enable auto-deploy / webhook if desired).

No environment variables or runtime services are required — it's a static site.

> **Tip:** To verify the container locally before deploying:
> ```bash
> docker build -t portfolio .
> docker run --rm -p 8080:80 portfolio   # → http://localhost:8080
> ```

## Notes

- `portfolio-base.html` is the original single-file prototype, kept for reference. It is excluded from the Docker build via `.dockerignore` and is not part of the site.
