# SR-ESD Extraction Agent — Extended School Day

A three-stage systematic review extraction pipeline for the **Extended School Day (ESD)** literature review. Built around Claude Code's **orchestrator + subagent** pattern so a single session can process 200+ papers without context-window limits.

---

## Architecture

The orchestrator session dispatches small chunks of papers to worker subagents. Each worker has its own fresh context, processes its chunk, writes markdowns to disk, and returns a compact summary. The orchestrator's context stays small across the whole corpus because it never reads PDF contents.

| Stage | Orchestrator prompt | Worker subagent | Chunk × parallel |
|-------|---------------------|-----------------|------------------|
| **1. Reviewer A** | `prompts/01_REVIEWER_A_ORCHESTRATOR.md` | `reviewer-a-worker` | 8 papers × 4 workers = 32/wave |
| **2. Reviewer B** | `prompts/02_REVIEWER_B_ORCHESTRATOR.md` | `reviewer-b-worker` | 8 papers × 4 workers = 32/wave |
| **3. Reconciler** | `prompts/03_RECONCILER_ORCHESTRATOR.md` | `reconciler-worker` | 5 papers × 3 workers = 15/wave |

Each stage runs in its own Claude Code session. Separate top-level sessions are what keep A and B independent.

---

## Paths

| What | Where |
|------|-------|
| Project root | `C:\Users\<you>\Dropbox\IDB` |
| Input PDFs | `C:\Users\<you>\Dropbox\IDB\Paper\ESD` |
| Agent files | `C:\Users\<you>\Dropbox\IDB\sr-esd-extraction-agent` |
| Output root | `C:\Users\<you>\Dropbox\IDB\Output\ESD` |
| Reviewer A drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerA\{ID}.md` |
| Reviewer B drafts | `C:\Users\<you>\Dropbox\IDB\Output\ESD\_reviewerB\{ID}.md` |
| Final consolidated | `C:\Users\<you>\Dropbox\IDB\Output\ESD\{ID}.md` |

---

## How to run (quick)

Full step-by-step guide: `HOW_TO_RUN.txt`.

### Stage 1
```
Read sr-esd-extraction-agent/prompts/01_REVIEWER_A_ORCHESTRATOR.md and follow it.
```

### Stage 2 — **new session**
```
Read sr-esd-extraction-agent/prompts/02_REVIEWER_B_ORCHESTRATOR.md and follow it.
```

### Stage 3 — **new session**
```
Read sr-esd-extraction-agent/prompts/03_RECONCILER_ORCHESTRATOR.md and follow it.
```

---

## File structure

```
sr-esd-extraction-agent/
├── CLAUDE.md                           ← reference copy (real one at project root)
├── README.md                           ← this file
├── HOW_TO_RUN.txt                      ← run guide
├── .claude/agents/                     ← auto-loaded by Claude Code
│   ├── reviewer-a-worker.md
│   ├── reviewer-b-worker.md
│   └── reconciler-worker.md
├── prompts/                            ← what the user pastes
│   ├── 01_REVIEWER_A_ORCHESTRATOR.md
│   ├── 02_REVIEWER_B_ORCHESTRATOR.md
│   └── 03_RECONCILER_ORCHESTRATOR.md
└── skills/                             ← extraction rules
    ├── SKILL_content_extraction.md
    ├── SKILL_results_extraction.md
    ├── SKILL_reconciliation.md
    └── TEMPLATE_output.md
```

---

## What's different from the previous Tutoring agent

- Dropped tutoring-specific fields (G1–G8), caregiver fields (H1–H2), Structured Pedagogy and AI-and-Technologies fields — none are in the new ESD metadata.
- Added Type of Approach (F0) and new outcome categories from the ESD metadata (Career aspirations, Democratic values, etc.).
- Double extraction + reconciliation design (two reviewers + reconciler).
- Evidence trail required on every Content-Sheet row: short verbatim quote + page number.
- Data Collection Instruments and Notes appear twice: structured AND linear prose.
- Explicit p-value rule: numeric p for every outcome that reports one, including non-significant.
- Decimal separator = period.
- Orchestrator + subagent architecture so one session can handle 200+ papers.

---

## Core extraction rules

1. **Extract only — never calculate.**
2. **Leave blank, not "N/A".**
3. **Every Content Sheet row gets a short verbatim quote + page** (or `[NOT FOUND — flag]`).
4. **P-value:** numeric p for every outcome reporting one, including non-significant. `<0.001` ≠ `0.001`.
5. **Data Collection Instruments** and **Notes** as both structured AND linear prose.
6. **Effect size type confirmed** in Methods/footnotes before entry.
7. **Cluster RCT → RCT.** Level of measurement = where data was collected.

---

*Built for the IDB ESD Systematic Review, 2026.*
