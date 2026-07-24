# Design QA — Portfolio Redesign

- Source visual truth: `design-reference/midnight-systems-reference.png`
- Supplemental visual target: `public/assets/academic-systems-background.png` (user-directed brighter academic revision)
- Desktop implementation: `qa/redesign-desktop-1600-v1.png`
- Latest content implementation: `qa/content-update-desktop-1280.jpg`
- Desktop education region: `qa/redesign-education-1600-v1.png`
- Desktop research region: `qa/redesign-research-1600-v1.png`
- Mobile implementation: `qa/redesign-mobile-390-v1.png`
- Mobile education region: `qa/redesign-mobile-education-390-v1.png`
- Full-view comparison: `qa/redesign-comparison-1600-v2.png`
- Desktop viewport: 1600 × 1000 CSS px at device scale factor 1
- Mobile viewport: 390 × 844 CSS px at device scale factor 1
- Source pixels: 1600 × 1000
- Implementation pixels: 1600 × 1000 desktop and 390 × 844 mobile at device scale factor 1
- Academic background pixels: 1586 × 992
- Comparison normalization: source and implementation are shown together at equal 800 × 500 dimensions in one 1600 × 1000 canvas
- State: homepage, slate academic theme, no overlays

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: Geist Mono now carries the complete interface, including display headlines, body copy, metadata, cards, and navigation. Reduced headline sizes, calmer tracking, and slightly taller line-height maintain readability while creating a research-dossier character.
- Spacing and layout rhythm: the opening viewport uses a compact academic identity header followed by a two-column dossier: linked recent activity on the left, with the current Innovation Research Institute role, prior EPFL appointment, and doctoral education presented as three independent cards on the right. Later research and trajectory sections preserve their asymmetric structure.
- Colors and visual tokens: the canvas is a brighter slate-blue drafting-paper field with dark translucent research cards, paper-white text, muted cyan annotations, and visible but restrained rules.
- Image quality and asset fidelity: the generated project-owned raster background `public/assets/academic-systems-background.png` provides paper grain, fine coordinate grid, graph traces, and measurement marks without readable text or placeholder content.
- Copy and content: the current AI Frontier Technology Research Manager role at China Mobile (Hong Kong) Innovation Research Institute is supported by the official AI for Good speaker profile; EPFL is correctly presented as a separate prior postdoctoral appointment. The Imperial PhD, SWIX, LITune, HIRE, public engagements, and service remain visible. Graduate and undergraduate records are intentionally omitted. No private contact or address data is shown.
- Responsiveness: at 390 × 844 the page width equals the viewport width, the hero wraps cleanly, the three profile cards stack independently, and the two-column external-profile link grid remains readable without horizontal overflow. The academic background now renders in a fixed viewport layer rather than scaling against the full mobile document height.
- Interaction and accessibility: Education and Research navigation links scroll to their corresponding anchors; all three first-screen activity rows expose visible `OPEN ↗` affordances and point to official AI for Good pages with safe external-link attributes. The footer adds LinkedIn, a precise Google Scholar publication search, ORCID, a verified Semantic Scholar author record, ITU profile, and GitHub. Focus and reduced-motion styles are present.
- Browser checks: the latest 1280 × 800 desktop and 390 × 844 mobile renders have no horizontal overflow or browser warnings/errors. DOM inspection confirms that current position, previous appointment, and doctoral education are sibling cards rather than nested content.

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
- Fix: removed the unsupported CMHK employer label and retained the then-confirmed EPFL/DIAS record. Iteration 6 later introduced the distinct Innovation Research Institute using an official 2026 source.
- Post-fix evidence: refreshed `qa/redesign-desktop-1600-v1.png`, `qa/redesign-mobile-390-v1.png`, and `qa/redesign-comparison-1600-v2.png`; the incorrect `CMHK` acronym remains absent.

### Iteration 4

- Finding [P1]: graduate and undergraduate education records remained visible after the profile scope was narrowed.
- Fix: removed both master's records and the undergraduate record, changed the education section to one featured doctoral record, and removed graduate institutions from the career trajectory.
- Post-fix evidence: refreshed desktop and mobile education screenshots confirm that only the Imperial College London PhD is displayed.

### Iteration 5

- Finding [P1]: the portfolio remained too dark and corporate, and recent activity appeared too late in the reading order.
- Fix: replaced the background with a brighter academic drafting-paper texture, switched the complete interface to Geist Mono, and rebuilt the opening viewport so activity leads on the left while position and doctoral education are grouped on the right.
- Post-fix evidence: refreshed desktop, mobile, and side-by-side comparison screenshots verify the new first-screen hierarchy and academic visual system.

### Iteration 6

- Finding [P0]: the first screen omitted the current Innovation Research Institute role and still presented EPFL as the active position. Activity rows were clickable but did not visually advertise their destinations.
- Fix: used the official AI for Good speaker and programme pages to identify the current role as AI Frontier Technology Research Manager at China Mobile (Hong Kong) Innovation Research Institute, moved EPFL to previous appointment, added both confirmed July 2026 sessions, and gave each activity a visible `OPEN ↗` affordance.
- Sources: `https://aiforgood.itu.int/speaker/liang-liang/`, `https://aiforgood.itu.int/event/advancing-ai-in-networks/`, and `https://aiforgood.itu.int/event/innovate-for-impact/`.
- Post-fix evidence: `qa/content-update-desktop-1280.jpg`; rendered HTML tests assert the current role, organization, prior EPFL appointment, and all three official destinations.

### Iteration 7

- Finding [P2]: the prior EPFL appointment was visually nested inside the current-position card, and the footer did not provide a complete academic-profile route.
- Fix: promoted EPFL to a standalone previous-appointment card and added Google Scholar, ORCID, and Semantic Scholar alongside the existing professional links. The Google Scholar destination is deliberately a precise SWIX author search because an exact personal Scholar profile ID could not be verified.
- Post-fix evidence: desktop and mobile browser checks confirm three independent profile cards, six external profile links, exact viewport-width rendering, and no console warnings or errors. Rendered HTML tests assert the standalone appointment card and both new academic destinations.

### Iteration 8

- Finding [P1]: on mobile Safari, changing the body background attachment to scrolling caused the landscape background image to size against the full document height. The result was an excessively enlarged, blurred crop behind the page.
- Fix: moved the image into a fixed, non-interactive `body::before` viewport layer with a `100svh` minimum height, kept the page overlay above it, and removed `background-attachment` entirely.
- Post-fix evidence: regression tests require the fixed viewport layer and reject any reintroduction of `background-attachment`.

## Focused Region Comparison

- Hero and signal panel: checked headline line breaks, name treatment, metadata scale, border weight, role hierarchy, statistics, and background arc treatment against the reference.
- Education archive: checked the single doctoral record for readable dates, institution prominence, balanced wide-card layout, and mobile wrapping.
- Research and trajectory: checked card asymmetry, title scale, metadata density, link placement, timeline flow, and desktop-to-mobile stacking.

## Follow-up Polish

- [P3] The implementation is intentionally lighter than the original midnight reference. This is a user-directed change; the academic grid, rule weight, and cyan annotation system preserve continuity while the new slate field improves openness.

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
