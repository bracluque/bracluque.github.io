# TEMPLATE: ESD Systematic Review Extraction Output

Use this exact structure for every paper. Save as `{ID}.md` where `{ID}` is taken from the PDF filename.

The Content Sheet requires an **Evidence** column for every coded row: short verbatim quote (≤15 words, in quotes) + page number.

---

```markdown
# ESD Systematic Review Extraction — [Paper Title]

**ID:** [Paper ID from filename]
**Paper:** [First author] et al. ([Year])
**Extracted by:** [Reviewer A / Reviewer B / Reconciler]
**Full citation:** [Complete APA citation]

---

# PART 1

## 1. Inclusion Decision

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Decision | [1/2] | [Include / Exclude] | "…" (p. X) |
| Exclusion reason | [1–8 or —] | [Description or —] | "…" (p. X) |

> If excluded, fill Sections 1–2 plus Evidence, then stop.

---

## 2. Basic Identification

| Field | Value | Evidence (quote, page) |
|-------|-------|------------------------|
| Citation | [Full APA] | — |
| Year | [YYYY] | — |

**Abstract:**
> [Paste the complete abstract verbatim]

---

## 3. Location

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Country | — | [Country/countries] | "…" (p. X) |
| Geographical location | [1/2/3/4] | [Urban / Rural / Not specified / Both] | "…" (p. X) |
| Socioeconomic status | [1–5] | [High / Low / Medium / Not specified / Both] | "…" (p. X) |

---

## 4. Intervention / Program

**Name:** [Full intervention name]

**Description:**
[2–3 sentence description: what it does, who it targets, how delivered]

**Supporting quotes:**
- Name: "…" (p. X)
- Key features: "…" (p. X)

---

## 5. Outcomes

Only list outcomes the paper actually measures and reports.

| Category | Specific outcomes | Evidence (quote, page) |
|----------|-------------------|------------------------|
| [Category 1] | [Outcome list] | "…" (p. X) |
| [Category 2] | [Outcome list] | "…" (p. X) |

---

## 6. Type of Intervention

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Instruction Modality (F1) | [1/2/3] | [Virtual / Face-to-face / Hybrid] | "…" (p. X) |
| Education Strategy (F2) | [1–6] | [Description] | "…" (p. X) |
| Type of Strategy (F3) | [1/2] | [Universal / Targeted] | "…" (p. X) |
| Target population if Targeted (F4) | [0–5] | [Description or N/A] | "…" (p. X) |
| Type of Instruction/Learning (F5) | [0–7] | [Description] | "…" (p. X) |
| Type of Tutoring (F6) | [1/2 or blank] | [Individual / Group / blank if no tutoring] | "…" (p. X) |

---

## 7. Sample Characteristics

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Type of participants | [1–6] | [Description] | "…" (p. X) |
| Total N | — | [Number] | "…" (p. X) |
| Gender | [1/2/3] | [Male / Female / Both] | "…" (p. X) |
| Age | — | [Age or range] | "…" (p. X) |
| School level | [1–6] | [Description] | "…" (p. X) |
| ECD / Pre-Primary | [1/2/3 or —] | [If applicable] | "…" (p. X) |
| School grade(s) | — | [Grade numbers] | "…" (p. X) |

---

## 8. Cost Information

| Field | Value | Evidence (quote, page) |
|-------|-------|------------------------|
| Total cost | [Amount + currency, or blank] | "…" (p. X) |
| Cost per participant | [Amount + currency, or blank] | "…" (p. X) |

---

## 9. IDB Document

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| IDB Document | [1/2] | [Yes / No] | "…" (p. X) |

---

## 10. Rigor of Evidence

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Confidence Level | [1/2/3] | [High / Medium / Low] | "…" (p. X) |
| Type of Evaluation | [1–5] | [RCT / Quasi-exp / RDD / Qualitative / Simple quant] | "…" (p. X) |

---

## 11. External Validity

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Developing country | [1/2] | [Yes / No] | "…" (p. X) |
| LAC country | [1/2] | [Yes / No] | "…" (p. X) |

---

## 12. Data Collection Instruments

### 12a. Table form

| Instrument | Abbreviation | What it measures | Evidence (quote, page) |
|------------|--------------|------------------|------------------------|
| [Full name] | [Abbrev] | [Construct] | "…" (p. X) |
| … | … | … | … |

### 12b. Linear prose form *(copy-paste friendly)*

> Data were collected using [N] instruments: [describe each instrument in one flowing sentence or two, including what each measures]. [Mention any official records, observational measures, or administrative data sources if used.]

---

## 13. Other SR Categories

| Code | Category | Evidence (quote, page) |
|------|----------|------------------------|
| [Code] | [Category name] | "…" (p. X) |

---

## 14. Notes

### 14a. Bulleted notes
- [Unusual design feature, if any]
- [Coding decision that required judgment, if any]
- [Ambiguity flagged for reconciler, if any]
- [Component that couldn't be coded cleanly, if any]

### 14b. Linear prose summary *(copy-paste friendly)*

> [One paragraph summarizing the most important points from the bullets above. If there are no notable points, write: "No noteworthy issues. Standard extraction."]

---

# PART 2 — RESULTS SHEET

**Extraction scenario:** [A / B / C / D / E / F] — [one-line description]

**General notes on the results section:**
- Unit of observation in the model: [student / school / state-year / etc.]
- Variable transformations present: [none / log(income) / percentage points / etc.]
- Effect size type reported: [Cohen's d / Hedge's g / η²p / none — means and SDs only / etc.]
- Estimator used: [OLS / HLM / ANOVA / ANCOVA / 2SLS / etc.]

---

## Outcome 1 — [Outcome name]

### Header

| Field | Value |
|-------|-------|
| Study citation | [Author et al. (Year)] |
| Intervention/Program | [Name] |
| Outcome category | [Category from metadata] |
| Specific outcome | [Variable name (population, units/transformation)] |
| Unit of observation in the model | [student / school / etc.] |
| Subgroup | [Groups compared or subgroup] |
| Level of measurement | [Student / Classroom / School / Teacher / Caregiver] |

### Sample sizes

| Field | Value |
|-------|-------|
| Total N | [N] |
| N Treatment | [N] |
| N Treatment 1 / 2 / 3 / 4 | [if multiple arms] |
| N Control | [N] |
| N Males/Group A | [if subgroup] |
| N Females/Group B | [if subgroup] |

### Means and SDs

|  | Treatment | Control |
|--|-----------|---------|
| Mean pre-test | [value] | [value] |
| SD pre-test | [value] | [value] |
| Mean post-test | [value] | [value] |
| SD post-test | [value] | [value] |
| Mean difference pre-post *(only if directly reported)* | [value] | [value] |
| SD of mean diff pre-post | [value] | [value] |

### Effect sizes *(only if reported)*

| Statistic | Value |
|-----------|-------|
| Cohen's D | [value or blank] |
| Hedge's G | [value or blank] |
| Partial η² (η²p) | [value or blank] |
| η² | [value or blank] |
| R² | [value or blank] |
| Cohen's f² | [value or blank] |
| Other effect size (specify) | [value or blank] |

### Regression coefficients *(linear regression only)*

| Statistic | Value |
|-----------|-------|
| Unstandardized β | [value or blank] |
| Standardized β | [value or blank] |

### Test statistics *(from corresponding tests only)*

| Statistic | Value |
|-----------|-------|
| t-statistic | [value or blank] |
| F-statistic | [value or blank] |
| χ² | [value or blank] |
| Mann–Whitney U | [value or blank] |
| Mann–Whitney Z | [value or blank] |

### Other statistics

| Statistic | Value |
|-----------|-------|
| P-value | [e.g., 0.023 / 0.312 / <0.001 / blank if not reported — always extract, including for non-significant results] |
| Standard Error | [value or blank] |
| 95% CI lower | [value or blank] |
| 95% CI upper | [value or blank] |
| Degrees of freedom | [value or blank] |

### Page reference
Table(s) and page number(s) these stats came from: [e.g., Table 3, p. 18]

---

## Outcome 2 — [Outcome name]

[Repeat the full Outcome section structure for each outcome / comparison / subgroup]

---

# QUALITY CHECKLIST

## Content Sheet
- [ ] Inclusion/exclusion decision documented with evidence
- [ ] Every coded row has a supporting quote + page (or `[NOT FOUND — flag]`)
- [ ] All location fields coded
- [ ] Intervention described with name + description
- [ ] Only outcomes actually measured/reported are listed
- [ ] F6 (Type of Tutoring) left blank if no tutoring component
- [ ] Sample characteristics complete
- [ ] Confidence level consistent with Type of Evaluation
- [ ] Cluster RCT coded as RCT
- [ ] Data Collection Instruments in BOTH table and prose
- [ ] Notes in BOTH bullets and prose
- [ ] Decimal separator is period

## Results Sheet
- [ ] All statistics verified from tables (not abstract)
- [ ] Effect size type confirmed in Methods/footnotes
- [ ] Each outcome/comparison/subgroup has its own section
- [ ] No calculated values — extraction only
- [ ] Unused fields blank (not "N/A", not "0")
- [ ] Regression fields only for linear regression
- [ ] t/F/χ² only from their respective tests
- [ ] Level of measurement = where data was collected, not where randomization happened
- [ ] Multiple follow-ups: first and last only
- [ ] Multi-arm: A-vs-B NOT extracted if control C exists
- [ ] Sample sizes disaggregated (or recovered from ratio with note)
- [ ] P-values: numeric p entered for every outcome that reports one, INCLUDING non-significant results (`p = 0.312`, `p = 0.87`, etc.); inequality signs preserved (`<0.001` not `0.001`); decimal places preserved
- [ ] Variable units/transformations recorded
- [ ] Unit of observation recorded

---

*ESD Systematic Review — IDB Education Protocol, 2026*
```
