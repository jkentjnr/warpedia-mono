# Warpedia — docs

Foundational research and design notes for warpedia.org — an open, primary-source-rich, encyclopedic resource for the human record of war. A war-specific peer to Wikipedia and the broader Wikimedia ecosystem.

## Contents

**Anchor**
- [`charter.md`](charter.md) — what warpedia is, what it is not, and the principles all other decisions must align to. Read this first.

**Research**
- [`research/landscape-and-viability.md`](research/landscape-and-viability.md) — what already exists, where the gaps are, and an honest assessment of whether warpedia.org has room to exist.
- [`research/source-licensing.md`](research/source-licensing.md) — what content from existing archives can lawfully be absorbed, under what licenses, with what caveats.
- [`research/manuals-and-reference.md`](research/manuals-and-reference.md) — adds technical / reference material (pilot's notes, field manuals, after-action reports) as a second content dimension alongside personal narrative.
- [`research/content-dimensions.md`](research/content-dimensions.md) — comprehensive map of all content dimensions: casualty/commemoration, geospatial, propaganda, war art, POW/internment, war crimes, intelligence, treaties, underrepresented voices, etc.

**Data Design**
- [`data-model.md`](data-model.md) — first-cut entity model (Item, Person, Conflict, Event, Unit, Place, Collection, Contribution, Award, Cemetery, Camp, Memorial, Theme, Trial, Treaty).
- [`metadata/dublin-core-profile.md`](metadata/dublin-core-profile.md) — formal Dublin Core Application Profile: which DCMI terms warpedia uses, with what cardinality and crosswalks (EDM, IIIF, schema.org).
- [`metadata/taxonomies.md`](metadata/taxonomies.md) — controlled vocabularies referenced by the profile: item types, roles, conflicts, theatres, place types, rights statements, status.

**Visual Design**
- [`design/website-mockup-guide.md`](design/website-mockup-guide.md) — prescriptive guide for mocking up any new screen on warpedia.org: sitemap, top-level IA, URL strategy, page templates per entity type, faceted browse, hub pages, multi-perspective UI, sensitive-content rules, citation, accessibility, and the step-by-step mock-up workflow. Read this before drawing a new screen.
- [`design/sample-data.md`](design/sample-data.md) — fictional-but-coherent cast for design mock-ups: three conflict clusters (WW1, WW2, Vietnam) with cross-referenced people, units, places, equipment, items, themes, plus canonical sample copy for captions, sensitivity notices, AI-disclosure flags, citations, and empty states.
- [`design/system/README.md`](design/system/README.md) — the Warpedia design system: brand context, voice, visual foundations (colour, type, spacing, motion), iconography, license-tier and AI-disclosure conventions. Source for everything below.
- [`design/system/SKILL.md`](design/system/SKILL.md) — portable Claude Skill version of the system: the working agreement when designing a new screen.
- [`design/system/colors_and_type.css`](design/system/colors_and_type.css) — all design tokens (color, type, spacing, radius, shadow, motion) as CSS custom properties + the `.wp-*` semantic component classes referenced by every UI kit.
- UI kit prototypes (interactive React + Babel, served from GitHub Pages):
  - [public website](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) — home, browse, item view, article. Source: [`design/system/ui_kits/website/`](design/system/ui_kits/website/).
  - [contribution flow](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/contribute/) — Sarah's 12-screen flow. Source: [`design/system/ui_kits/contribute/`](design/system/ui_kits/contribute/).
  - [editorial review queue](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/) — curator workbench. Source: [`design/system/ui_kits/editorial/`](design/system/ui_kits/editorial/).
- The full rendered system, including token-preview cards, lives at **[jkentjnr.github.io/warpedia-mono](https://jkentjnr.github.io/warpedia-mono/)**.

**Infrastructure**
- [`infrastructure/storage.md`](infrastructure/storage.md) — four-tier storage architecture: self-owned deep archive (Glacier), warm working master (B2), CDN-fronted hot tier (R2), and free public-preservation mirrors (Internet Archive, Wikimedia Commons). With cost projections and a worked end-to-end example.

**Process**
- [`process/contribution-flow.md`](process/contribution-flow.md) — end-to-end contribution flow: who can contribute what, the screen-by-screen UX walkthrough, the technical pipeline behind submit, editorial review, sensitive-material handling, and abuse mitigations.

## Status

Pre-build research and design phase. No implementation yet.
