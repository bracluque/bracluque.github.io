# sr-extraction-pipeline

The orchestrator + subagent extraction pipeline described in the guide at [**/guides/llm-extraction/**](../../guides/llm-extraction/) — double-blind LLM extraction from large PDF corpora for systematic reviews, with reconciliation and reliability measurement built in.

Everything here is self-contained: the generalized, project-agnostic template (`template/`) for adapting this to a new review, and the complete, real, unedited IDB Extended School Day pipeline (`examples/esd/`) — full codebook, orchestrator prompts, and worker definitions, exactly as run in production.

**Not familiar with git or GitHub?** [Download the ZIP](../sr-extraction-pipeline.zip) instead of cloning — unzip it and you have the same folder described below.

## Structure

```
sr-extraction-pipeline/
├── CLAUDE.md                  ← generic orchestrator/worker rules, {placeholders} for your paths
├── HOW_TO_RUN.md              ← run guide, stage by stage
├── .claude/agents/            ← the three worker subagent definitions
│   ├── reviewer-a-worker.md
│   ├── reviewer-b-worker.md
│   └── reconciler-worker.md
├── prompts/                   ← the three orchestrator prompts, one per stage
│   ├── 01_REVIEWER_A_ORCHESTRATOR.md
│   ├── 02_REVIEWER_B_ORCHESTRATOR.md
│   └── 03_RECONCILER_ORCHESTRATOR.md
├── template/                  ← the reusable, project-agnostic pieces
│   ├── SKILL_codebook.md          ← blank codebook skeleton to fill in per review
│   ├── SKILL_reconciliation.md    ← adjudication logic (already mostly generic)
│   └── TEMPLATE_output.md         ← output record shape
└── examples/esd/               ← the real ESD project, complete
    ├── README.md                   ← the original tool's own README
    ├── CLAUDE.md                   ← the real orchestrator/worker rules, ESD paths included
    ├── HOW_TO_RUN.txt              ← the real, stage-by-stage run guide
    ├── .claude/agents/              ← the six real worker subagent definitions
    │   ├── reviewer-a-worker.md
    │   ├── reviewer-b-worker.md
    │   ├── reconciler-worker.md
    │   └── patch-*-worker.md          ← Stage 4 (adding fields to already-extracted papers)
    ├── prompts/                      ← the six real orchestrator prompts (stages 1–3, patch 4A–4C)
    ├── skills/
    │   ├── SKILL_content_extraction.md  ← the full ESD codebook, every field
    │   ├── SKILL_results_extraction.md  ← the full results-sheet rules
    │   ├── SKILL_reconciliation.md      ← the real adjudication logic
    │   ├── SKILL_patch_fields.md        ← Stage 4 field rules
    │   ├── TEMPLATE_output.md           ← the real output template, all 14 content sections
    │   └── TEMPLATE_patch_output.md
    ├── excerpt.md                   ← the same 4-field excerpt shown in the guide (§2.1)
    └── sample-output/5cbd47b5.md    ← one real, complete extraction record
```

## Two ways to use this

**Adapt it to your own review** — start from `template/`, which is already stripped of ESD-specific fields (see the guide's [§7](../../guides/llm-extraction/#setup) for how to brief Claude to draft your codebook).

**See exactly how the ESD review was actually run** — everything in `examples/esd/` is the genuine, unedited pipeline: real coding rules, real prompts, real Windows file paths from the machine it ran on. Nothing is redacted or simplified. It's here so a new consultant can read the actual thing rather than a description of it.

## Why generalize at all

The original tool (`examples/esd/`) was built for one specific review — Extended School Day / expanded learning time — with ESD's field list and coding schemes baked directly into the skill files. None of that is specific to *how* the pipeline works; it's specific to *what* it was extracting. `template/` separates those two things so the engine can be pointed at a different codebook for a different review without rewriting the orchestration logic.
