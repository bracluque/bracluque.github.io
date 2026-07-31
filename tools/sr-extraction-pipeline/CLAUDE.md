# CLAUDE.md — sr-extraction-pipeline (generic)

**Status: placeholder.** This will become the generalized version of the original ESD `CLAUDE.md` — same orchestrator/worker discipline (dispatch, don't extract directly; parallel waves; independence between reviewers; skip-logic resumability), but with ESD's field names, coding schemes, and hardcoded Windows paths replaced by placeholders a new project fills in.

TODO (next task):
- [ ] Replace hardcoded paths with `{project_root}`, `{input_dir}`, `{output_dir}` placeholders
- [ ] Strip ESD-specific extraction rules (keep only project-agnostic discipline: evidence quotes, blank-not-N/A, extract-don't-calculate)
- [ ] Point "where detailed rules live" table at `template/SKILL_codebook.md` instead of the ESD skill files
- [ ] Keep the independence rules (Reviewer A/B) and orchestrator behavior section — these are already generic
