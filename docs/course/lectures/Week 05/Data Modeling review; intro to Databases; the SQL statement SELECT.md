

Before lecture you should have logged into cPanel and created two new databases: "movies" and "hockey". To create a database: 1) log into cPanel,  2) scroll down to Databases > MySQL Databases, 3) under New Database enter a name and click Create Database.

Save to your computer:

- moviesdb_for_import.sql.txt (https://iyawebdev.com/acad274/lecture_examples/moviesdb_for_import.sql.txt)

- moviedb_export_edited.sql.txt (https://iyawebdev.com/acad274/lecture_examples/moviedb_export_edited.sql.txt)

- hockeystats.sql.txt (https://iyawebdev.com/acad274/lecture_examples/hockeystats.sql.txt)

Session plan:
------------------
Vertabelo1:
   1. build short new logical hockey model
   2. generate physical model from logical model.
   3. note: export to image
   4. create physical model based on logic one
   5. Generate SQL button

Vertabelo2:
   1. Import: Generate physical mode, from SQL
   2. explore structure with class. main table? what are purposes of did tables (look-ups). introduce db terms like noramlization, pk and fk, relationshpi revisited
   3. explore sample/provided mysql ecommerce db

cpanel/phpmyadmin
   1. log in
   2. db names, create
   3. launch phpmyadmin
   4. import: open movies db, import, pick sql.txt file
   5. designer. explore tables, fields, views. 
   6. open hockey, import. note ONLY one table, really more of a view.
   7. SQL SELECT: read / pull data from a VIEW of db. What NOT doing: 1) talking to/FROM individual tables, 2) editing or deleting data (read only)

SELECT:
   1. SELECT x, FROM y, WHERE z
   2. SELECT * vs individual fields
   3. FROM viewName (only that for now)
   4. WHERE: filters, operators
   5. ORDER BY: sort by one or more columns   
   6. Write SELECT statements against the dvd view.
   7. Write some SELECT against hockey (imported it)?

-->
Review:

- Use data models to play out data collections, and the structure for an eventual database. A data model tools create agnostic ERDs, entity-relationship diagrams. But then most modeling tools have a module to export the model directly into a SQL Script to automate building a database from the model.

- We also discussed how before creating a data model you first would typically start from a system description/business requirements for the application that needs the data back-end.

- Vertabelo is an online data modeling tool. (Side note: Vertabelo has been purchased by RedGate and is now known as RedGate Data Modelier, but through these notes will be refered to as Vertabelo.) It has logical and physical data models. The former is a traditinal ER tool. The latter is specific to a database platform, from which a model can be migrated to a specific dbms like Oracle, SQL Server, MySql, PostgrGRE, etc. It also offers an option to create a physical model (to create a db) out of a logical model (in vertabelo open a logical model and in the menu select Generate physical model.)

- Last time we built out small logical data models in Vertabelo, inclduing entities with attributes and specified data types, and created relationships (connections) between the entities.

- If you created an educational account with Vertabelo, it may have automatically created a sample MySQL demo physical data model which is a good way to explore what a mature data model could look like, and to think about the different data structures in an ecommerce business.

Reverse engineer a movie database into Vertabelo

Most Most ER tools also have an option to reverse engineer or generate a model out of an existing database. In a database platform you export the db into a sql script, which includes instructions for creating the collection, the table and fields, views, etc.

Save to your computer moviedb_export_edited.sql.txt (http://iyawebdev.com/acad274/lecture_examples/moviedb_export_edited.sql.txt) (if you have problems with that file try saving moviedb_export_edited.sql.txt (http://iyawebdev.com/acad274/lecture_examples/moviedb_export_edited.sql.txt)).

From my.vertabelo.com, click on Create new document and select "Upload SQL", "MySQL", click on Choose File and give it your saved sql file (like moviedb_export_edited.sql.txt), give the model a name, then click on Start Modeling. It will generate a model based on the structure from the existing database. Note the sql script contains not only information about the database structure, but also the actual data from the tables, which Vertabelo will ignore.

Opening up the model, you can see the different tables/entities, with their fields/attributes and data types, and the relationships between the tables. Note there are also two "views", that seems to parallel/repeat many of the fields/columns from the tables, but are not connected to any tables (no relationships).

How about an excel sheet? Remember the hockey stats spreadsheet I compiled? It was in csv form, which Vertabelo will not import without a custom Python module, but the mysql database will actually import a csv directly. So I imported the spreadsheet csv hockeystats.csv (http://iyawebdev.com/acad274/lecture_examples/hockeystats.csv) into a database, then did an export into SQL, which can then be imported into Vertabelo. It is just one big entity/table, but if you want to see it create another new physical model for mysql and give it hockeystats.sql.txt (http://iyawebdev.com/acad274/lecture_examples/hockeystats.sql.txt).

Although we started the movies model by importing it from an existing database, to see how you take a physical model and convert it into a sql script that can be used to create a database, with the model open click on the SQL icon (Generate SQL Script).

So next we will use those sql scripts to import/create databases for movies and hockey through cPanel > phpmyadin. But first, some db terms...

Some database terms:

- Database management system: A platform or program -- such as mySql, SQL Server or Oracle -- that runs, administers, edits and displays databases and their information

- Database: Structured collection of data

- Table: A collection of data in a database

- Columns: information fields that define the data in a table

- Rows: individual records in a database table

- Data types: different KINDS of data such as character/text, numeric, date, monetary and yes/no (1 or 0, true or false, yes or no)

- Relational Database: Uses many tables that have relationships to each other

- Normalization: Process of using multiple tables to avoid repetition of data. Makes your database more efficient (less repetition AND unnecessary columns)

- Primary key: A unique identifier that allows a row (or record) to be unique and to be manipulated -- a key can be a unique field, a combination of fields, or (most often) a unique field in the table whose only purpose is to be the unique identifier. Most databases have a way to create primary keys that automatically increment a (unique) number -- in Access it is done by setting the datatype to Autonumber (whereas really it is a datatype of INT with an auto increment).

- Foreign Key: When a table has a reference to the unique identifier or "key" from another table, that is often called a "foreign key". The most popular database practice is to use the same name for primary and foreign keys (that if the primary key of the artist table is "artist_id" then naming the corresponding foreign key in the album table also "artist_id".

- Relationships: one-to-one, one-to-many, and many-to-many.

- SQL: All queries or requests to a database are written in a particular language, regardless of the dbms -- Structured Query Language or SQL. All requests to read, write or delete data (and even to create new tables) are "written" in SQL. Of course, in a visual database environment users can create queries through GUIs and the program writes the SQL "beind-the-scenes".

- Visual database environment: Most people use visual interfaces for many database tasks. While you can use SQL to create a table, such as with "CREATE TABLE albums(album_id INT IDENTITY(1,1) NOT NULL, artist CHAR (50) NULL, album_name CHAR (100)) ;", most people would rather use a GUI to "build" a table and edit its fields. For more complicated tasks such as create queries and reports, even veteran database administrators will typically use visual db tools.

-  Shared-File versus Client/Server databases: When you work on a file database, you are actually opening up the file on your local computer and manipulating it. In a client/server database your computer (the client) sends a request to the server (to add data, to read data, etc.) which in turns processes your requests and returns the results to your local computer.

Import and create database in cPanel > phpmyadmin

- Log into cPanel

- Run Databases > phpmyadmin

- Select the "movies" db. (If you have not created it, go back to cPanel and Database > MySQL Database, and Create New Database)

- Click on the Import tab.

- Select the moviedb_export_edited.sql.txt (http://iyawebdev.com/acad274/lecture_examples/moviedb_export_edited.sql.txt) file you saved to your computer, then click on Import. (Note that the database on the right, which was empty, suddenly has tables and views. And that script not only created the db structure but also imported data into the tables.)

- You can click through the tables to see their data, and the Structure tab to see the field structures. But probably more useful, browser through the view1 and view2 "views" of the database, which brings data from all of the tables together in one place. These are what you will use when you write queries (data requrests).

- With the main database selected (not a table in it), click on the Designer tab/tool (if you don't see it try More > Designer). Hey look, it is a (physical) data model visualization of the database!

In this class individual students will not be building databases, so we will skip over much of the db theory related to creating tables, relationships, and views.

We just want to learn the SQL SELECT command, which lets us pull/read/display data from the database. We will also run it directly against view and not tables, so will not have to worry about concepts like JOIN or enforcing key relationships.

If you want to work with a single-table db that housed the hockey stats from the spreadsheet, you can open up your "hockey" database and Import hockeystats.sql.txt (http://iyawebdev.com/acad274/lecture_examples/hockeystats.sql.txt).

  SQL:

- Structured Query Language

- Supported by all major DBMS

- Can be used directly inside a DBMS, as well as to communicate between an application and an external DBMS

- Can read data, insert data, create new data rows, and delete data rows with SQL

- You can even create new tables with SQL, but we are more interested in the core SELECT statement used to pull/display data. We will also be running SELECT statements directly against views and not tables.

- SQL is case-INSENSITIVE, although most SQL programmers find it easiest to use UPPER CASE for all SQL statements and arguments, and lower case for names (columns, tables, etc.)

Examples of SELECT statements:

SELECT *  // all fields
FROM view1
WHERE 
	genre ='Sci-Fi' 
	AND
	rating = 'R'
ORDER BY title

SELECT * 
FROM view1
WHERE 
	title LIKE '%dog%'
ORDER BY title

SELECT *
FROM view2
WHERE
	genreID = 3
	AND
	award != ''

SELECT statement

- The SELECT statement asks the DBMS to return information.

- SELECT is followed by the column/s from which you want data -- multiple columns are separated by commas (but not ended by them). You can also just say SELECT *

- The asterisks character (*) represents ALL (everything) -- so if you say "SELECT *" you are asking for data in ALL columns.

- All columns in the whole database? No, in our case just from the View you specified (see FROM below).

FROM Typically the FROM clause if a SELECT statement specifies which tables are included in the SELECT, but in our case we are going to write SELECTs directly against single Views.

- 

WHERE

- OK, but SELECT statements so far are returning all rows of data (in the specified columns). How do we restrict the query to certain parameters?

- The WHERE statement restricts the returned information to data that matches criteria. You follow a WHERE statement with a condition, such as rating = 'R'. Notice that strings like the letter R are in quotes.

- To compare strings (text datatypes, for instance), you must specify the criteria in quotes. You do not need quotes to compare numeric data.

- Operators: Besides =, you can also check for greater than (]), less than ([), not equal ([]) and combinations ([= for less than or equal and ]= for greater than or equal). You can also check if a column is empty of data (IS NULL) and you can check for values that fall between two numbers ( BETWEEN ).

- Multiple clauses: You can string together multiple arguments for WHERE using the AND or OR operators to search for multiple criteria (exclusively or in either/or fashion).

- So "WHERE rating = 'R' and genre = 'Sci-Fi' would require both conditions to be met, whereas "WHERE rating = 'R' OR rating = 'PG-13' would movies in which either condition was met.

- Parentheses: If you string together four sections of your WHERE clause, mixing OR and AND operator, in what order will it evaluate them? Well, technically all AND clauses are evaluated first, and then OR ones. But we don't have to worry about that because we are always going to use parentheses to group WHERE conditions -- just like in mathematical equations.

- So WHERE (rating = 'R' and genre = 'Sci-Fi') OR (genre = 'Horror') would return films that are either R-Rated Sci-Fi films or Horrors of any rating.

- 

LIKE operator and wildcards:

- In WHERE clauses (filters), besides the = operator, you can also use the LIKE operator to set criteria that includes wildcards (any other characters) using the % symbol.

- Wildcards are characters that match anything. For instance, 'Dog%' would return movies that start with Dog, but '%Dog%' would match movies with dog anywhere in the title. Similarly 'T%' would be all titles beginning with the letter T.

- LIKE is very useful for text searches. Sometimes it is used to catch misspellings (so Win% would match Winnebago and Winebago and Winnabago). It can also be used to find a word in the middle of a phrase. So '%Pat%' would match any text value that included the character string 'Pat', including Pat, Patrick and spat. To filter for a whole word, you would use '% pat %', where spaces are included before the wildcard characters.

ORDER BY: At the end of the query, after WHERE, you can choose to add an ORDER BY clause to "sort" the results by one or more columns.

Testing SELECT statments in phpyadmin

We are going to run SELECT statements directly against views, skipping tables.

To write/test SQL in phpmyadmin, select/open up the movies database, then click on view1 (it is accessible from the collapsible left nav under Views, or in the initial database list of tables (and views).

The view will display rows of data. Click on the SQL tab. Notice that by default it starts a SELECT * (all) statement. Type your SQL into the box and then at the bottom right click on Go.

This will then run the results (like a narrowed down version of Browse). In the upper right of the results you can click on Edit inline or Edit to edit the query and click on Go to re-run it. Note that if you click on a table or another mode (such as Browse or Structure) you will "lose" the SQL statement you build. Later we will learn how you can "save" a SQL SELECT statement as a "view" in your database.

Exercises:

What SELECT queries would you write to retrieve:

- [movies (https://iyawebdev.com/acad274/lecture_examples/moviesdb_for_import.sql.txt)] all movies starting with the letter S that are R-rated?

- [movies] R-rated Comedies?

- [movies (https://iyawebdev.com/acad274/lecture_examples/moviesdb_for_import.sql.txt)] R-Rated films that won awards?

- [hockey db (https://iyawebdev.com/acad274/lecture_examples/hockeystats.sql.txt)]  all players who scored more than 20 goals, sorted by pts?

- [hockey db (https://iyawebdev.com/acad274/lecture_examples/hockeystats.sql.txt)] players who have a shooting percentage above 12, sorted by goals.