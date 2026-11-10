
Some files you might want to save to your computer:

- chartjs_start.html (https://iyawebdev.com/acad274/lecture_examples/chartjs_start.html)

- hockeylinechart.html (http://iyawebdev.com/acad274/lecture_examples/hockeylinechart.html)

Javascript chart libraries

Previously we played around with creating charts from google sheets (or excel, etc.), but what about directly into web app -- feeding select data into automated chart visualizations for web or mobile apps, rather than static (screenshot) charts? There are dozens of different javascript chart libraries, but they all generally do the same thing:

- Most libaries have a series of chart types (line, pie, bar, etc.) that you can select from.

- Generally you need to create a div with a named ID that the chart will be generated into.

- Most automatically assign a series of colors to elements by default, but offer options to reskin the look and size of the chart.

- In general they will also create a legend/labels for the chart, assuming you plug in that data appropriately.

- Arrays of data: Most charts want you to supply the data in data objects, often in a javascript "array" of values. Some of this syntax may seem familiar from when we were working with json. But for instance the following features two "series" of values (which might cospond to favorite colors and numbers):
    ["red", "gold","purple"]
    ["77","3","7"]

A quick google search will point you not only to charts but webpages that list popular javascript chart platforms/libraries, but three of the main ones are:

- Chartjs (https://www.chartjs.org/)

- Google Charts (https://developers.google.com/chart)

- CanvasJS (https://canvasjs.com/javascript-charts/)

Chartjs

So we will implement a line chart from the  (https://www.chartjs.org/docs/latest/charts/line.html)chart.js library. This particular one generates a range of charts using the canvas object. To see an example, paste the following into a page. This default/sample dataset is a survey/poll of popular colors:

 Chart example from code to the left 

Can also save the file chartjs_start.html (https://iyawebdev.com/acad274/lecture_examples/chartjs_start.html) 

[image https://iyawebdev.com/acad274/lecture_examples/chartexample.png]

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

See how it creates a chart with a grid, legend, and pop-up data on each data point. If we break down its format, the array for "labels" provides the column labels for the overall chart, and then within the chart "data" provides (plotted) values for each column, and "label" the title of the chart. (If some of the format looks familiar, it is in json (property:value pairs), although in many cases the values are arrays of data not a singe value.)

If we wanted multiple lines (which we do), we would give it a series (array) of datasets. First, let's change the "labels". Edit the data entry at the top with:

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['15-16 Season', '16-17 Season', '17-18 Season', '18-19 Season', '19-20 Season', 
	  '20-21 Season', '21-22 Season', '22-23 Season', '23-24 Season', '24-25 Season'],

And change inside the dataset section the label to the player Leon Draisaitl:

        label: 'Leon Draisaitl',

At this point the chart will look a little strange, because there are more columns (and labels) than data, because we are still using the "votes" data (about a survey of color popularity). So now we need to update the core chart data. Inside the data object, change the "dataset" to the following values:

[0.263888889, 0.353658537, 0.320512821, 0.609756098, 0.605633803, 
		0.553571429, 0.6875, 0.65, 0.50617284, 0.739130435]

data: [0.263888889, 0.353658537, 0.320512821, 0.609756098, 0.605633803, 0.553571429, 0.6875, 0.65, 0.50617284, 0.739130435],

At this point your complete chart code should look like:

 new Chart(ctx, {
    type: 'line',
    data: {
      labels:   ['15-16 Season', '16-17 Season', '17-18 Season', '18-19 Season', '19-20 Season', 
	  '20-21 Season', '21-22 Season', '22-23 Season', '23-24 Season', '24-25 Season'],
      datasets: [
        {
        label: 'Leon Draisaitl',
        data:  [0.263888889, 0.353658537, 0.320512821, 0.609756098, 0.605633803, 
		0.553571429, 0.6875, 0.65, 0.50617284, 0.739130435],
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

So it is charting his goals per game average across seasons.

But that is only one player, and we want to input multiple. So instead of one dataset, we want to feed it more than one. Change the dataset entry to below (replacing some of our code), note that we stop/do not replace/touch the closing part of the script from "options:" onward:

    datasets: [ // start of array of values
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
     ] // end of array of values
    },

So if that is rendering properly, you should see three lines for different players, each color-coded and labelled at the top of the chart, and a clear trend that Draisaitl performs better than the other two players according to that metric.

To see that code in action, or get caught up, you can open up the file hockeylinechart.html (http://iyawebdev.com/acad274/lecture_examples/hockeylinechart.html). And you can right-click on that page of View Page Source to see (and copy) the code, besides saving a copy to your computer.

Before we explore the code a bit more to understand it, let's try just changing the "type" of chart. Edit that line to:

    type: 'bar',

With that one little change we can flip the type of chart without touching the data.

Most chart platforms support a number of modalities, in this case chartjs supports line, pie, bar, radar, and polarArea. Try changing the type values to others to see variants. Note that many of the types such as pie work best with just one plot (line) of data, rather than multiples.

So you can look at this loud hockeystats_table_manycharts.html (http://iyawebdev.com/acad274/lecture_examples/hockeystats_table_manycharts.html) page to see the chart rendered as a line, bar, pie and polar (not all of which work for this data).

Ok, so lets dig into the format of the data a bit more before we stop here for this session.

"Arrays" of values, json format

So a single set of values like the labels is an array of one set of values, in our case the names/column labels for season:

labels:   ['15-16 Season', '16-17 Season', '17-18 Season', '18-19 Season', '19-20 Season', 
	  '20-21 Season', '21-22 Season', '22-23 Season', '23-24 Season', '24-25 Season'],

So that is one series of values/data. But for multiple lines, we needed three sets of data, i.e. three datasets. Even though the object is named datasets (plural), you don't have to give it more than one. Remember our original sample chart (votes on popular colors) only had the one set of data. So our code is

	datasets: [ // start of array of values
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
     ] // end of array of values
    },

If you look at the boundaries of the squiggly brackets, there are "three" entries (sub-objects), each of which has a label, data, and a borderWidth. The label and borderWidth are supplied with single values, but the data property is an array of multiple values. Note that in the above example I altered the borderWidth to 3 for the first line to make that player's visualized stats stand out.

So we could plug in more lines/players by adding more entries to the datasets value of the chart.

Now, we manually pasted in all that data for the query. A final step would be to automated/flow in the data from a programmatic loop that populates the chart's dataset directly from the database, or a json export of the a database query.

Furthermore, to make it easier we might want to consider creating an alternate json php API that returns one player's stats at time, so that each json would contain the data for one line on the graph. But we'll save that for another time...