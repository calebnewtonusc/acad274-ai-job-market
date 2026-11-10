(04b) Assignment: Comparison data web with interactivity (AI-R)  due Tue Sep 22 14:00

AI-Restricted: This assignment is AI-Restricted, so that (like previous AI-R assignments) you must submit a pre-AI version if you use ai-generated code/help. You are welcome to use/re-use any JS/jQuery from my lecture and demos as part of "your" code, but I need to see that you attempted a version with jQuery and content BEFORE you got helpf from AI. And again, completely fine to use AI to help debug, give suggestions, and touch up layout/design. And again a reminder that as always you must diclose AI use for any assignment or lab in your Brightspace submission.
Interactive information datagrid page
So extending further into educating through information, you are going to build a resource page that features an information grid (published in an html table) where a user could use your page as a resource to explore or learn about something through the information you are publishing and interactive elements you build into the page.
First, you need to identify a comparison dataset. The core dataset needs to compare different products, people, or even statistics. And it must consist of at least 9 rows of data (entries), with at least 5 columns, and a header row.
Examples of datasets include:

Sports statistics betwean teams, players, etc.
Comparing cars. It is a little wonky, but you could use to a tool like a car comparisont tool to come up with stats about cars, and paste each result into a spreadsheet to build up a grid
Government statistics between cities or regions. For this you do not want raw data (lots of govt datasets) but rather summaries, like crime stats or populations, that you could compile in a spreadsheet

 
Once you have a spreadsheet of information, code it up as an html table. (Reminder, the html tables lecture has a walkthrough of tools to convert a spreadsheet into an html table).
Now write a webpage that features the information, and has a walkthrough on using it with a handful of in-depth examples.
Then add jQuery interactions to the page both for exploring the data (highlights, animations) and scripted elements in your examples and walkthroughs that connect or highlight data.
Page Requirements:

Use header, footer, figure and figcaption semantic tags in page
Core page data:




Data/info grid with at least 10 rows (records) and 5 columns (data points).
Data pre-sorted by one core column. (do not have to have any re-sort functionality)
Glossary or key index (see next section below) and select pop-up definitions or tips (also see below).
Message or output box div in page. (see second scriping requirement below)
Data grid formatted into an html table.
Table styled with one highlight color on the core column (the one you sorted by), plus misc color and spacing formatting of table.
jQuery: When your mouse hovers over any cell in a row the entire row should have a highlight effect and the cell of the core data column in that row should be further spotlighted.
jQuery/scripting: Clicking on a core title in a row (player name, product name, govt statistic city, etc.) should compile a custom summary of the relevant info for that item (drawing from multiple cells), and insert the message/summary into a div in the page (such as a message or comment box). See a primative version of this from the hockey stats demo in the screenshot to the right.

Pop-up header row terms: Clicking on some (at least 3) header columns should trigger pop-up terms or tool tips (why important, how to use). You can reference code/samples we built in class from the demo hockey_jq_end2.html
Glossary or explanation of terms:

Coded through an html description list (dl, dt, dd).
So for instance, if it were a car datagrid columns like mspr, performance (how it is defined), reliability, etc, in the datagrid, would have corresponding entries in the glossary.
jQuery interactions: Definitions (dd) should be hidden by default, and mousing over a term (dt) should trigger the definition to animate in, and leaving the term should cause the definition to animate out. Animation can be slide, fade, etc.

Walkthough / guide to using the page, at least two in-depth examples. Each walkthough needs to:

Have highlights and/or animations scripting. These can be triggered by the user clicking on a walkthrough paragraph, or on individual terms.
Note that you can add IDs and/or classes to specific cells in your tables, and add spans with unique IDs around phrases of words in your text.


Student questions: 
jQuery: If I know Javascript can I write all the scripting requirements in native Javascript, or using other JS libraries? Yes.

Can I get help from a class assistant in putting together the pages and writing the scripting? Yes. You can get help from class assistants and the instructor in crafting your html/tables and getting scripting to work. Obviously getting extensive help is better/safer from an assistant or instructor. I don't mind peers helping troubleshoot, but the code and routines in your pages should not exactly duplicate those in other student's work. Some of the examples in hockey_jq_end2.html will also hopefully be useful.
Can I use a different dataset besides sports, car ratings and stats, or government summary statistics? Yes, as long as it has a decent number of datapoints (columns) and records (rows) that you can compile into a datagrid, and that you can make an argument for it being a resource / analysis tool and can write up walkthrough scenario examples. Obviously if in doubt, check with me. 

As always submit the url (from the server) to the Brightspace assignment. And if you've used AI to help write any of your code include notes about that in your Brightspace submission.
Below are four examples of past assignments --  ex1,  ex2,  ex3,  ex4,

  linked: car comparisont tool: https://www.google.com/search?q=car+comparison+tools&rlz=1C1CHBF_enUS880US880&oq=car+comparison+tools&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjINCAQQABiGAxiABBiKBTIKCAUQABiiBBiJBTIHCAYQABjvBTIKCAcQABiABBiiBDIKCAgQABiABBiiBNIBCDIxMzlqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8
  linked: hockey_jq_end2.html: https://iyawebdev.com/acad274/lecture_examples/hockey_jq_end2.html
  linked: hockey_jq_end2.html: https://iyawebdev.com/acad274/lecture_examples/hockey_jq_end2.html
  linked: ex1: https://iyawebdev.com/acad274/lecture_examples/assign4_ex1.pdf
  linked: ex2: https://iyawebdev.com/acad274/lecture_examples/assign4_ex3.pdf
  linked: ex3: https://iyawebdev.com/acad274/lecture_examples/assign4_ex5.pdf
  linked: ex4: https://iyawebdev.com/acad274/lecture_examples/assign4_ex6.pdf
