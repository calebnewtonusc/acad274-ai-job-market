
Data exercise: Separating core data from chart, flowing in json

If you want to follow along with the main demo, you will want to save all three files below to your computer:
Save the following files to your computer:

- chart_sample_hockey.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey.html)

- chart_sample_hockey_json_start.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json_start.html)

- chart_sample_hockey_json.html (http:s//iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json_start.html)

So previousy we manually put data directly into a chart object (chart.js in this case), see previous file/code chart_sample_hockey.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey.html), with code like below:

new Chart(ctx, {
		type: 'bar',
		data: {
		  labels: ['Points','Goals', 'ShootingPercentage'],
		  datasets: [
			{
			label: 'Nathan MacKinnon',
			data: [127, 53, 15.1],
			borderWidth: 1
		  },
	{
			label: 'Macklin Celebrini',
			data: [115, 45, 15.7],
			borderWidth: 1
		  },
		  {
			label: 'Connor McDavid',
			data: [138, 48, 15.7],
			borderWidth: 1
		  },
		  {
			label: 'Nakita Kucherov',
			data: [130, 44, 19],
			borderWidth: 1
		  }
		 ]
		},
		options: {
		  indexAxis: 'x',
		  scales: {
			y: {
			  beginAtZero: true
			}
		  }
		}
	  });

But notice all of the values are hand-coded. If we're working from external data, we would of course rather flow in the data from a query -- for our purposes from a feed, that in turn gets the data from a database query. We could do this by first setting up variable/s for the chart data, then just call those variables inside the chart code. Look at how much simpler the cart code becomes if we pre-create season and dbdata objects first:

  new Chart(ctx, {
    type: 'line',
    data: {
		  labels: ['Points','Goals', 'ShootingPercentage'],
      datasets: dbdata  // set to pre-populated object data
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }); 

So the variable dbdata would hold the core chart data. We will simply create the dbdata variable as an array (so it can have rows of data), and for each use row of database data we will use the push() command to add another row to the variable, which also means we can add as many rows as we want (without a major change to the code). So the code below needs to come BEFORE the chart is called/created:

[image https://iyawebdev.com/acad274/lecture_examples/json_ss5.png]

  let dbdata = []; // create container for chart data
    dbdata.push( // add first entry to chart
        {
        label: 'Nathan MacKinnon',
        data: [127, 53, 15.1],
        borderWidth: 1
      }
    );
  dbdata.push( // add second entry
      {
        label: 'Macklin Celebrini',
        data: [115, 45, 15.7],
        borderWidth: 1
      }
    );
  dbdata.push( // add third entry
      {
        label: 'Connor McDavid',
        data: [138, 48, 15.7],
        borderWidth: 1
      });
  dbdata.push( // add forth entry
      {
        label: 'Nakita Kucherov',
        data: [130, 44, 19],
        borderWidth: 1
      });
	 console.log(dbdata); // test/check data

If you look above I have displayed the console log of dbdata to the side of our javascript set up. Although it is out of order (and all sorts of strange functions like pop and push), notice in the yellow highlight how the stored label maps to the label the chart needs to know, and the data object with its three rows of data converts into the array format the chart wants to see for the chart object's data points.

You can see this running at chart_sample_hockey_prepopulated.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_prepopulated.html). You can also view the code directly at chart_sample_hockey_prepopulated.txt (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_prepopulated.txt).

Of course, that is still "manual" data per se (hand-coded names and numbers). If we truly want the chart dynamic we should have the data pull directly/live from the database and flow that dynamic data into the structures (which are then in turn passed into the chart). To do that we would:

- Load the data from the server, such as in a json object from a data api call. This would be the same idea when we created the html table of the data by loading the json first.

- With the json in memory, after having created the dbdata array object, set up a loop that each time through pushes one new entry to dbdata, using the values from the json. This is not dissimilar to the loop we set up in the data table page that looped through each row of the json data object, just that instead of creating blocks of html code from each json entry it would be adding to the dbdata variable each time through the loop.

Open up chart_sample_hockey_json_start.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json_start.html). Notice that the starter page already:

- has a jquery ajax block to call the hockey stats query as a json object

- like above has an array variable dbdata built outside the chart object, and called/set inside the object when it is created

- dbdata is an array where each entry has one label value (for the line) and a data sub-object, which is an array (rows) of points for the bars

- the chart code is called inside the output() function, which itself is not called until the json ajax call is complete

	let seasons = [[ '15-16 Season', '16-17 Season', '17-18 Season', '18-19 Season', 
	'19-20 Season', '20-21 Season', '21-22 Season', '22-23 Season', '23-24 Season', '24-25 Season']]
  	// populate the seasons parameters of the main data object with the y axis labels

  let dbdata = [[]]; // rows/array of entries, which will populate one by one with push

  dbdata.push(
        {
        label: 'Leon Draisaitl',
        data: [0.263888889, 0.353658537, 0.320512821, 0.609756098, 0.605633803, 0.553571429,
		0.6875, 0.65, 0.50617284, 0.739130435],
        borderWidth: 1
      }
    );
  dbdata.push(
      {
        label: 'Nathan MacKinnon',
        data: [0.291666667, 0.195121951, 0.527027027, 0.5, 0.507246377, 0.416666667, 0.492307692,
		0.591549296, 0.62195122, 0.4],
        borderWidth: 1
      }
    );
  dbdata.push(
      {
        label: 'Nikita Kucherov',
        data: [0.38961039, 0.540540541, 0.4875, 0.5, 0.485294118, , 0.531914894, 0.365853659,
		0.543209877, 0.47826087],
        borderWidth: 1
      }
);

-->
Ok, so the sportsdata variable is also present, and has the json object data loaded into it.

So comment out or delete all of the data.push() entries , about lines 29-54, leaving dbdata created as an array but empty.

And let's revisit the format of dbdata (what will be data: datasets in the chart). Each dbdata entry has THREE properties

- single label property (name of chart bar/line)

- single borderWidth property (of bar/line)

- a data array containing all of the data points that will be translated into bars, line points, etc., based on the chart

Ok, so dbdata needs one entry/row for each line. Luckily our sportsdata json data is also laid out that way. So we can just loop through rows of stats, and in each row add an entry to dbdata. Now, since there are 50 lines of data, eventually we'll restrict the loop to less players (like just the top give rows) from the underlying json query. When we first end it, with 50 rows, it will be VERY cluttered.

Paste the following test code at the top of the output function, which will loop through the data and output player name and GoalsPerGame for each row of the json. I have indicaed in bold the new code to paste right after dbdata is created:

const output =  function(){

    let dbdata = [];

	for(i=0;i<stats.length;i=i+1) {
			console.log(
			sportsdata[i].Name + 
			" P:" + sportsdata[i].Points + 
			" G:" + sportsdata[i].Goals + 
			" S%:" + sportsdata[i].ShootingPercentage 
		   )
		} 

You should see entries in the console.log for each player as well as the stats pulled out above.

Ok, now what we are going to do is inside each loop create each chart data entry Delete the above code, and replace it with the loop below (right after the dbdata=[] line):

	for(i=0;i<sportsdata.length;i++) { // note this loop is ALL records

		chartdata = []; // set up data and push in stats
		chartdata.push(stats[i].Goals)
		chartdata.push(stats[i].Assists)
		chartdata.push(stats[i].ShootingPercentage)

		dbdata.push( // add chart row
			{
			label: sportsdata[i].Name,
			data: chartdata,
			borderWidth: 1
		  }
		)
	};

That creates an entry/line for each player and then a row of data that includes goals, assists and shooting percentage. Now, we limited that to just four players (loop stops after four times through the data), but we could output all of the data. It will be pretty busy, but try editing the loop for statement as below:

    for(i=0;i<stats.length;i++) { 

-->
So now we can visually look through the players data, although with so many it is hard to track across the three stats, although you could use the chart ux to click off many of the players to look at a smaller number.

You can see this code in action at chart_sample_hockey_json.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html)

Now, as it happens the final version has the ability to support a limit filter. Compare the output of the two links below:

chart_sample_hockey_json.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html) 

chart_sample_hockey_json.html?limit=5 (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html?limit-5)

The final version takes any "query" string information on its own url (the page you called) and passes it along to the json feed on ITS url, in the code below:

So when you call the page chart_sample_hockey_json.html?limit=5 it adds that extra information onto the json's feed, and actually calls hockeystats.php?limit=5.

You can see this version at chart_sample_hockey_json.html?limit=5 (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html?limit-5)

Ok, so then how does the json feed know to do something with the limit=5 -- i.e. to add a record number limit on the results and send back 5 instead of 50 records? We will get into that in the next session when we explore how to add filters to json querues so we can filter our underlying query with things like make=tesla or goalminimum=40 or city=los angeles.

Adjusting chart sample/template

[image https://iyawebdev.com/acad274/lecture_examples/json_ss6.png]

Ok, so let's say tht you understand the underlying ideas in the json-driven chart example chart_sample_hockey_json.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html). So what about adapting it to another dataset/json feed?

Save to your computer the file chart_sample_hockey_json.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html).

Let's replace the hockey json with the evars data. Edit line 12 from

let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/hockeystats.php";

to

let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/evcars.php"

The page displays with no Console/Javascript errors, but of course lots of undefined data in the chart since it was set up for fields like Player, Points, Goals, etc., which our (new) evdata does not contain. BUT notice in the Console the underling json (evcar) data (to the right).

So edit the code at line 43 from

        label: sportsdata[i].Name,

to

        label: sportsdata[i].model,

Now notice that the chart legend correct lists all of the model names from the query.

So let's continue and replace the actual chart data in lines 35-38 from:

      chartdata.push(parseFloat(sportsdata[i].Points));
      chartdata.push(parseFloat(sportsdata[i].Goals));
      chartdata.push(parseFloat(sportsdata[i].ShootingPercentage));

to

      chartdata.push(parseFloat(sportsdata[i].VehicleTotal));
      chartdata.push(parseFloat(sportsdata[i].Range));

But wait. The original chart had THREE sections, and our updated one only has TWO. And of course the section labels are still specific (labelled) to Points, Goals and Scoring Percentage.

So finally let's edit the chart set up labels (line 53) from

		  labels: ['Points', 'Goals', 'ShootingPercentage'],

to

		  labels: ['VehicleTotal', 'Range'],

Now we've got something like the chart below, and in the other screenshots I've highlighted how we took the field names from the new/changed feed and plugged them into the original/sample hockeychart code:

[image https://iyawebdev.com/acad274/lecture_examples/json_ss7.png] [image https://iyawebdev.com/acad274/lecture_examples/json_ss9.png] [image https://iyawebdev.com/acad274/lecture_examples/json_ss8.png]

You can see the evcars chart at chart_sample_hockey_evcars.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json.html)

But the range bars/scale is so small, compared to the number of vehicles, since the number of vehicles goes up to 10,000 but the Range has a max of 638. So maybe we would like to have the Range on a different scale, on the right side. And/or maybe we'd lke to actually do a mixed chart with NumberVehicles as bars and the Range as a line?

Since ai is very useful for not only debugging code but making changes, perhaps we should/could take out current code and ask chatGPT to make changes for us? Well as it happens, we have a separate AI exercise just for that...