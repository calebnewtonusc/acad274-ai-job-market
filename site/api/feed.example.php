<?php
// Example JSON feed in the course's Week 13/14 pattern.
// Copy it, rename it (occupations.php), and change the view name and filters.
header("Access-Control-Allow-Origin: *"); // must stay the first line of output
header("Content-Type: application/json; charset=utf-8");
require "config.php";

// Base query: read from a VIEW, not a raw table (views hold our conclusions).
$sql = "SELECT * FROM occupation_ai_summary WHERE 1=1";

// Optional filters from the query string, e.g. feed.php?field=Tech&limit=10
// Dent's demo pastes $_GET straight into SQL; we escape and whitelist instead.
if (!empty($_GET["field"])) {
    $field = $mysql->real_escape_string($_GET["field"]);
    $sql .= " AND field = '$field'";
}

// Only allow sorting by columns we list here.
$sortable = ["AvgExposure", "TotalPostings", "MedianWage"];
if (!empty($_GET["sortorder"]) && in_array($_GET["sortorder"], $sortable, true)) {
    $sql .= " ORDER BY " . $_GET["sortorder"] . " DESC";
}

if (!empty($_GET["limit"])) {
    $sql .= " LIMIT " . intval($_GET["limit"]);
}

$results = $mysql->query($sql);
if (!$results) {
    http_response_code(500);
    echo json_encode(["error" => $mysql->error]);
    exit();
}

$json_array = array();
while ($currentrow = $results->fetch_assoc()) {
    $json_array[] = $currentrow;
}
echo json_encode($json_array, JSON_UNESCAPED_UNICODE);
$mysql->close();
