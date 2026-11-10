
Milestone 2 requires that you create php scripts/page that run a database query and outpt the data as a json object. This resource and demo will show you how the process works. A separate demo will go into how to "call" and use the json output in a page. 

Useful links for this demo:

- json_cars.php.txt (https://iyawebdev.com/acad274/lecture_examples/json_cars.php.txt)

- evcars_start.html (https://iyawebdev.com/acad274/lecture_examples/evcars_start.html)

- evcars2.html (https://iyawebdev.com/acad274/lecture_examples/evcars2.html)

php and json

Since we want to be able to manipulate data on the client-side (such as rendering in html tables, javascript charts and other outputs), one goal is to get data from the database into a webpage in purely data form, such as formatted in json.

Fundamental concepts:

- Php database queries inherently are set up similar to json files, so easy to convert one line of a returned database query to json

- Simple php command json_encoded() will convert a php array (like lines from a database query output) to the json format

So let's create a php page that submits and gets back a query against the EVdata database we've been working with recently, converts it into the Javascript JSON format, then outputs JUST that (i.e. not a webpage with html tags et al, but just the raw json).

The query to the left is run using the "guest login" profile we've previously created in Workbench:
      hostname: webdev.iyaserver.com
      user: dent_student
      pw: code4Studentuse

If we look at the query below, it pulls just cars (by model) by Hyundai, Rivian and Tesla:

	SELECT * 
	FROM dent_EVdata.MakeModelVehicleTotals
	WHERE make in ('Hyundai', 'Rivian', 'Tesla');

Below I have shown what the output of that 18 row query would look like in directly from the database (from Workbench), side-by-side with how that query would look it if were converted into a json data object, that also has 18 rows of output. Notice that in the json version the rows are numbered (starting with 0) and that instead of the "columns"/field names being at the top, they are embedded in each row.

[image https://iyawebdev.com/acad274/lecture_examples/json_ss1.png] [image https://iyawebdev.com/acad274/lecture_examples/json_ss2.png]   

Building (and calling) a json feed/data API

Ok, so we want to pull that car data for models by those three manufacturers (Hyundai, Rivian and Telsa). So we need to build a server-side page (in php) that:

- Has a special header instruction as the FIRST line of the php code/file

- Submits the SELECT query to the database and gets back the results

- Converts the results (in a loop) to the general json format

- Outputs the json to the screen (even though it will really be called by a web page and not directly in the browser).

Create data API script (php file on server)

So first create a new PHP file on your server, and paste below as the FIRST lines of the file:

<?php	header("Access-Control-Allow-Origin: *");

This starts the server-side php block/instructions, and immediately declares that this file/script/api is OK to be called OUTSIDE of its home domain (i.e. by other sites/servers).

Then let's set up our normal database connection block of code:

    // create connection to database
    $host = "webdev.iyaserver.com"; // database server address
    $userid = "dent_student"; // database user account name
    $userpw = "code4Studentuse"; // database user password
    $db = "dent_EVdata"; // database name

    // create db connection
    $mysql = new mysqli(
        $host,
        $userid,
        $userpw,
        $db);

Now we add the code that builds the SELECT query, submits it to the db, and gets it back as the php variable $results:

    // database query
    $sql =      "SELECT * 
                FROM dent_EVdata.MakeModelVehicleTotals
                WHERE make in ('Audio', 'Hyundai', 'Rivian', 'Tesla');";

    // submit query to db, receive as $results
    $results = $mysql->query($sql);

Ok, so assuming there are no page errors we now have the cars query in memory. We still want to build a "loop" to go through each row of the data, but this time in the loop we will not output data to the screen (echo) but rather copy each row to an in-sever-memory variable named json_array. Paste the following into your file:

    // loop through results one row at a time
    while( $currentrow = $results->fetch_assoc() ) { 
        $json_array[] = $currentrow; 
        // add each row through the loop to the json_array variable
    }

We now have a data contruct with all the rows of the original data, but it is NOT actually encoded into the JSON format yet (regardless of our variable name).

Optional: If you want to see/contrast the data in its raw(ish) php forms versus the json format, you can add the following to your file and test. NOTE: We will DELETE this code on the next step.

    print_r($json_array);

	echo "<hr>";

	echo json_encode($json_array, JSON_UNESCAPED_UNICODE);

Ok, if you did above DELETE those three lines of test/example code.

Finally, we will convert the compiled rows of database query data to the json format and output (echo) it to the screen. Add to your code:

    //convert json variable into json format with options    
    $json_array = json_encode($json_array, JSON_UNESCAPED_UNICODE);

    // output json to page/caller
    echo $json_array;

If you now call the script in a web browser (assuming you have no errors) you should see something like below:

[image https://iyawebdev.com/acad274/lecture_examples/json_ss3.png]

If you right-click on the page and View Source, notice it does not have ANY data except that json/javascript data blob -- no html tags et al. It is basically set up as a data feed/API to be called by a page and not directly viewed in a browser.

If you want to load up that final code to play around with, you can save to your computer json_cars.php.txt (https://iyawebdev.com/acad274/lecture_examples/json_cars.php.txt). (Note: It has some extra debug parameter and comments throughout.) 

Load data/API from an html page

Ok so we have create a "data API" of the cars data. So now we need to set up a simple file that will load the data and output it -- i.e. our actual web page. Since we will use jQuery/Javascript to "load" the API, our actual page can be an html file (i.e. does not need to be php).

Create a new file, I will save mine as "cars.html", and put the following (or you can save to your computer evcars_start.html (https://iyawebdev.com/acad274/lecture_examples/evcars_start.html) as your start file):

<!doctype html>
<html>
<head>
	<title>EV cars data</title>
</head>

<body>
	<h1>EV cars by Hundai, Rivia and Tesla in Washingont state</h1>

<div id="cars">Loading . . .
</div>	

</body>
<script src="https://code.jquery.com/jquery.js"></script>
<script>
// place ajax load here
</script>
</html>

Ok, so this has set up a blank html page that has pre-loaded jQuery, and has an empty div (well it has temporary "Loading" text) IDed as cars (which we will load the data into). So if we load the page it is static, with the Loading . . . message.

Next we will add the code that loads the cars data from the API we created previously and outputs it into the JS Console. Paste the following inside the empty script block under the place ajax code here comment. NOTE: You can replace my url: with the one you created earlier, if it was successful.

<script>
 $.ajax({
      url: "https://demos.webdev.iyaserver.com/acad274_demos/evcars.php",
      type: "GET",
      datatype: "jsonp"
    }).done(function(data) {
        cars = JSON.parse(data);
        console.log("dumping contents of imported cars variable");
        console.log(cars);
        // output
    });    
</script>

But wait, there is no difference in the page. It still says "Loading . . . " BUT, if you open up the Javascript console (right-click Inspect, switch to Console) notice there is an array with 18 lines (rows) or data. If you unpack it (click on the down/open arrow) you will see the data like below:

[image https://iyawebdev.com/acad274/lecture_examples/json_ss2.png]

If you needed to get caught up to this point, you can save evcars_start.html (https://iyawebdev.com/acad274/lecture_examples/evcars_start.html).

So there we have (numbered) rows of data. If you were to type into the console (directly) "cars[2]" you would get back the third row of data (the first is row 0). If you were to type in cars[2].model you should get the name of the model in that third row of data.

So finally, let's do a quick test to make sure we can get a piece of data from the json into the page. Notice the starter block in your page had a function named output() that is called by the ajax. Basically it means that "output" function waits until the data call/API is complete before executing. So anything inside the output function runs where the data is complete.

You can see this version of the page at evcars2.html (https://iyawebdev.com/acad274/lecture_examples/evcars2.html)

So finally let's add the following into the (empty) output function block:

	const output = function(){
		$("#cars").html(cars[2].model);
    }

When you re-run the page the "Loading . . ." message in the div should be replaced by the name of the car mode in the third (row 2) entry.

You can see this version of the page at evcars3.html (https://iyawebdev.com/acad274/lecture_examples/evcars3.html)

So what's left? Well we want to build out actual/real components of a page and not just a text blob, like data tables and charts. Basically we will "build" the content for the div by setting up a loop to go through each row of data, and in each row add a line to that new content (such as table rows of data), then put that content into the #cars div like we did with the stand-alone model name.

We will dig into that next time, including how to loop through rows of json data and select individual fields.  

Alternate demo

To give another example of pulling a database query and outputting it into a webpage, below I've done another demo with the hockey stats...

So start by loading the text/content of hockeystats_json_start.txt (http://iyawebdev.com/acad274/lecture_examples/hockeystats_json_start.txt) and saving it as a new php file in your server space through Cpanel > File Manager.

Reminder: a php header() command must be the FIRST item in a php file (after the php start tag). You CANNOT have any output (echo, var_dump) before it.

	<?php
	header("Access-Control-Allow-Origin: *");

Note that the FIRST line of the file (after the php block creation) is a Header instruction of the page. This explicitly lets the file/page be loaded/called by OTHER domains/sub-domains. I.e. when the file is done is could be called by a page from other domains (i.e. other students in your group). If you do not do this when a page from another domains/sub-domain tries to call it, it will not go through.

So the file connects to the database (using the guest db account to my dent_hockey database), pulls all of the information from the query (goal statistics for three players over seasons), and creates an output loop to display it.

The reason I have the line-by-line debug/raw data for each row, is so you can see it is not dissimiliar in format to a json line.

Look at one sample line below and notice that each value has a property name/key:

		array(5) { 
			["player"]=> string(14) "Leon Draisaitl" 
			["season"]=> string(5) "15-16" 
			["GoalsPerGame"]=> string(18) "0.2638888888888889" 
			["TotalGoals"]=> string(2) "19"
			["TotalGames"]=> string(2) "72" 
		}

In JSON, this would be a an array row like:

		[{ 
			"player": "Leon Draisaitl", 
			"season": "15-16", 
			"GoalsPerGame": "0.2638888888888889", 
			"TotalGoals": "19".
			"TotalGames": "72"
		}]

Php has a very simple command json_encode that will convert data (like an array row of database output) into the json format. Add the $json_array variable set up before the loop and edit the existing loop like below (removing the existing echos):

		$json_array = array(); //set up a new variable as an array (rows of data)
		while($currentrow = $results->fetch_assoc() ) {
			$json_array[] = $currentrow; // add each row through the loop to the json_array variable
		}

If that ran with no errors, you can then add the line below AFTER the loop to see what it built:

		var_dump($json_array);

So it an an array with 33 rows of data.

Now add the line below to convert it from a php array to the json format. Delete the var_dump command and add the following two lines:

		$json_array = json_encode($json_array, JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT);
		// echo $json_array;

Now it is one big string blob, but inside of the blob that is a valid json object that could be loaded into a web page (a traditional html page without php) through Javascript, then manipulated.

To see this final code you can load hockeystats_json.php (http://acadta.webdev.iyaserver.com/demos/hockeystats_json.php), and see the underlying code at hockeystats_json.txt (http://iyawebdev.com/acad274/lecture_examples/hockeystats_json.txt) 

Whil we will call and implement thejson directly into a page in a separate demo, you can see that sample of an html page loading that data through jQuery's ajax command, and displaying it as an html table, through hockeystats_table.html (http://iyawebdev.com/acad274/lecture_examples/hockeystats_table.html) (code (view-source:http://iyawebdev.com/acad274/lecture_examples/hockeystats_table.html) ).

So in summary to create a php page that outputs a database query as a json object:

- Start the file with the php command header("Access-Control-Allow-Origin: *");

- Perform your database connection, sql query, create $results

- Create $json_array variable

- Create a loop of the query, in each row add that row of data to the variable

- After the loop, convert/encode the variable as json and echo it.

Base code:

	<?php
	header("Access-Control-Allow-Origin: *");

	/* 	create connection to database
		...
		write SQL SELECT statement, submit to db, store resuls in $results
		...
	*/

	$json_array = array();
	while($currentrow = $results->fetch_assoc() ) {
		$json_array[] = $currentrow;
	}

	$json_array = json_encode($json_array, JSON_UNESCAPED_UNICODE);
	echo $json_array;

	$mysql->close();