# CLAUDE.md — ESD Systematic Review Extraction

> **Note:** Everything below is the real, unedited file this project ran on, except the Windows username in file paths — `C:\Users\bracl\...` has been replaced with `C:\Users\<you>\...` throughout `examples/esd/` before publishing. No other content, path structure, or wording has been changed.

> **Placement:** This file belongs at `C:\Users\<you>\Dropbox\IDB\CLAUDE.md` (the Claude Code project root). Claude Code auto-loads it. A reference copy also lives at `sr-esd-extraction-agent\CLAUDE.md`.

This project extracts data from ~245 academic PDFs for the **Extended School Day (ESD)** systematic review. It uses a three-stage, orchestrator + subagent design to avoid context-window limits when processing a large corpus.

---

## Architecture — why orchestrator + subagents

Each stage (Reviewer A, Reviewer B, Reconciler) runs as an **orchestrator** that dispatches small chunks of papers to **worker subagents**. Each subagent has its own fresh context window, processes its chunk, writes markdowns to disk, and returns a compact summary to the orchestrator. The orchestrator only plans and tracks — it never reads PDF contents, so its context stays small across the whole corpus.

This is what lets a single Claude Code session process hundreds of papers instead of stopping after 5.

| Stage | Orchestrator prompt | Worker subagent | Chunk × parallel |
|-------|---------------------|-----------------|------------------|
| 1. Reviewer A | `prompts\01_REVIEWER_A_ORCHESTRATOR.md` | `reviewer-a-worker` | 8 papers × 4 workers = 32/wave |
| 2. Reviewer B | `prompts\02_REVIEWER_B_ORCHESTRATOR.md` | `reviewer-b-worker` | 8 papers × 4 workers = 32/wave |
| 3. Reconciler | `prompts\03_RECONCILER_ORCHESTRATOR.md` | `reconciler-worker` | 5 papers × 3 workers = 15/wave |

Worker definitions live in `.claude\agents\`. Claude Code auto-loads them when the project opens.

**A, B, and the Reconciler each run in separate Claude Code sessions.** This is what keeps A and B independent from each other.

---

## Paths (Windows — user's machine)

| What | Where |
|------|-------|
| Project root | `C:\Users\<you>\Dropbox\IDB` |
| Input PDFs | `C:\Users\<you>\Dropbox\IDB\Paper\ESD` |
| Agent files | `C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent` |
| Output root | `C:\Users\<you>\Dropbox\IDB\Output\ESD` |
| Reviewer A drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerA\` |
| Reviewer B drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\` |
| Final consolidated | `C:\Users\<you>\Dropbox\IDB\Output\ESD\` (top level) |

Create any output folders that don't exist before writing.

---

## Which prompt am I running?

Look at the user's message to decide:

| User says | Role | Prompt to read and follow |
|-----------|------|---------------------------|
| "run reviewer A", "start stage 1", references `01_REVIEWER_A_ORCHESTRATOR` | Reviewer A orchestrator | `sr-esd-extraction-agent\prompts\01_REVIEWER_A_ORCHESTRATOR.md` |
| "run reviewer B", "start stage 2", references `02_REVIEWER_B_ORCHESTRATOR` | Reviewer B orchestrator | `sr-esd-extraction-agent\prompts\02_REVIEWER_B_ORCHESTRATOR.md` |
| "run reconciler", "start stage 3", references `03_RECONCILER_ORCHESTRATOR` | Reconciler orchestrator | `sr-esd-extraction-agent\prompts\03_RECONCILER_ORCHESTRATOR.md` |

If the user says "start extraction" without specifying a stage, ask which.

If they say "what stage are we on?" — count files in each output folder and report.

---

## Orchestrator behavior (critical)

If you are acting as an orchestrator:

- **Do NOT extract papers in your own context.** Dispatch to the worker subagent via the Task tool.
- **Do NOT read PDFs yourself.**
- **Do NOT read worker output files** (the `.md` files the workers produce). Only read the workers' returned summaries.
- **Keep your running log compact.** One line per wave, not one paragraph per paper.
- **Default: parallel waves.** Reviewers dispatch 4 workers per wave (8 papers each = 32/wave). Reconciler dispatches 3 workers per wave (5 papers each = 15/wave). Wait for the entire wave to complete before launching the next.
- **If the user asks for sequential dispatch, do that instead.** If they ask for more parallelism, increase to 5–6 workers per wave for reviewers, 4 for reconciler.

This discipline is what makes the orchestrator's context stay small enough to get through the whole corpus in one session, while parallel dispatch keeps wall-clock time low.

---

## Worker behavior (critical)

If you are acting as a worker:

- **Process your entire assigned batch** before returning. Don't stop partway.
- **Save each file immediately** after extraction, before moving to the next paper.
- **Skip files that already exist non-empty** — don't redo work.
- **Return only a compact summary** (table of rows + counts). Don't include file contents.
- **Do not read outputs from other workers or the opposite reviewer.**

---

## Core extraction rules (apply to all workers)

1. **Extract only what the paper explicitly states.** Never calculate Cohen's d, Hedge's g, or any effect size. Never infer. Never guess.
2. **Every Content-Sheet row needs evidence:** short verbatim quote (≤15 words, in quotation marks) + page number. If no quote supports a value, write `[NOT FOUND — flag for reconciler]`.
3. **Leave blank, not "N/A".** Unused fields stay empty.
4. **Decimal separator = period** (`0.05`, not `0,05`).
5. **P-values: extract the numeric p-value for EVERY outcome that reports one, including non-significant results.** `p = 0.312` is valuable — enter it. No stars on a coefficient does NOT mean no p-value; look for numeric p in the table/prose first. Only write `ns` if the paper literally says so. Leave blank only if truly not reported. Keep `<` signs (`<0.001` ≠ `0.001`).
6. **Multiple follow-ups** → first and last only.
7. **Multi-arm with control** → extract A-vs-C and B-vs-C only, not A-vs-B.
8. **Cluster RCT → coded as RCT**.
9. **Level of measurement** = where data was collected, not where randomization happened.
10. **Data Collection Instruments** and **Notes** must appear in TWO forms: structured (table / bullets) AND linear prose paragraph. Both are required.
11. **Confirm effect-size type** (Cohen's d vs Hedge's g vs η²) in Methods or table footnotes before entering.

---

## Independence rules (Reviewers A and B)

- Reviewer A workers must NOT read `_reviewerB\` or the top-level `Output\ESD\*.md` files.
- Reviewer B workers must NOT read `_reviewerA\` or the top-level `Output\ESD\*.md` files.
- Running A and B in separate top-level Claude Code sessions enforces this structurally. Within a session, the agent definitions also state this as a hard rule.

---

## Where detailed rules live

| File | Covers |
|------|--------|
| `skills\SKILL_content_extraction.md` | Every field in the Content Sheet, coding schemes, evidence requirements |
| `skills\SKILL_results_extraction.md` | Every field in the Results Sheet, p-value rules, scenarios A–F, ANOVA/HLM handling |
| `skills\SKILL_reconciliation.md` | How the Reconciler compares A and B and resolves disagreements |
| `skills\TEMPLATE_output.md` | The exact output structure |
| `.claude\agents\reviewer-a-worker.md` | Reviewer A worker subagent definition |
| `.claude\agents\reviewer-b-worker.md` | Reviewer B worker subagent definition |
| `.claude\agents\reconciler-worker.md` | Reconciler worker subagent definition |

---

## Don'ts

- ❌ Don't compute effect sizes.
- ❌ Don't fill `N/A` or `0` in unused fields.
- ❌ Don't drop non-significant p-values — extract them.
- ❌ Don't write "Not reported" unless the paper literally says so.
- ❌ Don't skip the Evidence column.
- ❌ Don't reconcile a paper that only has one reviewer's draft — log to `_RECONCILER_ISSUES.md`.
- ❌ Don't overwrite files that already exist non-empty — skip them.
- ❌ (Orchestrator) Don't do extraction work yourself. Dispatch.
- ❌ (Worker) Don't return file contents to the orchestrator. Return a compact summary.

---

## File encoding

Write all `.md` outputs as UTF-8. Preserve non-ASCII characters in author names and Spanish-language abstracts.



---

## Stage 4 — Patch: New Fields

This stage adds new fields to already-extracted and reconciled papers. It follows the **same three-sub-stage architecture** as the original pipeline (independent Reviewer A → independent Reviewer B → Reconciler) to maintain extraction quality.

### What is being patched

| Section | Compulsory? | Fields |
|---------|-------------|--------|
| P1: ESD Intervention | ✅ Always | Intensity/dosage, frequency, duration, mandatory/optional, type of activities, content focus, who runs it, group size, setting |
| P2: Tutoring | Only if present | Description, type, curriculum alignment, provider, format/ratio, intensity, frequency, duration, structured pedagogy, AI/technologies |
| P3: Teacher Training | Only if present | Type, description, methods, modality, group size, intensity, components |
| P4: Literacy | If literacy component present | Literacy instruction approach, literacy area |

### Architecture

| Stage | Orchestrator prompt | Worker subagent | Chunk × parallel |
|-------|---------------------|-----------------|------------------|
| 4A. Patch Reviewer A | `prompts\04_PATCH_REVIEWER_A_ORCHESTRATOR.md` | `patch-reviewer-a-worker` | 8 papers × 4 workers = 32/wave |
| 4B. Patch Reviewer B | `prompts\05_PATCH_REVIEWER_B_ORCHESTRATOR.md` | `patch-reviewer-b-worker` | 8 papers × 4 workers = 32/wave |
| 4C. Patch Reconciler | `prompts\06_PATCH_RECONCILER_ORCHESTRATOR.md` | `patch-reconciler-worker` | 5 papers × 3 workers = 15/wave |

**Run 4A and 4B in separate Claude Code sessions** (same independence rule as original Stages 1 and 2).

### Output folders

| Folder | Contents |
|--------|----------|
| `Output\ESD\_patchA\` | Patch A draft files |
| `Output\ESD\_patchB\` | Patch B draft files |
| `Output\ESD\_patch\` | Reconciled patch files (standalone) |
| `Output\ESD\{ID}.md` | **Updated in place** — patch content inserted before Results Sheet |

### Insertion point in final files

The Patch Reconciler inserts the new content between the Notes section and:
```
# PART 2 — RESULTS SHEET
```

The patch block contains sections P1 through P4 (and the Patch Reconciliation Report) with no additional heading label.

### Which prompt am I running?

| User says | Role | Prompt |
|-----------|------|--------|
| "run patch reviewer A", "stage 4A" | Patch Reviewer A orchestrator | `prompts\04_PATCH_REVIEWER_A_ORCHESTRATOR.md` |
| "run patch reviewer B", "stage 4B" | Patch Reviewer B orchestrator | `prompts\05_PATCH_REVIEWER_B_ORCHESTRATOR.md` |
| "run patch reconciler", "stage 4C" | Patch Reconciler orchestrator | `prompts\06_PATCH_RECONCILER_ORCHESTRATOR.md` |

### Skill files

| File | Covers |
|------|--------|
| `skills\SKILL_patch_fields.md` | Coding rules for all four patch sections |
| `skills\TEMPLATE_patch_output.md` | Exact output structure for patch draft files |

### Independence rules (4A and 4B)

- Patch Reviewer A workers must NOT read `_patchB\` or `_patch\`.
- Patch Reviewer B workers must NOT read `_patchA\` or `_patch\`.
- Run 4A and 4B in separate top-level Claude Code sessions.
