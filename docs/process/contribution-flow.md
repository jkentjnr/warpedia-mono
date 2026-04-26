# Warpedia — Contribution Flow

*Draft 2026-04-26. The end-to-end process by which content enters warpedia: who can contribute what, the UX walkthrough, the technical pipeline behind submit, and the editorial review that gates publication.*

## Principles

1. **Make contributing easier than the alternative.** A descendant with a shoebox of letters has many places to upload them — Ancestry, Fold3, Findagrave, their own blog. Warpedia's submission UX has to be at least as friendly as any of those, with materially better metadata outcomes.
2. **The metadata is the value.** A bare scan with no context is a low-value item. A scan with a confident date, named people, identified unit, identified place, transcribed text, and a clear license is a high-value item. The flow should pull the contributor toward high-value submissions without making low-value ones impossible.
3. **Editorial review is non-negotiable.** Nothing publishes without human review. Period. Wikipedia-grade quality requires a human in the loop, especially for primary sources where authenticity and rights matter.
4. **The contributor is a partner, not a customer.** Reviews include feedback, not silent rejections. Contributors get attribution, get notified when their items publish, and are credited if they want.
5. **Charter rules apply.** No genealogy hooks, no tribute language, no advocacy. The flow surface itself should reinforce the encyclopedic posture — see [`charter.md`](../charter.md).
6. **AI assistance is opt-in and disclosed.** AI transcription, translation, geolocation — all are offered to lower the bar, all are clearly marked as machine output until a human reviews them.

## Contribution types

| Type | Who | Example |
|---|---|---|
| **Single primary-source item** | Family member, hobbyist | "I have my great-grandfather's letter from the Somme" |
| **Collection** (multiple items, single donor) | Family member, hobbyist, partner | "I'm contributing 47 letters and a diary from my great-uncle" |
| **Encyclopedic article / Theme essay** | Editor, scholar | "I want to write the cross-conflict 'Civilian Aerial Bombing' theme essay" |
| **Edit / correction** | Anyone | "The transcription on item X has an error in line 4" |
| **Bulk metadata harvest** | Partner organisation, warpedia editor | "Harvest the open AWM Anzac Connections collection" |
| **Programmatic API** | Partner organisation | "Our museum's CMS pushes new digitisations directly to warpedia" |

The vast majority of v1 traffic will be the first two. The encyclopedic-article and bulk flows matter for quality and scale respectively, but they're not the dominant path.

## The primary flow — single primary-source item

The detailed UX walkthrough. Sarah Smith, contributing her great-grandfather Pte. John Henry Smith's last letter from 1916. She has never used warpedia before.

### Screen 1 — landing

She arrives at `warpedia.org/contribute` from a search result or a "Contribute" link in the site nav. The page presents three clear cards:

1. **I have a primary source to share** — letter, diary, photograph, document, recording
2. **I'm a researcher / editor** — encyclopedic articles, themes, corrections
3. **My organisation has content to donate** — bulk and partner contributions

She picks card 1.

### Screen 2 — what type of item?

A simple grid of item types with icons. Each card shows the type name and a one-line description.

- Letter / Postcard
- Diary or journal entry
- Photograph
- Document (service record, telegram, etc.)
- Audio recording (oral history, interview)
- Video recording
- Object (medal, badge, uniform, trench art) — *takes a photograph of the object*
- Other

She picks **Letter**. The form below adapts to the item subtype.

### Screen 3 — sign in (or guest with email)

Warpedia requires identification of the contributor — at minimum a verified email address. Trade-off: **no fully anonymous contributions** at v1, because we need a contact for editorial questions and we need to track contribution provenance for trust/safety. Light-touch: account is just email + display name. OAuth via Google / GitHub / Apple / Wikimedia accepted.

For partner organisations: separate tier of account with elevated trust and bulk-flow access (granted manually for v1).

### Screen 4 — upload the file(s)

Drag-and-drop area. Sarah drops `letter-front.tif` and `letter-back.tif` — both pages of the same letter.

The uploader:
- Accepts up to 100 MB per file at v1; common formats (TIFF, JPEG, PNG, PDF, WAV, FLAC, MP4, etc.).
- Reads EXIF / IPTC / XMP and pre-fills date/location fields where present.
- For pages of the same physical item, prompts: "Are these multiple pages/files of one item, or separate items?" — Sarah picks "one item, multiple pages."
- Computes SHA-256 client-side as the upload progresses (used for integrity and de-duplication).
- Detects duplicates: if the same SHA-256 already exists in warpedia, surfaces the existing item and offers "merge / supplement" rather than create-new.

### Screen 5 — about the item

Form fields, all but title optional but encouraged:

- **Title** (required) — auto-suggested from filename + item type. Sarah accepts the suggestion: "Letter from Pte. John Henry Smith to his mother, 3 July 1916".
- **Date written** — EDTF-tolerant input. Sarah types `1916-07-03`. The input also accepts `c. July 1916`, `1916-07-?`, `summer 1916`.
- **From / To** — a Person picker that reconciles to existing `Person` entities or creates new ones inline. Sarah types "John Henry Smith" — the picker shows "We don't have a record yet — create one?" She fills minimal details (name, born ~1894, died 1916-07-04, served with 1st Battalion AIF).
- **Where written** — Place picker (Wikidata-backed). Sarah leaves blank.
- **Language** — auto-detected from any provided transcription; she confirms English.
- **Number of pages / extent** — auto-detected from upload count.
- **Description / context** — free text. She writes a paragraph about who Smith was and why this letter matters.

### Screen 6 — transcription

Three options presented as cards:

1. **I'll transcribe it myself.** Opens a side-by-side view of the scan and a text editor.
2. **Have warpedia AI-transcribe it.** Runs Transkribus in the background; result is flagged as "machine-only, awaiting human review".
3. **Skip — someone else can transcribe later.** Warpedia surfaces these on the "transcription needed" queue for community contributors.

Sarah is unsure about her great-grandfather's handwriting and picks option 2. The AI run takes ~30 seconds; she sees the result and is invited to review/correct it. She fixes a few obvious errors. Her status changes from "machine-only" to "human-edited". The provenance records both steps.

### Screen 7 — subject and conflict

Auto-suggested based on the date and any picked entities: "This appears to be from the First World War, Western Front." She confirms. Optional: pick specific events the letter relates to. She picks `Battle of the Somme` from the autocomplete.

Tags via the curated `wp:tag:` vocabulary. She picks `wp:tag:trench-warfare`.

### Screen 8 — about the contribution itself

These questions are critical for trust and provenance.

- **How did you come to have this item?** Free text. Sarah writes: "Inherited from my grandmother (Smith's daughter); has been in my family since 1916."
- **Your relationship to the subject** — she picks "great-granddaughter" from a dropdown.
- **Where does the original physical item live now?** "In my family's possession" / "donated to a museum (which?)" / "lost or destroyed" / "unknown".
- **Has this item been published before?** Y/N + URL if yes.

These don't all show on the public item page; some are editorial-only metadata used for provenance assessment.

### Screen 9 — rights and licensing

The single most important screen for warpedia's legal hygiene.

A wizard-style sub-flow:

1. **Are you the rights holder?** Y/N
   - If Y: continue to license selection.
   - If N: "Do you have permission from the rights holder?" → if Y, supply contact; if N, "Is the work in the public domain by age?" → wizard checks dates.
2. **License selection** — three cards, with a clear default:
   - **CC BY-SA 4.0** (warpedia default — Wikipedia-compatible, attribution + share-alike)
   - **CC0 / Public Domain Dedication** (most open — for those who want to release rights entirely)
   - **Other / I'm not sure — please review** (kicks to editorial; warpedia may suggest a specific tier or decline)
3. **Warranty checkbox**: *"I assert that the rights I am granting are mine to grant, and that to the best of my knowledge this submission does not infringe anyone else's rights."*
4. **Attribution preference**: "Credit me as 'Sarah Smith (great-granddaughter)' / 'Anonymous descendant' / [custom]".

Sarah picks CC BY-SA 4.0 and the named-attribution option.

### Screen 10 — privacy and sensitivity

- **Does this item name living people?** If yes: "Have you consulted next-of-kin where appropriate?" + free-text notes.
- **Are there passages that should be redacted?** Optional: bounding-box selection on the scan with a redaction reason (e.g. "next page contains my grandmother's medical condition").
- **Is the content sensitive in ways the editorial team should be aware of?** Atrocity content, executions, sexual violence, racial/religious slurs, etc.

For Sarah's letter (KIA in 1916, no living people named), this screen is fast — all "no" or "not applicable".

### Screen 11 — review and submit

A preview of how the item will appear publicly: the item card, the metadata table, the IIIF viewer with her scans, the transcription. A summary panel showing:

- License: CC BY-SA 4.0
- Tier: OPEN-SA
- Linked entities: 1 Person (created), Battle of the Somme, 1st Battalion AIF
- AI-assisted: Yes (transcription, machine-edited by you)
- Sensitivity flags: none
- Estimated review time: 5–10 days

Sarah submits.

### Screen 12 — confirmation

A confirmation page:
- Submission ID + URL she can bookmark to check status.
- "Your contribution is in the editorial queue. We'll email you when it's reviewed — typically within 5–10 days. You can edit the submission until review begins."
- Suggestions for next steps: "Browse other Somme items", "Contribute another item from your collection", "Become a transcription volunteer".

### Behind the scenes — what happens on submit

1. **Validation.** File MIME, virus scan, schema validation (every required field present, every controlled-vocab field a valid URI), licence/tier coherence (the URI Sarah picked maps to the tier she has).
2. **ULID and hash.** Generates `wp:item:01HX...`; stores client-computed SHA-256 alongside server-computed verification.
3. **B2 upload.** Master file(s) written to `b2://warpedia-master/wp:item:01HX/...`. (See [`infrastructure/storage.md`](../infrastructure/storage.md).)
4. **Git draft branch.** A new branch `submission/01HX...` is created in the metadata repo with `item.yml`, `manifest.jsonl` entry, and any new entity stubs (the Person record Sarah created). The branch is *not* merged.
5. **Editorial queue entry.** A row in the editorial queue surfaces the submission to reviewers with all context and a one-click "view in IIIF" link.
6. **Auto-pre-review checks.** Background jobs run: duplicate detection (against existing items), entity reconciliation (does the Person Sarah created match any existing one?), basic NSFW/PII scan, AI summary of the content for the reviewer.
7. **Email to contributor.** Submission confirmation with the status-page URL.

No derivatives are generated yet (saves cost on rejected submissions). No Glacier write. No public mirror. Those happen post-approval.

## Other flows

### Collection contribution

Sarah's father, Daniel Smith, wants to contribute the *entire* John Henry Smith archive — 47 letters, 1 diary, 6 photographs, 2 medals, 1 telegram. Single-item flow would be brutal.

The collection flow:

1. **Create a Collection** with provenance description ("Inherited from my grandmother; held in family since 1916").
2. **Bulk upload** — drag a folder or zip. Up to ~100 items per batch at v1.
3. **Per-item metadata** — a spreadsheet-style grid where each row is one item. Many fields can be set at the collection level and inherited (license, contributor, contributor relationship, primary subject person).
4. **Per-item review** — Daniel can quickly skim each item, accept inherited metadata or override.
5. **Single submit** — all 57 items submitted as one editorial-review unit.

Editorial review can be batched: a reviewer accepts the collection-level rights/provenance once, then per-item review is faster. We assume bulk submissions get prioritised over single-item ones for editorial efficiency.

### Encyclopedic article / Theme essay

A different mental model — writing prose, not uploading scans.

1. **Pick the entity to write about** — a Conflict, Event, Unit, Equipment, Theme, Person. If it doesn't exist as an entity yet, create the stub first.
2. **Write the article** in markdown with inline citations using a `[[ref:...]]` syntax that resolves to the warpedia bibliography.
3. **Required**: at least two independent verifiable sources cited (the Wikipedia-grade verifiability bar from the charter).
4. **Submit for editorial review** — reviewers verify citations, neutrality, factual accuracy.

### Edit / correction

Lightweight. Anyone can suggest:
- Transcription corrections (line-by-line diff against the existing transcription).
- Metadata corrections (which fields, with reason).
- Entity reconciliation (this Person record should be merged with that one).
- Encyclopedic-article edits (markdown diff).

Reviewed by an editor; small corrections are typically fast-tracked.

### Bulk and partner contributions

For museums, regimental associations, and community archives that want to donate their digitised holdings:

- **OAI-PMH harvest** — if the partner already exposes an OAI-PMH endpoint with Dublin Core metadata, warpedia can harvest it directly. Most museum CMSes (CollectionSpace, Mukurtu, etc.) do this.
- **CSV + folder ingest** — for less-modern systems. Partner provides a CSV manifest and a folder of files.
- **IIIF manifest pull** — if the partner exposes IIIF, warpedia can pull manifests + tile sources without re-hosting until necessary.
- **API push** — for partners with technical capability, a programmatic submission API (see "API surface" below).

Partner contributions still go through editorial review, but the bar is calibrated: a verified museum's bulk donation gets a sample-review approach rather than item-by-item review. Trust the institution's existing rights work; spot-check rather than re-litigate.

## Editorial review

The middle of the funnel: where everything stops until a human says yes.

### Reviewer queue

Reviewers see a unified queue with filtering by:
- Submission age (oldest first by default — fairness)
- Type (single item / collection / article / edit / bulk)
- Sensitivity flags
- Contributor history (first-time vs trusted contributor)
- Required reviewer skill (language expertise, period expertise)

### Review checklist

Per-submission checklist (UI-presented, must all be ticked or commented before approval):

1. **Authenticity plausibility** — does the metadata cohere? Date matches handwriting style / paper / postmark? Named entities (unit, place) consistent?
2. **Rights coherence** — does the declared license actually match the rights situation? (Sarah's letter: family heirloom, deceased subject, descendant claims rights — coherent.)
3. **Metadata completeness** — required fields present, controlled-vocab fields valid, entities reconciled where possible.
4. **Privacy** — no living-person identification without consent; no PII (current addresses, contact details) in transcribed text; no unredacted medical, sexual, or otherwise sensitive material concerning identifiable living people.
5. **Sensitive content handling** — atrocity/violence content carries appropriate content notes; editorial framing is neutral; not gratuitous.
6. **Charter compliance** — submission posture is encyclopedic, not memorial/genealogical/advocacy. Tribute language, family-tree-building intent, opinionated commentary all flag for editing or rejection.
7. **Quality bar** — scan resolution adequate; transcription quality adequate or flagged for community improvement.

### Outcomes

- **Approve** — item moves to publication pipeline (see below).
- **Request changes** — reviewer leaves comments; contributor gets email and can edit and resubmit.
- **Hold for second opinion** — sensitive or contested submissions get reviewed by a second editor.
- **Reject** — with explanation. Spam, copyright violations, unverifiable provenance, or charter violations.

### SLA

v1 target: 5–10 days for first review. v2: 48 hours. Bulk and partner contributions reviewed on a separate, slower track but with proportional throughput.

### On approval — the publication pipeline

When a reviewer clicks Approve:

1. **Merge the submission branch** to `main` in the metadata Git repo.
2. **Trigger derivative generation** — the worker pulls master(s) from B2, generates IIIF tiles, web JPEGs, thumbnails, audio/video transcodes; uploads to R2.
3. **Daily Glacier batch picks up the master** for deep-archive write (per the storage architecture).
4. **License-gated public mirror** — if `OPEN` or `OPEN-SA`, the IA/Commons mirror worker queues an upload. NC items skip this.
5. **Static site rebuild** — Cloudflare Pages rebuilds the affected pages (item, contributor profile, related entity pages).
6. **Email contributor** — "Your item is now published at warpedia.org/items/01HX...".
7. **Public attribution updates** — contributor's profile page (if public) gains the new item; contribution count increments.

All of this is automated; the editor's only action is the Approve click.

## Sensitive material and special cases

### Atrocity and violence content

In scope per the charter — but handled with care.

- Reviewer must flag with appropriate `wp:tag:` (atrocity, massacre, violence) and the item carries a content note in the UI.
- Graphic imagery shown behind a click-through warning.
- Editorial framing in any associated prose is strictly neutral; no editorialising about perpetrators or victims beyond what reputable secondary sources establish.
- Items connected to ongoing legal proceedings (modern war crimes trials) require additional caution and may be deferred.

### Items naming living people

- Default conservative: any item naming a person born within the last 100 years requires explicit contributor confirmation that the person (or next-of-kin) consents, OR that the named person is deceased and consultation was not feasible.
- Items where the named living person objects post-publication go through a takedown process (separate doc, not yet drafted).

### Items with PII

The contribution flow's automated PII scan catches obvious things (current addresses, phone numbers, government IDs, email addresses). Review must verify; redact in transcription before publication.

### Disputed authenticity

For items where authenticity is contested:
- v1: simply decline if there is meaningful doubt.
- v2: a "disputed" flag with the dispute substance documented; item is published but clearly marked.

### Items connected to active conflicts

Per the charter: nothing operational, nothing classified, nothing real-time on active conflicts. Personal narratives from contemporary conflicts (e.g. a Ukrainian soldier's diary, with the soldier's consent) are in scope but require additional editorial care for operational-security reasons. Defer most contemporary contributions to v2 once policy is settled.

## Anti-abuse and quality controls

| Risk | Mitigation |
|---|---|
| Spam submissions | Account requirement; Cloudflare Turnstile / rate limiting; first-submission moderation hold |
| Fake "ancestor" submissions | Required provenance questions ("how did you come to have this?"); editorial provenance assessment; hash-based duplicate detection across the open web |
| Holocaust denial / extremist content | Explicit charter prohibition; editorial review; in extremis ban contributor account |
| Copyright laundering (uploading material the contributor doesn't own) | Warranty checkbox creates contributor liability; reverse-image search at scale; takedown process; trust-tier system for repeat contributors |
| AI-fabricated "primary sources" | Specifically called out as a v2 risk; v1 mitigation is editorial vigilance and trusting institutional contributors more than anonymous ones; v2 may require provenance signing or watermark detection |
| Coordinated inauthentic behaviour | Account-level pattern detection; partner with Wikimedia abuse-detection community; out-of-scope for v1 deep work |
| Doxxing / harassment via item submissions | Privacy review screen; living-person consent requirement; takedown process |
| Vandalism of encyclopedic articles | Wikipedia-style watch-list and revert tools; edit history; v1 limited by smaller editor base, v2 needs proper community tooling |

The hardest abuse vector is AI-fabricated primary sources at scale. We don't have a great answer in v1 beyond editorial vigilance. By v2, signed-provenance and authentication assistance from cultural-heritage standards bodies should help. This is a known unsolved problem.

## Notifications and contributor lifecycle

- **Submission confirmation** (immediate, email): "received, in queue, expected review time".
- **Edit requested** (email + status page): with reviewer comments and edit link.
- **Item published** (email + status page): with the canonical URL and an attribution-display preview.
- **Item used elsewhere** (occasional, opt-in): if your contribution gets cited externally or mirrored to Commons, get notified.

Contributor profiles (opt-in, off by default):
- Public name and bio.
- Contribution count and link to all contributed items.
- Geographic / period interests.
- Optional ORCID / academic affiliation linkage.

The encyclopedic posture means contributor profiles are *editorial bios*, not social-media-style profiles. No follower counts, no feeds.

Trust tiers (for editorial bandwidth management):
- **New contributor** — every submission moderated.
- **Verified contributor** (after N approved submissions, e.g. 5) — single-item submissions auto-pre-approved subject to spot review.
- **Trusted partner** (museums, archives, established researchers) — bulk flow; sample review; can approve transcription corrections without editor.
- **Editor** — can approve other contributors' submissions.

## What we explicitly don't accept

- **Genealogy data dumps with no primary sources** — descendant trees, family-tree GEDCOMs without an associated diary/photo/document. Contribute to FamilySearch; not warpedia's lane.
- **Memorial tributes** — "in loving memory of Grandpa Joe who served in WW2". Use Find a Grave / Ever Loved.
- **Opinion / advocacy pieces** — essays arguing a war was just/unjust, blaming individual leaders, etc. Not encyclopedic.
- **Vendor / publisher / restoration-business promotion** — flagged in the charter; rejected.
- **Operational/classified/sensitive contemporary military information** — even if technically PD/declassified, defer to charter judgement.
- **AI-generated "primary sources"** — at any contributor's request, even framed as "what a soldier might have written". Not a primary source by definition.
- **Material with unclear or unverifiable provenance for sensitive periods** (Holocaust, genocides) — bar is higher; if doubt, decline.

## API surface (sketch — to be specified properly later)

For partner organisations and programmatic contributors:

- **`POST /api/contributions`** — submit a single item with multipart upload. Returns submission ID.
- **`POST /api/contributions/bulk`** — submit a manifest (JSON or CSV) referencing files at URLs warpedia can fetch. Returns batch ID.
- **`GET /api/contributions/{id}`** — submission status.
- **`POST /api/items/{id}/corrections`** — submit a correction (transcription, metadata, entity).
- **`OAI-PMH`** endpoint for partners' harvesters to discover warpedia content (mostly read; v2 may add bidirectional sync).

API requires partner-tier account with rate-limiting and per-key audit log. v1 is rate-limited and review-gated like the UI flow; v2 may add streaming-publication for fully-trusted partners.

## Open questions to resolve before v1 ship

1. **Anonymous contributions** — explicitly disallowed in v1, but reconsider. Some contributors (sensitive material, family conflicts) may have good reasons to anonymise. A pseudonymous middle ground might satisfy both trust and accessibility.
2. **Translation contributions** — should warpedia accept "I'm translating this German letter into English" as a separate contribution that links to the original, or merge into the same item with a translator role? Leaning toward separate items linked via `dcterms:source`.
3. **Editorial review SLA at v1 scale** — with two founding editors, 5–10 days is optimistic if traffic surges. Need a queue prioritisation policy and a "soft pause" mechanism (close submissions briefly when backlog grows beyond capacity).
4. **Trust-tier thresholds** — when does a contributor become "Verified"? Probably "5 approved submissions, no rejections, account ≥30 days old", but this needs adjustment based on actual abuse rates.
5. **Bulk submission size cap at v1** — 100 items per batch is a guess. May need lower at v1 for editorial throughput.
6. **AI transcription default** — opt-in (Sarah's flow) is the conservative default. Worth A/B testing whether default-on with clear "machine-only" flagging produces better outcomes.
7. **Partner OAI-PMH harvesting** — building a generic harvester is non-trivial. v1 may have to be CSV + folder ingestion only; OAI-PMH in v1.x.
8. **Contribution status pages — public or private?** Probably private to the contributor + editors at v1, public at v2 for transparency.

## What this enables that matters

- **A friction-graded path from "I have a shoebox" to a published, cited, linked item in days, not months.** That is the project's main on-ramp.
- **Provenance and rights tracked from the first click**, not retrofitted. Every item has a clean chain back to the contributor and a clear license.
- **Editorial control without editorial bottleneck** — the trust-tier system + auto-pre-review keeps quality high while letting the corpus grow at scale.
- **Charter alignment enforced at submit time** — tribute language, genealogy hooks, advocacy, all get caught at review (or earlier in the flow's framing).
- **An audit trail every item carries forever** — who contributed, what they declared, who reviewed, when it was published, and how it has been edited since. The Wikipedia-grade transparency story.

## References

- [`charter.md`](../charter.md) — the principles all of this is in service of.
- [`data-model.md`](../data-model.md) — the entities the form fields map to.
- [`metadata/dublin-core-profile.md`](../metadata/dublin-core-profile.md) — the metadata profile each submission must satisfy.
- [`metadata/taxonomies.md`](../metadata/taxonomies.md) — controlled vocabularies the form pickers use.
- [`research/source-licensing.md`](../research/source-licensing.md) — license tiers, the warranty / rights model.
- [`infrastructure/storage.md`](../infrastructure/storage.md) — what happens to files post-submit.
