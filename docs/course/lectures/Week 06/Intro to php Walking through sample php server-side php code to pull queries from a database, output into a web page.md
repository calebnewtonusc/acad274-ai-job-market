
Save to your computer

- sample movie php page (http://iyawebdev.com/acad274/lecture_examples/movies_sample_php.txt)

 File Manager). You will need to test that it works through your root link (https://iyawebdev.com/acad274/20253_students.html) and will need to edit it directly through the cPanel > File Manager.
 -->
- php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt)

- Two movies start page (http://iyawebdev.com/acad274/lecture_examples/movie2demo.html) and txt version (http://iyawebdev.com/acad274/lecture_examples/movie2demo.txt)

Other useful files from today:

- php sample output movies page with embedded debug info (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt) (note would need to create a file on the server with .php extension to test)

- simplified php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt)

- php sample output movies page with complicated WHERE filter (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code_complexwhere.txt)

(so create and save as movies_start.php on the server)
-->

You previously should have create a movies database through cPanel, and opened up the new db in phpmyadmin, and Imported the SQL script moviesdb_for_import.sql.txt (http://iyawebdev.com/acad274/lecture_examples/moviesdb_for_import.sql_NEW.txt) (we did this for last class, but if you has not...). If you broke the database, you can start over by in cPanel deleting the database, re-creating it, then re-import that file to re-populate it. For the purposes of your lab, you may find it useful to "test" SELECT statements in your copy of the movie db before putting then into a php page running against my version of movies.

Lesson plan / session overview:

START with php set up:
All students need to turn on Php ini debug. 
Can test through a "bad" php line in a test.php page 
Write the data and time  block of php. Test. 
Reinder: cannot open file directly off laptop, but must be through server. 
Can use the classpge root link to find/test php files.
Can see if debug is NOT turned on by inserting error in page and testing.

db recap:
In phpmyadmin look at the movies db, especially through the Diagram. 
The view1 and view2 are what we access, but can explore the underlying tables.
Review same SELECT statements, and especially WHERE variants.

Php workflow, sample code.
walk through output sample code. show how it executes/outputs.

demo:
build a new page that will eventually have TWO queries

-->
Student work highlights

Time permitting, useful to peruse some of the recent student work for design, ux and interactivity highlights:

 nav and page layout stay in the same across pages 

-->
- renewable energy by state site (https://ellenjun.webdev.iyaserver.com/acad274/mini%20website/index.html),  notice nav highight on current page, consistent layout space and page elements site

- national parks site (https://kdmoore.webdev.iyaserver.com/acad274/Data%20mini-site/index.html),  underlyine nav button highlight, consistent header + nav at top, uniform color scheme 

- theme park incidents site (https://asiy.webdev.iyaserver.com/acad274/theme%20park%20incidents%20minisite/homepage.html),  hidden nav comes out of header (good and bad)

- apple launces versus stock site (https://aptully.webdev.iyaserver.com/acad274/Apple%20Launches%20Mini%20Site/index.html),  modular site is very quick to move through

- Compare pre-ai (https://cpwu.webdev.iyaserver.com/acad274/05a/Pre-AI/) and post ai redesign (https://cpwu.webdev.iyaserver.com/acad274/05a/AI/) ai versions of meteor site

- fast food nutrition site (https://irisz.webdev.iyaserver.com//acad274/FastFoodNutrition/main.html),  although could be larger, notice how sub-head/page titles give strong orientation to each page

 easy to read and navigate modular layout with color regions. 

- music trends (https://hongshug.webdev.iyaserver.com/idsn530/Trends%20in%20Music%20Genre%20Popularity/Overview.html),  distinct color scheme, good use of lite text on dark, improvement: overview nav button has brokeb link

- nba load management (https://dtsang.webdev.iyaserver.com/idsn530/assignment%2005a/index.html),  Clean layout, good use of color, improvement: header shifts slightly larger on homepage versus others.

 274
- NFL Kick Stats (https://dalbello.webdev.iyaserver.com/acad274/nfl-kicking-index.html),  clean modular layout, consistent design

- Smoking decline (https://friis.webdev.iyaserver.com/acad274/smoking-index.html), Distinct design, easy ux

- College admissions (https://mbhou.webdev.iyaserver.com/acad274/05a_mini_site/data.html), Good: Effective color scheme, highlights. Improvement: layout shifts slightly between pages.

- Cereals (https://junlaura.webdev.iyaserver.com/acad274/(05a)/CerealHome.html), Great use of illustrations and photos. Really livens up the pages.

- EV Data (https://opederso.webdev.iyaserver.com/acad274/data.html), Clean, modular layout. Improvement: Broken Home link

- National Parks (https://aprayoga.webdev.iyaserver.com/acad274/National%20Parks/index.html), Great use of fixed illustration background. Really creates a feel and tone for the site.

--> clean, simple design, walkthrough examples/highlights add to page

		- Population Centers in Canada (https://calebnew.webdev.iyaserver.com/acad274/comparisonDataInteractive.html),
 also simple, effective layout and color scheme. another example of the effective pre-written highlights (density, small area).

	- EV Sales in China v US (https://xungong.webdev.iyaserver.com/acad274/ComparisonWebMike.html),
 nice use of jQuery animation to "scroll" to message box.

	- Global Population (https://ivatury.webdev.iyaserver.com/acad274/interact1.html),
 good example of a compact layout where and do and see everything at once

- League of Legends player stats (https://ietseng.webdev.iyaserver.com/acad274/Comparison%20data%20web%20with%20interactivity/Comparison%20data%20web%20with%20interactivity.html),
 note analysis and data sub-set reveal in walkthroughs.

- Crime Rates in San Mateo (https://sfcheng.webdev.iyaserver.com/acad274/datagrid_interactive/#data),
very well designed page and user experience. Sample/walkthrough links show user how to take advantage of features. 

- California Native Plants (https://aschorn.webdev.iyaserver.com/acad274/data_comparison/data_comparison.html),
nicely designed page with effective color scheme, good and easy user experience. 

	-->

Basics of php language

php is a server-side language -- like node, asp/.Net, coldfusion, etc. -- which means it cannot be run/parsed directly from a browser, but MUST be run through a server. I.e. you cannot File > Open a php page off your computer, but must access it through http and through a server. Php files are executed/pre-processed by a php parser on the server, which executes the commands and outputs new content into the page.

Editing files directly off the server

Since you cannot test files directly off your computer (cannot load a php file directly off your computer into a browser) and must test them through the server, that means that as you write and edit files you have to constantly copy/publish them to the server such as through Filezilla FTP. If you try to open a php file directly off your computer through a web browser it will just display the code, like a text file, and will not only not run the php but it will also not parse the html and css. 

One alternative method is to use the File Manager server-side text editor in Cpanel. It has no color coding and tag tips, and is more like using notepad or simpletext. To access this tool:

- Log into cpanel (https://webdev.iyasevrer.com/cpanel)

- Go to Files > File Manager

- Drill down through public_html and acad274, and select a file, then in the top nav click on Edit, then click on the confirmation screen Edit button.

- Make edits to the file, then click on Save Changes. As a reminder you can directly launch files in a browser off the server by using your "root" link off the course website.

php commands must be within either php blocks or php output blocks. You must "switch" to php mode in your code before writing one or more php commands.

Create a new page, save it as test.php. Put the following into its code:

It is currently 
<?php  // starts standard php block
	echo date("H:i:s") . " on " . date("m/d/y");
?> <!-- closes php block -->

If you try to open the above file off your computer (locally), it will just show the source code of the page, like you opened a text file, and not only not parse the php but also does not render the css or html in the page.

But if you access it through the server, the above code will be executed, and lines 11-13 will be replaced with time and date information, for an output something like:

it is currently 22:28:21 on 02/16/26

php cpanel error display set upBy default, php "hides" errors in your page, and instead gives a generic "The page is not working" page/message. You need to "enable" displaying error messages:

- Log into cpanel (https://webdev.iyaserver.com/cpanel)

- Go down to Php > MultiPhp INI Editor

- Set "Select a location" to your server address (mine is dent.webdev.iyaserver.com)

- On the first display_errors setting, click the slider to Enabled.

- Scroll to the bottom of the page and click Apply.

To the right I wrote out the steps for you to "turn on" error displays so you can see when php code you write has errors. To test that you have them turned on, put the following into a page directly off the server, save, and run it (echho is purposefully a typo of the echo command):

<?php echho ?>

Easiest php and html page workflow for students

We are not going to go deep into php, since other classes go in depth in server-side scripting and database, instead I will give you some sample code that you can adapt. Later, in the group projects, one or two members of your team will dive a little deeper

There are basically two parts to the sample php code. And note that there is a lot of unnecessary output (echos) into html comment blocks (which do not appear to the user). This is to give some extra debug info. But the code can be stripped down/optimized too.

php movies output sample page (http://iyawebdev.com/acad274/lecture_examples/sample_php_database_code.txt) The first section creates a connection to my dent_movies database, using a guest account dent_student:

<?php
// create connection to database
$host = "webdev.iyaserver.com";
$userid = "dent_student";
$userpw = "code4Studentuse";
$db = "dent_movies";

$mysql = new mysqli(
    $host,
    $userid,
    $userpw,
    $db);

if($mysql->connect_errno) {
    echo "db connection error : " . $mysql->connect_error;
    exit();
}

Then the sample code builds a sql SELECT statement, with WHERE filters and ORDER BY sort instructions, and submits it to the database and stores the response in a $results container. It also puts a copy of the final SQL SELECT statement into an html comment block in the webpage so you can see the final staement that was sent to the database:

// base query
$sql =      "SELECT * from view1 WHERE 1=1 ";

// ADD ON FILTER
$sql .= " AND genre = 'Horror' OR rating = 'R' AND (genre='Sci-Fi' OR genre LIKE 'Action%') ";

// ADD ON sort order
$sql .= " ORDER BY title";

// submit query to database, store returned data as $results
$results = $mysql->query($sql);

if(!$results) {
    echo "SQL error: ". $mysql->error . " running query 

" . $sql . "

";
    exit();
} else {
    // put sql into comment block of webpage
    echo "";
}

Finally the code outputs one sample row of the returned query ($resultts) into an html comment block, so you have a list of the fields in the query that you can use, then resets the $results for later looping and closes the php block (putting you back into normal html and css mode) so the actual webpage can start to be built:

// Code to output one sample row with list of columns
$sample = $results->fetch_assoc();
echo "<!-- Sample first row of data <br><pre>";
print_r($sample);
echo "</pre> -->";
$results->data_seek(0); // reset results

// close php block
?>

Note that above does NOT appear in the visual page. Is is embedded/hidden in the source code (right-click on page and View Page Source to find it).

Then, the sample page builds the normal html page tag structure. Find the location in the text and html where you want the number of records/movies to appear and add a tiny php "output" block in that location:

Returning <?= $results->num_rows ?> Movies

Next probably the most complicated part. You need to create a while loop, that will repeat some code for every row/record in the returned query, it jumps into php to start the loop, then closes the php block:

<?php 
// create output loop around rows of database results
while( $currentrow = $results->fetch_assoc() ) { // OPEN/active php loop
    // while in repeating loop, back into html mode
?>

Then within rows of html code to output the movies, where a movie data appears little php output blocks. In this sample it is with html table rows and cells, but in our simpler demo it will just be one line with a break tag:

<tr>
    <td><strong><?= $currentrow["title"] ?></strong></td>
    <td>Rated <?= $currentrow["rating"] ?></td>
    <td><em><?= $currentrow["genre"] ?></em></td>
    <td><?= $currentrow["label"] ?></td>
</tr>

And finally, at the end of the "loop", a tiny php block to close the loop before letting the page continue in normal html mode:

<?php
} // end php loop
?>

Build a page for database results

When creating a page that will have database output, one suggested workflow is:

- Build/mock-up the page in html, css and text

- Add a php block to the top of the page that created the connection to the database

- In the file, BEFORE any database query output (even the number of records), include the code that creates a database query (and stores the query in the php $result variable)

- (Optional) In the page (inside the body) where you want the number of "results" to appear (how many were returned from the search), place the tiny block of code that outputs the number (num_rows or number of rows returned).

- In the page (also inside the body), find the mock-up of the data output that has a sample of how each row of data should look (where the "results" should appear). Place a php $results output while loop right before the first mocked-up row of results, including the tiny php close block (just <?php } ?>) right after it.

- Inside that loop, Replace the placeholder text with $currentrow columns. For instance, Title, Rated R might be replaced with <?= $currentrow["title"] ?>, Rated <?= $currentrow[>"rating"] ?>

So let's start by building up a simple page that will list movies in one genre from a specific studio.

(NOTE: We need to save this file as .php on the server. We could try building it as an .html file on our computer to start, if we wanted to spend some time on a complex web design. But if so we will have to eventually get it to the server and convert it to a .php)

We will start with the normal html skeleton, include a h1/headine on the page, and add body and h1 entries in the stylesheet.

Ok, let's start with a simpler version of the movies demo and php code. Save  php movies demo  starter code (http://iyawebdev.com/acad274/lecture_examples/movies_start.txt) to a new file moviesdemo.php. To keep the demo short, let's create it directly off the server and edit it there. That also means you need to find the location off the server to open up in a browser (to test).

-->
In class I laid out what the page should look like, with flexboxes et al. We can start with this file Two movies start page (http://iyawebdev.com/acad274/lecture_examples/movie2demo.html). NOTE: You need to create a new page on the server with .php, such as movie2demo.php, then paste the content of  into it.  (http://iyawebdev.com/acad274/lecture_examples/movie2demo.txt)

  (http://iyawebdev.com/acad274/lecture_examples/movie2demo.txt)

 Then we will grab snippets of php from  (http://iyawebdev.com/acad274/lecture_examples/movie2demo.txt)php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt) and layer them into the page.

For the demo we will:

- Tweak the WHERE clause in the select statement to get a particular movie set.

- Check the source code of the page to see the SQL statement used and the one sample row of data

- Flow movie column information into the output loop

- Do some minor style tweaks like customizing strong and em

Having done that as a group, now time to have you tackle a similar task individually in an in-class lab exercise.

In-class lab exercise: Create a studio genres pictures page

-  Save the file movies_labexercise.html (http://iyawebdev.com/acad274/lecture_examples/movies_labexercise.html) as a php file either on your computer or directly on the server. Test that the php file runs/renders.

	- Open the file php_sample_code.txt (http://iyawebdev.com/acad274/lecture_examples/php_sample_code.txt). Add the php database block to the top of the lab exercise page. Run (to make sure no errors).

	- Edit the SELECT statement so that it matches ONE studio (label field) and ONE genre.

	- Edit the text of the page to reflect the studio and genre.

	- Add the php output loop block in the page, adapt it to match the sample output from the html page.

-->

Multiple queries in a page

So what if you want to have more than one query in a page, whether that is two tables or results or one or more of your queries is a list of stats? There are some basic guidelines for displaying more than one query in a page (note the Resource: php entry in Brightspace).

- You only set up the database connection once regardless of if you are going to do multiple queries in a page (one exception would be if you had queries from two different databases. So you can put the db connection code at the vry top of your file for later use.

- (The next part of your file is likely starting to build the page in html, css and text)

- Write a query and submit it to the database and store the results/response/dataset as $results. Then output the query information into the page (whether directly or in a loop). So this is the part you might have to do multiple times, i.e. if you have more than one SELECT statement, the database response to each obviously needs to be stored one by one in result containers, and outputted. Like if you wanted to display G-rated Comedies and then display movies with the word "dog" in them. For this the recommended approach for each query:

- At the location where you want to start outputting query data, paste in the code that builds the SELECT statement and saves the database results in $results

- Output any meta data like $results->num_rows into the page (not for stat /aggregate queries)

- EITHER

- If a stat query, possibly directly set $currentrow to $results->fetch_assoc(), then output the column data in various locations

- OR

- If a traditoonal query, set up a loop to output the rows of data.

To see the final version of this demo from Spring 2026 you can click on the text file movie2demoend.php.txt (http://iyawebdev.com/acad274/lecture_examples/movie2demoend.php.txt), and can test it by pasting it into a .php file on your server and opening it from the server or by viewing it through the demo server at movie2demoend.php (http://demos.webdev.iyaserver.com/acad274/movie2demoend.php).