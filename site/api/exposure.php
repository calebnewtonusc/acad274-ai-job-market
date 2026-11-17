<?php
// Table 2: jobs grouped by AI exposure level, Low to Very high.
// exposure.php
require __DIR__ . "/_feed.php";
send_rows($mysql, "SELECT * FROM exposure_summary
  ORDER BY FIELD(AIExposure, 'Low', 'Moderate', 'High', 'Very high')");
