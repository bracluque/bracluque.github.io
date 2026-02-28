# Research Ideation Skill for Claude Code

## Description
Generate and refine research questions from empirical puzzles, policy changes, or datasets. Helps identify viable identification strategies and locate relevant literature.

## Activation
Place this file in `.claude/skills/` and type `/research-ideation` in a Claude Code session.

## Capabilities
- Generate research questions from phenomena, datasets, or policy changes
- Identify potential identification strategies (DiD, RDD, IV, matching)
- Assess data availability and feasibility
- Map connections to existing literature
- Evaluate contribution relative to what is already known
- Stress-test proposed designs for threats to validity

## Usage Instructions

### From a policy change
```
> /research-ideation

> In 2018, Peru introduced a law requiring municipalities above
  20,000 residents to publish public procurement contracts online.
  What research questions could I answer with this natural experiment?
  What data would I need?
```

### From a dataset
```
> /research-ideation

> I have access to administrative records on criminal prosecution
  outcomes in Peru from 2010-2023, linked to defendant characteristics.
  What are the most important and feasible research questions I could
  address with this data? What identification challenges would I face?
```

## Output

For each proposed research question, the skill provides:
1. **Question**: Precise empirical formulation
2. **Identification strategy**: How you would estimate causal effects
3. **Key threats**: Main threats to validity and how to address them
4. **Data needed**: What data sources to collect
5. **Literature gap**: How this contributes beyond existing work
6. **Feasibility**: Realistic assessment of tractability

## Notes
- Designed to be a brainstorming partner, not a decision-maker
- Always verify data availability independently
- The best research questions often combine good timing with good data
