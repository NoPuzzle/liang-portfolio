# Design QA — Midnight Systems Portfolio

- Source visual truth: `design-reference/midnight-systems-reference.png`
- Desktop implementation: `qa/implementation-desktop-viewport-v2.png`
- Mobile implementation: `qa/implementation-mobile-390x844.png`
- Full-view comparison: `qa/desktop-comparison-v6.png`
- Focused mobile evidence: `qa/implementation-mobile-mid-v2.png`, `qa/implementation-mobile-lower-v2.png`
- Desktop viewport: 1600 × 1000 CSS px at device scale factor 1
- Source pixels: 1600 × 1000
- Implementation pixels: 1600 × 1000
- Comparison normalization: source and implementation were each scaled to 800 × 500 and stacked in one 800 × 1000 comparison image
- State: homepage, dark theme, no overlays

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: Geist Sans and Geist Mono closely match the source's modern system-sans and monospaced metadata pairing. Display weight, condensed line height, muted name treatment, uppercase labels, and mobile wrapping remain legible and consistent.
- Spacing and layout rhythm: the hero, two featured research cards, engagements, and academic service now share the first desktop viewport. Borders, card density, shell width, section gaps, and responsive stacking follow the source composition.
- Colors and visual tokens: the near-black canvas, deep navy surfaces, cobalt accents, cyan metadata, muted blue-gray type, and low-contrast borders match the selected direction with sufficient contrast.
- Image quality and asset fidelity: the technical grid and orbital motif use the project-owned raster asset `public/assets/midnight-systems-background.png`; it is sharp at the desktop viewport, loads successfully, and has no placeholder or missing-image state.
- Copy and content: role, institution, AI focus, Imperial/EPFL research path, SWIX, LITune, HIRE, AI for Good, ITU-T SG13, SIGMOD, reviewer service, and external profile links render as intended.
- Responsiveness: 390 × 844 mobile testing shows no horizontal overflow. The hero, profile panel, research cards, activity list, service list, and footer stack cleanly.
- Interaction and accessibility: the Research navigation link scrolls to `#research`; all primary navigation and external profile/publication links have valid destinations; keyboard focus styling and reduced-motion handling are present.
- Browser checks: no broken images and no browser console warnings or errors were observed on desktop or mobile.

## Comparison History

### Iteration 1

- Earlier finding [P1]: three equal research cards occupied the desktop content region and pushed engagements and academic service below the first viewport, weakening the selected source's research/industry/service balance.
- Fix: changed the content region to two featured cards (SWIX and HIRE), moved LITune into a compact supporting row, and placed engagements plus academic service in the right column.
- Post-fix evidence: `qa/implementation-desktop-viewport-v2.png` and `qa/desktop-comparison-v6.png` show all four primary sections in the first 1600 × 1000 viewport.

### Iteration 2

- Earlier finding [P2]: responsive behavior had not yet been visually verified below the desktop breakpoint.
- Fix: tested 390 × 844, captured the hero/profile, research, and engagement/service regions, and verified computed page width against viewport width.
- Post-fix evidence: `qa/implementation-mobile-390x844.png`, `qa/implementation-mobile-mid-v2.png`, and `qa/implementation-mobile-lower-v2.png` show a clean single-column layout with no horizontal overflow.

## Focused Region Comparison

- Hero/profile: display text weight, muted name, cyan eyebrow, deep panel, role metadata, and background arc treatment were checked at desktop and mobile sizes.
- Research/activity/service: card border weight, metadata scale, vertical density, accent colors, and the two-column-to-single-column transition were checked in the desktop comparison and mobile region captures.

## Follow-up Polish

- [P3] The implementation retains a compact working header and includes the LITune supporting row, while the selected preview crop focuses more tightly on the hero and two research cards. These are intentional content and navigation enhancements and do not change the chosen visual direction.

## Implementation Checklist

- [x] Match selected dark visual system
- [x] Preserve source hierarchy and first-viewport balance
- [x] Use durable project-owned imagery
- [x] Verify desktop and mobile rendering
- [x] Verify navigation and external links
- [x] Check browser console and broken assets
- [x] Pass build, lint, and rendered HTML tests

final result: passed
