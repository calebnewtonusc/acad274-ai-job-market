
If time permits, useful to browse some of your student peer output from the recent data tables webpages:

- Movie data analysis (https://dhlai.webdev.iyaserver.com/acad274/moviedata.html): bold color, data table striping makes very easy to read

- Film production budget (https://kdmoore.webdev.iyaserver.com/acad274/Table%20webpage%20assignment/Data%20table%20assignment%20webpage.html): clean b/w, tight layout

- Ben Shelton's Serving (https://mfcarlin.webdev.iyaserver.com/acad274/03a_databases.html#data): effective large phot and intro, use of headshots really adds to player result stats

- Are breakfast cereals healthy? (https://gomutput.webdev.iyaserver.com/acad274/Week%203/Bua%203a%20Breakfast%20Cereal.html): well laid out, very easy readability on page

- 20 largest meterites (https://cpwu.webdev.iyaserver.com/acad274/03a%20Assignment/AI%20Version_03a_Assignment.html): used ai to condense, reduce and summarize data from thousands of records

- USC women's basketball (https://ajbrenna.webdev.iyaserver.com/acad274/USC%20Womens%20Basketball.html): nice inclusion of html tooltips on column acronyms, fun cursor basketball graphic rollover on photos

Note: Reminder about disclosing if you use ai for any of your code. Many of you (appropriately) did and appropriately disclosed such in this assignment, such as to get a particular css effect or to add interactivity or an animation.  

Before start of lecture SAVE to your computer hockey_jq_start.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_start.html)

"jQuery for Designers" -- a cursory overview of jQuery from a non-programming level

To borrow a phrase from an intro page on the docs.jquery.com site:

	Mythical widget

		Let's pretend for a minute that there's this mythical widget thingy that we can put into our markup. 
		It will do all sorts of clever things in a very easy manner without our having to be a programming wiz, 
		and it won't damage our nice clean markup. 

jQuery is a pre-written library of Javascript routines and syntactical structure that allows for rapid scripting of transformative, interactive elements to a web page without substantive scripting or programming knowledge... although we will see later that a basic knowledge of the underlying Javascript WILL empower and expand the reach and scope of jQuery.

So... before we begin... what are the scope and capabilities of jQuery?

- Isolate and manipulate HTML elements/objects through CSS-like selectors (and later XPath)

- Edit, change and add html AND css properties of objects

- Transform object changes over time as "effects" and "animations"

- Delay and tie execution of above to sync with "events" rather than running immediately on page load

jQuery acts as a good basic, non-scripting approach introduction to Javascript. We will explore jQ as a fundamental tool for interactivity without plumbing (or learning) most of the underlying scripting or programming theory behind it. Then we will progress to learning the underlying Javascript language to be able to create more involved interactions with programmatic and logic constructs.

Browser compatibility

Chrome, Firefox, Safari, Edge
What do they have in common? Are their html, css, js parses the SAME engine? Differences in engines, compatibilty?

jQuery -- the fundamental basics: 

To start, ANY page that you want to run jQuery in must have two basic components:

- A script tag with a src attribute to "load" into the page the underlying jQuery code / library:
		<script src="jquery.js"></script> <!-- local copy (saved to your computer/server) -->
				OR 
			<script src="https://iyawebdev.com/jquery.js"></script> <!-- copy of older jquery release stored on webdev -->
				OR 
			<script src="https://code.jquery.com/jquery.js"></script> <!-- most recent stable release from jquery site -->

Side note: There are generally two versions of jquery. There is the minimalized version, which is compressed with no spaces (a wall of code). And there is the longer version that is more verbose, with comments and formatted and spaced out. To see examples of the two versions (saved on webdev) click on jqm.js (http://iyawebdev.com/jqm.js) (often saved as jquery-min.js) which is 92k in size and on jquery.js (http://iyawebdev.com/jquery.js) which is 256k. 

You can get your own, fresh copies of the jQuery files (to save to your aludra space) from the jQuery code site code.jquery.com (http://code.jquery.com). You can get docs from the jQuery wiki site at docs.jquery.com (http://docs.jquery.com). And the main jQuery site jquery.com (http://jquery.com) has full language information, downloads, links to plug-ins, and more.

Note: The BEST practice is to save a copy of the current jQuery library to your local server and have pages load it locally (like in the first example). You can save your own copy in your aludra space and use a local reference to load the library.

- Second, a separate script block with jQuery code to "wait" until the page is loaded, and then inside that code any jQ instructions for the page:
	<script>
			$(document).ready(function(){ 	// When the page is ready/loaded

				// the jQuery code to be run after page load     

		   });
		 </script>

Web object scripting steps/basics -- who, what, when?

- Find an object

- Do something with/to the object

- Question: Should that happen right away (on page load), or be delayed.. if the latter probably wait for a user trigger/interaction?

Ok, so let's open up a basic Hello World page that contains html and css that we can start adding in jQuery. Open the starter hockey_jq_start.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_start.html) page.

OK, so as noted above, in order to use jQuery in this page we first we must load the jQuery library and set up a ready block. Notice the below is ALREADY in the page (at the bottom before the end of the body):

Errors? To see JS errors (VERY helpful in jQ/JS) open up your browser's Javascript Console. In Chrome this is generally Command-Shift-J / Ctrl-Shift-J, in Safari you may need to Safari > Preferences > Advanced and Show Developer Menu, then select from there.

	<script src="http://iyawebdev.com/jquery.js"></script>
		<script>
			$(document).ready(function(){
				// write HERE  jQuery code to be run after page load     

			});
		 </script>

Re-run the page and notice that nothing is different. All we have done is loade and "set up" jQuery in the page. The line that starts with "// HERE ..." is a "comment" block which we can replace with "real" jQuery instructions.

jQuery object references: Most jQuery commands start with a reference to an object (after jQuery or $). The easiest method for selecting objects in jQ is to use CSS selectors. Just as you would target a style instruction through #div2 or .thumbnails or img, in jQuery you can target one or more objects using the CSS Selector syntax. So in the examples below, the first jQuery line starts by targeting the header html5 object in a page, the second one targets an object IDed as box1, and the third targets all objects with a class of "headline": 

jQuery('header')
jQuery('#box1')
$('.headline')
$(this)  

 Note: jQuery lines can start with jQuery OR the $ symbol.

So inside that block we can write some jQuery. A basic jQuery instruction consists of a reference to an object (using CSS selectors), a period, and then what action you want to perform on that object. I.e. OBJECT.ACTION; Now, the syntax looks much more complicated than that, but a straight jQ instruction can be that simple. Take a look at the jQuery line:

	 jQuery("#secondp").hide();

So what that instruction does is target the object with an ID of secondp and run the "hide" command on it... such that the second paragraph is hidden. This object targeting approach is central to all jQuery code. You "target" objects through CSS selectors.

Now, we are going to type lots of jQuery commands, and instead of having to start all of our statements with jQuery there is a shortcut we can use with $ instead of jQuery. So lets change the above statement to:

	 $("#secondp").hide();

Before we dive deeper into jQuery's capabilities, let's pause to ask "why jQuery"...

Why jQuery? -- compatibility

jQuery is a great language to use because it is very streamlined and simple. But beyond that, it boast incredible compatibility across most browsers and operating systems.

So in the example above, how did it "hide" the paragraph IDed as secondp? Does it set the css property of visibility to hidden? Does it set the opacity to 0? Does it change the display to none?

You don't know... and DON'T NEED to know.

The "magic" of jQuery is that the underlying library, written in Javascript, handles all of the behind-the-scenes details including COMPLETE cross-browser compatibility. So whereas with CSS3 we would have to worry about whether a particular browser might know certain CSS commands like transform or transition, similar functions if implemented through jQuery will work in every browser (well every browser that supports Javascript)!

When we move into mobile scripting this is going to become even more important. Mobile phones, operating systems and browsers change every day. jQuery handles the complexities of changing Javascript parsers and how to target objects and implement functionalty across ALL platforms and browsers so you don't have to.

Ok, so lets look at some of the common "actions" jQuery can perform on objects...

jQuery Effects and Manipulations -- a starter list of jQ "actions"

Below is a partial list of the core/main jQuery "actions":

addClass()
Add a CSS class to an object
append()
Add content to the end of an element
attr()
Retrieve or set the value of an attribute of an HTML object -- VERY powerful
css()
Retrieve or set the value of a CSS property of an element -- also very powerful and flexible
fadeIn()
Fade in an object
fadeOut()
Fade out an object
fadeToggle()
Alternate fading in or out an object
html()
Provide new content for a container (like a div)
hide()
Make an element disappear
next()
From that object, select the next (html) object on the page
prev()
From that object, select the previous (html) object on the page
prepend()
Add content to the front/beginning of an element
removeClass()
Remove a CSS class from an object
show()
Make an element appear
slideDown()
Reveal a (hidden) object
slideUp()
Animate out an object
slideToggle()
Alternate revealing and hiding an item
toggle()
Alternate hiding and showing an element
toggleClass()
Add or remove a class (alternating) to/from an object

Ok, so with some of that in mind, let's revisit the hockey info page we started working on above. First, try adding a second statement (to that jQuery block) of:

	 $("#logos").addClass("redbox");

Ok, so addClass let's us take an existing object and "add" a class to it, as if that object had originally had that class. The first statement targeted an item with an ID of logos. So to remind ourselves of the different, instead edit the above statement to target the list items with logo CLASSES as below:

	 $(".logo").addClass("redbox");

See the difference between setting the #logos div to redbox versus adding it to all the .logo objects inside the #logos box? Ok, change it back to adding the class to the ul.

Similarly, try adding an additional jQuery instuction that adds the class "bluestyle" to all paragraphs:

	$("p").addClass("bluestyle");

Maybe not the best aesthetic look. But what about if we only wanted that effect when the user moused over a paragraph -- i.e. to create an effect of "highlighting" a paragraph by changing it to that style when someone hovered on it?

jQuery Manipulations -- a starter list of jQ "actions"

One of the keys to interactive programing is DELAYED execution -- we often have activities we do not want to occur until a certain event (usually user interaction) occurs. So extending the example above, we want to set the class for a specific paragraph (#secondp) to "bluestyle" when a user "hovers" onto the paragraph (not just on page load). And then we will want to restore that paragraph to its normal/original state when you leave it (on mouseout).

To make this work, first we will set up an action to occur when a specific object is hovered.

In the page we are working on, delete the instruction that hides the secondp object. Then put in some blank lines in the jQuery area and then type in the following lines:

		$("#secondp").on("hover",function() {

			})	

Notice how in the example above we closed the function and on statement first (in the third line), THEN went back to fill in the event code? In HTML when creating a paragraph you might often write the /p before actually filling in the paragraph content, to make sure you did not forget to close it later. Similarly, when creating a "on + function" block it is usually a good practice to close up the block (with the squiggly bracket and parentheses) before fleshing out the routine.

The above overall syntax is probably a bit confusing... but that's the most complexity you will need to deal with for now with jQuery. It does get a bit confusing at times with all the nested routines. Using the tab/indentations can help to remind you how many routines deep you are at any one time.

Next, edit that code to add the following line inside the bound event: $("#secondp").addClass("bluestyle"); That should leave your overall script block looking like:

		$(document).ready(function(){

				$("#logos").addClass("redbox");

				$("#secondp").on("hover",function() {
					$("#secondp").addClass("bluestyle");
				})

		   });

Ok, now notice that when you "hover" on the paragraph it transforms into the green text with a yellow background. BUT, when you "leave" the object it does not "undo" the effect. So we will add a second routine that does a removeClass command as well:

		$("#secondp").on("mouseout",function() {
				$("#secondp").removeClass("bluestyle");
			})	

Ok, now one final thing before we move on. Let's set up an instruction that when you mouseover over any .logo object it adds the logolg class, and when you mouseout it removes that class...

		$(".logo").on("mouseover",function() {
				$(".logo").addClass("logolg);
			})	

			$(".logo").on("mouseout",function() {
				$(".logo").removeClass("logolg");
			})	

That approach worked fine for #secondp, which was a unique object. But the above command which triggers when you rollover any one .logo image adds the class (and increases the image size) to ALL logo images (even though you only hovered one).

Luckily we have a very convenient and powerful object named "this" that we can use when inside of a bound event that will only target the object on which the "event" occured. Update the above code to:

		$(".logo").on("mouseover",function() {
				$(this).addClass("logolg");
			})	

			$(".logo").on("mouseout",function() {
				$(this).removeClass("logolg");
			})	

Notice that when using the this object you do NOT put it in quotes because it is a literal object/concept in the language and not a CSS selector (like #secondp or li). Typically you "target" objects with css selectors in quotes such as "#secondp", but the this command is left without quotes because it is a programmatic concept (a scripting object).

Ok, so let's repeat something like above with adding/removing a css class to images that are mouseover and mouseout, then add one further concept with next()...

First, let's set up two simple on "mouseover" and on "mouseout" functions, that add and remove the class "larger" to images:

		$("img").on("mouseover", function(){
				$(this).addClass("logolg");	
			});
			$("img").on("mouseout", function(){
				$(this).removeClass("logolg");	

			});

			$("img").on("hover", function(){
				$(this).toggleClass("larger");	
			});

		Anytime you have two sets of mouseover and mouseout code that can be set up to execute the same set of code in both instances (like toggleClass), hover is a good substitute.

		-->
Ok, now let's not the image/object you are mouseover on, but instead the NEXT object (the next image) in the page. Set up code that says:

		$("img").on("mouseover", function(){
				$(this).next().toggleClass("logolg");	
			});
			$("img").on("mouseout", function(){
				$(this).next().toggleClass("logolg");	
			});

When you have an object targeted, next() moves to the next (html) object on the page. Similarly prev() will move BACK one object. In either case, you are now targeting not the original object but a subquent (or previous) one in the page. So notice that above it makes the NEXT image larger, not the one your mouse is hovering over.

What we are doing in the code above is calling "chaining"... putting multiple commands/actions on one object. For instance, below is a "chain" of animations that are executed one after another on the same object, and because it is not in a conditional (user behavior) block it will execute right away, i.e. on page load:

		$("#logos).slideUp(1000).delay(1000).slideDown(1000);

You can loook at a completed version of this demo at hockey_jq_end.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_end.html)