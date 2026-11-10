
Did you install Dreamweaver if you are going to follow along with DW demos today, especially the Bootstrap templates?

OPEN in browser tabs:

- acad274_facebook_sm_campaign_data (https://docs.google.com/spreadsheets/d/1zsXezRAgODVGkRnL5qqqzsqk9N4Q8T5Zgld85HBqyS8/edit?gid=785130234#gid=785130234) (open not save)

- tablesgenerator.com/html_tables (https://www.tablesgenerator.com/html_tables) (open)

- NHL Top Scorers (https://www.espn.com/nhl/stats/player) (open)

SAVE to your computer:

- flex_logos_start.html (https://demos.webdev.iyaserver.com/acad274/flex_logos_start.html) (save file)

- flex_nav1_start.html (https://demos.webdev.iyaserver.com/acad274/flex_nav1_start.html) (save)

Tables review, flexbox, bootstrap

We will not explore frameworks like bootstrap in depth in this class (like we will in ACAD275), but visual studios like Dreamweaver and frameworks like bootstrap (and particularly sample templates) can be useful in rapidly creating pages to publish content, with more flexibility (adaptive, mobile-friendly) that manual page creation, especially for beginners.

We will also look into the flexbox set of css properties and framework. Although again, not in the depth of a course such as ACAD-275.

But first, let's revisit publishing tabular data through html tables and associated tags. First open up in a browser tab the google spreadsheet download the csv spreadsheet file acad274_facebook_sm_campaign_data (https://docs.google.com/spreadsheets/d/1zsXezRAgODVGkRnL5qqqzsqk9N4Q8T5Zgld85HBqyS8/edit?gid=785130234#gid=785130234). You can also save a version of the file directly if you like as a CSV from facebook_sm_campaign.csv (https://demos.webdev.iyaserver.com/acad274/facebook_sm_campaign.csv). Open up that file in a spreadsheet (google sheet or excel).

Now as we mentioned last time if you have Dreamweaver you could paste the spreadsheet (directly from Google Sheets) through the Design view and it will create a table. But I prefer the slightly simpler output from the free online resource "Tables Generator (https://www.tablesgenerator.com/html_tables)", especially the fact that it formats the header columns with th instead of td. You can compare the output of X (DW Designer conversion) and Y (Table Generator).

Assuming you use th for your header rows, take a look at the very simple initial styles below, which you are welcome to add to any page with a table output as a starter css/style format:

table {
	border: 1px solid darkblue;
	margin: 9px;
	padding: 5px;
	border-spacing: 3px; /* gap BETWEEN table cells */
}
th, td {
	border: 1px solid darkblue;
	padding: 5px;
	margin: 2px;
}
td {
	background-color: lightsteelblue;
}
th {
	background-color: steelblue;
}
.highlight {
	background-color: yellow;
}

Obviously you can adjust the colors and spacings, but this sets up your table with one colors for the header row table cells, a different one for all the data cells, and a "highlight" class that you can add to any individual data cell (td). Pick a random td, and add class="highlight" to that tag.

Also, the View column is the core metric/target of the sheet. Below are three DIFFERENT css examples to add column or row highlights to a table that target styles according to different syntactical parameters:

/* set gray to every other cell, i.e. alternate COLUMNS */
tr td:nth-child(even) {
			background-color:gray;
}

/* set gray to every other ROW of EVERY cell (td) */
tr:nth-child(even) td {
			background-color:gray;
}

/* set gray to the second cell/column of every row */
tr td:nth-child(2) {
			background-color:gray;
}

Finally, let's create a set of term definitions/look-ups after the table through a definition list. Let's start with just two:

<dl>
	<dt>View</dt>
	<dd>How many times the post/video has been viewed</dd>
	<dt>Reach</dt>
	<dd>How many unique people viewed the content</dd>	
</dl>

And then if we want to layer in some simple css, let's add to the stylesheet:

dl { width: 500px; border: 1px solid blue; }
dt { background-color: steelblue; }
dd { background-color: lightsteelblue; }

You can see a version of this page in tabledemo2.html (https://demos.webdev.iyaserver.com/acad274/tabledemo2.html)

Cleaning up table data before you import/convert it

It is not uncommon that tabular data you copy from a webpage (or a csv or other public data set) might not be in the format or content you want. In particular, if you copy data from the web there may be strange permulations (or tricks) the site does with the data to make it harder to directly import (often to dissuade web data scraping from their competitiors).

[image https://iyawebdev.com/acad274/lecture_examples/nhlstats_edited.png]

As an example, open up the ESPN Hockey top scorers page NHL Top Scorers (https://www.espn.com/nhl/stats/player). If you use your curses to drag/copy the data, you may not notice that it has a strange structure. Paste it into a google sheet doc.

Notice that the player name and teams are in one set/table, but the rest of the data is in another... orphaning the first two columns from the related (core) data stats. Copy the entire data table from the page above, then paste it into Sheets. Then In sheets, copy/paste the data. Then "cut" the lower section (including the column headers like POS, GP, etc.) and paste it in parallel with the rank, player name and team (lining up the column headers with RK and Name). Now you have the complete data set in a spreadsheet format. You could also of course at this point delete any columns you don't want. In the example to the right, I've done that and reduced the overall dataset to just Name, GP, G, (deleting the first RK column and lots of others).

Now we can paste it into a converter to get it into an html table format (with table, tr, tr, and th tags) and use it in a page. Also note that it would make sense to include a glossary (like on the original page) underneath it, to give some content/explanation for the column header acronyms like GP, G, S%, etc.

Flexbox

Complete Guide to Flexbox
One of the best guides to flexbox -- with great visual illustration examples -- is the css tricks "A Complete Guide to Flexbox (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)" article.

In particular, I like how it uses the left column to explain/display flex container properties and the right column for flex item properties and examples.

Most modern websites use css "flex" properties for their layouts. The flexbox approach adds a little more complexity in box layouts, insofar as creating outer "parent" boxes around content, but alleviates having to calculate nuances of layout math and automatically adjusts content boxes to fit different browser and device profiles.

With flexbox, you define a portion of your webpage in a box (the flex parent), and then layout its content (sub-boxes) either across as a "row" or down (vertically) as a "column".

Flexbox offers a simple but powerful approach to laying boxes of elements, and allows for very painlessly laying out columns of boxes and thinking in terms of vertical alignment.

You achieve this by first setting up a parent (outer) box, often called the flex container, much like you would in the tradional model. And you set a css setting to the outer box of display type of flex (display:flex), rather than relative, absolute or fixed. This tells the browser that the outerbox will follow flexbox instructions, and that it can be flexible in its rendering/layout.

Then inside of that box will be the boxes of content that it will organize and lay out. These elements inside the flex container are called flex items.

Take a look at the apple webpage layout below, and note all the highlighted flexboxes (containers and items, and many boxes are both):

[image https://iyawebdev.com/acad275/lecture_examples/flexbox/flex_ss_apple1.png]

We will explore a couple of flexbox sample pages to get a quick feel for how it works, even though most of you will likely work off pre-built flexbox template pages.

Demo1: flex image grid

Let's open up a traditional image grid, laid out with float boxes. Open up flex_logos_start.html (https://demos.webdev.iyaserver.com/acad274/flex_logos_start.html). Notice the main box #outercontainer has nine inner .imgbox divs, each of which contains one .logo img, and that the inner .imgbox divs have a fixed width and floats:

.imgbox {
	float:left;
	width: 300px;
	background-color:lightsteelblue;
	margin: 9px;
}

To make these flex boxes, we first edit the outer box into a flex container (parent). We do this by making it display:flex:

#outercontainer {
	 display:flex;
}

Notice just doing that, the flex container has made all of its inner divs into flex items, and it has automatically made them fit. Now let's layer in some flex item properties to the inner boxes by removing their traditional width attribute and replacing it with a baseline flex-basis and telling them they are allowed to grow in size proportionately to each other:

.imgbox {
	/* REMOVED float and width */
	flex-basis: 300px;
	flex-grow: 1;
	background-color:lightsteelblue;
	margin: 9px;
}

Notice that although I told it the prefered size for the inner boxes is 300px, they are still small. That is because they need to fit on one row of the flex container (outer box). So add to the container that it is allowed to wrap items (across lines):

#outercontainer {
	display:flex;
	 flex-wrap: wrap;
}

And if you remove the width constrains on the #outercontainer, so it fills the browser, then if room it will start shifting the boxed even further from the 3x3 grid to fill the space, like laying out a 4x4 with one large box for the 9th one.

You can see the final version of this flex-based logo grid at flex_logos.html (https://demos.webdev.iyaserver.com/acad274/flex_logos.html)

Simple layout flex examples

Ok, so let's explore a simple two-column page layout in flex. The structure is not particularly complex, with a simple header, two-columns, then footer, but it shows how it would be implemented through flex. Load up flex_layout1a.html (https://iyawebdev.com/acad274/lecture_examples/flex_layout1a.html)

Notice that the header and footer have flex-basis of 100% (full width) of the container, but the two columns in the middle (.col1 and .col2) have a flex-basis of 45%. If these were normal divs, 45% + 45% would leave a gap in the page. But because they have a flex container (#outercontainer), it automatically adjusts them to fit the space.

Extending this into more complex content, how about if there was one content "column", but within that there were multiple "items" that are flowed over two visual columns, includuing one "lead" one that has higher profile elements. Take a look flex_layout2.html (https://iyawebdev.com/acad274/lecture_examples/flex_layout2.html).

Flex demo2: navigation bar

[image https://iyawebdev.com/acad275/lecture_examples/flex_nav_goal.png]

Let's build one more demo example: a navigation bar using flex boxes. We want to build something like

[image https://demos.webdev.iyaserver.com/acad274/flex_nav_goal.png]

So we could create nav buttons with floating divs (to the right) inside of a parent nav div. Load up the start file flex_nav1_start.html (https://iyawebdev.com/acad275/lecture_examples/flexbox/flex_nav1_start.html). Then edit the nav item into a flex container, with the following added properties:

	#nav {
		display:flex;
		flex-flow: row;
		justify-content: flex-end; /* align/float to right */
		gap: 20px; /* separate buttons */
		background-color: steelblue;
	}

Overall look how simple/short the entire css and html code is to create the flexible nav:

	#nav {
		display:flex;
		flex-flow: row;
		justify-content: flex-end; /* align/float to right */
		gap: 20px; /* separate buttons */
		background-color: steelblue;
	}
	.item {
		min-width: 100px;
		text-align: center;
		color:white;
	}

...

<div id="nav">
	<div class="item">Home</div>
	<div class="item">Lectures</div>
	<div class="item">Assignments</div>
	<div class="item">Resources</div>
</div>

Even though we just built that, you can also see this in action at flex_nav1.html (https://demos.webdev.iyaserver.com/acad274/flex_nav1.html) simple flexbox navigation example above. Notice how all of the buttons are on the right? That's because the nav container is using justify-content: flex-end to put all of the content at the end (right side) of the box. If we change that to flex-start it is a left-aligned nav, if we set to center they are in the middle, and if we set to space-around they would be evenly distributed across the space.

One convenient advantage to this approach is that is scales well to different devices (small and large).

With that quick overview of flexbox, take a look at the amazon.com layout below, and see if you can identify the flexboxs (containers and items):

[image https://iyawebdev.com/acad275/lecture_examples/flexbox/flex_ss_amazon.png]   

Bootstrap

Bootstrap is a library of html, css, and Javascript that allows for rapid development of pages and page components without extensive knowledge of html, css, and js. There are many ways to implment a bootstrap page/site, which can be as simple as loading the core bootstrap css and scripting libraries from a cdn (content distribution network) site such as including the code below in your page header (from the Bootstrap site):

<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>

The getbootstrap (https://getbootstrap.com/) site has full documentation and walkthroughs. But an even quicker/simpler way to try Bootstrap is to use one of the Dreamweaver bootstrap starter templates (New Document > Starter Templates > Bootstrap Templates).

Bootstrap templates have many advanced features like adapative/reponsive design buit-in, without having to learn layout grids, flex elements, and media queries.

Besides starting from a template, if you want to play around with Bootstrap from a blank page (but with all the functionality loaded), in Dreamweaver you can also try New Document > HTMl and on the right side under framework click on the Bootstrap tab (and optionally click on the Design: Include a pre-built layout option. This pre-loads the many elements from the Bootstrap library, and starts with a navigation bar, some sample cards and buttons, and footer.