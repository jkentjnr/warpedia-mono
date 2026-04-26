# UI Kit · Warpedia public website (warpedia.org)

The reading and browsing surface — what an unauthenticated visitor lands on. Encyclopedic posture, catalogue card vocabulary, archival typography.

Sits inside the system — see the [design system README](docs/design/system/README.md) for tokens, voice, and visual rules, and [SKILL.md](docs/design/system/SKILL.md) for the working agreement.

## Screens

- [index.html](docs/design/system/ui_kits/website/index.html) — interactive prototype: home → browse → item view → article. Click anything; transitions are page-internal.

## Components (in [components.jsx](docs/design/system/ui_kits/website/components.jsx))

- `<TopBar />` — wordmark, primary nav, search, contribute CTA.
- `<HomeHero />` — landing: stat tile, "what is Warpedia" prose, three feature columns.
- `<BrowseList />` — dense item list with type code, title, date, tier badge.
- `<Filters />` — left rail: conflict, item type, license tier, language.
- `<ItemView />` — IIIF viewer placeholder + metadata side rail + transcription.
- `<Article />` — reading layout: title block, double rule, drop-cap prose, references, small-caps section markers.
- `<Footer />` — colophon, governance, mirrors, license.

Built from the spec docs ([charter.md](docs/charter.md), [data-model.md](docs/data-model.md), [contribution-flow.md](docs/process/contribution-flow.md)). No imagery is fabricated — placeholders show the rights line that real reproductions will carry. Reference render: [website-home.png](docs/design/system/screenshots/website-home.png).
