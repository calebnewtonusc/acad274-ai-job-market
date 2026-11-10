
If you have been able to successfully connect to DataGrip with my dent_student login, then you do NOT need to save any start files as you should be able to create the two data export CSV files and import them into your own Google Sheet. 

Otherwise, dataset links for today (first two are to load into google sheets, last is a link to my sheet):

- hockeyscorers2025.csv (http://iyawebdev.com/acad274/lecture_examples/hockeyscorers2025.csv), extracted from query "SELECT * FROM dent_hockey.2025nhlscorers;" from DataGrip

- healthStatsByMedicalCondition.csv (http://iyawebdev.com/acad274/lecture_examples/healthStatsByMedicalCondition.csv), extracted from DataGrip from query below 

	     SELECT 
	     MedicalCondition,
		 AVG(Age) AS AverageAge,
	     MIN(Age) AS LowAge,
	     MAX(Age) AS HighAge,
	     COUNT(Name) AS NumberPatients
	     FROM dent_health.healthcare_dataset
	     GROUP BY MedicalCondition

- google sheet with data loaded (https://docs.google.com/spreadsheets/d/1u6mmBdT8HwlgcgtmTXsZP-dunocbnsKTfbOvma9EGyw/edit?usp=sharing)

Creating charts/visualizations from data

So we've worked with queries with statistical data (health, hockey stats) and outputted them into the page (as summary text and in data tables), but how about visualizing them? People can often see insights in visual representations easier and cleaner than in raw data outputs.

So first, we need data to work with. If you have trouble following the steps below (and/or do not have DataGrip installed) you can skip to openinh up the google sheet data_for_charts (https://docs.google.com/spreadsheets/d/1u6mmBdT8HwlgcgtmTXsZP-dunocbnsKTfbOvma9EGyw/edit?usp=sharing)

In DataGrip, run the following SQL query which will create the GROUP BY stats we've been playing with recently clustered by MedicalCondition:

	     SELECT 
	     MedicalCondition,
		 AVG(Age) AS AverageAge,
	     MIN(Age) AS LowAge,
	     MAX(Age) AS HighAge,
	     COUNT(Name) AS NumberPatients
	     FROM dent_health.healthcare_dataset
	     GROUP BY MedicalCondition

Now above the results, notice there is a Export button. Click on that and save the csv to your computer. If you have trouble you can just save/download to your computer healthStatsByMedicalCondition.csv (http://iyawebdev.com/acad274/lecture_examples/healthStatsByMedicalCondition.csv).

Next, run the query below and similarly Export the results, or you can directly save to your computer hockeyscorers2025.csv (http://iyawebdev.com/acad274/lecture_examples/hockeyscorers2025.csv):

	     SELECT * 
	     FROM dent_hockey.2025nhlscorers

Ok, so you've got two datasets in the csv format, a universal data export format that stands for command-separated values.

In a blank google sheet (you can do this in excel too), go to File > Import, choose Upload, feed it one of the CSV files, and on the import menu set Import Location to Insert new sheet/s. Do this for both CSVs. That should give you a google sheet with one tab named hockeyscorers2025 and one named healthStatsbyMedicalCondition.

Ok, taking a step back, how about creating some charts to explore, understand and visualize the data better? In the health data, select JUST the MedicalConditon and NumberofPatients columns (use ctrl), and with both highlighted go to Insert > Chart. By default it probably created a Column graph. On the right, you should be able to change the chart type. Change it to Pie. Now try Line. Which is better / most effective? Probably depends on your argument/the insights you want the user to get. [image https://iyawebdev.com/acad274/lecture_examples/sampledata1.png] [image https://iyawebdev.com/acad274/lecture_examples/samplechart1.png] [image https://iyawebdev.com/acad274/lecture_examples/samplechart2.png] [image https://iyawebdev.com/acad274/lecture_examples/samplechart3.png] 

Charting different columns, customizing

[image https://iyawebdev.com/acad274/lecture_examples/samplechart5.png] [image https://iyawebdev.com/acad274/lecture_examples/samplechart4.png]

How about plotting all of the data? Highlight all of the columns, then Insert > Chart, and select the Combo Chart type. See to the right. Now, not sure we really need high and low age, but let's set that aside for now. The number of patients is really on a different scale than the other datasets. But lucky we can customize/separate to have different height/y-axis settings. In this combo chart, go to Customize > Series, in the first drop down change from Apply to All to JUST the Number of Patients data, and change it to Right Axis. So the height plotting of that data is on a different scale than the ages data. To simplify this, delete the chart, start over with just three columns: MedicalCondition, AverageAge and NumberOfPatients, combo chart, and set the NumberofPatients to the right axis. AND then separately select AverageAge and NumberOfPatients, and for each check (on) the Data labels option. This should give you something like the second chart to the right...

Now let's move to the hockey data. Highlight columns A, B and E (goals) and Insert > Chart. It likely created a column chart, and notice that it also knew to layer in the Teams "text" on top of the player Name entries. Try changing it from Column to Bar... probably an easier way to digest and compare.

Adding new columns to data

Once the data is in a database, we can easily create aggregate (calculated stat) columns, but for our purposes let's add two quick calculated columns. Insert a new column F, and in cell F2 enter "=E2/D2", and at the top name the column GoalsPerGame. Then copy that F2 formula and paste to all the other lower F cells. So now we've got a custom "calculated" column that accounts for the disparity that some players have played less games than others.

Then highlight the Name, Goals and new GoalsPerGame columns, and Insert > Chart. Customize the chart so that the GoalsPerGame is on the right axis (so goals in on one numeric scale and goals per game on another).Then play around with if Column, Line, or Combo chart best shows/highlights the difference between the two datasets.

[image https://iyawebdev.com/acad274/lecture_examples/samplechart6.png] [image https://iyawebdev.com/acad274/lecture_examples/samplechart7.png] [image https://iyawebdev.com/acad274/lecture_examples/samplechart8.png]

We could even try to find some new insight, such as comparing goals per game to penalty minutes (PIM) like below...

[image https://iyawebdev.com/acad274/lecture_examples/samplechart9.png] 
Is there any "added value" correlation for forwards who take penalties and score goals?

So this should give you enough tools to be able to load a dataset (whether copy-paste from the web or from kaggle et al) and play around with visualizations of the data for your lab...

A motivated reader might be able to drill into the yellow "goals per game" column in the data grid, but might nevertheless not pick up on the important statlines, and in particular entries over 0.4 goals per game. But data visualization clearly highlights the peaks and differences between the players.

  [image https://iyawebdev.com/acad274/lecture_examples/spreadsheetchart1.png] [image https://iyawebdev.com/acad274/lecture_examples/spreadsheetchart2.png] [image https://iyawebdev.com/acad274/lecture_examples/spreadsheetchart3.png]

Creating basic charts in google sheets

To follow along you could open up the google sheet hockeyscorers (https://docs.google.com/spreadsheets/d/1hyEgSF-5fbKQt0pjSjkfLRCKN8VVgxikXxK8rua8pyw/edit?usp=sharing), but better would be for you to download hockeyscorers.csv (https://iyawebdev.com/acad274/lecture_examples/hockeyscorers.csv) and open it up in your own google sheet.

Highlight the first 11 rows in Name (including the column header name) and the first 11 columns in PTS, like the screenshot at the right.

Now use the menu to select Insert > Chart. It will bring up a default chart, likely a "column chart" like to the right. It should have also opened up a window/pane for Chart Editor. Change the Chart type to Pie. And suddenly the same data is visualized into a pie chart.

To reconfigure the data, select the Goals column (D) and from the column menu select Sort Z-A. Now the players are sorted by goal scorers. Again select the first 11 rows of Name and Goals, and Insert > Chart but select Bar Chart. You can also customize the chart: click on the title and change it to "Top NHL Scorers", click on the "G" legend at the bottom and change it to "Goals", and click on one of the bars and change its Fill Color. This should give you something like the final chart on the right.

Finally, you can create more complex charts by selecting more planes of data. Select the first 11 rows in Name, G, PIM and PPG. With all four columns selected Insert > Chart. It will probably default to a stacked column or bar chart, but you could play around with Stacked area, Scatter and Smooth line chart types.

But of course these are all static charts, that we would have to screenshot and place into web or mobile apps. As opposed to chart plug-ins that could receive data (and eventually live data)...

-->