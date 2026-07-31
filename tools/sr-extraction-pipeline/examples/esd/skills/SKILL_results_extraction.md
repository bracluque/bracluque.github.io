# SKILL: Results Sheet Extraction — ESD

## Purpose
Extract quantitative data from academic papers to populate the **Results Sheet** of the ESD systematic review.

---

## The one rule that matters most

> **Extract what the paper reports. Calculate nothing.**

If the paper reports Cohen's d → enter it.
If the paper does not report Cohen's d → extract means, SDs, Ns, regression coefficients, test statistics, whatever is there. Do **not** compute d yourself.

---

## Core rules (from the 2026 guide)

1. **Decimal separator = period** (`0.05`, not `0,05`).
2. **Always report sample size total AND disaggregated by group** (treatment and control). If disaggregated Ns aren't in a table, search the Methods text — phrases like *"randomly assigned (2:1 ratio)"* let you figure out the split.
3. **If paper reports Cohen's d between groups:** extract Cohen's d, total N, N per group, p-value, SE (if reported). Leave other stat fields blank.
4. **If paper does NOT report Cohen's d:** extract all available statistics in this priority order:
   1. Means and SDs (pre and post, per group) — **especially baseline pooled mean/SD, or at minimum the control group's mean/SD**
   2. Standard errors, confidence intervals
   3. Test statistics (t, F, χ²) — only from the corresponding test
   4. Regression coefficients — only from linear regression
5. **Always report the units/transformation of the outcome variable.** `ln(income)` is not the same as `income`; percentage points are not percent change. Record this on the Outcome row.
6. **Unit of observation in the model.** Is a row a student, school, state-year? Record this.
7. **Unused fields stay blank.** Not "N/A", not "0", not "—" — blank.
8. **Confirm effect size type in Methods or table footnotes** before entering (Cohen's d vs Hedge's g vs Cohen's f² vs η² look similar).
9. **Pre-post d within a single group is not a between-group effect.** If the paper only reports pre-post d per group, do not use it as the treatment effect; extract means/SDs instead.
10. **Multiple follow-ups:** extract **first and last** only. Skip intermediate time points.

---

## P-Value reporting (explicit rules — this is where mistakes happen)

### The rule

**Always enter the actual numeric p-value whenever the paper gives one — even if it's not statistically significant, and even if the coefficient has no stars next to it.**

Non-significant does not mean "leave blank". If the paper reports `p = 0.312` for a non-significant effect, enter `0.312`. The numeric value is exactly what's needed downstream — don't filter it out because it's above 0.05.

### How to report each case

| Paper reports | Enter as |
|---------------|----------|
| `p = 0.023` | `0.023` |
| `p = 0.312` (non-significant) | `0.312` |
| `p = 0.87` (clearly non-significant) | `0.87` |
| `p < 0.001` | `<0.001` (keep the inequality sign) |
| `p < 0.05` | `<0.05` |
| `p > 0.05` | `>0.05` |
| Only stars/asterisks (`*`, `**`, `***`) in the table, no number | Use the threshold from the footnote — e.g., `<0.01` if footnote says `** p<0.01` — and add a note: "Reported only via asterisks; threshold from footnote." |
| A coefficient with **no stars** but with a numeric p in the same cell/column | Enter the numeric p (no stars doesn't mean no p-value) |
| A coefficient with no stars and no numeric p anywhere | Leave blank. Do NOT write "ns" or "not significant" unless the paper explicitly says that. |
| Paper explicitly says "ns" or "not significant" (and no number) | `ns` |
| Truly not reported | Leave blank. Do NOT write "Not reported" or guess. |

### Where to look for the p-value before deciding it's "not reported"

Before leaving a p-value blank:
1. The main results table(s) — the p-value is often in a column labeled `p`, `p-value`, `Sig.`, `Pr(>|t|)`, `Pr(>|z|)`.
2. Table footnotes — sometimes p-values are listed there instead of inline.
3. The Results text paragraphs — authors often report numeric p in prose even when tables only show stars.
4. The appendix / supplementary material.
5. SE or CI is given without a p → the paper considers SE/CI to be the primary uncertainty measure. Record SE/CI and leave p-value blank.

### Decimal places
- Keep the number of decimals the paper uses. Don't round.
- Example: paper says `p = 0.0234` → enter `0.0234`, not `0.023`.

### Inequalities
- `p < 0.001` → enter with the less-than sign: `<0.001`. Do **not** convert to `0.001`, because `0.001` is a reported equality and `<0.001` is a reported bound. They are not the same.

### Wrong patterns to avoid
- ❌ Leaving p-value blank because the coefficient has no stars — check for a numeric p first
- ❌ Skipping p-values for non-significant results because they "don't matter" — they do, always extract them
- ❌ Entering `0.05` when the paper says `<0.05` — loses information
- ❌ Entering `0.000` when the paper says `p < 0.001` — that's not what the paper says
- ❌ Filling blank cells with `>0.05` or `ns` by default — only do this if the paper actually says so
- ❌ Interpreting effect direction from the p-value — p-value doesn't tell you sign

---

## Reading order

1. Abstract — identify outcomes, intervention, sample size, design
2. Methods — confirm design, groups, measures, analysis type, unit of observation, variable transformations
3. Results — extract all statistics
4. Tables and footnotes — **verify numbers, confirm effect size types**

**Never fill a results row from the abstract alone.**

---

## Step 1: Identify the scenario

| Scenario | Description | What to do |
|----------|-------------|------------|
| A | RCT/quasi-experiment with treatment vs control | Standard extraction — one section per outcome |
| B | Pre-post only, no control group | Extract pre/post means/SDs for the single group. Note "Single group — pre-post only." |
| C | Multiple follow-up time points | Extract **first and last** follow-up only |
| D | Subgroup analyses reported | One section per subgroup |
| E | Results only in figures/graphs (no numbers in text, tables, or appendix) | Leave stat fields blank. Note: "Results reported in figures only — flag for author contact." |
| F | Multiple treatment arms | One section per comparison (A vs C, B vs C; add A vs B only if the paper reports it and isn't also comparing to control — see guide section 6) |

### Multiple-arm specifics (from the 2026 guide)
- If paper compares `A vs C` and `B vs C` only → two sections per outcome (A-vs-C, B-vs-C).
- If paper ALSO compares `A vs B` and there is a control group C → **do not** extract A vs B.
- If paper has two treatments and no control (e.g., high-intensity vs low-intensity) → extract the comparison between them.

---

## Step 2: What to extract

### Header (for each outcome/comparison)

| Field | Content |
|-------|---------|
| Study Citation | First author et al. (year) |
| Intervention/Program | Name |
| Outcome Category | From Content-Sheet categories |
| Specific Outcome | Variable name, with (target population) in parentheses, and units/transformation — e.g., `Reading fluency (students, WPM)` or `Earnings (individuals, ln(monthly income) USD)` |
| Unit of observation in the model | Student / school / state-year / etc. |
| Subgroup | Groups compared or subgroup description (e.g., "Treatment A vs Control C"; "Girls only") |
| Level of measurement | See rules below |

#### Level of measurement
Where data was **collected**, not where randomization happened.

| Level | Use when |
|-------|----------|
| Student | Each individual student assessed (even in a cluster RCT where schools were randomized) |
| Classroom | Data collected at classroom level |
| School | Data at school level (e.g., school-wide attendance rate) |
| Teacher | Data from/about teachers |
| Caregiver / Parent | Data from caregivers |

> **Common mistake:** Cluster RCT randomizes schools and uses HLM, but students take individual tests → **Level = Student.**

---

### Sample sizes

| Field | When to fill |
|-------|--------------|
| Total sample size | Always, for this comparison |
| N Treatment Group (and 1/2/3/4 if multiple arms) | N in each treatment arm |
| N Control Group (and 1/2 if multiple controls) | N in each control arm |
| N Males/Other Group A, N Females/Other Group B | Subgroup analyses only |

If disaggregated N isn't directly reported but can be recovered from the randomization ratio (e.g., "2:1 assignment") **and total N is known**, compute the split and leave a note: "N per arm computed from stated 2:1 randomization ratio."

If Ns are truly not recoverable → `Not reported separately`.

---

### Means and standard deviations (priority target when no d is reported)

Always try to extract, per group:
- Mean at baseline (pre-test)
- SD at baseline (pre-test)
- Mean at follow-up (post-test)
- SD at follow-up (post-test)

**Pooled baseline mean/SD** (across treatment and control) is ideal. If only one is available, prefer the **control group** baseline.

If paper reports **Mean Difference Pre-Post** directly → use that row instead of the four pre/post rows.

### Effect sizes (only when the paper reports them)

| Field | Fill when |
|-------|-----------|
| Cohen's D | Paper labels it Cohen's d, between groups |
| Hedge's G | Paper labels it Hedge's g |
| Partial Eta Squared | Paper reports η²p from ANOVA/ANCOVA |
| Eta Squared | Paper reports η² |
| R Squared | Paper reports R² |
| Cohen's f² | Paper reports f² |

**Never use a within-group pre-post Cohen's d as the between-group effect.**

### Regression coefficients (linear regression only)

| Field | Fill when |
|-------|-----------|
| Unstandardized β | Linear regression only |
| Standardized β | Linear regression only |

**Do NOT fill these rows for:** HLM, ANOVA, ANCOVA, logistic regression, probit, IV-2SLS, Poisson. If in doubt → leave blank, note the estimator in the Notes section.

### Test statistics (from respective tests only)

| Field | Fill when |
|-------|-----------|
| t-statistic | Result of a t-test |
| F-statistic | Result of an F-test |
| χ² | Result of a chi-squared test |

**Do NOT fill** these from regression, ANOVA, or ANCOVA output — those have their own fields.

### Mann–Whitney — report BOTH U and Z (per the guide).

### Other statistics

| Field | Fill when |
|-------|-----------|
| P-value | Reported for this specific outcome (see p-value rules above) |
| 95% CI Lower / Upper | Reported |
| Standard Error | Reported |
| Degrees of Freedom | Reported |

---

## ANOVA/MANOVA/ANCOVA specifics
- Prefer means and SDs over F-statistic (per guide).
- Fill Partial Eta Squared if reported.
- Do **not** fill the F-statistic field from ANOVA output.

## HLM specifics
- HLM coefficients are NOT "regression coefficients" for the regression fields.
- If paper explicitly says the standardized HLM treatment effect = Cohen's d → enter in Cohen's D, but confirm in Methods/footnotes first.

## Pre-post d within each group only
- Do not use as between-group d.
- Extract means and SDs instead.

## Results only in graphs
- Leave stat fields blank.
- Note: "Results reported in figures only — no numerical values available. Flag for author contact."

---

## Quality checklist

- [ ] Every number verified in the paper's tables (not from the abstract or from memory)
- [ ] Effect size type confirmed in Methods or footnote
- [ ] Each outcome/comparison/subgroup has its own section
- [ ] No calculated values — extraction only
- [ ] Unused fields left blank (not "N/A", not "0")
- [ ] Regression fields used only for linear regression
- [ ] t/F/χ² fields used only for their respective tests
- [ ] Level of measurement based on data collection, not randomization
- [ ] Multiple follow-ups: only first and last extracted
- [ ] Multi-arm: A-vs-B NOT extracted if C (control) exists
- [ ] Sample sizes disaggregated, or recovered from ratio, or noted as not reported
- [ ] P-values: numeric p entered for EVERY outcome where paper reports one, INCLUDING non-significant results; inequality signs preserved (`<0.001` not `0.001`); decimal places preserved
- [ ] Variable units / transformations recorded on each outcome row
- [ ] Unit of observation in the model recorded
