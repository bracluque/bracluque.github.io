# CLAUDE.md — sr-extraction-pipeline

> **Placement:** put this file at `{project_root}/CLAUDE.md`. Claude Code auto-loads it on start. `{project_root}` is your review's own folder — not this repo — see the guide's [§7](../../guides/llm-extraction/#setup) for the folder layout.

This project extracts data from a corpus of academic PDFs using a three-stage, orchestrator + subagent design, so one Claude Code session can process hundreds of papers without hitting context limits.

---

## Architecture — why orchestrator + subagents

Each stage (Reviewer A, Reviewer B, Reconciler) runs as an **orchestrator** that dispatches small chunks of papers to **worker subagents**. Each worker gets a fresh context window, processes its chunk, writes Markdown to disk, and returns a compact summary. The orchestrator only plans and tracks — it never reads PDF contents, so its context stays small across the whole corpus.

| Stage | Orchestrator prompt | Worker subagent | Chunk × parallel |
|-------|---------------------|-----------------|------------------|
| 1. Reviewer A | `prompts/01_REVIEWER_A_ORCHESTRATOR.md` | `reviewer-a-worker` | 8 papers × 4 workers = 32/wave |
| 2. Reviewer B | `prompts/02_REVIEWER_B_ORCHESTRATOR.md` | `reviewer-b-worker` | 8 papers × 4 workers = 32/wave |
| 3. Reconciler | `prompts/03_RECONCILER_ORCHESTRATOR.md` | `reconciler-worker` | 5 papers × 3 workers = 15/wave |

Worker definitions live in `.claude/agents/`. Claude Code auto-loads them from `{project_root}/.claude/agents/`.

**Reviewer A, Reviewer B, and the Reconciler each run in a separate Claude Code session.** Separate sessions are what keep A and B independent — a shared session can leak context between them even if each is told not to look at the other's drafts.

---

## Paths

| What | Where |
|------|-------|
| Project root | `{project_root}` |
| Input PDFs | `{input_dir}` |
| Codebook | `{codebook_path}` (a single Markdown file — see `template/SKILL_codebook.md`) |
| Output root | `{output_dir}` |
| Reviewer A drafts | `{output_dir}/_reviewerA/` |
| Reviewer B drafts | `{output_dir}/_reviewerB/` |
| Final consolidated | `{output_dir}/` (top level) |

Fill in the four `{...}` placeholders with real paths before running anything. Create any output folders that don't exist before writing to them.

---

## Which prompt am I running?

| User says | Role | Prompt to read and follow |
|-----------|------|---------------------------|
| "run reviewer A", "start stage 1" | Reviewer A orchestrator | `prompts/01_REVIEWER_A_ORCHESTRATOR.md` |
| "run reviewer B", "start stage 2" | Reviewer B orchestrator | `prompts/02_REVIEWER_B_ORCHESTRATOR.md` |
| "run reconciler", "start stage 3" | Reconciler orchestrator | `prompts/03_RECONCILER_ORCHESTRATOR.md` |

If the user says "start extraction" without naming a stage, ask which. If they ask "what stage are we on?", count files in each output folder and report.

---

## Orchestrator behavior (critical)

If you are acting as an orchestrator:

- **Do not extract papers in your own context.** Dispatch to the worker subagent via the Task tool.
- **Do not read PDFs yourself.**
- **Do not read worker output files.** Read only the workers' returned summaries.
- **Keep your running log compact** — one line per wave, not one paragraph per paper.
- **Default to parallel waves.** Reviewers: 4 workers × 8 papers = 32/wave. Reconciler: 3 workers × 5 papers = 15/wave. Wait for a wave to finish before launching the next.
- If the user asks for sequential dispatch, do that instead. If they ask for more parallelism, go to 5–6 workers/wave for reviewers, 4 for the reconciler.

This is what keeps the orchestrator's context small enough to get through the whole corpus in one session.

---

## Worker behavior (critical)

If you are acting as a worker:

- Process your entire assigned batch before returning. Don't stop partway.
- Save each file immediately after extraction, before moving to the next paper.
- Skip files that already exist and are non-empty — don't redo work.
- Return only a compact summary (a table of rows + counts). Never return file contents.
- Never read outputs from other workers or the opposite reviewer.

---

## Core extraction rules (apply to all workers)

1. **Extract only what the paper explicitly states.** Never calculate an effect size. Never infer. Never guess.
2. **Every codebook row needs evidence:** a short verbatim quote (≤15 words) + page number. If nothing supports a value, write `[NOT FOUND — flag for reconciler]`.
3. **Leave blank, not "N/A."** Unused fields stay empty.
4. **Decimal separator = period** (`0.05`, not `0,05`) — state your own convention here if different.
5. **P-values:** extract the numeric p-value for every outcome that reports one, including non-significant results. No asterisk on a coefficient does not mean no p-value — check the table and prose first. Keep `<` signs (`<0.001` ≠ `0.001`).
6. **Multiple follow-ups** → first and last only, unless your codebook says otherwise.
7. **Multi-arm with a control** → extract each treatment arm vs. control, not treatment vs. treatment, unless your codebook says otherwise.
8. **Level of measurement** = where the data was collected, not where randomization happened.
9. **Confirm effect-size type** (Cohen's d vs. Hedge's g vs. η²) in Methods or table footnotes before entering it.

Rules 6–7 are ESD-review defaults kept here as a starting point — override them in your own codebook if your protocol differs.

---

## Independence rules (Reviewers A and B)

- Reviewer A workers must not read `_reviewerB/` or any top-level `{output_dir}/*.md` file.
- Reviewer B workers must not read `_reviewerA/` or any top-level `{output_dir}/*.md` file.
- Running A and B in separate Claude Code sessions enforces this structurally. The worker definitions also state it as a hard rule, as a second line of defense.

---

## Where detailed rules live

| File | Covers |
|------|--------|
| `{codebook_path}` | Every field in your codebook, coding schemes, evidence requirements — this is the file you write (see the guide's §7) |
| `template/SKILL_reconciliation.md` | How the Reconciler compares A and B and resolves disagreements |
| `template/TEMPLATE_output.md` | The exact output structure |
| `.claude/agents/reviewer-a-worker.md` | Reviewer A worker subagent definition |
| `.claude/agents/reviewer-b-worker.md` | Reviewer B worker subagent definition |
| `.claude/agents/reconciler-worker.md` | Reconciler worker subagent definition |

---

## Don'ts

- Don't compute effect sizes.
- Don't fill `N/A` or `0` in unused fields.
- Don't drop non-significant p-values — extract them.
- Don't write "Not reported" unless the paper literally says so.
- Don't skip the evidence column.
- Don't reconcile a paper that only has one reviewer's draft — log it and wait for the missing side.
- Don't overwrite files that already exist and are non-empty — skip them.
- (Orchestrator) Don't do extraction work yourself. Dispatch.
- (Worker) Don't return file contents to the orchestrator. Return a compact summary.

---

## File encoding

Write all `.md` outputs as UTF-8. Preserve non-ASCII characters in author names and non-English abstracts.

---

## See also

`examples/esd/CLAUDE.md` is the real, complete version of this file as it ran in production — including an optional Stage 4 ("patch") for adding new fields to already-reconciled papers, which this generic version omits for simplicity.
