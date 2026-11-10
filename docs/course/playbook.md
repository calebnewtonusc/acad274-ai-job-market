# The course's code patterns, condensed

Each pattern here is how Dent taught it, so the code stays readable for the whole
group. The full lecture with every step is linked under each heading.

## 1. Get data into MySQL (Week 11, Data exercise)

1. Open the dataset in Google Sheets. Rename headers: no spaces, slashes, `+/-` or
   parentheses (`PlusMinus`, not `+/-`).
2. Trim it, since the class server chokes on files over about 10MB, so cut rows or
   pre-aggregate. Keep the original in `data/raw/`.
3. File > Download > CSV into `data/clean/`.
4. phpMyAdmin > the group database > Import > choose the CSV > check "The first line
   of the file contains the table column names" > Import.
5. Check column types (numbers should not be varchar). Fix in Structure, Empty, re-import.
6. Rename the table (Operations > Rename) to something short.
7. Add an `id` INT primary key with auto increment if you'll ever edit rows (Week 12).
   After that, re-imports need the column list pasted in and "skip 1 row".
8. Export the database (Export tab) as a backup before anything risky. Drop has no undo.

M1 needed at least 100 imported rows (or 30 hand-entered) and two views.

## 2. Views: where the insight lives (Week 11, Creating Views)

A view is a saved SELECT. Our cross-dataset story lives here: views can JOIN tables,
so "AI exposure of an occupation" + "job openings for that occupation" + "wage"
becomes one row per occupation.

```sql
-- example shape, rename to our real tables
CREATE VIEW occupation_ai_summary AS
SELECT o.soc_code, o.title,
       AVG(e.exposure_score)  AS AvgExposure,
       SUM(p.postings)        AS TotalPostings,
       AVG(w.median_wage)     AS MedianWage
FROM occupations o
JOIN ai_exposure e ON e.soc_code = o.soc_code
JOIN postings p    ON p.soc_code = o.soc_code
JOIN wages w       ON w.soc_code = o.soc_code
GROUP BY o.soc_code, o.title;
```

Rules from the aggregate SQL lectures (Weeks 6 and 7):

- Every aggregate needs an alias (`AVG(x) AS AvgX`) or php can't read it.
- With GROUP BY, every non-aggregate column in SELECT must be in the GROUP BY.
- GROUP BY doesn't sort. Add ORDER BY.
- `SUM(a)/SUM(b)` for rates, not `AVG(a/b)`, when groups have different sizes.
- Save views in phpMyAdmin (Create View under the results) or DataGrip (New > View).
- Final Build wants grids built from views that draw conclusions, not raw rows.

## 3. Database accounts (Week 11)

One member hosts the DB. In cPanel > MySQL Databases > Add New User, then Add User
to Database:

- `<owner>_site`: SELECT only. This is the one in `site/api/config.php`.
- `<owner>_team`: SELECT, INSERT, UPDATE, CREATE VIEW, for teammates in DataGrip.
- cPanel > Remote MySQL > add `%` so DataGrip on laptops can connect.

Teammates never get the owner's cPanel login.

## 4. php to JSON feed (Week 13)

The working version is `site/api/feed.example.php`, and the core of it looks like this:

```php
<?php
header("Access-Control-Allow-Origin: *");   // must be first
require "config.php";                       // $mysql connection
$sql = "SELECT * FROM occupation_ai_summary";
$results = $mysql->query($sql);
$json_array = array();
while ($currentrow = $results->fetch_assoc()) {
    $json_array[] = $currentrow;
}
echo json_encode($json_array, JSON_UNESCAPED_UNICODE);
$mysql->close();
```

Feeds can take filters through the query string (Week 14): `feed.php?limit=10&field=Tech`.
Dent's version pastes `$_GET` straight into SQL and notes it's unsafe in production.
Ours whitelists column names and uses `intval`, see the example file.

One feed with a `stat=` switch can serve many charts (the Gaming Statistics
group's `games.php?stat=by_genre` pattern from the Week 14 M2 highlights).

## 5. Load a feed into a table (Week 13)

```js
let data = [];
let jsonurl =
  "https://OWNER.webdev.iyaserver.com/acad274/ai-jobs/api/occupations.php";
jsonurl += window.location.search; // pass ?filters through
$(document).ready(function () {
  $.ajax({ url: jsonurl, type: "GET" }).done(function (raw) {
    data = JSON.parse(raw);
    output();
  });
});
const output = function () {
  let table = "<table><tr><th>Occupation</th><th>AI exposure</th></tr>";
  for (let i = 0; i < data.length; i++) {
    table +=
      "<tr><td>" +
      data[i].title +
      "</td><td>" +
      data[i].AvgExposure +
      "</td></tr>";
  }
  table += "</table>";
  $("#results").html(table);
};
```

Field names are case-sensitive and must match the SQL aliases.

## 6. Feed into Chart.js (Weeks 11, 14)

```js
let dbdata = [];
for (let i = 0; i < data.length; i++) {
  let chartdata = [];
  chartdata.push(parseFloat(data[i].AvgExposure));
  chartdata.push(parseFloat(data[i].TotalPostings));
  dbdata.push({ label: data[i].title, data: chartdata, borderWidth: 1 });
}
new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: { labels: ["AI exposure", "Postings"], datasets: dbdata },
  options: { scales: { y: { beginAtZero: true } } },
});
```

Different scales (exposure 0 to 1 vs postings in thousands) need a second y axis.
The Week 14 AI exercise walks through asking an AI for exactly that change.

## 7. Interactivity that counts (Week 14, M3 notes)

Chart library defaults (legend toggles, tooltips, map zoom) do **not** count.
Ideas Dent listed: save user data in cookies or localStorage, let users enter their
own info and re-run the query, branching paths through the data. For us: a user picks
their job or major and a slider for adoption speed, and the chart and text update.

## 8. Scripted narrative (Weeks 8, 15)

Storyboard first (M3 deliverable), then build. Hide everything, then chain steps:

```js
$("#m2, #m3, #chart, #table").hide();
function sequence1() {
  $("#m1").fadeOut(500);
  $("#m2").delay(500).fadeIn(1000);
  setTimeout(sequence2, 4000);
}
function sequence2() {
  $("#m2").fadeOut(500);
  $("#chart").show().animate({ left: 0 }, 1200);
  setTimeout(sequence3, 3500);
}
function sequence3() {
  $("#table").slideDown(2000);
}
$("#start").on("click", sequence1);
```

Starter: https://iyawebdev.com/acad274/lecture_examples/presentation_sample_start.html

## 9. GitHub + iyaserver (Week 12)

- Repo lives on GitHub. Everyone clones, pulls before working, pushes small commits.
- One member's iyaserver hosts the official site for grading. Others can mirror it
  on their own space for testing.
- php can't run from your laptop. Test on the server (cPanel File Manager or SFTP).
- Turn on php errors: cPanel > MultiPHP INI Editor > your domain > display_errors on.
