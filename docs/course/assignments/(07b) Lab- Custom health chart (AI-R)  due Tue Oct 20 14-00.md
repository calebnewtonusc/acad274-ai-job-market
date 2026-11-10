(07b) Lab: Custom health chart (AI-R)  due Tue Oct 20 14:00

AI-Restricted: This assignment is AI-Restricted, so that (like previous AI-R assignments) you must submit a pre-AI version if you use ai-generated code/help. You are welcome to use/re-use any php and SQL from my lecture and demos as part of "your" code, but I need to see that you attempted a version with php and database content BEFORE you got helpf from AI. And again, completely fine to use AI to help debug, give suggestions, and touch up layout/design.

Custom health stat page, customized graphic

So this original page/code displays summary data about patients based on a filter. You can test some of the urls below to see how it returns different data based on the "condition=" part of its page URL:

healthcondition.php?condition=Asthma
healthcondition.php?condition=Cancer
healthcondition.php?condition=Diabetes
healthcondition.php?condition=Hypertension

You are going to adapt the code and create a custom graphic for the stats (like my non-designer pass above) such that:

you can adapt this code (php and sql) from this page to filter by and display aggregate data about patients who received different medication (not medicial condition). Note that change, that the sample code I give you filters by condition whereas your page will do so by medication:

Edit the two $_REQUEST["condition"] lines to $_REQUEST["medication"]
So edit the else { $filter= line from "Diabetes" to a "default" medication (instead of a default MedicalCondition)
Edit the SELECT statement to WHERE Medication = instead of the current MedicalCondition=
Change the MedicalCondition php output (column) to Medicine
Now you can create custom links to your page like healthchart.php?medication=Aspirin


MAIN LAB: Create a custom graphic / screen mock-up for the data to appear on. This could be a main image with color regions (for the boxes), a collage, and original illustration with icons/graphic, etc.

Change the graphic in the php page (background of the #chart) from my bakground image to your graphic, and edit/tweak the locations of the boxes (now on top of your graphic) in the style.Somewhere in the page add a list direct hyperlinks to the five different medications, like I did above for the "conditions" variations. 
Student samples from past semesters:

  linked: healthcondition.php?condition=Asthma: https://demos.webdev.iyaserver.com/acad274_demos/healthcondition.php?condition=Asthma
  linked: healthcondition.php?condition=Cancer: http://demos.webdev.iyaserver.com/acad274_demos/healthcondition.php?condition=Cancer
  linked: healthcondition.php?condition=Diabetes: https://demos.webdev.iyaserver.com/acad274_demos/healthcondition.php?condition=Diabetes
  linked: healthcondition.php?condition=Hypertension: https://demos.webdev.iyaserver.com/acad274_demos/healthcondition.php?condition=Hypertension
  linked: this code: https://iyawebdev.com/acad274/lecture_examples/healthcondition.txt
