<?php
// Table 3: jobs grouped by the work experience they ask for.
// experience.php
require __DIR__ . "/_feed.php";
send_rows($mysql, "SELECT * FROM experience_summary
  ORDER BY FIELD(WorkExperience, 'None', 'Less than 5 years', '5 years or more')");
