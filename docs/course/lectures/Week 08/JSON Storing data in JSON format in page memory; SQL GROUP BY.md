
Save the following as an html file on you computer (does not have to be on the server):

- healthcondition2_start.html (http://iyawebdev.com/acad274/lecture_examples/healthcondition2_start.html)

Narrative presentation student work highlights

Before we get into the new json material, let's look at some highlights of student work in creating scripting/animated narratives. Before we get into them, take a moment (especially for those new to web front-end) to think about how visually impressive the design and interactive feel of much of the work:

- LA weather is better than Shanghai (https://jchen879.webdev.iyaserver.com/acad274/W8/W8%20lab.html) clear narrative order, would work well on mobile and web

- Why Kickers Decide Games More Than You Think (https://dalbello.webdev.iyaserver.com/acad274/nfl-presentation.html) effective narrative, stats then detail

- College Application Data (https://mbhou.webdev.iyaserver.com/acad274/08a_presentation/presentation_lab.html) good, effective variety of transitions

- Ripple device and treatment improvement (https://lckim.webdev.iyaserver.com/acad274/Animation/rippleanimated.html) very effective narrative (improvement: Next button is often offscreen, so user may not realize there is a Next in the sequence)

- Stephen Curry: Great shooting season (https://friis.webdev.iyaserver.com/acad274/curry_slides.html) nice use of ful-screen, Back and Next options, good variety of content (improvement: Next button always visible but cannot scroll down to lower content in some pages)

- MLS Rankings (https://reemkhan.webdev.iyaserver.com/acad274/jquery_presentation2_start.html) ball progression is fun effect (improvement: originally ball was behind some elements, but fixed by student to always be in front)

- Luxury Labels as Cultural Signals (https://cgmurphy.webdev.iyaserver.com/acad274/animation%20lab/animationlab.html) effective narrative, distinct design, good use of images

- BioBites product (https://erinmcle.webdev.iyaserver.com/idsn530/08/08a/Animated_Presentation_Lab.html) really effective narrative, good example of a product introduction sequence

- Ocean Warming (https://dtsang.webdev.iyaserver.com/idsn530/assignment%2008a/08a.html) well designed, clear narrative

-->

Review: Aggregate SQL and GROUP BY

When we want to create statistical queries not just for the entire dataset, but for sub-groups (in the health dataset, such as medical conditions like Arthritis, Asthma, etc.), we can use a GROUP BY in our SELECT statement to sub-sort /cluster/group the data by that field/column first, and then perform the statistical queries on each cluster/group... resulting in multiple rows of results.

Run/test the following query in the db (phpmyadmin if you installed the health db, or through DataGrip with the guest credentials):

SELECT 
	     MedicalCondition,
		 AVG(Age) AS AverageAge,
	     MIN(Age) AS LowAge,
	     MAX(Age) AS HighAge,
	     COUNT(Name) AS NumberPatients
FROM healthcare_dataset

Now re-run the same query but all a GROUP BY to the end:

SELECT 
	     MedicalCondition,
		 AVG(Age) AS AverageAge,
	     MIN(Age) AS LowAge,
	     MAX(Age) AS HighAge,
	     COUNT(Name) AS NumberPatients
FROM healthcare_dataset
GROUP BY MedicalCondition

Note: While it currently goes not have a WHERE clause, we could imagine adding filters such as for Medication, Age range, Gender, etc., to first filter/narrow the overall dataset (males under 20 with cancer) before the Grouping. So in the above example GROUP BY takes all the data, then sub-groups it by MedicalCondition, then applying the SELECT clause to each of those groups. So our output is actually stats for each of the groups (condition):

[image http://iyawebdev.com/acad274/lecture_examples/sql_groupby.png]

Eventually we can flow those directly into the front-end data storage format JSON via php. But for now we are using starter code where the output of those queries has been manually hand-coded into the (front-end) JSON format to the data variable.

JSON data storage in Javascript

So where we left off with jQuery and flowing data into the page, php loaded/outputted the SELECT statment values into Javascrpt variables, at which point it was all in the hands of jQuery/Javascript to populate the page.

We are going to revisit this but with an eye toward a more complex data structure in which we can have ROWS of data in memory (not just a single value).

Save (can be on your local computer) to an html file the contents of healthcondition2_start.html (http://iyawebdev.com/acad274/lecture_examples/healthcondition2_start.html). 

Three things you note about the code in this new start file:

- Currently the data is already loaded into memory without php (no php in the code). So if you look at the Javascript variable lines, the "data" is HARD-CODED. We will come back to the final workflow of the in-memory/Javascript json variable being populated from the server/database later, where we will load it through php from the database then convert it into in-memory JSON.

- In the Javascript variable block, notice there is a new variable data that contains more complex data than a single piece of data (i.e. not a single value like "Arthritis" or 35), but rather embedded rows of data in a sub-object. If you open up your browser's Javascript console data (right-click Inspect > Console) you can see it being outputting there.

- There is also a variable contacts that contains json data, that we can use to play around with arrays and json. It has no use in the page, but we will play with it to explore the concept or json/javascript data objects.

- There is a navigation bar with buttons for each condition

- There is a #messagebox at the bottom of the page

Ok, so our original variables are set up like below, where each value has its own variable:

    let condition = "Arthritis";
    let patients = 431;
    let highage = 85;
    let lowage = 18;
    let avgage = 18;

But while it may be difficult for you to decipher currently, the new data variable actually contains all of those values (n rows) compressed into a single data object. If you open the browser Javascript console (right-click on page, Inspect -> Console), you can get a feel for how the data is outputting. Basically data contains multiple rows  of objects, kind of like returned database recordsets. Each row is numbered (starting with row 0 not 1) with names columns/fields in each row (avgage, condition, etc.). See the two screenshots to the side of the data below, which shows data with its row of records, and with one record toggled open in the debug console.

The Javasript "push()" command (in the code at left) adds data (single value or series/row/array) to an existing variable

data variable/object to the right displayed in the Javascript console (for debugging):[image http://iyawebdev.com/acad274/lecture_examples/json1.png] 
[image http://iyawebdev.com/acad274/lecture_examples/json2.png] 
Note that:

- Each "record" has a row number, starting with 0.

- In each "record" (row), the fields are named just like columns/fields in a returned database query.

- There data object has a length property (data.length) that returns the number of rows/records.

    let data = new Array;
    data.push({
        "condition": "Arthritis",
        "patients": 431,
        "highage": 85,
        "lowage": 18,
        "avgage": 53.20    })
	data.push({
		"condition": "Asthma",
		"patients": 420,
		"highage": 85,
		"lowage": 18,
		"avgage": 51.44    })
    data.push({
        "condition": "Cancer",
        "patients": 438,
        "highage": 85,
        "lowage": 18,
        "avgage": 51.28    })
    data.push({
        "condition": "Diabetes",
        "patients": 452,
        "highage": 85,
        "lowage": 18,
        "avgage": 51.49    })
    data.push({
        "condition": "Hypertension",
        "patients": 443,
        "highage": 85,
        "lowage": 18,
        "avgage": 52.51    })
    data.push({
        "condition": "Obesity",
        "patients": 424,
        "highage": 85,
        "lowage": 18,
        "avgage": 53.30    })
	console.log(data);

JSON primer

When we outputt php through loops, we were pulling data from an "array" of one row of results, and using the column/field names to access individual pieces of data.

When using data formatted in JSON, we are doing a similar process. In the above example "data" is like results from a datbase (contains in rows). In Javascript (and jQuery) we access a row by its row number (note starting with 0). So for instance, look at this Javascript code also included in the start file:

    let contacts = new Array;
        contacts.push({ "firstName" : "Tommy", "lastName": "Trojan", "email": "TommyT@usc.edu"});
        contacts.push({ "firstName": "Patrick", "lastName": "Dent", "email": "dent@usc.edu"});
        contacts.push({ "firstName": "Davina", "lastName": "Wolter", "email": "wolter@usc.edu"});
        contacts.push({ "firstName": "Steve", "lastName": "Child", "email": "child@usc.edu"});

So there are 4 rows of contacts (starting at row number 0) each containing a firstName, lastName and email. If you access/ouput contacts[0]>.firstName you would get "Tommy" (row 0 is the first row) and contacts[1].lastName would be "dent".

(The "push" command add another line to the data object/recordset.)

So going back to the real/actual focus of our page and the data Javascript/json object, data[0].condition would return "Arthritis" and data[0].avgage would return 53. I.e. data[0] is an entire row of data, and data[0].condition is from the first row of data the condition entry/column.

So knowing that there is a message div #messagebox on the page, look at the jQuery code below:

message = "Patients with condition " + data[0].condition + " have an average age of " + data[0].avgage;
$("#messagebox").html(message); 

That would build a message string like "Patients with condition Arthritis have an average age of 53", and put that text into the #messagebox div.

So similarly, if we were to change the code that populates the boxes in the chart graphic, we would change:

        $("#condition").text(condition);
        $("#patients").text(patients);
        $("#highage").text(highage);
        $("#lowage").text(lowage);
        $("#avgage").text(avgage);

to

        $("#condition").text(data[0].condition);
        $("#patients").text(data[0].patients);
        $("#highage").text(data[0].highage);
        $("#lowage").text(data[0].lowage);
        $("#avgage").text(data[0].avgage);

Ok, so why we are doing multiple rows instead of single variables? Well what if instead of populating the page with just ONE row of possible medical conditions, we can load all of the condition stats into different "rows" of data.

But of course using GROUP BY in our sql select statement, we did not actually have to run five separate SQL SELECT queries, each with unique WHERE MedicalCondition = filters. Instead, as we covered earlier, we used the GROUP BY clause in our SELECT statement...

If you need catch up or want to see what we have done up to this point, load up into a php file healthcondition2b_start.txt (http://iyawebdev.com/acad274/lecture_examples/healthcondition2b_start.txt). 

Flowing in data from diferrent rows/records

Just for proof of concept, if you have not already, try editing the jQuery we wrote above to load row 1 instead of row 0:

    // populating stat boxes from the data recordset
        $("#condition").text(data[1].condition);
        $("#patients").text(data[1].patients);
        $("#highage").text(data[1].highage);
        $("#lowage").text(data[1].lowage);
        $("#avgage").text(data[1].avgage);

Notice it populates the chart with the Asthma data instead of the Arthritis data. Ok, change them back to 0.

Let's take a look at the navigation bar that is at the top of the page:

<div id="menu">
    <a href="#" id="arthitis">Arthritis</a>
    <a href="#" id="asthma">Asthma</a>
    <a href="#" id="cancer">Cancer</a>
    <a href="#" id="diabetes">Diabetes</a>
    <a href="#" id="hypertension">Hypertension</a>
    <a href="#" id="obesity">Obesity</a>
</div>

So we can add some jQuery that when #cancer is clicked, it re-writes the boxes with the data from row 1. If you look at the bottom of the jQuery block, let's add the following event handler and code for when the user clicks on the #asthma button. Populate the body of that function like below:

        $("#asthma").on("click", function(){
            $("#condition").text(data[1].condition);
            $("#patients").text(data[1].patients);
            $("#highage").text(data[1].highage);
            $("#lowage").text(data[1].lowage);
            $("#avgage").text(data[1].avgage);
        })

Now when you click on the Asthma button, it loads the data from row 1 into the display boxes.

We can repeat that for the other five buttons, so the user can switch between the different charts. And if you are wondering if there is a more efficient way to do this, yes we could create a function with a rownumber input, and call it with a 0, 1, 2, 3, 4 or 5 argument each time.

Ok, now how about also using that data to put in messages about each of the charts into the message box. Let's update out previous code that put a message about the Arthritis data into the #messagebox to the following:

        message = "Patients with " + data[0].condition + " have an average age of " + data[0].avgage
        message += "<br>Patients with " + data[1].condition + " have an average age of " + data[1].avgage
        message += "<br>Patients with " + data[2].condition + " have an average age of " + data[2].avgage
        message += "<br>Patients with " + data[3].condition + " have an average age of " + data[3].avgage
        message += "<br>Patients with " + data[4].condition + " have an average age of " + data[4].avgage
        message += "<br>Patients with " + data[5].condition + " have an average age of " + data[5].avgage
        $("#messagebox").html(message);

If you are wondering if there is a more efficient way to do this, again yes or course. You could set up a Javascript while or for loop to compile the message more efficiently (parse through all rows) rather than manually doing to line by line.

You can see this version of the page in the php code healthcondition2c_start.txt (http://iyawebdev.com/acad274/lecture_examples/healthcondition2c_start.txt).