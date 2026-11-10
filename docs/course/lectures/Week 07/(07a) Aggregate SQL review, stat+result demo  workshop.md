
Save to your computer (or have the link ready for)  stats_start.html (https://iyawebdev.com/acad274/lecture_examples/stats_start.html) 

If you installed and set up DataGrip (with the login/profile for dent_student, which we did last class), then you will be able directly view the hockey stat data we are going to work with today. If not, you can still write/build php code that accesses it, but you will not be able to browse the data structures (and columns) directly.

Resource:

- basic / stripped down php code (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) (based on movies data)

Review: aggregate (statistical) SQL:

- Use SEPARATE queries for raw data (data grids, rows of data) and statistical queries. So you might common have TWO queries on a dataset, one (like Select *) that pulls all data and another that uses aggregate sql to create statistics about the data. But if they are working on the same data you will want to make sure they have identical WHERE clauses (that they are filterig the same data).

- Main aggregate sql commands are SUM(), AVG(), MAX(), MIN() and COUNT()

- Need to use aliases (AS) on each aggregate command. So not AVG(Totals) but AVG(Totals) AS AvgTotals. The "name" you assign to the data (through AS) can be anything, but do not use spaces in the name.

- See previous lecture for detailed notes on commands and SQL samples

Demo: Building a page with both a data output and aggregate sql

So for this demo, we will dive into the hockey database, and especially the 2025nhlscorers table/data collection. As a reminder, the DataGrip account info/credentials are below:

hostname: webdev.iyaserver.com
user: dent_student
pw: code4Studentuse (have to click on PW Vault to store)

So if we log into DataGrip (using the dent_student account/profile) you can see the dent_hockey db. If you open up the db, then select the table 2025nhlscorers and click on the right-most "datasheet" icon, you can browse the data. This will also bring up a SQL window with something like "SELECT * FROM dent_hockey.nhlstats". Just in case you have not installed datagrip and cannot open up the table, below is an example of some of the data.

[image https://iyawebdev.com/acad274/lecture_examples/hockeystats_ss1.png]

So see what you think the following data query would return:

	SELECT * 
	FROM nhlstats
	WHERE G >= 30
	ORDER BY Pts DESC

How about filtering by players in the top scoring who had more than more than 20 penalty minutes (PIM), sorted by Goals descending?

Going to aggregate SQL, how about using the same PIM criteria above, the average PIM, average Goals, average Points, AND average PIM per Game -- the latter is not AVG(PIM) but AVG(PIM/GP) ... and yes, we can include math equations in our aggregate SQL.

Demo: page with both aggregate/stat output and data rows

Ok, so we are going to build a page that has some top-level stats at the top AND a datagrid output (in html table format), paralleling your health data assignment.

We will do queries that will run against the nhlstats table of the dent_hockey. Which means that when we get to inserting php code into the page we will need to change the database= parameter of the sample code from dent_movies to dent_hockey.

So as we explored earlier the nhlstats table has about 50 rows of the to scorers in the NHL from the 2024-2025 season. We are going to narrow that down to top scorers with high penalty minutes (PIM).

But first we will design the page. Through cPanel File Manager, create a file named stats.php. Open it in Edit mode and paste in the contents of the page stats_start.html (https://iyawebdev.com/acad274/lecture_examples/stats_start.html). Note that I have a red border on EVERY object, so you can see the boxes it starts with. To start we should:

- Set the #container size (design/layout area), and set up a color scheme for the body, container, and main boxes. Note a useful web utility is coolors color pallete generator (https://coolors.co).

- Edit the #statcontainer box and the .statbox boxes so that the former is a flexbox and the latter have flex basis of 240px, and adjust #statcontainer's justify-content for the inner boxes (can use the css tricks flexbox guide (https://css-tricks.com/snippets/css/a-guide-to-flexbox/) as reference).

- Do some basic stylings for the header, #analysis, footer, and the series of .statbox

- Add any styles to the table, and create one (or more) sample rows of data with td (not th).

- Preview, tweak, then when happy with it copy the content of that html file and create a new .php file on the server and paste in that html+css+text code (through cPanel > Fine Manager_. Do a quick test of the .php file through the server (can use the roster link resource to get to your files) before layering in the back-end (php) code.

- You can see a (very ugly) version of this designed, PRE-php page at stats_styled.html (https://iyawebdev.com/acad274/lecture_examples/stats_styled.html)

Do a quick test that your page still looks correct by looking through the new .php version in web browser through a server url (can use the roster link resource to get to your files) before layering in the back-end (php) code.

Onto adding in the php...

- Place Part 1 of the php sample code (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) at the top of the .php file (through cPanel > File Manager). CHANGE the database name from dent_movies to dent_health.

- Find where the stats should start displaying. At that point of your code paste in Part 2 and Part 4b (not 4a):

- For Part 2, edit the $sql to your aggregate (statistic) query, and make sure you are querying the table nhlstats.

- SKIP Part 3 -- we do NOT need Part 3 for this, because we don't need to know how many rows of data the single-line aggregate created.

- For Part 4b not 4a), edit "columnname" to one of the aggregate aliases (X AS Y) from your Part2 sql. You should see that number appear. If so, take just the output line (<?= =>) and place a copy in each place you need a stat output (from your Part 2 query). DO NOT repeat the $currentrow=$results=>fetch_assoc() code more than once. 

- Now find the place where your table is. Just above it copy and paste Part 2, 3, and 4a. Edit Part 2 to your $sql (select * from nhlstats where ...). You can include Part 3 if you want to indicated how many records will be in the table or you can ski it. And place Part 4a after the header row, and inside the loop build out a tr/td row, using the output code inside each td (table cell).

You can see a html version of the final page at stats_final.html (https://iyawebdev.com/acad274/lecture_examples/stats_final.html)