
Setting up back-end data feeds with filtering, sorting

Save to your server (cPanel > File Manager) the following two files (note names to create them as):

- jsonoutput_filters.html (https://www.iyawebdev.com/acad274/lecture_examples/jsonoutput_filters.html)

- evcars2.php.txt (https://www.iyawebdev.com/acad274/lecture_examples/evcars2.php.txt)

Previous, we build some simple back-end php that queries a database and outputs the query for use in a page, then evolved to outputting it as a json object so it can be called stand-alone from the page (not needing the back-end scriting query call in the pages that need the data).

All of your projects have experimented and implemented some version of a stand-alone data call, i.e. you all had to created json db feeds. But what if those feeds could inherently support inputs or filters? You may have previously noticed me adding something like ?limit=10 to a page, and automagically had it cap/limit the query to 10 records. Compare the pages chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html) and chart_sample_hockey_json.html?limit=10 (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html?limit=10)

So first, some quick "query string" background. You can "add" to the end of any page/url a ? after the filename, like in my examples of chart_sample_hockey_json.html and chart_sample_hockey_json.html?limit=10. By adding a ? at the end of the url/filename, you are creating a "query string". After the ? the data is encoded kind of like variables. So ?limit=10 is creating a query variable set to 10. You can have multiple query variables by separating them wit ampersands, like limit=10&make=honda

Add query string pass-through to page that calls json url/s

For Step 1, we don't actully care what comes after the question mark, but just that we pass it along to the json call inside the page.

Run the two different hockey urls above, and on each open up the Console (right click and Inspect page, click on Console). When the page is chart_sample_hockey_json.html notice it is calling the json url https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php ... but when you click on chart_sample_hockey_json.html?limit=10 notice it calls https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php?limit=10

So if you build any query string, it passes it along. For instance, on the test hockey url try editing it to ?goalmin=40. Notice the json url it is calling is https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php?goalmin=40

It is doing this because of the code below in the page:

	let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php";
	jsonurl += window.location.search

In Javascript, the property window.location.search represents any query string. So in my script above if it is empty, it adds blank/nothing to the end. BUT, if there is a ? plus more data, it automatically adds that to the json url... passing is along.

So in any page that you are calling a json feed, assuming there is a line that sets the json url you can add a second line that edits the url (before it is used) to add any query string on the page itself to the json feed url.

Ok, but that obviously only works if the underlying json feed (in our case the php files) support / look for query string information (like filters and limits).

Editing json feed/php file to support inputs

So the reason chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html) and chart_sample_hockey_json.html?limit=10 (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html?limit=10) return different results is because the json feed they call (and pass along the query info) has code that specifically looks for a limit query variable, and if so adds it to the underlying SELECT query behind the json feed.

In php, querystring variables can be accessed through the $_REQUEST[] scope.

The hockeystats.php file that is the json feed has the following inside its code:

	// pull all hockey goal stat, by player and season
	$sql =      "SELECT * FROM 2026nhlscorers ";

	if(!empty($_REQUEST["limit"])) {
		$sql .= " LIMIT " . $_REQUEST["limit"];
	}

So $_REQUEST["limit"] means a query string named limit. So in the code above it:

- Sets the default sql query of "SELECT * FROM 2026nhlscorers "

- Checks to see if the page has been called with a query variable named "limi"

- If so it adds " LIMIT X" -- where X equals the value of limit -- to the basic SQL statement, so "SELECT * FROM 2026nhlscorers " becomes something like "SELECT * FROM 2026nhlscorers LIMIT 10"

(Adding Limit # to the very send of a SELECT statement adds a cap/limit to the number of records returned.)

A more powerful version would be if our query/json feed code/script could also support adding filters to a WHERE clause...

EV cars data feed query string example

If you look at the jsonoutput_filters.html (https://www.iyawebdev.com/acad274/lecture_examples/jsonoutput_filters.html) file, notice it has the requisite javascript to pass along any query information (and outputs the json feed to the Console so you can see changes):

	let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/evcars2.php";
	jsonurl += window.location.search
	console.log(jsonurl);

So you can see query info is being passed along. Try clicking on the different links/versions at the page to see the json urls change.

Ok, so now we just need to deconstruct the underlying json feed back-end script: evcars2.php.txt (https://www.iyawebdev.com/acad274/lecture_examples/evcars2.php.txt) (if you want to save it and try messing around with it on your server, make sure to save it as .php and to update the html page to call your feed).

Notice in our previous php json example lines 19-21 set up the basic SELECT query. But then that is followed by some if code that basically says:

- If there is a query variable named make, add a make = clause/filter to the query (lines 24-26) 

		if(!empty($_REQUEST["make"])) {
			$sql .= " AND make = '".$_REQUEST["make"] . "' ";
		}

- If there is a query variable model, add a fuzzy/wildcard search that will filter by any partial matches (lines 27-29)

		if(!empty($_REQUEST["model"])) {
			$sql .= " AND model LIKE '%".$_REQUEST["model"] . "%' ";
		}

- If there is a query variable limit then add a LIMIT/record cap to the query (lines 30-32) 

		if(!empty($_REQUEST["limit"])) {
			$sql .= " LIMIT " . $_REQUEST["limit"];
		}

And again you can play with this demo and query string variants, including directly editing the url, atjsonoutput_filters.html (https://www.iyawebdev.com/acad274/lecture_examples/jsonoutput_filters.html) 

And you can look at the underlying php code, and use it as an alternate template or a sample to try to incorporate into your own feeds at evcars2.php.txt (https://www.iyawebdev.com/acad274/lecture_examples/evcars2.php.txt)

For this demo we will explore how that works, which teams can then choose to implement and make the queries more flexible for the front-end developers to flow the data into visualizations, data grids, etc.

One core concept: When a php page is loaded (including through an ajax call), it can detect if extra information is passed after the URL through a query string. We played with this before when we worked with the health data, but basically you put a ? at the end of the url and then can pass name=value informtion like ?sortorder=goals.

So we've previous called the hockey stats data call https://demos.webdev.iyaserver.com/demos/ajax_hockeystats2.php with jQuery code like below:

let stats = []; // set up an array variable (rows of data) 
$(document).ready(function(){
    $.ajax({
      url: "https://demos.webdev.iyaserver.com/demos/ajax_hockeystats2.php",
      type: "GET",
      datatype: "jsonp"
    }).done(function(data) {
        stats = JSON.parse(data);
    }); 
});  

So what if we added onto the url a sort order, like calling the url 

https://demos.webdev.iyaserver.com/demos/ajax_hockeystats2.php?sortorder=goals

Right now the call would stil work but we would not get any different results, because the back-end script ajax_hockeystats.php does not support / know to look for the query string / form-GET info.

Through the server cPanel > File Manager, create two new files and fill them with the code from:

	- ajax_hockeystats.php.txt (https://www.iyawebdev.com/acad274/lecture_examples/ajax_hockeystats.php.txt) -- save as ajax_hockeystats.php

	- output_hockeystats.html.txt (https://www.iyawebdev.com/acad274/lecture_examples/output_hockeystats.html.txt) -- save as output_hockeystats.html

Before we start, in your copy of output_hockeystats.html EDIT line 39 and change the url to the path to YOUR directory, so it is loading your ajax_hockeystats.php file not mine.

      url: "https://demos.webdev.iyaserver.com/acad274_demos/ajax_hockeystats.php",
	  	// NOTE: EDIT the above url to YOUR server path to ajax_hockeystats.php

	You should now be able to load your output_hockeystats.html file into a browser, and see output like what is outputted by the  output_hockeystats.html (https://demos.webdev.iyaserver.com/acad274_demos/output_hockeystats.html) page.

So we are going to spend all of our time in the back-end php file. But first, let's do a quick review of the existing html page code. Can you identify in the output_hockeystats.html page (https://www.iyawebdev.com/acad274/lecture_examples/output_hockeystats.html.txt) where the following takes place:

	- Create in the page an empty div IDed as results

	- Calls the ajax_hockeystats.php back-end file, then takes the output from that ajax call, unpacks/parses it as json, then saves that json data to a "stats" variable in memory.

	- Build up a variable that contains the start of some html table code, including setting up the headers of the table

	- Loops through the content/rows of a "stats" variable, and in each line builds out one column of the table using html tr and td commands

	- Outputs that blob  of html table (and content) code into the #results div

OK, now onto that ajax_hockeystats.php file that outputs data from the back-end database to the html file/page that calls it. Let's similarly briefly deconstruct what the file (https://www.iyawebdev.com/acad274/lecture_examples/ajax_hockeystats.php.txt) contains/what it is doing, before we add the new functionality.

Can you indentify in the php file which portions:

	- Create an ongoing connection to the database, including login information. (Note: In a production environment we would at a minimum have the login credentials in an include or a config file, if not the connection code as well).

	- Creates the database query (SELECT statement), submits it to the database, and saves the db response into a php $results variable.

	- Crates a php variable $json_array, loops through the database output and for each row of the database query copies/adds that row to $json_array.

	- Converts that $json_array data into json and outputs it to the screen.

Add support for sort order, data filters to the back-end query, 

	Ok, having oriented ourself to the back-end data php file, let's edit the php script so that it accepts/recognizes if any special instructions are passed into it. We are going to set it up to detect  the following url/form_get fields and if they exist:

	- sortorder: take that value and have the results sorted by that column/field name

	- goals: take that (numeric) value and add to the database query a filter to only load records with entries where the Goal data/number is equal or greater to the supplied number

	- points: take that (numeric) value and add to the database query a filter to only load records with entries where the Points data/number is equal or greater to the supplied number

	- gwgoals: take that (numeric) value and add to the database query a filter to only load records with entries where the GameWinningGoals data/number is equal or greater to the supplied number

First, let's set up a series of EMPTY php variables to contain any information passed in through query/url/form variables named $sortorder, $goals, $points, and $gwgoals. Add to the file at about line 22 (before the query:

$sortorder="";
$goals="";
$points="";
$gwgoals="";

Now we will detect the presence of a query/url/form variable named "sortorder" by detect if it is NOT empty, i.e. if it does not exist it will be empty. Add below the variable code above the following:

SQL Injection/security
Note: In a production environment we would need to ALSO parse/CHECK the data for security concerns to make sure hackers were not trying to use SQL Injection or other methods to hack into the server. Most  back-end frameworks (not the stock language) have built-in security routines/data checking anytime form/query data is parsed.

if(!empty($_GET["sortorder"])){
	$sortorder = $_GET["sortorder"];	
}

So now if there is a form/query/url variable "sortorder" passed in, it is copied into a php $sortorder variable.

Ok, so let's add identical clauses for the other three possible input parameters:

if(!empty($_GET["goals"])){
	$goals = $_GET["goals"];	
}

if(!empty($_GET["points"])){
	$points = $_GET["points"];	
}

if(!empty($_GET["gwgoals"])){
	$gwgoals = $_GET["gwgoals"];	
}

Now let's go down to the query. We are going to conditionally ADD WHERE filters if the three filter variables have data. We will do this by one by one checking if the local variables are NOT empty, and if so add a filter to the database query. Note that these are cumulative, so someone could add all three filters. 

	Add the following code in between the $sql and $results lines (by now probably about line 46):

if(!empty($goals)){
    $sql .= " AND Goals > $goals";    

}

if(!empty($points)){
    $sql .= " AND Points > $points";    

}

if(!empty($gwgoals)){
    $sql .= " AND GameWinningGoals > $gwgoals";    

}

Now test the page by calling YOUR php file with ?goals=14 on it. So for instance, mine might be ajax_hockeystats.php?goals=14. You can add multiple filters by putting apersands between every one after the first, such as ajax_hockeystats.php?goals=14&points=34.

Finally, AFTER that code, right before the $results line (which by now might be around line 61), add the follow final code:

if(!empty($sortorder)){
    $sql .= " ORDER BY $sortorder DESC ";    

}

Let's test both together by calling a goal filter and a sort order of gamewinning goals with a url such as  ajax_hockeystats.php?points=32&sortorder=gamewinninggoals.

Assuming that all worked, we can try it by taking FULL url that worked above and swapping it into our html page.

So go back to your output_hockeystats.html HTML page, and edit the jquery ajax line to match your FULL (starting with https://) test url above. This should be about line 39 of the html file.

If that works, you can edit that ajax call in the html page to load up different stats such as players who have 20 or more assists, etc., and set a custom sort order accordingly.

If we wanted to go deeper back in the front-end html page, we could add logic that if a filter was present it would highlight that column in the table...

To see the final php code you can look at
	ajax_hockeystats.php2.txt (https://www.iyawebdev.com/acad274/lecture_examples/ajax_hockeystats2.php.txt)

To see the ouput page with the points=32 and sortorder=gwgoals you can view
	output_hockeystats2.html (https://demos.webdev.iyaserver.com/acad274_demos/output_hockeystats2.html)

-->