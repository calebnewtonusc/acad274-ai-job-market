
Putting it all together -- full stack data page with narrative animations

Save to your computer presentation_sample_start.html (https://iyawebdev.com/acad274/lecture_examples/presentation_sample_start.html)

As groups are working on their storyboards for an animated narrative component/page (most commonly a presentation on the project's data takeways or a tutorial on using a site feature), we will explore a page that has a data feed that is used both for a chart.js visualization and (the same feed) a table output. The page also has a number of assets (different visualizations, conclusions) that we would like to create a timed, sequenced (animated) presentation sequence.

So open up the start file presentation_sample_start.html (https://iyawebdev.com/acad274/lecture_examples/presentation_sample_start.html). Notice it has a filtered underlying query that is restricted to cars with a 30 or more electric range and is sorted by range.

In the page you can see a series of messages, a chart visualization and a table output grid of the core data, and prominently a series of five conclusions/messages.

Page object/dev breadown:

- Page has jQuery pre-loaded and a json feed of EV cars loaded.

- All of the messages have unique IDs (#m1, #m2, etc.) and a common .message class.

- The chart is inside a #chart div, generated from the json data

- The table is inside a #table div, generated from the json data

- There is a sample audio clip (car motor revving) #carrev that is inside a #sounds div.

- A "start" button IDed as #start and already has a javascript trigger that starts "sequence1" when clicked

- Sequence1 by default triggers Sequence2 after 2 seconds (2000ms), then s2 triggers s3 after 2 seconds, etc.

Ok, so what narrative do we want to write to tell our message/takeaways? By default, the entire page is visible including all of the messages, chart and table.

So we want to write a narrative that progressively tells a (data-driven) story. So in orde to build this we need to use jQuery to:

- First make sure jQuery is loaded into the page with a ready block. If the page already has a json feed code block likely this is already done.

- In the page start/ready block hide any elements you want to animate/reveal later

- Check your planning storyboard and see how many sequences/sections there are in your narrative, and how long each sequence is (in milleseconds) in terms of the setTimeout() delay before the next sequence is triggered.

- Build out one step (function) for each sequence. Each step will call the next, so they will chain together.

In the sample start file, notice I have four "sequence" functions. The first one is already scripted to fire off when someone clicks on the #start button, and each sequence triggers the next after 2 seconds (2000ms). Obviously you can adjust the timings.

So in our sample " start (https://iyawebdev.com/acad274/lecture_examples/presentation_sample_start.html)" code contains the following inside the jQuery ready block:

  function sequence1(){
	 // start of sequence
	 $("#m2").fadeOut().fadeIn();
	 setTimeout(sequence2, 2000); // start sequence2 after 2 sec 	  
  }	
  function sequence2(){
	 $("#m3").fadeOut().fadeIn();
	 setTimeout(sequence3, 2000);  	  
  }	
  function sequence3(){
	 $("#m4").fadeOut().fadeIn();
	 setTimeout(sequence4, 2000);	  
  }	
  function sequence4(){
	 $("#m5").fadeOut().fadeIn();
 	 // END	  	  
  }	

  $("#start").on("click", function(){
	  // when #start button is clicked run sequence1
	  sequence1();
  })	

So the first section defines the "sequences", where you manipulate objects to build your narrative. This can be animating text divs, charts, tables, and even media assets like audi and video.

The last lines of code are the trigger that starts the first sequence when you click on the #start button. As noted earlier each sequence is scripted to trigger the next in line after 2000ms.

So one should sit down and plan out (or even storyboard) the sequences through narrative goals and literal object changes/manipulations/animations.

Below is the core code in a version of the presentation sample demo:

 // set up, such as hide various elements	
  $("#m2").hide();
  $("#m3").hide();
  $("#m4").hide();
  $("#m5").hide();
  $("#sounds").hide();	
  $("#table").hide();
  $("#chart").hide();

  function sequence1(){
	 $("#m1").fadeOut(500);
	 $("#m2").delay(500).fadeIn(1000);
	 $("#carrev").trigger("play");
	  setTimeout(sequence2, 4000); // start sequence2 after 2 sec 	  
  }	
  function sequence2(){
	 $("#m2").fadeOut(500);
	 $("#m3").delay(500).fadeIn(2000);
	 	  setTimeout(sequence3, 4500); // start sequence2 after 2 sec 	  
  }	
  function sequence3(){
	 $("#m3").fadeOut(500);
	 $("#m4").delay(500).fadeIn(1000);
	 $("#chart").animate({left:-1200 },0).show().animate({left:0},1200); 
//	 $("#chart").delay(1000).slideDown(2000);
	 setTimeout(sequence4, 3500); // start sequence2 after 2 sec 	  
  }	
  function sequence4(){
	 $("#m4").fadeOut();
	 $("#m5").delay(500).fadeIn(1000);
	 $("#table").slideDown(4000);
 		 // END	  	  
  }	

We can see that first the script hides all sorts of elements on the page, including all of the messages after the first one, the chart, the table, and the audio clip.

Sequence1 fades out #m1 (the first message), fades in the second message (#m2), and triggers/plays the embedded #carrev audio clip. After 2 seconds from start it triggers sequence2.

Sequence2 fades out message 2 and fades in message 3. Then triggers sequence3.

Sequence3 fades out message 3, fades in message 4, takes the chart and places it offscreen (-1200 left) but makes it visible (offscreen), the animated it onto the page. Then triggers sequence4.

The final sequence4 fades out message 4, fades in message 5, and scrolls down/animates in the table. And the full set of steps are complete.

You view the code of and play around with this version of the sample presentation demo at presentation_sample.html (https://iyawebdev.com/acad274/lecture_examples/presentation_sample.html)