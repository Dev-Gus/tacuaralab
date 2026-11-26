# Design system

Approved palette (unchanged): Paper `#F6F4ED`, Surface `#FFFFFF`, Ink `#202B27`, Muted `#58655D`, Bamboo `#2F6048`, Line `#CDD4CA`.
System fonts only; no downloads. Content is capped at 72rem with 16px mobile / 32px larger-screen gutters. Spacing follows the 4px base. All primary content starts at the header logo's left edge; paragraph widths are limited to about 60ch without centering narrow wrappers.

## Logo mark and favicons

The shared ES/EN header pairs the supplied inline SVG cane mark (28px tall, 8px gap) with real HTML text spelled exactly "Tacuara Lab", without a trailing period. Both form one link to the current language's Home. The mark is decorative: `aria-hidden="true"`, no title; the HTML brand text remains the link's accessible name. Preserve the supplied geometry; adjust only the viewBox if needed to prevent clipping. The wordmark has weight 700.

Use Bamboo `#2F6048` for primary green and Paper `#F6F4ED` for cream. No dark green or leaf tokens exist in the palette: retain the artwork fallbacks `#0B4A37` (cane joints), `#5FA777` (header leaf) and `#A8D8B0` (favicon leaf). These artwork colors do not change UI tokens.

The favicon uses the separately supplied thicker cane and larger leaf on a rounded Bamboo badge (64×64 viewBox, radius 14, an icon-only exception to the UI radius rule). `public/favicon.svg` is the source; generate `favicon-32.png` (32×32) and `apple-touch-icon.png` (180×180) once with the existing sharp dependency and commit the outputs. The shared head links all three; no build step or client JavaScript is needed.

## Header and labels

Navigation uses the mono stack, uppercase labels, 0.1em tracking and no filled background. The active page retains `aria-current`, Ink text and a 2px Bamboo underline offset by 6px. The language link uses the same type and a 1px Line divider. Below 1024px, brand and language share the first row and all five navigation links share the second row. At widths up to 640px, navigation uses 0.6875rem with 0.04em tracking; links never wrap and retain 44px minimum height and width.

Eyebrows use Muted, the mono stack, 0.75rem type, uppercase and 0.14em tracking. Closing-band labels use Paper. The mono stack is `ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`.

## Type scale

All headings use weight 800, -0.035em tracking and line height 0.98–1.05, preserving sentence case. Home H1: `clamp(2.75rem, 9vw, 6rem)`. Other H1s: `clamp(2.5rem, 7vw, 4.5rem)`. H2: `clamp(2rem, 4.5vw, 3.25rem)`. Row and project titles: `clamp(1.5rem, 3vw, 2rem)`. Closing H2s grow to 4rem. Body: fluid 1.0625–1.125rem, line height 1.6. Package prices: 2.5rem, weight 800; list prices remain struck through.

## Sections and rows

Content sections use a 1px Line top rule and `clamp(4rem, 8vw, 7rem)` vertical padding. Hero content has no top rule. Home has a single left-aligned hero stack, with a 34rem tagline and 1.5rem action gap. Its four mono trust labels have top and bottom rules, four columns on desktop and two on mobile. The existing Surface token supplies the Home hero and process backgrounds.

Home benefits, package previews and process use numbered ruled rows: 4rem / 1fr / 1.2fr columns on desktop; number and title above the description on mobile. Numbers are decorative, mono, 0.75rem and Muted. Services process preserves its five complete sentences in an ordered list, with a number beside each sentence. Included/excluded items use unnumbered ruled lists. Extras, payment/ownership/credit and FAQ use label-or-question / text rows on desktop and stack on mobile.

Service packages are open flex columns, with a top rule, no enclosing box, and buttons aligned at the bottom with at least 1.5rem below the last list item. Projects use two open columns with top rules, no card padding or enclosing border, and existing 16:9 thumbnails with square corners and a 1px Line frame. About process retains its three numbered columns at 768px and stacks on mobile.

## Actions and bands

One filled primary action per section or independent service package. Buttons use Bamboo with Paper text, weight 700, square corners, 3.5rem minimum height and 1.75rem horizontal padding. Outline buttons use a 1px Bamboo border and the same dimensions. Text links keep their existing arrows and destinations. Keyboard outlines remain 3px Bamboo with 4px offset.

Home, Services and Projects end in a full-width Bamboo band outside the content container, with content aligned inside the shared container. Text and secondary links use Paper; the inverted button uses Paper with Bamboo text and square corners. Focus outlines in these bands use Paper.

No shadows, gradients, animations or transitions. Images have square corners; existing form inputs retain their 6px radius.

## About portrait and Contact

The original portrait lives at `src/assets/about-gus.jpg`; Astro generates 480w/800w WebP with explicit dimensions. Desktop layout starts at 768px: text left, 400px portrait right aligned with the heading. Mobile order is heading, portrait (max 360px), text. Portrait ratio is 4:5.

Contact details use three ruled rows: WhatsApp, phone, location; labels and values align in columns at 768px. The form uses an open wrapper and a filled submit button; its behavior is unchanged. About, Contact and case studies inherit shared typography, buttons, labels and section spacing without edits to their page components.
