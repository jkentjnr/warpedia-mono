# Warpedia — Dublin Core Application Profile

*Draft 2026-04-25. A formal Dublin Core profile defining which DCMI terms warpedia.org uses, with what cardinality, what controlled vocabularies apply, and how each maps to source archives' schemas.*

## What this document is

A **Dublin Core Application Profile (DCAP)**: a tightening of the generic Dublin Core spec into the specific subset, cardinalities, and controlled vocabularies warpedia.org needs. Following the [DCMI Singapore Framework](https://www.dublincore.org/specifications/dublin-core/singapore-framework/) for application profiles.

## Why Dublin Core

Dublin Core is the universal lingua franca of cultural-heritage metadata. Every major archive in our [source-licensing audit](../research/source-licensing.md) — Europeana, DPLA, Library of Congress, Internet Archive, Australian War Memorial — exposes some Dublin Core mapping, even when their internal schema is richer (EAD, MARC, MODS, EDM). Building on DC means:

- We can ingest from any of them with predictable mappings.
- Our metadata is harvestable via OAI-PMH from day one.
- Search engines (schema.org, Google Dataset Search) understand us natively.
- If warpedia.org dies, the metadata survives in any DC-aware system.

## Profile overview

We use **DCMI Terms** ([dcterms:](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)) — the modern, refined vocabulary — not the legacy 15-element "Simple Dublin Core". DCMI Terms are a strict superset.

We extend with three external vocabularies for fields DC doesn't cover well:
- [**RightsStatements.org**](https://rightsstatements.org/) for machine-readable rights — the field of art for cultural heritage.
- [**MARC Relator Codes**](https://www.loc.gov/marc/relators/relaterm.html) for fine-grained creator/contributor roles (author, photographer, recipient, transcriber, translator, etc.).
- [**Wikidata QIDs**](https://www.wikidata.org/) for entity reconciliation (people, places, units, conflicts).

We add a small `wp:` namespace for fields that are warpedia-specific and don't have a clean DC equivalent (license tier, AI provenance).

## Field reference

Cardinality notation: `1..1` (required, one), `0..1` (optional, one), `0..n` (optional, many), `1..n` (required, many).

### Identity & description

| Field | Cardinality | Datatype | Vocabulary | Notes |
|---|---|---|---|---|
| `dcterms:identifier` | 1..1 | URI | — | The warpedia ULID URI: `https://warpedia.org/items/01HXXX...` |
| `dcterms:title` | 1..1 | string (xs:string) | — | Human-readable title. For untitled items (e.g. a loose photograph), generate `[Photograph of {subject}, {date}]`. |
| `dcterms:alternative` | 0..n | string | — | Alternate titles, including original-language titles for translated items. |
| `dcterms:description` | 0..1 | string (markdown) | — | Free-text description. May be AI-drafted with human review (record in provenance). |
| `dcterms:abstract` | 0..1 | string | — | Used for longer items (full diaries, oral histories) — a one-paragraph synopsis. |
| `dcterms:type` | 1..1 | URI | [DCMI Type Vocabulary](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/) + `wp:type:*` extension | See [taxonomies.md → Item type](./taxonomies.md#item-type). |
| `dcterms:medium` | 0..1 | URI | `wp:medium:*` | Physical medium (paper, glass plate negative, magnetic tape). See [taxonomies.md → Medium](./taxonomies.md#medium). |
| `dcterms:format` | 0..1 | string (MIME) | IANA media types | The digital file format (e.g. `image/jpeg`, `audio/wav`, `application/pdf`). |
| `dcterms:extent` | 0..1 | string | — | "2 pages", "00:42:18", "1 envelope", as appropriate. |
| `dcterms:language` | 0..n | URI | [BCP 47 / ISO 639](https://www.loc.gov/standards/iso639-2/php/code_list.php) | One per language present in the item. |

### Agents (creators, contributors, subjects)

| Field | Cardinality | Datatype | Vocabulary | Notes |
|---|---|---|---|---|
| `dcterms:creator` | 0..n | URI or string | `wp:person:*` URI; free-text fallback | Primary author. Use a `wp:person:` URI when reconciled; plain string when unknown ("Unknown soldier"). |
| `dcterms:contributor` | 0..n | structured (see below) | MARC relator code + URI/string | Anyone who contributed without primary authorship (transcribers, translators, photographers other than subject, recipients, etc.). |
| `dcterms:publisher` | 0..1 | string or URI | — | The institution that originally published or holds the item (e.g. "Australian War Memorial"). |
| `dc:subject` | 0..n | URI or string | Wikidata QID; LCSH; `wp:tag:*` | What the item is *about*. People, units, events, places. |
| `dcterms:audience` | 0..1 | URI | `wp:audience:*` | Intended audience marker for editorial/educational items. Rarely used. |

#### Contributor structure

Because "who contributed" matters (transcriber vs translator vs photographer), `dcterms:contributor` is a structured object, not a flat string:

```yaml
contributor:
  - role: "trc"                    # MARC relator: transcriber
    agent: "wp:user:..."           # or free text
    label: "Sarah Smith"
  - role: "trl"                    # MARC relator: translator
    agent: "wp:user:..."
    label: "Hans Mueller"
    notes: "German → English"
```

MARC relator codes used most often in warpedia: `aut` (author), `pht` (photographer), `trc` (transcriber), `trl` (translator), `rcp` (recipient), `dnr` (donor), `ivr` (interviewer), `ive` (interviewee), `edt` (editor), `ann` (annotator). Full list: [MARC Relator Codes](https://www.loc.gov/marc/relators/relaterm.html).

### Dates & coverage

| Field | Cardinality | Datatype | Vocabulary | Notes |
|---|---|---|---|---|
| `dcterms:created` | 0..1 | EDTF | [Extended Date/Time Format](https://www.loc.gov/standards/datetime/) | Date the original item was created. EDTF supports fuzzy dates: `1916-07?`, `1916-07-01/1916-11-18`, `1914-XX-XX`. |
| `dcterms:date` | 0..1 | EDTF | EDTF | Generic date (use `created` when you mean "when made"). |
| `dcterms:dateAccepted` | 0..1 | xs:dateTime | ISO 8601 | When warpedia ingested/accepted the item. |
| `dcterms:dateCopyrighted` | 0..1 | EDTF | EDTF | Copyright date if distinct from creation. |
| `dcterms:temporal` | 0..n | URI or string | `wp:conflict:*`; `wp:event:*` | What time period the item is *about* (battles, campaigns). |
| `dcterms:spatial` | 0..n | URI | `wp:place:*` (Wikidata-backed) | What place the item is *about* or depicts. Geographic location of events, not where the item was stored. |

### Source, provenance, relations

| Field | Cardinality | Datatype | Vocabulary | Notes |
|---|---|---|---|---|
| `dcterms:source` | 0..n | URI | — | Canonical URL at the source archive. The link a user would click to "go see the original". |
| `dcterms:provenance` | 0..n | string | — | Free-text custody history. AI enrichments are recorded structurally (see below), but human-curated provenance notes go here. |
| `dcterms:isPartOf` | 0..1 | URI | `wp:collection:*` | Parent collection. |
| `dcterms:hasPart` | 0..n | URI | `wp:item:*` | Child items (e.g. an oral history segmented into clips). |
| `dcterms:references` | 0..n | URI | `wp:item:*` or external | Other items this one references (e.g. a letter that mentions a previous letter). |
| `dcterms:isReferencedBy` | 0..n | URI | — | Inverse of above. |
| `dcterms:relation` | 0..n | URI | — | Generic catch-all when no more specific term applies. |
| `dcterms:replaces` | 0..1 | URI | `wp:item:*` | This item supersedes another (e.g. better scan of the same letter). |

### Rights — the discipline

This is where we deviate from vanilla Dublin Core most aggressively, because DC's rights handling is too loose for an aggregating archive.

| Field | Cardinality | Datatype | Vocabulary | Notes |
|---|---|---|---|---|
| `dcterms:rights` | 1..1 | URI | RightsStatements.org URI; or CC license URI | The machine-readable rights URL. **Required.** |
| `dcterms:license` | 0..1 | URI | CC URI; OGL URI | The specific license, when distinct from a rights statement. |
| `dcterms:rightsHolder` | 0..1 | URI or string | — | Who holds the underlying copyright. |
| `dcterms:accessRights` | 0..1 | URI | `wp:access:public`, `wp:access:embargoed`, `wp:access:restricted` | Whether warpedia displays the item publicly. |
| `wp:rightsTier` | 1..1 | string | `OPEN` \| `OPEN-SA` \| `NC` \| `LINK-ONLY` | The bucket discipline. See [source-licensing.md](../research/source-licensing.md). |
| `wp:attribution` | 1..1 | string | — | The exact attribution string to display ("Australian War Memorial, AWM 1DRL/0428"). Computed once, stored, never re-derived. |

### Warpedia-specific extensions (`wp:` namespace)

| Field | Cardinality | Datatype | Notes |
|---|---|---|---|
| `wp:rightsTier` | 1..1 | enum | License bucket — see above. |
| `wp:attribution` | 1..1 | string | Pre-computed display string. |
| `wp:enrichments` | 0..n | structured | AI/human enrichment chain — see below. |
| `wp:status` | 1..1 | enum | `draft` \| `under_review` \| `published` \| `withdrawn` |
| `wp:contributor_relationship` | 0..1 | string | For family submissions: "great-granddaughter", "nephew", etc. |
| `wp:living_relatives_consulted` | 0..1 | enum | `true` \| `false` \| `unknown` — privacy flag |
| `wp:redactions` | 0..n | structured | List of regions/passages redacted at relative request |

#### Enrichment structure (PROV-O-lite)

Every machine- or human-added enhancement records its origin. Append-only.

```yaml
wp:enrichments:
  - type: "transcription"
    generator: "transkribus:model_id_xyz/v3"
    generated_at: "2026-05-01T14:22:00Z"
    confidence: 0.87
    reviewed_by: null              # or wp:user:...
    review_status: "machine_only" | "human_reviewed" | "human_edited"
  - type: "translation"
    generator: "claude-opus-4-7"
    from_language: "de"
    to_language: "en"
    generated_at: "2026-05-02T09:11:00Z"
    reviewed_by: "wp:user:..."
    review_status: "human_reviewed"
  - type: "geocoding"
    generator: "wp:geocoder/v1"
    matched: "wp:place:somme-river"
    confidence: 0.93
  - type: "entity_linking"
    generator: "wp:entity-linker/v2"
    matched_entity: "wp:person:..."
    confidence: 0.71
    reviewed_by: "wp:user:..."
    review_status: "human_edited"
```

This is a deliberate simplification of [PROV-O](https://www.w3.org/TR/prov-o/). If we ever need full PROV-O, this structure converts cleanly.

## Per-item-type field requirements

Not every item type needs every field. Profile constraints by type:

| Item type | Required beyond defaults | Notes |
|---|---|---|
| `Letter` | `dcterms:created`, `creator` (sender), `contributor` with `rcp` (recipient) | Letters without a date are nearly useless — push hard for at least year. |
| `Diary entry` | `dcterms:created`, `creator`, `dcterms:isPartOf` (parent diary collection) | Each entry is its own item; the diary is the parent collection. |
| `Photograph` | `dcterms:created` (or "circa" date), `dcterms:spatial` if known | `creator` is the photographer (often unknown). Subject(s) go in `dc:subject`. |
| `Oral history` | `creator` (interviewee), `contributor` with `ivr` (interviewer), `dcterms:created` (interview date) | Interviewee is creator, not interviewer — they're the source of the content. |
| `Memoir` | `creator`, `dcterms:created` (writing date, may be decades after events) | `dcterms:temporal` records what period the memoir is *about*. |
| `Document` | `dcterms:created`, `dcterms:publisher` | Official records. Often Crown / federal copyright. |
| `Object` | `dcterms:medium`, `dcterms:extent` | Physical artifacts (medals, helmets, trench art) photographed for digital representation. |

## Crosswalks

How warpedia DCAP maps to and from common source schemas.

### Europeana Data Model (EDM) → Warpedia

Europeana exposes everything in EDM (which is itself DC-extended). The mapping is mostly 1:1.

| EDM | Warpedia | Notes |
|---|---|---|
| `edm:ProvidedCHO` (the cultural heritage object) | `Item` | |
| `edm:WebResource` | `Item.files` | |
| `edm:Aggregation` | `Item` (we don't separate the aggregation layer) | |
| `dc:title` | `dcterms:title` | |
| `dc:creator` | `dcterms:creator` | |
| `edm:rights` | `dcterms:rights` | EDM rights URIs are exactly RightsStatements.org URIs. |
| `dcterms:spatial` | `dcterms:spatial` | |
| `edm:type` | `dcterms:type` | EDM has 5 high-level types (TEXT, IMAGE, SOUND, VIDEO, 3D); we map to DCMI Type. |

### IIIF Presentation API → Warpedia

For images, we generate IIIF manifests on render. The IIIF metadata block is populated from the DC profile:

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://warpedia.org/iiif/wp:item:.../manifest.json",
  "type": "Manifest",
  "label": { "en": ["{{dcterms:title}}"] },
  "metadata": [
    { "label": { "en": ["Date"] }, "value": { "en": ["{{dcterms:created}}"] } },
    { "label": { "en": ["Creator"] }, "value": { "en": ["{{dcterms:creator}}"] } },
    { "label": { "en": ["Source"] }, "value": { "en": ["{{dcterms:source}}"] } }
  ],
  "rights": "{{dcterms:rights}}",
  "requiredStatement": {
    "label": { "en": ["Attribution"] },
    "value": { "en": ["{{wp:attribution}}"] }
  }
}
```

### schema.org → Warpedia (for SEO / Google Dataset Search)

Every item page emits JSON-LD using `schema.org/CreativeWork` (or a more specific subtype: `Article`, `Photograph`, `AudioObject`, `VideoObject`). The mapping is direct: `name` ← `dcterms:title`, `dateCreated` ← `dcterms:created`, `creator` ← `dcterms:creator`, `license` ← `dcterms:license`.

### MARC / EAD → Warpedia

When ingesting from a library or archival system that exposes MARC or EAD finding aids: use the [Library of Congress MARC-to-Dublin-Core crosswalk](https://www.loc.gov/marc/marc2dc.html) and the [Society of American Archivists EAD-to-DC mapping](https://saa-ts-dacs.github.io/dacs/). Don't re-derive these — they're well-trodden.

## Validation

Every Item file is validated against this profile at commit time. Validation rules:

1. **Cardinality** — required fields present, single-valued fields not arrays.
2. **Vocabulary** — controlled-vocab fields contain only listed values (see [taxonomies.md](./taxonomies.md)).
3. **Format** — EDTF strings parse, MIME types valid, URIs resolvable.
4. **Rights coherence** — `wp:rightsTier` matches the implied tier of `dcterms:rights` (e.g., `OPEN` tier requires a PD/CC0/CC BY/OGL URI; mismatch is a hard error).
5. **Attribution required** — `wp:attribution` non-empty for any item with `wp:rightsTier != "OPEN"` where attribution is a CC requirement.
6. **Provenance integrity** — every Item has at minimum an origin entry; AI enrichments declare a generator.

The validator is a small JSON Schema + custom checks runnable as a git pre-commit hook and in CI.

## Worked example

A real Australian War Memorial letter, fully populated:

```yaml
dcterms:identifier: "https://warpedia.org/items/01HXYZ..."
dcterms:title: "Letter from Pte. John Henry Smith to his mother, 3 July 1916"
dcterms:type: "http://purl.org/dc/dcmitype/Text"
wp:itemSubtype: "wp:type:letter"
dcterms:medium: "wp:medium:paper"
dcterms:format: "image/jpeg"
dcterms:extent: "2 pages"
dcterms:language: ["en"]
dcterms:description: |
  Two-page letter written the day before Smith was killed in action at the
  opening of the Battle of the Somme. Describes weather, rations, and
  anticipation of "the big push tomorrow".
dcterms:creator: "wp:person:01HXX-john-henry-smith"
dcterms:contributor:
  - role: "rcp"
    agent: "wp:person:01HXX-mary-smith"
    label: "Mary Smith (mother)"
  - role: "trc"
    agent: "wp:user:01HXX-sarah-smith"
    label: "Sarah Smith (transcriber, descendant)"
dcterms:created: "1916-07-03"
dcterms:dateAccepted: "2026-05-01T14:22:00Z"
dcterms:temporal: ["wp:event:battle-of-the-somme"]
dcterms:spatial: ["wp:place:somme-river"]
dc:subject:
  - "wp:person:01HXX-john-henry-smith"
  - "wp:event:battle-of-the-somme"
  - "wp:unit:1bn-aif"
dcterms:source: "https://www.awm.gov.au/collection/C1234567"
dcterms:publisher: "Australian War Memorial"
dcterms:isPartOf: "wp:collection:01HXX-smith-family-papers"
dcterms:rights: "https://creativecommons.org/licenses/by-nc/3.0/au/"
dcterms:rightsHolder: "Australian War Memorial"
wp:rightsTier: "NC"
wp:attribution: "Australian War Memorial, AWM 1DRL/0428. Licensed under CC BY-NC 3.0 AU."
wp:enrichments:
  - type: "transcription"
    generator: "transkribus:english_handwriting_v3"
    generated_at: "2026-05-01T15:00:00Z"
    confidence: 0.91
    reviewed_by: "wp:user:01HXX-sarah-smith"
    review_status: "human_edited"
  - type: "geocoding"
    generator: "wp:geocoder/v1"
    matched: "wp:place:somme-river"
    confidence: 0.95
wp:status: "published"
wp:contributor_relationship: "great-granddaughter"
wp:living_relatives_consulted: "true"
```

## References

- [DCMI Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
- [DCMI Singapore Framework for Application Profiles](https://www.dublincore.org/specifications/dublin-core/singapore-framework/)
- [DCMI Type Vocabulary](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/)
- [RightsStatements.org](https://rightsstatements.org/)
- [MARC Code List for Relators](https://www.loc.gov/marc/relators/relaterm.html)
- [Extended Date/Time Format (EDTF)](https://www.loc.gov/standards/datetime/)
- [Europeana Data Model (EDM)](https://pro.europeana.eu/page/edm-documentation)
- [IIIF Presentation API 3.0](https://iiif.io/api/presentation/3.0/)
- [PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/)
- [MARC to Dublin Core crosswalk (LoC)](https://www.loc.gov/marc/marc2dc.html)
