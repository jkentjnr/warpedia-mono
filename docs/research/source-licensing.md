# Source Licensing — What Warpedia Can Absorb

*Captured 2026-04-25. Maps each major existing source to what warpedia.org can legally re-host, link to, or remix, given a free, philanthropy-funded model.*

## TL;DR

You can lawfully absorb tens of millions of items — including a meaningful slice of the *personal* content (letters, diaries, photos) you actually care about — without paying or asking. The two disciplines that matter:

1. **Tag the licence on every record so the buckets don't bleed.**
2. **Keep family-submission terms compatible with Wikimedia so the project survives you both.**

## Bucket 1 — Absorb freely (public domain / fully open)

| Source | License | What you can do |
|---|---|---|
| **US National Archives (NARA)** | Federal works = public domain by statute. ~160M digitized records online (out of 13B pages held). | Republish, re-host, remix, commercialize. NARA explicitly does not license its content. Caveat: donated personal collections inside NARA may be third-party copyrighted — check item-level metadata. |
| **Library of Congress "Free to Use and Reuse" sets** | Public domain or no known copyright. | Same as NARA — fully reusable. |
| **UK National Archives (Crown copyright records)** | Open Government Licence v3 (OGL). | Worldwide, royalty-free, perpetual, non-exclusive — including commercial use. Just attribute. Effectively CC BY-equivalent. |
| **Europeana — items marked Public Domain Mark, CC0, or CC BY** | Open. | Roughly half of Europeana's 50M+ items are openly licensed. Their *metadata* is CC0 across the board, so you can ingest the entire catalog index. |
| **Wikidata** | CC0. | Ingest everything, no attribution required. The single best backbone for entity data (people, units, battles, places). |
| **DPLA** | Aggregator, 15M+ items with machine-readable rights statements via API. | Filter the API for `IN COPYRIGHT - NC USE ONLY` / `NO COPYRIGHT - UNITED STATES` / etc. Bulk download available. |

## Bucket 2 — Absorb with attribution + share-alike (viral)

| Source | License | What you can do |
|---|---|---|
| **Wikipedia article text** | CC BY-SA 4.0 | Re-host fine, but *any derivative section* of warpedia.org must also be CC BY-SA 4.0. Compartmentalize or you SA-poison your whole content pool. |
| **Wikimedia Commons (images, audio, video)** | Mixed: CC0, CC BY, CC BY-SA, PD. | Per-file. Most permissible, just attribute per file. |

## Bucket 3 — Absorb under "non-commercial" — viable for warpedia.org but with real caveats

| Source | License | Notes |
|---|---|---|
| **Imperial War Museums (IWM)** — opted-in items | IWM Non-Commercial Licence ≡ CC BY-NC. Filter "Share and Reuse" in Collections Search. | Includes much of their photo, film, sound, and *Lives of the First World War* content. Updated Dec 2024. |
| **Australian War Memorial** | CC BY-NC 3.0 AU for AWM-copyright items; some Commons items (no known restrictions) on Flickr Commons. | Most of *Anzac Connections* digitized personal papers. Privately-owned items in AWM still need owner permission. |
| **Texas Tech Virtual Vietnam Archive** | "Educational and other noncommercial purposes" without permission; commercial use needs written authorization. | 550K+ items, mostly personal letters/photos. Item-level copyright still applies — staff verify before release. |

### ⚠ The non-commercial trap

A free, donation- and philanthropy-funded site is *generally* considered non-commercial under CC BY-NC. But the line is fuzzier than it looks:

- The moment you take **paid sponsorship**, sell merchandise, run ads, or accept grants with commercial-use clauses, you risk being out of compliance.
- Wikimedia projects **refuse to accept CC BY-NC content** for exactly this reason — it can't be re-used downstream.
- If you want warpedia.org content to be re-mixable by Wikipedia and other open projects (the strongest preservation hedge), CC BY-NC content has to be quarantined and clearly flagged, not blended into your main corpus.

Practical fix: tag every item with its source license, render the NC badge prominently, and structure the DB so a future "open-only" export stays clean.

## Bucket 4 — Permission-required (per-item gatekeeping)

| Source | What's required |
|---|---|
| **Library of Congress Veterans History Project** | Veterans/interviewers retain copyright. Personal/research use is fine; **republication requires written permission from the interviewee or next-of-kin**. 121K+ collections — cannot be bulk-absorbed. Negotiate a partnership. |
| **StoryCorps (incl. Military Voices)** | All reuse requires submitted request — no public license. |
| **Internet Archive** | Per-upload: uploader chooses license. Most material is "non-commercial + attribution" by uploader convention; some PD/CC0. Check each item. |
| **Operation War Diary outputs** | Underlying images are TNA Crown copyright (OGL) — reusable. Volunteer-added tags/annotations: less clear, but practically usable with attribution. |

## Bucket 5 — Cannot absorb (proprietary, contractual lock-up)

| Source | Why not |
|---|---|
| **Fold3 / Ancestry / Newspapers.com** | Terms of service prohibit republishing more than "small portions" without written permission, even for underlying public-domain content. They claim contractual rights over their digital copies. Re-hosting is a breach-of-contract risk regardless of underlying copyright. |
| **Findmypast** | Same model as Ancestry. |
| **Forces War Records** | Same — paid subscription, no open reuse rights. |
| **FamilySearch (LDS)** | Free to view; reuse terms restrict bulk redistribution. Best treated as a link-out source. |

The trick with paywalled aggregators: even where the underlying source (e.g., a UK census page, a US service record) is public domain at NARA or TNA, the *digital scan made by Ancestry* is contractually fenced. Re-derive from the original public source — don't lift their scans.

## Realistic absorbable pool

If you stitch the open buckets together:

- **Tens of millions of items** (NARA + LoC + UK TNA + Europeana PD + Wikimedia Commons + DPLA aggregated)
- **Hundreds of thousands of personal, narrative items** (Anzac Connections, IWM Lives of WW1 photos/text under their NC licence, Texas Tech Vietnam letters, public-domain WW1 letters in Europeana, LoC's "Free to Use" sets)
- **Comprehensive structured data scaffolding** (Wikidata as the entity graph for every battle, unit, person, place — CC0)
- **AI-assisted enrichment** of all of the above using Transkribus, translation, geolocation, etc. — derivative works inherit the source license.

## Implications for warpedia.org's design

1. **Three-tier content store from day one.** Tag every item: `OPEN` (PD, CC0, CC BY, OGL), `OPEN-SA` (CC BY-SA), `NC` (CC BY-NC and equivalents), `LINK-ONLY` (everything else). Render the badge inline. Bulk export defaults to `OPEN` only — that's what you donate to Wikimedia/Internet Archive for permanence.
2. **Structure family submissions as CC BY-SA 4.0 by default**, with an opt-in for CC0. Keeps your most distinctive content compatible with Wikipedia/Wikimedia. Avoid CC BY-NC for user submissions even though it's tempting — it locks your own content out of broader reuse.
3. **For paywalled sources (Fold3, Ancestry et al.), build link-out features, not absorption.** A "view this person's service record on Fold3 →" button is fine and adds value; ingesting their scans is a lawsuit risk.
4. **Watch the philanthropy paperwork.** Some grant agreements (esp. EU and certain US foundations) require funded outputs to be CC BY or CC0 — that's good news for permanence but means you can't use NC-licensed source material in funded deliverables. Keep a clean audit trail of which content went into which funded project.

## Sources

- [NARA — Copyright and Permissions](https://www.archives.gov/research/still-pictures/permissions)
- [Library of Congress — Free to Use and Reuse](https://www.loc.gov/free-to-use/)
- [UK National Archives — Open Government Licence v3](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
- [Europeana Licensing Framework](https://pro.europeana.eu/page/europeana-licensing-framework)
- [Wikidata — Data access](https://www.wikidata.org/wiki/Wikidata:Data_access)
- [DPLA Developer/API documentation](https://pro.dp.la/developers)
- [Wikimedia Commons — Reusing content](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia)
- [IWM Non-Commercial Licence](https://www.iwm.org.uk/corporate/policies/non-commercial-licence)
- [Australian War Memorial — Copyright (CC BY-NC 3.0 AU)](https://www.awm.gov.au/about/organisation/corporate/copyright)
- [Texas Tech Vietnam Archive — Rights & Reproductions](https://www.vietnam.ttu.edu/resources/reproductions/)
- [LoC Veterans History Project — Rights & Access](https://www.loc.gov/collections/veterans-history-project-collection/about-this-collection/rights-and-access/)
- [StoryCorps — Use of materials](https://support.storycorps.me/hc/en-us/articles/115010294067-I-would-like-to-use-StoryCorps-materials-in-my-project)
- [Internet Archive — Rights help](https://help.archive.org/help/rights/)
- [Ancestry/Fold3/Newspapers.com — Terms and Conditions](https://www.ancestry.com/c/legal/termsandconditions_2014_08_01_us)
- [RightsStatements.org](https://rightsstatements.org/)
