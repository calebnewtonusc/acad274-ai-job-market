# The two new datasets (pulled 2026-11-17)

Dent said one government table mostly repeats what's already out there. Group picked
"your major: what the gov predicts, how much AI is actually used, how grads are doing".
Pick 2 of the 3 below when we reconvene after interviews.

## 1. How grads in each major are doing (NY Fed)

`clean/grad_outcomes_by_major.csv`, 73 majors + Overall. Source: NY Fed, The Labor Market
for Recent College Graduates, outcomes by major (ACS, grads 22 to 27, 2024 data).
https://www.newyorkfed.org/research/college-labor-market
The `Category` column maps each major to Ellen's job categories so it joins to `aijobs`.
That mapping is our call, check it. Blank = no clean match (Liberal Arts, Philosophy).
Example: Computer Science unemployment 7.0%, Computer Engineering 7.8%.

## 2. How much AI is actually used per job (Anthropic Economic Index)

`clean/observed_ai_use_by_job.csv`, 756 jobs. Source: Anthropic Economic Index,
labor_market_impacts/job_exposure.csv, CC-BY.
https://huggingface.co/datasets/Anthropic/EconomicIndex/tree/main/labor_market_impacts
`ObservedExposure` is a 0 to 1 score built from real Claude usage on each job's tasks.
Joins to `aijobs` on OccupationCode: 755 of our 831 jobs match.
First look: gov "Very high" jobs average 0.24 observed, "High" only 0.06,
"Low" 0.001. So the gov rating and real use agree at the top and split in the middle.
Software Developers 0.29, HR Specialists 0.40.

## 3. What students think (surveys, headline callouts only)

No per-major dataset exists. Use as quotes on the homepage, cite each one:
- Handshake, Class of 2026: 89% think AI could replace entry-level roles (64% a year before). Confirm on Handshake's own report before using.
- Gallup-Lumina 2025: 16% of students already changed majors over AI. https://news.gallup.com/poll/704087/college-students-weigh-impact-majors-careers.aspx
