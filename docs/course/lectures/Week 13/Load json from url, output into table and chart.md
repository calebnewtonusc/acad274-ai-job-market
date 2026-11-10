
Data and code exercise: load json from url, output into table

Save to your computer:
loadjson.html (https://iyawebdev.com/acad274/lecture_examples/loadjson.html)

First, you should have reviewed the walkthrough (lecture) of converting a php database query into json and returning it "(13a) Converting/outputting a php database query as json".

As a review, the API/data feed  (https://demos.webdev.iyaserver.com/acad274_demos/evcars.php) delivers the database query below (left) in a json format (below right) that can be loaded and parsed in a page.

[image https://iyawebdev.com/acad274/lecture_examples/json_ss1.png] [image https://iyawebdev.com/acad274/lecture_examples/json_ss2.png]

We will also use jQuery to add/replace the content of page objects (typically divs), as a way to insert data into the page (after the page has loaded, once our json/data call has completed).

Since json feed/s (though php) are already done (above), we can build a traditional html page to output the data in an html table, then go on to experiment with feeding json data into a (live/dynamic) chart.

- We will start with a (relatively empty) new page that has a #results div in it, plus some jQuery set up (ready block, ajax code with evcars data, data variable, and output function). You can save the start file loadjson.html (https://iyawebdev.com/acad274/lecture_examples/loadjson.html) or start from the code below:
<div id="results">
Loading . . . 
</div>

<script src="https://code.jquery.com/jquery.js"></script>
<script>
   let data = []; // set up an array variable (rows of data) 
	let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/evcars.php";
	// url of json to load -- NOTE must change or will get demo evcar data!

	$(document).ready(function(){

		 $.ajax({
			  url: jsonurl,
			  type: "GET",
			  datatype: "jsonp"
		 }).done(function(rawdata) {
			data = JSON.parse(rawdata);
			console.log("dumping contents of json stats variable");
			console.log(data);
			output();
		});    

    });

	const output =  function(){
		// write code here to run after json load is complete
		console.log("output called"); // delete later
	}
	</script>

- So the script has a the evcar data (just Hundai, Rivian and Tesla cars from WA) loaded by default. We are using the jQuery ajax() command to load the json, as that is an easy and simple way retrieve data from a data API (returned as json)

- The default code calls/loads the https://demos.webdev.iyaserver.com/acad274_demos/evcars.php json url, and converts/parses it then stores that under the variable name data, which can be used by any subsequent code in your page. After it finishes it outputs the full data json array into the javascript Console, and calls a function named output() which adds one additional line of text to the Console.

- So now we've got the data feed in memory but NOT yet in the page. So what do we want to do with it? Output all of the data into a table? Flow it into a chart? Extract a single statistic to put into a div?

To start, let's try just pulling one single piece of data and putting it into the #stat container. For instance, let's try putting the Range of the first vehicle (row 0) into #stat. Add the following INSIDE the output() function:

	const output =  function(){
		$("#stat").text(data[0].Range);
	}

We could instead build a block of html, and put it inside the container like:

	const output =  function(){
		temp = " The " + data[0].make + " " + data[0].model + " has a range of <strong>" + data[0].Range + "</strong>";
		$("#stat").html(temp);
}

To start, let's output all of the rows of data into an html table. We already have a placeholder #results div (which currently says "Loading . . . "). We will build a temporary variable named "table" that will contain all of the table code. So we will start the table, set up some hand-coded header row headings, create a loop with each row of json data, then close/end "table" by closing the table.

Write/add the following inside of the output() function:

	const output =  function(){
		// write code here to run after json load is complete

		temp = " The " + data[0].make + " " + data[0].model + " has a range of <strong>" + data[0].Range + "</strong>";
		$("#stat").html(temp);

        table ='<table>';

        //create table header row
        table += "<tr><th>Make</th><th>Model</th><th>Vehicles</th>" + 
		     "<th>Mile Range</th></tr>";    
        for(i=0;i<data.length;i++) {
            table += "<tr>"; // start table row
            table += "<td>" + data[i].make + "</td>";
            table += "<td>" + data[i].model + "</td>";
            table += "<td>" + data[i].VehicleTotal + "</td>";
            table += "<td>" + data[i].Range + "</td>";
            table += "</tr>"; // end table row
            }
        table += "</table>";
        console.log("html table code built:");
        console.log(table);
        $("#results").html(table); // insert new table into #results div
    }

Besides seeing the output in the page (in the #results) div you can also look in the Console to see the chunk of html that was built inside the table variable before it was sent to the $results div.

You can see this table output looped/rendered from the json call at loadjson-evcartable.html (https://iyawebdev.com/acad274/lecture_examples/loadjson-evcartable.html)

-  

Ok so how about rendering a table with some sports statistics (hockey) data?

So we could start over from the original file jsonload.html (https://iyawebdev.com/acad274/lecture_examples/loadjson.html) file and change the jsonurl setting (line 14) to the following:

	let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php";

But instead, let's save a COPY of where we left off, the file loadjson-evcartable.html (https://iyawebdev.com/acad274/lecture_examples/loadjson-evcartable.html), and hack/edit it to the hockey stats.

So edit line 15 so that it now says:

	let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php";

[image https://iyawebdev.com/acad274/lecture_examples/json_ss4.png]

If you run the page the "table" will have all sorts of errors, but if you check the Console you can see it loaded the hockey data like the image to the left. It is many rows of players, but if you look at the unpacked screenshot/console you can see of the different data fields.

And of course, the table we created earlier (the EV car data) had fields like make and model, which do not exist in this new dataset, hence all of the "undefined" outputs into each of the table cells (which again we built from car data).

So let's edit our table code (about line 30 onward inside of the output() function) to update the header names and actual data fields to four fields from the hockeys stats:

const output =  function(){
		// write code here to run after json load is complete
        table ='<table>';

        //create table header row
        table += "<tr><th>Player</th><th>Games</th><th>Points</th>" + 
		     "<th>Penalties</th></tr>";    
        for(i=0;i<data.length;i++) {
            table += "<tr>"; // start table row
            table += "<td>" + data[i].Name + "</td>";
            table += "<td>" + data[i].GamesPlayed + "</td>";
            table += "<td>" + data[i].Points + "</td>";
            table += "<td>" + data[i].PenaltyMinutes + "</td>";
            table += "</tr>"; // end table row
            }
        table += "</table>";
        console.log("html table code built:");
        console.log(table);
        $("#results").html(table); // insert new table into #results div
    }

You should now see the table output is the hockey data.

Because we carefully entered the names (case-SENSITIVE) from the json fields, you should now see the table output is the hockey data. Note that while we chose to just output four specific pieces of data for each row (Name, GamesPlayed, Points and PenaltyMinutes), there were actually 17 fields to choose from (in each row).

Finally, let's actually build in some css styles to skin the table. Paste the following into the head of the html document:

	<style>
	table{
		background-color:lightsteelblue;    
	}

	th { 
		border-bottom-width: 1px; 
		border-bottom-color: steelblue; 
		border-bottom-style: solid;
		background-color:steelblue;
		color:white;
	}

	td, th {
			padding:3px; margin:5px;			
	}

	tr:nth-child(odd) {
		background-color: steelblue
	}
	</style>

Now we have some color regions AND alternating background color/striping to make the rows of data easier to read and diffentiate.

You can see this updated hockey data table output at loadjson-hockeystats.html (https://iyawebdev.com/acad274/lecture_examples/loadjson-hockeystats.html)

Run the page, and you should see in the Console rows of data 

	- We will start with a (relatively empty) new page  has a #results div in it, plus some jQuery set up (ready block, stats variable, and output function). You can save the start file loadjson_start.html (https://iyawebdev.com/acad274/lecture_examples/loadjson_start.html) or start from the code below: 

You can get caught up to this step with the file  (https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php)

	- Now what to do with the data? We could build an html table and output it into the page. There is already an "empty" (it says Loading . . .) div in the page IDed as "results". So let's build out the existing output function per below:
 const output =  function(){
        // once stats is loaded, create table from data
        table ='<table>';

        //create table header row
        table += "<tr><th>Player</th><th>Season</th><th>Games</th>" + 
		     "<th>Goals</th><th  class='highlight'>Goals per game</th></tr>";    
        for(i=0;i<stats.length;i++) {
            table += "<tr>"; // start table row
            table += "<td>" + stats[i].player + "</td>";
            table += "<td>" + stats[i].season + "</td>";
            table += "<td>" + stats[i].TotalGames + "</td>";
            table += "<td>" + stats[i].TotalGoals + "</td>";
            table += "<td class='highlight'>" + stats[i].GoalsPerGame + "</td>";
            table += "</tr>"; // end table row
            }
        table += "</table>";
        console.log("html table code built:");
        console.log(table);
        $("#results").html(table); // insert new table into #results div
    }

	You can test the function by opening up the console.log and typing output() (to call the function).

	- Add a line
	output()

	to the ajax code right after console.log(stats) so the table always renders into the #results div AFTER the json has been loaded.

You can see this table output looped/rendered from the json call at hockeystats_table.html (https://iyawebdev.com/acad274/lecture_examples/hockeystats_table.html) 

-->
Great. So we can imagine being able to use the page's css to make out data output fit into the general page design. And of course if we are using an external stylesheet (linked into the page), we can apply universal table designs/styles/colors uniformly across all of our site.

-  

Next, we will flow data DIRECTLY into a chart library... (different lecture post)

Output json data into a chart

So so how about generating a chart out of (some) of the data? As we've previously discussed, there are many javascript chart libraries, which all generally do the same thing:

	- Most libarries have a series of chart types (line, pie, bar, etc.) that you can select from.

	- Need a div with a named ID to create the chart in.

	- Have options to reskin the look and size of the chart. Most automatically assign a series of colors to elements by default.

	- Will embed data information into the chart and have a legend/labels that you can enter.

	- Have you provide the data as an array of data objects, similar to (or sometimes literally) json.

As a reminder, below are three of the more popular chart libraries (we will again use the chartjs one) such as:

    - Chartjs (https://www.chartjs.org/)

   - Google Charts (https://developers.google.com/chart)

-  CanvasJS (https://canvasjs.com/javascript-charts/)

Review: chartjs

As a  reminder, the  (https://www.chartjs.org/docs/latest/charts/line.html)chart.js library generates a range of charts using the canvas object inside a defined div. To see an example, paste the following into the bottom of the page:

<div>
  <canvas id="myChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
        },
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

We previous discussed how chartjs created charts with a grid, one or more legends, and pop-up data on each data point.

Previous we flowed some of this hockey player data into the chart, like below:

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['15-16 Season', '16-17 Season', '17-18 Season', '18-19 Season', '19-20 Season', 
	  '20-21 Season', '21-22 Season', '22-23 Season', '23-24 Season', '24-25 Season'],
      datasets: [
        {
        label: 'Leon Draisaitl',
        data: [0.263888889, 0.353658537, 0.320512821, 0.609756098, 0.605633803, 
		0.553571429, 0.6875, 0.65, 0.50617284, 0.739130435],
        borderWidth: 1
      },
      {
        label: 'Nathan MacKinnon',
        data: [0.291666667, 0.195121951, 0.527027027, 0.5, 0.507246377, 0.416666667, 
		0.492307692, 0.591549296, 0.62195122, 0.4],
        borderWidth: 1
      },
      {
        label: 'Nikita Kucherov',
        data: [0.38961039, 0.540540541, 0.4875, 0.5, 0.485294118, , 0.531914894, 
		0.365853659, 0.543209877, 0.47826087],
        borderWidth: 1
      },
     ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

Above presents a line chart with the three players' goals per game charted, see the sample page chart_sample_hockey.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey.html).

So next, we will take that json data and flow it into the chart. We may also want to consider reorganizing the current stats data into three separate feeds (one for each player) rather than all of it combined into one, since in our charting data structure each line has its own data broken our separately...

-->