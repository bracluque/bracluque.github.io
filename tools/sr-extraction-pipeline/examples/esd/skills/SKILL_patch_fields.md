# SKILL: Patch Extraction — New Fields (ESD, Tutoring, Teacher Training, Literacy)

## Purpose
Extract a focused set of new fields that were not part of the original extraction. This skill covers **four sections**. Section P1 (Extended School Day Intervention) is **compulsory for every included paper**. Sections P2–P4 are filled only when the paper explicitly provides that information; otherwise leave the entire section blank.

---

## Non-negotiable rules (same as original extraction)

1. **Every coded row gets evidence.** Short verbatim quote (≤15 words, in quotation marks) + page number. If no quote supports the value, write `[NOT FOUND — flag for reconciler]`.
2. **Extract only what the paper states.** Never infer, never guess.
3. **Leave blank, not "N/A".** For sections that do not apply, write `— Not applicable —` as a single row under the section header, then move on.
4. **Decimal separator = period** (`0.05`, not `0,05`).
5. **Do not re-extract the full content sheet or results sheet.** This patch covers only the four sections below.

---

## Before you start

1. Read the **existing reconciled file** `Output\ESD\{ID}.md` to confirm the paper is included (Inclusion Decision = 1). If excluded, write a single line in the patch file: `Paper excluded in original extraction. No patch fields applicable.` and stop.
2. Read the PDF to extract the new fields.
3. Note the intervention type from the reconciled file. This tells you whether to expect tutoring, teacher training, or literacy components.

---

## Section P1 — Extended School Day (ESD) Intervention

**This section is COMPULSORY for every included paper.** Fill every field. Use `[NOT FOUND — flag for reconciler]` if the paper does not report a field.

### P1.1 Intensity / Dosage
Report the number of hours or minutes per session, exactly as stated in the paper.
- Example: `"2 hours per day"` or `"90 minutes per session"`
- If the paper states a weekly total without per-session breakdown, report that.

### P1.2 Frequency
| Code | Meaning |
|------|---------|
| 1 | Weekly — sessions occur weekly (or daily; note "daily" in Evidence) |
| 2 | Monthly — sessions occur monthly |

### P1.3 Duration
Report in **months or weeks** as stated. Example: `"9 months"`, `"12 weeks"`, `"one academic year"`.

### P1.4 Mandatory vs Optional
| Code | Meaning |
|------|---------|
| 1 | Mandatory — students are required to attend |
| 2 | Optional — attendance is voluntary |

### P1.5 Type of Activities
Select all that apply. Code as a comma-separated list if more than one.
| Code | Meaning |
|------|---------|
| 1 | Instruction / academic — structured learning aligned with school subjects |
| 2 | Tutoring — targeted individual or small-group academic support |
| 3 | Enrichment — non-academic programming (arts, sports, clubs, SEL) |

### P1.6 Content Focus
Select all that apply. Code as a comma-separated list.
| Code | Meaning |
|------|---------|
| 1 | Subject-based: literacy, math, science, multiple subjects |
| 2 | Instructional approach-based: foundational skills (e.g., phonics), grade-level curriculum, enrichment activities |

In the Evidence column, specify the subject or approach named in the paper.

### P1.7 Who Runs the Extended Time?
| Code | Meaning |
|------|---------|
| 1 | Teachers — same teachers as during the regular school day |
| 2 | Teachers — different from those in the regular school day |
| 3 | Paraprofessionals / tutors |
| 4 | External providers (NGOs, contractors, community organizations) |
| 5 | Mixed staffing model — more than one type |

### P1.8 Group Size
| Code | Meaning |
|------|---------|
| 1 | 1:1 (one-to-one) |
| 2 | Small group |
| 3 | Whole class / large group |

### P1.9 Setting
| Code | Meaning |
|------|---------|
| 1 | Classroom — takes place in the regular school classroom |
| 2 | After-school center — dedicated after-school facility or community space |
| 3 | Hybrid — combination of settings |

---

## Section P2 — Tutoring

**Fill only if the intervention includes a tutoring component.** If no tutoring component is present, write `— Not applicable —` as a single row and move on.

⚠️ Key distinction: "tutoring" here means a deliberate, structured supplemental academic support activity separate from the general extended-day instruction. If the ESD program IS tutoring (Type of Activities = 2 in P1.5), fill this section based on how that tutoring is structured.

### P2.1 Tutoring Description
Write a concise paragraph (3–5 sentences) covering:
- Who provides the tutoring
- Session length and frequency
- Content covered (subject, skill level)
- How it relates to the regular classroom curriculum
- Who receives it (all students, targeted group, etc.)

### P2.2 Type of Tutoring
| Code | Meaning |
|------|---------|
| 1 | Individual — one tutor, one student |
| 2 | Group — one tutor, multiple students |
| 3 | Both — individual and group sessions used |
| 4 | Not specified — tutoring mentioned but no format detail given |

### P2.3 Curriculum Alignment
| Code | Meaning |
|------|---------|
| 1 | Fully aligned — tutoring content directly mirrors the current grade-level curriculum |
| 2 | Partially aligned — some grade-level content, some other material |
| 3 | Remedial / foundational — targets below-grade skills regardless of current class content |
| 4 | Independent curriculum — uses its own separate curriculum |
| 5 | Not specified — alignment not described |

⚠️ "Fully aligned" ≠ "same subject." It means the tutor reinforces exactly what students are currently doing in class. "Remedial" means the tutor targets foundational gaps.

### P2.4 Type of Tutoring Provider
| Code | Meaning |
|------|---------|
| 1 | Certified teacher — licensed or credentialed teacher |
| 2 | Teaching assistant — paraprofessional, classroom aide |
| 3 | Student / volunteer tutor — peer tutor, volunteer, community member |
| 4 | External NGO / programme staff — from outside the school |
| 5 | Technology-mediated — AI or adaptive learning system |
| 6 | Mixed model — more than one type of provider |

### P2.5 Tutoring Format (Student–Tutor Ratio)
| Code | Meaning |
|------|---------|
| 1 | One-to-one — 1 student per tutor |
| 2 | Very small group — 2–3 students per tutor |
| 3 | Small group — 4–6 students per tutor |
| 4 | Larger group — more than 6 students per tutor |
| 5 | Not specified |

### P2.6 Tutoring Intensity / Dosage
Number of hours or minutes per session, as stated. Example: `"30 minutes per session"`, `"1 hour per week"`.

### P2.7 Tutoring Frequency
| Code | Meaning |
|------|---------|
| 1 | Weekly (or daily — note "daily" in Evidence) |
| 2 | Monthly |

### P2.8 Tutoring Intervention Duration
In months or weeks, as stated. Example: `"8 weeks"`, `"full academic year"`.

### P2.9 Structured Pedagogy
| Code | Meaning |
|------|---------|
| 1 | Highly structured — scripted lessons, fixed sequences, fidelity monitoring |
| 2 | Mixed structured — some structure but teacher/tutor has flexibility |
| 3 | Minimally structured — teacher/tutor-led, flexible, few prescribed steps |

### P2.10 AI and Technologies
| Code | Meaning |
|------|---------|
| 1 | Technology-enhanced learning — digital tools used but not AI specifically |
| 2 | AI — artificial intelligence used in delivery |
| 3 | Not specified — no technology mentioned or technology not described |

---

## Section P3 — Teacher Training

**Fill only if the intervention includes a teacher training component.** If absent, write `— Not applicable —`.

### P3.1 Type of Teacher Training
| Code | Meaning |
|------|---------|
| 1 | Pre-service — training provided before teachers begin teaching |
| 2 | In-service — training provided to practicing teachers |

### P3.2 Teacher Training Description
Brief paragraph (2–4 sentences): what the training covers, who receives it, how it is organized.

### P3.3 Teacher Training Methods
Select all that apply. Code as comma-separated list.
| Code | Meaning |
|------|---------|
| 1 | In-person workshops / seminars |
| 2 | Online synchronous workshops / seminars |
| 3 | Online asynchronous workshops / modules |
| 4 | Individual coaching / mentoring |
| 5 | Classroom observation (by trainer/coach) |
| 6 | Community of practice |
| 7 | Follow-up / refresher sessions |
| 8 | Individual assignments / reflections outside sessions |

### P3.4 Teacher Training Modality
| Code | Meaning |
|------|---------|
| 1 | Virtual |
| 2 | Face-to-face |
| 3 | Hybrid |

### P3.5 Teacher Training Group Size
Number of participants per training session, as stated. Leave blank if not reported.

### P3.6 Teacher Training Intensity / Dosage
Hours, days, or sessions, as stated. Example: `"3-day workshop"`, `"40 hours total"`.

### P3.7 Teacher Training Components Description
Free-text summary of the specific content covered in training (e.g., "classroom management, reading instruction strategies, data-driven instruction").

---

## Section P4 — Literacy

**Fill if the intervention has a literacy component. If no literacy component, write `— Not applicable —`.**

### P4.1 Literacy Instruction Approach
Fill only if the ESD program has a literacy component. Otherwise: `— Not applicable —`.
| Code | Meaning |
|------|---------|
| 1 | Code-based / Phonics-related — letter recognition, sound recognition, phonemic awareness |
| 2 | Meaning-based / Sight word / Whole word — flash cards, sight words, combination of letters/pictures |
| 3 | Fluency intervention — timed reading, repeated reading, oral reading practice |
| 4 | Comprehension-focused — reading for meaning, vocabulary, inference |
| 5 | Mixed / Combined — more than one approach explicitly described |
| 6 | Not specified — literacy content present but approach not described |

### P4.2 Literacy Area
Fill only if the ESD program has a literacy component. Otherwise: `— Not applicable —`.
| Code | Meaning |
|------|---------|
| 1 | Early literacy / primary-level interventions |
| 2 | Reading / literacy intervention for secondary or later grades |
| 3 | Bilingual education / second language literacy |
| 4 | EBI (Evidence-based instruction in English) |
| 5 | EFL (English as a Foreign Language) |
| 6 | SwD (Students with Disabilities) |

---

## Decision rules for ambiguous cases

| Situation | How to handle |
|-----------|---------------|
| ESD program IS the tutoring (no separate tutoring layer) | P1.5 = 2 (tutoring); fill P2 based on how the ESD tutoring is described |
| Tutoring mentioned but no detail given | P2.2 = 4 (Not specified); P2.3 = 5; note in Evidence |
| Teacher training is described only in passing | Still fill P3 with what is stated; flag thin coverage with `[NOT FOUND — flag]` for missing fields |
| Duration given as academic year | Code as `"~9–10 months (academic year)"` — do not convert to weeks unless paper does so |
| Paper describes multiple tutoring tracks | Describe both in P2.1; code based on the predominant or more-detailed track; note in Evidence |
| Group size ranges given (e.g., "3–5 students") | Code the lower end (P2.5 = 2 for 3 students); note the range in Evidence |

---

## Quality checklist for patch

- [ ] P1 fully filled (all 9 fields attempted, evidence on every row or `[NOT FOUND — flag]`)
- [ ] P2 filled if tutoring present; `— Not applicable —` if absent
- [ ] P3 filled if teacher training present; `— Not applicable —` if absent
- [ ] P4 filled if literacy component present; `— Not applicable —` if absent
- [ ] Every coded row has a quote + page number (or `[NOT FOUND — flag]`)
- [ ] No inferred values passed off as stated ones
- [ ] Decimal separator = period
