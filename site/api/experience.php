<?php
// Table 3: jobs grouped by the work experience they ask for.
// experience.php
// Same math as experience_summary in db/views.sql, run on Ellen's table.
// Ellen's columns are text and some numbers have commas ("58,130"), so each
// one goes through CAST(NULLIF(REPLACE(...))). Without it MySQL reads "58,130"
// as 58, and the 6 jobs with a "—" wage count as $0 (same fix as Ellen's
// view_wage_by_ai_exposure).
require __DIR__ . "/_feed.php";
send_rows($mysql, "SELECT WorkExperience,
       COUNT(*) AS Jobs,
       ROUND(AVG(CAST(NULLIF(REPLACE(REPLACE(TRIM(EmploymentChangePct), ',', ''), '—', ''), '') AS DECIMAL(12,2))), 1) AS AvgChangePct,
       ROUND(AVG(CAST(NULLIF(REPLACE(REPLACE(TRIM(MedianWage2025), ',', ''), '—', ''), '') AS DECIMAL(12,2)))) AS AvgMedianWage,
       ROUND(100 * SUM(AIExposure IN ('High', 'Very high')) / COUNT(*), 1) AS HighExposurePct
FROM aijobs_categorized
GROUP BY WorkExperience
ORDER BY FIELD(WorkExperience, 'None', 'Less than 5 years', '5 years or more')");
