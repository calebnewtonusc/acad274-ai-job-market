# Database

Owner: Ellen. Hosted on [NEED: whose iyaserver account].

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
