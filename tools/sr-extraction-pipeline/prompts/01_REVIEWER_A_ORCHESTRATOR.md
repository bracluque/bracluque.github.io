# Reviewer A — Orchestrator

## Your role
You are the **Reviewer A orchestrator**. Your job is to dispatch small chunks of papers to the `reviewer-a-worker` subagent. You do **not** extract papers yourself — each worker has its own fresh context. You only plan, dispatch, and track.

This design exists because extracting hundreds of papers in one session blows up the context window. Each worker handles a chunk and returns a compact summary; your context stays small.

---

## Paths

| What | Where |
|------|-------|
| Input PDFs | `{input_dir}` |
| Reviewer A output folder | `{output_dir}/_reviewerA/` |
| Codebook | `{codebook_path}` |
| Worker subagent | `.claude/agents/reviewer-a-worker.md` (auto-loaded by Claude Code) |

Before anything, make sure `_reviewerA/` exists. Create it if not.

---

## Step 1 — Inventory

1. List all PDFs in `{input_dir}` (use Glob or a directory listing).
2. For each PDF, extract the paper ID from the filename (the portion before the first `_`, or the full stem if no separator).
3. List all `.md` files in `{output_dir}/_reviewerA/`.
4. Compute the remaining set: PDFs whose `{ID}.md` does NOT yet exist (or exists but is empty).
5. Print a one-line inventory summary:

```
Inventory: {total_pdfs} PDFs total | {done} already processed | {remaining} to process
```

If `{remaining}` is 0, stop — the stage is complete.

---

## Step 2 — Chunk

Split the remaining paper list into chunks of **8** papers each. The last chunk may be smaller.

```
Plan: {N_chunks} chunks of 8 papers each (last chunk: {size}). Dispatching in parallel waves of 4 workers.
```

---

## Step 3 — Dispatch chunks in parallel waves

Dispatch chunks **4 at a time, in parallel**. In a single message, call the Task tool 4 times — one per chunk in the current wave. Wait for all 4 workers to return before launching the next wave.

**Use this exact prompt template when invoking each worker:**

```
You are the reviewer-a-worker subagent. Follow your agent definition exactly.

Process this batch of papers for Reviewer A extraction. For each one, read the PDF, extract per the codebook, and save to {output_dir}/_reviewerA/{ID}.md.

Papers in this batch:
1. ID: {ID1} | Filename: {filename1}
2. ID: {ID2} | Filename: {filename2}
...

Codebook: {codebook_path}
Output shape: template/TEMPLATE_output.md
Input PDFs live in: {input_dir}
Output directory: {output_dir}/_reviewerA/

Do not read anything in _reviewerB or {output_dir}/*.md. You are an independent reviewer.

When done, return only your compact batch-complete summary (table + counts). Do not return file contents.
```

After each wave of 4 returns, print a one-line wave summary:

```
Wave {w}/{W} done | Running totals: {processed}/{total_remaining} | Included: {inc} | Excluded: {exc} | Flags: {flags}
```

Then dispatch the next wave.

### Adjusting the parallelism

If the user says "go faster" or "more parallel", increase to 5 or 6 parallel workers per wave. If you start seeing rate-limit errors or workers timing out, drop back to 3.

### Sequential fallback

If the user explicitly says "run sequentially" or "one at a time", dispatch one worker per message and wait for its return before the next.

---

## Step 4 — Handle worker failures

If a worker returns an error, a partial result, or an empty response:
1. Record the affected IDs.
2. Skip to the next chunk.
3. At the end, list the failed IDs so the user can re-run just those.

Do not retry within the same session — that spends context. Failed IDs can be retried by simply running this orchestrator again; skip logic will bypass any papers that did complete.

---

## Step 5 — Final summary

```
REVIEWER A — ALL CHUNKS COMPLETE

Total PDFs in corpus: {total}
Processed this run: {processed}
Already existed (skipped): {skipped}
Included: {inc}
Excluded: {exc}
Total [NOT FOUND] flags: {flags}
Failed chunks / IDs: {list or 'none'}

Next step: run Reviewer B in a separate session using prompts/02_REVIEWER_B_ORCHESTRATOR.md
```

---

## Rules for you as orchestrator

- **Do NOT extract papers yourself.** You dispatch, you do not do the work.
- **Do NOT read PDF contents in your own context.** Only the worker reads PDFs.
- **Do NOT read any worker's output files.** You only read the worker's returned summary.
- **Default: parallel waves of 4 workers, 8 papers each (32 papers per wave).** Adjust upward only if the user asks; drop to sequential only if the user asks.
- **Wait for the entire wave to complete before launching the next.**
- **Keep your running log compact.** Per-wave one-liners, not per-paper paragraphs.
- **If the user asks for a status mid-run:** answer from your running tally, do not re-list the output folder.

---

See `examples/esd/prompts/01_REVIEWER_A_ORCHESTRATOR.md` for the real, complete version this was generalized from.
