# Tacuara Lab: portfolio site

## Goal
Website for Tacuara Lab, a one-person web studio in Tacuarembó, Uruguay.
Sells websites to small businesses in Uruguay first, remote clients later.
The site must build trust fast, show proof, and make contact effortless.

## Decisions
- Name: Tacuara Lab (never "Labs"). Domain: tacuaralab.com. Instagram: @tacuara.lab
- Stack: Astro + Tailwind, React islands only where interactive, hosted on Cloudflare Workers static assets
- Languages: Spanish primary (/es), English secondary (/en), real routes, not a toggle
- Tone: plain, direct Spanish (voseo), no jargon
- Contact: WhatsApp first (wa.me/59898871858 with prefilled message), real form second
- Pricing: 2-3 packages, low "launch" prices at first (TBD)

## Pages
Home, Projects (grid + one case study page per project), Services & pricing, About, Contact

## Must-haves
- Founder name + photo + Tacuarembó story (the "tacuara" meaning)
- No "coming soon" promises; only list what is offered today
- Uruguay in titles/meta descriptions, sitemap, structured data, social preview images
- Fast (Lighthouse 90+), mobile first
- Privacy-friendly analytics

## Status
- [x] Lighthouse mobile after housekeeping: Performance 100, Accessibility 100, Best Practices 100, SEO 100.
- [x] Cleanup: removed the header brand period and relaxed the Node engine requirement to >=22.23.4; deployment Node pin remains 24.22.1.
- [x] Task 1: Astro + Tailwind foundation configured with strict TypeScript and static output; old skeleton removed. No React.
- [x] Task 2: Five placeholder pages per language, localized real routes, and root redirect.
- [x] Task 3: Reusable color, spacing, system font, button, and card tokens. Palette approved by owner; see DESIGN.md.
- [x] Task 4: Shared header/footer, mobile-first visible navigation, active states, skip link, and plain same-page language links.
- [x] Task 5: Cloudflare Workers static assets configured in `wrangler.jsonc` (no Worker script); build `npm run build`, deploy `npx wrangler deploy`, output `dist`, Node 24.22.1. Custom 404 handling enabled. Settings documented in README.md; build verified on 2026-11-17.
- [x] Preview: https://tacuara-lab.tacuaralab.workers.dev. Lighthouse mobile baseline before housekeeping: Performance 100, Accessibility 100, Best Practices 96, SEO 91.
- [x] Phase 1: foundation (setup, design system, layout, deploy readiness). Build passes; Astro check reports zero errors/warnings; all ten localized routes return HTTP 200 with correct language and no client scripts. Root redirect output and same-page language navigation verified. Palette approved; see DESIGN.md.
- [ ] Phase 2: content and trust (About, services, pricing, case study template)
- [ ] Phase 3: features (form, WhatsApp, estimator, ES/EN, SEO, analytics)
- [ ] Phase 4: launch checklist

## Rules for agents
Read this file first. Update Status when you finish something. Commit after each task.
