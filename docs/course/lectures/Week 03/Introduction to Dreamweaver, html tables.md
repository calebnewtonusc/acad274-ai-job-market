
Did you install Dreamweaver if you are going to follow along with the DW-specific portion of demos this week?

For class prep, save to your computer:

- css_selectors_end.html (https://iyawebdev.com/itp104/lecture_examples/css_selectors_end.html)

- weather_end.html (https://iyawebdev.com/acad274/lecture_examples/weather_end.html)

- hockeystats_table1.html (https://iyawebdev.com/acad274/lecture_examples/hockeystats_table1.html)

Critique of recent student work

Many weeks we will go over recently submitted student work to explore ux and design elements and highight and/or critique elements.

- BAD: submissions to files on YOUR computer not server -- file:///Users/dent/Downloads/Brunson%20Information%20Webpage.html (file:///Users/dent/Downloads/Brunson%20Information%20Webpage.html)

- fashion market impact (https://bantay.webdev.iyaserver.com/acad274/02a%20Assignment/Fast%20Fashion%20Waste.html) -- cohesive color scheme, nice use of background images

- dodger stats (https://beley.webdev.iyaserver.com/acad274/knowledge%20webpage.html) -- clean modular layout, internal hyperlink... acknowleged help from ai : )

- mcdonald's strategy (https://dhlai.webdev.iyaserver.com/acad274/McDonaldsinfopage.html) -- mcdonald's strategy

- music analytics (https://kdmoore.webdev.iyaserver.com/acad274/Knowledge%20webpage%20assignment/Knowledge%20webpage%20assignment.html) -- another interesting use of background image specifically as a framing device, although probably a bit busy/needs a bit more spacing/breathing

- Tennis player analysis (https://wthoman.webdev.iyaserver.com/acad274/02a/sportsinformation.html) -- look at how effective the side-by-side layout in the middle of the page, where reader can look at data and analysis of it

- could we live on mars? (https://asiy.webdev.iyaserver.com/acad274/information%20webpage%20/Alexandra%20Siy%20-%20ACAD274%20Information%20Webpage%20Assignment.html) -- and one more background image design, this one with animated elements on top as well as behind

Using the Dreamweaver application

I will explore Dreamweaver today, both as a potential page development platform. It will also provide useful tools to assist with responsive web design and when we expore Bootstrap and other templates.

When working in Dreamweaver, you are generally going to start by:

- Opening an existing page (including ones you created in VSCode).

- Creating a new html blank document through New Document > HTML > None

- Creating a new html document starting from a template from Starter Templates > Basic Layouts or Starter Templates > Bootstrap Templates. These will create a new page with tags and a stylesheet with a library of styles (and in the case of Bootstrap scripts), and will pre-populate the page with starter content.

Dreamweaver -- most important interfaces:

- Code / Design / Split Modes / Live -- buttons at upper left of interface that control which UI the program is using. NOTE: Live mode renders the page closer to how it would look in a real browser, but you CANNOT make certain page edits in Live mode (have to turn it off).

- Properties Window -- Edit the properties of an element on the page (image, div, link, etc.)

- CSS Designer Window -- Edit and create styles (id, classes and tag instructions) in the page

- Insert menus and/or Insert Window -- add elements/objects to the page

- HTML source code -- can access by switching to Code view OR can bring up separately through Code Inspector window.

- Lost / can't find a window/interface? Go to the Window menu to show/hide different UIs.

Property Inspector:

- Generally keep this window open all the time

- When you select an object on the page, Properties interface lets you edit/set the properties of that element.

- "HTML" is the "normal" mode of the Properties window. This allows you to edit the HTML properties of the object. You can set things such as the class or ID of an object, the src of an image, the href of a links, etc.

- "CSS" side of the Properties window lets you edit or create new CSS styles for the object. If the object is set to a CSS class, yu can click on Edit Rule to directly edit that related CSS class. Or if the object does not have any CSS assigned to it you can click on Edit Rule to simultaneously create a class and assign it to the object.

- Defaults: Remember to 0 out properties you want to be 0 -- don't just leave them blank

CSS Designer window:

- Sources: Lists out sources of CSS for the page -- internal styles blocks and/or external stylesheets. Selecting a source then lists below the selectors

- Selectors: Lists out defined styles (class, IDs, tags) (internal or from an external file). Selecting a selector lists out the properties

- in that selector

- Properties: Lists out the properties in the style. There are icons that cluster the different entries into: "Layout", "Text:, "Borde"r and "Background" properties. You just find the property you want to set in the list and type in a value. You can also use the "Custom" icon to type in a property name and value. You can also use the "Show Set" checkbox to show only those properties that already have values.

- So to create a new style you:

- Select a CSS source (or add one) in Sources

- Enter in the selector for the new style (.logo, #header, body, etc.) in Selectors

- Enter in the value or property: value pairs in Properties

(Optional) Adding elements to the page:

- First off, since this is a visual interface, when in Design mode you can simply click anywhere in the page and start typing to add text content at that location.

- If you want to add a new element to the page, such as an image, you click where you want to "insert" it, then use the Insert menu or Window to add a new element

- Insert menu: If you use the Insert menu you will mostly be using:

- Insert > Div

- Insert > Image > Image

- Insert > Strucutre ... to find ULs, OL, LIs, Ps, etc

- Insert > Form to fnd all the form objects, from adding a new base form and all form objects. Note: If you try to add a form object to a page that does not already have a containing "form", it will prompt you to add the form around it.

- Insert > Horizontal Rul and Insert > Hyperlink Note: You can also add hyuperlinks by simply selecting the text and/or image that you want to put a link around and use the Link part of the Propety window to add a hyperlink.

- Insert window/palette: 

- You can also bring up a permanent window/pallete from which you can "drag" html objects to the screen

- The Insert window has a menu at the top that lets you switch between the insert groups such as "Common", "Structure", and "Form".

Dreamweaver pre-built "layouts":

-  When you start a new document in Dreamweaver, NEVER (for now) pick Site Template. You can start from a Blank Page or Starter Templates, with the latteer Always pick "Blank Page" and "HTML" in the first two columns -- no other options!

-  In the third column, "None" will give you a blank page.

-  If you want to try starting a page from one of DW's pre-built layouts, in the third column select one of the Layout styles:

   -  The preview is not very good so if you want to see what a style looks like you might want to just press Create and see it.

   -  All of the DW layout styles will save an external stylesheet (css file) in addition to the page itself

   -  The layouts not only start from pages with design and layouts done, but each element (header, content, sidebar, navigation, etc.) is pre-populate with content/text.

   -  To edit the properties of the layout (dimensions, colors, etc.) you find the corresponding CSS Style and edit that. For instance, to change the height or background colo of a header you would find the .header class and edit its CSS Rules.

-  When working with their layouts remember you will have TWO files -- the HTML page AND the css file. And so of course you need to save (and copy) both files.

-->

HTML Semantic tags

Main HTML5 semantic tags:

- header

- footer

- nav

- footer

- section

- article

- aside

- figure and figcaption

To implement semantic tags you simply use them in place of the generic div tag, which means you style them using tag instructions instead of say id or classes. So for instance, instead of div css instructions in your stylesheet such as #header{}, #nav {} and #footer {} the entries would be named as tags header {}, nav{} and footer {} (with no hash punctuation).

[div id="outercontainer"]
[header]PAGE HEADER[/header]
[nav]Item 1, Item 2[/nav]
[div id="content"]
    [aside]List of things[/aside]
Page Content
   [/div]
[footer]Copyright ...[/footer]
[/div]

You can use section and article to group and identify certain content and elements in a page. To see a simple example of section in action, in DW create a new doument with Starter Templates > Basic Layouts > Simple Grid, and then look at how section is used in the markup.

Another useful semantic imlementation is the pair of figure, to denote a figure (generlly an image) and figcaption to flag the content (for search engines) and to identify the caption that goes with it. Note: Not ALL images need to be nested in figure blocks. Just those that have captions.. See below as an example.

[figure]
[img id="pic1"][br /]
[figcaption]Photo description[/figcaption]
[/figure]

Data grids/spreadsheets in a web page

So what html constructs could we use to display "grids" of data/information? Dozens or hundreds or div/boxes do not seem well suited to that type of page element. Luckily, there is a set of html tags explicitly designed to layout out a grid with cler columns and rows...

HTML tables

HTML "tables" create grids with columns and rows, unlike traditional html boxes like divs that might visually appear to be grids but are not actually so. In general when a website publishes statistics and data, such as sports stats, they do so through html tables. 

[image https://iyawebdev.com/acad274/lecture_examples/espn_ranger_stats_ss.png]
Hockey stats laid out with tables from espn.com

While you can of course lay out data with boxes/divs (flex or other), when dealing with large amounts of data (particularly statistics) they are inefficient since they do not inherently create a grid. HTML tables lay out content in rows and columns like a spreadsheet.

An HTML table is created with a table tag, and consists of rows of content. Each row is created with a tr (table row) tag, and each row contains table data or "cells" laid, coded in td or table data tags. Cumulatively all of the cells in a row make up a column of the table.

In the example below there is a simple grid of three people, listing first name, last name and email.

The code to the left would display as below (note borders have been added) 
[image https://iyawebdev.com/acad274/lecture_examples/tables1.png]

Contacts:
<table>
	<tr>
		<td>patrick</td>
		<td>dent</td>
		<td>dent@usc.edu</td>
	</tr>
	<tr>
		<td>justin</td>
		<td>zhu</td>
		<td>zhujusti@usc.edu</td>
	</tr>
	<tr>
		<td>neeraj</td>
		<td>salunke </td>
		<td>nsalunke@usc.edu</td>
	</tr>
</table>

Of course, tables or data grids typically have labels/headers for the columns. You could simply have a standard top row (tr) that lists the column names, but there is a specific tag th (table header) tag that can be used to define column header cells in a table. It does not functionally or visually work any differently than a normal table data cell, although it is quicker to target with uniqie (header) styles as it has its own tag name. And like in many other instances, it also supplies meta data to search engines (that the data is column name information not data).

Formatting tables is slightly diferent from normal html objects. The table tag has direct cellpadding and cellspacing attributes, which control the margin and padding for all table cells (th and td). See the example below You can also assign style instructions to the overall table and rows. In the example below the table has a background-color or

So in the example below we have added a header to the table, and we have added cellpadding and cellspacing to the table tag, but then are using traditional style instructions for the background colors of objects (and borders). Note that the dark blue that is showing through "in between" the cells is from the background color of the table.

[image https://iyawebdev.com/acad274/lecture_examples/tables2.png] 

 Note: To get spacing BETWEEN cells (td) in a table you need to add a border-spacing instruction to the table style, like below:
table { border-spacing: 9xp; }

Attempts to add margins to the td tags will not work due to cross-browser and html versions. 

<style>
	table { background-color: midnightblue; border-spacing: 9px; }
	tr { background-color: slateblue;}
	th { background-color: steelblue;  }
	td { background-color: lightsteelblue; margin: 33px; border: 1px solid white;}
	th, td { padding: 5px; }
</style>
<table>
	<tr>
		<th>firstname</th>
		<th>lastname</th>
		<th>email</th>
	</tr>
	<tr>
		<td>patrick</td>
		<td>dent</td>
		<td>dent@usc.edu</td>
	</tr>
	<tr>
		<td>justin</td>
		<td>zhu</td>
		<td>zhujusti@usc.edu</td>
	</tr>
	<tr>
		<td>neeraj</td>
		<td>salunke </td>
		<td>nsalunke@usc.edu</td>
	</tr>
</table>

So easy enough to apply style formatting to a row, like a highlight color. So imagine you wanted to format all of the cells in a particular row of the table. If you gave the row (tr) a unique class or id, then you could target all of the cells (td) in that row such as a style element .grader td {}. See the updated code and preview below:

[image https://iyawebdev.com/acad274/lecture_examples/tables3.png]

<style>
	table { background-color: midnightblue; border-spacing: 9px}
	tr { background-color: slateblue;}
	th { background-color: steelblue;  }
	td { background-color: lightsteelblue; margin: 33px; border: 1px solid white;}
   th, td { padding: 5px; }
	.grader td { background-color: olive;}

</style>
<table>
	<tr>
		<th>firstname</th>
		<th>lastname</th>
		<th>email</th>
	</tr>
	<tr>
		<td>patrick</td>
		<td>dent</td>
		<td>dent@usc.edu</td>
	</tr>
	<tr class="grader">
		<td>justin</td>
		<td>zhu</td>
		<td>zhujusti@usc.edu</td>
	</tr>
	<tr>
		<td>neeraj</td>
		<td>salunke </td>
		<td>nsalunke@usc.edu</td>
	</tr>
</table>

What if you wanted to alternate background colors every row? There is a specific css selector propery that allows you to apply instructions to only the even rows:

	tr:nth-child(even) { background-color: #d3e1eb; }

So what about row formatting? Within the table you can define a "colgroup" (column group formatting) through which you can apply formatting vertically to all cells with a column (across rows). The colgroup has individual col entries representing each column of cells. These col entries have style intructions but NO CONTENT. So let's say we wanted to highlight the emails in the table. The below code would add nothing to the first and second columns of the table, but add formatting to the third column (of all rows). Note this colgroup block is located within the <table></table>:

-->
Of course, this is much more effective or needed when there is a large field of data...

(Auto)Formatting web data with tables

Imagine you want to copy/scrape a dataset from the web, such as NHL hockey statistics. Let's start by going to the player stats page for the NY Rangers (https://www.espn.com/nhl/team/stats/_/name/nyr/new-york-rangers). You can simply copy the data, but then you have data without any formatting like:

GP	G	A	PTS	+/-	PIM	TOI/G	PPG	PPA	SHG	SHA	S	SPCT
50	22	34	56	-7	16	19:48	8	11	0	0	153	14.4
52	3	38	41	3	26	23:26	1	15	1	0	88	3.4
52	10	23	33	-25	18	18:17	4	11	0	1	119	8.4
52	15	17	32	-5	34	21:25	4	6	1	0	135	11.1
52	14	17	31	-14	24	17:51	2	2	0	0	123	11.4
52	13	14	27	6	26	14:48	1	1	1	0	96	13.5
51	10	16	26	0	16	15:45	1	2	2	0	79	12.7
41	11	9	20	4	14	14:20	1	2	0	0	89	12.4
44	15	3	18	-8	20	17:18	5	1	2	0	110	13.6
52	5	10	15	3	39	11:12	0	0	1	1	52	9.6

which would of course display as:

GP G A PTS +/- PIM TOI/G PPG PPA SHG SHA S SPCT 50 22 34 56 -7 16 19:48 8 11 0 0 153 14.4 52 3 38 41 3 26 23:26 1 15 1 0 88 3.4 52 10 23 33 -25 18 18:17 4 11 0 1 119 8.4 52 15 17 32 -5 34 21:25 4 6 1 0 135 11.1 52 14 17 31 -14 24 17:51 2 2 0 0 123 11.4 52 13 14 27 6 26 14:48 1 1 1 0 96 13.5 51 10 16 26 0 16 15:45 1 2 2 0 79 12.7 41 11 9 20 4 14 14:20 1 2 0 0 89 12.4 44 15 3 18 -8 20 17:18 5 1 2 0 110 13.6 52 5 10 15 3 39 11:12 0 0 1 1 52 9.6

Obviously you could sit down and literally code rows (tr) and cells (td) around each piece of data. But luckily there are some automation options.

First off, I would recommend first pasting the data into a spreadsheet (google or office). This will not only let you clean up any bad formatting or data, but also give you a change to merge multiple datasets and/or re-sort them first.

So I am going to go to the ESPN pages for Rangers player stats (https://www.espn.com/nhl/team/stats/_/name/nyr/new-york-rangers) and the Lightning player stats (https://www.espn.com/nhl/team/stats/_/name/tb/tampa-bay-lightning), and copy the stat rosters from both and paste into google sheets. When I do so a strange artifact is that the player (name) data is in a different table than the stats, but I can copy/paste/move around data to get it all together. I also added a new column Team that I put "Rangers" or "Lightning", so be able to tell the players apart when they are mixed together (see below).

Next, do any data sorting. In my case because I am combining two datasets, I am going to re-sort them by points (PTS). in google sheets I will highlight the PTS column, then on the column's drop-down select "Sort sheet Z to A". I've now got the players on both teams sorted/intermixed by points.

Ok, so now I've got a grid of statistics that I want to publish to a webpage as a table. But I do NOT want to have to manually go through and create tr rows and td cells. There are two pretty quick ways to automate this.

Dreamweaver:  One convenient feature of DW is its ability to paste content (from a web page or other program) into visual/Design mode, and behind the scenes it writes the code to format it. If you paste an excel or sheets table into a new page in Design mode, when you go to Code notice it encoded all of it in tables.

	tr:nth-child(even) td { background-color: #d3e1eb; }
	th { background-color:steelblue; }
	table tbody tr td:nth-child(6) {    background-color:steelblue;  }
	table tbody tr td:nth-child(1),  table tbody tr td:nth-child(2){    text-align:left;  }

Web-based table generation tools like tablesgenerator.com/html_tables (https://www.tablesgenerator.com/html_tables): The tablesgenerator tool allows you to paste a table into its UI, then click on Generate and it wil output the table code (I would recommend checking 'Do not generate CSS'). It even assumes the first row is your header and uses th tags (instead of td).

To see a final version of this demo, I started by copying the stats from https://www.espn.com/nhl/team/stats/_/name/nyr/new-york-rangers (https://www.espn.com/nhl/team/stats/_/name/nyr/new-york-rangers) and https://www.espn.com/nhl/team/stats/_/name/tb/tampa-bay-lightning (https://www.espn.com/nhl/team/stats/_/name/tb/tampa-bay-lightning), paste those into an empty google sheet, moved and cleaned up the data, and resorted by the PTS column. That got me to Hockeystats google sheet (https://docs.google.com/spreadsheets/d/1A3Qapj8SgnfDjYB1h7vgTxq9MAr4MV7XhRMyC7kj8ys/edit?usp=sharing), then I pasted that data into tablesgenerator.com/html_tables (https://www.tablesgenerator.com/html_tables), and Generate gave me the source code that I used to create the page

Hockeystats_table1.html (https://iyawebdev.com/acad274/lecture_examples/hockeystats_table1.html) 

And an improved version with some css formatting: Hockeystats_table2.html (https://iyawebdev.com/acad274/lecture_examples/hockeystats_table2.html)

Definition lists

Finally, for any information or data grid, there are likely terms that would be useful to define. These could be column headings, but they could also just be associated concepts.

HTML has a description list for just these kind of situations. Besides semantically giving search engines information about the content, descriptions lists also have some inherent formatting and design (which you can of course alter).

A list is defined by the dl tag (kind of like how ul defines the overall unordered list). Inside that list you have description terms (dt) and description details (dd). See the simple example below:

[image https://iyawebdev.com/acad274/lecture_examples/tables4.png]

<style>
	dl { width: 500px; border: 1px solid blue; }
	dt { background-color: steelblue; }
	dd { background-color: lightsteelblue; }
</style>
Hockey stat terms
<dl>
	<dt>Plus/Minus</dt><dd>When a regular (non-power-play) goal is scored, 
	each player  on the ice receives a plus or minus based on if their team scores.</dd>
	<dt>SH</dt><dd>Short-handed (SH) refers to a team that is killing a penalty. 
	It can also refer to points or goals scored while a player's team is killing a penalty (short-handed).</dd>
</dl>