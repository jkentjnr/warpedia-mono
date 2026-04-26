# Warpedia — First-Cut Data Model

*Draft 2026-04-25. A starting point, deliberately under-engineered. Designed for archive interoperability (Dublin Core), entity reconciliation (Wikidata), rights hygiene (rightsstatements.org), and presentation portability (IIIF).*

## Design principles

1. **Use established standards, not invented ones.** Dublin Core for metadata, rightsstatements.org URIs for licensing, Wikidata QIDs for entity identity, IIIF for images, schema.org for SEO. Anything else is debt.
2. **License is a first-class field.** Every item has a machine-readable license tier so absorbed content cannot accidentally bleed into incompatible buckets.
3. **Provenance is required, not optional.** Every item chains back to its source for attribution and verification. Every AI enrichment records the model and a confidence flag.
4. **Reconcile to Wikidata wherever possible.** Battles, units, places, and known historical figures get Wikidata QIDs — gives warpedia.org a free, permanent entity backbone that survives the project.
5. **Family submissions default to CC BY-SA 4.0** (Wikimedia-compatible). CC0 opt-in for the bravest contributors. No CC BY-NC for user submissions, ever — it locks the content out of downstream reuse.

## Entity overview

```
Conflict ──┬── Event (battles, treaties, campaigns)
           ├── Unit (regiment, ship, division)
           │       │
           │       └── Service (person ↔ unit ↔ event over time)
           │                 │
           │  Person (soldier, civilian) ──┐
           │       │                       │
           │       ├── death               │   ┌── Award (medal type, e.g. VC)
           │       └── awards ─────────────┼───┘
           │                               │
           │  Item (diary, letter, photo, ─┼── Collection (provenance grouping)
           │       manual, report, ...)    │
           │                               ├── Theme (curatorial cross-conflict)
           │                               │
           │                               ├── Place ──┬── Cemetery
           │                               │           ├── Camp
           │                               │           └── Memorial
           │                               │
           │                               ├── Equipment (aircraft, vehicle, vessel, weapon)
           │                               │
           │                               ├── Trial / Treaty (legal entities)
           │                               │
           └── Contribution (who submitted, when, license)
```

Content threads through `Item`:
- **Personal narrative** — letters, diaries, photographs, oral histories, memoirs
- **Reference / technical** — manuals, doctrine, after-action reports, recognition guides
- **Casualty & commemoration** — rolls of honour, cemetery records, medal citations, gazette entries, service records
- **Cultural & creative** — war art, poetry, song, propaganda, broadcasts, newsreels
- **Confinement** — POW records, internment records, camp newspapers
- **Legal** — trial records, treaty texts, atrocity reports, diplomatic correspondence

All threads share the same metadata profile and the same cross-linking spine: an Item links to People, Places, Events, Units, Equipment, Camps, Themes via `dcterms:creator`, `dc:subject`, `dcterms:spatial`, `dcterms:temporal`, etc. The "Dad flew Spitfires" → diary + AP 1565J pilot's notes cross-link is the same mechanism that produces "great-grandfather's grave at Tyne Cot" → cemetery record + roll-of-honour entry + casualty notification telegram + battalion war diary for that day.

## Core entities

### `Item` — the unit of content (a diary entry, letter, photo, video, oral-history segment)

```yaml
id: "wp:item:01HXXXX..."           # ULID, opaque, never reused
type: "letter" | "diary_entry" | "photograph" | "audio" | "video" | "document" | "object" | "memoir"

# Dublin Core core (https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
dc:
  title: "Letter from Pte. J. Smith to his mother"
  creator: ["wp:person:..."]       # references; free-text fallback if unknown
  date: "1916-07-03"               # ISO 8601 or EDTF for fuzzy dates
  description: "Two-page letter describing conditions before the Somme advance."
  language: ["en"]
  type: "Text"                     # DCMI Type Vocabulary
  format: "image/jpeg"             # MIME for digital file
  identifier: "AWM:1DRL/0428"      # source identifier where applicable
  source: "https://awm.gov.au/..."  # canonical URL at source
  publisher: "Australian War Memorial"
  contributor: ["wp:person:..."]   # transcriber, translator, etc.

# Rights — the discipline that keeps the project legally clean
rights:
  tier: "OPEN" | "OPEN-SA" | "NC" | "LINK-ONLY"
  statement_uri: "http://rightsstatements.org/vocab/NoC-US/1.0/"
  license_uri: "https://creativecommons.org/licenses/by-sa/4.0/"   # if applicable
  attribution: "Australian War Memorial, AWM 1DRL/0428"
  notes: "Underlying letter PD; AWM digitisation under CC BY-NC 3.0 AU."

# Provenance — chain of custody
provenance:
  origin:
    source_archive: "Australian War Memorial"
    source_id: "AWM:1DRL/0428"
    ingested_at: "2026-05-01T..."
    ingest_method: "harvested" | "submitted" | "scraped"
  enrichments:                     # ordered list, append-only
    - type: "transcription"
      generator: "transkribus:model_id_xyz"
      generated_at: "2026-05-01T..."
      reviewed_by: null            # or wp:user:...
      confidence: 0.87
    - type: "translation"
      generator: "claude-opus-4-7"
      from: "de"
      to: "en"

# Storage / presentation
files:
  master:
    url: "ipfs://..." | "s3://..."
    sha256: "..."
    bytes: 4329218
  iiif_manifest: "https://warpedia.org/iiif/wp:item:01HXX/manifest.json"
  thumbnail: "https://..."

# Relationships — the heart of cross-conflict navigation
relations:
  people: ["wp:person:..."]        # mentioned or pictured
  units:  ["wp:unit:..."]          # author's unit, depicted unit
  events: ["wp:event:battle-of-the-somme"]
  places: ["wp:place:..."]         # Wikidata-reconciled
  conflicts: ["wp:conflict:wwi"]
  collection: "wp:collection:..."  # parent grouping

# Status
status: "draft" | "published" | "under_review" | "withdrawn"
```

### `Person`

```yaml
id: "wp:person:01HXXXX..."
wikidata_qid: "Q12345"             # if reconciled; nullable
names:
  preferred: "John Henry Smith"
  given: ["John", "Henry"]
  family: "Smith"
  alternates: ["Jack Smith", "J. H. Smith"]
born: "1894-03-15"                 # EDTF
birthplace: "wp:place:..."
biography: "..."                   # markdown, ≤ 1000 words; hand-written or AI-drafted+human-reviewed

# Death — structured, distinct from birthplace/birth
death:
  date: "1916-07-04"               # EDTF
  place: "wp:place:somme-river"
  cause: "wp:causeOfDeath:killed-in-action"
  cemetery: "wp:cemetery:thiepval-memorial"
  grave_reference: "Pier and Face 14 A and 15 C"   # CWGC-style grave reference
  commemorated_at: ["wp:memorial:thiepval"]

# Service record (multi-conflict support — a person can have many)
service:
  - conflict: "wp:conflict:wwi"
    role: "wp:role:soldier"
    units: ["wp:unit:1bn-aif"]
    rank: "Private"
    service_number: "2418"
    enlisted: "1915-01-10"
    discharged: "1916-07-04"       # KIA in this case
    theatres: ["wp:theatre:western-front"]
    notes: "..."

# Awards — structured list of decorations received
awards:
  - award: "wp:award:military-medal"     # the Award entity (the type)
    date: "1916-04-12"
    citation_item: "wp:item:01HXX..."    # the citation document
    gazette_reference: "London Gazette, 14 April 1916, p.4012"

# POW episodes — structured, can have multiple
pow_episodes:
  - camp: "wp:camp:stalag-luft-iii"
    captured: "1943-08-12"
    captured_at: "wp:place:..."
    released: "1945-04-29"
    repatriated: "1945-05-15"

external_ids:
  awm: "AWM:..."                   # link-out, not absorb
  cwgc: "CWGC:..."
  fold3: "fold3:..."

rights:
  tier: "OPEN"
  ...
```

### `Equipment` — aircraft, vehicle, vessel, weapon, installation

The bridge between personal narrative and technical reference. A *Spitfire Mk IX* is the entity that ties a pilot (Person), his squadron (Unit), his sortie (Event), his diary entry (Item), and his pilot's notes (Item) together.

```yaml
id: "wp:equipment:spitfire-mk-ix"
wikidata_qid: "Q1057119"
name: "Supermarine Spitfire Mk IX"
type: "wp:equipmentType:aircraft-fighter"
manufacturer: "Supermarine"
country_of_origin: "GB"
service_period:
  introduced: "1942"
  retired: "1955"
operators:
  - nation: "GB"
    units: ["wp:unit:611-sqn-raf"]
  - nation: "US"
    units: ["wp:unit:336-fs-usaaf"]
# Specifications and detailed history are pulled from Wikidata at render time —
# don't duplicate. Only fields warpedia uniquely curates live here.
```

Cross-link semantics:
- A `wp:type:pilot-notes` Item has `dc:subject: ["wp:equipment:spitfire-mk-ix"]`.
- A diary entry that mentions "we got new Spitfires" has the same subject link.
- The Equipment landing page brings both together: "Spitfire Mk IX → 47 personal accounts, 12 manuals, 3 photographs".

### `Conflict`, `Event`, `Unit`, `Place`

Thin wrappers over Wikidata. Don't duplicate Wikipedia's reference content — point to it.

```yaml
# Conflict
id: "wp:conflict:wwi"
wikidata_qid: "Q361"
name: "First World War"
start: "1914-07-28"
end: "1918-11-11"
# That's it. Everything else comes from Wikidata at render time.
```

```yaml
# Event (battle, campaign, action)
id: "wp:event:battle-of-the-somme"
wikidata_qid: "Q156635"
name: "Battle of the Somme"
conflict: "wp:conflict:wwi"
start: "1916-07-01"
end: "1916-11-18"
place: "wp:place:somme-river"
```

```yaml
# Unit
id: "wp:unit:1bn-aif"
wikidata_qid: "Q4543210"           # if exists
name: "1st Battalion, Australian Imperial Force"
parent: "wp:unit:1bde-aif"
nation: "AU"
service:
  - conflict: "wp:conflict:wwi"
```

```yaml
# Place
id: "wp:place:somme-river"
wikidata_qid: "Q161034"
name: "Somme"
geo: { lat: 49.99, lon: 2.50 }
country: "FR"
```

### `Award` — a decoration type (Victoria Cross, Medal of Honor, Iron Cross)

The award *type*, not the instance. The instance lives on `Person.awards[]`. Wikidata-reconcilable.

```yaml
id: "wp:award:victoria-cross"
wikidata_qid: "Q193384"
name: "Victoria Cross"
country: "GB"
established: "1856-01-29"
description: "Highest award for valour in the face of the enemy in the British honours system."
post_nominal: "VC"
ribbon_image: "..."                # optional small graphic
```

### `Cemetery` — extension of `Place`

```yaml
id: "wp:cemetery:tyne-cot"
type: "wp:cemetery"                # tagged as a Cemetery, also a Place
wikidata_qid: "Q1145497"
name: "Tyne Cot Cemetery"
location: { lat: 50.886, lon: 2.998, country: "BE" }
administering_body: "Commonwealth War Graves Commission"
designed_by: "Sir Herbert Baker"
dedicated: "1927-06-19"
burial_count: 11961
commemorated_count: 34000          # named on memorial walls without a grave
nationalities: ["GB", "AU", "NZ", "CA", "ZA", "IN", "WI", "NF"]
external_ids:
  cwgc: "TYNE COT CEMETERY"
```

### `Camp` — extension of `Place` for POW / internment / labour camps

```yaml
id: "wp:camp:stalag-luft-iii"
type: "wp:camp"
wikidata_qid: "Q703573"
name: "Stalag Luft III"
camp_type: "wp:campType:pow"       # see taxonomies
location: { lat: 51.602, lon: 15.317, country: "PL", historic_country: "DE" }
operating_period:
  from: "1942-04"                  # EDTF
  to: "1945-01-27"
administering_power: "DE"
intended_population: "Allied air force POWs"
peak_capacity: 10000
known_for: "Great Escape (March 1944)"
related_units: ["wp:unit:luftwaffe-stalag-administration"]
```

### `Memorial` — extension of `Place` for monuments

```yaml
id: "wp:memorial:thiepval"
type: "wp:memorial"
wikidata_qid: "Q1142533"
name: "Thiepval Memorial to the Missing of the Somme"
location: { lat: 50.051, lon: 2.687, country: "FR" }
designed_by: "Sir Edwin Lutyens"
dedicated: "1932-08-01"
commemorates:                       # what the memorial marks
  conflict: "wp:conflict:wwi"
  events: ["wp:event:battle-of-the-somme"]
  category: "missing-with-no-known-grave"
named_count: 72337                  # number of names on the memorial
inscription: "..."                  # text of the principal inscription
```

### `Theme` — curatorial cross-conflict aggregation

The defensible-niche entity. A Theme aggregates Items, Equipment, Events, People, and Places across multiple Conflicts under a curated argument: "Evolution of infantry small arms 1914–2024", "Civilian aerial bombing", "Women in combat roles".

```yaml
id: "wp:theme:civilian-aerial-bombing"
title: "Civilian aerial bombing, 1937–present"
description: |
  From Guernica through Hamburg, Dresden, Tokyo, Hiroshima, the linebacker
  campaigns over Hanoi, the Iraqi targeting of Kurdish villages, and modern
  drone strikes — how the deliberate or incidental targeting of civilian
  populations from the air evolved through the 20th and 21st centuries.
curator: "wp:user:..."
status: "published"
related:
  conflicts: ["wp:conflict:spanish-civil-war", "wp:conflict:wwii", ...]
  events: ["wp:event:bombing-of-guernica", "wp:event:bombing-of-dresden", ...]
  equipment: ["wp:equipment:b-17", "wp:equipment:lancaster", ...]
  items: ["wp:item:01HXX-guernica-eyewitness", ...]
  people: ["wp:person:..."]
narrative_items:                   # the Theme's own essay components
  - "wp:item:01HXX-bombing-essay-1"
  - "wp:item:01HXX-bombing-essay-2"
```

### `Trial` — war crimes / military justice proceedings

```yaml
id: "wp:trial:nuremberg-imt"
wikidata_qid: "Q132305"
name: "International Military Tribunal at Nuremberg"
jurisdiction: "wp:trialJurisdiction:nuremberg"
period:
  from: "1945-11-20"
  to: "1946-10-01"
location: "wp:place:nuremberg-palace-of-justice"
defendants: ["wp:person:hermann-goering", ...]
related_items:                     # exhibits, transcripts, judgments
  - "wp:item:01HXX-nuremberg-judgment"
  - "wp:item:01HXX-goering-cross-examination"
```

### `Treaty` — treaty / legal-document entity, distinct from the text Item

```yaml
id: "wp:treaty:versailles"
wikidata_qid: "Q165921"
name: "Treaty of Versailles"
signed: "1919-06-28"
parties: ["DE", "GB", "FR", "US", "IT", ...]
ends_conflict: "wp:conflict:wwi"
text_items: ["wp:item:01HXX-versailles-text-en", "wp:item:01HXX-versailles-text-fr"]
```

### `Collection` — a grouping (typically one person's papers, or a family donation)

```yaml
id: "wp:collection:01HXXXX..."
title: "The papers of Pte. John Henry Smith"
description: "Letters, diary, and photographs from John's WW1 service, donated by his great-granddaughter."
items: ["wp:item:..."]
contributor: "wp:user:..."
created_at: "2026-05-01T..."
license_default: "CC-BY-SA-4.0"   # default for items in this collection
```

### `Contribution` — the audit trail for user-submitted content

```yaml
id: "wp:contribution:01HXXXX..."
contributor: "wp:user:..."
contributor_relationship: "great-granddaughter"   # how they relate to the subject
items: ["wp:item:..."]
submitted_at: "2026-05-01T..."

# The licensing handshake — what the contributor agreed to
license_grant:
  license: "CC-BY-SA-4.0"
  consent_text_version: "warpedia-tos-v1.0"
  ip_warranty_acknowledged: true   # they assert they hold the rights
  
# Living-relative privacy considerations
privacy:
  living_relatives_consulted: true | false | unknown
  redactions_requested: []
```

### `User` (contributor)

Minimal — auth is a separate concern. Just enough for attribution and contact.

```yaml
id: "wp:user:01HXXXX..."
display_name: "Sarah Smith"
public_profile: true | false
joined: "2026-05-01"
```

## Geospatial extensions

Geospatial is a v2 UI but a v1 metadata discipline — retrofitting coordinates is painful.

```yaml
# Item — optional geospatial location/extent
Item:
  geo:                              # optional
    type: "Point" | "Polygon" | "BoundingBox"
    coordinates: [...]              # GeoJSON
    accuracy_meters: 50             # known precision
    georeferenced_by: "wp:user:..."
    georeferenced_method: "manual" | "exif" | "ai-suggested-confirmed"

# Event — multiple time-windowed locations (front lines move)
Event:
  locations:                        # was single 'place', now plural
    - place: "wp:place:..."
      from: "1916-07-01"
      to: "1916-07-14"
    - place: "wp:place:..."
      from: "1916-07-15"
      to: "1916-07-31"

# Place — polygon boundary for areas
Place:
  boundary:                         # optional polygon
    type: "Polygon"
    coordinates: [...]              # GeoJSON
```

The discipline: every Place gets at minimum a centroid; battlefields and theatres get bounding polygons; trench maps get georeferenced bounds; photographs with EXIF GPS or known location get coordinates. None of this needs UI in v1 — but it must be in the schema so v2's map UI is a query, not a migration.

## License tier — the discipline

Every `Item.rights.tier` is one of:

| Tier | Meaning | Examples | Bulk export behavior |
|---|---|---|---|
| `OPEN` | PD / CC0 / CC BY / OGL | NARA, LoC PD, UK TNA, Wikidata, Europeana PD | Included in default exports to Wikimedia / Internet Archive |
| `OPEN-SA` | CC BY-SA (any version ≥ 2) | Wikipedia text, some Commons images | Included only in SA-tagged exports (or quarantined) |
| `NC` | CC BY-NC and equivalents | IWM, AWM, Texas Tech Vietnam | Stored, served, but **excluded from open exports**; flagged with NC badge in UI |
| `LINK-ONLY` | Anything else (Fold3, Ancestry, etc.) | Paywalled scans, all-rights-reserved | Stored as metadata + outbound link only; no file ingestion |

This single field is what keeps the project legally clean and is what makes the donate-to-Wikimedia pipeline work without a lawyer screaming.

## Identifiers

- **Internal IDs** are ULIDs prefixed with `wp:<type>:` — opaque, sortable, never reused.
- **External IDs** live in their own field per source (`external_ids.awm`, `external_ids.cwgc`, etc.) — never overload the primary ID.
- **Wikidata QID** is a top-level field on every entity that can reasonably be reconciled. If unreconciled, leave null.

## Storage shape

A flat-file content store works for v1:

```
content/
  items/01HXXXX.../
    item.yml
    master.jpg          # original master file
    derivatives/
      iiif-manifest.json
      thumb.webp
  people/wp:person:.../person.yml
  collections/.../collection.yml
  conflicts/...
  events/...
```

This survives any rewrite. It's also git-diffable, which matters for an enduring project: every change is auditable forever, and the entire dataset is rsync-able to Internet Archive without a database export step.

## What's deliberately not in v1

- **Full-text search index** — Lunr/Pagefind on build is enough until ~100K items. ElasticSearch / Meilisearch can be added later without changing the data model.
- **Fine-grained access control** — public/draft is enough for v1.
- **Versioning of items beyond git** — git history is sufficient for an archive of this size.
- **Federation protocol** — design, but don't implement, until there's something to federate with.
- **Discussion / comments** — defer; introduces moderation burden disproportionate to v1 value.

## Open questions for v1.1
- **EDTF dates** for fuzzy/uncertain dates — likely yes, but tooling is thin.
- **Multi-language item content** — single canonical language + linked translations vs. parallel field per language.
- **Person disambiguation** — when 12 "John Smith"s served at the Somme, what's the UX?
- **PROV-O for AI provenance** — overkill or correct? Lean toward correct for an archive that will outlive current AI models.

## References
- [Dublin Core Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
- [RightsStatements.org vocabulary](https://rightsstatements.org/page/1.0/)
- [Creative Commons license suite](https://creativecommons.org/share-your-work/cclicenses/)
- [IIIF Presentation API 3.0](https://iiif.io/api/presentation/3.0/)
- [Wikidata data model](https://www.mediawiki.org/wiki/Wikibase/DataModel)
- [PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/)
- [Europeana Data Model (EDM)](https://pro.europeana.eu/page/edm-documentation)
- [Extended Date/Time Format (EDTF)](https://www.loc.gov/standards/datetime/)
