
In cPanel > File Manager, open up your acad274 folder. Inside create a new file healthchart.php. Fill the file with the code from aggrsql_filter_start.txt (http://iyawebdev.com/acad274/lecture_examples/aggrsql_filter_start.txt)
You might also want to save the text of the url below, as you will need to add it to the css of the file toward the end of the demo: 
http://iyawebdev.com/acad274/lecture_examples/healthscreen.png

	Little SHORT at about 60 minutes with minor student sharescreen troublshooting at time.
	-----------------------------------
	1. Show how divs have IDs to have values "placed" into them.
	2. Show setup script block that sets js/jq variables.
	3. Use jQuery to set the text() of each div
	4a. review sql select query, what it is pulling
	4b. in php, output the values of each column into js variable block
	5. explain $_REQUEST and submissions
	6. map $_REQUEST["condition"] to $condition variable, then if blank set to Diabetes

	7. show background graphic. put into div exactly its size. make div relative
	8. set .box and .box2 styles to absolute. set individual locations of each box to line up

	9. review GROUP BY

	-->Student work to review and comment on (note most comments are about content and design of pages, not code/technical):

  - stats really stand out. (improvement) could have saced out the stat boxes horizontally (https://zeifman.webdev.iyaserver.com/acad274/health%20stats%20and%20data.php)

- formatting of criteria makes it clear different information (https://cgmurphy.webdev.iyaserver.com/acad274/health_output.php)

- appreciate the detailed findings (https://elinstev.webdev.iyaserver.com/acad274/health_stats.php)

- (improvement) a bit crowded, plenty of page space for padding and margins on elements (https://ckim1741.webdev.iyaserver.com/Stats.php)

- photo is nice element, good use of colors in columns (https://junlaura.webdev.iyaserver.com/acad274/(06b)Health.php)

- effective, good color palette (https://dalbello.webdev.iyaserver.com/acad274/health_labexercise.php)

  --> (although table cells could use a background color or borders to define data grid more clearly)

- stat highlight boxes very effective (and rollover effect) (https://drameh.webdev.iyaserver.com/acad274/healthstats.php)

- effective modular layout, especially with stat boxes (https://royli.webdev.iyaserver.com/acad274/health-data/health.php)

- detailed introduction, effective modular design (https://xungong.webdev.iyaserver.com/Health%20stats%20and%20data%20page/healthmike.php)

  -->
  Interrelated concepts for today:

- css:

- positition:absolute boxes INSIDE position:relative boxes

- setting left and top properties of absolute boxes (that are inside a relative one)

- javascript/jQuery:

- (Javascript) variables in memory

- (jQuery) changing the text content of a div (any block element)

- php:

- submitting a query to a database and saving the returned information into a php variable

- outputting (echo) columns of output from a db query, either one line or in a loop

- php variable start with $, like $favcolor (unlike Javascript variables which are simple names like favcolor

- $_REQUEST variable scope contains any data inputted on the page url, so page.php?condition=asthma would contain $_REQUEST["condition"]

- database/SQL:

- SELECT queries return data from a table or view in a database

- WHERE clause on a SELECT query adds filters (WHERE medication='Aspirin')

- special AGGREGATE commands generate statistical information about data and NOT raw data itself (not rows of a data grid)

Review demo: jQuery, Aggregate SQL, and PHP -- yes all in one page :)

So let's say we need to create a chart ui to output statistics for a doctor. This could be an app on a mobile device (or to a physical device screen). We will start from the code in aggrsql_filter_start.txt (http://iyawebdev.com/acad274/lecture_examples/aggrsql_filter_start.txt) (note you have to save it as a php file). Let's save it as healthchart.php

Notice this page has a new (slighty tweaked) base query from our previous health aggregate query. From about line 32:

Demo: One student volunteer walk us through what below is doing:

     SELECT 
						AVG(Age) AS AverageAge,
						MIN(Age) AS LowAge,
						MAX(Age) AS HighAge,
						COUNT(Name) AS NumberPatients
					  FROM healthcare_dataset
					  WHERE MedicalCondition='Diabetes'

jQuery element of page -- write values of variables into "output" boxes (divs)

If you run the page now, the output "screen" has boxes for each piece of the statistical data. Also notice in the code of the page (around line 69) that there is a javascript block that sets variables corresponding to each of the boxes (currently set to "Diabetes" and zeros).

So first off, let's add some jQuery that places the values of the variables into the corresponding boxes. When the page first loads, those boxes are all empty. Notice the jQuery block currently has an alert, just showing a example that outputs the value of the "avgage" variable into an alert.

So delete the alert, then write a line that finds the box IDed as #condition, and sets its text content to the variable condition:

	   $("#condition").text(condition);

Now when you run the page again, the alert should be gone and the condition box should have the text "Diabetes" in it.

If you are wondering why we didn't just write the values directly into the divs/boxes, it is so we can change their content.

So let's complete the jQuery that plops the values of all of the variables into their corresponding boxes.

			$("#condition").text(condition);
			$("#patients").text(patients);
			$("#highage").text(highage);
			$("#lowage").text(lowage);
			$("#avgage").text(avgage);
			$("#condition").text(condition);

You can see this version1 of the demo with just the jQuery done at aggrsql_filter_v1.php (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter_v1.php) (code (http://iyawebdev.com/acad274/lecture_examples/aggrsql_filter_v1.txt))

Flowing the data in with php

So if you look at the php code, it performs the query than pulls one row of data and saves it in $currentrow -- we do not need to use the loop code since the aggregate sql only has a single row of data not multiple rows.

So currently the php code in the page connects to the database, submits the query to the database, saved the response/data results from the db, and then loads the row of statistical data (from the query) into the php variable $currentrow. So anypoint after that php line ($currentrow = $results->fetch_assoc()), php can output the various fields of the query from $currentrow.

But this time, rather than directly output the data into the html/content/body of the page, we are going to populate those javascript variables with the php database data.

See below, where we edit the javascript variable lines to have php "output" the stat data directly into the corresponding javascript variables:

	<script>
		/*
		Note that javascript (and jQuery) variables have no symbol in front of the variable name
		whereas php variables have a $ symbol in front of them
		*/
		var condition = "Diabetes";
		var patients = <?= $currentrow["NumberPatients"] ?>;
		var highage = <?= $currentrow["HighAge"] ?>;
		var lowage = <?= $currentrow["LowAge"] ?>;
		var avgage = <?= $currentrow["AverageAge"] ?>;
	</script>

You might be wondering why we don't just output the php data values directly into the divs, rather than into variables that jQuery then puts in the boxes. It will become more apparent in upcoming lectures, but we want to have the page populated from javascript memory/storage and then can use different methods to load the data into those, just one of which will be direct db-to-server scripting (like mysql and php).

Now, since our jQuery at the bottom of the page already uses that variables to populate the stat boxes, our db data is flowed right into the boxes.

php page input variables

The last thing we want to implement in the php layer of the page are url variables. Basically this is form data passed INTO a page. Form data passed into a page can be accessed in php through the $_REQUEST variable (one of a couple of ways).

Basically you can add onto the end of a page name a question mark then a variable value. So for instance, instead of just loading healthcart.php you can load healthchartphp?condition=Diabetes, passing INTO the page a value of "Diabetes" for a $_REQUEST variable named "condition". In this way, you could have a series of urls/versions of the page like below, each of which could pull different data:

- healthchartphp?condition=Asthma

- healthchartphp?condition=Cancer

- healthchartphp?condition=Diabetes

- healthchartphp?condition=Hypertension

So what we need to do is have the hard-coded value in the WHERE clause replaced by a value passed into the page. So we will take the original SQL of

	SELECT 
						AVG(Age) AS AverageAge,
						MIN(Age) AS LowAge,
						MAX(Age) AS HighAge,
						COUNT(Name) AS NumberPatients
					  FROM healthcare_dataset
					  WHERE MedicalCondition='Diabetes'

and replace it with

	SELECT 
						AVG(Age) AS AverageAge,
						MIN(Age) AS LowAge,
						MAX(Age) AS HighAge,
						COUNT(Name) AS NumberPatients
					  FROM healthcare_dataset
					  WHERE MedicalCondition='$filter'

Then all we need to do is define that $filter variable. So we will add the block below before the SQL set up above, to check if there is a value passed into the page, and if not "default" to a value of Diabetes:

	if (empty($_REQUEST["condition"])) {
		// if no url condition was passed into page, default to Diabetes
		$filter = "Diabetes";
	} else {
		// set filter to the input
		filter = $_REQUEST["condition"];
	}

And finally, we want to update the javascript block in the page that set the Conditon to Diabetes to a php output (note you need double-quotes around the text output of $filter, since that is storing in a javascript variable which requires text/string data to have quotes around it):

		var condition = "<?= $filter ?>";
		var patients = <?= $currentrow["NumberPatients"] ?>;
		var highage = <?= $currentrow["HighAge"] ?>;

Whew. And you can see this in action from the pages below. Note the only change between the links/urls is the condition= part of the page:

- aggrsql_filter2.php?condition=Asthma (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter2.php?condition=Asthma)

- aggrsql_filter2.php?condition=Cancer (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter2.php?condition=Cancer)

- aggrsql_filter2.php?condition=Diabetes (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter2.php?condition=Diabetes)

- aggrsql_filter2.php?condition=Hypertension (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter2.php?condition=Hypertension)

And copy of the underlying code (http://iyawebdev.com/acad274/lecture_examples/aggrsql_filter_v2.txt):

Layer output on top of screen mock-up

Finally, back to a concept we started this demo with: The idea of the output not being on a web page per se, but onto the screen of a device like a tablet or other device in a hospital.

In the output, delete ALL of the text inside the #chart div except the output boxes (i.e. delete "Summary Report", all the labels, and the <br> tags), leaving just:

	<div id="chart">
		<div class="box2" id="condition"></div>
		<div class="box" id="patients"></div>
		<div class="box" id="avgage"></div>
		<div class="box" id="lowage"></div>
		<div class="box" id="highage"></div>
	</div>

Now, up in the stylesheet, create a #chart entry:

Overlay the div output boxes into the appropriate spots in the graphic below 
[image http://iyawebdev.com/acad274/lecture_examples/healthscreen.png]

	<style>
		.box { width: 30px; height: 15px; border: 1px solid teal;}
		.box2 { width: 100px; height:15px; border: 1px solid teal; }
		#chart { width:400px; height:225px; position:relative; 
			background-image: url(http://iyawebdev.com/acad274/lecture_examples/healthscreen.png)} 
	</style>

So see my (admittedly ugly) mock up of some kind of output. And notice it is set as the background of the #chart div and the div is set to its exact size (400px x 225px).

Now edit the .box and .box2 style to remove the border and make them position:absolute:

		.box { width: 30px; height: 15px; border: 1px solid teal; position:absolute;}
		.box2 { width: 100px; height:15px; border: 1px solid teal; position:absolute;}

position:relative objects inside position:absoluteAs a reminder, in css if you have a position:relative object (like a div) inside a position:absolute object (such as a div), and you set the exact location (left and top) of the relative object, its coordinated will be based on the outer (absolute) object's location (on top of it).

Now the boxes can be given absolute locations, based on the pixel layout/grid of the #chart div, i.e. they can be lined up exactly to fit into the visual "boxes" in the chart mock-ups. Add the style:

		#condition { left: 141px; top:60px; font-size: 14pt; }

Notice now the condition output is in the "box" where that data below.

Now add styles for the other boxes:

		#patients { left: 199px; top:92px; font-size: 10pt;}
		#avgage { left: 145px; top:122px; font-size: 10pt;}
		#lowage { left: 143px; top:152px; font-size: 10pt;}
		#highage { left: 145px; top:182px; font-size: 10pt;}

Not the most visually striking mock-up or dashboard, but you get the idea.

You can click through the links below to see the different condition status screens:

- aggrsql_filter3.php?condition=Asthma (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter3.php?condition=Asthma)

- aggrsql_filter3.php?condition=Cancer (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter3.php?condition=Cancer)

- aggrsql_filter3.php?condition=Diabetes (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter3.php?condition=Diabetes)

- aggrsql_filter3.php?condition=Hypertension (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_filter3.php?condition=Hypertension)

And copy of the underlying code (http://iyawebdev.com/acad274/lecture_examples/aggrsql_filter_v3.txt).

Aggregate SQL follow up: rows of statistical data (GROUP BY)

So by default, aggregate SQL (AVG, COUNT, etc.) creates a single row from the database for each of your parameters. But as noted in the first aggregate SQL lecture, there is a special GROUP BY (completely different than ORDER BY) that FIRST takes all of the data and sub-groups it by a field/column, then runs your stat query on EACH of those sub-groups, giving you multiple rows of stat results (one per group).

So for instance in our health data, if you did a GROUP BY MedicalCondition, then it would first sub-group all of the data into condition clusters (sub-group all of the Asthma patients, Cancer patients, etc.

So looking at the difference between the two queries and results below:

	SELECT AVG(Age) as AverageAge, AVG(BillingAmount) AS AverageBill
	FROM healthcare_dataset

[image https://iyawebdev.com/acad274/lecture_examples/sql_groupby_ss1.png]

	SELECT AVG(Age) as AverageAge, AVG(BillingAmount) AS AverageBill
	FROM healthcare_dataset
	GROUP BY MedicalCondition

[image https://iyawebdev.com/acad274/lecture_examples/sql_groupby_ss2.png]

So why rows of data (not a single row of stats)? Because it is running the two Average stat queries not against the entire dataset, but by sub-groups -- i.e. average age and bill of cancer patients, asthma patients, etc.

Now I said before that you CANNOT mix generate data/text queries with aggregate/stat queries. The one exception is that you can include a text column IF it is a grouping parameter. So see below an updated grouped stat query that outputs the sub-group clustering category/text:

	SELECT MedicalCondition, AVG(Age) as AverageAge, AVG(BillingAmount) AS AverageBill
	FROM healthcare_dataset
	GROUP BY MedicalCondition

[image https://iyawebdev.com/acad274/lecture_examples/sql_groupby_ss3.png]

Normally if you included a value column (not a calculated field) in an aggregate sql query you would get an error. For instance, if I were to try to include MedicalCondition in an aggregate sql query where that column was NOT in the GROUP BY, I would get an error. See below:

	SELECT MedicalCondition, AVG(Age) as AverageAge, AVG(BillingAmount) AS AverageBill
	FROM healthcare_dataset
	GROUP BY MedicalCondition

As a reminder, normally you cannot include normal columns (non-calculated) in aggregrate/stat SELECT stements... GROUP BY being the one exception. So for instance the statement "SELECT MedicalCondition, AVG(Age) as AverageAge FROM healthcare_dataset" (with no GROUP BY) would return an error of:

	SQL error: In aggregated query without GROUP BY, 
	expression #1 of SELECT list contains nonaggregated column 'dent_health.healthcare_dataset.MedicalCondition';

So an aggregate sql query with GROUP BY, i.e. that has multiple rows, would be a reason to use Part 4a from our php sample code for aggregate/stat output -- i.e. to loop through rows of data results. But we will follow up on that in a future session.