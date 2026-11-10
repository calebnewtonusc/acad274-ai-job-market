
We are going to explore a health dataset. If you want to test queries directly you can complete the steps below. I will also walk through the steps in lecture:

- Download the file healthdataset1.sql.txt (http://iyawebdev.com/acad274/lecture_examples/healthdataset1.sql.txt)

- in cPanel, create a new "health" database (Database > MySQL Databases > Create Database)

- Launch phpmyadmin, open up your new health database, and import the file above. When it is complete you should have a simple table with around 2600 rows/records.

Today we are also going to use the (free) visual database DataGrip. If you want to follow along on the DataGrip demo you should have already installed the program from https://www.jetbrains.com/datagrip/ (https://www.jetbrains.com/datagrip/) and create a (free) educational account with your usc.edu email. See related Announcement for more details, and the Content post (06b resource) DataGrip (database visual tool) overview (and install).NOTE: I recommend doing this EARLY. There can be some additional things (pre-req) you have to install on your computer. I.e. do not wait until 10 minutes before class.

-->

This may also be useful for many people when we get to the group projects because while every member of a team can submit code to a database through a guest login, only the owner of a database can log into phpmyadin through cPanel to diretly test SQL SELECT statements. But members of the team can use a third-party program like Workbench to connect to the database and test queries.

Resources:

- basic / stripped down php code (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) (based on movies data)

- php sample code with embedded debug info (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt) (also movies data examples)

Review: Multiple queries in a page

So what if you want to have more than one query in a page, whether that is two tables or results or one or more of your queries is a list of stats? There are some basic guidelines for displaying more than one query in a page (note the Resource: php entry in Brightspace).

- You only set up the database connection once regardless of if you are going to do multiple queries in a page (one exception would be if you had queries from two different databases. So you can put the db connection code at the vry top of your file for later use.

- (The next part of your file is likely starting to build the page in html, css and text)

- Write a query and submit it to the database and store the results/response/dataset as $results. Then output the query information into the page (whether directly or in a loop). So this is the part you might have to do multiple times, i.e. if you have more than one SELECT statement, the database response to each obviously needs to be stored one by one in result containers, and outputted. Like if you wanted to display R-rated Comedies and then display G-rated Dramas. For this the recommended approach for each query:

- If a stat query, possibly directly set $currentrow to $results->fetch_assoc(), then output the column data in various locations

- OR

- If a traditoonal query, set up a loop to output the rows of data.

- At the location where you want to start outputting query data, paste in the code that builds the SELECT statement and saves the database results in $results

- Output any meta data like $results->num_rows into the page (not for stat /aggregate queries)

- EITHER

You can see the completed version of a two queries demo you can look atmovie2demoend.php (http://demos.webdev.iyaserver.com/acad274/movie2demoend.php) or view the code at movie2demoend.php.txt (http://iyawebdev.com/acad274/lecture_examples/movie2demoend.php.txt).

DataGrip

See stand-alone Resource post  (06b resource) DataGrip (database visual tool) overview (and install) for information and installing and setting up DataGrip. NOTE1: You have to create a RemoteSQL entry in cPanel (see Resource). Note2: You can set up multiple "DataSources" in DataGrip. For instance maybe you set up one using my guest login credentials, then another with your cPanel credentials.

Quick DataGrip tips/walkthrough:

- Browse tables and views: In the left nav, double-click on any table or view to open it up in Browse/Data mode. Above the data listing you can directly type into a WHERE box to filter the results.

- Multiple queries at once: You can run many queries at once (unlike phpmyadmin), with each one in its own tab, and can switch between them.

- Build SELECT query: Right-click on a database/schema and select New > Query Console. One window is the query, the lower one is the output. Click on the green arrow or press Ctrl-Enter to run/re-run the query in the Output window.

- Visual Diagram: My FAVORITE feature of DataGrip. Right-click any top-level database/schema, and go to Diagrams > Show Diagram. First off, pretty decent design. BUT, best of all you can right-click on the visual diagram and select Layout to get MANY different diagram templates and styles!

hostname: webdev.iyaserver.com (Note: that is the server for ALL accounts)
user: dent_student
pw: code4Studentuse

To set up/create a connection run Workbench, then click on the little + symbol to create a new connection. You can "name" the Connection Name anything (like student guest account), then enter the hostname and username as above, then click on Store in Vault for the password, and paste in that from above. Then at the bottom right click on Test Connection to make sure you got all the login information correct. Then click on Close.

That should bring you back to the main screen with a list of "Connections", and you can double-click on the profile you just created to jump into Workbench through that connection to my server.

Once inside, you have access to three class databases (in read-only mode): health, hockey, and movies. In workbench each database is listed under the left "schema" window:

- For movies, you want to just access view1 and view2 under the Views section, and not interact with the tables directly.

- For health you can open up either of the tables directly. You can also use the procompiled hr_by_age_gender dataset that combines all of the heart rate vitals by patients, and lists out their age, gender, AvgHR and total number of ratings for that patient.

- For hockey, there are a number of tables/collection of different data, as well as some pre-compiled views. We will mainly use this to create some different aggregate (statistical) summaries of some of the tables.

Workbench basic:

- mySql Workbench is one of the db tools we will use in this course. Unlike phpmyadmin, it is a visual environment to author mySql databases. Many beginners find a visual environment easier to use and learn initially.

- First off, workbench is an authoring environment, but it is NOT the database itself. You will have a mysql database that you create (have to use cPanel to create the initial db), and workbench gives you a visual UI for editing and adding data to the database. So while it may seam strange, you first need to create the database before you can author it in workbench. Of course, if you are using my guest account you are connecting to three databases I set up for public access BUT you will not be able to edit the data, tables or views.

- In workbench, a database is represented as a SCHEMA. On the left in the navigator if you created a database through cPanel, then you should now see it listed under Schemas. Select/Open it up. Note that if it is a brand new database you just created then there will not(yet) be any tables listed under Tables.

- To make your queries easier, start by right-clicking on a databse (schema) and selecting Set as Default Schema. Then select a table or view and click on the datasheet icon. At the top it will show a SELECT * query that pulls all the data. You can edit that query to run custom results. The third lightning icon above the SQL window lets you run/rerun your SQL for new/updated results.

- Data editing (if you have permission): This is an area where the Workbench UI is generally superior to phpmyadmin. When connecting to your own server/databases (even if you populated them from my scripts), open up any table that has data. On a specific table either right-click and Selet Rows -- Limit 1000) or click on the little worksheet icon to the right of the table name. From here you can edit the contents of a table as if it were in a spreadsheet... moving between columns and rows. Just keep oin mind that no changes you make (and to multiple rows/records) are actually committed until you press the Apply button. You could lose a lot of work by doing extensive data entry/editing but never "saving" the changes with Apply.

SQL SELECT review

- The SQL SELECT command requests/builds a query from the database. You can test queries directly in the db, but then eventually use a back-end language like php to get the dataset from the database to the application (in our case to the front-end of a web app).

- We will generally write SELECT statements against views in a database, not dirextly to a table. And we will just ask for all fields/data columns (which is ineffecicient and not something we would do in real production). This means we can skip past the first two clauses of SELECT statements and just focus on the WHERE clause that filters the data.

- The SELECT command technically has up to four clauses, but as noted we will really be focusing on the third WHERE portion. Nevertheless:

fields/columns to return in query, * means "all"

	SELECT *

view or table/s to submit query to

	FROM view1

conditions/filters of query

	WHERE title LIKE '%dog%' AND RATING = 'R'

sort order of results by column

	ORDER BY title

- WHERE clause can match/filter:

- STRING/TEXT MATCHES either exact such title='Die Hard' or partial matches with LIKE and wildcard such as tite LIKE '%dog%'.

- EXACT numeric or date matches like age=31

- HIGHER or LOWER numeric or date such as age >=21 or releasedate > '2024-01-01'

- Can use logical operators such as AND and OR and parenthesis to create more complex conditions.

Some SQL SELECT review exercises -- write a SQL statement against the movie (or dent_movies) db that:

- Queries view1 and matches movies STARTING with the letter D that are rated PG.

- Queries view2 and matches movies that were released after '1985-01-01' and are of the genre Comedy by the studio 'Warner'.

- (Slightly harder) Queries view1for movies that are Rated R, by the studio Artisan, that are EITHER a Drama or Comedy.

More SELECT exercises below when we explore the new heath database...

Health dataset

So we have a new health database/dataset with (anonimized) data about patients in a hospital. You can see some sample output rows (header columns) and you can import/load it into your own database on the server from healthdataset1.sql.txt (http://iyawebdev.com/acad274/lecture_examples/healthdataset1.sql.txt).

[image http://iyawebdev.com/acad274/lecture_examples/health1_sampledata.png]

So the above dataset has a simple table named "healthcare_dataset". Notice this health dataset has raw data about patients with various ailments (Medical Condition), Admissions (Urgent, Emergency), TestResults, and a Medication they were administered.

So looking at above, you could submit a SQL statement of

SELECT * 
FROM healthcare_dataset 
WHERE AdmissionType = 'Emergency' AND MedicalCondition = 'Cancer' AND BloodType = 'AB+'

and that would return the 13 records/entries below:

[image http://iyawebdev.com/acad274/lecture_examples/health1_sampledata.png]

 135 AND AGE > 65 AND  `RiskCategory`='High Risk';

	select 
	Age, Gender,
	count(HeartRate) AS TotalRatings,
	avg(HeartRate) AS AvgHR
	FROM human_vital_signs_dataset_2024
	GROUP BY Age,Gender

-->
So working off those concepts, could you write SELECT statements that only returned:

- Men admitted into Urgent, ages 30-40, with blood type AB+

- People admitted into Emergency with Cancer who were given a particular medication

- Women between 50 and 60 years of age, admitted into Emergency, who were given Liptor, whose tests were Inconclusive.

Aggregate SQL -- creating statistics

So a different approach to querying databases is rather than returning rows of raw data, creating a single row (to start) of statistical information that derives numbers by summarizing and calculating the raw data.

Some of the most common tasks related to aggregate sql is to create statistics such as:

- COUNT the number records (row)

- Get the total (SUM) a numeric column

- Get the average (AVG), highest (MAX), and/or or lowest (MIN) number in a column

See the separate "Aggregate SQL" resource for explanation of the commands and their uses, and more examples.

(Example previous semester class demo)

So to see some simple(ish) aggregate sql in action, in the health database, below is a simplified page that outputs aspects of the query "SELECT AVG(Age) AS AverageAge, AVG(BillingAmount) AS AverageBill, COUNT(Name) AS NumberPatients FROM healthcare_dataset WHERE Medication='Aspirin' AND AdmissionType='Emergency'" :
working page (http://demos.webdev.iyaserver.com/acad274_demos/aggrsql_health.php), and the underlying code (http://iyawebdev.com/acad274/lecture_examples/aggrsql_health.txt)

So in the dataset it lists what medication a patient was getting. What if we wanted to perform some statistical output based on medication use? One of the fields is Medication. Aggregate SQL could do things like COUNT how many patients took a certain medication, get an AVG age of those patients, and the AVG final bill of patients that took that medication. Try the SQL below:

Query output:
[image http://iyawebdev.com/acad274/lecture_examples/aggrsql1.png]

SELECT
	COUNT(Name), 
    AVG(Age),
    AVG(BillingAmount)

FROM healthcare_dataset
WHERE Medication = 'Aspirin'

But those columns don't have real "names", so we would not be able to access/output them in php. So we assign "alias" names to the output. With the tweak above note the change in output column names.

Query output:
[image http://iyawebdev.com/acad274/lecture_examples/aggrsql2.png]

SELECT
	COUNT(Name) AS ApirinPatients, 
    AVG(Age) AS AverageAge,
    AVG(BillingAmount) AS AverageBill

FROM healthcare_dataset
WHERE Medication = 'Aspirin'

So to recap a typical aggregate SELECT statement:

- Is ONE row of data, NOT multiple rows. (So that gives us a use for the Part 4b from our template).

- Each field is an original calculated field and MUST be assigned a name through the AS command (alias)

- With some later exceptions, statistical (aggregate) queries are ONLY stats and NOT raw data. I.e. counts, averages, etc, but not actual names/strings, individual numbers, dates, etc.  

GROUP BY 

Onto more complexity, what if we wanted to contrast all of them? In SQL there is a special GROUPing command that takes a larger results set and clusters/sub-sorts it by a specific column. And while you cannot normally output "normal" (text) data columns in aggregate SQL, you CAN if it is a GROUP column. I know that sounds kind of confusing, but take a look at the query below and its output:

Query output:
[image http://iyawebdev.com/acad274/lecture_examples/aggrsql3.png]

SELECT
    Medication,
	COUNT(Name) AS NumberPatients, 
    AVG(Age) AS AverageAge,
    AVG(BillingAmount) AS AverageBill

FROM healthcare_dataset

GROUP BY Medication

A variation focusd on the medical condition, including younges and oldest stat:

Query output:
[image http://iyawebdev.com/acad274/lecture_examples/aggrsql4.png]

SELECT
    MedicalCondition,
	COUNT(Name) AS NumberPatients, 
	MIN(Age) AS YOungestAge,
	AVG(Age) AS AverageAge,
    MAX(Age) AS OldestAge,
    AVG(BillingAmount) AS AverageBill

FROM healthcare_dataset

GROUP BY MedicalCondition

And finally a more complex query where the sub-groups of conditions are further sub-clustered by admission type:

Query output:
[image http://iyawebdev.com/acad274/lecture_examples/aggrsql5.png]

SELECT
    MedicalCondition,
    AdmissionType,
	COUNT(Name) AS NumberPatients, 
	MIN(AGE) AS YOungestAge,
	AVG(Age) AS AverageAge,
    MAX(Age) AS OldestAge,
    AVG(BillingAmount) AS AverageBill

FROM healthcare_dataset

GROUP BY MedicalCondition, AdmissionType

Ok, so how about we put that together in a page?

- Paste in the database connection code (the first 20 lines from php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt). NOTE: you need to CHANGE the connection info which is defaulting to movies to the database "dent_health"

- write an intro about patients with arthritis under 30 years old.

- include "the write a query and get back results" code from php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) (lines 23-31). Note: Your SELECT statement should be SELECT * FROM healthcare_dataset, with WHERE clauses to match MedicalCondition to Arthritis and Age less than 30.f

- add to the page "There are X patients", but replace X with the number of records code from php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) (line 48)

- finally, output the actual rows of data into the page by using the loop code from php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) (lines 62-70), with data on each patient name, age, and bill amount (so use the output code in line 66 three times, one for the column "Name", one for "Age", and one for "BillingAmount".

To see an example of a text/datagrid output of health data (demo) at health.php (http://demos.webdev.iyaserver.com/acad274_demos/health.php) and the code at health.txt (http://demos.webdev.iyaserver.com/acad274_demos/health.txt) 

And a demo from class with aggregate/statistical output at health2.php (http://demos.webdev.iyaserver.com/acad274_demos/health2.php) and the code at health2.txt (http://demos.webdev.iyaserver.com/acad274_demos/health2.txt)