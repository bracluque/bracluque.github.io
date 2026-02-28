# Literature Review Assistant for Claude Code

## Description
Organize research papers, extract key findings, identify gaps, and create synthesis tables for literature reviews and grant proposals.

## Activation
Place this file in `.claude/skills/` and type `/lit-review` in a Claude Code session.

## Capabilities
- Extract key information from paper abstracts (question, method, data, findings)
- Organize papers by topic, method, or geography
- Identify empirical gaps and conflicting findings
- Generate synthesis tables in Markdown or LaTeX
- Draft literature review paragraphs in academic style
- Suggest related papers based on identified themes

## Usage Instructions

### Option 1: From a list of titles/abstracts
```
> /lit-review

> Here are 10 papers on land reform and inequality.
  For each, extract: (1) research question, (2) identification strategy,
  (3) main finding, (4) data source, (5) country/context.
  Then identify the main empirical gaps.

  [paste abstracts here]
```

### Option 2: From a PDF folder
```
> /lit-review

> Read all PDFs in the folder /papers/land-reform/
  and create a synthesis table organized by identification strategy.
```

## Output Formats

### Synthesis Table (Markdown)
| Paper | Question | Method | Data | Finding |
|-------|----------|--------|------|---------|
| Smith (2020) | ... | DiD | Admin | ... |

### Literature Review Paragraph
"The empirical literature on [topic] can be organized around three identification strategies..."

## Notes
- Works best with abstracts or full-text PDFs in accessible formats
- Does not replace careful reading but accelerates the synthesis process
- Always verify extracted information against original papers
