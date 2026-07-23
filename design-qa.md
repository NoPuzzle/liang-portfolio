# Design QA — Portfolio Redesign

- Source visual truth: `design-reference/midnight-systems-reference.png`
- Desktop implementation: `qa/redesign-desktop-1600-v1.png`
- Desktop education region: `qa/redesign-education-1600-v1.png`
- Desktop research region: `qa/redesign-research-1600-v1.png`
- Mobile implementation: `qa/redesign-mobile-390-v1.png`
- Mobile education region: `qa/redesign-mobile-education-390-v1.png`
- Full-view comparison: `qa/redesign-comparison-1600-v2.png`
- Desktop viewport: 1600 × 1000 CSS px at device scale factor 1
- Mobile viewport: 390 × 844 CSS px at device scale factor 1
- Source pixels: 1600 × 1000
- Comparison normalization: source and implementation are shown together at equal 800 × 500 dimensions in one 1600 × 1000 canvas
- State: homepage, dark theme, no overlays

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: the redesigned display headline, oversized section statements, monospaced metadata, tight leading, and muted name treatment preserve the selected midnight-systems character while creating a stronger editorial hierarchy.
- Spacing and layout rhythm: the hero keeps the source's asymmetric title-and-signal-panel composition. The featured doctoral record, offset research grid, and trajectory timeline use deliberate negative space without leaving content visually disconnected.
- Colors and visual tokens: the near-black canvas, deep navy surfaces, cyan signal color, restrained cobalt accents, and low-contrast borders remain consistent across every section and pass visual contrast checks.
- Image quality and asset fidelity: the project-owned raster background `public/assets/midnight-systems-background.png` loads sharply, has no placeholder state, and supports the technical grid and orbital motif without overpowering the text.
- Copy and content: the current EPFL/DIAS postdoctoral role, Imperial and EPFL research path, SWIX, LITune, HIRE, public engagements, service, and doctoral record render in the intended hierarchy. Graduate and undergraduate records are intentionally omitted. No private contact or address data is shown.
- Responsiveness: at 390 × 844 the page width equals the viewport width, the hero wraps cleanly, the signal panel becomes a full-width block, and the doctoral card remains readable without horizontal overflow.
- Interaction and accessibility: Education and Trajectory navigation links scroll to their corresponding anchors; all publication, engagement, and profile links have valid destinations and safe external-link attributes. Focus and reduced-motion styles are present.
- Browser checks: the background asset is loaded and no console warnings or errors were observed during desktop and mobile interaction checks.

## Comparison History

### Iteration 1

- Finding [P1]: the previous page felt visually ordinary and omitted the education history, leaving the personal profile incomplete.
- Fix: rebuilt the visual hierarchy around an editorial hero and live signal panel, added a four-record education archive, reorganized publications into an asymmetric research grid, and introduced a clearer career trajectory.
- Post-fix evidence: `qa/redesign-desktop-1600-v1.png`, `qa/redesign-education-1600-v1.png`, and `qa/redesign-research-1600-v1.png`.

### Iteration 2

- Finding [P2]: the new long-form hierarchy required explicit narrow-screen validation, especially the oversized headline and degree titles.
- Fix: tested the production page at 390 × 844, verified computed document width against the viewport, exercised the Education anchor, and captured the education region.
- Post-fix evidence: `qa/redesign-mobile-390-v1.png` and `qa/redesign-mobile-education-390-v1.png` show a clean single-column layout with no horizontal overflow.

### Iteration 3

- Finding [P0]: the current-role panel incorrectly identified Liang Liang as working at CMHK.
- Fix: removed every current-employment reference to CMHK and aligned the profile with the user-confirmed EPFL/DIAS postdoctoral role, research focus, metadata, profile rail, and trajectory.
- Post-fix evidence: refreshed `qa/redesign-desktop-1600-v1.png`, `qa/redesign-mobile-390-v1.png`, and `qa/redesign-comparison-1600-v2.png`; browser text checks contain no `China Mobile` or `CMHK` strings.

### Iteration 4

- Finding [P1]: graduate and undergraduate education records remained visible after the profile scope was narrowed.
- Fix: removed both master's records and the undergraduate record, changed the education section to one featured doctoral record, and removed graduate institutions from the career trajectory.
- Post-fix evidence: refreshed desktop and mobile education screenshots confirm that only the Imperial College London PhD is displayed.

## Focused Region Comparison

- Hero and signal panel: checked headline line breaks, name treatment, metadata scale, border weight, role hierarchy, statistics, and background arc treatment against the reference.
- Education archive: checked the single doctoral record for readable dates, institution prominence, balanced wide-card layout, and mobile wrapping.
- Research and trajectory: checked card asymmetry, title scale, metadata density, link placement, timeline flow, and desktop-to-mobile stacking.

## Follow-up Polish

- [P3] The implementation carries more verified content than the source crop, so later sections intentionally extend the system rather than reproduce the reference's exact first-screen information density.

## Implementation Checklist

- [x] Match the selected midnight visual system
- [x] Strengthen hierarchy and presentation quality
- [x] Add verified education history
- [x] Use durable project-owned imagery
- [x] Verify desktop and mobile rendering
- [x] Verify navigation and external links
- [x] Check browser console and broken assets
- [x] Pass build, lint, and rendered HTML tests

final result: passed
