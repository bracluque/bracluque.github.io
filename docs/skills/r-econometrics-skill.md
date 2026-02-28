# R Econometrics Skill for Claude Code

## Description
Causal inference workflows in R using fixest, lfe, rdrobust, and did packages for high-dimensional fixed effects and modern econometric methods.

## Activation
Place this file in `.claude/skills/` and type `/r-econometrics` in a Claude Code session.

## Capabilities
- OLS and IV with high-dimensional FE (fixest::feols, fixest::feiv)
- Difference-in-Differences with staggered adoption (did::att_gt)
- Regression Discontinuity (rdrobust)
- Event study plots (ggplot2 + broom)
- Clustered, heteroskedasticity-robust, and bootstrap standard errors
- Publication-ready tables (modelsummary, stargazer)

## Usage Instructions

### Fixed Effects Regression
Tell Claude: "Run a panel regression of [outcome] on [treatment] with [unit] and [time] fixed effects, clustering standard errors at the [cluster] level."

### Staggered DiD
Tell Claude: "Implement Callaway-Sant'Anna (2021) DiD estimator for a staggered rollout where different units received [treatment] in different years."

### RDD
Tell Claude: "Run an RDD where the cutoff is [threshold] on [running variable]. Use MSE-optimal bandwidth selection and plot the discontinuity."

## Example Output
```r
library(fixest)

# Two-way FE with clustering
m1 <- feols(log_income ~ schooling + age | district + year,
            cluster = ~district,
            data = panel_data)

# Export table
library(modelsummary)
modelsummary(list("OLS" = m1),
             stars = c("*" = 0.10, "**" = 0.05, "***" = 0.01),
             output = "tables/table1.tex")
```

## Notes
- Requires: fixest, did, rdrobust, modelsummary, ggplot2
- Install: install.packages(c("fixest", "did", "rdrobust", "modelsummary"))
- For staggered DiD, always check parallel trends with pretreatment coefficients
