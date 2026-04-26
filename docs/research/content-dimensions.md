# Content Dimensions of War — A Comprehensive Map

*Captured 2026-04-25. Maps the full range of war-related content categories beyond the two primary dimensions (personal narrative, technical reference). For each: what it is, where it lives today, what it costs to absorb, and whether warpedia should treat it as first-class, derivative, or out-of-scope.*

## Why this matters

A war archive that only handles letters and manuals is a smaller archive than the field deserves. War-related data has at least a dozen distinct shapes — casualty rolls, battle maps, propaganda posters, war art, treaty texts, intelligence releases. Each has its own data model, its own existing players, its own licensing pattern, and its own audience.

This document is the catalogue. The decisions about which to ship in v1 are summarized at the end.

## Primary content dimensions

### 1. Personal narrative *(already covered)*
Letters, diaries, photographs, oral histories, memoirs. The emotional spine of warpedia. See [landscape-and-viability.md](./landscape-and-viability.md).

### 2. Technical & reference *(already covered)*
Manuals, doctrine, after-action reports, recognition guides. See [manuals-and-reference.md](./manuals-and-reference.md).

## Casualty, commemoration & service-record dimension

### 3. Casualty & commemoration data
The death-and-remembrance layer. Names, dates, units, places of death, burial locations, memorial inscriptions.

- **Shape**: highly structured records (name, DOB, DOD, unit, rank, decoration, cemetery, plot, inscription, photograph of grave)
- **Existing**: [CWGC](https://www.cwgc.org/) (1.7M+ Commonwealth war dead), [ABMC](https://www.abmc.gov/) (US dead overseas), Volksbund (German), Vietnam Veterans Memorial Fund "Wall of Faces", AWM Roll of Honour, NARA's Honor States, regimental rolls, Findagrave (community-built)
- **Licensing**: CWGC data is reusable with attribution; ABMC/NARA federal; AWM CC BY-NC; Findagrave user-contributed under their own terms
- **Schema impact**: New `Person.death` structured facet; new item subtypes `wp:type:roll-of-honour`, `wp:type:cemetery-record`, `wp:type:headstone`. New `Cemetery` entity (subset of Place with structured facets).
- **Verdict**: **First-class, v1.** Commemoration is intrinsically part of the historical record — naming the dead is the foundational act of war remembrance. Cemetery records, rolls of honour, and grave references also provide a high-trust form of structured data that anchors person entities to verifiable external sources (CWGC, ABMC), which is what Wikipedia-grade verifiability requires.

### 4. Awards & decorations
Citations, medal rolls, gallantry awards. The London Gazette in the UK is the canonical source for British/Commonwealth awards; the US has multiple registries (Hall of Valor, Congressional Medal of Honor Society).

- **Shape**: structured (medal type, date, citation text, gazette reference, photograph of medal)
- **Existing**: [London Gazette](https://www.thegazette.co.uk/), [Hall of Valor](https://valor.militarytimes.com/), AWM Honours and Awards, NARA records
- **Licensing**: Gazette is OGL; most national systems open
- **Schema impact**: New `Award` entity (the *type* — Victoria Cross, Medal of Honor — Wikidata-reconcilable). `Person.awards[]` structured facet. New item subtype `wp:type:medal-citation` and `wp:type:gazette-entry`.
- **Verdict**: **First-class, v1.** Cheap to model, high genealogist value, often the most narratively rich piece of an otherwise sparse service record.

### 5. Service & administrative records
Enlistment papers, discharge papers, pension records, medical/casualty records, court martial records, embarkation rolls, prisoner-of-war indices.

- **Shape**: structured records, often paywalled by genealogy aggregators despite underlying PD status
- **Existing**: TNA WO series, NARA pension files, AWM B2455 (WW1 service records), ICRC (POWs), Fold3, Findmypast, Ancestry
- **Licensing**: underlying PD/OGL/federal at source archives; contractually fenced at aggregators
- **Schema impact**: extends `Person.service[]` with structured fields for enlistment, discharge, medical events; new item subtypes `wp:type:service-record`, `wp:type:pension-record`, `wp:type:court-martial`, `wp:type:embarkation-roll`
- **Verdict**: **First-class, v1**, but pursue source-of-record (national archive) over scraping aggregators (illegal *and* low-fidelity).

## Geospatial dimension

### 6. Maps & geospatial layers
Trench maps, target maps, bombing damage assessments, front-line movement, cemetery locations, fortification surveys, bomb-disposal records, modern war archaeology overlays.

- **Shape**: GeoJSON / GeoTIFF / time-indexed map layers; georeferenced historical maps; bounding boxes on Events; coordinates on Items
- **Existing**: TNA WO 297 (trench maps), [USGS / NLS overlays](https://maps.nls.uk/), [IWM Bombsight project](http://bombsight.org/), [Defence of Britain Project](https://www.archaeologydataservice.ac.uk/archives/view/dob/), CWGC has lat/long for every cemetery
- **Licensing**: Crown / federal mostly open; NLS map overlays under their own CC licenses
- **Schema impact**: `Item.geo` (GeoJSON) for georeferenced items; `Event.locations[]` (multi-location with time windows); `Place.boundingBox` for areas; `Place.boundary` (polygon) for battlefields and theatres
- **Verdict**: **Metadata discipline v1, full UI v2.** Even if you can't render time-slider battle maps in v1, the data must be ingested with proper coordinates from day one — retrofitting geospatial fields is painful.

### 7. Order of battle & quantitative data
Force composition over time, casualty statistics, production figures (tanks built, aircraft delivered), sortie counts, ammunition expended, ship losses by month, demographic mobilisation rates, GDP allocated.

- **Shape**: tabular datasets — `dcmitype:Dataset`
- **Existing**: USSBS reports, official histories, academic compilations (Niall Ferguson, Edward Mead Earle), Wikipedia infoboxes, MilitaryFactory.com
- **Licensing**: mixed — official histories are PD/OGL; academic compilations have publisher copyright
- **Schema impact**: `dcmitype:Dataset` items with structured `wp:dataSchema` field (column definitions); new item subtype `wp:type:dataset` (already in taxonomy)
- **Verdict**: **First-class, v1** — but small. Order-of-battle data binds units, equipment, and events together; without it, those entities are decorative. Won't drive traffic but provides rigour.

## Cultural & creative dimensions

### 8. War art & visual response
Official war artists' work (IWM has 20,000+ pieces), unofficial soldier art, sculpture, war memorials as artworks, modern conflict photography by artists.

- **Shape**: `dcmitype:StillImage` items with extended creator/curator fields
- **Existing**: IWM, AWM (Anzac art), Smithsonian American Art Museum, [The National WWI Museum](https://www.theworldwar.org/), modern collections like *Combat Paper Project*
- **Licensing**: very mixed — IWM has CC BY-NC for many; modern living artists hold copyright
- **Schema impact**: new item subtype `wp:type:war-art`, possible `wp:tag:visual-response`
- **Verdict**: **v1** — adds depth. Existing item types cover the data shape; just curation effort.

### 9. War poetry, prose & literature
The Owen/Sassoon/Brooke canon (PD globally — Owen died 1918), Vietnam-era poetry (Komunyakaa, Weigl), Iraq/Afghanistan veteran writing (Powers, Klay), war fiction with primary-source value.

- **Shape**: text items
- **Existing**: [War Poets Association](http://www.warpoets.org/), [Poetry Foundation](https://www.poetryfoundation.org/) collections, the Imperial War Museum's writing collections
- **Licensing**: WW1 poets PD; everything since varies
- **Schema impact**: new item subtype `wp:type:war-poetry`, `wp:type:war-prose`
- **Verdict**: **v1** — emotionally important and easy to model. Be careful with editorial framing (whose interpretation?).

### 10. War music & soldier songs
Martial music, soldier songs ("Tipperary", "Lili Marleen", Vietnam-era folk), propaganda music, modern military music.

- **Shape**: `dcmitype:Sound` items + sheet music as `dcmitype:StillImage` or `Text`
- **Existing**: LoC American Folklife Center, Smithsonian Folkways, [BBC War Songs](https://www.bbc.co.uk/), Soldier Songs and Voices project
- **Licensing**: traditional/folk songs mostly PD; recorded performances often in copyright
- **Schema impact**: new item subtype `wp:type:war-song`
- **Verdict**: **v1.x** — culturally rich but secondary. Existing audio handling covers it.

### 11. War film & broadcasting
Newsreels, documentaries, propaganda films, official combat camera footage, war correspondent broadcasts (Murrow's London, Cronkite's Vietnam, Anderson Cooper's Ukraine).

- **Shape**: `dcmitype:MovingImage` and `dcmitype:Sound` items
- **Existing**: [British Pathé](https://www.britishpathe.com/), [Critical Past](https://www.criticalpast.com/), USAF Combat Camera, NHK archives, EBU Ukraine Archive (already noted in landscape doc)
- **Licensing**: official combat camera mostly PD/OGL; commercial newsreel companies (Pathé, Movietone) have aggressive licensing
- **Schema impact**: existing `wp:type:newsreel`, add `wp:type:combat-camera`, `wp:type:war-broadcast`
- **Verdict**: **v1 for PD/OGL only.** Skip commercial newsreels in v1 — link out instead.

### 12. Propaganda & psyops
Posters, leaflets, broadcasts, censored mail, postal markings, modern psyops social-media campaigns.

- **Shape**: existing item types (image, audio, text)
- **Existing**: LoC Prints and Photographs, IWM posters, Ad Council archives, RAND Corporation psyops collections, the [Hoover Institution](https://www.hoover.org/) leaflet collections
- **Licensing**: government-issued mostly PD/OGL
- **Schema impact**: `wp:tag:propaganda` already in the taxonomy; add `wp:type:propaganda-poster`, `wp:type:psyops-leaflet`
- **Verdict**: **v1.** Uniquely revealing about a society at war. Mostly PD; cheap to absorb.

## Confinement & coercion dimension

### 13. POW & internment data
Camp registers, Red Cross records, escape narratives, camp newspapers (Stalag Luft III's *Wartime Log*, Changi University records), repatriation records, civilian internment (Manzanar, Tule Lake, Channel Islands, Changi civilian wing).

- **Shape**: structured camp records + collections of personal items + camp-as-place
- **Existing**: [ICRC](https://www.icrc.org/) has 5M+ WWII POW records (restricted access); TNA WO 416; [Densho](https://densho.org/) (Japanese-American internment); regimental association records
- **Licensing**: ICRC restricted; national archives mostly open; Densho CC BY-NC
- **Schema impact**: new `Camp` entity with structured facets (capacity, dates of operation, administering power, conditions, prisoner population); new item subtypes `wp:type:pow-record`, `wp:type:internment-record`, `wp:type:camp-newspaper`
- **Verdict**: **First-class, v1.** Distinct enough to deserve its own entity; cross-cuts personal narrative meaningfully (a single POW often passed through multiple camps over time).

### 14. War crimes & atrocity records
Nuremberg, Tokyo, ICTY (Yugoslavia), ICTR (Rwanda), Cambodia ECCC, ongoing ICC matters. Eyewitness depositions, prosecution exhibits, judicial findings.

- **Shape**: text items + structured trial records + linked perpetrator/victim entities
- **Existing**: [Yale Avalon Project](https://avalon.law.yale.edu/) (Nuremberg), [ICTY archives](https://www.icty.org/), [USC Shoah Foundation](https://sfi.usc.edu/) (52,000+ Holocaust testimonies), Cambodian Documentation Center
- **Licensing**: UN materials open with attribution; Shoah Foundation testimonies under their own license; national tribunal records mostly open
- **Schema impact**: new item subtypes `wp:type:trial-record`, `wp:type:trial-testimony`, `wp:type:trial-exhibit`, `wp:type:atrocity-report`. Possibly a `Trial` or `LegalProceeding` entity.
- **Verdict**: **v1, sensitively.** This is heavy material with serious editorial and moderation burden — but excluding it would be a moral failure. Partner with established projects (Yale Avalon, USC Shoah) rather than rebuild.

## Intelligence & secrecy dimension

### 15. Intelligence, espionage, code-breaking
Bletchley Park, Magic, Venona, OSS/SOE, modern SIGINT releases. The decade-of-secrecy pattern: most archives only opened decades after events.

- **Shape**: documents + agent biographies + (sometimes) machine-derived data; recently-declassified releases as primary sources
- **Existing**: [GCHQ historical releases](https://www.gchq.gov.uk/), NSA Cryptologic Quarterly, [CIA FOIA reading room](https://www.cia.gov/readingroom/), TNA HW series, [NSA Venona](https://www.nsa.gov/Helpful-Links/NSA-FOIA/Declassification-Transparency-Initiatives/Historical-Releases/Venona/)
- **Licensing**: mostly OGL/federal once declassified
- **Schema impact**: `wp:tag:intelligence`; new item subtype `wp:type:intelligence-report` (already added with manuals); possibly `wp:type:declassified-release` to flag freshly-released material
- **Verdict**: **v1 as facet, not entity.** Niche audience but adds depth. No new entities needed.

## Legal & political dimension

### 16. Treaties, declarations & political documents
Versailles, Atlantic Charter, Geneva Conventions, declarations of war, armistices, parliamentary resolutions, diplomatic correspondence (the famous July 1914 telegram traffic, the Zimmermann Telegram).

- **Shape**: text items
- **Existing**: [Yale Avalon Project](https://avalon.law.yale.edu/) is the canonical hub; UN Treaty Collection; [Foreign Relations of the United States (FRUS)](https://history.state.gov/)
- **Licensing**: international treaties are PD; FRUS is federal-PD
- **Schema impact**: new item subtype `wp:type:treaty`, `wp:type:declaration`, `wp:type:diplomatic-correspondence`. Possibly a `Treaty` entity for the document itself, distinct from the Item that holds the text.
- **Verdict**: **Modest — link to Avalon mostly.** Wikipedia covers treaty *summaries* well; warpedia adds value only for primary-source diplomatic correspondence in genealogical context.

## Underrepresented voices dimension

### 17. Women, indigenous, colonial, civilian, LGBTQ+ voices
The structural one. Indigenous soldiers (Māori Battalion, Navajo Code Talkers, Indian Army's 2.5M men, African colonial troops); women's service (WAAF, WAVES, SOE agents, Soviet Night Witches, factory workers, nurses); LGBTQ+ in service (largely suppressed historically — only now being recovered); child evacuees and Kindertransport survivors.

- **Shape**: not a new content type — a *coverage and curation discipline*
- **Existing**: scattered, often single-purpose projects ([Densho](https://densho.org/), [Kindertransport Association](https://www.kindertransport.org/), [Women of WW2](https://www.iwm.org.uk/history/women-in-wwii), Veterans Legacy Memorial); [Voces Oral History Center](https://voces.lib.utexas.edu/) for Latino veterans
- **Schema impact**: no new entities — existing `wp:role:` taxonomy already has refugee, internee, civilian, resistance, journalist, photographer, diplomat, munitions-worker, land-army, relief-worker, peacekeeper. May add `wp:tag:underrepresented-voices` for editorial flagging.
- **Verdict**: **First-class commitment, v1.** This is where warpedia could differentiate hardest. Most national archives are structurally biased toward majority-male combatant narratives. Needs editorial intent, not new schema.

### 18. Animals in war
War horses, mules, dogs (Dickin Medal recipients), carrier pigeons, mascots.

- **Shape**: existing `Person`-equivalent — but the entity is an Animal not a Person
- **Existing**: [PDSA Dickin Medal records](https://www.pdsa.org.uk/what-we-do/animal-awards-programme/pdsa-dickin-medal), Animals in War Memorial (Hyde Park), various unit mascot records
- **Schema impact**: arguably extend `Person` to be `Subject` (covering humans + service animals). Or simpler: add `wp:role:animal-mascot`, `wp:role:service-animal` and let context handle it. Probably the simpler route in v1.
- **Verdict**: **v1.x niche.** Lovely material; tiny audience; minimal schema cost.

## Material culture dimension

### 19. Battlefield archaeology & material culture
Recovered relics, conservation records, restored warbirds and AFVs, fortification surveys, unexploded ordnance maps, identified-remains projects.

- **Shape**: items (objects, photos, reports) + sometimes geospatial
- **Existing**: regimental museums, restoration projects, [DPAA](https://www.dpaa.mil/) (Defense POW/MIA Accounting Agency), [JCCC](https://www.gov.uk/government/groups/joint-casualty-and-compassionate-centre) (UK)
- **Schema impact**: covered by `dcmitype:PhysicalObject` items + `Equipment` cross-links; `wp:type:archaeological-survey`, `wp:type:remains-identification`
- **Verdict**: **v1 light coverage.** No new entities; existing types cover.

### 20. Memorials & monuments
The physical places where war is remembered. Cenotaphs, named memorials, regimental chapels, Tomb of the Unknown variants worldwide, Vietnam Wall, modern temporary memorials.

- **Shape**: place-like, with structured facets (designer, architect, dedication date, inscription text, photographs)
- **Existing**: [War Memorials Register (IWM)](https://www.iwm.org.uk/memorials), Smithsonian Inventory of American Memorials, AWM, regional databases
- **Schema impact**: `Memorial` entity (subset of Place) with structured facets — designer, dedication date, inscription, photograph; or treated as `wp:placeType:memorial` (already in the taxonomy) with extra facets
- **Verdict**: **v1.** Important emotional touchpoints; well-structured external data sources to absorb.

## Aftermath & long-tail dimension

### 21. Post-war consequences & long-tail effects
Occupation, denazification, Marshall Plan, decolonisation, refugee flows, PTSD generations, missing-persons resolution decades later, war-bride records, GI Bill outcomes.

- **Shape**: a temporal extension of all other content — not its own data type
- **Existing**: National Archives post-war records collections, academic studies
- **Schema impact**: `dcterms:temporal` already supports this. No new entities — but `Conflict.aftermath_period` may be useful.
- **Verdict**: **v1 as discipline.** Don't artificially truncate content at the armistice date.

### 22. Pre-war causes & build-up
The slow build to 1914, the Versailles → Munich → Danzig sequence, Tonkin Gulf, the Maidan revolution preceding Ukraine.

- **Shape**: same as above — temporal extension
- **Verdict**: **v1 as discipline.**

## Meta-dimensions

### 23. Historiography & interpretation
How interpretations have changed over time. The WW1 narrative shifted dramatically: *All Quiet on the Western Front* (1929), the lions-led-by-donkeys school (1960s), the revisionist "Western Front was actually well-fought" school (1990s), the centenary's emphasis on civilian and colonial experience (2014–18). Same events, different stories.

- **Shape**: curated essays referencing other items
- **Schema impact**: new item subtype `wp:type:historiographical-essay`; potentially a `Theme` entity (see below) is the natural home for this
- **Verdict**: **v1.x.** warpedia should be honest that it's *one* lens, with sources cited.

### 24. Comparative / cross-conflict themes
The thing Wikipedia *can't* do well because of its article-per-topic structure: how did infantry tactics change from the Somme to Stalingrad to Falluja? How did medical evacuation evolve from horse-drawn ambulances to MEDEVAC helicopters to Role 2 surgical hospitals? How did civilian bombing escalate from Guernica to Hamburg to Dresden to Hiroshima?

- **Shape**: editorial curation across the entity graph
- **Existing**: nobody. This is the thing that doesn't currently exist anywhere.
- **Schema impact**: new `Theme` entity — title, description, curator, list of related Items / Equipment / Events / People across multiple Conflicts
- **Verdict**: **v1.x — but this is the most defensible niche.** Needs content depth before it makes sense, but design the entity in v1.

## Adjacent dimensions worth flagging but skipping in v1

| Dimension | Why skipped from v1 |
|---|---|
| **Wargaming, modelling, simulation** | Big audience overlap with technical-reference users; could be a destination but blurs scope. Revisit in v2 if community asks. |
| **Reunion & association records** | Niche audience; high curation cost per item; pursue via partnerships not direct ingestion. |
| **War film & TV (commercial)** | Aggressive licensing on commercial content; not worth the legal risk. PD government film is in v1. |
| **Military medical & scientific history** | Adjacent and fascinating; defer to specialist projects (Wellcome Collection covers this well). |
| **Counterfactual analysis** | Out of scope — warpedia documents what happened, not what might have happened. |

---

## Summary of schema additions required

### New entities

| Entity | Replaces / extends | Justification |
|---|---|---|
| `Award` | — | Award type (Victoria Cross, Medal of Honor) — Wikidata-reconcilable |
| `Camp` | extends `Place` | POW / internment / labour camps need structured facets (capacity, administering power, dates) and rich cross-links to people who passed through |
| `Cemetery` | extends `Place` | War graves with structured facets (administering body, inscription standards, location of every burial) |
| `Memorial` | extends `Place` | Named memorials with designer, dedication, inscription, image |
| `Theme` | — | Curatorial cross-conflict aggregation entity |
| `Trial` | — | War crimes / military justice proceedings |
| `Treaty` | — | Treaties as entities (distinct from the text Item) |

### New `Person` facets

```yaml
Person:
  death:                              # NEW
    date: "1916-07-04"
    place: "wp:place:..."
    cause: "wp:tag:killed-in-action" | "wp:tag:died-of-wounds" | "wp:tag:died-of-disease" | ...
    cemetery: "wp:cemetery:..."
    grave_reference: "Plot II.A.7"
    commemorated_at: ["wp:memorial:..."]
  awards: []                          # NEW
    - award: "wp:award:victoria-cross"
      date: "1916-07-15"
      citation_item: "wp:item:..."    # the citation document
      gazette_reference: "London Gazette, 5 August 1916"
  pow_episodes: []                    # NEW
    - camp: "wp:camp:stalag-luft-iii"
      from: "1943-08-12"
      to: "1945-04-29"
```

### New item subtypes (to add to taxonomy)

Casualty/commemoration: `roll-of-honour`, `cemetery-record`, `headstone`, `service-record`, `pension-record`, `court-martial`, `embarkation-roll`, `medal-citation`, `gazette-entry`

Confinement: `pow-record`, `internment-record`, `camp-newspaper`

Cultural: `war-art`, `war-poetry`, `war-prose`, `war-song`, `combat-camera`, `war-broadcast`, `propaganda-poster`, `psyops-leaflet`

Legal: `trial-record`, `trial-testimony`, `trial-exhibit`, `atrocity-report`, `treaty`, `declaration`, `diplomatic-correspondence`

Other: `archaeological-survey`, `remains-identification`, `historiographical-essay`, `declassified-release`

### Geospatial discipline (no new entities, additions to existing)

```yaml
Item:
  geo:                                # NEW (optional)
    type: "Point" | "Polygon" | "BoundingBox"
    coordinates: [...]                # GeoJSON
    accuracy_meters: 50               # known precision
    georeferenced_by: "wp:user:..."   # who placed it
Event:
  locations:                          # was single 'place', now plural
    - place: "wp:place:..."
      from: "1916-07-01"
      to: "1916-07-14"                # time-windowed; supports moving fronts
Place:
  boundary:                           # NEW — polygon for areas
    type: "Polygon"
    coordinates: [...]
```

### New controlled vocabularies

- `wp:awardType:` — Victoria Cross, Medal of Honor, Iron Cross, etc. (Wikidata-backed)
- `wp:campType:` — POW, civilian internment, concentration, labour, transit, re-education
- `wp:cemeteryType:` — military, mixed, regimental, mass-grave, individual
- `wp:causeOfDeath:` — KIA, DOW, DOI (disease), accident, missing-presumed-dead, suicide, executed
- `wp:themeType:` — comparative-tactical, comparative-medical, comparative-civilian-experience, etc.
- `wp:trialJurisdiction:` — Nuremberg, Tokyo, ICTY, ICTR, ECCC, ICC, national
