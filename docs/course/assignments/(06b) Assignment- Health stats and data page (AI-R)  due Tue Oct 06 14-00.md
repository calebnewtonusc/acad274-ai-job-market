(06b) Assignment: Health stats and data page (AI-R)  due Tue Oct 06 14:00

AI-Restricted: This assignment is AI-Restricted, so that (like previous AI-R assignments) you must submit a pre-AI version if you use ai-generated code/help. You are welcome to use/re-use any php and JS/jQuery from my lecture and demos as part of "your" code, but I need to see that you attempted a version with php and content BEFORE you got help from AI. And again, completely fine to use AI to help debug, give suggestions, and touch up layout/design.

Health data output page (stats and table data)
This assignment will require submitting and displaying TWO queries into a web page, one of which will contain statistical summary information.
You can write your SQL against my dent_health version of the database of your own version that you imported to a db on your server.
NOTE: If you are adapting code from other demos and assignments, remember to EDIT the default database connection code to CHANGE it to connect to dent_health or your NAME_health database!
Both queries will run against the "health" (and its sole table). As noted in the lecture you can choose to install your own version of the db in your server account, if you want to test your SQL SELECT statements directly. If you did want to install your own copy of the health db for testing the import file is healthdataset1.sql.txt.
For this page you will need to focus in on one sub-set of the data, a filter that narrows down patients by four or five parameters, such as below (note requirements of lab has a restriction of less than 30 total)

Men admitted into Urgent, ages 30-40, with blood type AB+
People admitted into Emergency with Cancer who were given a particular medication
Women between 50 and 60 years of age, admitted into Emergency, who were given Liptor, whose tests were Inconclusive.

For the page, you will be creating a webpage that displays information from this health table. Requirements:

Page premise: Present some insight or assertion into the page, based on the data.
Your page should have two queries: BOTH queries of your page should have a core set of filters, narrowing the dataset by (some but not all of the following): blood type, gender, age, admission type, medical condition, medication administered, and test results. What that means is BOTH of your queries should have the same WHERE clause.. You can play around with WHERE parameters to filter by MedicalCondition, AdmitType, Gender, BloodType, etc. So perhaps it is all females under a certain age that were admitted to Emergency with a particilar connection.
Create one aggregate sql query that:

counts the number of records (with your WHERE filters)
calculates the average age in the group
adds up a total of all billing amounts charged for the group
provides the average bill for all patients in the group
Outputs the results of the aggregate query into the page. (Note you can use an output loop or just manually fetch and assign the one row to $currentrow without using a loop).


Normal text ouput query:

Standard text query with details of that filtered dataset: 40 Max: Create a SELECT * from the WHERE filters, NOT TO EXCEED 40 records.
Display the raw data of the SELECT * query in an html table (inside a loop). You do not have to display all 15 columns from the table, but a minimum of 6 including the core ones... so if you filtered by every patient must have cancer, you can state that at the top but probably do not need to display the column where every MedicalCondition is the same (cancer).


Note if you need more help the recent lecture has one example of some regular health data (not aggregate), as well as examples of multiple queries in a (movie) page and some sample aggregate/stat SELECT statements.
Below are four examples of past assignments 

 , , , , , ,

  linked: healthdataset1.sql.txt: http://iyawebdev.com/acad274/lecture_examples/healthdataset1.sql.txt
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex1.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex1.png
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex2.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex2.png
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex3.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex3.png
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex4.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex4.png
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex5.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex5.png
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex6.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex6.png
  linked: https://iyawebdev.com/acad274/assignment_files/assign7a_ex7.png: https://iyawebdev.com/acad274/assignment_files/assign7a_ex7.png
