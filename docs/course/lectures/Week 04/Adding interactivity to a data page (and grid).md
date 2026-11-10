
Save the starting pages:

- photogallery_start.html (http://iyawebdev.com/acad275/lecture_examples/photogallery/photogallery_start.html)

- hockey_jq_start2.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_start2.html)

- hockey_jq_start2a.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_start2a.html)

Embedding pop-ups near triggers

In a webpage, if you embed an object with the css property position:absolute inside of an object that is position:relative, the inner object will be laid out in relation to the "parent" object. So what does that mean?

So go into the code where the th that contains PIM is located (about line 152). (Note: all td objects have already been defined as "position:relative" in the stylesheet.) So inside the td for PIM, just after the PM (but importantly INSIDE the th, i.e. before it is closed with /th), create a new div that has a class of "definition" and contains the content "Penalty Minutes":

		<th>PIM
			<div class="definition">Penalty Minutes</div>
		</th>

Ok, so this creates a div with a class of "definition" that is inside of the th for PM (which it is defining). This means the inner div is a "child" (inner object) of the table header it is defining.

Note that there is a corresponing class .definition in our stylesheet (style block) that says that all objects of class "definition" are position:absolute, have steel blue backgrounds, white text, and are located with an offset of top: 30px (location shifted DOWN 30 pixels from their parent object). Update the .defintion class.

First, let's go to our jQuery block and "hide" all ".definition" objects (about line 1104).Then let's add some scripting to our jQuery block so that when any th object is "clicked" it's children (inner objects) are faded in. Add the below to the top of our jQuery block (about line 1104):

$(".definition").hide() 

		$("th").on("click", function(){
			$(this).children().fadeIn();
		})
		$("th").on("mouseout", function(){
			$(this).children().fadeOut();
		})

Ok, so when you click on a th any inner object (children) are faded in, then when you leave (mouseout) that th all inner objects (children) are (re)hidden.

So this let's us embed/tie hidden definitions or tips to any object in the page (in our case that are th). If there is no inner object (like all th except the PIM one), it just ignores it.

If you want to shift the "location" of the pop-up box, edit the ".definition" entry in the stylesheet. For instance, try changing top:30px to left:60px.

Review of basic jQuery concepts:

- Load the jQuery library into a page, then set up a script block and a starter "document ready" statement:
<script src="https://code.jquery.com/jquery.js"></script>
<script>
   $(document).ready(function(){

   });
 </script>

- In most jQuery statements, you first need to “find” an object/s before you can manipulate it/them. The easiest way to "locate" objects in jQuery is to use css selectors to reference/find them. So $("#header") would target an object with an ID of header, and $(".headline") would target ALL objects of class headline.

- After "finding" an object, you can then use jQuery commands ON that object such as adding css classes, manually setting style properties and html attributes of objects, and performing animations. The example code below would hide all objects of class "definition" and fade in object/s of class "animation" over 2 seconds:
$(".definition").hide();
$("#animation").fadeIn(2000);  

- Instead of executing command/s immediately (on page load), you can also store code within an unnamed function that is "bound" to the object through the on command and an event trigger. I.e. when a certain (user) event occurs (someone clicks on the object, mousesover it, etc.), then the sub-routine/code is executed.  

- When manipulating objects inside an on command, you can use the this object to target or manipulate the specific object upon which that action was taken/triggered. The following statement would bind a mouseover event to all tr (table row) objects, and on a particular triggered interaction would target all of the children() (every td/cell) inside the rowto add the class highlight to that anchor. And then the second bind would remove that class from all of the children() of the tr when the user's mouse left it:
$("tr").on("mouseover",function(){
	$(this).addClass("highlight");
});
$("tr").on("mouseout",function(){
	$(this).removeClass("highlight");
}); 

Event handlers in jQuery:

"Events" are the different types of user interactions that we "bind" to objects such as mouseover, mouseout, click, etc. Although you may also run into some "shortcut" events and syntax.

The main events we will use are mouseover, mouseout, click, dblclick, blur, focus, and change.

The full list of supported events can be found on the jQuery Events list at http://api.jquery.com/category/events/ (http://api.jquery.com/category/events/).

Additional/special selectors in jQuery -- and "chaining":

Besides using css selectors to find objects, we can also add or "chain" additional commands on the object to move to OTHER objects in the page. Some examples of other selector commands are .next() (next object at the same level), .prev(), .parent() (the surrounding object), and .children() (all of the inner objects).

Animations/Effects:

jQuery has a set of stock effects that are easy to use such as fadeIn(), fadeOut(), and fadeToggle(), hide() and show(), and slideDown(), slideUp() and slideToggle(). And, as mentioned above, you can "chain" the animations into a sequence.

There are also some toggle commands that alternate, so fadeToggle() fades in an object that is hidden OR fades out an object that is visible. slideToggle() alternates slideUp() and slideDown(), and toggle() alternates hide() and show() (instant, no animation).

And, as also noted above, there is a delay() command that allows one to script in pauses between animations.

-->
There is also an effect called animate() that lets you set up manual animations of individual properties of items. But its implementation is more complex and something you can read up on if you are interested. We will come back to animate() and mapping values later.

A full list of "effects" can be found on the jQuery Effects page at http://api.jquery.com/category/effects/ (http://api.jquery.com/category/effects/)

Reading or writing content of a div through html() and/or text()

The html() and text() commands can read/load the html or pure text content of a container. They can also change/set/overwrite new content for a block element (usually a div).

- html():

- The html() command reads or writes the html CONTENTS of an object. This is usually used with span and div objects to write new (text) content into them, but can also be used to load/read the current content of an element.

- For example $("div#caption").html("This is a picture of a dog") would set the contents of a div IDed as caption to the text "This is a picture of a dog". Whereas the string $("div#caption").html() would only read (not change) the content of #caption. Note you CAN include html tags inside of the html() function... so the previous statement could also be:
$("div#caption").html("This is a <strong>picture</strong> of a dog")

- text()

: The text() command operates the same, being able to read or write the content of an element, but it ignores html tags. So the html() of a div containing "<strong>patrick</strong> dent" would be "<strong>patrick</strong> dent", whereas the text() of the same object would be "patrickdent".

To see this in action, let's jump back into the mid-point of the hockey stats page. But first also a quick primer on building a temporary variable string...

jQuery demo -- interactive photo gallery:

Let's dive into a demo that will use the new html() command, and review some of what we have learned. The only new concept in this demo is the use of an effect called fadeTo -- that lets you set the opacity of an object. The fadeTo has two parameters -- the length of the animation, and the end opacity. so fadeTo(1000,0.5) would fade the element to 50% opacity over one second... fadeTo(0,1.0) would instantly set the opacity to 100% (over 0ms = instantly).

First off, load up the start file photogallery_start.html (http://iyawebdev.com/acad275/lecture_examples/photogallery/photogallery_start.html). Note the page has the images hard-coded in the html.

Now perform the following steps inside the document ready jQuery script area provided:

- On start use fadeTo to set the opacity of all #thumb objects to 0.5 opacity over 0 seconds.

- Bind to all .thumb objects a mouseover event that instantly sets the opacity of just THAT objct to 1.0 (usng fadeTo).

- Bind to all .thumb objects a mouseout event that instantly sets the opacity of THAT object (back) to 0.5.. you could also just reset the opacity of all #thumb objects to 0.5

- Bind to the #thumb2 object the following:

- Hide #mainphoto

- Set the .attr "src" of #mainphoto to "http://iyawebdev.com/acad275/lecture_examples/photogallery/child.jpg"

- fadeIn #mainphoto

- Set the .html of the #caption object (a div) to text or html that is a caption for that photo -- such as "<strong>Stephen Child</strong>, <em>Lecturer</em>"

At this point you should have a page that when it loads shows all thumbnails at 50% opacity, when you mouse over a thumb it changes to 100% opacity, and when you mouse out goes back to 50%. And when you click on the second thumb it hides the main photo, sets it to that image, then fades the main photo back in... and changes the caption. To see the page at this step you can load photos2html (http://iyawebdev.com/acad275/lecture_examples/photogallery/photos2.html)

So now we could add similar bind blocks to thumbs 1, 3, 4 and 5, changing their respective src and captions to the corresponding URLs and captions. BUT, part of the advantage of jQuery is its ability to streamline interactive scripting for a set of objects. Note that the URL (image src) of the thumbnail IS the image we want to set the large image to, AND that those thumbnail IMG tags have a hidden attribute named "caption":

<img 
	src="http://iyawebdev.com/acad275/lecture_examples/photogallery/stevechild.jpg" class="thumb" id="thumb1"
  	caption="Steve Child, Associate Professor, Design" 
/>

So instead of setting the src of the big image to a static string, we can actually the the src of the thumbnail and directly set the large image's src to that. I'll do this in two steps, with the following highlights:

- Use "this" to target the thumbnail trigered

- Read the src of the thumbnail, store it in a variable, then set the src of the large image to that value

- Similarly, load the "caption" attribute from the triggered thumbnail (this), set that to a variable, then use that data as the new caption attr of the #caption div.

	$(".thumb").on("click", function(){
		$("#mainphoto").fadeTo(0, 0);
		newcaption = $(this).attr("caption");
		$("#caption").html(newcaption);
        newsrc = $(this).attr("src");
		$("#mainphoto").attr("src",newsrc).fadeTo(500, 1);
	});

And because that code is bound to all thumbnails, it now runs the entire gallery!

You can see this final version (and look at its jQuery code) photos2b.html (https://iyawebdev.com/acad275/lecture_examples/photogallery/photos2b.html)

Load up hockey_jq_start2.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_start2.html).

So we are revisiting a version of the hockey stats page. We will start by going through the // commends in the jQuery code to add some ux features.

Adding in variables

Although we are not going deep into Javascript like other courses such as ACAD-275, one useful concept is the idea of storing information in a variable, and even building a custom message out of variables and strings of text.

So let's bind a click behavior to the first cell in each table row:

	$("tr td:nth-child(1)").on("click", function(){
		// save the  text of the current cell and place into a variable named "message"
		// then put the message into the contents of the #messagebox div.
		message = $(this).text();
		$("#messagebox").text(message);
	}

Ok, now let's use next(). to get to other cells in that row, and "build" a message consisting of alternating cell content and literal text:

		$("tr td:nth-child(1)").on("click", function(){
			// Note += will add more content to the variable
			message  = $(this).text();
			message += " has scored "; 
			message += $(this).next().next().next().text();
			message += " goals in ";
			message += $(this).next().next().text();
			message += " games.";
			$("#messagebox").html(message);			
		})

A variable is a "data" container in memory, that can hold information ranging from text to numbers to objects to routines/functions.

-->
Notice that the variable message is NOT in quotes ... if it were in quotes then it would be treated literally as the string/text m-e-s-s-a-g-e.

Intermediate additon: What if we wanted to actually add the goals per game to the message? We could use a javascript command that converts strings to numbers, then divide the goals by games played. That will give us a sometimes unwieldy fragment, but we will skip then rounding it to two digits. See below:

number = parseFloat($(this).next().next().next().text()) / parseFloat($(this).next().next().text());
message += " That is an average of " + number + " goals scored per game";

Making set text trigger events

Ok finally, let's set up some custom "triggers" in the page that are determined by passages of text with unique IDs around them.

Look at the paragraph above the "messagebox". It contains some narrative text pointing out some facts in the information table. To make sure easier I have assigned some custom IDs to certain cells. Notice that in an early row of the table, certain cells have been given a kutcherov class, and my custom phrase in the paragraph has an ID of kutcherov. So we can script that when someone clicks on #kutcherov, all .kutcherov cells get the highlight2 class.

$("#kutcherov").on("click", function(){
			$(".kutcherov").addClass("highlight2")
		})

Similarly, we can trigger highlight2 on all .panarin objects when #panarin is clicked>

$("#panarin").on("click", function(){
			$(".panarin").addClass("highlight2")
})

And finally if someone clicks on #reset, we can remove highlight2 from all .trigger objects.

$("#reset").on("click", function(){
			$(".trigger").removeClass("highlight2");
})

To see a version of the hockey page with most of these routines implemented, you can view hockey_jq_end2.html (http://iyawebdev.com/acad274/lecture_examples/hockey_jq_end2.html)