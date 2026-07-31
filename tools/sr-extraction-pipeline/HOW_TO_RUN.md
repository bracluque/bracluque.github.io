# How to run — sr-extraction-pipeline

Three Claude Code sessions, one per stage, in order. Each session is an orchestrator that dispatches paper chunks to worker subagents, so one session can get through hundreds of papers.

**Requires Claude Code specifically** — see the guide's [§7](../../guides/llm-extraction/#setup) for why.

---

## Step 0 — one-time setup

1. Create your project folder (call it whatever you want — this doc uses `{project_root}`) with:
   ```
   {project_root}/
   ├── CLAUDE.md              ← copied from this repo, {placeholders} filled in
   ├── .claude/agents/        ← copied from this repo
   ├── prompts/               ← copied from this repo
   ├── papers/                ← your PDFs go here
   ├── codebook/
   │   └── SKILL_codebook.md  ← your filled-in codebook
   └── output/                ← created automatically, or make it now
       ├── _reviewerA/
       └── _reviewerB/
   ```
2. Put your PDFs in `papers/`.
3. Write your codebook at `codebook/SKILL_codebook.md`, starting from `template/SKILL_codebook.md` in this repo (see the guide's §7 for how to brief Claude to draft it).
4. Fill in the four path placeholders in `CLAUDE.md`: `{project_root}`, `{input_dir}`, `{codebook_path}`, `{output_dir}`.
5. Open Claude Code and point it at `{project_root}`. The project root must contain `CLAUDE.md` and `.claude/agents/` so Claude Code auto-loads the subagent definitions.

---

## Step 1 — Reviewer A

Start a **fresh** Claude Code session. Paste:

> Read prompts/01_REVIEWER_A_ORCHESTRATOR.md and follow it.

What happens: the orchestrator lists all PDFs in `papers/`, identifies which still need processing, and dispatches chunks to the `reviewer-a-worker` subagent. Each worker has its own fresh context, writes Markdown files to `_reviewerA/`, and returns a compact summary. Because the orchestrator never reads PDF contents, its context stays small enough to handle the whole corpus in one session.

If the orchestrator stops for any reason, start a fresh session and paste the same command — skip logic resumes where it left off.

---

## Step 2 — Reviewer B

Start a **fresh** session — critical: do not continue from A's session. Separate sessions are what keep A and B independent. Paste:

> Read prompts/02_REVIEWER_B_ORCHESTRATOR.md and follow it.

Same pattern as Step 1, writing to `_reviewerB/`; the workers refuse to look at `_reviewerA/`. You can start Step 2 before Step 1 finishes — the Reconciler only needs both drafts for a given paper before it can run — but finishing A first keeps the bookkeeping simpler.

---

## Step 3 — Reconciler

Start a **fresh** session. Paste:

> Read prompts/03_RECONCILER_ORCHESTRATOR.md and follow it.

What happens: the orchestrator lists A drafts, B drafts, and existing finals. Papers with both drafts and no final are ready to reconcile. Papers with only one draft get logged (not reconciled) — go back and run the missing side. Each worker reads both drafts, re-reads the PDF for any substantive disagreement, and writes `output/{ID}.md` with a Reconciliation Report appended.

`output/{ID}.md` at the top level is the file you use for analysis. The A and B drafts stay in their subfolders as an audit trail.

---

## Before you scale to the full corpus

Pilot the codebook against one paper first, then run the reliability pilot from the guide's §2.6 on a small sample — see §7 for the full sequence. Don't go straight from "codebook drafted" to "run the whole corpus."

---

## Checking progress

Ask Claude directly, in any session: "What stage are we on? Count the files in each output folder." Or count manually:

```
ls papers/*.pdf | wc -l              # PDFs to process
ls output/_reviewerA/*.md | wc -l    # A drafts done
ls output/_reviewerB/*.md | wc -l    # B drafts done
ls output/*.md | wc -l               # finals done
```

---

## Speed — defaults and how to tune

Default parallel waves: Reviewer A and B each dispatch 4 workers × 8 papers = 32/wave; the Reconciler dispatches 3 workers × 5 papers = 15/wave. That's roughly 6–10x faster than one worker at a time.

To go faster (if your account tier allows), add to your orchestrator command: "Use 6 parallel workers per wave." To go slower (if you hit rate limits): "Drop to 2 parallel workers per wave." To run fully sequential for debugging: "Run sequentially, one worker at a time."

More parallel means faster wall-clock time but higher rate-limit risk and an interleaved (not strictly linear) progress log. More sequential means the opposite trade.

---

## Common issues

**Orchestrator starts extracting papers itself instead of dispatching.** It didn't read `CLAUDE.md` carefully. Interrupt: "Stop extracting directly. You are the orchestrator, not a worker. Re-read the orchestrator prompt and dispatch via the Task tool."

**A worker processes only part of its batch and stops.** Rare — re-run the orchestrator; skip logic picks up the rest. If it recurs, reduce chunk size to 3 in the orchestrator prompt.

**Reconciler is missing pairs.** Check the issues log for the flagged IDs, re-run the missing-side reviewer, then re-run the reconciler.

**Claude Code can't find the subagents.** Confirm `.claude/agents/` sits at the project root. Restart Claude Code if you just added the folder.

**Reviewer B is cross-referencing Reviewer A's files.** Start a genuinely new top-level session — don't continue from A's. A shared session can leak context even when both are told not to look at each other.

**Final file has `[NOT FOUND — flag]` rows.** Neither coder found a supporting quote. Open the PDF and fill it manually, or ask Claude in a targeted session to find a quote for that specific field.

**Reconciler copies one side's value on disagreement instead of checking the PDF.** Interrupt: "The PDF is the arbiter. Re-read it for every substantive disagreement."

---

## See also

`examples/esd/HOW_TO_RUN.txt` is the real, complete version of this file as it ran in production, for a corpus of ~245 papers.
