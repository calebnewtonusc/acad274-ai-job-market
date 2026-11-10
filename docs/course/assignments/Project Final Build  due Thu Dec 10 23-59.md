Project Final Build  due Thu Dec 10 23:59

Data site final build (and self-evaluation)
The final website contains all of the information and arguments for your core data premise. This includes an introduction to the topic (and your assertions), separate pages exploring each of your core premises, supplemental resources on the general area, and of course various data visualizations and data grids. In addition, you will submit a summmary doc of the q/a sessions and action items that came out of those that you addressed. and an analysis/critique of your data argument.
Note that your final pages do NOT have to have live data calls to the database (to your php pages), BUT:

those pages must exist, and you will include links to them in your submission summary
the data (from the db queries) must exist in the pages as json. i.e. you can copy the json output of the php pages and paste them into a variable or you can have live calls to php, but your pages must operate from one or the other
your decision on above will likely be driven by the performance of the pages/site. if the db queries take a little to run, and slow down the load time of pages, it would be best to copy the json output of queries and paste them into a variable in the page.
since your pages are running off the json data (whether as a live ajax call or from a pasted version in the code), there should not be a significant difference

Final site requirements:

Final Site on iyaserver: Site and URL you submit must be live on one of your iyaserver spaces*. Summary Deliverable:URL submitted (and all of the site pages) is to an iyaserver location. *Alternate submission to iyaserver: If your site is not running off the iyaserver, you will need to submit additional documentation (see below). If you are running React with php-driven json on the back-end, it should run fine on the server (i.e. if it is React front-end only).
Site design: It is expected that your site has a consistent design across the pages, and clear paths (through navigation and narrative).
User Testing (final phase)-- UPDATED: At a minimum you should explain what takeaways/changes from previous builds you implemented/changed in your final build. Even better would be if you put the final version in from of people for more feedback, but if your team is consumed with design and development you can skip a final user testing phase. BUT, your summary doc must include a list of changes you made based on (previous) user testing.Summary Deliverable: Summary doc of the action items that you implemented from user testing.
Site design: It is expected that your site has a consistent design across the pages, and clear paths (through navigation and narrative).
Citations: Obviously your site is based on external data you have imported into a database, and likely is also based on studies, articles, etc. Make sure these are clearly cited where appropriate. These offer good opportinities to have a clickable notation, with the citation hidden then revealed if someone clicks on it (to not clog up the page flow normally).
Core data assertions: From the homepage to particular pages, there should be a minimum of three core assertions/conclusions you are presenting in the site. These could be different cross-sections/outputs of your data, different data results and statistics, etc.Summary Deliverables: Write up a summary of your core (minimum of three) conclusions, with URLs and explanations for each. They could be interrelated or completely different results from the underlying data.
Interactive Narrative: There should be clear points at which you lead the user through your conclusions. These can include charts and data grids with highlights. These should be driven through user interactions with interactive narratives. While the narratives are driven by user interactions (mouseover, click) what they are supposed to do at each step should be clear (bouncing graphics, highlighted instructions, etc.). These can also be fully scripted (no interactions) with timings, delays and animations.Summary Deliverables: Write up summaries of each of your interactive narratives, explaining how users interact/what they do (when mouse over X, when click on Y) and what occurs when they do so. Include URLs of the pages that feature each.
Interactive data visualizations: Besides inherently being good/persuasive visual assets of your assertions/conclusions, they should be moderately interactive (not just flat charts or maps). As examples these could be adjustment sliders (of values) to let user explore/try different options, giving the user an option to enter new data and see how that charts against your data, etc.Summary Deliverables: Write up summaries of each interactive visualization, and explain user interactions. narratives, explaining how users interact/what they do (when mouse over X, when click on Y) and what occurs when they do so. Include URLs of the pages that feature each.
Resources: Your site should include external resources. These can be supporting your argument, but it can also be useful to include opposing viewpoints (or conclusions) so that you can argue your point. But overall there should be resources with names and links (and descriptions), that your users can use to learn more about and/or further research the topic.
Core database queries: Your views and SELECTsSummary Deliverables: Finally, include a section of your summary document that states the database name and the core views you used, and a simple narrative/explanation of how you used the imported/acquired data (combined queries between tables A and B for X results/stats).
Critical analysis of your conclusions: Summary Deliverables: A summary of the core site concept (interrelated with your conclusions/assertions).

Note that many of the above require documentation (specific passages in your summary document). Your assignment submission (in Brightspace) you must include a link to a summary document that lists out various pages/urls where you fulfilled requirements. This will include things like a link to your user research doc and urls of your php database/data output pages, summary write ups and URLs for requirements, etc. You will also of course also fill out an individual peer (and self) evaluation survey. Elements of summary document:

Link to final site
User testing implementation notes
Core site premise and assertions
Narrative explanation and link
Interactive visualization summary and link
Core back-end database name (see below is not in iyaserver), screenshot of database schema (just takes a minute or in phpmyadmin), brief narrative explanation of how you used the data collections (cross-referenced X and Y data through view Z, etc).
Critical analysis of your premise, assertions and conclusions



 
Alternate hostingIf you choose to deploy your final site on a platform/server other than the iyaserver, or if the back-end is otherwise hosted elsewhere (firebase, node, etc), then you ALSO need to submit an additional doc tht includes:

Breakdown of the stack you used
Visual disgram/schema of your data structures
Explanation/walkthrough of your major routines. You can submit this as marked up/notated code or a video walkthrough (can just record through zoom with screenshare) explaining how nd what the major routines operate
archive/zip file of entire site, located on iyaserver, with a link


Some grading considerations for you to be aware of (and that you can address in your final q/a and evaluation of your site):

design: is there a clear design/color scheme/look and feel to the site, and is it consistent?
efficacy of argument: you can be wrong, and your proof may not be convincing, but did you do your due diligence in making your argument with supoprting documentation and visuals?
page loads: how long is a long query/page load? i.e. should that page be live or have dataset offloaded to local json code/paste? NOTE: if you offload data froma live call to a json pasted into a page, in your page code in a comment document the original SQL clause that created it
data grids: when or what sub-data in a grid is needed/more effective? it would rarely make sense to publish hundreds of rows of data. in many instances outputting data tables is important, but you should be selective and strategic.
