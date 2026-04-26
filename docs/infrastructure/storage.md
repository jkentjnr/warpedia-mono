# Warpedia — Storage Architecture

*Draft 2026-04-26. The four-tier storage strategy for warpedia: a self-owned deep-archive copy of every master, a warm working copy for routine operations, a CDN-fronted hot tier for serving, and free public-preservation mirrors for open content. Designed for multi-decade durability at hobbyist-budget cost.*

## Principles

1. **3-2-1 backup discipline, applied to the cloud.** Three copies, on at least two independent providers/media types, with at least one offsite from the working tier. Applies even when "the cloud" is involved — a single-provider failure (Cloudflare goes down, Backblaze gets acquired badly, AWS account is locked) cannot kill the archive.
2. **Self-owned masters, always.** Internet Archive and Wikimedia Commons are excellent partners for *redundancy*, but warpedia must hold its own canonical copy of every master file. Third parties can change policy, deprecate collections, or fail; the project's continuity must not depend on their continued goodwill.
3. **Egress fees, not storage fees, decide the bill.** A public archive at Wikipedia-scale traffic spends most of its money on outbound bandwidth, not on storing bytes. Optimise for zero-egress on the hot tier.
4. **Cheapest tier per access pattern.** Masters are written once and read almost never; serve them from deep-archive cold storage. Derivatives are read constantly; serve from a CDN. Don't pay hot-tier prices for cold-tier workloads.
5. **Open content gets free mirrors.** Where licensing allows, mirror to Internet Archive and Wikimedia Commons — free, mission-aligned, and additional durability at zero marginal cost. See [`charter.md`](../charter.md).

## The four tiers

| Tier | Purpose | Provider | Storage cost | Egress | Retrieval time |
|---|---|---|---|---|---|
| **1. Deep archive** | Self-owned cold master, "even if we go bankrupt" copy | AWS S3 Glacier Deep Archive | **~$0.001/GB-mo** ($1/TB-mo) | $0.02–0.09/GB + retrieval fees | 12–48 hours |
| **2. Working master** | Self-owned warm master — used to regenerate derivatives, run integrity checks, restore tier 3 | Backblaze B2 | **$0.006/GB-mo** ($6/TB-mo) | Free via Cloudflare Bandwidth Alliance | Seconds |
| **3. Hot serving** | Derivatives + IIIF tiles + thumbnails + web-optimised media — what the website actually serves | Cloudflare R2 | **$0.015/GB-mo** ($15/TB-mo) | **$0** | Milliseconds |
| **4. Public mirror** | Open-licensed content donated to mission-aligned preservation orgs | Internet Archive / Wikimedia Commons | **Free** | Free | Seconds |

Plus:

| Tier | Purpose | Provider | Cost |
|---|---|---|---|
| **Metadata** | YAML metadata, markdown prose, transcriptions, schema, taxonomies | Git / GitHub (public repo) | Free |

## What goes where

| Content type | Tier 1 (Glacier) | Tier 2 (B2) | Tier 3 (R2) | Tier 4 (IA / Commons) | Git |
|---|---|---|---|---|---|
| Master image scan (TIFF, hi-res JPEG) | ✓ | ✓ | – | ✓ if open | – |
| Master audio (WAV) | ✓ | ✓ | – | ✓ if open | – |
| Master video (mezzanine encode) | ✓ | ✓ | – | ✓ if open | – |
| Web-optimised JPEG, WebP, AVIF | – | – | ✓ | – | – |
| IIIF tile pyramid | – | – | ✓ | – | – |
| Thumbnails | – | – | ✓ | – | – |
| Audio web encoding (MP3, Opus) | – | – | ✓ | – | – |
| Video web encoding (HLS, MP4) | – | – | ✓ | – | – |
| Item metadata YAML | – | – | – | – | ✓ |
| Encyclopedic prose (markdown) | – | – | – | – | ✓ |
| Taxonomies, schema, controlled vocabularies | – | – | – | – | ✓ |
| Transcriptions | – | – | – | – | ✓ |
| Static site HTML (built from Git + R2) | – | – | ✓ | – | – |

The discipline: **masters never touch the hot tier**. The hot tier holds only what the public web actually serves. Restoring or re-deriving anything starts from the Tier 2 working master, with Tier 1 as the disaster fallback.

## Cost projections

### v1 — 2 TB total (~100K personal items + 10K manuals)

Assumes derivatives are ~30% of master size (a high-quality scan compresses to about that for web).

| Tier | Volume | Monthly cost |
|---|---|---|
| Glacier Deep Archive masters | 2 TB | $2 |
| B2 working masters | 2 TB | $12 |
| R2 hot derivatives | 600 GB | $9 |
| Internet Archive / Commons | (open content mirrored, free) | $0 |
| Git / GitHub | metadata + prose | $0 |
| Cloudflare Pages + Workers + DNS | static serving | $0 (free tier) |
| **Total** | | **~$23/month** |

### v2 — 20 TB total (mature contributor base, several large harvests ingested)

| Tier | Volume | Monthly cost |
|---|---|---|
| Glacier Deep Archive masters | 20 TB | $20 |
| B2 working masters | 20 TB | $120 |
| R2 hot derivatives | 6 TB | $90 |
| Internet Archive / Commons | (free) | $0 |
| Git / GitHub | (free for public; LFS may add small cost) | $0–$5 |
| Cloudflare Pages / Workers / observability | | ~$25 |
| **Total** | | **~$260/month** |

### v3 — 100 TB total (long-tail mature archive, Wikipedia-scale traffic)

| Tier | Volume | Monthly cost |
|---|---|---|
| Glacier Deep Archive masters | 100 TB | $100 |
| B2 working masters | 100 TB | $600 |
| R2 hot derivatives | 30 TB | $450 |
| Internet Archive / Commons | (free) | $0 |
| Git / GitHub | (free) | $0 |
| Cloudflare Workers / observability | | ~$100 |
| **Total** | | **~$1,250/month** |

For comparison, the same v3 footprint on AWS S3 Standard with realistic public-archive egress (10 TB/month outbound at $0.09/GB) would be ~$2,300 storage + ~$900 egress = **~$3,200/month**. The R2 zero-egress + B2-via-Cloudflare combination saves roughly 60% at scale.

A v3 budget is comfortably within a single ~$50K philanthropic grant (covers ~3 years).

## Worked example — life of an item

Sarah Smith, great-granddaughter of Pte. John Henry Smith, contributes a two-page letter from 1916. The letter has been in her family since the war.

### Step 1 — contribution

Sarah uploads:
- `letter-2pg-master.tif` (12 MB, 600 dpi colour scan)
- Transcribed text (1.4 KB)
- Metadata: dates, recipient, where she got it, declared license: CC BY-SA 4.0

The contribution app:
1. Validates the upload (file size, MIME, virus scan).
2. Computes `sha256:9f3a...` of the master.
3. Allocates a ULID: `wp:item:01HXYZABC...`.
4. Writes a draft `item.yml` to a feature branch in the metadata Git repo.
5. Uploads `letter-2pg-master.tif` to **B2** (`b2://warpedia-master/wp:item:01HXY/master.tif`) — fast write.
6. Queues asynchronous jobs (steps 2–4 below).

### Step 2 — derivative generation (async, ~30 seconds)

A worker pulls the master from B2 and produces:
- `master.iiif/` — IIIF tile pyramid (~3 MB)
- `web.jpg` — sRGB-converted, 2400 px long-edge (~600 KB)
- `thumb.webp` — 400 px (~80 KB)
- `ocr.json` — Transkribus output if applicable (~50 KB)

All derivatives are uploaded to **R2** (`r2://warpedia-hot/wp:item:01HXY/...`). The IIIF manifest references R2 URLs.

R2 is fronted by Cloudflare CDN. Visitors anywhere in the world get edge-cached responses with $0 egress cost to warpedia.

### Step 3 — deep archive write (async, daily batched)

Once a day, a worker:
1. Lists masters in B2 added in the last 24h that have passed editorial review.
2. Copies each to **AWS S3 Glacier Deep Archive** (`s3://warpedia-deep-archive/...`) using `glacier-deep-archive` storage class directly (no Standard transition step needed).
3. Records the `sha256` and ETag for both copies in a `manifest.jsonl` checked into Git.
4. Items spent at least 24h in B2 before Glacier write — gives editorial review a chance to catch obvious issues before the item hits Deep Archive's 180-day minimum retention.

Glacier Deep Archive at 12 MB master = ~$0.000012/month for this single item. Negligible per-item; ~$1/month per TB at scale.

### Step 4 — public mirror (async, after publication + license check)

A separate worker, gated on license tier `OPEN` or `OPEN-SA` and editorial approval:

1. Uploads master to **Internet Archive** with full Dublin Core metadata.
2. If media is Wikimedia Commons-eligible (license CC BY-SA 4.0 / CC BY 4.0 / CC0 / PD), uploads to Commons too.
3. Records IA identifier and Commons filename back in `item.yml` and pushes a git commit.

This worker only runs for `OPEN` / `OPEN-SA` items. `NC` (e.g. CC BY-NC) and `LINK-ONLY` items skip this step — see [source-licensing.md](../research/source-licensing.md).

### Step 5 — public read

A visitor to `warpedia.org/items/01HXYZABC` triggers:
1. Cloudflare edge serves the static HTML page (built from Git + R2 by Cloudflare Pages).
2. The IIIF viewer requests tiles from R2 → Cloudflare CDN → cached at edge.
3. Total cost to warpedia per page view: **$0** for bandwidth, sub-cent for R2 reads.

### Step 6 — integrity audit (annual, automated)

Each year, an automated job:
1. Samples 1% of items at random (~1,000 items in v1, ~10,000 in v2).
2. For each: requests retrieval from Glacier Deep Archive (12–48h wait — fine for an annual job).
3. Recomputes `sha256` and verifies it matches the manifest in Git.
4. Compares against B2 copy; if drift, raise alarm.
5. Logs results to a public integrity report (one of warpedia's transparency commitments).

Glacier retrieval cost for 1% of 100 TB at $0.0025/GB Bulk retrieval = ~$2,500 once per year. Trivial cost; massive durability dividend.

### Step 7 — disaster recovery

Three failure scenarios and their recovery paths:

| Failure | Recovery |
|---|---|
| **R2 hot tier corrupted / accidentally deleted** | Re-derive from B2 working master. Hours, no manual intervention. |
| **B2 working tier lost (vendor failure, account lockout)** | Restore from Glacier Deep Archive (12–48h per item, ~$0.0025/GB Bulk + egress). Slow, manageable. |
| **Both B2 and Glacier lost** (catastrophic) | Restore open content from Internet Archive (free, fast). Re-collect closed/NC content from contributors. Rare but recoverable for the public-domain core. |

The combination of B2 + Glacier + IA means **no single-vendor failure can lose the open corpus**, and at most a slow recovery for the rest.

## Sync and integrity mechanisms

### Manifests in Git

Every item carries a `manifest.jsonl` line (or per-item file) that records:

```jsonc
{
  "item": "wp:item:01HXYZABC...",
  "master": {
    "filename": "master.tif",
    "bytes": 12582912,
    "sha256": "9f3a...",
    "stored": {
      "b2": "b2://warpedia-master/wp:item:01HXY/master.tif",
      "glacier": "s3://warpedia-deep-archive/wp:item:01HXY/master.tif",
      "ia": "https://archive.org/details/warpedia-wp-item-01HXY",
      "commons": null
    },
    "verified_at": "2026-04-26T..."
  },
  "derivatives": [
    { "key": "web.jpg", "sha256": "...", "stored_in": ["r2"] },
    { "key": "thumb.webp", "sha256": "...", "stored_in": ["r2"] }
  ]
}
```

Git is the source of truth for *where every file lives*. If the manifest disagrees with reality, an alarm fires.

### Integrity checks

- **Write-time**: SHA-256 verified on every upload to every tier. Mismatched writes fail the contribution.
- **Continuous**: B2 and R2 contents are cross-checked weekly against the Git manifest. Drift triggers a manual review.
- **Annual**: Glacier sample restore + checksum verify (see Step 6 above).
- **Restore drills**: Quarterly, intentionally restore a randomly-chosen item from Glacier end-to-end. Verify the full pipeline works. Don't discover the recovery procedure is broken during an actual disaster.

### Reproducibility

All derivatives are reproducible from the master. That's the discipline:

- We never edit a master in place. Originals are immutable; corrections produce new items linked via `dcterms:replaces`.
- We never store a derivative we couldn't regenerate.
- Derivative-generation parameters (IIIF tile size, JPEG quality, OCR model version) are recorded in `wp:enrichments` so the same output can be reproduced years later.

## Why these specific providers

- **AWS Glacier Deep Archive** for tier 1: cheapest deep archive on the market with serious institutional durability (11 nines), region replication available, and a regulatory-grade audit trail. Slow retrieval is acceptable because we *never want to retrieve* from this tier in normal operation.
- **Backblaze B2** for tier 2: lowest warm-tier price ($6/TB), free egress to Cloudflare via the Bandwidth Alliance, S3-compatible API, and a long track record (founded 2007, public 2021). Acquired-badly risk is real but mitigated by the fact that it's only one of three master copies.
- **Cloudflare R2** for tier 3: zero egress is the killer feature for a public archive. S3-compatible API. Integrated CDN. Cloudflare's overall reliability is excellent.
- **Internet Archive** for tier 4: 27+ years of operation, mission-aligned with warpedia, accepts CC-licensed material gladly, and can host content at no charge to warpedia.
- **Wikimedia Commons** for tier 4 (subset): the longest-lived open media archive on the internet, with 100M+ files and a community that polices quality. Stricter eligibility (must meet Commons criteria) but maximum permanence for what fits.

## Operational decisions deferred

These are sensible defaults; revisit when scale or context changes:

| Decision | Trigger to revisit |
|---|---|
| Single-region Glacier (us-east-1 default) vs cross-region replication | If a regulatory or grant requirement demands geographic redundancy beyond what Glacier alone provides |
| B2 vs Wasabi vs OVH for working master | If B2 acquisition / pricing changes negatively |
| Cloudflare R2 vs alternative for hot serving | If R2 reliability degrades or pricing changes |
| Self-hosted physical NAS for cold tier (replacing Glacier) | At ~v3+ scale where founder time is available and a $1,000 NAS pays back in ~2 years |
| CDN provider beyond Cloudflare | If a secondary CDN becomes necessary for redundancy |
| Static-site host (Cloudflare Pages) vs alternative | Probably stable for a long time |

## What we explicitly avoid

- **AWS S3 Standard / GCP Cloud Storage / Azure Blob as a public-serving tier.** Egress fees scale with success and become the bill driver. Fine as a *cold* tier (Glacier Deep Archive is one of the cheapest options for that), bad as a hot tier.
- **Single-provider strategies.** No matter how cheap, "everything on Backblaze" or "everything on Cloudflare" is a single point of failure for an enduring project.
- **Self-hosted infrastructure as primary.** A homelab NAS is an excellent *additional* mirror but a poor primary. Founder-time is more limiting than money at this scale.
- **DRM, watermarking, or contractual lock-up on warpedia content.** Anything that limits Wikimedia mirroring violates the charter. Open content stays open.
- **Per-image storage that requires per-image admin** (Cloudinary-style image CDNs that include "smart" features but charge per request). The IIIF + R2 approach is cheaper and standards-based.

## What this enables that matters

- **Predictable cost.** v1 at ~$23/month, v2 at ~$260/month, v3 at ~$1,250/month. No surprises if traffic spikes.
- **Charter-aligned permanence.** Open content gets two free mirrors (IA + Commons) on top of warpedia's three self-owned copies (Glacier + B2 + R2 derivatives). Five-copy durability for the open corpus, three-copy for the rest.
- **Founder-survivable.** A grant of ~$5K covers v1 + 2 years of buffer. A grant of ~$50K covers v3 + 3 years of buffer. The continuity story isn't "trust us to be alive in 30 years" — it's "the masters live in three places and the open corpus lives in five, regardless."
- **No vendor lock.** Every tier uses S3-compatible APIs (Glacier via S3, B2 via S3-compat, R2 native S3-compat) or open standards (Git, IIIF, Dublin Core). Migrating any single tier to a different provider is a config change, not a rewrite.

## References

- [Backblaze B2 pricing](https://www.backblaze.com/cloud-storage/pricing)
- [Cloudflare R2 pricing](https://www.cloudflare.com/developer-platform/products/r2/)
- [AWS S3 Glacier Deep Archive pricing](https://aws.amazon.com/s3/pricing/)
- [Cloudflare Bandwidth Alliance (free B2→CF egress)](https://www.cloudflare.com/network/bandwidth-alliance/)
- [Internet Archive — Donate Materials](https://archive.org/about/contact.php)
- [Wikimedia Commons — Upload guidelines](https://commons.wikimedia.org/wiki/Commons:First_steps)
- [IIIF — International Image Interoperability Framework](https://iiif.io/)
