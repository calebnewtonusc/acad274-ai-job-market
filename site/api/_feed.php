<?php
// Shared helper for every feed: run one SELECT, answer with a JSON array.
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
require __DIR__ . "/config.php";

// Uses query() + fetch_assoc, the same calls the tested feed.example.php uses,
// so it doesn't depend on mysqlnd being on the server.
function send_rows($mysql, $sql) {
    try {
        $result = $mysql->query($sql);
        $rows = [];
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
    } catch (mysqli_sql_exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "query failed"]);
        exit();
    }
    echo json_encode($rows, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
    $mysql->close();
}
