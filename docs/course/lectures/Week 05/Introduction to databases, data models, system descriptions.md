
Prior to lecture you should have:

- Signed-up for a free Academic Account (https://my.vertabelo.com/sign-up/create-academic) from Redgate Data Modeler (formerly Vertabelo) -- note on the page the default form will say trial version, so make sure you click on "Register for an academic account", otherwise it will sign you up for a trial version.

- Checked your email, inputted the confirmation, and completed your sign-up.

- Tested your login and access to the Redgate Data Modeler (previously Vertabelo) tool and drive/document at https://my.vertabelo.com/ (https://my.vertabelo.com/)

While waiting for lecture to start try opening up that sheet and inputting some songs (along with artist, genre and album name).
-->

	Start up Session activities:
	* Have all students  registered for and logged into my.vertabelo.com?
    * Time to review any of the previous student data table pages from last week?
	* What is a database?.
	* Concept of creating a system description or business requirements for an application.
	* Discuss concept of system description / business requirements for an application,
	    using espn.com/nhl as an example.
	* Highlight core nouns of the brief.
	* Creating a data models. Vertabelo platform.
	* Build out hockey model a bit.
	* Break for group exercises, 20-30 minutes. 
	* Group presentations through zoom (15-20 min?).
	* Reminder about minor lab (to prep for myphpadmin work next class).

-->
If time permits, useful to browse some of your student peer output in the first information webpage assignment:

- ai model size and benchmark (https://ellengol.webdev.iyaserver.com/acad274/03a.html) effective use of row and spot cell highlights

- paris vball best attackers (https://jhlugo.webdev.iyaserver.com/acad274/optimized_volleyball_page.html) effective modular layout, nice use of photos as page content

- what makes a pokeman strong (https://alpham.webdev.iyaserver.com/acad274/03a/03a.html) clean layout, easy to read, strong side by side stat and analysis

- disney accident incidents (https://asiy.webdev.iyaserver.com/acad274/data%20table%20webpage/Alexandra%20Siy%20-%20ACAD274%20Data%20Table%20Webpage.html) good use of spot color, stat boxes (core stat could be larger)

- apple stock launches (https://aptully.webdev.iyaserver.com/acad274/apple%20stock%20launches.html) good color coding of hit/miss, nice variation of data visualizations

- largest meteors (https://cpwu.webdev.iyaserver.com/acad274/03a%20Assignment/AI%20Version_03a_Assignment.html) (with ai help) effective design, good LARGE stats in boxes, nice visualization of mass in table

ISSUE: need to disable hyperlink or use target to open in new window and not take away from page. maybe use rollover trigger for data instead of click

-- 274 --
- Grocery story analysis (https://ablankso.webdev.iyaserver.com/assignment5.html) good, distinct design design, data rollover effects, store summary generation

- shanghai and l.a. weather comparison (https://jchen879.webdev.iyaserver.com/acad274/W5/W5%20comparison%20charts.html#walkthroughs) good internal top nav, feature that clicking on a walkthrough or month takes you to the information output (dont have to scroll)

- smoking information (https://friis.webdev.iyaserver.com/acad274/Smoking.html) fun animated highlight effect when click on terms in walkthroughs, effective row rollover highlights

- iphone comparisons (https://jhu30699.webdev.iyaserver.com/acad274/04B%20iphone.html) good data highlighting with color and one circled (bordered) when exploring models.

- olympic medal standings (https://junlaura.webdev.iyaserver.com/acad274/(4b)%20Assignment:%20Comparison%20data%20web%20with%20interactivity.html) fun and useful video/gif rollovers on each sport

- moose hunting licenses (https://wthoman.webdev.iyaserver.com/acad274/04b/homepage/) really effective row and column highlight effects

- state crime rates (https://skimel.webdev.iyaserver.com/acad274/crimebystate.html) great use of bubble chart for data visualization

-->
What is a database?

- Wikipedia:
"A database is an organized collection of data ... typically organized to model aspects of reality in a way that supports processes requiring information." 
Translation? A collection of information/data that is organized so that it can be easily accessed, managed, and updated.

- Some typical types of data collections that are often stored in a db include people (directories), music (songs, albums, artists), products, orders (items, orders, customers), articles (publications, stories, writers), etc.

- Alternatives to databases: Besides storing and structure information in databases, you can also of course store data in:

- Spreadsheets

- XML files (from complex data to rss)

- Programming arrays/structures, directly in code or in a file

- Other

- All of the above forms can be used to generate dynamic web pages. But a web site needing a particular format (such as xml for an rss feed or a downloadble excel file) does not mean the data has to be natively stored (and maintained) in that format.

- Databases are basically collections of information, divided into sub-collections or groups of data (called tables). So for instance, an "order" database would probably have sub-collections (or tables) such as customers, locations, products, and orders. And those tables would need to be related to each other through relationships between the tables. And those relationships would need to be anchored by core fields through keys. Ah, already we are getting into lots of jargon and terms!

Ok, so why do we care about having a database on the back-end of our application?

....

But, before we create a database, there are some initial steps that are good practice:

- System description/business requirements: We start by defining what the role of the data is in our application. Or we can deconstruct the application from a perspective of the data behind it. Place this at the top of the data model at a text object.

- Data model: From the details of that description/requirement info, we start to build out the sub-collections/entities that will be in our database. We can start by just listing out each area/entity, and indicate relationships/connections between the entities. Then we can start to list out the attributes of each entity, and can specify the data types. The more this is built out, the easier the next phase will be...

- Create/generate a database from the data model. Review and edit the tables, fields and relationships migrated over from the data model. Then Start entering or import data into the database.

System description / business requirements

Before starting a database project, you first need to know the scope of what is needed. Depending on your institutional perspective, these is often called a system description or the business requirements of the application.

A system description is, writting in narrative text, a summary or explanation of how or what the (web, mobile) application does, and its data components. It will also typically describe application features and information outcomes.

Once you have a basic couple paragraphs (or more) describing the system, zero in and pick out / highlight the core deescription nouns. With the task of creating a structured collection of data to drive an application, these core nouns will help define the main sub-collections of data. Descriptions of the parameters or properties of each area, will help define the details of each area. These will translate to data "entities" (in datbase terms the tables) and the attributes of each entity (db columns). This information from the system description can then provide the basis for a data model...

What is data modeling

- "Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures." -- IBM

- "Data modeling is the process of creating a simplified visual diagram of a software system and the data elements it contains, using text and symbols to represent the data and how it flows. Data models provide a blueprint to businesses for designing a new database or reengineering a legacy application." -- techtarget

- " A conceptual and visual representation used to describe the data and relationships within a system or organization, ER (Entity-Relationship) models are particularly useful in database design. In an ER model, entities represent real-world objects or concepts (e.g., a person, a product, a company) and are depicted as rectangles. Relationships between entities are shown with lines connecting them to indicate how entities are related to each other."

One advantage of creating a data model is that it is abstracted from any particular database platform, and can export the code (SQL) to "create" a database from the model into different dbms (database manage systems).

Data model basics:

- Data brief

- Entities (see db Tables)

- Associations (see db Relationships)

- Attributes (see db Columns)

- Primary Identifier (see db Primary Key)

- Mandatory (see db Not Null)

- Data types

Vertabelo tool:

- Vertabelo is a cloud/web-based tool for create data models. You can reverse engineer a database into Vertabelo, and can take a model and generate SQL scripts to build the database (in a dbms).

- Once you create an account (free academic account for students), you are given a drive to store your documents.

- You can create:

- Logical models: Abstract representation of the data collection. Often referred to as ER (entity-relationship) Models

- Physical data model (from scratch or generate from a logical model): A model specific to a particular database platform.

- SQL script (generally from a physical data model): Script that will build the database (with sql commands) based on the physical data model.

  To start:

Data typesWhen you create attributes in an entity, you have to set their data type. The numeric options are relatively clear, but the "String" options are likely confusing. varchar() is the basic text type for fields 255 characters or less. When you select Varchar though, you then also have to input a max Length. So varchar(2) would be a text field up to a maximum of 2 characters like a state abbreviation.

- Click on the Create New Document + icon, pick Logical data model, and give it a name.

- Select the Add new entity tool (fourth in bar), and click on the model screen. Then at the right give a name to the entity.

- Create a second (related) entity.

- Select the one to many tool (sixth in bar). Click and drag from one entity to the other. It should create a relationship line.

- Switch to the Select Element tool (first in bar), and drag one of the entities around. See how they are connected now?

- Select one of the Entities, and in the right window click on + Add Attribute. Give it a name and data type. Add a couple more attributes.

-  

[image https://iyawebdev.com/acad274/lecture_examples/vertbello_ss.png] 
Example of a data model with entities (and attributes), relationships, and color subject regions.

Group exercise

Have the group discuss the data areas that each of them used for their Interactive Info Page assignment. For the purpose of the group exercise, pick one of the data areas one of you used in your previous assignment such as sports statistics, car comparisons, product reviews, college ratings, etc.

Based on the website the information came from, write up a system description of the data.

Then have one member of the group go to their my.vertabelo.com account, and build a new logical model. At the top of the convas use the Add text note (tool 0 at the top), click on the model, and then paste in your system description/brief at the too.

Now as a group brainstorm and first build out the entities, you can also drag some connections (one to many relationships tool, number 6 in the bar) between the entities. Then build out some of the attributes of entities, with names and data types. You are also welcome to use the Add subject area (tool s)to add regional background colors. For this exercise you do not need to worry about primary identies, but should have connection lines between the entities (don't worry about the type of line line one-to-many, etc)

At the end of the exercise, one member of each team will walk us through their model by sharing their screen through the class zoom room.

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