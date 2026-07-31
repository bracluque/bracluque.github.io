# sr-extraction-pipeline

A generalized version of the orchestrator + subagent extraction pipeline described in the guide at [**/guides/llm-extraction/**](../../guides/llm-extraction/) — double-blind LLM extraction from large PDF corpora for systematic reviews, with reconciliation and reliability measurement built in.

**Status: skeleton.** This repo currently holds the folder structure and placeholders only. The generalization work — stripping the ESD-specific field names, coding schemes, and hardcoded paths out of the original tool into a genuinely reusable template — is in progress.

## Structure

```
sr-extraction-pipeline/
├── CLAUDE.md                  ← generic orchestrator/worker rules (placeholder)
├── HOW_TO_RUN.md              ← run guide (placeholder)
├── .claude/agents/            ← worker subagent definitions (placeholder)
├── prompts/                   ← orchestrator prompts, one per stage (placeholder)
├── template/                  ← the reusable, project-agnostic pieces
│   ├── SKILL_codebook.md          ← blank codebook skeleton to fill in per review
│   ├── SKILL_reconciliation.md    ← adjudication logic (already mostly generic)
│   └── TEMPLATE_output.md         ← output record shape
└── examples/esd/               ← the original ESD project, kept as a worked instance
    ├── excerpt.md                  ← same 4-field codebook excerpt as the guide
    └── sample-output/5cbd47b5.md   ← one real, complete extraction record
```

## Why generalize

The original tool (`sr-esd-extraction-agent`) was built for one specific review — Extended School Day / expanded learning time — with ESD's field list and coding schemes baked directly into the skill files and hardcoded Windows paths in `CLAUDE.md`. None of that is specific to *how* the pipeline works; it's specific to *what* it was extracting. The goal here is to separate those two things so the engine can be pointed at a different codebook for a different review without rewriting the orchestration logic.

## What's not here

The full ESD codebook (`SKILL_content_extraction.md`, `SKILL_results_extraction.md`) and the original orchestrator/worker prompts are IDB project materials and stay available on request — see the guide's [§7](../../guides/llm-extraction/#access) for contacts. `examples/esd/` intentionally shows only the same small excerpt as the guide, not the full ruleset.
