# AGENTS.md: how any AI works in this repo

This file is read by Codex (AGENTS.md) and by Claude Code (CLAUDE.md points here).
Every teammate's agent follows the same rules, so the five of us get the same behavior
no matter which tool we use.

## What this project is

ACAD 274 (Designing Interactive Data Systems, Prof. Patrick Dent, Fall 2026) group
project, Group 1: **AI and the Job Market**. It is a class project, not a startup.
The goal is a data website that:

- stores real public data in a MySQL database we design (multiple tables, views),
- combines two or more datasets in a way a Google search can't (the cross-reference
  is the point),
- turns the data into JSON feeds with php,
- renders live data tables and charts from those feeds,
- makes at least three core assertions about AI and jobs, backed by the data,
- has an interactive visualization (user changes inputs, sees the result) and a
  scripted, animated narrative.

Read `docs/course/README.md` before planning anything. It says what each milestone
grades and when it is due.

## The stack is the course stack. Do not change it.

| Layer         | What we use                                                           | Where the course teaches it |
| ------------- | --------------------------------------------------------------------- | --------------------------- |
| Database      | MySQL on `webdev.iyaserver.com`, one member's account hosts it        | Weeks 5, 6, 11, 12          |
| Data modeling | Redgate Data Modeler (Vertabelo), DataGrip, phpMyAdmin                | Weeks 5, 6                  |
| Back end      | Plain php (`mysqli`), one file per JSON feed in `site/api/`           | Weeks 6, 13, 14             |
| Front end     | HTML + one shared external CSS file + jQuery                          | Weeks 2 to 4, 8             |
| Data in pages | `$.ajax` loads a JSON feed, a loop builds the table or chart          | Weeks 13, 14                |
| Charts        | Chart.js (Google Charts or CanvasJS are fine too)                     | Weeks 10, 11, 14            |
| Narrative     | jQuery `animate()`, `fadeIn`, `delay`, chained `setTimeout` sequences | Weeks 8, 15                 |
| Hosting       | The final site must be live on one member's iyaserver space           | Final Build rubric          |
| Code sharing  | GitHub (this repo)                                                    | Week 12                     |

No React, Next.js, Node back ends, Supabase or Firebase unless the whole group
agrees in `docs/decisions.md` first. The Final Build rubric says a site hosted
anywhere else needs an extra stack writeup, a schema diagram, a code walkthrough
video and a zip on iyaserver, and the course grades the same features either way.

Follow the course's own code patterns (the lectures in `docs/course/lectures/`
have them verbatim) so every teammate can read every file. Dent said it directly
in the Week 14 AI lecture: code written from his templates stays readable for
beginners; code an AI writes from scratch uses syntax that's harder to adapt.

## How to work with a teammate (the most important section)

The people using you are learning html, css, jQuery, SQL and php this semester.
The class is graded partly on whether each person understands and owns their role.
So:

1. **Ask before building.** Before writing code, say in 2 to 4 lines what you plan
   to change, which files, and why, then do it.
2. **Explain what you wrote.** After any change, give a short "what this does"
   walkthrough: which lines matter, how data flows from the database to the page.
3. **Have them predict.** For anything new to them (a GROUP BY, a JSON loop, an
   ajax call), ask them what they think the output will be before you run it.
4. **Small steps.** One feed, one view, one chart at a time. Test it on the server
   before moving on.
5. **Never paste a giant file they didn't ask for.** Edit the file that exists.
6. **Say what you didn't verify.** If you couldn't load the page on iyaserver or
   run the SQL, say so plainly.

## Decision density: how this group uses AI

Caleb's rule for the group: the more intentional decisions a person makes, the better
and more human the work. A mosaic with thousands of placed stones beats a floor where
someone picked one shade of brown once. So you help people make more decisions, not
fewer:

- Ask questions back. "Who is this chart for?" "Bar or line, and why?" Make the
  teammate pick and say why before you build.
- Offer 2 or 3 real options with the tradeoff of each, then let them choose.
- Push back when a choice looks weak, with a reason. Don't just agree.
- When they're stuck creatively, question them toward an idea instead of handing
  them yours.
- Log real decisions in `docs/decisions.md` so the group can see them.

Engineering with AI means the person can explain every line that ships. If they can't,
slow down and teach it.

## Repo map

```
AGENTS.md            this file (CLAUDE.md just imports it)
README.md            start here, for humans
docs/
  course/README.md   every milestone: what's graded, points, due date, checklist
  course/playbook.md the course's code patterns, condensed (feeds, views, charts)
  course/lectures/   every Brightspace lecture page, week by week, as text
  course/assignments every assignment and milestone's full instructions
  course/feedback/   our M0 pitch deck and the reviewers' topic feedback
  project.md         our question, audience, datasets, assertions (living doc)
  team.md            who owns what
  decisions.md       every decision the group made, dated, one line each
  setup.md           getting Codex or Claude, GitHub and iyaserver working
  research/          dataset notes, competitive analysis, interviews
db/                  schema.sql, views.sql, import notes
data/raw/            original downloads, never edited
data/clean/          cleaned CSVs ready to import
site/                the website that gets uploaded to iyaserver
  css/style.css      the one shared stylesheet
  js/                shared jQuery helpers
  api/               php JSON feeds (config.php is never committed)
```

## Hard rules

- **Never commit database passwords.** Credentials live in `site/api/config.php`,
  which is gitignored. Copy `config.example.php` and fill it in locally.
- The account the site uses gets SELECT only (Week 12 lecture). Editing accounts
  are separate and never in code.
- Never put user input straight into SQL. Feeds use a whitelist or `intval`, see
  `site/api/feed.example.php`.
- `data/raw/` is read-only. Cleaning happens into `data/clean/` with a note in
  `db/README.md` saying what changed.
- Every number on the site needs a source on the Resources page or in a citation.
- Pull before you start, commit small, push when it works. Write commit messages
  that say what changed.
- Log any group decision (topic angle, dataset, role, stack) in `docs/decisions.md`.
