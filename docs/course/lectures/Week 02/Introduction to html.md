
[image http://iyawebdev.com/acad274/lecture_examples/weather20263.png] Before lecture you should have downloaded and installed an html-compatible editor such as VSCode (https://code.visualstudio.com/Download). 

You should also right-click and Save Image As (or Save File As) the weather forecase image to the right or from http://iyawebdev.com/acad274/lecture_examples/weather20263.png (http://iyawebdev.com/acad274/lecture_examples/weather20263.png).

You can also save (right-click and Save As) the text of the weather.txt (https://iyawebdev.com/acad274/lecture_examples/weather.txt) content, if you want to build your demo page with the same content I am working with.

Did students save trojan image from top of lecture? Start by checking in on avatar photos on roster page.

Did students submit their information lab through brightspace? Did theyshare permission to instructor and grader (if necessary)?

Information webpage assignment (due in a week)

Reminder that Data was intended to go BEFORE Dev1, so any who have taken Dev1 will have to make through coming 3 weeks.

Start html + css lecture with the skeleton. We will build a page on how to do something. Class suggestions?

Start with simple h1 and p objects. After a couple of grafs, create body entry in stylesheet.

Add images. First, add Tommy to the page, with a short bio. Then create a .bio class and format the image.

Next source some images from images.google.com, save to SAME folder, edit name but do not change file extention. Place inside at top of paragraphs.

End with box with numbered list of steps. Place in div with class of sidebar. Create sidebar entry in stylesheet.
 -->
Web page technologies

We pages are made of basically four elements:

- Text: Literally the text of the page.

- html: the "tags" that define the elements of a webpage such as from structural elements like paragraphs and boxes (that you put content into)

- styles/css: design instructions attached or related to html tags/objects

- javascript: scripting to add interactiviy, user-triggered behaviors to a page

Webpages are written in html with .htm or .html file extensions, so that your computer knows to open the doc in a web browser. All html pages start from a basic "skeleton" of html code (see html section below). The page and its regions (layout) are all defined by html tags (typically div tags), then css is used to define the object properties.

Css or styles are the design layer of a page, which are attached to or embedded in html tags. I.e. css impose design properties onto objects that are created by html tags. These are typially implemented trhough a stylesheet" with named ID or CLASSES that individual html tags use class and id names to be connected (see css section below). Styles can also be entered directly "inline" inside of html tags, and stylesheet names can also include instructions for all tags of a certain type (such as all images).

You will build html pages on your computer in an editor (such as VSCode) and preview or test them by opening the same file in a web browser (such as Chrome). BUT, at some point you need to upload or "publish" the page to a server so that you can have a ur to link and share, i.e.. the "World" cannot see files on your laptop, so you need to upload your page (AND its images and other files) to the server, then get the url of the page (through the server), to be able to submit an assignment in Brightspace or email/share it with a friend. For now you will use the cPanel > File Manager option to upload files to your server space.

html

A web page is set up with a basic skeleton or framework of three html (hypertext markup language) tags: html, head, and body. Below is a core html framework that you can use for any webpage:

<!DOCTYPE html>
<html>
<head>
<title> </title>
<style>
body {

}
</style>
</head>
<body>
</body>
</html>

The head is where concepts of the page are stored such a stylesheet for design instructions, scripts, and meta information such as the page's title.

The body contains the actual content of the page from text to images.

The content in the body/page is organized by html tags that create page elements such as headings, paragraphs, numbered or bulleted lists, quotes and footnotes, sidebars of content, etc. These structural or "block" tags include:

- h1, h2, h3, h4, h5, h6: Heading tags of descending size. Can be used for large page headings and small blocks like footnotes

- p: Paragraphs, which inherently have double spacing

- div: create a "box" of content, typically used with layout instruction styles like flow

- ul (and li), ol (and li): create a bulleted or numbered list (and the list elements inside the list)

- blockquote, pre: highlight a block of text like quotes or instructions

There are also html tags that insert elements into content such as line breaks, dividing lines, and images:

- br: insert a line break into the page

- hr: add a horizontal line to the page

- img: insert an image (which is a separately saved file). Some core img tag attributes include

- src: file source (image filename/path)

- alt: alternate text (equivalent) for the image

- class: to assign design instructions to the image (from a stylesheet)

And there are also some tags that can be used to format pieces of text (rather than an entire block), such as:

- strong: applies a bold format to text

- em: applies an italic text format

- span: a generic tag with no inherent formatting, perfect for applying style instructions

styles

Design instructions for text, images and regions of a page are applied through styles (also often referred to more broadly as css, even though that has a specific definition). Although you can put inline style instructions into any tag, most commonly you define a named class style with text and color instructions, then activate it onspecific tags through the class attribute.

Style properties are set with colon operators and a semi-color at the end such as text-size: 24pt; and background-color: yellow;.

Some common text styles include:

- font-size

- color (text color)

- font-family (font name or face)

Styles can also set colors, dimensions and wrap alignment to element through style properties such as:

- width and height

- background-color

- float (left and right are only valid values)

- background-image (note filename must be in a url enclosure like url(dent.jpg)

stylesheet

A stylesheet is a location in a document (typically a style block in the head) where you define named styles that contain one or more style instructions.

Below are some examples of stylesheet entries. The first three will automatically apply to the page body, to any h1 you use, and to any images you place on the page. The other three have to be "activated" for a specific object by setting the corresponding class name in an html tag and can be used with any tag/object.

body{
background-color: yellow;
color: red;
}
h1 {
font-size: 24pt;
color:purple;
font-weight: bold;
}
img {
width: 200px;
margin: 0 9px
}
.highlight {
background-color: yellow;
letter-spacing: 3px;
}
.right {
float:right;
margin-left: 10px;
}
.left {
float:left;
margin-right: 10px;
}

You can view the page I built in class today at weather.html (https://acadta.webdev.iyaserver.com/acad274/weather.html), and can even right-click and Save Link As (or whatnot in your browser) to save the source code to your computer.