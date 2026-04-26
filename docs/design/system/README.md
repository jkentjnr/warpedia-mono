# Warpedia Design System

> Visual + interaction system for **warpedia.org** — an open, primary-source-rich, encyclopedic resource for the human record of war.

**Live preview:** [jkentjnr.github.io/warpedia-mono](https://jkentjnr.github.io/warpedia-mono/) — landing page with links to every UI kit prototype and token preview, served from `/docs` via GitHub Pages.

This system supports a Wikipedia/Wikimedia-adjacent project covering battles, conflicts, equipment, units, places, and the people (military and civilian) who lived through them. Primary sources — letters, diaries, photographs, oral histories, manuals, after-action reports, war art — are first-class published items, not "supporting evidence". Encyclopedic articles sit alongside them. Multi-conflict, multi-national, multi-perspective by design.

**What Warpedia is not:** a memorial / tribute site; a genealogy platform; an opinion forum; a defence-industry / current-operations resource. The visual language must reinforce *all* of those negatives: it must read as a **scholarly archive**, not a war-themed product, a memorial site, or a hobbyist wiki.

---

## Sources used to build this system

The user attached the documentation monorepo `jkentjnr/warpedia-mono`. There is **no design or front-end code yet** — the project is in pre-build research and design phase. Everything in this system is original, derived from the spec docs:

- [docs/charter.md](docs/charter.md) — what Warpedia is, what it isn't, core principles. **The anchor.**
- [docs/data-model.md](docs/data-model.md) — Item / Person / Conflict / Event / Unit / Place / Collection / Equipment / Theme / Trial / Treaty entity shapes; Dublin Core metadata profile; ULID identifiers (`wp:item:01HXX…`); Wikidata QID reconciliation.
- [docs/process/contribution-flow.md](docs/process/contribution-flow.md) — 12-screen contribution flow Sarah Smith uses to submit her great-grandfather's letter. License/rights wizard, AI transcription, editorial review queue.
- [docs/metadata/dublin-core-profile.md](docs/metadata/dublin-core-profile.md), [docs/metadata/taxonomies.md](docs/metadata/taxonomies.md) — controlled vocabularies, license tiers (`OPEN`, `OPEN-SA`, `NC`, `LINK-ONLY`).
- [docs/infrastructure/storage.md](docs/infrastructure/storage.md) — four-tier storage (Glacier / B2 / R2 / Internet Archive + Commons mirror).
- [docs/research/landscape-and-viability.md](docs/research/landscape-and-viability.md), [docs/research/source-licensing.md](docs/research/source-licensing.md), [docs/research/manuals-and-reference.md](docs/research/manuals-and-reference.md), [docs/research/content-dimensions.md](docs/research/content-dimensions.md) — what already exists, what can lawfully be absorbed, content-dimension map.

> Reader note: the repo is private-ish docs at `https://github.com/jkentjnr/warpedia-mono` — read access only.

---

## Index

| File / Folder | What it holds |
|---|---|
| [README.md](docs/design/system/README.md) | This file. Brand context, content & visual fundamentals, iconography. |
| [SKILL.md](docs/design/system/SKILL.md) | Skill manifest — for use as a portable Claude Skill. |
| [colors_and_type.css](https://jkentjnr.github.io/warpedia-mono/design/system/colors_and_type.css) | All design tokens (color, type, spacing, radius, shadow, motion) as CSS custom properties + semantic element styles. |
| [fonts/](docs/design/system/fonts/) | Web fonts (Source Serif 4, Geist, JetBrains Mono). |
| [assets/](docs/design/system/assets/) | Logos, marks, sample primary-source imagery, icon sets. |
| [preview/](docs/design/system/preview/) | Design-system preview cards (Type, Colors, Spacing, Components, Brand). |
| [ui_kits/website/](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) | Public marketing + reading site UI kit (`warpedia.org`). |
| [ui_kits/contribute/](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/contribute/) | Contribution-flow UI kit (Sarah's 12 screens). |
| [ui_kits/editorial/](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/) | Editorial review queue UI kit (the editor's workbench). |

### Preview pages

Each preview is a self-contained HTML card served live from GitHub Pages — open one to see the rendered tokens / components.

| Topic | Files |
|---|---|
| Colors | [paper](https://jkentjnr.github.io/warpedia-mono/design/system/preview/colors-paper.html) · [ink](https://jkentjnr.github.io/warpedia-mono/design/system/preview/colors-ink.html) · [accents](https://jkentjnr.github.io/warpedia-mono/design/system/preview/colors-accents.html) |
| Type | [display](https://jkentjnr.github.io/warpedia-mono/design/system/preview/type-display.html) · [headings](https://jkentjnr.github.io/warpedia-mono/design/system/preview/type-headings.html) · [body](https://jkentjnr.github.io/warpedia-mono/design/system/preview/type-body.html) · [meta + mono](https://jkentjnr.github.io/warpedia-mono/design/system/preview/type-meta-mono.html) |
| Spacing & shape | [spacing scale](https://jkentjnr.github.io/warpedia-mono/design/system/preview/spacing-scale.html) · [radii + shadow](https://jkentjnr.github.io/warpedia-mono/design/system/preview/radii-shadow.html) |
| Components | [buttons](https://jkentjnr.github.io/warpedia-mono/design/system/preview/components-buttons.html) · [inputs](https://jkentjnr.github.io/warpedia-mono/design/system/preview/components-inputs.html) · [badges](https://jkentjnr.github.io/warpedia-mono/design/system/preview/components-badges.html) · [topbar](https://jkentjnr.github.io/warpedia-mono/design/system/preview/components-topbar.html) · [item row](https://jkentjnr.github.io/warpedia-mono/design/system/preview/components-item-row.html) · [catalogue card](https://jkentjnr.github.io/warpedia-mono/design/system/preview/components-catalogue-card.html) |
| Brand | [logo / mark](https://jkentjnr.github.io/warpedia-mono/design/system/preview/logo.html) |

### UI kit prototypes

Each kit ships an interactive `index.html` (React + Babel pinned via CDN) served live from Pages, plus a `components.jsx` source on GitHub:

- **Website** — [open prototype ↗](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/website/) · [components.jsx](docs/design/system/ui_kits/website/components.jsx) · [README](docs/design/system/ui_kits/website/README.md)
- **Contribute** — [open prototype ↗](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/contribute/) · [components.jsx](docs/design/system/ui_kits/contribute/components.jsx) · [README](docs/design/system/ui_kits/contribute/README.md)
- **Editorial** — [open prototype ↗](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/) · [components.jsx](docs/design/system/ui_kits/editorial/components.jsx) · [README](docs/design/system/ui_kits/editorial/README.md)

### Brand assets

- [warpedia-wordmark.svg](https://jkentjnr.github.io/warpedia-mono/design/system/assets/logo/warpedia-wordmark.svg) — full wordmark
- [warpedia-mark.svg](https://jkentjnr.github.io/warpedia-mono/design/system/assets/logo/warpedia-mark.svg) — accession-tag mark
- Reference screenshots: [website-home.png](https://jkentjnr.github.io/warpedia-mono/design/system/screenshots/website-home.png) · [logo iterations](docs/design/system/screenshots/)

---

## CONTENT FUNDAMENTALS

Warpedia's voice is **encyclopedic, sober, multi-perspective, and verifiable**. It is the voice of a careful archivist, not a tour guide, not a journalist, not a marketer. If a sentence could appear in *Wikipedia*, *the Imperial War Museum catalogue*, or a *peer-reviewed history journal*, it fits. If it could appear on a memorial page, a recruitment poster, a hobbyist wiki, or a startup landing page — rewrite it.

### Voice rules

- **Third person, passive where appropriate.** "The letter was written from the front line near Pozières on 3 July 1916." Not "John wrote this letter from the trenches." Not "We're proud to present this letter."
- **Address the reader as "you" only in direct UI guidance** (forms, contribution flow, errors, empty states). Never in encyclopedic copy.
- **No "we"** in encyclopedic copy. Warpedia does not have opinions in its articles. "We" is permitted in governance, contribution UX, and policy pages where the project itself is speaking ("We require a verified email at v1").
- **Attributed interpretations.** "Historians broadly agree…" / "Reputable secondary sources establish…" — never "It is clear that…" or "Of course…".
- **Verifiability over claim.** Every encyclopedic statement carries (or implies) a citation. Where evidence is thin, say so: "The exact date is unrecorded; surviving correspondence places it in late July."
- **Cite everything.** Inline `[1]` style superscript references in long-form; full bibliography at foot.
- **Plain dates, plain numbers.** "3 July 1916" (not "July 3rd, 2016"). "11,961 burials" (not "nearly twelve thousand"). Use ISO/EDTF dates internally, human dates in copy.
- **No loaded language.** Avoid: heroes, sacrifice, glory, fallen, ultimate price, brave lads, the enemy, our boys, the bad guys, masterminded, butchered, slaughtered. Use: died, was killed in action, were captured, surrendered, retreated, advanced, opened fire on. Specific verbs over emotive ones.
- **No advocacy, no judgement.** "The bombing of Dresden killed an estimated 25,000 people" — fact. Not "the senseless bombing", not "the necessary bombing".
- **Multi-perspective default.** Where a conflict has multiple national or factional perspectives, name them. Avoid the unmarked Anglo-Western-default voice.
- **British English** as the canonical spelling (defence, organisation, theatre, recognised), with US spellings preserved verbatim in quoted material.

### Tone by surface

| Surface | Tone | Example |
|---|---|---|
| **Article body** (encyclopedic) | Wikipedia-grade neutral prose, citations | "The 1st Battalion, AIF was raised in New South Wales in August 1914 [3]. It served at Gallipoli from April 1915 [4] before deploying to the Western Front in March 1916 [5]." |
| **Item caption** (primary source) | Catalogue-card terse — what, who, when, where, rights | "Letter from Pte. J. H. Smith, 1st Bn AIF, to his mother, written near Pozières, 3 July 1916. Two pages, ink on lined paper. Donated by Sarah Smith (great-granddaughter). CC BY-SA 4.0." |
| **UI labels** (forms, buttons) | Direct, plain | "Upload file", "Continue", "Save draft", "Submit for review" — not "Let's get started!" |
| **Empty / error states** | Plain explanation, next step | "No items found in this collection. Items appear here once published." Not "Oops! Looks like there's nothing here yet." |
| **Contribution flow guidance** | "You" — direct, helpful, not chirpy | "If you don't know the exact date, leave this blank — a reviewer will follow up." |
| **Editorial / policy pages** | "We" the project, formal | "We require a verified email address for every contribution. We do not accept anonymous submissions in v1." |
| **Sensitive content notices** | Plain, factual, no euphemism | "This item depicts human remains following an execution at the camp in 1944. The item is shown in the historical record. Click to view." |
| **AI-disclosure flags** | Specific, attributed | "Transcription generated by Transkribus model X, edited by Sarah Smith." Not "AI-powered ✨". |

### Writing don'ts

| ❌ Avoid | ✅ Use instead |
|---|---|
| "Honour the fallen" | "Items commemorating those who died" |
| "Their ultimate sacrifice" | "Those killed in action" |
| "Brave soldiers" | "Soldiers" / "the battalion" |
| "The enemy" | "German forces" / "the opposing battalion" / a specific named party |
| "Our boys" | "Allied forces" / a specific named force |
| "Tragic loss of life" | "Casualties of [N]" |
| "Discover the stories of…" | "Browse [N] items relating to…" |
| "Powered by AI ✨" | "AI-assisted transcription, awaiting human review" |
| "Welcome! Let's begin." | "Contribute a primary source" |

### Casing

- **Sentence case** for every UI label, every nav item, every page title, every button. ("Submit for review", not "Submit For Review".)
- **Title Case** preserved verbatim *only* in proper nouns ("Battle of the Somme", "Commonwealth War Graves Commission", "Pier and Face 14 A and 15 C").
- **Small caps** for section labels in long-form articles (`<small-caps>References</small-caps>`).
- **Identifiers** rendered exactly: `wp:item:01HXXXX...` in mono. ULIDs are visible as a feature, not hidden.

### Emoji + symbols

- **No emoji.** Anywhere. The product covers war crimes, executions, mass graves, and active conflicts. Emoji are categorically wrong.
- **Unicode is fine** for legitimate typographic characters: `†` (deceased / KIA marker), `§` (section), `‡`, `¶`, `№`, `°`, `′ ″` (minutes/seconds in coordinates), em/en dashes, true ellipsis, true quotes (`"" '' « »`).
- Special-purpose marks **may** be used as functional indicators: `†` next to a person's death date is an established encyclopedic convention; we use it.

---

## VISUAL FOUNDATIONS

The look is **scholarly archive** — think *British Library digital catalogue*, *JSTOR*, *Wikisource*, *Imperial War Museum online collection*, *Internet Archive's better moments* — but more crafted, with the typographic care of a university press. Catalogue card metaphor recurs throughout: items have call-numbers (ULIDs), license tiers, rights badges, hairline rules between metadata fields.

**The visual language must read as neutral.** No camo greens. No khaki. No flag-coded reds/whites/blues. No drop-shadow military star icons. No barbed-wire dividers. No "vintage war" fonts. Multi-perspective requires that no nation, faction, or side is visually privileged.

### Color

Two surface families and a single muted accent.

- **Paper** — warm parchment-leaning whites and creams. The default reading surface. `#F8F4EC` (paper), `#F1EAD9` (paper-2), `#E7DCC4` (paper-3 / catalogue card).
- **Ink** — desaturated near-blacks and warm greys. All text and rules. `#1A1714` (ink), `#3F3A33` (ink-2 / body), `#6B6359` (ink-3 / metadata), `#9C9388` (ink-4 / muted).
- **Oxide** — a single muted brick / iron-oxide red. Used only for: links, key actions, the brand mark, and the "live"/"published" status dot. `#A8412A` (oxide), `#7C2F1F` (oxide-deep). Restraint is the rule — if the page has more than ~3% oxide pixels, it has too many.
- **Verdigris** — a desaturated patina green, used *only* for confirmed/approved status (editorial review approve, license OPEN tier badge). `#4A6856`. Optional; restraint applies.
- **Iron** — cool desaturated blue-grey, *only* for informational/system messages, never as an accent. `#3D556B`.
- **Caution** — desaturated ochre, only for warnings, sensitivity notices, AI-only content. `#8B6914`.

A **dark mode** ("lamp") variant inverts the paper-ink relationship: deep ink-blue surfaces, paper-coloured text, oxide and verdigris desaturate further. Default is paper (light).

### Typography

Three families, each chosen for an archival/scholarly tone, all open-license:

- **Source Serif 4** — display and long-form body. Stately, scholarly, designed for extended reading; supports small caps and old-style figures.
- **Geist Sans** — UI, metadata, navigation, captions. Modern neutral grotesque, low ego, reads as institutional rather than corporate. *Not Inter; Inter is overused.*
- **JetBrains Mono** — identifiers (ULIDs, QIDs, hashes), code, technical metadata fields.

**Display sizes (display serif):** `display-xl` 56/60, `display-l` 44/52, `display-m` 32/40, `h1` 28/36, `h2` 22/30. Tight tracking (`-0.01em`).

**Body sizes (serif for long-form, sans for UI):** `body-l` 18/28 serif (article reading), `body` 16/24 serif or sans, `body-s` 14/22 sans (UI default), `meta` 13/20 sans (catalogue metadata), `caption` 12/16 sans uppercase tracked (`+0.08em`) for labels and section markers.

**Old-style figures** are used by default in serif body copy (`font-feature-settings: "onum"`). **Tabular figures** (`"tnum"`) for tables, dates, and identifiers. **Small caps** (`"smcp"`) for the `REFERENCES`, `RIGHTS`, `PROVENANCE` section markers in long-form.

### Spacing & rhythm

A 4px base scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`. Vertical rhythm is dictated by the body line-height (28px for long-form). Section breaks are typically `64`px outside an article body, `96–128`px between page sections.

### Borders & rules

- **Hairlines** (`1px solid var(--ink-rule)`) separate metadata fields, the way a catalogue card stamps fields. `--ink-rule` is `#D8CDB6`.
- **Heavy rules** (`2px solid var(--ink)`) sit beneath section markers and above page footers. Rare.
- **Double rules** (`border-top: 3px double var(--ink-rule)`) — a single occurrence per page, beneath the article title block. A nod to scholarly print conventions.
- **No card borders by default.** Cards are differentiated by surface tone, not by stroke. A `paper-2` card on a `paper` surface needs no border.

### Corner radii

- **2px** is the default. Almost everything — buttons, inputs, badges, cards.
- **0px (square)** for catalogue-card surfaces (item cards, metadata blocks). The squareness is intentional and archival.
- **999px** (capsule) reserved for status pills and license-tier badges only.
- **No 12px+ radii anywhere.** Soft modern roundedness reads as "consumer app" and undermines the archival posture.

### Shadow & elevation

Used sparingly; the default elevation is *none*.

- **Surface card** — no shadow, differentiated by background tone alone.
- **Floating card** (focused list item, dropdown) — `box-shadow: 0 1px 0 rgba(26,23,20,0.08), 0 8px 24px -12px rgba(26,23,20,0.18);` — directional, warm, shallow.
- **Modal / overlay** — `box-shadow: 0 24px 64px -24px rgba(26,23,20,0.32);` plus a subtle inner border (`box-shadow: inset 0 0 0 1px var(--ink-rule)`).
- **Inset** `inset 0 1px 0 rgba(26,23,20,0.06)` for input focus rings — never the modern "outline glow".

### Backgrounds & imagery

- **Default surface is `paper`** — a warm cream, not white. Pure white is reserved for IIIF viewers (so reproductions show true colour) and modal scrims.
- **Grain texture.** A subtle 1% noise overlay can be applied to page backgrounds via SVG fractal-noise or a tiled PNG. Keeps the paper feeling material.
- **No full-bleed gradients.** No bluish-purple gradients. No glassmorphism. The closest thing to a gradient is a "protection gradient" beneath full-bleed images — a `linear-gradient(180deg, transparent 0%, rgba(26,23,20,0.6) 100%)` to keep caption text legible.
- **Imagery treatment:** Primary-source imagery (photographs, scans) is always shown **at fidelity** — never desaturated, tinted, or filtered. The historical record is not stylised. *However*, marketing/landing imagery may carry a subtle warm-paper tone (`mix-blend: multiply` over a `#F1EAD9` layer at 8% opacity) to harmonise with the surface.
- **No hand-drawn illustrations.** No emoji cards. No "abstract concept" stock illustrations. Archival imagery only — and only where rights permit.
- **Hero / full-bleed images** appear sparingly: marketing landing pages, theme essay openers. They carry a top-protection gradient and tight caption + rights line at the bottom.

### Motion

- **Brief, functional, never decorative.** 150ms for hover/state changes, 200ms for navigation transitions, 300ms for modal open. `cubic-bezier(0.2, 0, 0, 1)` (an "ease-out-cubic-ish" curve — calm, archival, no overshoot).
- **No bounces. No spring physics. No parallax. No scroll-jacking.**
- **Page transitions** are simple cross-fades (180ms) when needed at all; most navigation is plain.
- **Skeleton loaders** use a slow paper-tone shimmer (1200ms cycle), not a fast pulse.
- **Reduced-motion users**: all transitions become 0ms. Status changes still happen instantly.

### Hover & press states

- **Hover on text links** — oxide colour (`var(--oxide)`) + dotted underline → solid underline. Underlines are *always present* on body links per Wikipedia/Wikisource convention (with `text-underline-offset: 3px`).
- **Hover on buttons** — primary buttons darken (`oxide → oxide-deep`); secondary/ghost buttons gain a `paper-2` background; tertiary text buttons gain underline.
- **Press state** — buttons compress translation by `1px` and darken further. No scale transform.
- **Focus** — `2px solid var(--oxide)` ring with `2px` offset. Visible. Never removed.
- **Disabled** — `opacity: 0.45`, no pointer events.

### Transparency & blur

- **Transparency** used only for: protection gradients on imagery; modal scrims (`rgba(26,23,20,0.6)`); subtle row-hover (`rgba(26,23,20,0.04)`).
- **No backdrop blur.** No frosted glass. No translucent navbars. The site's surfaces are honest and matt.

### Cards

A "card" in Warpedia is **most often a catalogue card**: square corners, surface tone differentiation (no border), tabular metadata inside. Item cards in lists are arranged in a grid where the metadata feels like a card-catalogue drawer slid open. Floating cards (dropdowns, tooltips, focused list items) carry the floating shadow above.

### Layout rules

- **Editorial / reading column** — 64–72ch body, generous outer margin, single column. Wikipedia-like simplicity, with more typographic care.
- **Metadata side rails** — narrow (240–280px) right or left rail for catalogue metadata in item views.
- **Browse / list views** — dense rows with hairline separators, NOT cards-with-borders.
- **No fixed full-width navbar by default.** A slim top bar (54px) with the wordmark, search, language switcher, contribute. It scrolls with the page on long-form reading views; it sticks on dense list/browse views.
- **No sticky CTA bars.** No newsletter modals. No cookie banners that overstay welcome.

### License tiers — visual treatment

The four license tiers (`OPEN`, `OPEN-SA`, `NC`, `LINK-ONLY`) appear as small capsule badges in metadata, each with a consistent colour treatment:

| Tier | Background | Foreground |
|---|---|---|
| `OPEN` | `verdigris/12%` | `verdigris-deep` |
| `OPEN-SA` | `verdigris/8%` | `verdigris-deep` (with diagonal hatch) |
| `NC` | `caution/12%` | `caution-deep` |
| `LINK-ONLY` | `ink-3/8%` | `ink-3` |

---

## ICONOGRAPHY

Warpedia inherits **no icon system** from the source repo (it's docs-only). The system specifies an icon approach rather than absorbs one.

### Approach

- **Lucide** is the icon set used throughout. Reasons: open-license (ISC), 1.5px stroke-weight matches our restrained editorial feel, broad coverage (file types, navigation, system actions), and is easy to subset. Loaded via CDN: `https://unpkg.com/lucide@latest`. **This is a substitution flagged for review** — the source repo had no preferred set, so we picked one that matches the archival tone. Replace if the user has another preference.
- **All icons are stroked, not filled,** at 1.5px stroke weight, 20px or 24px box, `currentColor`. Filled icons are reserved for *status* (the small published/draft dot), not navigational actions.
- **No icon-only buttons in primary nav.** Always icon + label. Icon-only is acceptable for dense table-row actions where the label appears in a tooltip.
- **No emoji as icons.** Anywhere. Ever.
- **Unicode marks** used where conventional: `†` (KIA / death date), `§` (section), `№` (number), `′ ″` (coordinates), `‡` (footnote double-dagger).
- **Custom marks** for things Lucide doesn't cover well — license tier badges (`OPEN`, `OPEN-SA`, `NC`, `LINK-ONLY`), conflict markers (typographic, not pictographic — a small caps two-letter code like `WW1`, `WW2`, `KOR`, `VTN`), and item-type indicators. These are SVGs we own; live in `assets/marks/` *(folder not yet populated — to be added as marks are designed)*.
- **The brand mark** (the Warpedia "W") is in [assets/logo/](docs/design/system/assets/logo/) — see [warpedia-mark.svg](https://jkentjnr.github.io/warpedia-mono/design/system/assets/logo/warpedia-mark.svg) and [warpedia-wordmark.svg](https://jkentjnr.github.io/warpedia-mono/design/system/assets/logo/warpedia-wordmark.svg). It's a typographic mark — capital W set in Source Serif 4 black, with a single hairline underscore. Not a shield, not a crossed-rifles, not a star. Typographic marks resist the militarist trope; they read as "press" or "imprint".

### Where icons appear

- **Navigation** — Browse (compass), Contribute (upload), Editorial (clipboard-check), Account (user), Search (search). All Lucide, paired with labels.
- **Item type indicators** — letter (mail), diary (book-open), photograph (image), document (file-text), audio (audio-lines), video (video), object (package), oral history (mic). These appear small (16px) prefixed to item titles in lists.
- **Status dots** — filled circles, 8px: oxide for published, ink-3 for draft, verdigris for approved, caution for sensitivity flag, iron for "in review".
- **License tier badges** — text-only in our small-caps capsule style. No padlock icons, no shield icons, no key icons.
- **Functional actions** in dense tables — eye (view), pencil (edit), trash (delete), download, link.

---

## Open caveats / things to validate

- **Font substitutions.** Source Serif 4 ships in [fonts/](docs/design/system/fonts/) as a self-hosted variable TTF; Geist Sans and JetBrains Mono are sourced from Google Fonts CDN. If the user has actual brand fonts, swap them in [fonts/](docs/design/system/fonts/) and update the `@font-face` block in [colors_and_type.css](docs/design/system/colors_and_type.css) (live: [hosted CSS](https://jkentjnr.github.io/warpedia-mono/design/system/colors_and_type.css)).
- **Icon set substitution.** Lucide selected as a fit, not as a brand decision. Confirm or replace.
- **Oxide accent hue.** I picked a muted brick (`#A8412A`). It carries gravitas without reading as a flag colour. If the user wants something cooler (a muted ink-blue) or fully neutral (no accent — pure ink-on-paper), it's a one-token change in [colors_and_type.css](docs/design/system/colors_and_type.css) (the `--oxide` and `--oxide-deep` custom properties).
- **No primary-source imagery in the project.** The marketing/UI mockups use placeholder rectangles labelled with what should appear (e.g. *"AWM photo P02939.001 — 1st Bn AIF, Pozières, July 1916"*) rather than fabricated stand-ins. Real archival imagery requires a rights review the user must drive.
