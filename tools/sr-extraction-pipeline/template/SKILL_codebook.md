# SKILL: Content Sheet Extraction — [YOUR REVIEW NAME]

Fill in every `[ ]` before running this against a single test paper. This is the piece that's actually specific to your review — everything else in this repo is reusable as-is.

## Purpose
Extract descriptive and methodological information from an academic paper to populate the **Content Sheet** of [your systematic review].

---

## Non-negotiable rules — keep these regardless of your field list

1. **Every row gets evidence.** For each coded value, record a short verbatim quote (≤15 words, in quotes) plus the page number. If no quote supports the value, mark `[NOT FOUND — flag]` in the Evidence column.
2. **Extract only what the paper states.** Never guess, never infer from context when a clean quote would support the value. Never calculate a derived statistic (effect size, standardized score) — that's a separate downstream step.
3. **Leave blank, not "N/A".** For fields that aren't applicable, leave blank. Do not fill with "Not reported" unless the paper explicitly says so.
4. **Decimal separator = period** (`0.05`, not `0,05`) — or whatever convention your team needs; state it explicitly so the model doesn't default inconsistently.

---

## Section A: Inclusion Decision

| Code | Meaning |
|------|---------|
| 1 | Include |
| 2 | Exclude |

### Exclusion reasons (if code = 2)

Define your own list here — e.g., sample too small, wrong population, no comparison group, review/meta-analysis rather than primary study. The ESD example used 8 reasons; yours may need fewer or more.

**If excluded:** document the exclusion reason with a short supporting quote + page number, then stop. Do not fill remaining fields. Still produce the output file.

---

## Section B: Basic Identification *(universal — keep as-is)*

| Field | Instructions |
|-------|--------------|
| Citation | Full APA reference |
| Abstract | Paste the complete abstract verbatim. Do not summarize. |
| Year | Publication year. State your own cutoff if you have one. |

---

## Section C onward — your fields go here

This is where your review's actual taxonomy lives: outcome categories, intervention typology, sample characteristics, rigor-of-evidence classification, whatever your protocol defines. For each field, specify:

- **The field name**
- **The coding scheme** (a fixed code list, or free text with a decision rule)
- **The decision rule for ambiguous cases** — this is the part that actually prevents drift. A rule like "use 'Not specified' if the paper doesn't state it clearly" turns an ambiguous field into a codeable one.

See the guide's [§2.1 codebook excerpt](../../../guides/llm-extraction/#codebook) for four real examples of what a filled-in field looks like (geographical location, socioeconomic status, sample-size threshold, evaluation type), and `examples/esd/excerpt.md` in this repo for the same excerpt as a standalone file.

---

## Evidence column — how to fill it *(universal — keep as-is)*

For every coded row, include a short quote (≤15 words, in quotation marks) and the page number. Example:

> "The intervention was delivered in 12 low-income public schools in Mexico City" *(p. 4)*

If a code is a direct inference from study design rather than a quotable line (e.g., "cluster RCT → RCT"), quote the design sentence and annotate as inferred:

> "schools were randomly assigned to treatment or control" *(p. 6)* — cluster RCT coded as RCT

If no quote supports a value, write `[NOT FOUND — flag for reconciler]`. Do not invent.

---

## Quality checklist *(adapt the field-specific lines, keep the rest)*

- [ ] Inclusion/exclusion decision made, with evidence if excluded
- [ ] Every row has a quote + page number (or `[NOT FOUND — flag]`)
- [ ] Only outcomes actually measured and reported are listed (not just mentioned)
- [ ] [Your field-specific checks here]
- [ ] Decimal separator matches your stated convention
