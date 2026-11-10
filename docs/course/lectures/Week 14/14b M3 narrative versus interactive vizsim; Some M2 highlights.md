
(M3 planning and Final) Scripted narrative versus interactive visualization/simulation

As a reminder there are two distinct elements for the final build: scripted/animated narratives and interactive visualizations/simualations.

To plan for the former, for Milestone 3 groups will submit storyboards of the scripted sequences. Most commonly these are either presentation(ish) overviews of the key takeaways, conclusions and/or arguments of your project. Or are scripted tutorials (how to use a key feature of the project). I'm also always open to alternative ways to fulfill this requirement. (But please note this is different/separate from the interactive visualization and/or simulation requirements.)

So for M3 you are submitting storyboards for these narratives, then for the Final Build you are implementing/developing this element.

Switching to the interactive visualiztion or simulation, for M3 you need to have visualizations that are hooked up to live data (from your json feeds). But they do not have to have original interactive features yet (until the Final Build). These are data-driven visualizations or simulations that have inherent user interactions. Note built-in chart/map filters and ux do not count toward this. I.e. if the chart library you are using has drop-down filters, or the map has zoom and click functionality, these do not count (as they are part of the default object. 

So going beyond flowing your data into chart/visualization/map libraries or code, you also need to be planning out and implementing (for M3) how to make it more interactive, to deliver custom experiences to different users. Some ideas for this could include:

- An option to save user data (through cookies/data storage)

- Letting users enter custom information and filtering or re-running the underlying data query to adjust

- Creating custom paths through the data that lead to different/branching outcomes based on user selections

- Other ideas?

Milestone 3 check-ins

To help with any confusion, and to offer some peer brainstorming, we will do brief check-ins with each group as to their current thoughts on these two requirements.

[274 G1] bloom, lynden, reem, Isabella, cate, isaac 

[274 G2] food carbon footprint nad nutrition, mark, itai, laura, ellie, amadeo 

[274 G3] maternity mortality, gladys, arely, aidan, sy, christian [27 G4] energy index, kaitlyn, preston, justin, rania, oliver 

[274 G5] gacha game revenue, lavinia, philip, connie, zain, jack 

[204 G6] the city that priced out, dezin, joanne, jackson, sophia, anjali 

[204 G7] scroll well, angie, sloan, mia, andrew 

[204 G8] heat-health risk index,eve, andy, ana, sean, aj 

[204 G9] waste wise, siddesh, caroline, logan, kai, amelia 

Milestone 2 highlights

I wanted to highlight some elements of recently completed Milestone2 builds to have them discuss how they implemented some ux, design and dev features, some aspects of which other groups might look to emulate/port to their projects.

With all the classes of this fall (fall break, career day, thanksgiving) we have not had as much time as I'd like for peer sharing, so this is an opportunity for designers and devs to talk about and in some cases deconstruct/explain the workings of some of their project elements...

-->
Data viz: literal pie chart (from 204 G2): 
https://mbhou.webdev.iyaserver.com/acad274/final/ACAD-274-Data-Final/DataTable1.html (https://mbhou.webdev.iyaserver.com/acad274/final/ACAD-274-Data-Final/DataTable1.html)

Data viz: Diverse data viz ideas/implementation (from 204 G4): 
https://kaitlynz.webdev.iyaserver.com/acad274/milestone2/visualizations.html (https://kaitlynz.webdev.iyaserver.com/acad274/milestone2/visualizations.html)

Design, use of color, data viz: Very effective use of color in data columns, text bubbles. Diverse viz formats. (from 204 G5) 
https://sunconni.webdev.iyaserver.com/acad274/(13b)%20Assignment/Gatcha%20Game%20 (https://sunconni.webdev.iyaserver.com/acad274/(13b)%20Assignment/Gatcha%20Game%20)

Design: distinctive look and feel, nicely styled boxes and use of color (from 204 G7) 
https://skimel.webdev.iyaserver.com/acad274/GroupFinalProject/data.html (https://skimel.webdev.iyaserver.com/acad274/GroupFinalProject/data.html)

Design: Distinct logo, color scheme (from 204 G8) 
https://enepo.webdev.iyaserver.com/acad274/HeatHealthRisk/Homepage.html (https://enepo.webdev.iyaserver.com/acad274/HeatHealthRisk/Homepage.html)

Design: Distinct look and feel, effective modular layout. well laid out external stylesheet, good color coding for ratings on data page (from 204 G9) 
https://siddeshn.webdev.iyaserver.com/acad274/waste%20wise%20site/ (https://siddeshn.webdev.iyaserver.com/acad274/waste%20wise%20site/)

Data feed filters, flags (from Gaming Statistics, Ansh et al)

Like the recent code dev demo, this project's data feed supports many different elements. look at the drastically different datasets coming from a single file/feed:

- https://asankhal.webdev.iyaserver.com/api/games.php (https://asankhal.webdev.iyaserver.com/api/games.php)

- https://asankhal.webdev.iyaserver.com/api/games.php?stat=toprated (https://asankhal.webdev.iyaserver.com/api/games.php?stat=toprated)

- https://asankhal.webdev.iyaserver.com/api/games.php?stat=by_genre (https://asankhal.webdev.iyaserver.com/api/games.php?stat=by_genre)

- https://asankhal.webdev.iyaserver.com/api/games.php?stat=stats (https://asankhal.webdev.iyaserver.com/api/games.php?stat=stats)

The underlying code checks for the existence of a querystring/form variable "stat":

$stat = isset($_GET['stat']) ? $_GET['stat'] : 'all';

switch($stat) {
    case 'all':
        $sql = "SELECT * FROM games LIMIT 100";
        break;

    case 'top_rated':
        $sql = "SELECT title, rating, release_date, genres 
                FROM games 
                WHERE rating IS NOT NULL 
                ORDER BY CAST(rating AS DECIMAL(3,1)) DESC 
                LIMIT 10";
        break;

    case 'by_genre':
        $sql = "SELECT genres, COUNT(*) as game_count 
                FROM games 
                GROUP BY genres 
                ORDER BY game_count DESC 
                LIMIT 10";
        break;

    case 'most_played':
        $sql = "SELECT title, plays, rating, genres 
                FROM games 
                ORDER BY 
                    CASE 
                        WHEN plays LIKE '%K' THEN CAST(REPLACE(plays, 'K', '') AS DECIMAL(10,1)) * 1000
                        WHEN plays LIKE '%M' THEN CAST(REPLACE(plays, 'M', '') AS DECIMAL(10,1)) * 1000000
                        ELSE CAST(plays AS DECIMAL(10,1))
                    END DESC 
                LIMIT 10";
        break;

    case 'by_year':
        $sql = "SELECT 
                    SUBSTRING(release_date, -2) as year_short,
                    COUNT(*) as game_count 
                FROM games 
                WHERE release_date IS NOT NULL AND release_date != ''
                GROUP BY year_short
                ORDER BY year_short";
        break;

    case 'stats':
        $sql = "SELECT 
                    COUNT(*) as total_games,
                    AVG(CAST(rating AS DECIMAL(3,1))) as avg_rating,
                    MAX(CAST(rating AS DECIMAL(3,1))) as max_rating,
                    MIN(CAST(rating AS DECIMAL(3,1))) as min_rating
                FROM games 
                WHERE rating IS NOT NULL";
        break;

    default:
        $sql = "SELECT * FROM games LIMIT 50";
}

Alternate data visualizations (from Animal Migrations, Maia et al)

Take a look at the page below, and goggle between visual and chart. See how the same underlying data could be visualized in drastically different ways, and how the initia data graphic is both engaging and gets across its data visually.

https://mlrocha.webdev.iyaserver.com/acad274/milestone2/ (https://mlrocha.webdev.iyaserver.com/acad274/milestone2/) --> Ducks

And then if we scroll down to key findings, one of the top-line conclusions of *Species Dominance: Mallards dominate observations (2,835) comes cross very clearly in both visualizations. Note: Even though the page clearly positions that it is bird flu observations, just looking at the Key Finding in isolation could lead to confusion/misunderstanding.

Using React (from Gaming Statistics, Jefray et al)

The Gaming Statistics group asked to develop with REACH rather than a traditional vanilla html+css+js front-end with mysql+php back end. Their custom deployment is at https://viralgo.space/ (https://viralgo.space/). Their group had multiple members comfortable with React. Question for their group:

- What development speed or features made React a preferred platform for your project?

- How long did it take an average member to originally learn React? Did you have decent Javascript experience first?

- What data back-end are you using for your 274 project that React is calling?

Some thought behind and implementation of certain data visualizations (Data Cetners Impact, david, halas, langston, catherine, daven, roy)

And finally, some effective initial data visualizations under #1 and #2 and #5 in the page https://graden.webdev.iyaserver.com/acad274/final_build/data.html (https://graden.webdev.iyaserver.com/acad274/final_build/data.html). If the group could talk about:

- The PapaParm library and use (#1 and #2)

- Design decisions for charts 1 and 2

- The google (sheets?) charts you used to create the map for #5.

-->Exploring ideas for interactive or pre-scripted/animated elements for Final Build

After having reviewed the updated Milestone3 requirements, we will spend just a couple of minutes for each project brainstorming ideas for animated and/or interactive narratives that act as introductions or tutorials, leading users through features, asking them to try out elements (and responding), etc. If it helps, you can think of these as expanded/more complicated versions of the animated lab presentations you previously did individually.

Narrative ideas (animated and/or interactive) for:

- Gaming Statistics (https://viralgo.space/) (jefray, ansh, nadine, kiho, ethan, and ayla)

	- Animal Migration (https://mlrocha.webdev.iyaserver.com/acad274/milestone2/) (mike, maia, cooper, anthony, lloyd)

	- Data Center Impacts (https://graden.webdev.iyaserver.com/acad274/final_build/home.html) david, halas, langston, catherine, daven, and roy

	- Shark Tank (https://bendenou.webdev.iyaserver.com/acad274/sharkTank/home.html) (vedant, chloe, sam, emily, ian and fiori)

	- Bitcoin and Social Media (http://lborkows.webdev.iyaserver.com/acad274/Capstone/MIlestone2Webpage.html) (om, weston, lucas, renae, zeinab, and joseph)

	- 

-->