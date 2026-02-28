# Academic Paper Writer for Claude Code

## Description
Draft and structure sections of economics papers with proper academic style. Designed for introduction, results, and conclusion sections following conventions of top economics journals.

## Activation
Place this file in `.claude/skills/` and type `/academic-writer` in a Claude Code session.

## Capabilities
- Introduction drafting (motivation, contribution, roadmap)
- Results section writing (coefficient interpretation, robustness narrative)
- Conclusion writing (summary, policy implications, future research)
- Abstract drafting in NBER/AEA style
- Table and figure notes
- Response to referee comments

## Usage Instructions

### Writing an Introduction
```
> /academic-writer

> Write the introduction for a paper with the following setup:
  - Topic: Effect of land reform on distributional beliefs in Peru
  - Identification: IV strategy using historical reform intensity
  - Main finding: Areas with greater redistribution show less perceptual bias
  - Contribution: First paper linking historical land redistribution to
    subjective inequality perceptions using IV
  - Target journal: Journal of Development Economics
```

### Writing Results Narrative
```
> /academic-writer

> Write the results section narrative for Table 3 in my paper.
  The table shows [paste your table or describe the results].
  The key result is that a 1pp increase in X leads to a Y% change in Z
  (significant at 5%). Column (2) adds controls and the estimate is stable.
  Column (3) uses a different specification and the result holds.
```

## AEA Introduction Structure
1. Hook: motivating fact or puzzle (1 paragraph)
2. What this paper does (1 paragraph)
3. Main findings (1-2 paragraphs)
4. Contribution to literature (2-3 paragraphs)
5. Roadmap (1 paragraph)

## Notes
- Specify target journal so the style can be calibrated appropriately
- Provide actual numbers from your results, not placeholders
- The draft will need editing to reflect your specific institutional context
- Never submit AI-generated text without careful review and revision
