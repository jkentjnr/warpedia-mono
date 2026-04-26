# Manuals, Guides & Technical Reference — A Second Content Dimension

*Captured 2026-04-25. Adds technical reference material as a first-class content dimension alongside personal narrative.*

## Why this matters

Personal narrative (letters, diaries, oral histories) is one half of warpedia. The other half is the **technical and reference material** that the same people lived with: pilot's notes, field manuals, recognition guides, after-action reports, training pamphlets, equipment specifications. This is the content category that — historically — the founders' fathers' generation gravitated to (Spitfire pilot's notes, AFV recognition guides, *Jane's*-style references).

Including this dimension does three useful things:

1. **Broadens the audience materially.** Personal narrative speaks to readers interested in human experience and remembrance. Technical reference attracts modellers, restorers, simulator pilots, military historians, war-game designers, museum curators, and general enthusiasts. Both groups overlap with the broader encyclopedic-resource audience that warpedia exists to serve.
2. **Lets the dimensions reinforce each other.** A Vietnam veteran's diary that complains about the M16 jamming becomes vastly richer when linked to *FM 23-9 — M16A1 Rifle and Rifle Marksmanship*. A Spitfire pilot's combat report links to *AP 1565J Pilot's Notes*. The cross-link via the `Equipment` entity is the value warpedia adds that scattered hobbyist sites cannot.
3. **It's mostly free, mostly public domain.** Government technical publications dominate this space. US Army TMs/FMs are federal works (public domain by statute). UK Air Publications are Crown copyright with most pre-1970 material now expired or covered by OGL. This is the easiest content category to legally absorb at scale — directly aligned with warpedia's open-licensing principle.

## What already exists

| Source | Scale | Model | Notes |
|---|---|---|---|
| **Avialogs** | 1.5M+ pages, 900+ aircraft types, since 2010 | **Now free** (was paid until recently) | Largest dedicated aviation manuals archive. Used by enthusiasts, historians, restorers. Single-domain (aviation only). |
| **HyperWar (ibiblio.org)** | Hundreds of US Army TMs, FMs, official histories | Free, hobbyist-run since the 1990s | Patrick Clancey's volunteer project. Comprehensive WW2 US reference. Mixed copyright handling — leans on fair-use claims. Preserved in LoC Web Archives. |
| **Internet Archive — Military Manuals collection** | Tens of thousands of items | Free, user-uploaded | Quality and metadata are uneven; same manual often appears in multiple uploads with different completeness. |
| **HathiTrust** | Institutional digitisations including DoD publications | Free for PD; restricted for in-copyright | High-quality scans, but discoverability is poor for manuals specifically. |
| **Library of Congress — TM/FM Resource Guides** | Inventory lists, not full content | Free | Authoritative inventory of what exists; partial digitised links. Useful as a *checklist* of what should be acquired. |
| **Army Publishing Directorate (armypubs.army.mil)** | Modern + many historical FM/TM | Free, official | The canonical source for current US Army publications. |
| **Aviation Archives blog (Blogspot)** | Hundreds of pilot's notes scans | Free, hobbyist | Excellent for British/Commonwealth Air Publications (AP 1565 series — the Spitfire notes — etc.) |
| **Museum of Flight digital collections** | Selected items including Spitfire I pilot's notes | Free, museum-quality | Tiny scale, but high-fidelity. |
| **Lone Sentry** | WW2 US military intelligence and recognition guides | Free, hobbyist | Specialises in WW2 US bulletins, intelligence summaries, training films. |
| **Scribd / DocDroid / forum uploads** | Scattered, unreliable | Variable | The bulk of "I know it's online somewhere" lives here. |

### The pattern

Aviation has *one* serious aggregator (Avialogs) and dozens of hobbyist sites. **Land warfare** (tanks, infantry, artillery) has *no* equivalent of Avialogs — the content lives in fragmented Internet Archive uploads, HyperWar, and forum threads. **Naval** has the worst coverage — most ship manuals and Admiralty publications are paywalled at TNA or only at NHHC reading rooms. There is a real opportunity here, particularly outside aviation.

## Copyright landscape

| Origin | Status | Notes |
|---|---|---|
| **US Army TM/FM, US Navy NAVAIR/NAVSEA, USAF TO** | Public domain (federal works) | Anything authored by a US federal employee in the course of duty. Most US WW2-onwards manuals fall here. **Easiest to absorb.** |
| **UK Air Publications (AP), Army Publications, Admiralty Publications, pre-1970** | Mostly OGL/expired Crown copyright | Crown copyright on published government works expires 50 years after publication. Most WW1/WW2 material is now clear. Pre-1970 generally safe; verify per-item. |
| **UK Crown copyright, post-1970** | Open Government Licence | Reusable, free, just attribute. |
| **Commonwealth (AU/CA/NZ/IN) military publications** | Per-country Crown copyright rules | Australia: Commonwealth copyright expires 50 years after publication. Canada: 50 years. Most pre-1970 material clear. Verify per item. |
| **German, French, Italian, Soviet wartime manuals** | Mixed; varies by country and date of authorship | German Wehrmacht-era publications often have unclear copyright but most are treated as PD due to age and dissolution of the publishing entity. Soviet-era documents are post-1992 governed by Russian Federation rules. |
| **Modern (post-2000) coalition manuals** | Often classified or distribution-restricted | Generally LINK-ONLY at best. |
| **Manufacturer technical publications** (Supermarine, Boeing, Krupp, etc.) | Corporate copyright, often persistent | The aircraft / weapon manufacturer's own service manuals can still be in copyright. UK MoD-issued *Pilot's Notes* (AP 1565x) are Crown — safe. Manufacturer maintenance manuals are not. |

**Net read:** Probably 80–90% of pre-1980 military technical publications relevant to warpedia are legally absorbable. The 10–20% that aren't are mostly modern coalition documents and manufacturer-specific maintenance manuals — neither of which is the heart of what we're after.

## Implications for warpedia's design

### 1. New item subtypes

The taxonomy needs explicit subtypes for technical reference. See [taxonomies.md → Reference / technical subtypes](../metadata/taxonomies.md#reference--technical-subtypes).

Key additions:
- `wp:type:pilot-notes` — aircraft pilot's notes / POH
- `wp:type:field-manual` — US Army FM and equivalents
- `wp:type:technical-manual` — US Army TM and equivalents
- `wp:type:training-manual`
- `wp:type:doctrine`
- `wp:type:recognition-guide` — aircraft / AFV / ship recognition
- `wp:type:specification` — technical specs, blueprints
- `wp:type:after-action-report`
- `wp:type:intelligence-report`
- `wp:type:periodical` — forces newspapers, regimental journals
- `wp:type:reference-book` — handbooks, almanacs

### 2. New entity: `Equipment` (or `Materiel`)

A *Spitfire Mk IX* is the entity that links a manual (pilot's notes), a person (the pilot), an event (the sortie), and a unit (the squadron). It is not a Place, Person, Unit, or Event. It needs to be its own first-class entity.

```yaml
# Equipment
id: "wp:equipment:spitfire-mk-ix"
wikidata_qid: "Q1057119"
name: "Supermarine Spitfire Mk IX"
type: "wp:equipmentType:aircraft"
manufacturer: "Supermarine"
country_of_origin: "GB"
service_period:
  introduced: "1942"
  retired: "1955"
operators:
  - nation: "GB"
    units: ["wp:unit:611-sqn-raf", ...]
  - nation: "US"
    units: [...]
```

Equipment classification:
- `wp:equipmentType:aircraft` (with subtypes: fighter, bomber, transport, trainer, helicopter)
- `wp:equipmentType:vehicle` (tank, AFV, soft-skinned, artillery)
- `wp:equipmentType:vessel` (battleship, cruiser, destroyer, submarine, auxiliary)
- `wp:equipmentType:weapon` (small arms, crew-served, missile)
- `wp:equipmentType:personal-equipment` (helmet, webbing, parachute, flight suit)
- `wp:equipmentType:installation` (fortification, radar station, airfield)

Cross-link semantics:
- Manual `dc:subject` → references `Equipment`
- Personal-narrative item that mentions equipment → `dc:subject` → `Equipment`
- `Equipment.relatedManuals` derived from Items where `dc:subject` includes the equipment

### 3. Different audience, different presentation

Manual pages need different UI affordances than letter pages:
- **Page-level navigation** (jump to "engine starting procedures", "radio frequencies")
- **Equipment-centric landing pages** that bring together manuals, photographs, personal accounts, and Wikidata-derived specs
- **Modeller / restorer tags** (scale, decals, technical drawings) — likely a v1.x addition, not v1
- **Print-friendly export** for restorers and re-enactors who actually use these documents

### 4. Sourcing strategy

Tactically, the easiest first wave is:
1. **Bulk-ingest Avialogs catalog metadata** (now free), seeking permission for direct hosting where their digitisations are valuable. If that fails, link out and host the underlying public-domain originals from Internet Archive.
2. **Mirror HyperWar.** The site is hobbyist-run on borrowed infrastructure (ibiblio.org); preserving its content under proper Dublin Core metadata is genuinely valuable to the field. Reach out to Patrick Clancey or his successors first.
3. **Crawl Internet Archive's military manuals collections** with proper rights statements derived from each upload's license.
4. **Partner with one regimental museum or service museum** for a focused vertical (e.g. Spitfire-related material with the RAF Museum) as a proof-of-concept and a credibility anchor for grant applications.

## Risks specific to this dimension

1. **Modern restricted material.** Some items that look like they might be PD (e.g., recent FOIA-released documents) carry distribution restrictions. Default to OGL/PD-confirmed content; keep a `LINK-ONLY` bucket for anything ambiguous.
2. **Manufacturer copyright.** Aircraft/vehicle/weapon manufacturer manuals are *not* always covered by the Crown / federal exemption. Check the title page — government-issued (AP, TM, FM, NAVAIR) is safe; manufacturer-issued is not.
3. **Operational sensitivity.** Modern manuals (post-2000) for ordnance disposal, encryption, etc. should be excluded from warpedia even if technically PD — both for editorial and reputational reasons.
4. **Volume vs quality.** Internet Archive uploads are often poorly scanned, missing pages, or duplicated. We need a "best available" picker; if a museum-quality scan exists, prefer it over a forum upload regardless of which arrived first.

## Sources

- [Avialogs — Aviation Library](https://www.avialogs.com/)
- [HyperWar — World War II on the World Wide Web](http://www.ibiblio.org/hyperwar/)
- [HyperWar — US Army Technical Manuals index](https://www.ibiblio.org/hyperwar/USA/ref/TM/index.html)
- [Internet Archive — Military Field Manuals and Guides](https://archive.org/details/military-field-manuals-and-guides)
- [Library of Congress — US Army Field Manuals Resource Guide](https://guides.loc.gov/us-army-field-manuals)
- [Army Publishing Directorate — Field Manuals](https://armypubs.army.mil/ProductMaps/PubForm/FM.aspx)
- [Aviation Archives blog — Spitfire I Pilot's Notes (AP 1565A)](http://aviationarchives.blogspot.com/2023/09/supermarine-spitfire-i-pilots-notes.html)
- [Museum of Flight — Spitfire I pilot's notes (digitised)](https://digitalcollections.museumofflight.org/items/show/50160)
- [The Spitfire Manual on Internet Archive](https://archive.org/details/spitfiremanual0000unse)
