# Stata Regression Skill for Claude Code

## Description
Automate regression analysis in Stata with proper diagnostics, clustered standard errors, fixed effects, and publication-ready tables using esttab/outreg2.

## Activation
Place this file in `.claude/skills/` and type `/stata-regression` in a Claude Code session.

## Capabilities
- OLS, IV (ivreg2/ivregress), Difference-in-Differences, RDD (rdrobust)
- Clustered and heteroskedasticity-robust standard errors
- High-dimensional fixed effects (reghdfe)
- Publication-ready tables (esttab, outreg2)
- Pre-estimation diagnostics (multicollinearity, heteroskedasticity)
- Post-estimation tests (Hausman, overidentification, weak instruments)

## Usage Instructions

### Basic OLS
Tell Claude: "Run an OLS regression of [outcome] on [treatment] and [controls], clustered by [cluster variable]."

### IV/2SLS
Tell Claude: "Run a 2SLS regression of [outcome] on [endogenous variable] instrumented by [instrument], controlling for [controls] and fixed effects at the [unit] level."

### DiD
Tell Claude: "Set up a difference-in-differences specification where [treatment group] received [intervention] starting in [year]. Use the full panel from [start] to [end] and test for parallel trends."

## Example Output
```stata
* OLS with clustered SE and fixed effects
reghdfe log_income years_schooling age i.year, ///
    absorb(district_id) ///
    vce(cluster district_id)

esttab using "tables/table1.tex", ///
    replace label se star(* 0.10 ** 0.05 *** 0.01) ///
    title("Main Results") ///
    stats(N r2_a, labels("Observations" "Adj. R-squared"))
```

## Notes
- Requires: reghdfe, esttab (ssc install reghdfe; ssc install estout)
- Always check balance tables before presenting main results
- Report first-stage F-statistics for IV specifications
