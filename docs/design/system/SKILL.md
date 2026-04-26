# SKILL.md — Designing for Warpedia

## What Warpedia is (and isn't)

A free, primary-source archive and encyclopedia of war — letters, diaries, photographs, oral histories, documents, objects — reviewed and openly licensed. **Voice: encyclopedic and serious.** Not chirpy. Not "AI-powered ✨". Not cinematic.

Read [README.md](docs/design/system/README.md) and (if relevant) [docs/charter.md](docs/charter.md) before designing anything.

## Files in this project

| Where | What |
|---|---|
| [colors_and_type.css](docs/design/system/colors_and_type.css) | All design tokens — colors, type, spacing, components. **Always link this in `<head>`.** |
| [assets/logo/](docs/design/system/assets/logo/) | Wordmark + mark (accession-tag style). Don't redraw — link the SVGs ([wordmark](docs/design/system/assets/logo/warpedia-wordmark.svg), [mark](docs/design/system/assets/logo/warpedia-mark.svg)). |
| [fonts/](docs/design/system/fonts/) | Source Serif 4 (TTF, variable). Geist + JetBrains Mono load from Google Fonts. |
| [ui_kits/website/](docs/design/system/ui_kits/website/) | Public reading site (warpedia.org) — hero, browse, item view, article. |
| [ui_kits/contribute/](docs/design/system/ui_kits/contribute/) | Sarah's 12-screen contribution flow. |
| [ui_kits/editorial/](docs/design/system/ui_kits/editorial/) | Editor workbench — queue + detail rail. |
| [preview/](docs/design/system/preview/) | Design-system review cards (color, type, components). |

## When the user asks for a new screen, page, or surface

1. Check [ui_kits/](docs/design/system/ui_kits/) for the closest existing surface — the [contribution flow](docs/design/system/ui_kits/contribute/), the [editor's queue](docs/design/system/ui_kits/editorial/), or a [public reading page](docs/design/system/ui_kits/website/). Lift the chrome from there.
2. Re-use components by class name. The CSS tokenfile already has: `.wp-topbar`, `.wp-tab(-active)`, `.wp-btn(-primary|-secondary|-ghost)(-sm|-lg)`, `.wp-input`, `.wp-textarea`, `.wp-select`, `.wp-label`, `.wp-help`, `.wp-table`, `.wp-meta-table`, `.wp-rule`, `.wp-prose`, `.wp-status-*`, `.wp-badge-*`, `.wp-display-xl|-l|-m`, `.wp-h1|-h2|-h3`, `.wp-meta`, `.wp-caption`.
3. Type comes from CSS vars `--serif` (Source Serif 4 — display + body), `--sans` (Geist — UI, metadata), `--mono` (JetBrains Mono — IDs, slugs, code).
4. Color comes from semantic vars: `--paper`, `--paper-2`, `--paper-3`, `--ink`, `--ink-2`, `--ink-3`, `--ink-4`, `--ink-rule`, `--ink-rule-2`, `--oxide` (only links / key actions / "live"), `--verdigris` (only "approved"), `--iron` (info), `--caution` (AI / sensitivity), `--error` (rejected). Tints: `--*-tint` for backgrounds.

## Voice & copy

- "We" the project for editorial / policy. "You" for contribution flow help text.
- No marketing exclamations. No "Oops!". No "✨". No emoji except a sparing few documented in the README.
- Plain factual sensitivity notices. State what the item depicts; do not euphemise; do not add trigger-warning theatre. See README "TONE TABLE".
- Numbers in body copy use **old-style figures** (`font-feature-settings: 'onum' 1`). Numbers in tables/data use **lining tabular** (`'lnum' 1, 'tnum' 1`).
- IDs are ULIDs prefixed with the entity type: `wp:item:01HX…`, `wp:person:01HX…`, `wp:contribution:01HX…`. Always render IDs in mono.

## Visual rules — non-negotiables

- **No card-with-shadow chrome.** Lists are dense rows with hairline separators. Use `.wp-table` or its pattern.
- **No gradients in product UI.** Flat warm paper + ink only. (Limited flat tints for status badges.)
- **No rounded corners > 4px.** Most edges are square. Buttons round 2px max.
- **Oxide red is rare.** Links, the primary action of a screen, the brand mark, "live"/"published" dot. That's it. If the screen has 4 oxide things, you're using it wrong.
- **Body column 64–72ch.** Reading is a first-class use case.
- **Metadata rails are 240–280px**, ink-3 labels, lining tabular figures.
- **Icons are Lucide, stroked, 1.5px, currentColor, paired with labels.** No icon-only primary nav. No filled icons except status dots.
- **No drop caps by default.** Opt-in via `.wp-prose.wp-dropcap`.

## License-tier badges

Always render licenses as `<span class="wp-badge wp-badge-open">CC0</span>`, `wp-badge-open-sa` for CC BY-SA, `wp-badge-nc` for non-commercial, `wp-badge-link-only` for unresolved / link-only. Tier first, exact license string second.

## AI disclosure

Whenever a piece of content was machine-generated (transcription, summary, OCR), surface a `wp-badge-caution` reading "AI · MACHINE TRANSCRIPTION" (or the specific kind) on the artefact, and an inline note crediting the model + human editor when applicable. The README "AI-disclosure" row in the tone table has the canonical phrasing.

## Adding a new UI kit

```
ui_kits/<surface>/
  index.html        # links ../../colors_and_type.css and assets, mounts the React tree
  components.jsx    # all components for the surface, exposed via window.<RootName>
  README.md         # one paragraph: what this surface is for, where the spec lives
```

Use the React 18.3.1 + Babel 7.29 pinned script tags from [ui_kits/website/index.html](docs/design/system/ui_kits/website/index.html). Expose components on `window` so multi-file Babel scripts can share scope.

## When in doubt

- Simpler. Quieter. More restrained.
- One oxide accent per screen, not three.
- Density is fine. Generous whitespace within a section is fine. **Decoration is not.**
