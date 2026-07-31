# SKILL: Content Sheet Extraction — ESD

## Purpose
Extract descriptive and methodological information from an academic paper to populate the **Content Sheet** of the Extended School Day systematic review.

---

## Non-negotiable rules

1. **Every row gets evidence.** For each coded value, record a short verbatim quote (≤15 words, in quotes) plus the page number. If no quote supports the value, mark `[INFERRED]` or `[NOT FOUND — flag]` in the Evidence column.
2. **Extract only what the paper states.** Never guess, never infer from context when a clean quote would support the value.
3. **Leave blank, not "N/A".** For text fields that aren't applicable, write `—` or leave blank. Do not fill with "Not reported" unless the paper explicitly says so.
4. **Decimal separator = period** (`0.05`, not `0,05`).
5. **Data Collection Instruments and Notes must appear twice**: once structured (table/bullets), once as a linear prose paragraph suitable for copy-paste.

---

## Reading order

1. Title + Abstract → inclusion, year, country, outcomes
2. Introduction → intervention background, program name
3. Methods → design, sample, measures, duration, strategy
4. Results → outcomes actually reported (not just mentioned)
5. Discussion/Conclusion → cost info, implementation notes
6. Tables and footnotes → confirm effect size types, sample sizes

---

## Section A: Inclusion Decision

| Code | Meaning |
|------|---------|
| 1 | Include |
| 2 | Exclude |

### Exclusion reasons (if code = 2)

| Code | Reason |
|------|--------|
| 1 | Small sample size (< 20 per group) |
| 2 | No intervention / no policy |
| 3 | Proposal only — study not conducted |
| 4 | Review (systematic, meta-analysis, or narrative) |
| 5 | Does not measure effect by group × time (only outcomes by group) |
| 6 | Primary outcomes unrelated to the SR theme |
| 7 | Qualitative only |
| 8 | Insufficient results reported |

**If excluded:** document the exclusion reason with a short supporting quote + page number, then stop. Do not fill remaining Content-Sheet fields. Still produce the output file.

---

## Section B: Basic Identification

| Field | Instructions |
|-------|--------------|
| Citation | Full APA reference |
| Abstract | Paste the complete abstract verbatim. Do not summarize. |
| Year | Publication year. Include only articles from 2004 onward. |

---

## Section C: Location

| Field | Codes | Decision rules |
|-------|-------|----------------|
| Country | Name(s) | List all if multi-country |
| Geographical location | 1=Urban / 2=Rural / 3=Not specified / 4=Both | Use 3 if paper doesn't state clearly |
| Socioeconomic status | 1=High / 2=Low / 3=Medium / 4=Not specified / 5=Both | Base on paper's own description (e.g., Title I = Low) |

---

## Section D: Intervention / Program

Extract two pieces:
1. **Full name** of the intervention/program
2. **Description** (2–3 sentences): what it does, who it targets, how delivered

---

## Section E: Outcomes

List **only outcomes actually measured and reported** in the paper. Use these categories from the metadata.

### Cognitive
- Mathematics performance
- Language performance
- Reading performance
- Science performance
- General Academic Performance

### Wellbeing / Mental Health
- Stress level
- Problematic behavior *(includes bullying)*
- Depression level
- Gender-Based Violence (GBV)
- Sexual Health
- Mental Health (general)

### Attitudes & Beliefs
- Sense of belonging
- Inclusion skills
- Democratic values
- Career aspirations / awareness

### Global Citizenship Skills
- Civic advocacy skills
- Global issues knowledge
- Sustainability consciousness

### Non-cognitive
- Socioemotional learning
- Executive function
- Growth mindset

### Educational Trajectories
- Enrollment
- Retention / progression
- Dropout
- Attainment / graduation
- Motivation / engagement / confidence
- Absenteeism

### Labor Market
- Labor market insertion
- Increased income

### Indirect Effects (Family / Community)
- Poverty reduction
- Social mobility
- Effects on family
- Effects on the community
- Credit market / financial outcomes
- Mobility / migration

### Violence
- Misdemeanors (problematic behavior outside school)
- Non-violent crime
- Violent crime
- Recruitment (gangs, organized crime)
- Composite risk measurement

---

## Section F: Type of Intervention

### F1. Instruction Modality (Method of learning)
| Code | Meaning |
|------|---------|
| 1 | Virtual — digital-based |
| 2 | Face-to-face — traditional/classroom-based |
| 3 | Hybrid |

### F2. Education Strategy
| Code | Meaning |
|------|---------|
| 1 | Integrated across subjects (horizontal or vertical integration) |
| 2 | Independent subject — standalone course/module |
| 3 | Extra-curricular — outside regular hours, usually voluntary |
| 4 | Remedial / tutoring activity — supplemental support |
| 5 | Other — unique delivery strategy |
| 6 | Combination — blends two or more |

### F3. Type of Strategy
| Code | Meaning |
|------|---------|
| 1 | Universal — affects every individual in the population |
| 2 | Targeted — affects select candidates based on screening/demographics |

### F4. If Targeted — specify population
| Code | Population |
|------|------------|
| 1 | Inclusion (students with disabilities) |
| 2 | Race / ethnicity |
| 3 | Low SES |
| 4 | LGBTQ+ |
| 5 | Other (specify in Notes) |
| 0 | N/A (Universal) |

### F5. Type of Instruction / Learning
| Code | Meaning |
|------|---------|
| 0 | N/A — no specific approach described |
| 1 | IPP learning — inquiry/problem-based, student-centered |
| 2 | Explicit instruction — structured, systematic, direct teaching |
| 3 | Phonetics learning — systematic phonics/multi-sensory literacy |
| 4 | Sight-word / whole-word — memorization-based recognition |
| 5 | AI — artificial intelligence-mediated instruction |
| 6 | Mixed (IPP + Explicit) |
| 7 | Other |

### F6. Type of Tutoring *(only if the intervention involves tutoring; otherwise leave blank)*
| Code | Meaning |
|------|---------|
| 1 | Individual |
| 2 | Group |

---

## Section G: Sample Characteristics

| Field | Codes | Decision rules |
|-------|-------|----------------|
| Type of participants | 1=Caregivers / 2=Teachers / 3=Students / 4=Caregivers+students / 5=Teachers+students / 6=All three | Based on who the intervention targets |
| Number of participants | Total N | **Exclude paper if treatment group < 20** |
| Gender | 1=Male / 2=Female / 3=Both | Based on sample composition |
| Age | Age or range | As reported |
| School level | 1=Pre-primary / 2=Primary / 3=Secondary / 4=Tertiary / 5=Adult education / 6=Teacher training | Primary = 5–11yrs / K–5; Secondary = 11–18yrs / 6–12 |
| ECD and Pre-Primary | 1=ECD / 2=Pre-K / 3=Kindergarten | Only if school level = Pre-primary |
| School grade(s) | 1–12 | List all applicable |

---

## Section H: Cost Information

| Field | Instructions |
|-------|--------------|
| Total cost of the intervention | Amount + currency, as stated. Leave blank if not reported (do not write "not reported"). |
| Cost per participant | Amount + currency, as stated. Leave blank if not reported. |

---

## Section I: IDB Document

| Code | Meaning |
|------|---------|
| 1 | Yes — published by or for the Inter-American Development Bank |
| 2 | No |

---

## Section J: Rigor of Evidence

### J1. Confidence Level
| Code | Meaning |
|------|---------|
| 1 | High — RCT with properly calculated sample size |
| 2 | Medium — RCT without proper power calculation OR quasi-experimental |
| 3 | Low — mainly comparative/descriptive |

### J2. Type of Evaluation
| Code | Meaning |
|------|---------|
| 1 | RCT — random assignment |
| 2 | Quasi-experimental — comparison groups without random assignment |
| 3 | Regression Discontinuity |
| 4 | Qualitative |
| 5 | Simple quantitative analysis (descriptive, correlational, no causal design) |

**Cluster RCTs** (schools/classrooms randomized) → code as **1 = RCT**.

---

## Section K: External Validity

| Field | Codes |
|-------|-------|
| Developing country | 1=Yes / 2=No (World Bank classification) |
| Latin American and Caribbean country | 1=Yes / 2=No |

---

## Section L: Data Collection Instruments

**Must appear in BOTH forms below. Both are required.**

### L1. Structured table
| Instrument | Abbreviation | What it measures |
|------------|--------------|------------------|
| [Full name] | [Abbrev if any] | [Construct measured] |
| … | … | … |

Do NOT include reliability coefficients or psychometric details in the table.

### L2. Linear prose summary *(one paragraph, for direct copy-paste)*
Write a single paragraph listing all instruments used, e.g.:

> "Data were collected using four instruments: the Woodcock-Johnson III Tests of Achievement (WJ-III; reading and math subtests), the Strengths and Difficulties Questionnaire (SDQ; behavioral outcomes), official school attendance records (absenteeism), and a researcher-designed student engagement survey."

---

## Section M: Notes

**Must appear in BOTH forms below. Both are required.**

### M1. Bulleted notes
- Unusual study design features
- Coding decisions that required judgment
- Ambiguities flagged for reviewer
- Components that couldn't be coded cleanly

### M2. Linear prose summary *(one paragraph, for direct copy-paste)*
Write a single paragraph summarizing the most important notes.

---

## Section N: Inclusion in Other SR Categories

| Code | Category |
|------|----------|
| 1 | None |
| 2 | School feeding |
| 3 | Gender |
| 4 | SEL |
| 5 | GCE |
| 6 | Preschool |
| 7 | EIB |
| 8 | Learning trajectories |
| 9 | Digital technologies / education |
| 10 | STEAM |
| 11 | Sports education |
| 12 | Students with disabilities |
| 13 | Pre-service teachers |
| 14 | Violence |

---

## Evidence column — how to fill it

For every coded row you produce in the output, include a short quote (≤15 words, in quotation marks) and the page number. Example:

> "The intervention was delivered in 12 low-income public schools in Mexico City" *(p. 4)*

If a code is a direct inference from the study design rather than a quotable line (for example, "cluster RCT → RCT" where the paper says "schools were randomly assigned"), quote the design sentence and annotate as inferred:

> "schools were randomly assigned to treatment or control" *(p. 6)* — cluster RCT coded as RCT

If no quote supports a value, write `[NOT FOUND — flag for reconciler]`. Do not invent.

---

## Common decision rules

| Situation | How to code |
|-----------|-------------|
| Intervention combines classroom + extracurricular + tutoring | Education Strategy = 6 (Combination) |
| Multiple countries | List all; Developing/LAC = Yes if ANY qualify |
| Cluster RCT | Type of Evaluation = 1 (RCT); Confidence depends on whether power was calculated |
| Costs not reported | Leave cost fields blank (do not write "not reported") |
| School level spans primary + secondary | Code both |
| Multiple grades | List all applicable |
| Intervention has no tutoring component | F6 (Type of Tutoring) = blank |

---

## Quality checklist

Before finishing, verify:

- [ ] Inclusion/exclusion decision made, with evidence if excluded
- [ ] Every Content-Sheet row has a quote + page number (or `[NOT FOUND — flag]`)
- [ ] All location fields coded
- [ ] Intervention described with name + description
- [ ] Only outcomes actually measured and reported are listed (not just mentioned)
- [ ] All intervention-type fields coded
- [ ] F6 (Type of Tutoring) left blank if no tutoring
- [ ] Sample characteristics complete
- [ ] Confidence level consistent with Type of Evaluation
- [ ] Cluster RCT coded as RCT, not quasi-experimental
- [ ] Data Collection Instruments given in BOTH table and prose
- [ ] Notes given in BOTH bullets and prose
- [ ] Decimal separator is period (not comma)
