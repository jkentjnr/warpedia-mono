# UI Kit · Editorial review queue

The editor's workbench. Curators (editors and senior editors) work through submissions in a triage queue, opening each into a detail rail with checklist, metadata, transcription review, and decision actions.

**[Open the live prototype ↗](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/)**

## Files

- [Open prototype ↗](https://jkentjnr.github.io/warpedia-mono/design/system/ui_kits/editorial/) — interactive prototype. Source: [index.html](docs/design/system/ui_kits/editorial/index.html).
- [components.jsx](docs/design/system/ui_kits/editorial/components.jsx) — queue table, detail rail, decision actions.

Sits inside the system — see the [design system README](docs/design/system/README.md) for tokens / voice and [SKILL.md](docs/design/system/SKILL.md) for the working agreement. Source spec: [docs/process/contribution-flow.md](docs/process/contribution-flow.md) (review-queue section).

Reading the kit:
- Left: queue table — dense rows, hairline separators, no card chrome.
- Right: detail rail — plate preview, reviewer checklist, catalogue metadata table, editorial notes, decision buttons, activity log.

Status states (badge colors):
- `TRIAGE` (info / iron) — not yet picked up
- `QUEUED` (link-only / muted) — partner / bulk batch awaiting review
- `IN REVIEW` (caution / ochre) — assigned, in progress
- `APPROVED` (open-sa / verdigris) — passed review
- `REJECTED` (error) — declined with reason
