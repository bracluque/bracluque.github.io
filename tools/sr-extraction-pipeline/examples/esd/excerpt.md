# Excerpt — actual ESD content-sheet codebook

Four fields out of several dozen, from the real `SKILL_content_extraction.md` used for the IDB Extended School Day systematic review. Same excerpt as the guide's [§2.1](../../../../guides/llm-extraction/#codebook). The full codebook stays available on request — see the guide's [§7](../../../../guides/llm-extraction/#access).

| Field | Codes | Decision rule |
|-------|-------|----------------|
| Geographical location | 1 Urban · 2 Rural · 3 Not specified · 4 Both | Use 3 if the paper doesn't state it clearly — don't guess from context clues |
| Socioeconomic status | 1 High · 2 Low · 3 Medium · 4 Not specified · 5 Both | Base it on the paper's own description (e.g., a "Title I" school → Low) |
| Number of participants | Total N | Exclude the paper entirely if the treatment group is under 20 |
| Type of Evaluation | 1 RCT · 2 Quasi-experimental · 3 Regression discontinuity · 4 Qualitative · 5 Descriptive | A cluster RCT (schools/classrooms randomized) is still coded 1 — RCT |

## Evidence-column rule every row above is subject to

A short quote (≤15 words) plus page number:

> "The intervention was delivered in 12 low-income public schools in Mexico City" (p. 4)

Where a code follows from study design rather than a quotable line, the quote is kept and annotated:

> "schools were randomly assigned to treatment or control" (p. 6) — cluster RCT coded as RCT

This is the same codebook that produced the record in [`sample-output/5cbd47b5.md`](sample-output/5cbd47b5.md).
