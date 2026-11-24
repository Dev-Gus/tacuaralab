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

After pricing or copy changes, run `npm ci` and `npm run build`; prepare the capture tool with `npm exec --yes --package=playwright -- playwright --version` (Google Chrome must be installed).
Run `node scripts/capture-case-study-screenshots.mjs` to regenerate the four 390×844 @2x screenshots and three card covers from the local build; set `CHROME_PATH` or `PLAYWRIGHT_MODULE` if needed.
Add `--covers-only` to refresh just the card covers. Tacuara Lab covers capture the complete header and hero at 1024px wide, ending after the hero buttons; the full capture fits inside 800×450 on the existing page background without cutting text.
Run `npm run build` again and review both languages before committing the updated WebP files in `src/assets/tacuara-lab/` and `src/assets/project-covers/`.

`INDEXABLE` in `src/data/site.ts` defaults to `false` (noindex, blocked robots, no sitemap); flip to `true` in Phase 4 only to allow indexing and emit `/sitemap.xml` with ES/EN alternates.

## Routes

- Spanish: `/es`, `/es/proyectos`, `/es/servicios`, `/es/sobre`, `/es/contacto`.
- English: `/en`, `/en/projects`, `/en/services`, `/en/about`, `/en/contact`.
- `/` redirects to `/es`. Astro emits an HTML redirect for local static previews;
  Cloudflare Workers static assets use `public/_redirects` for an HTTP 302.
- Every language link points to the matching page using `src/lib/pages.ts`.

## Cloudflare Workers static assets

- Root directory: repository root.
- Install dependencies: `npm ci`.
- Build command: **`npm run build`**.
- Deploy command: **`npx wrangler deploy`**.
- Build output directory: **`dist`**.
- Build environment: **`NODE_VERSION=24.22.1`**, also pinned in `.node-version`.
- Static output: no Cloudflare adapter, Worker script, or bindings required.

The root `wrangler.jsonc` configures the `tacuara-lab` Worker with compatibility
date `2026-11-17` and `assets.directory` set to `./dist`. It has no `main`
entry point: Cloudflare serves the static build directly. See the
[Workers static assets documentation](https://developers.cloudflare.com/workers/static-assets/).

`public/_redirects` is copied to `dist/_redirects`. Astro generates `dist/404.html`
from `src/pages/404.astro`; `assets.not_found_handling` is set to `404-page` so
unknown URLs return that page with HTTP 404.

Run the build command before deploying. For Git-connected Workers builds, select
`astro-rebuild` and use the build and deploy commands above.

## Design and scope

See `DESIGN.md` for the proposed palette (pending approval), system font,
spacing scale, and shared styles. Page content remains placeholder-only.
Phase 2–4 features in `PROJECT.md` are outside this task.
