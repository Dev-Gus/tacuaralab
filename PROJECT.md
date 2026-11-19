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
- Decisions (Phase 2)
  - Services: two fixed packages plus one by-quote option. Presencia (1 page) and Sitio completo (up to 5 pages). A medida has no listed price and is quoted per project.
  - English package names are Presence / Full site / Custom; Spanish names stay Presencia / Sitio completo / A medida.
  - Presencia: list US$250 / launch US$200. 1 page (about, services, hours, map), WhatsApp + tap-to-call buttons, 2 revision rounds, 30 days support, 7 business days, Spanish only, no contact form.
  - Sitio completo: list US$450 / launch US$350. Everything in Presencia plus up to 5 pages, contact form, Google Business Profile guide, optional ES/EN version (same pages translated, no new content), 3 revision rounds, 60 days support, 15 business days.
  - Both include: custom mobile-first design, text wordmark (full logo quoted separately), copy written from a short interview, .com domain and hosting included the first year (domain in the client's name; .com.uy passed at cost, verify), email forwarding, SEO basics + local business markup + social preview image, basic privacy-friendly analytics.
  - Extras: simple extra page US$50. Optional maintenance US$15/month or US$150/year (about 2 small edits per month), shown as a separate line.
  - Launch pricing: shown as regular vs launch price side by side. First 5 clients, in exchange for a testimonial and permission to show the work in the portfolio. No live counter. List prices are unverified until real clients pay them; review after client #5.
  - Terms: 50% to start / 50% on delivery. Client owns domain and content; files handed over on request. Small "Sitio por Tacuara Lab" footer credit. Timelines start when the client sends the requested material.
  - Not included: logo design, long-form copy, professional photography, store/booking/logins (A medida), social media/ads, mailbox hosting, English version in Presencia, redesign after approval, ranking guarantees.
  - Prices shown in USD only; FAQ says payment is in pesos at the exchange rate on the day of payment. Do not show peso prices.
  - Open items: the owner is not registered yet and needs an accountant before the first payment (registration, whether prices include IVA, which exchange rate applies, how to invoice a 50/50 payment). Niche is undecided. The pricing page must NOT state anything about IVA/taxes until the accountant answers, and must not go live (Phase 4) until this is resolved.
  - Phase 3 to-do: build and test a reusable client contact form template before client #1.
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
- [x] Phase 2: Services and pricing page (ES/EN). Verified with `npm ci`, `npm run build`, and `npx astro check` (zero errors/warnings); both routes return HTTP 200, language links point to each other, and rendered pages have no client scripts, peso prices, IVA/tax mentions, incorrect brand spelling, or placeholder text.
- [ ] Phase 3: features (form, WhatsApp, estimator, ES/EN, SEO, analytics)
- [ ] Phase 4: launch checklist

## Rules for agents
Read this file first. Update Status when you finish something. Commit after each task.
