<?php
// Table 1 and the zoom panel's top level: one row per field with its totals.
// fields.php
// Same math as field_summary in db/views.sql, run straight on Ellen's table so
// it works before the view is created. Low/Moderate/High/VeryHigh are the
// exposure mix the stacked chart (2b) uses.
// Ellen's columns are text and some numbers have commas ("58,130"), so each
// one goes through CAST(NULLIF(REPLACE(...))). Without it MySQL reads "58,130"
// as 58, and the 6 jobs with a "—" wage count as $0 (same fix as Ellen's
// view_wage_by_ai_exposure).
require __DIR__ . "/_feed.php";
send_rows($mysql, "SELECT Category,
       COUNT(*) AS Jobs,
       ROUND(SUM(CAST(NULLIF(REPLACE(REPLACE(TRIM(Employment2025), ',', ''), '—', ''), '') AS DECIMAL(12,2))), 1) AS Employment2025,
       ROUND(AVG(CAST(NULLIF(REPLACE(REPLACE(TRIM(EmploymentChangePct), ',', ''), '—', ''), '') AS DECIMAL(12,2))), 1) AS AvgChangePct,
       ROUND(AVG(CAST(NULLIF(REPLACE(REPLACE(TRIM(MedianWage2025), ',', ''), '—', ''), '') AS DECIMAL(12,2)))) AS AvgMedianWage,
       ROUND(100 * SUM(AIExposure IN ('High', 'Very high')) / COUNT(*), 1) AS HighExposurePct,
       SUM(AIExposure = 'Low') AS Low,
       SUM(AIExposure = 'Moderate') AS Moderate,
       SUM(AIExposure = 'High') AS High,
       SUM(AIExposure = 'Very high') AS VeryHigh
FROM aijobs_categorized
GROUP BY Category
ORDER BY HighExposurePct DESC");
