<?php
// Table 1 and the zoom panel's top level: every field with its totals.
// fields.php
require __DIR__ . "/_feed.php";
send_rows($mysql, "SELECT * FROM field_summary ORDER BY HighExposurePct DESC");
