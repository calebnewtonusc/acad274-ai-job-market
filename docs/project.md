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
