
SQL and PHP code for outputting database queries into a page

To submit a query to a database (in this case mysql), and display the returned results into a webpage there are the below basic steps (and accompanying code):

- Create a database connection in php. You use this code ONCE in a webpage, generally at the very top (eve html and head), even if you have multiple queryes (see below). For the purposes of this class, this code will not change EXCEPT for the database name, insofar as there are two databases you need to communicate with for our labs -- dent_movies and dent_health. Both use the same server address, username, and password.

- Submit SQL and store in $results: Write a SQL SELECT statement, submit it to the database and save the returned results into a php variables (in our code $results). With the possibility if multiple queries in a page, we will place this code lower in the page right before we want to start outputting data from the query.

- (Optional) Output a sample row reset the $results query: You can choose to have php take a sample row of your results and put it into an html comment in the page (will not appear unless you View Source). Then it resets the code for the next step.

- (Output meta data from the query) Once the above query is in the code, we can output metadata such as how many records/rows were in the query (with [?= $results->num_rows ?] ). Note1: This is an optional step and not needed in some contexts. Noe2: If the query is a single row of statistical data, this step could also be used to extract the overall stats, alleviating the need for the step below.

- Create an ouput loop: At the point in your page when you want to output data from the query, set up the php output loop at the top, put in the closing loop code at the bottom, and in between write the output/page content for each field/column of the query you want put into the page. Inside the loop you use little output blocks like [?= $currentrow[["columnanem"]] ?] to output individual piece of data from the query.

- (Alternative)Retrieve single row: If you are dealing with an aggregate sql query that has only ONE line of data, you can just directly set a $currentrow and not need a loop.

- If you have more than one query for the page, repeat steps 2-4 in a different part of the page (with a different Step 2 SELECT statement).

You can reference files those below:

- php sample output movies page with embedded debug info (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt)

  (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt)

-  simplified  (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt)php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt)

- php sample output movies page with complicated WHERE filter (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code_complexwhere.txt)

  (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code_complexwhere.txt)

-  (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code_complexwhere.txt)demo start code (http://iyawebdev.com/acad274/lecture_examples/movies_start.txt)

Below is also a version of code snippet examples that can directly copy and paste into code to play with:

- Create a database connection in php.
[?php
	// create connection to database
	$host = "webdev.iyaserver.com"; // database server address
	$userid = "dent_student"; // database user account name
	$userpw = "code4Studentuse"; // database user password
	$db = "dent_movies"; // database name

	$mysql = new mysqli(
		$host,
		$userid,
		$userpw,
		$db);

	if($mysql->connect_errno) {
		echo "db connection error : " . $mysql->connect_error;
		exit();
	}
?]

- Submit SQL and store in $results:
[?php
	// base query
	$sql =      "SELECT * from view1 WHERE 1=1 AND title like '%dog%'  ORDER BY title";

	$results = $mysql->query($sql);

	if(!$results) {
		echo "SQL error: ". $mysql->error . " running query [hr]" . $sql . "[hr]";
		exit();
	}
?]

- (Optional) Output a sample row reset the $results query
[?php
	// Code to output one sample row with list of columns
	$sample = $results-]fetch_assoc();
	echo "[!-- Sample first row of data [br][pre]";
	print_r($sample);
	echo "[/pre] -->";
	$results-]data_seek(0); // reset results
?]

- (Output meta data from the query)
Your query returned [?= $results-]num_rows ?] results.

- Create and ouput loop:
[?php
	while($currentrow = $results-]fetch_assoc() ) { 
?]

- INSIDE the loop, in your html and text, can output particular fields/columns from the query) such as
		Movie  [?= $currentrow[["title"]] ?] Rated [?= $currentrow[["rating"]] ?] [br]

- Close the loop
[?php
		} // end php loop
?]

- (Alternative to last three steps) Copy a single row into $currentrow: If you have an aggregate sql query with just ONE row of data, you can just set up a $currentrow without a loop:
[?php 
	$currentrow = $results->fetch_assoc(); 
?>

	There are [?= $currentrow[["total"]] ?> 
	products that sold for [?= $currentrow[["total"]] ?> total. 

sample_php_database_code.txt (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt)