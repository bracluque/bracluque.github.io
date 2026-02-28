# Replication Package Linter for Claude Code

## Description
Automated checking and validation of replication packages. Ensures your code is AEA/journal-compliant, all files are present, and the analysis runs end-to-end.

## Activation
Place this file in `.claude/skills/` and type `/replication-lint` in a Claude Code session.

## Capabilities
- Verify folder structure follows AEA Data & Code Availability standards
- Check that all referenced data files exist
- Validate script execution order and dependencies
- Identify hardcoded absolute paths
- Check for missing random seeds
- Generate AEA-compliant README.md template
- Produce a replication checklist

## Usage Instructions

### Full Package Audit
```
> /replication-lint

> Audit my replication package at /path/to/replication/.
  Check:
  1. Folder structure and file organization
  2. Whether all data files referenced in scripts exist
  3. Whether all scripts can be found from the master file
  4. Hardcoded paths or version-specific code
  5. Completeness of the README
```

### Generate README
```
> /replication-lint

> Generate an AEA-compliant README for my replication package.
  The paper is: [paper title]
  Software: Stata 17 + R 4.3
  Key packages: reghdfe, estout, fixest, ggplot2
  Data sources: ENAHO 2015-2022 (restricted access), World Bank Open Data
  Runtime: approximately 2 hours on a standard laptop
```

## AEA Required README Sections
1. Overview
2. Data Availability and Provenance
3. Computational Requirements (software, packages, hardware, runtime)
4. Description of Programs/Code
5. Instructions to Replicators
6. List of Tables and Programs

## Common Issues Found
- `cd "C:/Users/..."` hardcoded paths (use relative paths)
- Missing `set seed` before bootstrap or random assignment
- Data files referenced but not included (use README to note restricted access)
- Packages not documented (use `which estout` to get version)
- Master file missing or not calling all scripts

## Notes
- Run this check before submitting to any journal
- Data with restricted access should be clearly noted with instructions for access
- Consider using a clean machine or container to verify replication
