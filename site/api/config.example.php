<?php
// Copy this file to config.php (same folder) and fill it in.
// config.php is gitignored, so the password never reaches GitHub.
// Use the SELECT-only account (Week 11 lecture: Creating db user accounts).
$host   = "webdev.iyaserver.com";
$userid = "OWNER_site";      // e.g. ellen_site
$userpw = "PASSWORD_HERE";
$db     = "OWNER_aijobs";    // e.g. ellen_aijobs

// PHP 8 throws if the connection fails, so catch it and answer in JSON.
try {
    $mysql = new mysqli($host, $userid, $userpw, $db);
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "db connection failed"]);
    exit();
}
$mysql->set_charset("utf8mb4");
