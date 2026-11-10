# ACAD 274 group project: what's graded and when

Pulled from Brightspace on 2026-11-10 (every lecture, assignment and announcement).
Full instructions for each item are in `assignments/`, word for word.

## How the grade works

- Labs and participation 30%, assignments 30%, **group project 40%**.
- All milestones combine into one group grade, Final Build weighted the most.
- Then everyone fills out a peer and self survey. Most people get 100% of the group
  grade. Someone who disappeared or skipped their agreed role gets less, someone who
  carried extra can get a little more. **Agree on roles in writing** (`docs/team.md`),
  because Dent grades you against what the group agreed you'd do.
- Assignments lose 10% per day late. Late labs get half credit for a week.

## What's already done

| Item                                            | Status                                                                                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| M0 pitch, 3 topics (10 pts)                     | Submitted 10/27, **10/10**. "Decent three topics, well defined and presented, solid initial data sources and proposed data structures." |
| Topic pick                                      | AI and the Job Market, rated **green / recommended** (see `feedback/`)                                                                  |
| M1 competitive analysis, designs, data (15 pts) | Submitted 11/10 as a Canva link, not graded yet                                                                                         |
| Design board (Mural)                            | Submitted 11/10, locked view-only by Dent                                                                                               |

## What's left, in order

### Wed Nov 11, 11:59pm. Individual lab: design critique (0.25 pts, no late credit)

Every member posts feedback on **G5's Measles in the U.S.** Mural board in the
Discussion forum "Milestone 1 design feedback", then pastes the post link in the lab.

### Mon Nov 23, 6pm. Individual lab: two project visualizations (1 pt each person)

Each person makes a web page with real project data in a table plus two
visualizations of it (they don't have to be live yet). The group then picks the best
ones for M2, which is why it's due the day before. Aim for variety, not bar + pie.

### Tue Nov 24, 2pm. Milestone 2 (25 pts)

- [ ] **User research**: talk to real audience members, at least one industry person
      (faculty count). Doc with actual quotes, each interviewee's name and role, and
      what conclusions they'd want from our data.
- [ ] **JSON feeds**: one or more php pages that output DB query results as JSON.
- [ ] **3 data tables x 3 visualizations each = 9 visualizations**, on web pages,
      built from real DB output (static screenshots allowed for M2).
- [ ] **Interactive ideas**: written ideas for making the charts interactive.
- [ ] **Initial site** with one shared external stylesheet:
  - [ ] Homepage with purpose and assumptions
  - [ ] Resources page: seminal sources, one sentence summary each
  - [ ] Data page(s) with the tables and visualizations

### Fri Dec 4, 11:59pm. Milestone 3 alpha (50 pts)

- [ ] Complete site, uniform design across pages, logo or nameplate
- [ ] Front page with a strong claim and original graphics
- [ ] Data grids from **views that draw conclusions** (aggregates, not raw rows), 2 to 3
- [ ] **Live** visualizations pulling from the DB through our feeds
- [ ] Interactive narrative placeholder page with the detailed walkthrough
- [ ] **Storyboards** (hand drawn is fine) of a timed, scripted narrative sequence
- [ ] **User testing** doc: reactions, proposed changes for the final
- [ ] Nothing broken: buggy features go in clearly labeled as alpha, with a stable version

### Thu Dec 10, 11:59pm. Final Build (100 pts)

- [ ] Live on one member's iyaserver space (anywhere else needs the extra stack doc,
      schema diagram, code walkthrough and a zip on iyaserver)
- [ ] Consistent design, clear navigation and narrative path
- [ ] **At least 3 core assertions**, each on its own page or section
- [ ] **Interactive narrative** that leads users through the conclusions
- [ ] **Interactive visualizations**: sliders, user-entered data, scenario buttons.
      Built-in chart library features (legend toggles, map zoom) **don't count**.
- [ ] Animated changes when data updates
- [ ] Citations on the page (click to reveal works well)
- [ ] Resources page including opposing viewpoints
- [ ] Pages run off JSON, live ajax or pasted in with the original SQL in a comment
- [ ] **Summary doc** with links for every requirement: final site URL, user testing
      changes, core premise and assertions, narrative explanation, interactive viz
      explanation, DB name + schema screenshot + how the datasets were combined
      (which view joins what), and a critical analysis of our conclusions
- [ ] Everyone fills out the peer and self evaluation

## What the reviewers said about our topic

Recommended. "Strong potential for interest and impact, offset by how
different/innovative your work could be versus (widespread) existing research."

- Can we find insight that isn't already in the dozens of existing analyses?
- Let users enter their desired job or field and see how AI is affecting it.
- Be very clear on the target audience and lead with what the simulation gives them.
- They liked the split between **new jobs appearing** and **existing jobs
  disappearing**. Forward-deployed engineer was named as an emerging role.
- Consider scraping job listings (Google Jobs) for emerging roles and pay.
- "Most importantly, identify who this data is for and what story you're trying to tell."

## Course people and places

- Prof. Patrick Dent, dent@usc.edu. Office hours T/Th 11:30am outside IYH210,
  1:30pm in IYH210, Zoom Mon 2 to 3pm and Wed 3 to 4pm.
- Course assistant Justin Zhu, Zoom M/W 9 to 10pm.
- Servers and roster: https://iyawebdev.com/acad274/20263_students.html
- cPanel: https://webdev.iyaserver.com/cpanel . Database host `webdev.iyaserver.com:3306`.
- Lecture example files: https://iyawebdev.com/acad274/lecture_examples/
