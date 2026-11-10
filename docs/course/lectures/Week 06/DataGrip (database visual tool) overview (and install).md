
Setting up and Using dataGrip Database Program/Tool

Set up Remote MySQL in cPanel:

BEFORE you set up a remote client like DataGrip (or MySql Workbench) you FIRST need to log into the server through cPanel and enable (allow) connections from outside the server (from your laptop). 

Log into cPanel and go down to Databases > Remote MySql. In the Add Host enter the

%

(percent) symbol and click Add host, then check it is now listed down below. Basically by default the server firewall does not allow anyone to connect to your server. You are allowing anyone in, BUT they still have to give a valid username + password. But it does open up a security vulnerability, versus only letting specific computers/IP Addresses in or requiring a secureVPN to connect. 

Setting up DataGrip:

DataGrip is a database client and IDE that you install on your (local) computer to connect to iyserver databases (that you own). It will duplicate the functionality of phpmyadmin, and you can decide if you prefer it to that. You can also move seemlessly back and forth between the two. 

The course Announcement walked you through how to download and get a free account for DataGrip, but as a reminder:

- Download DAtaGrid from https://www.jetbrains.com/datagrip/

- Sign up for free account to use DataGrid and PhpStorm at https://account.jetbrains.com/signup

Once you have installed DataGrid, it will first ask you to set up a "project", basically a place for it to save all your preferences and accounts. Give it any name. Then it will start up the UI with a mainly blanks set up windows. 

Main set up: Configurating a DataSource: 

When you first start DataGrip the first thing you need to do is set up a Datasource, which is basically an ongoing connection to the class database server. To do this you can go to File > New DataSource. In some installs it will direct you to create a new DataSource automatically. This is a one-time set-up, and for now is likely the only connection you will need (later you might create one to the db server of someone in your group). 

[image https://iyawebdev.com/acad276/lecture_examples/datagrip_ss1.png] DataGrip Data Source configuration info:

Name: Nickname for the database/connection. 
Driver: MySql 
      (Note: When you go to first set it up, it might ask you to Download updates MySql drivers first. Also many times in the wizard it first asks you to select the Driver from drop-down list.) 
Host: webdev.iyaserver.com 
Port: 3306 
User: cPAnel login name 
Password: cPanel login password 
      At this point you might want to Test Connection before saving.

If you wanted to set up a DataSource with my guest credentials (you can have one for your cPanel and one with mine), that profile woud be MySQL and 

hostname: webdev.iyaserver.com (Note: that is the server for ALL accounts)
user: dent_student
pw: code4Studentuse

[image https://iyawebdev.com/acad276/lecture_examples/datagrip_ss3.png] [image https://iyawebdev.com/acad276/lecture_examples/datagrip_ss2.png] Now once you've successfully connected and saved your connection/datasource info, it will launch some windows. BUT, you also need to ask it to list your databases, which are called schemas. Click on the little dots next to No schemas selected, and check All Schemas in the pop-up. Now it will populate the left Schemas window with your list of databases, like like the left nav list in phpmyadmin. 

Now you can click open any database to see its Table (and View) lists, and you can open those sub-menus such as for a list of columns (and keys) in each structure. 

Quick DataGrip tips/walkthrough:

- Browse tables and views: In the left nav, double-click on any table or view to open it up in Browse/Data mode. Above the data listing you can directly type into a WHERE box to filter the results.

- Multiple queries at once: You can run many queries at once (unlike phpmyadmin), with each one in its own tab, and can switch between them.

- Build SELECT query: Right-click on a database/schema and select New > Query Console. One window is the query, the lower one is the output. Click on the green arrow or press Ctrl-Enter to run/re-run the query in the Output window.

- Edit/add data to table: Right-click on a table and select Edit Data -- but in most instances when you double-click open a table to read its data you can also edit it. Note/warning: Change you make are NOT saved to the server until you click on the green Submit icon (or Ctrl-Enter). So you could spend an hour editing, but if you don't submit/push the changes up, they would be lost. (Note: When accessing my "dent" databases you do not have edit access, but if connecting to your own you have full permissions. For this, Add data, Edit tale structure, and Add View.)

- Add data: With a table open in the top click on the + add row button. But again a warning that you have to Submit / push data up to the server to commit the new record.

- Edit table structure: Right-click on a table and Modify Table (same with a view).

- Add View: Right-click on a database schema and New View. And also right-click on the Views folder (if present). In the Create View window, set name to the name for the view and in the Source Text box enter the SELECT statement for the view.

- Visual Diagram: My FAVORITE feature of DataGrip. Right-click any top-level database/schema, and go to Diagrams > Show Diagram. First off, pretty decent design. BUT, best of all you can right-click on the visual diagram and select Layout to get MANY different diagram templates and styles!