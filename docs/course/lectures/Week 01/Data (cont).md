
Some review/recap...from last session:

Data literacy: "Governments or international organizations can use data to make evidence-based decisions. Civil society can rely on data to monitor government policies and programs, empowering individuals to hold their governments accountable and access services based on their needs and preferences. Finally, the private sector can create and use data to generate new business opportunities and boost shared prosperity.... Some of the non-technical data literacy skills include: Critical thinking... Communication ... Domain knowledge..." 

Data vs Information vs Knowledge: "Data is raw, unprocessed facts, numbers, and symbols without inherent meaning. Information is data that has been organized, structured, and given context, answering "what" questions and providing meaning. Knowledge is the understanding, interpretation, and application of information, incorporating experience and insights to solve problems and make decisions." 

Quick exercise:

	- What is data vs information?

	- Vs knowlege? Examples?

	- How/why is data visualization important?

-->

  Quick exercise: Data vs Information

What do the following sets of data mean to you / what information might they convey (with context)? Knowledge or predictive possibility?

- 1 3 5 7 9 11

- 1 3 5 7 11 13

- 95 97 92 89 88

- 4 8 15 16 23 42

[image https://iyawebdev.com/acad274/lecture_examples/sportsdata_ss1.png]

How about this (comma listed) line of data:

82,48,90,138,17,44,22:59,13,41,306,15.7,"1,841",4,457,466,49.5,2,0,0

At the very least there are some symbols that give us some clue as to some of the data types in the data, if not what they related to:

Even loaded into a spreadsheet, the full dataset may not seem that easy to unpack...

But what if I added a header row/LABELS to each piece of data, such as GamesPlayed, Goals, Assists, Points, TimeOnIce, PenaltyMinutes, etc?

Data visualization: one way to extract information

How do we get information (and by extension knowlege) from data? One way is to create data visualizations from data, converting the data into visual information, which can lead to knowledge.

John Snow in 1854 England

We will go deeper into data visualization in more depth later in the course, including more historical examples, but one of the seminar occurences of data visualization (and in fact a sub-set that we would call data journalism today) came out of troubleshooting a mid-1800s collera epidemic in England.

[image http://iyawebdev.com/acad274/lecture_examples/snow_table.png] In 1849, 53,000 people died from cholera in England and Wales, and 14,137 in London alone. A London physician John Snow was skeptical of the prevalent theory of the rise of cholera (airborn transmission of poison vapours from sewage). And he noticed a statistical trend of death rates between different water districts. This lead him to think the epidemic was related to water. But he needed more information to isolate the cause and prove his theory.

[image http://iyawebdev.com/acad274/lecture_examples/snow_map1.png] In 1854 a new outbreak started in a Soho / Broad Street area, where there were 600 cholera deaths in just a 10 day period. So Snow asked to take a list (from the General Registrar’s Office) of the deaths of cholera registered during the week ending 2nd September, and found 89 deaths from in one week within three specific sub-districts. He he mapped out the deaths using a dot map. Oh, and he also placed the location of water pumps on the map. Rollover the map to see the pumps highlighted as well as the causal relationship of one pump to the outbreak...

[image http://iyawebdev.com/acad274/lecture_examples/snow_pump.jpg] The map showed that most of the deaths were clustered around one water pump. When handle was removed from the one pump, the outbreak stopped.

[image http://iyawebdev.com/acad274/lecture_examples/snow_chlorination.jpg] He had identified a causal effect, proving his theory that it was transmitted through water. Snow's finding were validated by not just raw data but the information he extracted (and visualized), that led to knowledge that had a drastic improvement in public health. And in fact with the rise of chlorination in water 60 years later, you can see a drastic decline in water-born illnesses such as typhoid fever.

So being able to extra or project information from data can lead to significant insights and knowledge.

Group activity: Information from Data

In groups, students will research information from a specific sub-genre of data across sports, business and medicine. Each group will start collecting screenshots of data and information, insights, and visualizations, and discuss the data versus information, and what kind of knowledge that leads to. Further, groups will project how certain new kinds of information, often driven by data visualizations and even data simulations, might be able to lead to more or new knowledge in each area.

In this exercise/sprint you will collect and explore data and information from one of the following areas. At the end your team will present a brief summary (text and illustrations) that highlight knowledge (and action items) in one of the following area. Include any data visualizations you found that illlustrate insights particular effectively and/or clearly.

(Note: your group does NOT have to line up its number with the selections below, ok if different groups do the same topic):

   Sport analytics (player and team performance, strengths and weaknesses):

- Player statistics (pick one sport or team for a sub-set of player data) 

- Team statistics (any sport)

- League trends (any sport)

    Business information:

- Stock market trends

- Product data (sales, price, etc.)

- Consumer behavior

- Consumer satistfaction

- Employee behavior

Medicine:

- Drug trials

- Patient prognosis (outcomes)

- Patient vitals

- Treatment outcomes (especially with different types/approaches to treatment)

So being able to extract sports, business and health information empowers experts and consumers. In the next series of weeks we will explore building up skills in web publishing and interactive development, and back-end data structures, data entry, to aggregate information that we can publish to web pages. This will allow for user interactions with the data, which will lead to early-stage data simulations.

For your first major individual lab you will extend the research from group individually in the lab Information from Data. Although it will take you (on average) a couple of hours to complete, you will publish to a traditional doc format (google doc, slides, canva board, etc.).

One we have insights (textual and visual), the next step would be to publish it to a web server for dissemination. But first we need to set up our web space so we can push files to a web server for public dissemination. And your first step is access your web space on the server and upload files (for public distribution). Which leads to your other lab Set up web space, upload image. This will only take you a couple of minutes to complete.