# Reviewer B — Orchestrator

## Your role
You are the **Reviewer B orchestrator**. You dispatch small chunks of papers to the `reviewer-b-worker` subagent. You do not extract yourself. Each worker has its own fresh context.

**Run this in a SEPARATE Claude Code session from Reviewer A.** That's what keeps A and B independent.

---

## Paths

| What | Where |
|------|-------|
| Input PDFs | `C:\Users\<you>\Dropbox\IDB\Paper\ESD` |
| Reviewer B output folder | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\` |
| Skills folder | `C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\` |
| Worker subagent | `.claude\agents\reviewer-b-worker.md` (auto-loaded) |

Create `_reviewerB\` if it doesn't exist.

---

## Step 1 — Inventory

1. List all PDFs in `C:\Users\<you>\Dropbox\IDB\Paper\ESD`.
2. Extract IDs from filenames.
3. List all `.md` files in `Output\ESD\_reviewerB\`.
4. Compute remaining: PDFs whose `{ID}.md` does NOT yet exist (or exists but is empty).
5. Print:

```
Inventory: {total_pdfs} PDFs total | {done} already processed | {remaining} to process
```

If remaining is 0, stop.

---

## Step 2 — Chunk

Split into chunks of **8** papers each.

```
Plan: {N_chunks} chunks of 8 papers each (last chunk: {size}). Dispatching in parallel waves of 4 workers.
```

---

## Step 3 — Dispatch chunks in parallel waves

Dispatch chunks **4 at a time, in parallel**. To do this, in a single message, call the Task tool 4 times — one per chunk in the current wave. Wait for all 4 workers to return before launching the next wave.

This is roughly 4× faster than sequential. With 8 papers per worker × 4 workers = 32 papers per wave.

For each worker, use this prompt:

```
You are the reviewer-b-worker subagent. Follow your agent definition exactly.

Process this batch of papers for Reviewer B extraction. For each one, read the PDF, extract per the skill files, and save to Output\ESD\_reviewerB\{ID}.md.

Papers in this batch:
1. ID: {ID1} | Filename: {filename1}
2. ID: {ID2} | Filename: {filename2}
3. ID: {ID3} | Filename: {filename3}
4. ID: {ID4} | Filename: {filename4}
5. ID: {ID5} | Filename: {filename5}
6. ID: {ID6} | Filename: {filename6}
7. ID: {ID7} | Filename: {filename7}
8. ID: {ID8} | Filename: {filename8}

Skills to follow:
- C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\SKILL_content_extraction.md
- C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\SKILL_results_extraction.md
- C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent\skills\TEMPLATE_output.md

Input PDFs live in: C:\Users\<you>\Dropbox\IDB\Paper\ESD
Output directory: C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\

Do not read anything in _reviewerA or Output\ESD\*.md. You are an independent reviewer. Do not try to guess what Reviewer A might have coded — extract fresh from the PDF.

When done, return only your compact batch-complete summary (table + counts). Do not return file contents.
```

After each wave returns:

```
Wave {w}/{W} done | Running totals: {processed}/{total_remaining} | Included: {inc} | Excluded: {exc} | Flags: {flags}
```

### Adjusting parallelism
- "go faster" / "more parallel" → 5 or 6 parallel workers
- Rate-limit errors or timeouts → drop to 3
- "run sequentially" → one at a time, wait for each return

---

## Step 4 — Handle worker failures
Same rule as A: record failed IDs, skip to next chunk, list failures at the end. Skip logic handles retries across sessions.

---

## Step 5 — Final summary

```
REVIEWER B — ALL CHUNKS COMPLETE

Total PDFs in corpus: {total}
Processed this run: {processed}
Already existed (skipped): {skipped}
Included: {inc}
Excluded: {exc}
Total [NOT FOUND] flags: {flags}
Failed chunks / IDs: {list or 'none'}

Next step: run Reconciler in a separate session using prompts/03_RECONCILER_ORCHESTRATOR.md
```

---

## Rules for you as orchestrator
- Do NOT extract papers yourself.
- Do NOT read PDF contents.
- Do NOT read any worker's output file.
- Do NOT read Reviewer A's outputs, ever. Independence matters.
- **Default: parallel waves of 4 workers, 8 papers each.** Adjust upward only if user asks; drop to sequential only if user asks.
- Wait for the entire wave to complete before launching the next.
- Keep the running log compact.
