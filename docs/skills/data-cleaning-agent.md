# Data Cleaning Agent for Claude Code

## Description
Automated data cleaning pipeline for survey and administrative data. Produces documented, reproducible cleaning scripts with a full data audit trail.

## Activation
Place this file in `.claude/skills/` and type `/data-cleaning` in a Claude Code session.

## Capabilities
- Automated variable inspection and audit (missingness, outliers, distributions)
- Recoding and harmonization across survey waves
- Merge diagnostics (_merge variable checks, many-to-many warnings)
- Outlier detection and winsorization
- Variable labeling and value labeling
- Creation of analysis-ready datasets with codebook

## Usage Instructions

1. Tell Claude: "Read the file [path/to/data.dta] and generate a full data audit."
2. Claude will inspect the data and report: N, missing values per variable, value ranges, suspicious patterns.
3. Follow up: "Now write a cleaning do-file that [specific cleaning tasks]."
4. The agent produces a fully annotated, reproducible cleaning script.

## Example Workflow
```
> /data-cleaning

> Read data/raw/enaho_2022.dta and give me:
  1. Number of observations and variables
  2. Variables with >10% missing
  3. Numeric variables with potential outliers (>3 SD from mean)
  4. Any duplicate observations

> Now write a cleaning do-file that:
  - Drops observations missing the primary outcome
  - Winsorizes income at the 1st and 99th percentile
  - Creates per-capita income using household size
  - Labels all variables in English
  - Saves to data/clean/enaho_2022_clean.dta
```

## Output
- Annotated Stata do-file or R script
- Data quality report (missing values, outlier summary)
- Before/after comparison of key variables
- Codebook for cleaned dataset

## Notes
- Always preserves raw data (never overwrites originals)
- Logs all transformations for reproducibility
- Flags decisions that require researcher judgment
