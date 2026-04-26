# Website mock-up guide — warpedia.org

How to design any new screen on the public reading site, anchored to the data model, taxonomies, and existing UI kit. Written for a designer or contributor who has read [`docs/charter.md`](../charter.md) and the [design system README](system/README.md), and who needs to draw a screen the system does not yet cover.

This guide is **prescriptive**. It locks the IA, page-template strategy, and cross-cutting UX patterns. The existing [website UI kit](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) covers Home, Browse list, ItemView, and a sample Article — every other screen is designed by following the rules below.

---

## 1. Sitemap & top-level IA

### Primary navigation

A flat row of seven items, sentence case, no icons in the bar itself:

```
Browse · Conflicts · People · Places · Equipment · Themes · About
```

Plus right-aligned: **Search** (always visible), **Sign in**, and the oxide **Contribute** button.

| Nav item | Lands on | Why top-level |
|---|---|---|
| Browse | Universal faceted list across every published item, all subtypes, all conflicts. | The catalogue itself — the unfiltered firehose. |
| Conflicts | Index of curated conflict hub pages (WW1, WW2, Korea, Vietnam, etc.). | The dominant cross-cutting axis. Most readers arrive via a conflict. |
| People | Index of person pages — soldiers, civilians, photographers, diplomats, war artists, internees. **Subjects, not contributors.** | Charter principle: individuals are first-class. Sarah's great-grandfather has a page. |
| Places | Index of place pages (battlefields, ports, camps, hospitals, occupied territories) — many with maps. | Anchors geospatial browsing without demanding a top-level Map page. |
| Equipment | Index of equipment hub pages (Lee–Enfield, Spitfire, T-34, etc.) and the manuals/recognition guides catalogued for each. | Reference material is a first-class content dimension; equipment is its primary handle. |
| Themes | Index of curated cross-conflict themes (`comparative-tactical`, `moral-and-legal`, `cultural-response`, etc.) authored as long-form essays. | Where the project's editorial voice lives. |
| About | Charter, governance, editorial standards, license tiers, roadmap, contact. | Every public archive needs this. |

> The existing [TopBar component](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) currently shows the older 4-item nav (`Browse · Themes · Conflicts · About`) and pre-dates this decision. Update it when next touching the kit.

### Footer

Already implemented in [`components.jsx`](system/ui_kits/website/components.jsx) (`<Footer />`) — four-column grid of *The project · Take part · Mirrors · Colophon*. Keep as-is; add new entries as content grows.

### URL strategy

Two patterns, deliberately different:

| Surface | Pattern | Example |
|---|---|---|
| Entity hub or article (stable title) | **slug-based** | `/conflicts/ww1`, `/conflicts/ww1/somme`, `/people/eleanor-vasquez`, `/places/pozieres`, `/equipment/lee-enfield-no-4`, `/themes/comparative-tactical/trench-doctrine` |
| Individual primary-source item (title may change after editorial review) | **ULID-only** | `/i/01HXP7K3R8M2N9V5Y4Q1ZBCDEF` |

Reasons:
- Slugs are friendly, citable, and stable for entity hubs whose name does not move. Slug collisions are resolved by appending a discriminator (`/people/john-smith-aif`).
- Items get a renamed title routinely as transcription and metadata improve; an ULID-only path means the URL never breaks. The full slugged title still appears in the page `<h1>` and `<title>`.
- The ULID is always shown on the page (mono font, `wp:item:01HXP…` form) so it can be copied as a permanent identifier regardless of which URL the user landed via.
- Old slugs **301 redirect** to the current slug. ULID URLs never redirect — they are the stable identity.

### Article hierarchy & breadcrumbs

Encyclopedic articles attach to a parent entity (Conflict, Event, Person, Place, Equipment, Theme). They can have **child articles** in a strict tree (one parent each), navigated via breadcrumbs:

```
Conflicts › WW1 › Battle of the Somme › First day, 1 July 1916 › Tank deployment
```

Cross-cutting relationships (an article on aerial recon over the Somme also relevant to "Aerial warfare") are handled by the existing **entity-link pattern** in metadata sidebars and in-prose citations — *not* by giving an article two parents. Strict tree keeps breadcrumbs honest.

---

## 2. Page inventory

Every entity in [`docs/data-model.md`](../data-model.md) gets a page template. The table below is the canonical map. Where the kit has no component yet, the **Lift from** column says which existing template to use as scaffolding.

| Entity | Page type | Template | In nav? | Lift from | Status |
|---|---|---|---|---|---|
| Item | Catalogue card + IIIF + transcription | `<ItemView />` | via Browse | — | **Built** |
| Person | Biographical, single template, conditional blocks | new `<PersonPage />` | top-level + index | `<Article />` + sidebar from `<ItemView />` | **To design** |
| Conflict | Curated hub: hero, intro essay, featured items, key people, key places, child events, browse-all CTA | new `<ConflictHub />` | top-level + index | `<HomeHero />` + `<Article />` + `<RecentList />` | **To design** |
| Event | Same shape as Conflict but smaller; nests under Conflict | new `<EventPage />` | via Conflict tree | `<ConflictHub />` (lighter) | **To design** |
| Place | Hub with intro + **map** + linked items + linked events | new `<PlacePage />` | top-level + index | `<ConflictHub />` + Leaflet/MapLibre map block | **To design** |
| Equipment | Hub with technical summary, technical manuals catalogued, photographs, related units | new `<EquipmentPage />` | top-level + index | `<ConflictHub />` (technical-leaning) | **To design** |
| Theme | Long-form essay with curated `narrative_items` interleaved | new `<ThemePage />` | top-level + index | `<Article />` + `<RecentList />` interleaved | **To design** |
| Unit | Hub with order-of-battle, parent/child units, key engagements, linked items | new `<UnitPage />` | via Browse / entity-link | `<ConflictHub />` (lighter) | **To design** |
| Cemetery | Hub with map, burials list (paginated), associated unit/conflict, linked memorials | new `<CemeteryPage />` | via Browse / entity-link | `<PlacePage />` + tabular roster | **To design** |
| Camp | Hub with map, type (POW/internment/concentration), inmate/staff records, linked items | new `<CampPage />` | via Browse / entity-link | `<PlacePage />` | **To design** |
| Memorial | Hub with map, dedication, names listed, designer, linked place/conflict | new `<MemorialPage />` | via Browse / entity-link | `<PlacePage />` (lighter) | **To design** |
| Award | Hub with eligibility, citations awarded, recipients (paginated), linked items (citations) | new `<AwardPage />` | via Browse / entity-link | `<EquipmentPage />` (similar shape) | **To design** |
| Trial | Hub with jurisdiction, defendants, charges, verdicts, linked items (testimony, exhibits) | new `<TrialPage />` | via Browse / entity-link | `<EventPage />` | **To design** |
| Treaty | Hub with signatories, terms summary, linked items (text, ratifications) | new `<TreatyPage />` | via Browse / entity-link | `<EventPage />` (lighter) | **To design** |
| Collection | Hub showing all items in a curated grouping; lighter than Theme | new `<CollectionPage />` | via Browse / entity-link | `<RecentList />` + intro block | **To design** |
| Contribution | Internal record (not a public page); appears only on contributor profile if opted in | — | no | — | Out of scope |
| Index pages (per top-level nav) | Browse-style faceted lists scoped to one entity type | extend `<Browse />` | top-level | `<Browse />` | **To design** |

**Single template, conditional blocks.** Every page template (Person, Place, Equipment, etc.) is *one* component that renders blocks conditionally based on what data exists. A private soldier with one letter shows: name + ID + dates + a single-row item list. A war photographer with 200 catalogued items shows: name + ID + dates + biographical prose + faceted gallery of items + linked exhibitions. Same component, same chrome, different fill. No archetype branching.

---

## 3. Browse & discovery

### The Browse component

`<Browse />` already implements the universal pattern: left filter rail + main list. **Re-use it everywhere.** The per-entity index pages (`/people`, `/places`, `/equipment`, etc.) are `<Browse />` instances with a different default scope and a different facet set.

### Hub pages — what makes them landing pages, not lists

A hub page (Conflict, Person, Place, Equipment, Theme) is **curated**, not generated. The shape:

1. **Hero**: name, dates, one-line summary, ULID + Wikidata QID, item count, contributor count.
2. **Intro essay**: 200–600 words of encyclopedic prose. The opening paragraph is the article body. Drop-cap optional for Themes only.
3. **Featured items**: 4–6 hand-picked primary sources, large card format (not the dense list).
4. **Key linked entities**: 3–5 People, 3–5 Places, 2–3 Themes — small clickable chips.
5. **Child entities** (if a tree exists): list of child Events under a Conflict; child sub-articles under an Event; child phases / actions.
6. **"Browse all N items" CTA**: opens `<Browse />` pre-filtered to this hub.
7. **References**: numbered bibliography, same convention as `<Article />`.

A list-only fallback (no curation yet) is a stub hub: hero + auto-generated featured items + "Browse all" CTA only. Stub state is normal for new conflicts — editors fill the essay later.

### Search defaults

- **Default scope**: across all entity types (Items, People, Places, Equipment, Conflicts, Themes, Units). Results page groups by entity type with a count per group; the user can scope down.
- **Sort default**: relevance. Secondary: recently catalogued.
- **Facets**: Conflict, Item type, Licence tier, **Perspective** (see §4), Language. Multi-select within a facet is **OR**; across facets is **AND** — the standard convention; do not invent.
- **Empty state**: "No items found. Try removing a filter, or [browse the catalogue](#)." Plain. No mascot, no apology.

### Hub indexes

Each top-level nav item except Browse and About lands on a **hub index** — a page that lists all hubs of that entity type alphabetically (or by canonical sort: conflicts by start date desc, equipment by category, etc.) with a short blurb each. These pages are dense rows with hairline separators (the same row pattern as the dense item list), not cards.

---

## 4. Cross-cutting patterns

### 4.1 Sensitive content

The charter requires that mass-grave, execution, and atrocity material is **shown** in the historical record without trigger-warning theatre. Apply this rule:

- **At list level**: no special treatment. Plain thumbnail, plain title, plain metadata. The user is browsing a war archive; the catalogue does not euphemise.
- **At item level**: a plain factual notice above the IIIF viewer, in the existing `wp-badge-caution` style — *"This item depicts human remains following an execution at the camp in 1944. Click to view."* — and a click-to-reveal on the image. Once revealed, it stays revealed for that session.
- **Notice copy**: drafted by the editor at review time, factual, specific (`depicts X`), no euphemism, no apology. The notice text is itself a metadata field on the item.
- **No blurred thumbnails in lists.** Blurring hides what the catalogue *is*; the project's posture is honest visibility with informed consent at the moment of viewing.

### 4.2 Multi-perspective surfacing

A new `wp:perspective:` facet is added to the item taxonomy (see [`docs/metadata/taxonomies.md`](../metadata/taxonomies.md), §Perspective). It is a two-axis tag set:

- **Side** — context-specific to the linked conflict (`allied`, `central-powers`, `axis`, `allied-ww2`, `non-aligned`, `un-coalition`, etc.). Curated per conflict, not free-tagged.
- **Voice** — universal vocabulary independent of side (`military`, `civilian`, `indigenous`, `refugee`, `prisoner`, `internee`, `resistance`, `journalist`, `medical`, `clergy`, `diplomatic`, `official`, `commercial`).

Where it surfaces:

- **Conflict and Event hubs**: a chip-row above the items list — `All · Allied · Central Powers · Civilian · Indigenous · Occupied · …` — derived from the perspective facets actually present in the linked items. The chip row is **multi-select**, **OR within axis**, **AND across axis**.
- **Browse**: "Perspective" as one of the standard left-rail facets, same UI pattern as Conflict / Item type / Licence.
- **Item page**: the perspective is shown as a metadata row, not as a prominent badge. The ItemView is about the item; the perspective is context.

**Editorial discipline is still required** even with the facet — multi-perspective is a curatorial commitment, not a UI feature. The chip row only helps if items are tagged faithfully.

### 4.3 Multi-language

Out of scope for v1 except as metadata: items carry their authored language; the UI is English-only at launch. Defer the language-switcher decision (single canonical language vs. parallel-field translation) until the data-model question is resolved. Item pages do show the language as a metadata row and surface a transcription in the original language with an editor-supplied translation below when available.

### 4.4 Citation

Every entity hub, article, and item page has a "Cite this" affordance — a small text button in the right-rail or after the metadata block. Clicking it expands an inline panel offering APA, MLA, Chicago, and BibTeX, each pre-filled from the metadata, with a one-click copy. The ULID and the page URL are part of every citation. No modal. No social-share buttons.

### 4.5 Accessibility

- **Keyboard navigable**: the focus ring is the existing 2px oxide outline. Never remove it.
- **Reading column**: 64–72ch body. Hold to it on every long-form surface.
- **Reduced motion**: all transitions become 0ms (per design system).
- **Contrast**: paper/ink palette is AA-compliant by construction; oxide on paper meets AA for body text. Verify any new colour pairings against AA before shipping.
- **IIIF viewer**: keyboard zoom, screen-reader description from `dc:description` and the transcription.

### 4.6 Anonymous vs. signed-in

Anonymous readers can do everything except contribute, comment on a contribution, edit, or maintain a saved-items list. **No paywalls, no soft gates, no "sign in to see more".** Sign-in is a contributor convenience; the archive itself is fully open to read.

---

## 5. Component reuse map

| Component | In kit? | Reuse where |
|---|---|---|
| `<TopBar />` | Yes (4-item nav — update to 7) | Every page |
| `<HomeHero />` | Yes | Home only |
| `<Browse />` | Yes | Every per-entity index page (people, places, equipment, themes, conflicts), with different default facet set |
| `<FilterGroup />` | Yes | Inside `<Browse />` and inside Conflict/Event hub chip-row |
| `<RecentList />` | Yes | Anywhere a dense item list appears (Browse, hub "Featured items" sometimes, person item gallery, place item list) |
| `<ItemView />` | Yes | Item detail only |
| `<Article />` | Yes | Encyclopedic body of any hub page |
| `<Footer />` | Yes | Every page |
| **Hub hero block** | New | Conflict, Person, Place, Equipment, Theme, Unit, Trial, Treaty, Cemetery, Camp, Memorial, Award |
| **Featured items grid** (large cards, not dense list) | New | Hub pages |
| **Key entity chip row** | New | Hub pages, item view (already partially via "Linked entities") |
| **Map block** (Leaflet or MapLibre, OSM tiles) | New | Place, Event, Cemetery, Camp, Memorial, plus mini-map on Item when `dc:coverage` carries coordinates |
| **Perspective chip row** | New | Conflict + Event hubs |
| **Cite-this panel** | New | Every entity hub, article, item |
| **Sensitive-content notice + reveal** | New | Item view, when the item carries the sensitivity flag |
| **Breadcrumb** | New | Every nested page (already partly in `<ItemView />` and `<Article />` — extract as shared) |

---

## 6. Mock-up workflow

When designing a new screen — for any entity, any context — work through these steps in order. Skipping a step is how design drifts from the system.

1. **Find the closest existing surface.** Check the [website UI kit](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) and the [contribute](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/contribute/) and [editorial](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/) kits. Lift the chrome (TopBar, Footer, breadcrumb, container width).
2. **Identify the entity.** Pick a row in §2's page inventory. Use that template; do not invent a parallel one.
3. **Apply the data model.** Open [`docs/data-model.md`](../data-model.md) and [`docs/metadata/taxonomies.md`](../metadata/taxonomies.md). Every metadata row on the screen must map to a real field. If a needed field doesn't exist, raise it on the data model first — do not invent UI for non-existent data.
4. **Decide what's curated vs. auto.** Hub pages are curated (intro essay, featured items, key entities); browse-style pages are auto. Mixing the two is a smell.
5. **Apply the cross-cutting rules from §4.** Sensitive content, perspective chips, citation, accessibility — not optional.
6. **Reuse named components from §5.** Compose, don't redraw.
7. **Use the design tokens** in [`colors_and_type.css`](system/colors_and_type.css). Semantic vars only — `var(--paper)`, `var(--ink-2)`, `var(--oxide)`, never raw hex. New surface tones, new accents, or new radii are a system change — open a PR against the system, don't inline.
8. **Voice check.** Read every label and microcopy aloud against the [README "Tone by surface" table](system/README.md#content-fundamentals). Does it sound like Wikipedia or like a startup? Sentence case throughout. No emoji. No marketing exclamations.
9. **Charter check.** Does the screen privilege one nation or faction visually? Does it lean toward memorial / hobbyist / consumer-app territory? Re-read [`docs/charter.md`](../charter.md) §"What Warpedia is not".
10. **Ship as a static HTML mock-up** in `docs/design/system/ui_kits/website/` (or a sibling kit), wired with the design tokens, mounted via the same React + Babel CDN script tags as the existing kit. Add a row to the [website README](system/ui_kits/website/README.md). The Pages site picks it up on next push.

---

## 7. Deferred to v2

Captured here so they don't sneak into v1 by accident:

- **Top-level Map browse** page — v1 has maps on Place/Event hubs and mini-maps on items only.
- **Multi-language UI** (translated interface chrome) — v1 chrome is English; item content surfaces its authored language.
- **Saved items / collections** for signed-in readers — only contributors and editors have authenticated state in v1.
- **API console / interactive linked-data explorer** on item pages — v1 has a plain "Export metadata" link (JSON-LD, MARC, Dublin Core); the rich console is later.
- **Per-page comments / annotations** by readers — out of v1 entirely. Editorial review queue is the only review surface.
- **Personalised home page** — v1 home is the same for everyone (hero + holdings stats + intro).
- **Mobile-first dense-data tables** (cemetery rosters, embarkation rolls) — v1 ships them in a plain scrollable table; bespoke mobile pattern later.

---

## See also

- [`docs/charter.md`](../charter.md) — what Warpedia is and is not. The anchor.
- [`docs/data-model.md`](../data-model.md) — entity shapes referenced throughout this guide.
- [`docs/metadata/taxonomies.md`](../metadata/taxonomies.md) — every controlled vocabulary used by the page templates.
- [`docs/process/contribution-flow.md`](../process/contribution-flow.md) — the contribute and editorial sides; reuse the same chrome + rules.
- [Design system README](system/README.md), [SKILL.md](system/SKILL.md), [tokens stylesheet](system/colors_and_type.css).
- Live UI kits: [website](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) · [contribute](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/contribute/) · [editorial](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/).
