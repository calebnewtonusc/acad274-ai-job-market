
Reminder: We will be working in MySQL Workbench today, if you have not installled it... 

Files you may want to have saved to you computer for this demo:

- nhlscorers_celebrinidata.csv (https://iyawebdev.com/acad274/lecture_examples/nhlscorers_celebrinidata.csv)

Reminder: "Guest" credentials for all my dent database account/login for use in this demo is below (same as previous sessions):

	hostname: webdev.iyaserver.com 
	user: dent_student
	pw: code4Studentuse

Edit data (through workbench or phpmyadmin)

Logging into Workbench through the guest dent_student account, notice in the databases dent_EVdata (cars table) and dent_hockey (nhl2026 table) there is no option to EDIT the data (in our case through Workbench, but also in phpmyadmin if you created your own copy/version of the databases). That's because a normalized database will not edit records in a table unless there is a unique identifer (typically a primary key, although could be two fields that combine for a unique identifier). So when we impor data from an external spreadsheet/csv there is no inherent key/label for each record.

To fix/address this, we could can create a new field/column (lets call it id), and set it up as a primary key with auto increment (AI), which means it will auto-create unique numbers for each row of data (1, 2, 3) automatically (i.e. we don't have to, and should not, enter the numeric keys manually).

(BEFORE we do this, I will save a copy of the original table, so I have something I can revert to if things go wrong. I will make a copy of nhl2026 named nhl2026_v2 and edit that. In phpmyadmin once you select a database table,go to Operations, then scroll down to Copy Table to, enter new name, and click on the Go button in that section (there are "Go" buttons in each sub-section of Operations).

So how do we add a new field that is a unique indentifier for all records and enables editing? Below I will outline it both in Workbench and phpmyadmin -- the latter of course you can only use/do if you own/host the database on your account (like a group project's db owner)

- In Workbench, right-click on the table and select Alter Table. Scroll to the bottom of the list of fields, and in a blank/empty row double-click in a Column Name space. Note: You will NOT be able to "save" (Apply) below on my dent_ databases since your guest dent_student account (intentionally) does NOT have permission to do so.

- Set Column Name to "id"

- Set Datatype to INT

- CHECK the boxes PK (primary key), NN (not null, cannot be left blank, which is fine since auto-increment means the db will fill out a unique number automatically) and AI (auto-increment)

- Click Apply and go through the dialogues.

- In phpmyadmin, select the table then Structure. Then:

- Under the field listings, click next to Add make sure it says 1 (column) and click on Go.

- Under Name enter id.

- Set Type to INT.

- Check the AI (auto-increment) box.

- Click on Save.

select a database table, click on  Operations, then go down to Copy Table to and set a new name for the duplicate.
-->
- In either implementation if you look at the table data again you should see a new field "id" that has unique auto-populated number values for each record AND should have the ability to edit the data. 1) In Workbench you can open the table in "spreadsheet"/grid mode and edit any/all records at once. Note/reminder: You need to click on Apply and go through the steps to actually commit data, and you need to have Update (edit) permissions on your db user account. 2) In phpmyadin you can Edit an individual record in Browse mode.

Now notice that in phpmyadmin in Browse mode each record row has an Edit button. Click on Edit. A bit cumbersome of an interface, and can only edit one record at a time. But it works.

In Workbench through data grid/spreadsheet mode you can edit ANY/ALL rows. When you are done with you edits click on Apply. Warning note: It does NOT apply any of your edits until you hit Apply. So if you spent an hour making edits, if you dont hit apply (or your computer crashes) you lose all your edits.

BUT, one problem: you now likely CANNOT by default use import wizards anymore to import additional records because now that table has the new primary key field (and is indexed), and attempts to import likely will throw errors because your data file (csv) does not have data for the index (unique identifier) column,i.e. you are attempting to import a data file with 10 fields/columns but the target table has 11 columns). Solutions:

- In Workbench using the Table Import wizard (on the existing table), on Step 2 check the mapping of fields and make sure none are mapping to the new ID field. You can use the drop-downs to make sure your import columns are correctly mapping to your existing columns.

- In phpmyadmin, use the normal Import option (on the existing table) but toward the bottom of the list of options copy and paste the header column (first row of your import csv) into the Column names, and remember to tell it to skip 1 rows (i.e. don't import the "header" column of the file since the table already exists and you are not "creating" the table and its columns, but just adding data to an existing table).

If you want to see/interace with a version of this table, with data populated, you can use either of the files nhl_top_scorers_GOLD1.sql.txt (http://iyawebdev.com/acad274/lecture_examples/nhl_top_scorers_GOLD1.sql.txt) or nhl_top_scorers_GOLD2.sql.txt (http://iyawebdev.com/acad274/lecture_examples/nhl_top_scorers_GOLD2.sql.txt) to "import" the full table and data into any of your databases.

-->
So for a scenario, we have a fourth set of historical "player" data to add to our existing nhl2026 table. See/save the file nhlscorers_celebrinidata.csv (https://iyawebdev.com/acad274/lecture_examples/nhlscorers_celebrinidata.csv). If you open up that file, notice it has the header row (which we don't want to import as data) but does NOT have the new ID column... so we cannot have the db system (Workbench of phpmyadmin) simply import the columns in order (i.e. database table's fields start wit ID, then player, etc., whereas the file start with player (and skips/doesn't include ID).

So our attempt to import more data (from the above file) needs to address that, as laid out in the two options above. In Workbench you can test all of the Apply steps but at the very end you will get an error because the dent_student account you are connecting through in Workbench (intentionally) does not have INSERT (add new data) or UPDATE (edit data) security priviledges/access.,

So in your groups, if you need members to be able to add and edit the data in a table then you need to create or edit a guest database account and flag INSERT and UPDATE priviledges. Similarly, if you want members of your team to be able to create and save new Views in the db you would enable CREATE VIEW permissions on the account. In a typical production environment the database account that serves the website and data APIs would ONLY have SELECT permissions and NOTHING ELSE, protecting you from hackers who get access to the account (they cannot change or delete the db, only read data).