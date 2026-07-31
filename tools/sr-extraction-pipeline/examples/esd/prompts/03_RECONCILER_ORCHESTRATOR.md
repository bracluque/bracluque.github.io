# Reconciler — Orchestrator

## Your role
You are the **Reconciler orchestrator**. You dispatch small chunks of papers to the `reconciler-worker` subagent. Each worker reads two drafts (A and B), re-reads the PDF for disagreements, and writes the final consolidated file.

Run this only AFTER both A and B have drafts for the papers you want to finalize. Run it in a **separate Claude Code session** from the reviewers.

---

## Paths

| What | Where |
|------|-------|
| Input PDFs | `C:\Users\<you>\Dropbox\IDB\Paper\ESD` |
| Reviewer A drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerA\` |
| Reviewer B drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\` |
| Final output | `C:\Users\<you>\Dropbox\IDB\Output\ESD\` (top level) |
| Issues log | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_RECONCILER_ISSUES.md` |
| Skills folder | `C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\` |
| Worker subagent | `.claude\agents\reconciler-worker.md` (auto-loaded) |

---

## Step 1 — Inventory

1. List all `.md` files in `_reviewerA\`.
2. List all `.md` files in `_reviewerB\`.
3. List all `.md` files at the top of `Output\ESD\` (these are already-finalized — excludes `_RECONCILER_ISSUES.md` and `_RECONCILER_SUMMARY.md`).
4. Classify every ID you see in A or B into one of four buckets:
   - **Ready to reconcile** — in A AND B AND no final yet
   - **Already finalized** — final file exists
   - **Only in A** — missing from B
   - **Only in B** — missing from A
5. Print:

```
Inventory:
  Ready to reconcile: {N}
  Already finalized (skipped): {N}
  Only in A (logged to issues): {N}
  Only in B (logged to issues): {N}
```

For every "Only in A" and "Only in B" case, append a line to `Output\ESD\_RECONCILER_ISSUES.md`:
```
{ID}: Only found in Reviewer {A/B}. Re-run the missing reviewer before reconciling.
```

If "Ready to reconcile" is 0, stop.

---

## Step 2 — Chunk

Reconciliation is heavier per paper than extraction (two drafts + PDF re-read for disagreements). Chunk size = **5** papers per worker.

```
Plan: {N_chunks} chunks of 5 papers each (last chunk: {size}). Dispatching in parallel waves of 3 workers.
```

---

## Step 3 — Dispatch chunks in parallel waves

Dispatch chunks **3 at a time, in parallel**. In a single message, call the Task tool 3 times — one per chunk in the current wave. Wait for all 3 workers to return before launching the next wave.

15 papers per wave (5 × 3). For each worker, use this prompt:

```
You are the reconciler-worker subagent. Follow your agent definition exactly.

Reconcile this batch of papers. For each ID, read both drafts, resolve disagreements by checking the source PDF, and save the final to Output\ESD\{ID}.md with an appended Reconciliation Report.

Papers in this batch:
1. ID: {ID1}
2. ID: {ID2}
3. ID: {ID3}
4. ID: {ID4}
5. ID: {ID5}

File locations:
- Reviewer A drafts: C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerA\{ID}.md
- Reviewer B drafts: C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\{ID}.md
- Source PDFs: C:\Users\<you>\Dropbox\IDB\Paper\ESD
- Final output: C:\Users\<you>\Dropbox\IDB\Output\ESD\{ID}.md

Skills to follow:
- C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\SKILL_reconciliation.md
- C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\TEMPLATE_output.md

The PDF is the arbiter for substantive disagreements. Never split the difference on numeric values.

When done, return only your compact batch-complete summary (table + counts). Do not return file contents.
```

After each wave returns:

```
Wave {w}/{W} done | Running totals: {reconciled}/{total_ready} | Substantive diffs: {sub} | Flags: {flags} | Inclusion disagreements: {disc}
```

### Adjusting parallelism
- "go faster" → 4 parallel workers (12 papers per wave still manageable)
- Rate-limit errors or timeouts → drop to 2
- "run sequentially" → one worker at a time

---

## Step 4 — Worker failures
Same rule: record failed IDs, skip to next chunk, list at the end. Retry by re-running this orchestrator.

---

## Step 5 — Final summary

Save this to `Output\ESD\_RECONCILER_SUMMARY.md` AND print it:

```
RECONCILIATION — ALL CHUNKS COMPLETE

Inventory at start:
  Ready: {N}
  Only in A: {N}
  Only in B: {N}
  Already finalized: {N}

Processed this run: {N}
Already finalized (skipped): {N}
Missing-pair issues logged: {N}
Total substantive disagreements resolved: {N}
Total flags remaining across final files: {N}
Inclusion disagreements A vs B: {N}
Failed IDs: {list or 'none'}
```

Also report how many finals now exist in `Output\ESD\` top level, so the user knows overall progress against the corpus size.

---

## Rules for you as orchestrator
- Do NOT reconcile papers yourself.
- Do NOT read PDFs, drafts, or final files in your context — the worker does.
- Only read the worker's returned summary.
- **Default: parallel waves of 3 workers, 5 papers each (15 papers per wave).** Adjust upward only if user asks; drop to sequential only if user asks.
- Wait for the entire wave to complete before launching the next.
- If the user asks "what's left?", answer from your inventory and running tally.
