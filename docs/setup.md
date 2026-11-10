# Setup: 15 minutes, once

## 1. Your AI

- **Codex (ChatGPT EDU)**: get access with the USC Codex guide Caleb sent. For the full
  setup with safety checks and skills, paste this into Codex:
  "Download github.com/calebnewtonusc/usc-codex-setup into a folder called
  usc-codex-setup in my home folder, then follow kit/START-HERE.md"
- **Claude Code**: if you already have Claude, that works the same way. It reads
  `CLAUDE.md`, which points at `AGENTS.md`, so both tools follow the same rules.

## 2. Get this repo

Accept the GitHub invite email first (the invite does nothing until you accept it).
Then either:

- Ask your AI: "Clone github.com/calebnewtonusc/acad274-ai-job-market into my
  home folder and open it", or
- GitHub Desktop (the Week 12 lecture way): File > Clone Repository > pick this repo,
  and set Local path to somewhere you'll find it, not the default.

## 3. The daily loop

1. Pull (GitHub Desktop: Fetch then Pull, or tell your AI "pull the latest").
2. Tell your AI what you're working on and which files are yours (see `docs/team.md`).
3. Let it explain before it edits. Ask it why when you don't follow.
4. Test on the server, since php can't run from your laptop.
5. Commit with a real message, then push.

Good first prompts:

- "Read AGENTS.md and docs/course/README.md, then tell me what my role needs to
  ship for Milestone 2 and by when."
- "Walk me through site/js/data.js line by line before we change anything."
- "Quiz me on GROUP BY with our data before you write the view."

## 4. Server and database

- cPanel: https://webdev.iyaserver.com/cpanel (your USC iyaserver login)
- Turn on php errors: cPanel > MultiPHP INI Editor > your domain > display_errors on
- DataGrip (free with your USC email) connects to `webdev.iyaserver.com`, port 3306,
  with the team DB account Ellen creates. Never use someone else's cPanel login.
- To test the site: copy `site/` to `public_html/acad274/ai-jobs/` on your space.
  For feeds, copy `site/api/config.example.php` to `config.php` on the server and
  fill in the password there. Never commit config.php.
