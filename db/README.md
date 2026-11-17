# Database

Owner: Ellen. Hosted on Ellen's iyaserver account, database `ellenjun_aijobs`.

- `schema.sql`: the tables, exported from phpMyAdmin (Export tab, structure only) after each change
- `views.sql`: every view's CREATE statement, so nobody has to rebuild them by hand
- Import log below: one line per import, what file, what was cleaned

## Accounts (Week 11 lecture)

- `OWNER_site`: SELECT only. Used by `site/api/config.php`.
- `OWNER_team`: SELECT, INSERT, UPDATE, CREATE VIEW. For teammates in DataGrip.
- Remote MySQL in cPanel has `%` added so laptops can connect.

## Import log

| Date | File in data/clean | Table | Rows | What was cleaned |
| --- | --- | --- | --- | --- |

## Feeds (site/api)

Run `views.sql` in phpMyAdmin first. The views and `jobs.php` expect the table to be called `aijobs`.

- `fields.php`: one row per field (Table 1, zoom panel top level)
- `exposure.php`: one row per AI exposure level (Table 2)
- `experience.php`: one row per work experience level (Table 3)
- `jobs.php?field=Tech` or `jobs.php?code=15-1252`: jobs in a field, or one job
