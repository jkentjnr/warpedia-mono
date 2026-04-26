# Sample data for mock-up designs

A reusable cast of fictional people, units, items, and curated copy for designers building Warpedia mock-ups. Pick names from this document instead of inventing fresh ones — every screen drawn against a shared cast of characters reads as a coherent product.

Read [`website-mockup-guide.md`](website-mockup-guide.md) first; this document supplies the *fill* for the templates that guide describes.

---

## Guardrails

- **All persons in this document are fictional.** Real conflicts, real units, real places, real equipment, real treaties — the people and the individual primary sources they produced are invented for design illustration only. Do not present this data as historical record.
- **Real Wikidata QIDs** are used for real entities (conflicts, places, equipment, treaties) so that linked-data behaviour can be demonstrated faithfully. Fictional entities (people, units that didn't exist, items) get fresh ULIDs only.
- **Sensitive material is included.** The Holocaust, atrocities, executions, and exploitative wartime regimes appear in this cast because the project's charter requires the catalogue handle them. Sample copy treats these subjects in the encyclopedic, sober register the [voice rules](system/README.md#voice-rules) require — factual, specific, no euphemism, no graphic embellishment.
- **Multi-perspective by construction.** The cast spans Allied / Central Powers / Axis / non-aligned / national-liberation sides and military / civilian / indigenous / internee / journalist / medical / official / national-liberation voices. Every mock should pull from at least two voices unless the screen genuinely concerns one.
- **British English** in sample copy ("defence", "organised", "theatre", "recognised"), with US spellings preserved verbatim in quoted material from US sources.

---

## How to use this in a mock-up

1. Pick the conflict cluster closest to your screen's subject (§1, §2, §3).
2. For an Item page, lift one of the items below verbatim (ULID, title, metadata, transcription excerpt).
3. For a Person/Place/Equipment hub, lift one of the entities and its `linked_*` arrays.
4. For a Conflict or Event hub, lift the conflict's intro essay, featured items list, and chip-row perspectives from §1/§2/§3.
5. For dense lists (Browse, person item gallery, cemetery roster), repeat or interpolate items from the same cluster — never mix WW1 and Vietnam items in a single demo list unless the mock is specifically about cross-conflict comparison.
6. For sensitive content notices, citation panels, AI-disclosure flags — copy the canonical wordings from §6.

---

## 1. WW1 cluster — Western Front + Gallipoli

### Conflict

| Field | Value |
|---|---|
| Name | World War I |
| ULID / canonical ID | `wp:conflict:01HXP1WW10000000000000A01` |
| Wikidata | [Q361](https://www.wikidata.org/wiki/Q361) |
| Slug / URL | `/conflicts/ww1` |
| Dates | 28 Jul 1914 – 11 Nov 1918 |
| Theatres | western-front, gallipoli, eastern-front, mesopotamia, east-africa, home-front |
| Item count (sample) | 18,427 |
| People (sample) | 4,206 |
| Sides represented | `allied-ww1`, `central-powers`, `neutral-ww1` |

**Intro essay opening (sample):**
> The First World War was fought between July 1914 and November 1918, principally in Europe but with operations across the Middle East, Africa, the Pacific, and at sea. It involved most of the world's then-great powers, organised into the Entente (chiefly Britain, France, Russia until 1917, Italy from 1915, and the United States from 1917) and the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria). Civilian and military casualties together exceeded 20 million, with comparable numbers wounded.[¹]
>
> Warpedia's WW1 holdings concentrate on personal narrative and unit-level documentation from the Western Front, Gallipoli, and Mesopotamia, supplemented by official manuals and after-action reports for the air, naval, and artillery arms. Coverage of the Eastern Front and the home fronts of the Central Powers is presently sparse and contributions are actively sought.

### Events

| Name | ULID | Slug | Dates | Place | Parent conflict |
|---|---|---|---|---|---|
| Battle of the Somme | `wp:event:01HXP1WW1SOMME000000000A01` | `/conflicts/ww1/somme` | 1 Jul – 18 Nov 1916 | Picardy, France | WW1 |
| Battle of Pozières | `wp:event:01HXP1WW1POZIE000000000A01` | `/conflicts/ww1/somme/pozieres` | 23 Jul – 7 Aug 1916 | Pozières, France | Somme |
| Gallipoli Campaign | `wp:event:01HXP1WW1GALLIP00000000A01` | `/conflicts/ww1/gallipoli` | 17 Feb 1915 – 9 Jan 1916 | Gallipoli Peninsula, Ottoman Empire | WW1 |
| Landings at ANZAC Cove | `wp:event:01HXP1WW1ANZAC000000000A01` | `/conflicts/ww1/gallipoli/anzac-cove` | 25 Apr 1915 | ANZAC Cove, Gallipoli | Gallipoli |

### People

| Name | ULID | Slug | Birth–Death | Role | Side · Voice | Wikidata |
|---|---|---|---|---|---|---|
| Pte. John H. Smith | `wp:person:01HXP1JHSM00000000000A001` | `/people/john-h-smith-aif` | 1894 – 1916 (KIA) | soldier (AIF) | `allied-ww1` · `military` | — |
| Sister Eleanor Vasquez | `wp:person:01HXP1ELVA00000000000A001` | `/people/eleanor-vasquez` | 1888 – 1962 | medic (CAMC, civilian post-war) | `allied-ww1` · `medical` | — |
| Hauptmann Friedrich Vogel | `wp:person:01HXP1FRVO00000000000A001` | `/people/friedrich-vogel` | 1879 – 1936 | officer (13. Feldartillerie-Regiment) | `central-powers` · `military` | — |
| Hanna Müller | `wp:person:01HXP1HAMU00000000000A001` | `/people/hanna-muller` | 1891 – 1971 | nurse (Deutsches Rotes Kreuz) | `central-powers` · `medical` | — |
| Pte. Tahu Rangihau | `wp:person:01HXP1TARA00000000000A001` | `/people/tahu-rangihau` | 1893 – 1981 | soldier (NZ (Maori) Pioneer Bn) | `allied-ww1` · `military`, `indigenous` |  — |
| Mehmed Çetin | `wp:person:01HXP1MECE00000000000A001` | `/people/mehmed-cetin` | 1896 – 1917 (KIA) | soldier (Ottoman 19th Division) | `central-powers` · `military` | — |

### Units

| Name | ULID | Slug | Type | Parent | Conflict |
|---|---|---|---|---|---|
| 1st Battalion, Australian Imperial Force | `wp:unit:01HXP1U1BNAIF000000000A01` | `/units/1-bn-aif` | infantry | 1st Bde, AIF | WW1 |
| New Zealand (Maori) Pioneer Battalion | `wp:unit:01HXP1UNZMAOR000000000A01` | `/units/nz-maori-pioneer-bn` | pioneer / labour | NZEF | WW1 |
| 13. Königlich Bayerisches Feldartillerie-Regiment | `wp:unit:01HXP1U13FAR0000000000A01` | `/units/13-feldartillerie-rgt` | artillery | Bayerische Armee | WW1 |
| Ottoman 19th Division | `wp:unit:01HXP1UOTT19DIV000000A01` | `/units/ottoman-19-division` | infantry | Fifth Army | WW1 |

### Places

| Name | ULID | Slug | Type | Coords | Wikidata |
|---|---|---|---|---|---|
| Pozières | — (use QID) | `/places/pozieres` | battlefield, village | 50.0364° N, 2.7242° E | [Q670810](https://www.wikidata.org/wiki/Q670810) |
| ANZAC Cove | — | `/places/anzac-cove` | landing-beach | 40.2419° N, 26.2756° E | [Q193820](https://www.wikidata.org/wiki/Q193820) |
| Cologne base hospital (fictional) | `wp:place:01HXP1PLCOLBH000000000A01` | `/places/cologne-base-hospital` | hospital | 50.9387° N, 6.9592° E | — |

### Equipment

| Name | Slug | Type | Wikidata |
|---|---|---|---|
| Short Magazine Lee–Enfield Mk III | `/equipment/smle-mk-iii` | `wp:equipmentType:weapon-small-arms` | [Q1816391](https://www.wikidata.org/wiki/Q1816391) |
| Mauser Gewehr 98 | `/equipment/mauser-g98` | `wp:equipmentType:weapon-small-arms` | [Q177456](https://www.wikidata.org/wiki/Q177456) |
| 7.7 cm FK 96 n.A. (field gun) | `/equipment/77-fk-96-na` | `wp:equipmentType:weapon-artillery` | [Q1247410](https://www.wikidata.org/wiki/Q1247410) |

### Cemetery & Memorial

| Name | ULID | Slug | Type | Place |
|---|---|---|---|---|
| Pozières British Cemetery, Ovillers-la-Boisselle | `wp:cemetery:01HXP1CEPOZIE0000000A01` | `/cemeteries/pozieres-british` | military, CWGC | Pozières |
| Australian National Memorial, Villers-Bretonneux | `wp:memorial:01HXP1MEAUNAM00000000A01` | `/memorials/australian-national-villers-bretonneux` | memorial-only | Villers-Bretonneux |

### Items (sample primary sources)

| Title | ULID | Subtype | Date | Creator | Linked person | Linked event | Licence | Sensitivity |
|---|---|---|---|---|---|---|---|---|
| Letter from Pte. J. H. Smith to his mother, 3 July 1916 | `wp:item:01HXP7K3R8M2N9V5Y4Q1ZBCDEF` | `wp:type:letter` | 1916-07-03 | J. H. Smith | john-h-smith-aif | pozieres | `OPEN-SA` (CC BY-SA 4.0) | none |
| Diary of Sister Eleanor Vasquez, June–August 1916 | `wp:item:01HXP7K3R8M2N9V5Y4Q1ZBCD02` | `wp:type:diary-entry` (15 entries) | 1916-06-04 → 1916-08-22 | E. Vasquez | eleanor-vasquez | somme | `OPEN-SA` (CC BY-SA 4.0) | none |
| Photograph: 1st Bn AIF embarkation, Sydney, October 1914 | `wp:item:01HXP6Z4G1N8V2K5Y3R0EM03B` | `wp:type:group-photograph` | 1914-10-19 | Sydney Mail (uncredited) | — | — | `OPEN` (CC0, AWM mirror) | none |
| Field order, 13. FAR, Pozières sector, 22 July 1916 (translated transcript) | `wp:item:01HXP4R8M3N1V7Y5K2W9TR04C` | `wp:type:official-document` | 1916-07-22 | F. Vogel (signing officer) | friedrich-vogel | pozieres | `OPEN` (CC0, public domain by age) | none |
| Letter from Hanna Müller to her sister, Cologne, 18 August 1916 | `wp:item:01HXP4R8M3N1V7Y5K2W9TR05D` | `wp:type:letter` | 1916-08-18 | H. Müller | hanna-muller | — | `OPEN-SA` (CC BY-SA 4.0) | content notice (describes amputations and mortality on the ward) |
| Whakapapa and waiata from Pte. Tahu Rangihau, recorded 1976 | `wp:item:01HXP4R8M3N1V7Y5K2W9TR06E` | `wp:type:oral-history` | 1976-04-12 | Rangihau & RNZAF Oral Hist. | tahu-rangihau | gallipoli | `LINK-ONLY` (held at Ngā Taonga Sound & Vision) | none |
| Postcard from Mehmed Çetin to his father, ANZAC Cove sector, 11 May 1915 | `wp:item:01HXP4R8M3N1V7Y5K2W9TR07F` | `wp:type:postcard` (Ottoman Turkish, with translation) | 1915-05-11 | M. Çetin | mehmed-cetin | anzac-cove | `OPEN` (CC0, public domain by age) | none |

---

## 2. WW2 cluster — Pacific + European theatres

### Conflict

| Field | Value |
|---|---|
| Name | World War II |
| ULID | `wp:conflict:01HXP1WW20000000000000A02` |
| Wikidata | [Q362](https://www.wikidata.org/wiki/Q362) |
| Slug | `/conflicts/ww2` |
| Dates | 1 Sep 1939 – 2 Sep 1945 |
| Theatres | european-theatre, pacific-theatre, mediterranean, eastern-front-ww2, china-burma-india, atlantic, home-front-ww2 |
| Item count (sample) | 31,892 |
| People (sample) | 9,118 |
| Sides represented | `allied-ww2`, `axis`, `neutral-ww2`, `occupied` |

**Intro essay opening (sample):**
> The Second World War was fought between September 1939 and September 1945 across Europe, the Asia-Pacific, the Mediterranean, the Atlantic, and the African continent. Casualties — military and civilian, including those of the Holocaust and other genocides — exceeded 70 million, the deadliest war in recorded history.[¹] It restructured the global order, ending colonial empires in much of Asia and Africa over the following two decades and inaugurating the Cold War period.
>
> Warpedia's WW2 holdings span the European and Pacific theatres in roughly equal measure, with a deliberate concentration on civilian, occupied-territory, and internment voices alongside the more conventionally documented military narrative. Holocaust testimony catalogued in Warpedia is mirrored to the Wiener Holocaust Library and to Yad Vashem under reciprocal preservation agreements.

### Events

| Name | ULID | Slug | Dates | Place |
|---|---|---|---|---|
| Battle of Britain | `wp:event:01HXP1WW2BOB0000000000A01` | `/conflicts/ww2/battle-of-britain` | 10 Jul – 31 Oct 1940 | UK airspace |
| Fall of Singapore | `wp:event:01HXP1WW2SING000000000A01` | `/conflicts/ww2/fall-of-singapore` | 8 – 15 Feb 1942 | Singapore |
| Liberation of Bergen-Belsen | `wp:event:01HXP1WW2BELS000000000A01` | `/conflicts/ww2/liberation-of-belsen` | 15 Apr 1945 | Bergen, Lower Saxony |

### People

| Name | ULID | Slug | Birth–Death | Role | Side · Voice |
|---|---|---|---|---|---|
| Cpl. Margaret Reilly | `wp:person:01HXP2MARE00000000000A001` | `/people/margaret-reilly` | 1919 – 2007 | WAAF radar plotter, Biggin Hill sector | `allied-ww2` · `military` |
| Lt. Hiroshi Tanaka | `wp:person:01HXP2HITA00000000000A001` | `/people/hiroshi-tanaka` | 1916 – 1944 (KIA) | naval aviator, IJN 1st Air Fleet | `axis` · `military` |
| Avraham Lewin (fictional diarist; not Avraham Levin of Oneg Shabbat) | `wp:person:01HXP2AVLE00000000000A001` | `/people/avraham-lewin-belsen` | 1908 – 1945 (Belsen) | tailor; deported from Łódź ghetto | `axis`-controlled · `internee`, `civilian` |
| Kim Sun-ja | `wp:person:01HXP2KSJA00000000000A001` | `/people/kim-sun-ja` | 1925 – 2011 | forced labourer, postwar oral-history witness | Japanese-occupied Korea · `civilian` |
| Capt. Ahmed Shafiq | `wp:person:01HXP2AHSH00000000000A001` | `/people/ahmed-shafiq-rias` | 1908 – 1979 | officer (Royal Indian Army Service Corps), Singapore garrison | `allied-ww2` · `military` |

### Units

| Name | ULID | Slug | Type | Parent |
|---|---|---|---|---|
| 32 Squadron, RAF | `wp:unit:01HXP2U32SQRAF00000000A01` | `/units/32-sqn-raf` | fighter | 11 Group, Fighter Command |
| IJN 1st Air Fleet | `wp:unit:01HXP2U1AFIJN00000000A01` | `/units/ijn-1-air-fleet` | naval aviation | Combined Fleet |
| 8th Indian Brigade | `wp:unit:01HXP2U8INDBDE00000000A01` | `/units/8-indian-bde` | infantry | 9th Indian Infantry Division |

### Places

| Name | Slug | Type | Coords | Wikidata |
|---|---|---|---|---|
| Biggin Hill | `/places/biggin-hill` | airfield | 51.3308° N, 0.0325° E | [Q659008](https://www.wikidata.org/wiki/Q659008) |
| Singapore | `/places/singapore` | port-of-disembarkation, occupied-territory | 1.3521° N, 103.8198° E | [Q334](https://www.wikidata.org/wiki/Q334) |
| Bergen-Belsen | `/places/bergen-belsen` | camp (covered also as Camp entity) | 52.7569° N, 9.9072° E | [Q156450](https://www.wikidata.org/wiki/Q156450) |

### Equipment

| Name | Slug | Type | Wikidata |
|---|---|---|---|
| Supermarine Spitfire Mk IIa | `/equipment/spitfire-mk-iia` | `wp:equipmentType:aircraft-fighter` | [Q102194](https://www.wikidata.org/wiki/Q102194) |
| Mitsubishi A6M Zero | `/equipment/a6m-zero` | `wp:equipmentType:aircraft-fighter` | [Q63088](https://www.wikidata.org/wiki/Q63088) |
| Lee–Enfield Rifle No. 4 Mk I | `/equipment/lee-enfield-no-4-mk-i` | `wp:equipmentType:weapon-small-arms` | [Q1816391](https://www.wikidata.org/wiki/Q1816391) |

### Camp & Trial

| Entity | ULID | Slug | Type | Linked items |
|---|---|---|---|---|
| Bergen-Belsen Concentration Camp | `wp:camp:01HXP2CABELS00000000A01` | `/camps/bergen-belsen` | concentration | a-lewin diary; British Army Film Unit footage |
| Belsen Trial, Lüneburg | `wp:trial:01HXP2TBLBELS0000000A01` | `/trials/belsen-1945` | British Military Court, Royal Warrant 1945 | trial transcripts; defendant list |

### Items (sample primary sources)

| Title | ULID | Subtype | Date | Linked person/event | Licence | Sensitivity |
|---|---|---|---|---|---|---|
| Pilot's Notes — Spitfire IIA & IIB (Air Publication 1565B), 1940 | `wp:item:01HXP4R8M3N1V7Y5K2W9SP01A` | `wp:type:pilot-notes` | 1940-09 | spitfire-mk-iia | `OPEN` (Crown copyright, expired) | none |
| Plot-room duty log, RAF Biggin Hill, 15 September 1940 | `wp:item:01HXP4R8M3N1V7Y5K2W9SP02B` | `wp:type:official-document` | 1940-09-15 | margaret-reilly, battle-of-britain | `OPEN` (Crown copyright, expired) | none |
| Diary fragments of Avraham Lewin, recovered Bergen-Belsen, 1945 | `wp:item:01HXP4R8M3N1V7Y5K2W9SP03C` | `wp:type:diary-entry` | 1944-11 → 1945-03 | avraham-lewin-belsen, bergen-belsen | `OPEN-SA` (CC BY-SA 4.0; estate consent recorded) | content notice (describes starvation, disease, mass mortality) |
| Oral history: Kim Sun-ja interview, Seoul, 1992 (Korean, with English transcript) | `wp:item:01HXP4R8M3N1V7Y5K2W9SP04D` | `wp:type:oral-history` (124 min) | 1992-08-14 | kim-sun-ja | `LINK-ONLY` (Korean Council for the Women Drafted for Military Sexual Slavery) | content notice (describes sexual violence under the Japanese imperial military comfort system) |
| British Army Film Unit footage, liberation of Bergen-Belsen, 17 April 1945 | `wp:item:01HXP4R8M3N1V7Y5K2W9SP05E` | `wp:type:newsreel` (8 min, silent) | 1945-04-17 | bergen-belsen, liberation-of-belsen | `OPEN` (Crown copyright, expired) | content notice (depicts unburied dead and survivors at the moment of liberation) |
| Surrender order signed at Ford Factory, Singapore, 15 February 1942 | `wp:item:01HXP4R8M3N1V7Y5K2W9SP06F` | `wp:type:official-document` | 1942-02-15 | fall-of-singapore | `OPEN` (Crown copyright, expired) | none |
| Letter from Lt. Hiroshi Tanaka to his wife, IJN Akagi, 4 December 1941 | `wp:item:01HXP4R8M3N1V7Y5K2W9SP07G` | `wp:type:letter` | 1941-12-04 | hiroshi-tanaka | `OPEN-SA` (CC BY-SA 4.0; family donation) | none |

### Treaty

| Name | Slug | Date | Wikidata |
|---|---|---|---|
| Instrument of Surrender of Japan | `/treaties/japan-surrender-1945` | 2 Sep 1945 | [Q200953](https://www.wikidata.org/wiki/Q200953) |

---

## 3. Vietnam War cluster

### Conflict

| Field | Value |
|---|---|
| Name | Vietnam War |
| ULID | `wp:conflict:01HXP1WVN0000000000000A03` |
| Wikidata | [Q4543](https://www.wikidata.org/wiki/Q4543) |
| Slug | `/conflicts/vietnam` |
| Dates | 1 Nov 1955 – 30 Apr 1975 |
| Theatres | south-vietnam, north-vietnam, cambodia, laos, home-front-us, home-front-australia |
| Item count (sample) | 6,341 |
| People (sample) | 1,604 |
| Sides represented | `un-coalition`, `national-liberation`, `non-aligned` |

**Intro essay opening (sample):**
> The Vietnam War (Vietnamese: *Chiến tranh Việt Nam*; also referred to as the American War or the Resistance War Against America for National Salvation) was a conflict in Southeast Asia fought principally between November 1955 and April 1975. It was fought between the Democratic Republic of Vietnam, supported by the People's Republic of China and the Soviet Union, and the Republic of Vietnam, supported by the United States, South Korea, Australia, New Zealand, the Philippines, and Thailand.[¹] Civilian casualties in Vietnam, Cambodia, and Laos numbered in the millions; military casualties on all sides exceeded one million.
>
> Warpedia's Vietnam War holdings draw heavily on personal narrative from veterans and from Vietnamese civilian and combatant participants, in keeping with the project's commitment to multi-perspective coverage. Reference material — manuals, doctrine, after-action reports — is well-represented for the United States and Australian forces and presently sparse for the People's Army of Vietnam and the National Liberation Front; contributions in Vietnamese and Russian language sources are particularly welcome.

### Events

| Name | ULID | Slug | Dates | Place |
|---|---|---|---|---|
| Battle of Khe Sanh | `wp:event:01HXP3WVNKSAN000000000A01` | `/conflicts/vietnam/khe-sanh` | 21 Jan – 9 Jul 1968 | Khe Sanh, Quảng Trị |
| Tet Offensive | `wp:event:01HXP3WVNTET0000000000A01` | `/conflicts/vietnam/tet-offensive` | 30 Jan – 28 Mar 1968 | South Vietnam, multiple cities |

### People

| Name | ULID | Slug | Birth–Death | Role | Side · Voice |
|---|---|---|---|---|---|
| Sgt. James "Jimmy" Okonkwo | `wp:person:01HXP3JIOK00000000000A001` | `/people/jimmy-okonkwo` | 1946 – 2019 | Marine, 26th Marine Regiment; postwar witness | `un-coalition` · `military` |
| Nguyễn Thị Hoa | `wp:person:01HXP3NTHO00000000000A001` | `/people/nguyen-thi-hoa` | 1937 – living (b. 1937) | village teacher, Quảng Trị | `national-liberation` · `civilian` |
| Lê Văn Đức | `wp:person:01HXP3LVDU00000000000A001` | `/people/le-van-duc` | 1942 – 1972 (KIA) | NLF political officer | `national-liberation` · `military` |
| Capt. Robert Owens | `wp:person:01HXP3ROOW00000000000A001` | `/people/robert-owens-2-rar` | 1939 – living | officer, 2 RAR (Australian); postwar oral-history interviewee | `un-coalition` · `military` |
| Karen Mitchell | `wp:person:01HXP3KAMI00000000000A001` | `/people/karen-mitchell-photog` | 1944 – living | photojournalist, freelance / Reuters | non-aligned · `journalist`, `photographer` |

### Units

| Name | ULID | Slug | Type |
|---|---|---|---|
| 26th Marine Regiment, USMC | `wp:unit:01HXP3U26MARUSMC0000A01` | `/units/26-marines-usmc` | infantry |
| 304th Division, People's Army of Vietnam | `wp:unit:01HXP3U304DIVPAVN000A01` | `/units/304-div-pavn` | infantry |
| 2nd Battalion, Royal Australian Regiment | `wp:unit:01HXP3U2RARAU00000A01` | `/units/2-rar` | infantry |

### Equipment

| Name | Slug | Type | Wikidata |
|---|---|---|---|
| M16 rifle (M16A1) | `/equipment/m16a1` | `wp:equipmentType:weapon-small-arms` | [Q173241](https://www.wikidata.org/wiki/Q173241) |
| AK-47 (Type 56 PRC variant common in NLF service) | `/equipment/ak-47-type-56` | `wp:equipmentType:weapon-small-arms` | [Q35721](https://www.wikidata.org/wiki/Q35721) |
| Bell UH-1 Iroquois ("Huey") | `/equipment/bell-uh-1` | `wp:equipmentType:aircraft-rotary` | [Q43168](https://www.wikidata.org/wiki/Q43168) |

### Items

| Title | ULID | Subtype | Date | Linked person | Licence | Sensitivity |
|---|---|---|---|---|---|---|
| Field manual FMFM 6-4 — Marine Rifle Squad (excerpt), 1969 | `wp:item:01HXP4R8M3N1V7Y5K2W9VN01A` | `wp:type:field-manual` | 1969-04 | jimmy-okonkwo (annotated copy) | `OPEN` (US Government work) | none |
| Letter from Sgt. J. Okonkwo to his sister, Khe Sanh, 18 February 1968 | `wp:item:01HXP4R8M3N1V7Y5K2W9VN02B` | `wp:type:letter` | 1968-02-18 | jimmy-okonkwo | `OPEN-SA` (CC BY-SA 4.0) | none |
| Oral history: Nguyễn Thị Hoa interview, Đông Hà, 2014 (Vietnamese, with English transcript) | `wp:item:01HXP4R8M3N1V7Y5K2W9VN03C` | `wp:type:oral-history` (98 min) | 2014-11-22 | nguyen-thi-hoa | `OPEN-SA` (CC BY-SA 4.0; project consent) | none |
| Photograph: Marines and corpsman, Hill 881 South, March 1968 | `wp:item:01HXP4R8M3N1V7Y5K2W9VN04D` | `wp:type:photograph` | 1968-03-14 | karen-mitchell-photog | `OPEN-SA` (CC BY-SA 4.0; photographer estate) | none |
| After-action report, 26th Marines, Khe Sanh, June 1968 | `wp:item:01HXP4R8M3N1V7Y5K2W9VN05E` | `wp:type:after-action-report` | 1968-06-30 | — (regimental authorship) | `OPEN` (US Government work) | none |
| Notebook of Lê Văn Đức, recovered 1972 (Vietnamese, with English transcript) | `wp:item:01HXP4R8M3N1V7Y5K2W9VN06F` | `wp:type:diary-entry` | 1971-08 → 1972-04 | le-van-duc | `OPEN-SA` (CC BY-SA 4.0; PAVN archive transfer 2008) | none |

---

## 4. Themes (cross-conflict)

| Name | ULID | Slug | Type | Spans | `narrative_items` (sample) |
|---|---|---|---|---|---|
| Trench warfare doctrine, 1914–1953 | `wp:theme:01HXPTRENCH000000000000A01` | `/themes/comparative-tactical/trench-warfare` | `comparative-tactical` | WW1, WW2 (Stalingrad), Korean War | Smith Pozières letter; FAR field order; Korean War manuals |
| Medical care under fire | `wp:theme:01HXPMEDFIRE000000000A01` | `/themes/comparative-medical/medical-care-under-fire` | `comparative-medical` | WW1, WW2, Vietnam | Vasquez diary; Müller letter; Khe Sanh corpsman photograph |
| Civilian voices from occupied territories | `wp:theme:01HXPOCCVOICE0000000A01` | `/themes/cultural-response/civilian-voices-occupied` | `moral-and-legal`, `cultural-response` | WW2, Vietnam | Lewin diary; Kim Sun-ja oral history; Nguyễn Thị Hoa oral history |

---

## 5. Sample copy snippets

### Item caption (catalogue card, terse)

> Letter from Pte. J. H. Smith, 1st Bn AIF, to his mother, written near Pozières, 3 July 1916. Two pages, ink on lined paper. Donated by Sarah Smith (great-granddaughter). CC BY-SA 4.0. `wp:item:01HXP7K3R8M2N9V5Y4Q1ZBCDEF`

### Sensitivity notice (item view)

> **Content notice.** This item is the diary of Avraham Lewin, kept while interned at Bergen-Belsen between November 1944 and March 1945. It describes starvation, disease, and the death of named family members. The original is held in trust at the Wiener Holocaust Library; Warpedia mirrors it under the consent of Lewin's surviving family. Click to view the transcription and pages.

> **Content notice.** This item depicts unburied dead and survivors at the moment of liberation, filmed by the British Army Film Unit on 17 April 1945. The footage is shown in the historical record. Click to view.

### AI-disclosure flag (transcription provenance)

> Transcription generated by Transkribus model "german-handwriting-M3", edited by Hanna Schenk (Wiener Holocaust Library) on 12 March 2024. Three named-entity references resolved against Wikidata; one date marked uncertain (`1944-11~`).

### Citation (cite-this panel, Chicago-style example)

> Smith, John H. Letter to mother, near Pozières, France, 3 July 1916. Donated by Sarah Smith. Warpedia, item `wp:item:01HXP7K3R8M2N9V5Y4Q1ZBCDEF`. Accessed 26 April 2026. https://warpedia.org/i/01HXP7K3R8M2N9V5Y4Q1ZBCDEF.

### Empty state (browse, no results)

> No items match these filters. Try removing the licence-tier restriction, or [browse the catalogue](#).

### Editorial decision note (review queue, sample)

> Approved with corrections. Title normalised; date set to 1916-07-03 (was "early July 1916"); transcription line 14 corrected from "trentchs" to "trenches" per scan. Content notice not required. Mirrors queued: Internet Archive, Wikimedia Commons. — M. Okoye, Senior Editor, 22 April 2026.

---

## 6. Suggested perspective chip-rows by hub

For mocking the multi-perspective chip-row described in [`website-mockup-guide.md`](website-mockup-guide.md) §4.2, the chip set on each hub is derived from the perspectives actually present on linked items. The samples below are the chips that would appear given the items above:

- **WW1 hub**: `All · Allied (WW1) · Central Powers · Military · Medical · Indigenous`
- **Battle of the Somme**: `All · Allied (WW1) · Central Powers · Military · Medical`
- **Battle of Pozières**: `All · Allied (WW1) · Central Powers · Military`
- **Gallipoli**: `All · Allied (WW1) · Central Powers · Military · Indigenous`
- **WW2 hub**: `All · Allied (WW2) · Axis · Occupied · Military · Civilian · Internee · Medical`
- **Battle of Britain**: `All · Allied (WW2) · Military`
- **Liberation of Bergen-Belsen**: `All · Allied (WW2) · Internee · Civilian · Military`
- **Vietnam War hub**: `All · UN coalition · National liberation · Non-aligned · Military · Civilian · Journalist`

---

## 7. When to invent vs. when to reuse

- **Reuse names from this document** for any mock-up that will be reviewed alongside another mock — coherence helps reviewers see the system.
- **Invent fresh fictional names** if you need an entity type or perspective combination this document doesn't cover (e.g. an Italian alpine soldier from the Caporetto front, an Eritrean conscript in the Italian colonial army). Add the new entity to this document in the relevant cluster (or open a new cluster) and use the same conventions: fictional but plausible name, a ULID, sensible dates and units, real Wikidata QIDs for any real conflict / place / equipment.
- **Never use real names of real historical individuals in invented sample data.** If a mock genuinely needs a named real figure (e.g. demonstrating a person page for a published war photographer who really existed), source their biographical data from Wikidata only and mark the fact: this is a real person, summarised from public sources, not an invented one.
- **Sensitive material**: include it where the system needs to be tested against it. Do not avoid Bergen-Belsen, comfort-system testimony, Tet civilian casualties, or atrocity footage in mocks; the catalogue must work for these as well as for an officer's letter home, and a mock that only covers the easy material under-tests the design.

---

## See also

- [`website-mockup-guide.md`](website-mockup-guide.md) — IA, page templates, and the cross-cutting patterns these data fill.
- [`../data-model.md`](../data-model.md) — the entity shapes every row above conforms to.
- [`../metadata/taxonomies.md`](../metadata/taxonomies.md) — controlled vocabularies, including the new `wp:perspective:` facet used throughout this document.
- [`../charter.md`](../charter.md) — the voice and posture rules every sample-copy line above is written against.
