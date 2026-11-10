
Save to your computer:

- weather_start.html (https://iyawebdev.com/acad274/lecture_examples/weather_start.html), weather.jpg (https://iyawebdev.com/acad274/lecture_examples/weather.jpg) and wapp.jpg (https://iyawebdev.com/acad274/lecture_examples/wapp.jpg)

- css_selectors_start.html (https://iyawebdev.com/acad274/lecture_examples/css_selectors_start.html)

- infopage_start_example.html (https://iyawebdev.com/acad274/lecture_examples/infopage_start_example.html)

Basics of styles and css

In webpages, CSS or "styles" define the design attributes of objects. In general, we assign these design properties in the following syntax. It is preferable to assign these instructins through stylesheets (tags, ids and classes, explained lower below), but they can also be implemented through "style" html tag properties inside of html tags.. Notice that unlike html tag attribute syntax, in which value=property are assigned using an equal sign, that style property assignmentss follow a property:value (color:blue) syntax. Also note that every style instruction ends with a semi-colon.

background-color: red;
color: green;
font-size: 24pt;
float: left;

Styles can format:

- text properties such as its color, font face, size, etc., as well as to special formatting such as transforming text to ALL CAPS or setting the leading or line spacing for a block are

- margin and spacing properties of blocks

- background color, border, opacity, and background image properties of blocks

- other, specialized properties such as the bullet styles of lists

Some common style properties you will use a lot are:

- font-size (typically in measurements such as 18pt or 3in)

- color (text color)

- background-color (of an object, from the body to a paragraph to a span tag, named colors like green or hex ones like #4499aa) or background-image (format uses a url enclosure, such as background-image:url(mypic.gif)) and related properties

- text-decoration (underline or none -- often used to REMOVE lines from hyperlinks/a)

- line-height (height of a line, plain number like 2 is line spacing, or measurements such as 18pt)

- text-alignment (right, left, center) background-image (format uses a url object, such as background-image:url(mypic.gif))

Styles are written inside a [style] block in the head of your document, which is called a stylesheet. Style instructions are stored under names called selectors that define which objects in a page are affected by them. In pseudo-code, style entries look like:

entryname {
	property: value;
	property: value;
	property: value;
}

Stylesheets:

- A stylesheet is style entries are stored. Each style is stored under a name called a "selector", that determines which object/s in the page are affected by the style. Inside the selector are the style properties (property:value;) that make up that entry. A stylesheet is located either in the "head" of a page (which is called an internal stylesheet), or in a separate file that is "linked" into a page (which is called an external stylesheet).

- An internal stylesheet is stored inside a [style] block (in the head of the document).

- Each "style" in a stylesheet starts with a selector name... and the content of that style is defined by "squiggly" brackets.

- Selector (name) types:

- id

- In your stylesheet, store your style instructions under an id (pound sign) name in the format #name ... such as #outercontainer

- The object in your page with that id (such as div id="outercontainer") will automatically acquire those style settings

- Note: an id can only be used on ONE html tag/object in a document.

- class

- In your stylesheet, store your style settings under a class (period) name in the format .name ... such as .headline

- Any object in the page that is set to that class will acquire those style properties, such as span class="headline"

- Operates almost exactly the same as an id. The main difference is that you can use the same class on multiple html objects

- tag

- In your stylesheet, store your style instructions under an html tag name

- ALL objects of that type (tag) in the page (img for images, div for div boxes, a for hyperlinks, etc.) will have those style properties as their new defaults

So for instance, imagine the following stylesheet:

body {
	font-size: 12pt;
	color: black;
	background-color: white;
}
a {
	color: green;
	text-decoration: none;
}
h2 {
	font-size: 24pt;
	color: purple;
}
#headshot {
	width: 200px;
	float: right;
}
.logo {
	width: 90px;
}

There are a LOT of style properties you can play with. Below we will get into some of the more graphic-oriented properties such as opacity, border-radius and the pseudo-class :hover. But first, a quick review exercise exploring a layout with lots of floating boxes.

Simple single-term style element selectors, compounds

Although we have not explorerd layouts with divs (and eventually flex boxes) yet, we will explore a simple page with one big box (container), followed by lots of little boxes. We will write style entries that will targeted the boxes by an ID, then by classes, and format the latter as floating boxes that stack together.

Then we will learn some "graphic css" properties and add them to the styles we wrote.

CSS Selectors: Tag, ID, Class, and "Compound"

- Tag: Stylesheet instructions that start with a tag name redefine the style properties of that html tag. So
a{text-decoration:none}

removes all underlines from anchors (hyperlinks), just as
img { border: 1px solid red}

would apply red borders to all images placed with the img tag. Note: there is a special master tag called "*" that represents all tags... so for instance notice that in the start page there is an instruction
* { border: 1px solid red }

that adds red borders to every object in the page. 

- ID: Stylesheet instructions that start with a pound (#) sign are ID and define style properties for ONE object on the page that has been assigned a unique ID. So for instance
#outercontainer { width:1020px;}

would make the html object with id="outercontainer" 1020 pixels wide.

- Class: Stylesheet instructions that begin with a period (.) define style properties for ANY objects that are set to that class. So an instruction of
.thumbnail {width:80px;height:80px}

would make any html objects with class="thumbnail" be 80 pixels wide and 80 pixels tall.

- Compound: A compound is a selector that combines more than one component. For instance, a stylesheet instruction for ul a{ } would target not all ULs, and not all As, but only those anchors that are inside of a ul. Similarly, a selector of div.infobox would only target div that of the class infobox.

CSS Practice Exercise

Some examples of all of this are in the css_selectors.html page. Open up the start file css_selectors_start.html (https://iyawebdev.com/acad274/lecture_examples/css_selectors_start.html). This page has one large outercontainer box, which contains a series of smaller divs that all have a class of "box".

We are going to add the following to the page which will also act as a review of different style properties, syntax and functionality:

* {
	border: 1px solid gray;
}

#outercontainer {
	width:1020px;
	background-color: yellow;
	text-align:center;
}

.box {
	width:220px;
	min-height:120px;
	background-color: pink;
	float:left;
	text-align:left;
	padding:15px;
	margin:2px;
}

.linkbox {
	width: 600px;	
	margin:auto;
	text-align: left;
	background-color: teal;
	color: white
}

.linkbox a {
	color:white;
}

.linkbox ul a{
	color:yellow;
}

.linkbox ul a:hover{
	color:red;
}

a {	
	text-decoration:none;
}

a:hover {
	text-decoration:underline;
}

.definition{
	padding-left: 20px;
}

.linkbox strong{
	color: #9F9;
}

ul a {
	visibility:hidden
}
ul:hover a {
	visibility: visible
}
.bc {
	clear:both;
}

In particular notice in the stylesheet instructions the difference between the entries for the "a" instructions and the ".linkbox a". The "a" instructions would apply to all anchors by default. Then the ".linkbox a" instructions would override the previous "a" ones ... but only if an anchor was inside an object with a class of "linkbox".

You can see the finished version of the page at css_selectors_end.html (https://iyawebdev.com/itp104/lecture_examples/css_selectors_end.html).

"Graphic" css properties

Introduction to the pseudo-class :hover

The :hover pseudo-class is used to create an "alternate" version of a selector that only triggers if the user "hovers" their mouse over that object. So for instance, you could have an a{} style for the normal appearance of links, and a second a:hover {} style to change the appearance of a link when the user hovers over it.

You can create :hover versions of any element selector typess: tags, id or class.

Besides hover, two other pseudo-classes that are useful are :first-letter and :first-line. For instance, notice that if you create a style p:first-letter {} that you can create special "initial caps" for the first letter of every paragraph.

The opacity property 

Opacity controls the percentage of visibility of an object, also known in some programs as alpha. The value ranges from 1 to 0, so 1 is the normal opacity for objects, 0.5 would be 50% opaque/visible, and 0 would be not visible.

So for instance, try using img {opacity: 0.8} or div { opacity: 0.8) (80% visible) to a page, to get a quick feel for how it works and looks. Note: When you change the opacity of a container (like a div), it fades down the opacity of every object in that box -- images, text, backgrounds, etc.

border-radius -- rounding corners of objects

Probably one of the most common design properties in css is border-radius.

Fairly simple in its format, imposing a border radius allows boxes to have "rounded" corners... or even become near-ovals.

Take a div with say a standard border such as

  border: 2px solid black;

... and add in

 border-radius: 10px;

and suddenly your boxes have smoother, more pleasing contours!

Shadow "boxing"

Besides rounded corners, we are also used to being able to add drop-shadows to objects.

The property box-shadow takes four parameters:

box-shadow: 10px 10px 5px #888888

To add drop-shadows to text, we use the text-shaodw property, and again give it four parameters:

 text-shadow: 20px -12px 2px #6374AB ;

You can see the final version of the weather page demo I built in Spring 2026 weather_end.html (https://iyawebdev.com/acad274/lecture_examples/weather_end.html) 

And a different demo from 2025 (with other examples and implementations) at infopage_demo.html (https://iyawebdev.com/acad274/lecture_examples/infopage_demo.html)

visibility: hidden (and visible)

So can use a style property of visibility:hidden to visually "hide" an element from the page. And then use css or scripting to change it to visibility: visible to make it re/appear.

To see an example of this in action, what if we hid the newpaper links by default, then used a compound hover to have them show up when you hover over the box they are located in.