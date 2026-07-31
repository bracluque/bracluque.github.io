# Orchestrator prompts (placeholder)

Will hold the generic orchestrator prompts, one per stage, adapted from the original ESD prompts:

- `01_REVIEWER_A_ORCHESTRATOR.md`
- `02_REVIEWER_B_ORCHESTRATOR.md`
- `03_RECONCILER_ORCHESTRATOR.md`

The dispatch logic (chunk size, parallel waves, skip-logic resumption, compact logging) is already project-agnostic in the original — generalizing means removing the ESD-specific paths and paper counts baked into the example commands.
