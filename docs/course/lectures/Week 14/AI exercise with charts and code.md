
AI exercise: Asking chatGPT to help with chart issues and tasks

Save to your computer:

- chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html)

- chart_sample_hockey_evcars.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json.html)

AI demo: ask AI to change/alter an existing chart/page

So one core useful feature of AI is its ability to tweak/adjust an existing (and stable) page and its scripting.

Let's start with the json-enabled chart script chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html). Save the file to your computer and open up the code.

When we run it, it is showing bars for LOTS of players. What if we wanted to shift the bars to horizontal? That is actually a super easy change, as in line 56 of the code we could change "indexAxis:'x'," to "indexAxis:'y',". But we could also ask chatGPT:

	change the bars from vertical to horizontal in the code below

	[paste your page code]

It would tell us something like:

	You’re already very close — Chart.js controls vertical vs horizontal bars with the indexAxis option.

	Right now you have:

		options: {	
		  indexAxis: 'x',

	That makes the bars vertical.

	To make them horizontal, just change it to 'y':

In this case, we could just go find the line and edit it. In some cases we might take the full updated code it gives us and flow into/edit our existing page.

How about something more complex. Let's ask chatGPT:

	move the ShootingPercentage to a line and a separate scale in the code below

	[paste in your page code]

chatGPT explained:

In making this change chatGPT completely restructures the core code and its arrays. That may be fine, btw, as that was requires to split off the one dataset to the line. But be aware ai agents can drstically change/restructure your code.

	Right now you’re treating ShootingPercentage like the other bar values, but you want it:

	Displayed as a line
	On a separate y-axis (scale)

	That means you need to:

	Split it into its own dataset
	Change its type to "line"
	Assign it to a second axis (e.g. "y1")

and then it generated updated code JUST for the javascript output() function. So how about if I replied

give me full html

It then generated full html (with javascript) code for me.

You can compare my original and the new version chatGPT generated between the links below: 
chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html) 
chart_sample_hockey_json_gpt.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json_gpt.html)

Btw, sometimes the initial code it generates for charts/canvas delivers an empty page. If that happens just tell chatGPT:

the page is blank

And it is usually good about fixing whatever issue it created (sometimes merging data structures) and giving you updated code. Again, ai agents are particularly good at debugging/troubleshooting code.

AI Demo: Ask AI to change/substitute a different json feed (and fields) to an existing page

So while in our previous session on json feed and charts I explored how to plug an alterate dataset into my json+chart sample, in that case the evcar data, what if you wanted to see if ai could help you do that task?

Let's take the base chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html) page that charts data, and ask chatGPT to instead feed and use evcars json url. Enter in an ai (i will use chatGPT):

	change the chart below to use the json feed
	https://demos.webdev.iyaserver.com/acad274_demos/evcars.php and its fields

	[PASTE the html+js contents of chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html)]

And it does a good job. It figured out to combine make + model for each of the core entries, and to plot/chart VehicleTotal and Range. You can see this at chart_sample_evcars_json_gpt1.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt1.html). Btw that is exactly the same (no better or worse) than when we manually edited the json chart code to this json URL in a separate demo at chart_sample_hockey_evcars.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json.html). On the upside it kept the base code (in its easier/simpler form to understand) and just make the minimum edits.

Ok, but the scale of the Range is lower than NumberVehicles, so how about we ask chatGPT to adjust that:

	Move Range to a different scale in the file below

	[paste contents of chart_sample_evcars_json_gpt1.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt1.html)]

But it gave me just the javascript to replace. So I responded:

	Give me html

It then rewrote the core code to separate the two chart fields. You can see this at chart_sample_evcars_json_gpt2.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt2.html). Note: The underlying code is still pretty easy to understand and adapt. See in particular lines 48-82 in chart_sample_evcars_json_gpt2.txt (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt2.txt).

Ok, so let's contrast that if I, from scratch, asked chatGPT:

	take the json feed
	https://demos.webdev.iyaserver.com/acad274_demos/evcars.php and create a chart
	with chart.js

And it did a good job of charting the data, and what's more it automatically figured out it should use two different scales AND that it should mix bar and lines. You can see this at chart_sample_hockey_evcars_gpt3.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt3.html).

Pros/Upsides: It automatically knew to put the Range on a separate (right) scale, AND it used a mixed medium for the chart to have a bar for number of vehicles and an overlaid line graphic for Range. (Btw we will explore asking ai to create a mixed chart in demo2).

Downside: by default, when you ask AI agents to write code and pages from scratch (as opposed to a starter code and html you wrote) it will use scripting syntax and models that will likely be harder for you to decipher (and edit).

Compare the left code adapated from my sample versus stand-alone, from scratch chatGPT code for the same results:

Adapated from pd sample: chart_sample_hockey_evcars_gpt2.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt2.html) 

From scatch chatGPT code: chart_sample_hockey_evcars_gpt3.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt3.html)  

AI exercise: have ai implement chart from json feed from scratch

Ok, so how about asking ai to implement a json feed into a chart library from scratch, i.e. without any starter html and javascript code?

I asked chat gpt:

	use the json feed 
	https://demos.webdev.iyaserver.com/acad274_demos/evcars.php
	to create a chart using chart.js

and it responded by (correctly) identifying the four make, model, VehicleTotal and Range fields, then generated an html page with the chart and the underlying Javascript. It generated the code in chart_sample_hockey_evcars_gpt4.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt4.html)

but like in earlier charts it is hard to see the scale of range, so i responded:

	put range and vehicletotal on different scales

but wait, the updated page it gave me chart_sample_hockey_evcars_gpt5.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt5.html) is blank. so i responded

	the chart is blank

and there we go. new chart created in a page from scratch from my json feed at chart_sample_hockey_evcars_gpt6.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt6.html)

Side note: along the way, i often got blank pages, blank charts, or chart with legend and axis but no data. Some chatGPT responses (to the code it generated) that eventually got me to a working a page and chart included:

	(RESPONSES to code)

	page is blank	
	...
	chart is appearing but has no data
	...
	page is blank with javascript error ... [paste error from Console]

Why work with pd-provided templates?

OK, so why start from one of my templates when you can just ask an ai agent to implement X json feed into Y chart library from scratch?

Sometimes it might be fine. But i intentionally wrote the templates with fairly simple and easy(ish) to understand syntax and variables. Some of the ai-generated code will use more complex approches and javascript syntax (like maps) that are very well written, but might be more difficult for scripting novices to adapt.

Compare the code between the pd-provided, adapted code and the ai-generated code implementing the evcar data below:

pd code from 
chart_sample_evcars_json.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json.html)

    let dbdata = [];

    for(i=0;i<sportsdata.length;i++) {
      chartdata = []; // create TEMP new variable to hold chart data
      chartdata.push(parseFloat(sportsdata[i].VehicleTotal));
      chartdata.push(parseFloat(sportsdata[i].Range));

      // console.log(chartdata);
      dbdata.push(
        {
        label: sportsdata[i].model,
        data: chartdata, // all of the CURRENT (i) rows of stats
        borderWidth:1
        }
      )
    }

chatGPT code from 
chart_sample_evcars_json_gpt6.html (https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json_gpt6.html)

  function buildChart(rows) {
      const data = [...rows]
        .sort((a, b) => Number(b.VehicleTotal) - Number(a.VehicleTotal))
        .slice(0, 12);

      const labels = data.map(item => `${item.make} ${item.model}`);
      const vehicleTotal = data.map(item => Number(item.VehicleTotal));
      const range = data.map(item => Number(item.Range));

      const ctx = document.getElementById('evChart');

Ok, new challenge: We have my sample hockey chart, and instead we want to flow in the evcars data to that base code/file.

In chatGPT I am going to write:

Take the json feed https://iyawebdev.com/acad274/lecture_examples/chart_sample_evcars_json.html
and adjust the code and chart to work with that data
[paste in contents of chart_sample_hockey_json.html (http://iyawebdev.com/acad274/lecture_examples/chart_sample_hockey_json.html)]

-->