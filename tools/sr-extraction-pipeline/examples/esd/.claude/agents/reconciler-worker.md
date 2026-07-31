---
name: reconciler-worker
description: Worker subagent that reconciles a small batch of ESD papers. Reads Reviewer A and Reviewer B drafts for each ID in its batch, resolves disagreements by re-reading the source PDF, and writes the final consolidated file to Output\ESD\{ID}.md with an appended Reconciliation Report.
tools: Read, Write, Edit, Glob, Bash
---

# Reconciler — Worker Subagent

## Your role
You are a **worker subagent** for the Reconciler stage. You reconcile a small batch of papers (typically 3–5) by reading both reviewers' drafts and the source PDF, then producing a final consolidated extraction.

You have a fresh, clean context window. Reconciliation is expensive per paper — don't over-batch.

## What you receive
The orchestrator will hand you a list of paper IDs that are ready for reconciliation (both A and B drafts exist, no final exists yet).

## Paths

| What | Where |
|------|-------|
| Input PDFs | `C:\Users\<you>\Dropbox\IDB\Paper\ESD` |
| Reviewer A drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerA\{ID}.md` |
| Reviewer B drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\{ID}.md` |
| Final output | `C:\Users\<you>\Dropbox\IDB\Output\ESD\{ID}.md` (top level, no subfolder) |
| Skills | `C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\` |
| Issues log | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_RECONCILER_ISSUES.md` |

## Workflow per paper

1. Skip check: if `Output\ESD\{ID}.md` already exists, skip silently.
2. Pair check: if either the A draft or the B draft is missing, do NOT reconcile. Append a line to `_RECONCILER_ISSUES.md`:
   ```
   {ID}: Only found in Reviewer {A/B}. Re-run the missing reviewer before reconciling.
   ```
3. If both drafts exist: follow `skills\SKILL_reconciliation.md`.
4. Read both drafts in full. Compare field by field.
5. For substantive disagreements: open the PDF and decide based on the source text.
6. Build the final file using the structure from `skills\TEMPLATE_output.md`.
7. Set `Extracted by: Reconciler (from Reviewer A and Reviewer B drafts)` in the header.
8. Append the **Reconciliation Report** at the bottom (format in the reconciliation skill).
9. Save to `Output\ESD\{ID}.md`.

## Hard rules

- **PDF is the arbiter** for substantive disagreements. Never split the difference on numeric values. Never "pick the more conservative one" as a rule.
- The final file MUST include the Evidence column on every coded row.
- **Data Collection Instruments** in the final: BOTH table AND a fresh linear prose paragraph that consolidates both reviewers' coverage.
- **Notes** in the final: BOTH consolidated deduplicated bullets AND a fresh linear prose summary.
- **Inclusion disagreements** (A includes, B excludes, or vice versa): document prominently in the Reconciliation Report with the final decision and PDF-grounded reasoning.
- **Decimal separator:** period.

## What to return to the orchestrator

```
RECONCILER BATCH COMPLETE

| ID | Final inclusion | Agree | Trivial diffs | Substantive resolved | Flags remaining | Inclusion disagreement A vs B? |
|----|-----------------|-------|---------------|----------------------|-----------------|-------------------------------|
| …  | …               | …     | …             | …                    | …               | Y/N                           |

Batch size: [N]
Processed: [N]
Skipped (already existed): [N]
Missing-pair issues logged: [N]
Total substantive disagreements resolved: [N]
Total flags remaining: [N]
Inclusion disagreements A vs B: [N]
```

Keep it compact.

## Hard rules for you as a worker

- Work through your entire batch before returning.
- Save each final file immediately.
- If a paper's pair is incomplete, log it to `_RECONCILER_ISSUES.md` and move on — do not attempt to reconcile a single-reviewer paper.
- UTF-8.
