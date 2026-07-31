# SKILL: Reconciliation

## Purpose
Compare two independent extractions (Reviewer A and Reviewer B) for the same paper and produce a single consolidated final markdown.

---

## Inputs for each paper

| Input | Path |
|-------|------|
| Reviewer A draft | `Output\ESD\_reviewerA\{ID}.md` |
| Reviewer B draft | `Output\ESD\_reviewerB\{ID}.md` |
| Source PDF | `Paper\ESD\*{ID}*.pdf` |

---

## Output
`Output\ESD\{ID}.md` — consolidated final file, same template as reviewers, plus a **Reconciliation Report** section at the bottom.

---

## Process

### Step 1 — Read both drafts in full
Read A and B completely before making any decisions. Do not process field-by-field in isolation; context in one section often clarifies another.

### Step 2 — Compare row by row
For each field, classify the comparison:

| Case | Action |
|------|--------|
| **Agree** | A = B. Carry the value into the final. Merge both Evidence quotes if they quote different supporting sentences. |
| **Trivially differ** | e.g., one decimal place, APA formatting differences, quote wording slightly different but coded value identical. Carry the cleaner version. No re-check needed. |
| **Substantively differ** | Different codes, different numbers, one has a value the other doesn't. **Go back to the PDF.** |
| **Both have `[NOT FOUND — flag]`** | Make a genuine effort to find it in the PDF. If truly not findable, keep the flag. |

### Step 3 — PDF re-check for substantive disagreements
For every substantive disagreement:
1. Open the PDF.
2. Find the supporting text (use both reviewers' page references as starting points).
3. Decide which value is correct based on the PDF itself.
4. Record the decision in the Reconciliation Report.

Never split the difference. Never "pick the more conservative one" as a rule. The PDF is the arbiter.

### Step 4 — Special handling

#### Effect sizes, p-values, sample sizes
If A and B report different numbers for the same statistic, **always re-check the paper**. A common cause is one reviewer picking the overall N and the other picking the analytic sample N — record which it is.

#### Missing statistics
If A has a value and B has it blank (or vice versa), re-check the PDF. Don't assume the one who filled it is right.

#### Coding schemes (e.g., Type of Approach)
Coding disagreements often come from ambiguous intervention descriptions. Re-read the Intervention section of the paper. If genuinely ambiguous, pick the best-fitting code and record the ambiguity in the Reconciliation Report.

#### Inclusion decisions
If A includes and B excludes (or vice versa), this is high-severity. Re-check inclusion criteria against the paper carefully. Document the decision in the Reconciliation Report with the reason.

#### Outcomes list
A common source of drift: one reviewer lists an outcome that is "mentioned" but not "measured and reported". Only measured-and-reported outcomes go in the final list.

#### Notes and prose summaries
Merge bullets from both reviewers (deduplicate). For the linear prose summary, write a fresh consolidated paragraph that captures both reviewers' points.

---

## Evidence column in the final

For the final `{ID}.md`:
- Use the best quote (shortest, most direct, correct page).
- If A and B quoted different supporting sentences, include both inside the cell, separated by " | ".
- If the cell was `[NOT FOUND — flag]` in both drafts and you still can't find a quote, keep the flag.

---

## The Reconciliation Report

Append this section at the bottom of the final `{ID}.md`:

```markdown
---

# RECONCILIATION REPORT

## Summary
- Total fields compared: [N]
- Fields in full agreement: [N]
- Trivial differences (no PDF re-check needed): [N]
- Substantive disagreements resolved via PDF: [N]
- Flags remaining unresolved: [N]

## Substantive disagreements resolved

| Section | Field | Reviewer A value | Reviewer B value | Final value | PDF evidence (quote, page) | Reasoning |
|---------|-------|------------------|------------------|-------------|-----------------------------|-----------|
| [e.g., 6. Type of Intervention] | [e.g., Type of Approach] | [A's value] | [B's value] | [Final] | "…" (p. X) | [One sentence on why this value wins] |
| … | … | … | … | … | … | … |

## Flags unresolved
[List any fields that remain `[NOT FOUND — flag]` or ambiguous. State what additional info would resolve each.]

## Inclusion disagreement *(only if A and B disagreed on inclusion)*
- Reviewer A decision: [Include/Exclude]
- Reviewer B decision: [Include/Exclude]
- Final decision: [Include/Exclude]
- Reasoning: [Paragraph grounded in the PDF and the inclusion criteria]
```

---

## Checklist before saving the final

- [ ] Read both A and B fully
- [ ] Every field compared; every substantive disagreement resolved via the PDF
- [ ] Final has the same template structure as the reviewers
- [ ] Evidence column present on every coded row
- [ ] Data Collection Instruments in BOTH table and prose
- [ ] Notes in BOTH bullets and prose
- [ ] Reconciliation Report appended
- [ ] Unresolved flags listed (if any)
- [ ] File saved to `Output\ESD\{ID}.md` (not in a subfolder)
