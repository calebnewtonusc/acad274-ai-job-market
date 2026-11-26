<?php
// Table 2: jobs grouped by AI exposure level, Low to Very high.
// exposure.php
// Same math as exposure_summary in db/views.sql, run on Ellen's table.
// Ellen's columns are text and some numbers have commas ("58,130"), so each
// one goes through CAST(NULLIF(REPLACE(...))). Without it MySQL reads "58,130"
// as 58, and the 6 jobs with a "—" wage count as $0 (same fix as Ellen's
// view_wage_by_ai_exposure).
require __DIR__ . "/_feed.php";
send_rows($mysql, "SELECT AIExposure,
       COUNT(*) AS Jobs,
       ROUND(SUM(CAST(NULLIF(REPLACE(REPLACE(TRIM(Employment2025), ',', ''), '—', ''), '') AS DECIMAL(12,2))), 1) AS Employment2025,
       ROUND(AVG(CAST(NULLIF(REPLACE(REPLACE(TRIM(EmploymentChangePct), ',', ''), '—', ''), '') AS DECIMAL(12,2))), 1) AS AvgChangePct,
       ROUND(AVG(CAST(NULLIF(REPLACE(REPLACE(TRIM(MedianWage2025), ',', ''), '—', ''), '') AS DECIMAL(12,2)))) AS AvgMedianWage
FROM aijobs_categorized
GROUP BY AIExposure
ORDER BY FIELD(AIExposure, 'Low', 'Moderate', 'High', 'Very high')");
