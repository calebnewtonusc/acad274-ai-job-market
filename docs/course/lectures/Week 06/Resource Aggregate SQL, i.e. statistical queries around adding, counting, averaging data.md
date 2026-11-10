
Note examples are against the movies and health databases. To test code you'll need to have both created and populated in your server. Below are the sql files to "import" to create the tables and populate the data for those dbs:

- moviesdb_for_import.sql.txt (http://iyawebdev.com/acad274/lecture_examples/moviesdb_for_import.sql.txt)

- healthdataset1.sql.txt (http://iyawebdev.com/acad274/lecture_examples/healthdataset1.sql.txt)

SQL Aggregate functions:

ALIASesNote that in aggregate sql commands you need to assign a pseudoname/fake column name (known as an alias) to the returned calculated data, in order to access it from php in the $results/$currentrow object. So SELECT avg(price) becomes SELECT AVG(price) AS averageprice, so tht you can access/output the field in php such as $currentrow[["averageprice"]].

Aggregate SELECT statements restriction: Note: For now, know that you CANNOT mix traditional data queries (rows of records) with calculated/statistical/aggregate queries. Aggregate (stat) queries will literally just be numeric data results in one row (until we get to GROUP BY). It is not uncommon that a page might have to different queries, one to derive stats and another to output rows of traditional data.

Aggregate SQL functions return a single value, calculated from data in a column to derive (statistical) results such as averages, totals, high or low values (min and max), etc. In general, queries using aggregate functions ONLY include calculated data and do not ALSO include/combine normal field/text values from the database. The one exception is if you sub-group your data in your queries (more on this later).

- SQL functions that perform calculations on data, such as counting the number of rows (COUNT), adding all the numbers in a particular column (SUM), finding the largest or lowest number (MAX, MIN), etc.

- Aggregate functions include COUNT, SUM, MIN, MAX and AVG

- You generally perform aggregate function on a column, such as Sum (order_total) to get a total sum of all order totals or Count (orders) to get the total number of orders.

- You HAVE to assign aliases to aggregate functions to use/extract/output their data. In a normal query, when you SELECT title, in the resulting query you output/extract the "title" data through its column name of title. But in an aggregate function like SUM(totals) there is no "totals" column, but rather a new calculated piece (or column) of data that has no inherent name. So you need to use an alias such as SELECT count(totals) as ordertotals, and then you have create a new "virtual" column named ordertotals, and in your php you can output the data by that aliased column name.

COUNT

- A very fundamental function to count records (with or without limiting parameters). How many orders, employees, products, etc.

- Can be generically used with *, such as COUNT(*) as totalrows, to simply count the number of rows (records), rather than to count based on a particular field. The main difference is that by default if count is pointed at a field, such as COUNT(orders), it ignores (does not count) rows with null in the field.

- COUNT(column) counts the number of rows (records) that have data in the specified column (skips nulls). The basic use of this is to filter out records that do not have data (are empty or null) in a particular column. So COUNT (name) as total_names would count the number of rows that have valid data in the name column. Whereas COUNT(*) just counts the number of rows/records regardless of data in particular fields.

Ok, so to test this out, in phpmyadmin open up the health db (see set-up above) and run the following query:

SELECT COUNT(Name) FROM healthcare_dataset

It should return 2608 (2,608 patients). But how would you access data from that query in php code, since there is no "column" name to reference it? So we need to assign an alias to ALL aggregate sql commands. Update the query to:

SELECT COUNT(Name) AS totalpatients FROM healthcare_dataset

The only difference is that the "data" has a column name (totalpatients), which if it were a returned query through php you could access/output the information.

Try running some of the variants below with WHERE filters:

SELECT COUNT(Name) AS cancerpatients FROM healthcare_dataset WHERE MedicalCondition = 'Cancer'

SELECT COUNT(Name) AS obloodtypes FROM healthcare_dataset WHERE BloodType LIKE %O%'

SELECT COUNT(Name) AS youngmales FROM healthcare_dataset WHERE Age >= 18 AND Age <=30 AND Gender = 'Male'

SELECT COUNT(Name) AS asparinbills FROM healthcare_dataset WHERE Medication = 'Aspirin'

SUM

- Adds up / totals the values in a specified column

- So SUM(order_total) AS overalltotal would add together all of the values in the "order_total" column of the table/view and assign that value to a query column/variable named overalltotal

- SUM can perform mathematical calculations internally. So a more efficient version of the calculation about might be SUM (items_ordered*item_price) which would, for each column (record), take the items ordered price multiplied by the item price, and add all of those calculated totals together.

In the healthcare_dateset example, it has bills for hospitalized patients. Try some of the query variants below:

SELECT SUM(BillingAmount) as billed FROM healthcare_dataset

SELECT SUM(BillingAmount) as billing2020 FROM healthcare_dataset WHERE DischargeDate >= '2020-01-01' AND DischargeDate <= '2020-12-31' 

SELECT COUNT(Name) AS asparinchargesbills FROM healthcare_dataset WHERE Medication = 'Aspirin'

SELECT 
COUNT(Name) AS asparincharges,
SUM(BillingAmount) as totalasparinbills 
FROM healthcare_dataset WHERE Medication = 'Aspirin'

MIN and MAX

- Finds the highest or lowest amount in the specified column.

- So "MAX (ID) as maxid" would find the current highest value in the ID column, whereas "MIN (order_total) as total_minimum" would find the lowest value in the order total column.

- Can be used with dates. For example, "MAX (order_date) AS high_date" would find the highest (most recent) date from the order date column.

AVG

- Calculates the average within a set of column values. I.e. it adds up all of the values and divides by the number of rows. Note: Like all aggregate functions, AVG ignores NULL values. So a null value in a column will not skew the average (would not count as a 0).

- So "AVG(order_total) as avg_total" would calculate the average amount for orders (value of the order total column).

For examples with AVG, MIN and MAX we will dive into the human_vital_signs_dataset_2024 collection/table in the health db:

SELECT AVG(BillingAmount) AS AverageBill
FROM healthcare_dataset

  Note: This is a bit more complicated concept that we will tackle on a second pass...  

GROUP BY

GROUP BY by organizes records into "groups" or clusters, most often for purposes of aggregate functions. So for instance, compare the two outputs below:

SELECT AVG(HeartRate) as AVG_HR 
FROM human_vital_signs_dataset_2024;

SELECT AVG(HeartRate) as AVG_HR 
FROM human_vital_signs_dataset_2024 
GROUP BY Age;

Wait, so why does the second query have so many rows? Try the updated version below, which includes the text of the group by data for each cluster:

SELECT Age, AVG(HeartRate) as AVG_HR 
FROM human_vital_signs_dataset_2024 
GROUP BY Age

So it sub-groups/clusters all of the records by the GROUP By field first, then applies the SELECT (data read) on each group/cluster. Below, it will give more information (how many readings in each group/cluster):

SELECT Age, COUNT(*) AS TotalReadings, AVG(HeartRate) as AVG_HR 
FROM human_vital_signs_dataset_2024 GROUP BY Age

We can do multiple GROUPS, i.e. sub-groups of groups too. Take a look at below:

SELECT Age, Gender,
COUNT(HeartRate) AS TotalRatings,
AVG(HeartRate) AS AvgHR
FROM human_vital_signs_dataset_2024
GROUP BY Age,Gender

But as previously warned, there are rules about mixing text/normal fields in aggregate (calculated) sql queries. Try the code below, which has a slight tweak to the previous code:

SELECT Age, Gender, Derived_HRV,
COUNT(HeartRate) AS TotalRatings,
AVG(HeartRate) AS AvgHR
FROM human_vital_signs_dataset_2024
GROUP BY Age,Gender

Note it returned an error something like "Expression X of SELECT list is not in GROUP BY clause and contains nonaggregated column Derived_HRV"... i.e. you tried to include a non-calculated field/column in your query, which is only allowed if a column is used/leveraged in a GROUP BY clause of the query.

So this is why you generally need to separate data queries (like the textual detail of a patient) from stastical queries (like the vitals for the patient).

Combining approaches

As another example, So now, let's try using GROUP back in our DVD database.

SELECT COUNT(*) as recordcount 
FROM dvd_titles

would count all the rows in the table or view, but a query of

SELECT COUNT(*) as recordcount 
FROM dvd_titles 
GROUP BY genreID

would create not one count but rather separate counts (totals) for each sub-group of genre. I.e. it would take all of the records, FIRST group them by genre_id, then count how many records/rows there were within each of those sub-groups.

- A better version of this query (using a view) might be:
SELECT genre, count(*) as recordtotal
FROM dvd_titles INNER JOIN genres ON dvd_titles.genre_id = genres.genre_id 
GROUP BY genre
ORDER BY genre

So if we implement that query into a php workflow (submit that query to $results), then our output loop of the data would be something like:
while ($currentrow = $results->fetch_assoc())
{
echo $currentrow[["genre"]] . ": " . 
	$currentrow[["recordtotal"]] . " | ";
}

And the output would look something like:
:128 
Action Adventure: 783 | Animation: 516 | Children's/Family: 163 |
Classic: 127 | Comedy: 1003 | Documentary: 289 | Drama: 1085 | 
Foreign: 535 |Games: 8 | Horror: 504 | Karaoke: 99  | Music: 880 |
Musical: 93 | Romance: 3 | Sci-Fi: 349 | Special Interest: 723 | 
Suspense Thriller: 578 | Television Programming: 148 | Western: 105 | 

Next time we will generate aggregate sql queries like above, but submit them through php and output/generate page content from the queries, as well as create (simple) data visualiations from the text and statistics from the queries.

Closing notes

GROUP BY, SORT, non-calculated data in aggregate sql

- One important thing to understand is that GROUP BY does NOT actually sort the results according to the group by field. Notice how I included ORDER BY in my query (to order sort them)? It was not actually necessary in this particular query, but in many instances where you are using GROUP BY you are also going to want to use ORDER BY on the same fields to explicitly ask the query to sort its results by certain column/s.

- When using GROUP BY, all fields in your SELECT statement must either be in aggregate functions or must be in the GROUP BY clause. What this means is that you cannot have data retrieval fields (like SELECT NAME) that are not part of the GROUP BY. So SELECT NAME, sum(*) with GROUP BY NAME is OK and SELECT NAME, sum(id) with GROUP BY name IS OK but SELECT NAME, sum(id) with GROUP BY ID is not because the field NAME is included in the Select statement, is NOT part of an aggregate function, yet is not part of the GROUP BY clause.

More general comments on aggregate functions:

- Generally work best as calculation queries. I.e. do not generally combine well with data queries (see last GROUP BY bullet above).

- Work well in groups. So for instance, one query might include a Count of all orders, a Sum of all order totals, a Max and Min of the highest and least order totals, an Avg of the order amounts, and the Max of the date for the most recent order.

- Are MUCH more effective (in terms of processing time, server load, etc.) than counting records. I.e. SELECT count(*) from table is MUCH more efficient and quicker than performing a SELECT statement that returns all the records, then in php counting the total number of (returned) records with the num_rows property of the php query object. A simple count(*) retrieves only one value from the database, whereas the latter example retrieved an entire recordset (all the records) and then (after having downloaded all the records from the db) in server memory having phpreference the number of returned rows/records. Similarly, you could perform the mathematical calculations of Max, Min, Avg and Sum through php and loops through queries, but it would take MUCH more processor time and effort to do so.