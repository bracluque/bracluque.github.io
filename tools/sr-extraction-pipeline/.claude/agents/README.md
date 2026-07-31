# Worker subagent definitions (placeholder)

Will hold the generic worker definitions, adapted from the original ESD agents:

- `reviewer-a-worker.md`
- `reviewer-b-worker.md`
- `reconciler-worker.md`

Each worker's core discipline (process the full batch before returning, save immediately, skip existing non-empty files, return a compact summary only, never read the other reviewer's drafts) is already project-agnostic in the original — the generalization here is mostly deleting ESD-specific field references from the worker prompts.
