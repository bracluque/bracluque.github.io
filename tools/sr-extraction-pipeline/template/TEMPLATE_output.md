# TEMPLATE: Systematic Review Extraction Output

Use this exact structure for every paper. Save as `{ID}.md` where `{ID}` is taken from the PDF filename.

Part 1 (Content Sheet) below is a placeholder — its actual fields come from `SKILL_codebook.md`, which you fill in for your review. Part 2 (Results Sheet) is generic as written; it covers the shape of a quantitative outcome regardless of what review it's for.

---

```markdown
# [Review Name] Extraction — [Paper Title]

**ID:** [Paper ID from filename]
**Paper:** [First author] et al. ([Year])
**Extracted by:** [Reviewer A / Reviewer B / Reconciler]
**Full citation:** [Complete APA citation]

---

# PART 1 — CONTENT SHEET

## 1. Inclusion Decision

| Field | Code | Value | Evidence (quote, page) |
|-------|------|-------|------------------------|
| Decision | [1/2] | [Include / Exclude] | "…" (p. X) |
| Exclusion reason | [code or —] | [Description or —] | "…" (p. X) |

> If excluded, fill Section 1–2 plus Evidence, then stop.

## 2. Basic Identification

| Field | Value | Evidence (quote, page) |
|-------|-------|------------------------|
| Citation | [Full APA] | — |
| Year | [YYYY] | — |

**Abstract:**
> [Paste the complete abstract verbatim]

## 3+. Your fields

[Repeat this row shape for every field in your codebook — Field | Code | Value | Evidence (quote, page) — grouped into whatever sections your protocol defines (location, intervention type, sample characteristics, rigor of evidence, whatever applies). See `SKILL_codebook.md` for how to define each one, and `examples/esd/excerpt.md` for four real filled-in fields from the ESD project.]

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
| Outcome category | [Category from your codebook] |
| Specific outcome | [Variable name (population, units/transformation)] |
| Unit of observation in the model | [student / school / etc.] |
| Subgroup | [Groups compared or subgroup] |
| Level of measurement | [where the data was collected, not where randomization happened] |

### Sample sizes

| Field | Value |
|-------|-------|
| Total N | [N] |
| N Treatment | [N] |
| N Treatment 1 / 2 / 3 / 4 | [if multiple arms] |
| N Control | [N] |

### Means and SDs

|  | Treatment | Control |
|--|-----------|---------|
| Mean pre-test | [value] | [value] |
| SD pre-test | [value] | [value] |
| Mean post-test | [value] | [value] |
| SD post-test | [value] | [value] |

### Effect sizes *(only if reported)*

| Statistic | Value |
|-----------|-------|
| Cohen's D | [value or blank] |
| Hedge's G | [value or blank] |
| Partial η² (η²p) | [value or blank] |
| η² | [value or blank] |
| R² | [value or blank] |
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

### Other statistics

| Statistic | Value |
|-----------|-------|
| P-value | [e.g., 0.023 / 0.312 / <0.001 / blank if not reported — always extract, including non-significant results] |
| Standard Error | [value or blank] |
| 95% CI lower | [value or blank] |
| 95% CI upper | [value or blank] |
| Degrees of freedom | [value or blank] |

### Page reference
[e.g., Table 3, p. 18]

---

## Outcome 2 — [Outcome name]

[Repeat the full Outcome section for each outcome / comparison / subgroup]

---

# QUALITY CHECKLIST

## Content Sheet
- [ ] Inclusion/exclusion decision documented with evidence
- [ ] Every coded row has a supporting quote + page (or `[NOT FOUND — flag]`)
- [ ] Only outcomes actually measured/reported are listed
- [ ] [Your field-specific checks here]
- [ ] Decimal separator matches your stated convention

## Results Sheet
- [ ] All statistics verified from tables (not abstract)
- [ ] Effect size type confirmed in Methods/footnotes
- [ ] Each outcome/comparison/subgroup has its own section
- [ ] No calculated values — extraction only
- [ ] Unused fields blank (not "N/A", not "0")
- [ ] Regression fields only for linear regression
- [ ] t/F/χ² only from their respective tests
- [ ] Level of measurement = where data was collected
- [ ] P-values: numeric p entered for every outcome that reports one, INCLUDING non-significant results; inequality signs preserved (`<0.001` not `0.001`)
- [ ] Variable units/transformations recorded
- [ ] Unit of observation recorded

---

*[Review Name] — extraction record*
```
