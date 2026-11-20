# Phase 1 design system

Approved palette. Warm ivory and bamboo green connect
the name to a grounded, natural visual direction; charcoal keeps the interface clear.

- Paper: `#F6F4ED` — page background.
- Surface: `#FFFFFF` — cards.
- Ink: `#202B27` — headings and body text.
- Muted: `#58655D` — secondary text.
- Bamboo: `#2F6048` — buttons, active navigation, focus outlines.
- Line: `#CDD4CA` — decorative borders.

One system sans-serif stack: system-ui, Apple system, BlinkMacSystemFont,
Segoe UI, sans-serif. No font downloads or third-party font requests.

Spacing uses Tailwind's 4px base. Preferred steps: 4, 8, 12, 16, 24, 32,
48, 64, 96px (`1`, `2`, `3`, `4`, `6`, `8`, `12`, `16`, `24`).
Content is capped at 72rem, with 16px mobile / 32px larger-screen gutters.

Reusable classes in `src/styles/global.css`:

- `button`: green fill, white text, 48px minimum height, 8px radius.
- `button button-secondary`: transparent fill, green border and text.
- `card`: white surface, thin border, 16px radius, 24–32px padding.
- `site-container`, `nav-link`, `skip-link`: shared layout and navigation helpers.

Keyboard focus is visible. Navigation wraps on small screens and stays visible
without scripts or a menu toggle. No custom animations or transitions.

## Home composition

Home reuses the existing container, buttons, cards, palette and H1 scale.
Home-only tokens: `--text-home-heading` (H2, 2–3rem fluid),
`--spacing-home-section` (4–6rem fluid), and `--shadow-home-card`
(0 8px 24px, approved Ink at 5% opacity). Card headings are 1.25rem.
Layered sections blend Surface and Paper; no additional colors are introduced.
Layouts use one column on mobile, expanding at 48rem and 64rem.
Hover states change approved colors without transitions, movement or animation;
content remains fully visible with reduced motion or JavaScript disabled.
