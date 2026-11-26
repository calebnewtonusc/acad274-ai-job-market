<?php
// The zoom panel's inner level and the job detail bars.
// jobs.php?field=Business%20%26%20Finance   every job in one field
// jobs.php?occupation=Accountants%20and%20auditors   one job
// jobs.php                                    every job (831 rows)
require __DIR__ . "/_feed.php";

$cols = "Category, Occupation, Employment2025, Employment2035,
         EmploymentChange, EmploymentChangePct, MedianWage2025, Education,
         WorkExperience, JobTraining, AIExposure";

if (!empty($_GET["occupation"])) {
    $occ = $mysql->real_escape_string($_GET["occupation"]);
    send_rows($mysql, "SELECT $cols FROM aijobs_categorized WHERE Occupation = '$occ'");
} elseif (!empty($_GET["field"])) {
    $field = $mysql->real_escape_string($_GET["field"]);
    send_rows($mysql, "SELECT $cols FROM aijobs_categorized WHERE Category = '$field' ORDER BY CAST(NULLIF(REPLACE(REPLACE(TRIM(Employment2025), ',', ''), '—', ''), '') AS DECIMAL(12,2)) DESC");
} else {
    send_rows($mysql, "SELECT $cols FROM aijobs_categorized ORDER BY Category, Occupation");
}
