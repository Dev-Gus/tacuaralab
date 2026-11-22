# Design system

Approved palette (unchanged): Paper `#F6F4ED`, Surface `#FFFFFF`, Ink `#202B27`, Muted `#58655D`, Bamboo `#2F6048`, Line `#CDD4CA`.
System fonts only; no downloads. Content is capped at 72rem with 16px mobile / 32px larger-screen gutters. Spacing follows the 4px base.

## Section pattern

Content sections use a 1px Line top rule and fluid 4rem mobile / 6rem desktop vertical padding. A small uppercase Bamboo eyebrow precedes the heading (0.8125rem, 0.08em letter spacing). Body paragraphs have a maximum width of 60ch. Hero content keeps its existing wording and uses an open layout without a top rule.

## Open items and project containers

Content groups, benefits, package previews and service packages use open items: a thin top rule, bold title, and body text. Benefits and package previews become two columns at 768px. About process items are three numbered columns at 768px, stacked on mobile, preserving each complete sentence.
Only project items use a full bordered container: 1px Line, 6px radius, generous padding, no shadow. Hover and focus-within change the border to Bamboo. Home package links remain open items as explicitly requested.

## Actions and radius

One filled primary action per section or independent service package. Primary buttons use Bamboo with Paper text and a 48px minimum height. Secondary actions use Bamboo text links with a decorative arrow and underline on hover/focus. Links preserve their original destinations. Touch targets are at least 44px and keyboard outlines remain 3px Bamboo with 4px offset.
Buttons, images, inputs, navigation and bordered containers have a maximum radius of 6px. No shadows, gradients, animations or transitions.

## Type scale

H1: clamp(2.25rem, 5vw, 3.5rem). H2: clamp(1.75rem, 3.5vw, 2.5rem). Both use 1.08 line height and -0.02em tracking. H3: 1.25rem, 1.3 line height. Body: fluid 1.0625–1.125rem, 1.6 line height. About process text: 1.25rem.

## About portrait and Contact

The original portrait lives at `src/assets/about-gus.jpg`; Astro generates 480w/800w WebP with explicit dimensions. Desktop layout starts at 768px: text left, 400px portrait right aligned with the heading. Mobile order is heading, portrait (max 360px), text. Portrait ratio is 4:5.
Contact details use three ruled rows: WhatsApp, phone, location; labels and values align in columns at 768px. The form uses an open wrapper and a filled submit button; its behavior is unchanged. No extra background tint is introduced because no darker Paper token exists in the approved palette.
