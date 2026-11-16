# Tacuara Lab — Phase 1

Static Astro + Tailwind foundation with strict TypeScript. No React, client-side
scripts, real marketing content, forms, analytics, or pricing in this phase.

## Local development

Use Node **24.22.1** (see `.node-version`) and npm.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

`@emnapi/core` is explicitly installed for the WebAssembly runtime used by
Astro's checker on Windows.

## Routes

- Spanish: `/es`, `/es/proyectos`, `/es/servicios`, `/es/sobre`, `/es/contacto`.
- English: `/en`, `/en/projects`, `/en/services`, `/en/about`, `/en/contact`.
- `/` redirects to `/es`. Astro emits an HTML redirect for local static previews;
  Cloudflare Pages uses `public/_redirects` for an HTTP 302.
- Every language link points to the matching page using `src/lib/pages.ts`.

## Cloudflare Pages settings

- Framework preset: Astro.
- Root directory: repository root.
- Install dependencies: `npm ci` (or Pages' automatic npm installation).
- Build command: **`npm run build`**.
- Build output directory: **`dist`**.
- Build environment: **`NODE_VERSION=24.22.1`**, also pinned in `.node-version`.
- Static output: no Cloudflare adapter, Worker, bindings, or secrets required.

`public/_redirects` is copied to `dist/_redirects`. A minimal `404.html`
prevents Pages' default SPA fallback for unknown URLs.

No deployment or Git push is part of this task. Keep the live site's production
branch on `main`. If reviewing on Pages, use an isolated preview deployment for
`astro-rebuild`; do not change the production branch or attach a live domain.

## Design and scope

See `DESIGN.md` for the proposed palette (pending approval), system font,
spacing scale, and shared styles. Page content remains placeholder-only.
Phase 2–4 features in `PROJECT.md` are outside this task.
