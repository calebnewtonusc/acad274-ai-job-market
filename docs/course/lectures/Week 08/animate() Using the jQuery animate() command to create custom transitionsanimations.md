
Save the starter files:

- jquery_presentation1_start.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation1_start.html)

- jquery_presentation2_start.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation2_start.html)

Before we give into jQuery animations, let's go through some highlights of your custom health charts:

- layered images and backgrounds (https://junzhuch.webdev.iyaserver.com/acad274/new.php)

- clean dashboard, good use of space and large text (https://beley.webdev.iyaserver.com/healthchart/healthchart.php?medication=Ibuprofen)

- distinct visual style (https://alpham.webdev.iyaserver.com/acad274/07b/ai/healthchart.php)

- photo background, element integration (https://asiy.webdev.iyaserver.com/acad274/custom%20health%20chart/customhealthchart.php?medication=Ibuprofen)

- sketch/drawing approach, with data relatively seamlessly layer in (https://ajbrenna.webdev.iyaserver.com/acad274/Health%20Webpages/healthdashboard.php)

- badge mock-up nice alternative approach (https://jcqueen.webdev.iyaserver.com/healthcondition.php)

Creating web-based narraties (intro animations, presentations) with jQuery and animate()

The goal of where we are moving toward is to be able to present interactive data conclusions and (early stage/primative) data simulations. We previously used jQuery to have some limited "on click" user interactions. Today we will explore how to create planned/scripted sequences of (i.e. pre-planned narraatives through) information to the user. These techniques would be traditionally considered animations, but when what we are "animating" are divs of information this is probably closer to what would be considered creating web-based presentations with interactive elements.

Why hand-script these experiences then, when there are plentiful presentation platforms and tools, many of which have web-medium formats? Because much of the content will be both driven from back-end data and have front-end user interactions with the information that would not be possible with traditional presentations (in any medium).

The "animation" metaphor is also apt insofar as we are planning out user experiences, and in many cases we may actually storyboard out the pre-planned sequences of presenting information, setting up user interaction points, etc.

Chaining basic transition sequences, including delays

While we will explore more in-depth control, one sample form of sequencing information would be to have multiple divs, each with one set of content, and animate their transitions according to a timeline... basically a presentation.

Open up jquery_presentation1_start.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation1_start.html). Notice it has five .page divs, each of which has content, and all of which are overlapping in th layout, but each of which have unique IDs (i.e. every div has a shared class, for their core design instructions, but unique ids so they can be individually targeted by scripting). So the idea is that when the page loads we will keep the first pane of content (#page1) visible, and hide the rest (or in effect hide() all the .page divs then show() #page1). Notice also that each div has at the bottom a "next" link with a unique ID (so jQuery can detect when that particular button, such as bottom of page1, is clicked). So imagine the user only seeing page1, when they are done reading they click Continue, which fades out page and reveals page 2, continue to page 3, etc.

As always, our jQuery starts in the "ready" block after being loaded. So our first step is to "hide" all of the subsequent steps in the "sequence". To make it a little easier, all "pages" have a common the class of .page in addition to unique IDs. So we start by hiding all .page divs then showing #page1 (which will also let us read page1 without all of the other pages on top):

	$(".page").hide(); // hide all .page divs
	$("#page1").show; // reveal the first div

At the bottom of each pane/page is a Continue button with a unique ID such as #page1next. So let's script the #page1next button when clicked to fade out #page1 and fade in #page2 after a brief delay. Note we can use a delay() command to insert a pause between the two animated jQuery actions (note: delay() only works synchonously with animations):

			$("#page1next").on("click", function(){
				$(""#page1").fadeOut(2000);
				$("#page2").delay(1000).fadeIn(2000);
			})

So following along in that planned order, we set up the other sequences, and we can vary the transition types and the durations and delays:

			$("#page2next").on("click", function(){
				$("#page2").slideUp(2000);
				$("#page3").delay(1000).slideDown(2000);
			})

			$("#page3next").on("click", function(){
				$("#page3").fadeOut(1000);
				$("#page4").delay(500).slideDown(2000);
			})
			$("#page4next").on("click", function(){
				$("#page4").slideUp(1000);
				$("#page5").delay(500).fadeIn(1000);
			})

Now you can "click through" each page to the next.

You can see this completed version at jquery_presentation1.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation1.html).

But what if you wanted it as a pre-scripted sequence/presentation with no user interactions? If we storyboarded out the timings, let's say 3 seconds per page. So replace (delete):

		$("#page1next").on("click", function(){
				$(""#page1").fadeOut(2000);
				$("#page2").delay(1000).fadeIn(2000);
			})
			$("#page2next").on("click", function(){
				$("#page2").slideUp(2000);
				$("#page3").delay(1000).slideDown(2000);
			})

			$("#page3next").on("click", function(){
				$("#page3").fadeOut(1000);
				$("#page4").delay(500).slideDown(2000);
			})
			$("#page4next").on("click", function(){
				$("#page4").slideUp(1000);
				$("#page5").delay(500).fadeIn(1000);
			})

with

			$("#page1").delay(3000).fadeOut(1000); // at about 3s
			$("#page2").delay(4000).fadeIn(1000).delay(3000).slideUp(1000); // at about 7s
			$("#page3").delay(8000).slideDown(2000).delay(3000).fadeOut(1000); 
			$("#page4").delay(12000).slideDown(2000).delay(3000).slideUp(1000);
			$("#page5").delay(16000).fadeIn(1000);

Now when the page loads after a 3 second delay the first page fades out and the second page fades in, then about 3 seconds later the second page slides up and the third page slides down, etc.

You can see this automatically animated version at jquery_presentation1b.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation1b.html).

jQuery animate: animate ANY css property (plus embed other commands with callbacks)

The jQuery command animate() runs off an object (like fadein, slidedown, etc.). It acts kind of like the css transition property, animating between two css properties. So this could animate a div getting smaller or larger, text changing, opacity, and if it were a position:absolute element it can animate its location.

animate() { prop:value maps }Note that:

- the series of property:value, maps is enclosed in squiggly brackets

- both the property names and values are in quotes

- the values are assigned with colons

each pair is separated by a comma

- (not a semi-colon) but

the LAST entry does not have a comma

- (need to remember not to include/remove a comma on the last entry or you will trigger a Javacript error)

The format for animate is you include a map of css properties and values (in programming parlance key:values). The map is enclosed by squiggle brackets with commas between each entry. Below is an example that would rescale an object to 300px by 300px and its opacity to 1:

animate({
	"width":"300px",
	"height":"300px",
	"opacity":"1"
})

So if you look at the example below, it would first grow a #page2 div to 500 x 500 and full opacity, then shrink it to 100 x 100 and 50% opacity:

Line breaks in jQueryArbitrarily putting line breaks in jQuery code and lead to errors. One of the rules/time it is accepted is when you have a period off an object or previous command, like to the right

$("#page2").
	animate({
		"width":"500px","height":"500px","opacity":"1"
	}).
	animate({
		"width:100px","height:100px","opacity":"0.5"
	});

Now we only put one parameter into the animate() command (the prop:value map), but it actually can have additional properties. You can put the timing of the animation after the map before you close the animate command. So revisiting (replacing) the previous #page2 activation code (triggered off the #page2next button) the below version would grow it over 2.5 seconds and shrink it over 1 second:

$("#page2").
	animate({
		"width":"500px","height":"500px","opacity":"1"
	},2500).
	animate({
		"width":"100px","height":"100px","opacity":"0.5"
	},1000);

You can also add a "callback function" as a third parameter, after the timing, which lets you execute some custom code when the animation is complete. This is important because while the delay() commnd syncs with/affects animations (puts them into a queue along with fadeIn and slideDown), any other types of commands lke text() and html() (to change the content of a box) do NOT wait for the animation to complete.

Presentation demo part 2

Ok, let's revisit the animation presentation. We will first remove the commands inside each on click so we can rebuild the transitions with animate(). You can either edit out those or jump to jquery_presentation2_start.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation2_start.html)

Ok, so let's go and edit the first on click block. We want to send #page1 away and bring in #page2. So first the code below will "shrink" #page1 down to 0 x 0, while also fading it out, over 2 seconds:

			 $("#page1next").on("click", function(){

				$("#page1").
							animate({
								"width":"0px", "height":"0px", "opacity":"0"
							},2000);	

			 });

Ok, so how about bringing #page2 in? The code below shrinks the (already hidden) #page2 div down to 0 x 0 and opacity 0 over 0 seconds (instantly), then animates it up to the normal size and full opacity:

		   $("#page1next").on("click", function(){
			   $("#page1").
			   		animate({
				   		"width":"0px", "height":"0px", "opacity":"0"
			   		},2000);

			   $("#page2").show().
			   		animate({
				   		"width":"0px", "height":"0px", "opacity":"0"
			   		},0).delay(2000).
			   		animate({
				   		"width":"270px", "height":"500px", "opacity":"1"
			   		},2000);
		   })

Note the strange peculiarity of needing to do show() on the object first. Why? Because originally at the top of our jQuery we did a hide() on all .page object, including #page2, and so even if we set an opacity of 1 to it the div is still "hidden" (display:none). So any time you want to manually animate an object that jQuery has run hide() on you need to show() it back to visibility (unless you are doing a fadeIn or slideDown, which assumes it is starting from hidden).

Ok, then for #page2 to #page3 instead of shrinking and growing content we will throw the divs off screen and fade them out/in: to about line 120, inside the

			$("#page2next").on("click", function(){
			   $("#page2").
			   		animate({
				   		"left":"-400px", "top":"-600px", "opacity":"0"
			   		},2000); // animate off screen

			   $("#page3").show().
			   		animate({
				   		"left":"-400px", "top":"-600px", "opacity":"0"
			   		},0).delay(2000).
			   		animate({
				   		"left":"25px", "top":"80px", "opacity":"1"
			   		},2000); // animate from off screen
			})

Then for #page3 to #page4 we will have the text (size) blow up and fade out, and the reverse for the new panel:

			$("#page3next").on("click", function(){
			   $("#page3").
			   		animate({
				   		"font-size":"72px", "opacity":"0"
			   		},2000);

			   $("#page4").show().
			   		animate({
				   		"font-size":"72px",  "opacity":"0"
			   		},0).delay(2000).
			   		animate({
				   		"font-size":"14px",  "opacity":"1"
			   		},2000);
			})

And the finally, for #page4 to #page5 let's slide #page4 and #page5 horizontally off and on screen, but also take the continue button from #page5 and push it off screen and have it slide into place vertically:

			$("#page4next").on("click", function(){
			   $("#page4").
			   		animate({
				   		"left":"-400px", "opacity":"0"
			   		},2000); // not altering its vertical top property

			   $("#page5").show().
			   		animate({
				   		"left":"-400px",  "opacity":"0"
			   		},0).delay(2000).
			   		animate({
				   		"left":"25px",  "opacity":"1"
			   		},2000);
				$("#page5 .bottombutton").
					animate({
						"bottom":"900px"
				},0).delay(2000).
					animate({
						"bottom": "15px"
				},2000)
			})

You can see the final version of this animate() implementation atjquery_presentation2.html (https://iyawebdev.com/acad274/lecture_examples/jquery_presentation2.html)