# Project: AI and the Job Market

Living doc. Update it when the group decides something, and log the decision in
`decisions.md`.

## What we pitched (M0, Oct 27)

- Show the impact of AI on the job market: did it create more jobs or fewer?
- Changes in the US hiring rate after generative AI tools launched
- How recent college grads are affected
- Compare unemployment before and after AI went mainstream
- Data from 2021 to 2026, filterable by date

Sources cited in the pitch:

- Forbes, entry-level job changes and new grads (Aug 2026)
- YCharts, US hires rate total nonfarm
- High5Test, AI job creation statistics
- IntuitionLabs, AI and entry-level hiring data

## What the reviewers want from us

Something that isn't one of the dozens of existing analyses, a clear audience, and
a simulation that gives that audience something. See `course/README.md`.

## The open questions, in order

1. **Who is this for?** Default guess to test in M2 interviews: USC students picking
   a major or first job. [NEED: group decision]
2. **The one question the site answers**, one sentence. [NEED: group decision]
3. **Which datasets we combine.** Ellen found and categorized an "AI jobs" dataset
   in a Google Sheet. [NEED: original source link and the sheet link]
4. **Three core assertions** the data will test (Final Build needs at least three).
5. **The interactive piece**: reviewers suggested the user enters their job or
   field and sees how AI affects it.

## Dataset candidates (check each before committing)

The course wants multiple tables combined through views. Every candidate below
shares a key with the others (SOC occupation code, industry code, or date), which
is what makes the join possible. None of these are verified yet.

| Dataset                                                         | What it adds                                   | Join key            |
| --------------------------------------------------------------- | ---------------------------------------------- | ------------------- |
| Ellen's AI jobs dataset                                         | the core list                                  | [NEED: check]       |
| BLS JOLTS                                                       | openings, hires, layoffs by industry and month | industry, month     |
| BLS OES / OEWS                                                  | employment and wages by occupation             | SOC code            |
| O\*NET                                                          | tasks and skills per occupation                | SOC code            |
| AI exposure scores (e.g. Eloundou et al. 2023, "GPTs are GPTs") | how exposed each occupation is                 | SOC code            |
| Job postings (scraped or a Kaggle set)                          | emerging roles, pay                            | title mapped to SOC |
| Layoffs.fyi                                                     | tech layoffs by company and date               | date, company       |

Rules from the course: the class server can't take a giant file (trim or aggregate
first), at least 100 imported rows, and every number on the site needs a citation.

## What Ellen's dataset actually is (checked 2026-11-10)

`data/raw/aijobs_categorized.xlsx`, cleaned copy in `data/clean/aijobs_categorized.csv`.
831 occupations, 21 categories, keyed by SOC code (`OccupationCode`). Columns:
employment 2025 and projected 2035 (thousands), change and percent change, annual
openings, median wage 2025, education, experience, training, and `AIExposure`
(Low / Moderate / High / Very high). Ellen's guide tab says it's already imported as
`ellenjun_aijobs` with category views.

Two things to settle before we build claims on it:

- **Where AIExposure comes from.** The four buckets hold 213, 206, 206 and 206
  occupations, almost exactly quarters, which looks like someone ranked a score and
  cut it into quartiles. We need that score's source to cite it (Final Build requires
  citations), and quartiles mean "Low" is relative, not absolute.
- **What we join to it.** It's one table. SOC code is the key that makes the
  "not just Googling" part possible: O*NET tasks per occupation, BLS OEWS wages by
  state or metro, and published AI exposure scores (Felten et al. AIOE, Eloundou
  et al.) all use SOC codes. A view joining projected growth to an independent
  exposure score is the first real cross-dataset claim.
