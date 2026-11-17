<?php
// The zoom panel's inner level and the job detail bars.
// jobs.php?field=Business%20%26%20Finance   every job in one field
// jobs.php?code=13-1071                       one job
// jobs.php                                    every job (831 rows)
require __DIR__ . "/_feed.php";

$cols = "Category, Occupation, OccupationCode, Employment2025, Employment2035,
         EmploymentChange, EmploymentChangePct, MedianWage2025, Education,
         WorkExperience, JobTraining, AIExposure";

if (!empty($_GET["code"])) {
    $code = $mysql->real_escape_string($_GET["code"]);
    send_rows($mysql, "SELECT $cols FROM aijobs WHERE OccupationCode = '$code'");
} elseif (!empty($_GET["field"])) {
    $field = $mysql->real_escape_string($_GET["field"]);
    send_rows($mysql, "SELECT $cols FROM aijobs WHERE Category = '$field' ORDER BY Employment2025 DESC");
} else {
    send_rows($mysql, "SELECT $cols FROM aijobs ORDER BY Category, Occupation");
}
