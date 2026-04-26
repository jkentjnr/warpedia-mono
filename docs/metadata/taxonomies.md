# Warpedia — Controlled Vocabularies & Taxonomies

*Draft 2026-04-25. The controlled vocabularies referenced by the [Dublin Core profile](./dublin-core-profile.md). Anything that should not be a free-text field lives here.*

## Principles

1. **Reuse before invent.** DCMI Type, MARC Relators, BCP 47 languages, ISO country codes, RightsStatements.org, Wikidata — use the world's existing vocabularies. The only invented vocabularies in this document are warpedia-specific extensions where nothing standard fits.
2. **Stable identifiers.** Every term has a URI. Display labels can be edited; URIs are forever.
3. **Versioned.** This document is the authoritative source for the `wp:` namespace. Changes are PRs, not edits-in-place. Every term records its `addedIn` version.
4. **Multilingual labels later.** v1 labels are English. The structure supports adding labels per BCP 47 language without changing identifiers.

## Namespace prefixes

| Prefix | Expansion | Source |
|---|---|---|
| `dcterms:` | `http://purl.org/dc/terms/` | DCMI Terms |
| `dcmitype:` | `http://purl.org/dc/dcmitype/` | DCMI Type Vocabulary |
| `wp:` | `https://warpedia.org/vocab/` | Warpedia extensions |
| `marcrel:` | `http://id.loc.gov/vocabulary/relators/` | MARC Relator Codes |
| `rs:` | `http://rightsstatements.org/vocab/` | RightsStatements.org |
| `cc:` | `https://creativecommons.org/licenses/` | Creative Commons license URIs |
| `wd:` | `http://www.wikidata.org/entity/` | Wikidata entities |

---

## Item type

Two-level: high-level DCMI type (required) plus a warpedia subtype (recommended).

### High-level type — `dcmitype:` (DCMI Type Vocabulary)

These are the only allowed values for `dcterms:type`.

| URI | Label | When to use |
|---|---|---|
| `dcmitype:Text` | Text | Letters, diaries, memoirs, official documents, transcripts |
| `dcmitype:StillImage` | Still Image | Photographs, drawings, paintings, postcards |
| `dcmitype:MovingImage` | Moving Image | Film, video, newsreels |
| `dcmitype:Sound` | Sound | Oral histories, recordings, radio broadcasts |
| `dcmitype:PhysicalObject` | Physical Object | Medals, helmets, trench art, uniforms — captured via photograph but described as object |
| `dcmitype:Collection` | Collection | A grouping (use the `Collection` entity, not `Item`) |
| `dcmitype:Dataset` | Dataset | Tabular data — casualty lists, embarkation rolls |

### Warpedia subtype — `wp:type:` (extension)

Finer-grained for facet/search. Allowed values for `wp:itemSubtype`.

#### Text subtypes

| URI | Label | Notes |
|---|---|---|
| `wp:type:letter` | Letter | Single piece of correspondence |
| `wp:type:postcard` | Postcard | Distinguished from letter for filtering |
| `wp:type:diary` | Diary | The diary as a whole (usually a Collection) |
| `wp:type:diary-entry` | Diary entry | A single dated entry |
| `wp:type:memoir` | Memoir | Written after the events |
| `wp:type:journal-article` | Journal article | Contemporary press / scholarly |
| `wp:type:official-document` | Official document | Service records, war diaries (unit), citations, dispatches |
| `wp:type:telegram` | Telegram | Including notification telegrams |
| `wp:type:transcript` | Transcript | Transcript of an oral history or other audio |
| `wp:type:translation` | Translation | A translated text — links via `dcterms:source` to the original |

#### Image subtypes

| URI | Label | Notes |
|---|---|---|
| `wp:type:photograph` | Photograph | |
| `wp:type:portrait` | Portrait | Posed photograph of an individual |
| `wp:type:group-photograph` | Group photograph | Unit photos, family photos |
| `wp:type:postcard-image` | Postcard (image side) | When the front-side image is the unit, paired with `wp:type:postcard` for the message side |
| `wp:type:drawing` | Drawing | Hand-drawn (sketches, trench drawings) |
| `wp:type:map` | Map | Trench maps, theatre maps |
| `wp:type:document-scan` | Document scan | A photograph/scan of a Text item — usually paired with the Text item via `dcterms:hasFormat` |

#### Sound / moving image

| URI | Label |
|---|---|
| `wp:type:oral-history` | Oral history interview |
| `wp:type:speech` | Speech / address |
| `wp:type:newsreel` | Newsreel |
| `wp:type:home-movie` | Home movie |
| `wp:type:radio-broadcast` | Radio broadcast |

#### Object subtypes

| URI | Label |
|---|---|
| `wp:type:medal` | Medal |
| `wp:type:badge` | Cap badge / insignia |
| `wp:type:uniform` | Uniform / clothing |
| `wp:type:weapon` | Weapon |
| `wp:type:trench-art` | Trench art |
| `wp:type:personal-effect` | Personal effect (wallet, comb, cigarette case) |
| `wp:type:document-physical` | Physical document (paybook, ID disc) |

#### Reference / technical subtypes

These are the technical, doctrinal, and reference materials — pilot's notes, field manuals, training pamphlets, after-action reports. See [research/manuals-and-reference.md](../research/manuals-and-reference.md). Most are `dcmitype:Text` (or `dcmitype:StillImage` for blueprints/posters).

| URI | Label | Notes |
|---|---|---|
| `wp:type:pilot-notes` | Pilot's notes / Pilot Operating Handbook (POH) | UK AP 1565x series, US T.O. equivalents, civil POHs |
| `wp:type:field-manual` | Field manual | US Army FM and Commonwealth/foreign equivalents |
| `wp:type:technical-manual` | Technical manual | US Army TM, USAF T.O., NAVAIR, NAVSEA, RN BR series |
| `wp:type:training-manual` | Training manual / pamphlet | |
| `wp:type:doctrine` | Doctrine document | Operational doctrine, tactics publications |
| `wp:type:recognition-guide` | Recognition guide | Aircraft / AFV / ship recognition publications |
| `wp:type:specification` | Specification / blueprint | Technical drawings, performance specifications |
| `wp:type:after-action-report` | After-action report | Combat reports, sortie reports, ops summaries |
| `wp:type:intelligence-report` | Intelligence report | ULTRA summaries, MI intelligence bulletins, MAGIC traffic |
| `wp:type:declassified-release` | Declassified release | Recently-declassified material — flag for currency |
| `wp:type:periodical` | Periodical | Forces newspapers, regimental journals, *Stars and Stripes*, etc. |
| `wp:type:reference-book` | Reference book | *Jane's*, almanacs, handbooks |
| `wp:type:propaganda` | Propaganda material | Generic propaganda — prefer specific types below where applicable |
| `wp:type:propaganda-poster` | Propaganda poster | Visual recruitment / morale / anti-enemy posters |
| `wp:type:psyops-leaflet` | Psyops leaflet | Air-dropped or distributed messaging |
| `wp:type:map-tactical` | Tactical / trench map | Distinguished from generic `wp:type:map` for facet purposes |

#### Casualty, commemoration & service-record subtypes

See [research/content-dimensions.md](../research/content-dimensions.md#casualty-commemoration--service-record-dimension).

| URI | Label | Notes |
|---|---|---|
| `wp:type:roll-of-honour` | Roll of honour | Lists of names commemorated by a unit, town, school, etc. |
| `wp:type:cemetery-record` | Cemetery record | A burial record — name, plot, dates, inscription |
| `wp:type:headstone` | Headstone / grave marker | Photograph or rubbing of a grave marker |
| `wp:type:service-record` | Service record | Enlistment / discharge papers |
| `wp:type:pension-record` | Pension record | Veterans' pension applications and awards |
| `wp:type:medical-record` | Medical record | Wound, illness, hospital records |
| `wp:type:court-martial` | Court martial record | Military judicial proceedings |
| `wp:type:embarkation-roll` | Embarkation roll | Manifests of troop movements |
| `wp:type:medal-citation` | Medal citation | Text of an award citation |
| `wp:type:gazette-entry` | Gazette / official register entry | London Gazette, Bundesanzeiger, etc. |
| `wp:type:casualty-notification` | Casualty notification | The "we regret to inform you" telegram or letter |

#### Confinement subtypes

| URI | Label | Notes |
|---|---|---|
| `wp:type:pow-record` | POW record | Capture, camp, repatriation entries |
| `wp:type:internment-record` | Internment record | Civilian internment (e.g. Densho-style) |
| `wp:type:camp-newspaper` | Camp newspaper | E.g. Stalag Luft III's *Wartime Log* |

#### Cultural & creative subtypes

| URI | Label | Notes |
|---|---|---|
| `wp:type:war-art` | War art | Official and unofficial visual art responding to war |
| `wp:type:war-poetry` | War poetry | |
| `wp:type:war-prose` | War prose | Fiction / creative non-fiction with primary-source value |
| `wp:type:war-song` | War song | |
| `wp:type:combat-camera` | Combat camera footage | Official military video/photography |
| `wp:type:war-broadcast` | War broadcast | Murrow, Cronkite, Tokyo Rose, etc. — radio/TV broadcasts |

#### Legal & political subtypes

| URI | Label | Notes |
|---|---|---|
| `wp:type:treaty` | Treaty text | Linked to a `Treaty` entity |
| `wp:type:declaration` | Declaration | Of war, of peace, of independence |
| `wp:type:diplomatic-correspondence` | Diplomatic correspondence | Telegrams, dispatches, notes verbales |
| `wp:type:trial-record` | Trial record | Transcripts, judgements |
| `wp:type:trial-testimony` | Trial testimony | Individual witness deposition |
| `wp:type:trial-exhibit` | Trial exhibit | Documentary / physical evidence |
| `wp:type:atrocity-report` | Atrocity report | Investigative reports of war crimes |

#### Material culture & analytical subtypes

| URI | Label | Notes |
|---|---|---|
| `wp:type:archaeological-survey` | Archaeological survey | Battlefield archaeology |
| `wp:type:remains-identification` | Remains identification | DPAA / JCCC missing-personnel resolutions |
| `wp:type:historiographical-essay` | Historiographical essay | Curated reflection on how a topic has been interpreted |
| `wp:type:dataset` | Dataset | Tabular data — casualty counts, OoB, production figures |

---

## Medium — `wp:medium:`

For `dcterms:medium`. The original physical material.

| URI | Label |
|---|---|
| `wp:medium:paper` | Paper |
| `wp:medium:vellum` | Vellum / parchment |
| `wp:medium:photographic-print` | Photographic print |
| `wp:medium:glass-plate-negative` | Glass plate negative |
| `wp:medium:film-negative` | Film negative |
| `wp:medium:cellulose-nitrate-film` | Cellulose nitrate film (preservation flag) |
| `wp:medium:magnetic-tape` | Magnetic tape (audio/video) |
| `wp:medium:wax-cylinder` | Wax cylinder |
| `wp:medium:vinyl-record` | Vinyl record |
| `wp:medium:metal` | Metal (medals, badges) |
| `wp:medium:textile` | Textile (uniforms, flags) |
| `wp:medium:leather` | Leather (paybooks, belts) |
| `wp:medium:digital-born` | Digital-born (modern oral histories, born-digital photos) |

---

## Person role — `wp:role:`

For `Person.service[].role` and for tagging which side of a story a person sits on.

| URI | Label | Notes |
|---|---|---|
| `wp:role:soldier` | Soldier | Enlisted military personnel of any branch |
| `wp:role:officer` | Officer | Distinguished from soldier for facet/search |
| `wp:role:sailor` | Sailor | Naval personnel |
| `wp:role:airman` | Airman | Air force personnel |
| `wp:role:marine` | Marine | |
| `wp:role:medic` | Medic / Nurse / Doctor | Frontline medical |
| `wp:role:chaplain` | Chaplain | |
| `wp:role:civilian` | Civilian | Non-combatant, on home front or in occupied territory |
| `wp:role:refugee` | Refugee / Displaced person | |
| `wp:role:internee` | Internee | Including civilian internees and POWs of distinct status |
| `wp:role:prisoner-of-war` | Prisoner of war | |
| `wp:role:resistance` | Resistance fighter | Including partisans, irregulars |
| `wp:role:journalist` | Journalist / war correspondent | |
| `wp:role:photographer` | Official war photographer | |
| `wp:role:diplomat` | Diplomat | |
| `wp:role:munitions-worker` | Munitions / war industry worker | |
| `wp:role:land-army` | Land Army / agricultural | |
| `wp:role:relief-worker` | Relief / humanitarian worker | Red Cross, YMCA, etc. |
| `wp:role:peacekeeper` | Peacekeeper | UN and equivalent post-1945 |
| `wp:role:contractor` | Civilian contractor | Modern conflicts |

---

## Contributor relator codes — `marcrel:`

Use MARC relator codes for `dcterms:contributor.role`. The most relevant subset:

| Code | Label | When to use |
|---|---|---|
| `marcrel:aut` | Author | Co-author |
| `marcrel:pht` | Photographer | |
| `marcrel:rcp` | Recipient | Letter recipient |
| `marcrel:trc` | Transcriber | |
| `marcrel:trl` | Translator | |
| `marcrel:edt` | Editor | |
| `marcrel:ann` | Annotator | Adds notes/marginalia |
| `marcrel:ivr` | Interviewer | Oral history |
| `marcrel:ive` | Interviewee | Oral history (may also be `dcterms:creator`) |
| `marcrel:dnr` | Donor | The person who donated to warpedia or to the source archive |
| `marcrel:col` | Collector | Original collector of an aggregate |
| `marcrel:dgg` | Degree granting institution | For dissertation-source items |
| `marcrel:fmo` | Former owner | Provenance chain |
| `marcrel:pbl` | Publisher | When distinct from `dcterms:publisher` |
| `marcrel:res` | Researcher | |
| `marcrel:wac` | Writer of added commentary | AI summary author when human-reviewed |

Full list: [MARC Code List for Relators](https://www.loc.gov/marc/relators/relaterm.html).

---

## Conflict / period — `wp:conflict:`

Top-level conflicts. Each `Conflict` entity is a Wikidata-backed page; this list defines the URI prefix and reserved slugs. Smaller conflicts are added on demand.

| URI | Label | Wikidata | Notes |
|---|---|---|---|
| `wp:conflict:wwi` | First World War | wd:Q361 | 1914–1918 |
| `wp:conflict:wwii` | Second World War | wd:Q362 | 1939–1945 |
| `wp:conflict:korean-war` | Korean War | wd:Q8663 | 1950–1953 |
| `wp:conflict:vietnam-war` | Vietnam War | wd:Q19320 | 1955–1975 |
| `wp:conflict:malayan-emergency` | Malayan Emergency | wd:Q193672 | 1948–1960 |
| `wp:conflict:falklands-war` | Falklands War | wd:Q83471 | 1982 |
| `wp:conflict:gulf-war` | Gulf War | wd:Q41614 | 1990–1991 |
| `wp:conflict:bosnian-war` | Bosnian War | wd:Q190551 | 1992–1995 |
| `wp:conflict:iraq-war` | Iraq War | wd:Q1196 | 2003–2011 |
| `wp:conflict:war-in-afghanistan` | War in Afghanistan | wd:Q12721 | 2001–2021 |
| `wp:conflict:russo-ukrainian-war` | Russo-Ukrainian War | wd:Q16335075 | 2014–present |
| `wp:conflict:other` | Other / unspecified | — | Fallback; trigger for editorial review |

Naming rule: lowercase, hyphenated, mirrors common English Wikipedia article slug.

---

## Award type — `wp:awardType:`

For the `Award` entity. A small, curated set of the most-frequently-encountered decorations. The `Award` entity itself lists every award; this taxonomy is the high-level grouping for facet/search.

| URI | Label | Examples |
|---|---|---|
| `wp:awardType:gallantry-supreme` | Supreme gallantry decoration | Victoria Cross, Medal of Honor, Pour le Mérite, Hero of the Soviet Union, Order of Glory 1st Class |
| `wp:awardType:gallantry-high` | High gallantry decoration | Distinguished Service Order, Distinguished Conduct Medal, Distinguished Service Cross, Iron Cross 1st Class |
| `wp:awardType:gallantry-standard` | Standard gallantry decoration | Military Medal, Bronze Star, Iron Cross 2nd Class |
| `wp:awardType:campaign` | Campaign / theatre medal | 1914 Star, Africa Star, Vietnam Service Medal |
| `wp:awardType:service` | Long-service / good-conduct | Long Service and Good Conduct Medal |
| `wp:awardType:wound` | Wound badge | Purple Heart, Wound Stripe, German Verwundetenabzeichen |
| `wp:awardType:foreign` | Foreign award | An award conferred by a foreign government |
| `wp:awardType:mention` | Mention in dispatches / commendation | Lower-ranked recognition not constituting a medal |
| `wp:awardType:posthumous` | Posthumous award | Flag — combinable with other types |

## Cause of death — `wp:causeOfDeath:`

For `Person.death.cause`.

| URI | Label | Notes |
|---|---|---|
| `wp:causeOfDeath:killed-in-action` | Killed in action | KIA — death in combat |
| `wp:causeOfDeath:died-of-wounds` | Died of wounds | DOW — wounds sustained in action |
| `wp:causeOfDeath:died-of-disease` | Died of disease | DOI — non-combat illness in service |
| `wp:causeOfDeath:accident` | Accidental death | Training, vehicle, friendly-fire-without-malice |
| `wp:causeOfDeath:missing-presumed-dead` | Missing, presumed dead | No remains, no confirmation |
| `wp:causeOfDeath:executed-by-enemy` | Executed by enemy | POW execution, civilian execution under occupation |
| `wp:causeOfDeath:executed-by-own-side` | Executed by own side | Court-martial execution |
| `wp:causeOfDeath:suicide` | Suicide | In service or post-service |
| `wp:causeOfDeath:civilian-bombing` | Civilian — aerial bombing | |
| `wp:causeOfDeath:civilian-shelling` | Civilian — artillery / shelling | |
| `wp:causeOfDeath:civilian-massacre` | Civilian — massacre / atrocity | |
| `wp:causeOfDeath:civilian-displacement` | Civilian — displacement-related | Death during evacuation, refugee passage |
| `wp:causeOfDeath:civilian-starvation` | Civilian — starvation / siege | |
| `wp:causeOfDeath:postwar-injury` | Postwar — wound or condition from service | Including delayed PTSD-related deaths |
| `wp:causeOfDeath:unknown` | Unknown / undetermined | |

## Camp type — `wp:campType:`

For `Camp.camp_type`.

| URI | Label | Notes |
|---|---|---|
| `wp:campType:pow` | Prisoner of War camp | Military POWs (Geneva Convention–style) |
| `wp:campType:civilian-internment` | Civilian internment camp | E.g. Manzanar, Channel Islands, Changi civilian wing |
| `wp:campType:concentration` | Concentration camp | Detention without judicial process — used carefully; trigger editorial review |
| `wp:campType:extermination` | Extermination camp | Distinct from concentration camp; only used for Nazi *Vernichtungslager* — trigger editorial review |
| `wp:campType:labour` | Forced labour camp | Including Soviet GULAG, Imperial Japanese labour camps |
| `wp:campType:transit` | Transit camp | Holding facility en route to other camps (e.g. Drancy, Westerbork) |
| `wp:campType:re-education` | Re-education / political camp | Vietnamese postwar camps, modern equivalents |
| `wp:campType:displaced-persons` | DP camp | Postwar refugee camp |
| `wp:campType:training` | Training camp | Friendly training facility — for completeness, lower-priority |

## Cemetery type — `wp:cemeteryType:`

For `Cemetery.cemeteryType` (optional).

| URI | Label |
|---|---|
| `wp:cemeteryType:military` | Military — purpose-built for war dead |
| `wp:cemeteryType:civic` | Civic — civilian cemetery containing war graves |
| `wp:cemeteryType:regimental` | Regimental — single-unit |
| `wp:cemeteryType:mass-grave` | Mass grave |
| `wp:cemeteryType:individual` | Individual — single isolated burial |
| `wp:cemeteryType:memorial-only` | Memorial only — no actual burials, names only (Thiepval, Tyne Cot Memorial Wall) |

## Trial jurisdiction — `wp:trialJurisdiction:`

For `Trial.jurisdiction`.

| URI | Label |
|---|---|
| `wp:trialJurisdiction:nuremberg` | Nuremberg IMT (1945–46) |
| `wp:trialJurisdiction:nuremberg-subsequent` | Nuremberg subsequent trials (1946–49) |
| `wp:trialJurisdiction:tokyo` | International Military Tribunal for the Far East (1946–48) |
| `wp:trialJurisdiction:icty` | International Criminal Tribunal for the former Yugoslavia |
| `wp:trialJurisdiction:ictr` | International Criminal Tribunal for Rwanda |
| `wp:trialJurisdiction:eccc` | Extraordinary Chambers in the Courts of Cambodia |
| `wp:trialJurisdiction:scsl` | Special Court for Sierra Leone |
| `wp:trialJurisdiction:icc` | International Criminal Court |
| `wp:trialJurisdiction:national` | National jurisdiction (court-martial, civil court) |
| `wp:trialJurisdiction:other` | Other |

## Theme type — `wp:themeType:`

For `Theme.themeType` — optional facet to group themes editorially.

| URI | Label |
|---|---|
| `wp:themeType:comparative-tactical` | Comparative — tactics / doctrine across conflicts |
| `wp:themeType:comparative-equipment` | Comparative — equipment evolution |
| `wp:themeType:comparative-medical` | Comparative — medical / casualty care |
| `wp:themeType:comparative-civilian` | Comparative — civilian experience |
| `wp:themeType:comparative-logistics` | Comparative — logistics and supply |
| `wp:themeType:identity-and-service` | Identity in service — women, indigenous, LGBTQ+, religious minority |
| `wp:themeType:moral-and-legal` | Moral / legal — atrocities, conventions, postwar justice |
| `wp:themeType:cultural-response` | Cultural response — art, poetry, music, public memory |
| `wp:themeType:technology-and-warfare` | Technology and warfare |
| `wp:themeType:home-front-and-society` | Home front and society |

## Equipment / Materiel — `wp:equipmentType:`

For the `Equipment` entity (Spitfire Mk IX, M4 Sherman, HMS *Hood*, Lee-Enfield No. 4 Mk I). Each `Equipment` instance gets a Wikidata QID where one exists.

| URI | Label | Examples |
|---|---|---|
| `wp:equipmentType:aircraft-fighter` | Aircraft — Fighter | Spitfire, Bf 109, F-4 Phantom |
| `wp:equipmentType:aircraft-bomber` | Aircraft — Bomber | Lancaster, B-17, B-52 |
| `wp:equipmentType:aircraft-transport` | Aircraft — Transport | C-47, C-130 |
| `wp:equipmentType:aircraft-trainer` | Aircraft — Trainer | Tiger Moth, T-6 Texan |
| `wp:equipmentType:aircraft-rotary` | Aircraft — Helicopter | UH-1 Huey, Sea King |
| `wp:equipmentType:aircraft-other` | Aircraft — Other | Reconnaissance, AEW, special |
| `wp:equipmentType:vehicle-tank` | Vehicle — Tank | Sherman, Tiger, T-34 |
| `wp:equipmentType:vehicle-afv` | Vehicle — AFV | Universal Carrier, BMP, Bradley |
| `wp:equipmentType:vehicle-soft` | Vehicle — Soft-skinned | Jeep, Land Rover, Bedford |
| `wp:equipmentType:vehicle-artillery` | Vehicle — Artillery | Self-propelled and towed |
| `wp:equipmentType:vessel-capital` | Vessel — Capital ship | Battleships, battlecruisers, carriers |
| `wp:equipmentType:vessel-cruiser` | Vessel — Cruiser | |
| `wp:equipmentType:vessel-destroyer` | Vessel — Destroyer / Frigate | |
| `wp:equipmentType:vessel-submarine` | Vessel — Submarine | |
| `wp:equipmentType:vessel-auxiliary` | Vessel — Auxiliary | Tankers, supply, hospital ships |
| `wp:equipmentType:weapon-small-arms` | Weapon — Small arms | Rifle, pistol, SMG, LMG |
| `wp:equipmentType:weapon-crew-served` | Weapon — Crew-served | HMG, mortar, recoilless |
| `wp:equipmentType:weapon-artillery` | Weapon — Artillery | Field gun, howitzer |
| `wp:equipmentType:weapon-missile` | Weapon — Missile | Air-to-air, surface-to-air, ICBM |
| `wp:equipmentType:weapon-ordnance` | Weapon — Ordnance | Bombs, mines, demolition |
| `wp:equipmentType:personal-equipment` | Personal equipment | Helmet, webbing, parachute, flight suit, NBC gear |
| `wp:equipmentType:installation` | Installation | Fortification, radar, airfield, port |
| `wp:equipmentType:communications` | Communications equipment | Radio, telegraph, encryption (Enigma, etc.) |

## Theatre / front — `wp:theatre:`

Sub-conflict geographic groupings. Same conflict often has multiple theatres.

Examples for WW1:
- `wp:theatre:western-front`
- `wp:theatre:eastern-front`
- `wp:theatre:gallipoli`
- `wp:theatre:mesopotamia`
- `wp:theatre:east-africa`
- `wp:theatre:home-front`

Examples for WW2:
- `wp:theatre:european`
- `wp:theatre:pacific`
- `wp:theatre:north-africa`
- `wp:theatre:atlantic`
- `wp:theatre:eastern-front-ww2`
- `wp:theatre:home-front-ww2`

Theatres are warpedia-curated rather than mechanically derived from Wikidata, because the academic conventions vary.

---

## Place classification — `wp:placeType:`

Optional facet on `Place` entities. Not all places need it.

| URI | Label |
|---|---|
| `wp:placeType:battlefield` | Battlefield |
| `wp:placeType:training-ground` | Training ground |
| `wp:placeType:port-of-embarkation` | Port of embarkation |
| `wp:placeType:port-of-disembarkation` | Port of disembarkation |
| `wp:placeType:airfield` | Airfield / air base |
| `wp:placeType:naval-base` | Naval base / dockyard |
| `wp:placeType:fortification` | Fortification |
| `wp:placeType:hospital` | Hospital / casualty clearing station |
| `wp:placeType:home-front-locality` | Home front locality |
| `wp:placeType:occupied-territory` | Occupied territory |

For the more structured place subtypes, use the dedicated entities — they share `wp:placeType:` for indexing but carry richer facets:

| URI | Use entity |
|---|---|
| `wp:placeType:cemetery` | `Cemetery` |
| `wp:placeType:camp` | `Camp` (replaces previous `pow-camp` / `internment-camp` / `concentration-camp`) |
| `wp:placeType:memorial` | `Memorial` |

---

## Languages — BCP 47

Use [BCP 47](https://www.rfc-editor.org/info/bcp47) tags throughout. Common values for warpedia content:

| Tag | Language |
|---|---|
| `en` | English |
| `en-AU` | Australian English |
| `en-GB` | British English |
| `en-US` | American English |
| `de` | German |
| `de-DE-1901` | German (traditional orthography) — for pre-1996 documents |
| `fr` | French |
| `nl` | Dutch |
| `it` | Italian |
| `ru` | Russian |
| `uk` | Ukrainian |
| `pl` | Polish |
| `he` | Hebrew |
| `yi` | Yiddish |
| `ja` | Japanese |
| `ko` | Korean |
| `vi` | Vietnamese |
| `ar` | Arabic |
| `tr` | Turkish |

Script subtags matter for handwritten content (e.g. `de-Latf` for German written in Fraktur, `de-Latn-1901` for Sütterlin transcribed to modern Latin).

---

## Rights statements

Use only these URIs in `dcterms:rights`. Anything else is a validation error.

### Public domain / no copyright

| URI | When |
|---|---|
| `rs:NoC-US/1.0/` | No copyright — United States (NARA federal records) |
| `rs:NoC-NC/1.0/` | No copyright — Non-commercial use only |
| `rs:NoC-CR/1.0/` | No copyright — Contractual restrictions (e.g. Ancestry scans of PD content) |
| `rs:NoC-OKLR/1.0/` | No copyright — Other known legal restrictions |
| `https://creativecommons.org/publicdomain/mark/1.0/` | Public Domain Mark |
| `https://creativecommons.org/publicdomain/zero/1.0/` | CC0 |

### Open / Creative Commons

| URI | Tier |
|---|---|
| `https://creativecommons.org/licenses/by/4.0/` | OPEN |
| `https://creativecommons.org/licenses/by-sa/4.0/` | OPEN-SA |
| `https://creativecommons.org/licenses/by-nc/4.0/` | NC |
| `https://creativecommons.org/licenses/by-nc-sa/4.0/` | NC |
| `https://creativecommons.org/licenses/by-nd/4.0/` | NC (treated as) — restrictive enough that we treat as NC for export purposes |
| `https://creativecommons.org/licenses/by-nc-nd/4.0/` | NC |
| `https://creativecommons.org/licenses/by/3.0/au/` | OPEN |
| `https://creativecommons.org/licenses/by-nc/3.0/au/` | NC (AWM uses this) |

### Government licenses

| URI | Tier |
|---|---|
| `http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/` | OPEN (UK Crown via OGL v3) |

### Closed / unclear

| URI | Tier |
|---|---|
| `rs:InC/1.0/` | LINK-ONLY (in copyright) |
| `rs:InC-EDU/1.0/` | LINK-ONLY (in copyright, educational use permitted — too narrow for warpedia to host) |
| `rs:InC-NC/1.0/` | NC if we have the right; LINK-ONLY otherwise |
| `rs:InC-RUU/1.0/` | LINK-ONLY (in copyright, rights-holders unlocatable / unidentifiable — orphan works; tread carefully) |
| `rs:CNE/1.0/` | LINK-ONLY (copyright not evaluated) |
| `rs:UND/1.0/` | LINK-ONLY (copyright undetermined) |

`wp:rightsTier` is **derived** from `dcterms:rights` via this table at validation time. If a contributor sets a tier inconsistent with the rights URI, the validator rejects it.

---

## Subject tags — `wp:tag:`

A small, curated facet vocabulary, kept deliberately short. NOT a free-tagging system — every value is a curated term. For finer-grained subjects, use Wikidata QIDs in `dc:subject` instead.

Themes:
- `wp:tag:trench-warfare`
- `wp:tag:naval-action`
- `wp:tag:aerial-combat`
- `wp:tag:siege`
- `wp:tag:occupation`
- `wp:tag:resistance`
- `wp:tag:liberation`
- `wp:tag:evacuation`
- `wp:tag:displacement`
- `wp:tag:atrocity`
- `wp:tag:medical-care`
- `wp:tag:logistics`
- `wp:tag:training`
- `wp:tag:home-front`
- `wp:tag:rationing`
- `wp:tag:propaganda`
- `wp:tag:religion`
- `wp:tag:burial-and-mourning`
- `wp:tag:repatriation`
- `wp:tag:demobilisation`

Editorial: new `wp:tag:` values require a PR — keeps the facet useful by preventing a long tail.

---

## Item status — `wp:status:`

| Value | Meaning |
|---|---|
| `draft` | Created, not yet visible publicly |
| `under_review` | Awaiting editorial / moderation |
| `published` | Live and discoverable |
| `withdrawn` | Removed from public view (DMCA, privacy request, factual problem); record retained for audit |
| `embargoed` | Held until a future date (e.g. living-relative consent pending) |

---

## Access rights — `wp:access:`

| Value | Meaning |
|---|---|
| `wp:access:public` | Visible to all |
| `wp:access:embargoed` | Public-after-date; metadata visible, content masked |
| `wp:access:restricted` | Visible only to logged-in users with specific role (e.g. researcher, family) — rarely used |

---

## Versioning

This document is versioned `wp-vocab/v1`. Breaking changes (renaming or removing a URI) require a major version bump. Adding new terms is non-breaking and ships as `wp-vocab/v1.x`. Validators check `wp-vocab` version compatibility.

Each term internally records:
```yaml
addedIn: "v1.0"
deprecatedIn: null     # set if the term is being phased out
replacedBy: null       # URI of the replacement term, if any
```

## References

- [DCMI Type Vocabulary](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/)
- [MARC Code List for Relators](https://www.loc.gov/marc/relators/relaterm.html)
- [RightsStatements.org vocabulary](https://rightsstatements.org/page/1.0/)
- [BCP 47 — Tags for Identifying Languages](https://www.rfc-editor.org/info/bcp47)
- [Wikidata](https://www.wikidata.org/)
- [Library of Congress Subject Headings](https://id.loc.gov/authorities/subjects.html) — use Wikidata QIDs in preference, but LCSH is the fallback for academic alignment
