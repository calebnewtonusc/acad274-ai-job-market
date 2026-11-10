
Reminder: We will be working in DataGrip today, if you have not installed it it might be beneficial as (in the longer term) it would give you access to your group database (created by a member of your group on their server). And if you are just now setting up DataGrip on your laptop, below are the "guest account" crendentials you can set up in DatqGrip to access my guest databases (hockey, EVdata, etc.) for class demos today
	hostname: webdev.iyaserver.com (Note: that is the server for ALL accounts)
	user: dent_student
	pw: code4Studentuse

Creating user accounts for your database

As you start in on your group projects, ONE student will have to house the database on their account. But that does not mean others are locked out from directly viewing data (and in some cases editing or inputting data) to the db. And it is NOT recommended that you share your cPanel login (which is also your server and site login).

In cPanel, go to Databases > MYSQL Databases. That module will then list out all of the databases on YOUR account. Scroll down below the list of databases to MYSQL Users and Add New User (to your database server). Enter a new username like "site" (note it will have your username then the new, like my new account would be named dent_site) and a pw and then click on Create User.

Now, still on the MYSQL Database module, note that the new database account is listed under Current Users. Just above that, go to Add User to Database. Set the Database to your group db, and then select the new User and click on Add. 

Finally, on the Manage User Privileges module it took you to, you can set what level of access/power that account has. If you created this account just for the php code/site to access the db, only select SELECT. If this is an account for users to edit and add data, you can check SELECT, INSERT and UPDATE. And if you can them to be able to edit and add to the structure of the database, its tables and views, you can add additional privileges such as ALTER (table and views), Create View, etc., or cliick on ALL PRIVILEGES and then they will be able to do everything you can (including deleting tables and data). And then click on Make Changes.

At any point, you can edit the privileges of a database account by going to the Current Databases list, and under a db clicking on that account name.

With their account, they will be able to access your database through php code and through DataGrip. But note they will NOT be able to log into it through phpmyadmin. If you created an account for site code, make sure everyone's php routines use that login info (so your username/pw is not in everyone's code).

Creating views (in database) -- review

Milestone 1 requires that the intial db/imports have two views. Previously we did some demos and workshops on importing data (from spreadsheets/csv files) into a database (also a M1 requirement). Even for alpha single-table databases, you can create "views" of the data separate from the raw information. Besides expanding knowledge a bit, this exercise should help teams understand the process and roles of views (versus the unfiltered and less structured data).

A "view" in a database is a precompiled version of the data, often (but not required) across multiple tables. Sometimes a view can be as simple as a filtered version of the data, eliminating some columns and resorting the data in a particular order. They can also provide new versions of data, including combining data/columns and of course aggregate/statistical/calculated versions of information.

In a traditional relational database, a view can bring together data across multiple tables/entities/collections. So for instance, in a distributed hockey stats db where the players are stored in one table, the team in aother, etc., a view could bring together a player's stats from the player, teams, and raw stats tables (since in the player table the team is an ID like "9" not the actual name of the team, etc.).

A view can also contain specific versions of data, such as different stat lines (through aggregate sql). So for instance, relevant both to a distributed/normalized database AND some of our sample "single table" dbs (like our EV car data), one view might highlight/extract particular information, such as Goals-Per-Game career stats for hockey players or average ElectricRange for vehicles by City.

Saving queries as "views"

phpmyadmin: At the bottom of query you have run, click on Create View. Then in the next screen enter a name into the VIEW name box, and click on Close. TEST that the view works by clicking on the new view in the left database navigation.

DataGrip: With the SELECT statement copied to your clipboard, in the SCHEMAS pane right-click on the database to create a new view from and select New > View. Edit the default 'view_name' name to the name you want to save your view as, and then paste your pre-tested SELECT statement to the bottom (after AS), then click on OK.

NOTE: As a reminder you cannot save/create views in a database unless your account has permission to do so. On your own server you have full access to a db, but if you are using a "guest" login it might not have that permission (such as dent_student).

Creating queries (to become views

To test the following queries and views we will access the dent_hockey and dent_EVdata databases through DtaGrip using the dent_student account. 

Open up DataGrip through the dent_student login (not your own login). To remind ourselves of the underlying data we can browse the core tables first (worksheet icon or right-click and Select Rows) for dent_hockey --> nhl2026 and dent_EVdata --> cars.  nhl_stats_2025 and nhl_toplayers_2025 for the following exercises to run correctly, although if your tables/data collections have different names you could edit the SQL accordingly-->

Let's start with the EV cars data. Let's write a query that would pull car data sorted by make and model.

SELECT make, model 
FROM dent_EVdata.cars
ORDER BY make, model

Notice we SORTED (ORDER BY) by make then model, so they would not be in the random order of vehicle registrations.

But let's imagine our project designer said they would like a list of total number of EV vehicles (for a chart). So we need to write aggregate sql to pull totals by model:

	SELECT COUNT(*)
	FROM dent_EVdata.cars
	GROUP BY model

Ok, but that gives raw totals without the actual model names. So we can ask model to the SELECT clause as an output column. But they'd also like them to be organized by make, and to have that part of the output we give them. The below query would first group all the data by make, then sub-group them by model, and both generate totals for each model and include make, model and total number of vehicles in the results (and through the AS clause "name" the total number under the name NumberOfVehicles):

	SELECT make, model, COUNT(*) AS NumberOfVehicles
	FROM dent_EVdata.cars
	GROUP BY make, model

Saving queries as "views"
phpmyadmin: At the bottom of query you have run, click on Create View. Then in the next screen enter a name into the VIEW name box, and click on Close. TEST that the view works by clicking on the new view in the left database navigation.

MySQL Workbench: With the SELECT statement copied to your clipboard, in the SCHEMAS pane right-click on the Views item and select Create View. Edit the default 'new view' name to the name you want to save your view as, and then paste your pre-tested SELECT statement to the bottom (after AS), then click on Apply and follow the steps.  	

NOTE: As a reminder you cannot save/create views in a database unless your account has permission to do so. On your own server you have full access to a db, but if you are using a "guest" login it might not have that permission (such as dent_student).

-->
So then (if we had permissions on the database we could "save" this pre-compied "view" of the data into the database (such as under the name MakeModelVehicleTotals). As it happens, I have saved the exact query as a "view" in the database with that name. And btw,

So let's say one of our front-end folks asked for the above query but ONLY for Tesla vehicles? Then we could update the query to:

	SELECT make, model, COUNT(*) AS NumerOfVehicles
	FROM dent_EVdata.cars
	WHERE make = 'Tesla'
	GROUP BY make, model

But if that MakeModelVehicleTotals "view" exists, we could actually much more simply just write the query:

	SELECT * /* every field already in the view */
	FROM dent_EVdata.MakeModelVehicleTotals
	WHERE make = 'Tesla'

So the MakeModelVehicleTotals works great for those queries. But what if someone asked for a dataset filtered by city? Well that is not in that precompiled view, so we'd have to go back to the original data or create a new dedicated view.

So someone asked us for a list of all vehicles by make in the city of seattle and the average electric range(across all models) AND the max electric range, organized by make. So that would be something like:

	SELECT make, count(*), AVG(ElectricRange), MAX(ElectricRange) 
	FROM dent_EVdata.cars
	WHERE city = 'Seattle'
	GROUP BY Make

One interesting insight from that data output is that while the average electric range among Tesla vehicles was 58.19, there was a max of 337. So perhaps a deeper query by model would be useful to dig into that specific make information. This means we would need to add a make='Tesla' filter to our WHERE clause and change our GROUP BY to model:

[image https://iyawebdev.com/acad274/lecture_examples/views_ss2.png]

	/* Tesla models in Seattle */
	SELECT model, count(*), AVG(ElectricRange), 
		MAX(ElectricRange)
	FROM dent_EVdata.cars
	WHERE city = 'Seattle' AND make='Tesla'
	GROUP BY model

This gives us the strange information that many models have an average electric range far below the max reported range (and a strange anomoly that the recorded cybertrucks had a 0 range), perhaps prompting us to dig deeper into the grunular/raw data...

Creating views for sports/hockey data

Ok, so let's shift to the hockey data (nhl2026) we created/imported last time. This consists of rows of career of data for three nhl hockey players (the current top scorers).

So what if we wanted to create statistics that would look not at the current season stats or totals but careers averages for each player, such as Points per season and Goals per season? So each season tracks goals (G) and points (PTS). So regardless of how many seasons each player has played we could certainly find out the average Goals and Points for each player (and use GROUP BY to cluster by player):

	SELECT Player, AVG(G), AVG(PTS)
	FROM dent_hockey.nhl2026
	GROUP BY player

Ok, but due to injuries players play different number of games each season. So how about instead if we evaluated goals per game for each of the top players? And to throw something different into the mix also their average penalty minutes (PIM)? So AVG(PIM) over their careers is pretty simply, but how about goals per game rate? So for that we can take the total (SUM) of all their goals (G) and divide them by the total (SUM) of all their games played (GP). And let's assign aliases (AS) to each of those values:

	SELECT Player, SUM(G)/SUM(GP) AS GoalPerGame, 
	AVG(PIM) AS AveragePIM
	FROM dent_hockey.nhl2026
	GROUP BY player

If the SQL query runs successfully for you, you should see lines of data, and at the bottom an option to Create View from the query.

[image https://iyawebdev.com/acad274/lecture_examples/hockeyview1.png]

Clicking on Create View should take you to a screen with lots of form fields. Ignore all of then except VIEW name, and put in a text name such as "PlayerStats", and click on Go to save the View.

If the process ran successfully, you should now see a GoalsPerGameStats view in your database, along with the tables. To check, you could re-select your hockey database in the left nav. Note: in the database table listing views (of pre-compiled data from real tables) appear the same as actual data tables (see image below). In the database navigation listing you should also now see a sub-menu that breaks out the list of Views (which now only has one).

[image https://iyawebdev.com/acad274/lecture_examples/hockeyview2.png]

[image https://iyawebdev.com/acad274/lecture_examples/hockeyview3.png]

Try running the SQL below in your hockey db and saving it as a view TopGoalScorers:

SELECT Name, G AS Goals, A As Assists, GP as GamesPlayed, 
G/GP AS GoalsPerGame, PTS/GP as PointsPerGame 
FROM nhl_stats_2025
ORDER BY G DESC

And let's try one more view, which provides specific statistical/aggregate information about the top three players (different table) that is is in addition/new to the raw information -- save the new view as TopScorerStats:

SELECT PlayerName,
SUM(GP) as GamesPlayed,
COUNT(season) AS NumberOfSeasons,
SUM(G) as TotalGoals,
SUM(PTS) as TotalPoints,
SUM(PTS) / SUM(GP) as PointsPerGame,
SUM(G) / SUM(GP) as GoalsPerGame
FROM nhl_topplayers_2025
GROUP BY PlayerName

If your work was successful, you should see a list of views like the right.

Once those views are up and running, besides writing SELECT queries against the table you can also run them against the views, so for instance you could run queries like:

SELECT * FROM PlayerStats 
WHERE PointsPerGame > 1 ORDER BY PointsPerGame DESC

SELECT * FROM TopGoalScorers 
WHERE GamesPlayed >= 12

If you want to populate all of the work in the hockey stat databse, from the three original tables to the three related views, you could Import the file hockey_threeviews.sql.txt (https://iyawebdev.com/acad274/lecture_examples/hockey_threeviews.sql.txt) into a blank db.

-->