
To prep for this class create a new "EVdata" database on your account through cPanel AND create (if you had not previously) a "hockey" database. 

Files you may want to have saved to you computer for this demo (note: right-click on each link and select Save Link As (or Save File As):

- WA_evdata_trimmed.csv (http://iyawebdev.com/acad274/lecture_examples/WA_evdata_trimmed.csv) (note: for importing into phpmyadmin / DataGrip)

- Export of NHL stat history of three top 2026 scorers in csv format: nhl2026_topscorers.csv (http://iyawebdev.com/acad274/lecture_examples/nhl2026_topscorers.csv)

Student animated presention narratives work

Just wanted to highlght some of the student in the past Animated presentation lab. Much of the student narrative work was very impressive, and I am optimistic that your group projects will include similar clear, effective narratives.

Creating more engaging presentation, which leads users through data and conclusions, is crucial to creating data experiences that are more in line with the medium, as opposed to static work (such as in traditional mediums like newspapers and magazines).

By the way, use if AI across the projects was appropriate and useful/improved the work, generally focused on improving design and ui.

- Breadkfast Cereals (https://gomutput.webdev.iyaserver.com/acad274/Week%208/HWbreakfastcerealjquery.html)-- fun animation effects

- Red Bag Problem (https://jkaul.webdev.iyaserver.com/acad274/animated_presentation_Kaul.html)-- good page/panel tracking icons, animated charts

- Orbital Debris (https://dhlai.webdev.iyaserver.com/acad274/jquery_presentation2.html)--animated page numbers

- Reading The Numbers (https://kdmoore.webdev.iyaserver.com/acad274/animated_presentation.html)-- excellent design, details

- Student Getting Enough Sleep (https://alpham.webdev.iyaserver.com/acad274/08a/08a.html)-- well designed, great full-sceeen experience

Notes about group projects

I'm aware that university group projects can be both rewarding (large scope, better outcome than any individual could do on their own) and frustrating (some members do more than their share, some slack off and don't pull their weight). But group work, collaboration, and an understanding and taking of industry-relevant group roles is important in the Academy.

I have a methodology I use for grading of group projects that is fairly transparent and over time I have found most students find understandable and equitable (i.e. I rarely have students question their group grades).

At the end of the semester, all of the group milestones (which have different weights, see the syllabus) are combined into one group grade (with the final project/milestone heavily heighted the most). All of those milestones/deliverables add into the group project "grade" (percentage). But then each member of each group will fill out a survey rating themselves and their peers across various rubrics (communication/responsiveness, contributions, etc.), and then I evaluate each individual's contributions to the group, including any shortcomings and in some cases overachievements. I then assume a percentage to each member. Most get a standard full (100%) credit of the project. But some members might get less (not all of the project points), for those who clearly did not fulfill their agreed upon roles, disappeared for portions of the semester, did not complete their duties/deliverables, etc. And in some cases one or two students might get MORE than the full credit for the group (i.e. 101% = a little extra points) because there was a consensus that that student did more than their share, completed work assigned to others, or otherwise did above and beyond what was assigned and expected.

I find that most students find this approach equitable, and avoids many of the pitfalls and complaints about group projects. It does reinforce the bottomline that is reflected in the industry, i.e. that at the end of the day the project was or was not successfuly (the product launched, etc.), while still maintaining a level of individual accountabilty (which sadly is not always reflected in the profession).

This is part of why it is important that the group's and individual members communicate and have discussions and agreement. If everyone agrees that if Patrick will fulfill tasks A and B, and you fulfill those (besides general group responsibilities), then you will be fine. Even if technically you did less work than others, if there was a consensus of the group that those were your duties/work then you are ok. But making sure there is a group consensus about your role and responsibilities is crucial, to the success of your group and to your grade on the project.

-->

Importing data (from a csv/spreadsheet) into a database [CHECKLIST]

Ok, so you are ready to try to import data into a database (in our case MySQL) from a spreadsheet. Below is a checklist of sorts:

- If you started from a publically available dataset, did you first open it in a spreadsheet to look over the data and columns/header names for any edits (rename any that have names that include common punctuations/formatting like spaces, slashes, and parentheses).

- Did you create a csv (text file) export/version from the spreadsheet? Is the first line of the file the header row (list of column names)?

- Is it aggregate/summary/stat or raw data? If the former, it is likely a couple hundred or thousand lines. If it is the latter, it could be hundreds of thousands or millions of lines of data. The (limited resources) class server db will not be able to handle a larger (10MB+) dataset without locking up, so in that case you may need to break it into multiple files (and if the FIRST one is successful the subsequent files should NOT have a header row, i.e. you only include the header row for the first import (which will set up the database column/field names) -- and accordingly on subsequent imports you will not check the ""The first line of the file contains the table column names" option (although if you are importing to an existing table it likely will hide that option anyways).

- After doing a test import, do the field/column datatypes look ok? I.e. it didn't set up numeric columns (number of goals) as text (varchar) by mistake? You can always edit the fields of the table (Structure in phpmyadin), Empty the data of the table (purge all records but leave the structure) and Re-Import the data back into the table (make sure to skip row 1 if it is a header row). 

Another approach is to let MySQL Workbench import a two-line file, header row and one row of sample data, as it often does a better job that phpmyadmin in setting up columns to the correct datatypes based on sample data. Then use phpmyadmin to import the full data into the existing (set up by Workbenc) table (and remember you can tell phpmyadmin Import to skip X number of rows of the file).

EV vehicle data import

So we will start by opening up a large dataset, larger than we want to import to our small server. If you want to follow along download WA_Electric_Vehicle_Population_DataFULLDATA.csv (http://iyawebdev.com/acad274/lecture_examples/WA_Electric_Vehicle_Population_DataFULLDATA.csv)WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv (note for loading into google sheets NOT for importing) and open it into excel or google sheets.

For our first test import we will import two (related) datasets -- EV vehicles (registered in WA state) and a list of zip codes (with accompanying county and city names) from Washington state.

-->
Related links: 
	WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv (WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv)

-->
Since our EV dataset is raw data (260k or so records), the first thing I'm going to do is open the entire dataset (linked above) and trim it down some of the fields, cut it down to just 50k records, and edit the field names to remove spaces and parentheses.

This will get me down to about a 3MB file (WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv (http://iyawebdev.com/acad274/lecture_examples/WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv)). 

If I did not need granular data, I could simply reduce this to aggregate/stat totals of the data. But since in the future I want to be able to play around with profiles of different EV models and mile ranges, I want to keep the a deeper dataset... although arguably I could reduce it to a couple of different aggregate datasets for that purpose, i.e. list of make, model and ranges as one dataset (not the individual cars but just their models) and the raw numbers GROUPed by make and city.

So save to your computer WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv (http://iyawebdev.com/acad274/lecture_examples/WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed.csv). Then in your "EV" database, in the top nav click on Import and feed it that file and make sure to check the "The first line of the file contains the table column names" option at the bottom and click on the final Import button.

At this point, hopefully you will see a screen that says Import has been successful along with all sorts of other information, but more importantly under the database entry (left nav) you should now see a WA_Electric_Vehicle_Population_DataFULLDATA_fieldedited_trimmed table (named after the filename, with the structure and data of your spreadsheet). Click on that table, and you should see a data grid version of the data with clear column names and data. You can now write SELECT queries against the table/data to extract information (and eventually display into pages).

Let's stop for a moment and rename the table and its cumbersome name. Select the table, on the top nav click on Operations, and Rename Table to simply "cars".

With that data loaded into the db, we could of course pull a specific sub-set of the data through WHERE clauses (such as city='Seattle' or model='Model 3' or ElectricRange > 200). (Reminder: This is only 50k of the 250k records in the original WA EV dataset).

If you did not successfully get your db set up, but previously got MySQL Workbench working (with my guest dent_student account) on your computer you can do some test SELECT statements against the EVData database through the dent_student login (where there are the dbs for movies, health and nhl stats).

We could also pull aggregate data like some of the examples below, although note that I also have in commented out code the name of the full path to the cars table if you are using my db through workbench. Note the queries below assumed you successfully imported the data and renamed the new table to cars.

<!-- count cars with more than 200 mile range by model -->
	SELECT count(*), model 
	FROM cars /* or dent_EVdata.cars */
	WHERE ElectricRange > 200
	GROUP BY model

<-- count Nissan cars by model -->
	SELECT count(*), model 
	FROM cars /* or dent_EVdata.cars */
	WHERE Make = 'Nissan'
	GROUP BY model

<-- Count cars, avg range, max range by Make -->
	SELECT make, count(*), AVG(ElectricRange), MAX(ElectricRange) 
	FROM cars /* or dent_EVdata.cars */
	GROUP BY make;

Of course, we could save some of the aggregate queries as "pre-compiled" views for different page uses. This is a task the db/sql member of the team would work on from requests from the front-end people (for datagrid tables, top-level stat outputs, charts, etc.). But we'll cover that in more detail next class when we revisit creating views (and in a later session passing data as json into PURE html pages -- no php required for the front-end folks).

Import Troubleshooting Tips

If when you tried to import the file you got red screens of errors, what do you do? Below are some suggestions.

But first, note that you can "start over" by selecting the database, then on the line with the table name (after an import attempt) click on Drop. NOTE: MAJOR CAUTION! There is NO UNDO. Clicking on Drop DELETES THE TABLE AND ITS DATA FOREVER. So be careful in doing this action.

Backing-up databasesTo make a backup of your database click on the main database name (from the left nav), click on the top nav Export button, then Export it (with the default options). This will save a sql file to your computer that you could later use to recreate (through Import) your database. The action of re-importing the database (from a saved copy) can be tricky, so you might need help if you run into a need to do so.

This is why it is useful to peridocally backup your database / Export your database (to preserve its data nad structures).

Troubleshooting tips for database import errors:

- No columns or strange/weird columns: Did you remember to click on the "The first line of the file contains the table column names" option when you did the import? If not it imports the "column headers" as actual data rather than understanding the first line of the file is the column/database field name. Note: If you arelater importing additional data/rows (already previously set up the table) you do not want to check this.

- ERROR as a column name: Were there are column names that it may have had trouble parsing? You can fix this in your original spreadsheet and re-export the file or directly fix/edit it in the csv file. The former is recommended in case you later do more trial export / import passes.

- It imported some data then stopped or skipped lines with error: Like #1 above, is there anything in the line/s of data that were skipped that might have caused it problems?

The good news is that you can retry and reimport as many times as you want. you can re-import (and Drop the previous table) -- Note the previous warning caveats above -- and then do another Import (which will create the table again if you have Drop checked).

Hockey data import-- take stats from the web, port into a spreadsheet, clean up the data, export as a csv, import into a database.

Related links:

- ESPN NHL stats:

- ESPN NHL Stat frontpage: https://www.espn.com/nhl/stats (https://www.espn.com/nhl/stats)

- Stat list 1 (McDavid): https://www.espn.com/nhl/player/stats/_/id/3895074/connor-mcdavid (https://www.espn.com/nhl/player/stats/_/id/3895074/connor-mcdavid)

- Stat 2 (Kucherov): https://www.espn.com/nhl/player/_/id/2563060 (https://www.espn.com/nhl/player/_/id/2563060)

- Stat 3 (Mackinnon): https://www.espn.com/nhl/player/stats/_/id/3041969/nathan-mackinnon (https://www.espn.com/nhl/player/stats/_/id/3041969/nathan-mackinnon)

- Google sheets file with nhl top scorer and three player stats data nhl2026_topscorers (https://docs.google.com/spreadsheets/d/1GgdfvhO61mezEvYx_bVPtBJ4TPjqXsIPxTDdusXwMRU/edit?usp=sharing)

- Export of NHL stat history of three top 2026 scorers in csv format: nhl2026_topscorers.csv (http://iyawebdev.com/acad274/lecture_examples/nhl2026_topscorers.csv)

Repurposing/combining data

So we are going to put together/parse two datasets from web data (encoded in html tables): NHL Top Scorers and the stats for three of the top players.

-->
So we are going to compile and edit three datasets into one, and import it into MySQL. These will be the historical statistics for the top three players in the NHL (as of March 31, 2026).

To start, let's open up the top scorers page (https://www.espn.com/nhl/stats/player) from the espn stat page (https://www.espn.com/nhl/stats).

So we will click into the sub-sites for each of the top 3 players -- McDavid (https://www.espn.com/nhl/player/stats/_/id/3895074/connor-mcdavid), Kucherov (https://www.espn.com/nhl/player/_/id/2563060) and McKinnon (https://www.espn.com/nhl/player/stats/_/id/3041969/nathan-mackinnon) -- and drill down into each of their individual "Stats" career statistics pages.

If you did all that successfully you should have something like my nhl2026_topscorers (https://docs.google.com/spreadsheets/d/1GgdfvhO61mezEvYx_bVPtBJ4TPjqXsIPxTDdusXwMRU/edit?usp=sharing) google sheet. Finally, in google sheets we will go to File > Download, select csv, and export that data, which should give you something like nhl2026_topscorers.csv (http://iyawebdev.com/acad274/lecture_examples/nhl2026_topscorers.csv).

[image https://iyawebdev.com/acad274/lecture_examples/nhl2026mcdavid.png]

So clicking through to McDavid's page, THEN clicking on his Stats link, that should take you to https://www.espn.com/nhl/player/stats/_/id/3895074/connor-mcdavid (https://www.espn.com/nhl/player/stats/_/id/3895074/connor-mcdavid). Copy the main table INCLUDING the headers (Season, Team, GP, etc.) and paste that into a new google sheet. Like we had seen previously with many sports stats sites it breaks it up into two sets. So move the main data (column GP onward) and cut/paste it up into line with Season and Team. Then highlight the first column and Insert a new row before that, and name that column "Player", and Paste into each Player box Connor McDavid. That should end up with you having something like at the right.

Now do the same for the next two players, Kucherov and McKinnon. Note: you will likely need to delete the header rows from lower sections if you copy and paste them, and you will need to do the shifting of lower data up to their spots, as well as hand-enter/paste the player names into Column A.

Importing the hockey csv file into your database

Before we move forward, you should have created a "hockey" (or whatnot) database through cPanel. If you have not already log into cPanel, go to Databases > MYSQL Databases, and create a "hockey" database (which will have your name on the front, like dent_hockey).

Open your database through cPanel, i.e. click on/launch Databases > phpmyadmin.

By default, the db will either be empty or have a previous table you imported such as "hockeystats". You can always get back to this table listing by clicking on the database name in the left nav.

With the database selected (so it knows where to import to), click in the top nav Import. Then do the following steps:

- Click on the Choose File button, and point it at your nhl2026_topscorers.csv file (or you can use my nhl_topscorers_2025.csv (https://iyawebdev.com/acad274/lecture_examples/nhl2026_topscorers.csv)).

- Scroll down to the bottom, and click on toggle on the setting The first line of the file contains the table column names.

- Below that, click on the Import button.

At this point, hopefully you will see a screen that says Import has been successful along with all sorts of other information, but more importantly under the database entry (left nav) you should now see a nhl2026_topscorers table (with the structure and data of your spreadsheet). Click on that table, and you should see a data grid version of the data with clear column names and data. You can now write SELECT queries against the table/data to extract information (and eventually display into pages).

If all that was successful, you should be able to run the folllowing queries from the SQL tab (with the database table selected) successfully:

- SELECT * FROM nhl2026_topscorers (all data)

- SELECT Player, AVG(G) AS AVGGoalsPerSeason, AVG(PTS) AS AVGPointsPerSeason FROM nhl2026_topscorers GROUP BY Player (player and career average in goals and points)

- SELECT Player, AVG(G) AS AVGGoals, AVG(G)/AVG(GP) AS AVGGoalsPerGame FROM nhl2026_topscorers GROUP BY Player (average goals and goals per game)

Data Import problems

Now, what if the import had NOT worked, i.e. what if you had gotten errors when you tried to import the csv/data into the database?

-->

Dragging your cursor, copy the main table and paste it into an empty google sheet. Now, note there is an "error" on one column name. If we look at the original data, we can see the name of the column was "+/-" which represents a player's Plus Minus totals, but because the name had mathmatical symbols it confused the spreadsheet platform. So we will edit the ERROR column name to "PlusMinus".

Also, as we encountered before with this data, it actually separated the first two columns into one data grid and the rest into another. So being careful to line them up properly, we will move (cut and paste) the rest of the data up to bring it in line with the rest.

If all of that has gone correctly it should look something like the screenshot to the right.

Finally, in Google Sheets go to File > Download and select CSV. This will save the data in a comma-delineated form, the defacto standard for spreadsheet exports (and imports). If your doc did not properly compile, or the export/download did not work, you can save to your computer  nhl_topscorers_2025.csv (https://iyawebdev.com/acad274/lecture_examples/nhl_topscorers_2025.csv).

Importing a csv file into a database 

Before we move forward, you will need a hockey stats database created in cPanel. If you have not already log into cPanel, go to Databases > MYSQL Databases, and create a "hockey" database (which will have your name on the front, like dent_hockey).

Open your database through cPanel, i.e. click on/launch Databases > phpmyadmin.

By default, the db will either be empty or have a previous table you imported such as "hockeystats". You can always get back to this table listing by clicking on the database name in the left nav.

With the database selected (so it knows where to import to), click in the top nav Import. Then do the following steps:

	- Click on the Choose File button, and point it at your nhl_topscorers_2025.csv file (or you can use my nhl_topscorers_2025.csv (https://iyawebdev.com/acad274/lecture_examples/nhl_topscorers_2025.csv)). 

	- Scroll down to the bottom, and click on toggle on the setting The first line of the file contains the table column names.

	- Below that, click on the Import button.

At this point, hopefully you will see a screen that says Import has been successful along with all sorts of other information, but more importantly under the database entry (left nav) you should now see a nhl_topscorers_2025 table (with the structure and data of your spreadsheet). Click on that table, and you should see a data grid version of the data with clear column names and data. You can now write SELECT queries against the table/data to extract information (and eventually display into pages). 

If all that was successful, you should be able to run the folllowing queries from the SQL tab (with the database table selected) successfully:

	- SELECT * FROM nhl_topscorers_2025 (all data)

	- SELECT Name, G AS Goals, PTS AS Points FROM nhl_topscorers_2025 (player, goals and total points)

	- SELECT Name, G AS Goals, G/GP AS GoalsPerGame, GP as GamesPlayed FROM nhl_topscorers_2025 (goals per game)

Now, what if the import had NOT worked, i.e. what if you had gotten errors when you tried to import the csv/data into the database?

Import Troubleshooting Tips

If when you tried to import the file you got red screens of errors, what do you do? Below are some suggestions.

But first, note that you can "start over" by selecting the database, then on the line with the table name (after an import attempt) click on Drop. NOTE: MAJOR CAUTION! There is NO UNDO. Clicking on Drop DELETES THE TABLE AND ITS DATA FOREVER. So be careful in doing this action.

Backing-up databases

	To make a backup of your database click on the main database name (from the left nav), click on the top nav Export button, then Export it (with the default options). This will save a sql file to your computer that you could later use to recreate (through Import) your database. The action of re-importing the database (from a saved copy) can be tricky, so you might need help if you run into a need to do so.

This is why it is useful to peridocally backup your database / Export your database (to preserve its data nad structures). 

Troubleshooting tips for database import errors:

	- No columns or strange/weird columns: Did you remember to click on the "The first line of the file contains the table column names" option when you did the import? If not it imports the "column headers" as actual data rather than understanding the first line of the file is the column/database field name. Note: If you arelater importing additional  data/rows (already previously set up the table) you do not want to check this.

	- ERROR as a column name: Were there are column names that it may have had trouble parsing? You can fix this in your original spreadsheet and re-export the file or directly fix/edit it in the csv file. The former is recommended in case you later do more trial export / import passes.

	- It imported some data then stopped or skipped lines with error: Like #1 above, is there anything in the line/s of data that were skipped that might have caused it problems?

The good news is that you can retry and reimport as many times as you want. you can re-import (and Drop the previous table) -- Note the previous warning caveats above -- and then do another Import (which will create the table again if you have Drop checked).

Merge multiple datasets then import

Ok so that was pretty straight-forward, and generally importing a single table of data is fairly simple. But what about combining multiple datasets and importing those?

Check out the three player stat pages below:

	- Sheifele career stats (https://www.espn.com/nhl/player/stats/_/id/2562632)

	- MacKinnon career stats (https://www.espn.com/nhl/player/_/id/3041969)

	- Eichel career stats (https://www.espn.com/nhl/player/stats/_/id/3648002)

[image https://iyawebdev.com/acad274/lecture_examples/nhl_threeplayers.png]

So for the first player, copy the data and paste into a blank Google sheet. Make sure you copy all of the table including the header columns.

Like the scorer stats, ESPN does a weird thing where it separates the first two columns from the rest. So move the lower data up so it is in line with the main data. Note that we again got one ERROR column header, so rename that column (which was +/-) to "PlusMinus".

Now, there is no "player" column, so add a new first column, name it Player, then enter Mark Shiefele into every cell for that data (enter once then copy/paste into subsequent rows).

Ok, now open up the MacKinnon stat page. Copy the same data and paste to the bottom of your sheet but paste starting at column B (skip the Player column). Move the lower data up in line, and if you included the header column delete that row. And enter Nathan MacKinnon into each of the player cells (column A) for the new data.

Finally, move onto the last set of stats, paste that in, and enter Jack Eichel into the player column for the new data. 

Now before we export the data, notice that there is no data for some seasons, but everyone has 15-16 onward. So let's delete data related to the 11-12, 12-13, 13-14 and 14-15 seasons. For this dataset/analysis, it works fine to do so (reduce range to recent seasons) but obviously for some datasets this might be a non-starter).

Now do another Download as a CSV file -- or if you want to work from my download you can save nhl_threeplayers_2025.csv (https://iyawebdev.com/acad274/lecture_examples/nhl_threeplayers_2025.csv) --  then go back to your database and Import the file (remember to check the First line column names option).

To test if it is working, you should be able to run the SQL queries below (note these could also be saved as stand-alone "views" of the data):

	- SELECT * FROM nhl_threeplayers_2025 (edit the FROM table if yours is not the same name)

	- SELECT season, player, PTS as Points, GP as GamesPlayed, PTS/GP as PointsPerGame FROM nhl_threeplayers_2025 ORDER BY PTS DESC (points per game, sorted by pts from highest to lowest)

	- SELECT SUM(PTS/G) AS PointsPerGame FROM nhl_threeplayers_2025  (average points per game from all three players combined)

	- SELECT player, SUM(PTS/G) AS PointsPerGame, SUM(GP) as GamesPlayed FROM nhl_threeplayers_2025 GROUP BY player  (Career points per game, by player)

So you can imagine a webpage focused on points per game, where you first run the third query to find out the average points per game among the players over time, then use the fourth query to find each of their individual career points per game, then use of one the first two queries to list out their granular season and point details. (And of course as we could create charts/visualizations of the data.)

Btw, you can test multiple SQL queries together in the database (although not in php) through phpmyadmin and mysql workbech by separating consecutive queries with semi-colons. Try running the following as one query:

	SELECT SUM(PTS/G) AS PointsPerGame 
	FROM nhl_threeplayers_2025
;
	SELECT player, SUM(PTS/G) AS PointsPerGame, SUM(GP) as GamesPlayed 
	FROM nhl_threeplayers_2025 GROUP BY player
;
	SELECT season, player, PTS as Points, GP as GamesPlayed, PTS/GP as PointsPerGame 
	FROM nhl_threeplayers_2025 ORDER BY PTS DESC 

Some possible next steps could include:

	- Using php to retrieve the database results and flow them into front-end pages/screens

	- Saving "views" of specific queries/sub-queries of the data

	- Feeding query outputs into chart scripting

We will cover all of these varients in upcoming class sessions.

Also, one thing we did not get into is if you imported two or more datasets (spreadsheet/csv exports), and how to connect them (through views).

-->