
If you want to follow along today with the github lecture you will need to:

- (Recommended) Have downloaded and installed github desktop on your computer and set up/created an account on github.com (preferably with your USC email address). You can download the free software at https://desktop.github.com/download/ (https://desktop.github.com/download/)

- Copy the https://github.com/iyawebdev/dogs (https://github.com/iyawebdev/dogs) URL to feed into Github Desktop (File > Clone Repository> URL)

If you are looking through the walkthrough (in this lecture) about setting up github desktop for your project, you can skip directly to that spot here (#setup). installed github desktop on your computer . 

Quick nav: 
Set up Github, gitdesktop (#setup), Using github and gitdesktop (#git)
-->

Syncing files/websites between sources

Every time you are working on a website you are constantly syncing a local copy of the site/file, which you are editing, with the public/official version of the site/files on a server. We often work on and edit pages on our local computer, then when we want to test/publish them to the server we upload the files (html, css, images) through cPanel > File Manager.

When we get into group projects, we suddenly have to worry about other people sharing files (html, php, cs, js), and how do we keep them in sync AND track changes (say that someone else made), and optimally be able to revert or go back to previous versions (or pull older code).

  [image http://iyawebdev.com/acad276/lecture_examples/php_server_diagram2.png]

Syncing files between your computer/laptop and the server (webdev.iyaserver.com)

So in our current model (i.e. up to this point in class), you have a copy of your site on your computer where you create and edit your pages (in an editor). But you need to publish them to the server to make them public (and to submit for grading).

Three way syncing -- computer to github AND computer to server

ONE member of your team will need to commit to hosting the official version of the site on the iyaserver to submit your Milestones (for grading and presentations). Optimally everyone will have a live copy of the site (synced from github), but one will need to host the official site on their account/server.

[image http://iyawebdev.com/acad276/lecture_examples/diagram_git_pc_server1.png]

So with github, you are syncing a copy of the site from your computer with the shared repository (repo) in the cloud, so that when you make changes you can "push" them up to the server for members of your group to grab / pull down (to update their copy of the site). But in addition you still need to keep your local site (on your computer) and potentially syncing with the iyaserver (for grading, public evaluation).

So in effect, you are syncing your computer with two different locations -- a shared repo in the cloud AND your server.

In addition, members of your group are also syncing their copy of the site to github. So when you commit changes to the repo on github, they will periodically need to pull down changes to their computer, and then copy/propogate those changes to their testing iyaserver. If nothing else, one person on your team will need to do this -- i.e. whose server (dent.webdev.iyaserver.com) wil host the "official" version of the site, that you submit for assignments/milestones. And conversely, periodically you will need to pull down changes they have made to the repo to your computer (so you have the latest version of a page/file), and similarly once your computer is updated also copy/upload those changes to your iyaserver.

(Overview) Github, source control

Git is a version control platform that allows users to track versions of projects they develop, including collaboratively with multiple users. It documents changes to project, which also allows for auditing. You create code repositories that can be cloned (copied).

Users can check out versions of code through the github website, but most commonly one will install a git client on your computer to check out and download code, and check-in and upload code to the central repository (to "commit" your edits to the shared master file). Git (https://git-scm.com/downloads) installs at the operating system level, and can be accessed through o/s command-line commands. But there are also many GUi clients (including Github Desktop (https://desktop.github.com/)) to check code in and out and pull/push code up to a repository.

Git vs Github: git is a version controls system. Github is a platform for hosting and serving git repositories.

Github basics:

- Repository (repo): Software project

- Clone: Copy a repository to your local environment. Generally one time only.

- Commit (local): This is git's version of save/saving changes to your local branch. Typically you include a message with a commit (documentation).

- Push: Copy changes/commits from your local repo/copy up to the branch in the main/remote repository. You can also choose to create a new branch with a push.

- Commit + Push: Check in your files and push changes up to shared repo.

- Fetch: Check the cloud/shared repo for changes.

- Pull: "Pull" files down from the remote environment to your local, overwriting any current files/changes in the local environment.

- Fetch + Pull: Check for cloud repo changes and pull them down.

- Branch: Create a version of a project/repo. You can create unlimited "braches" of a repo. Branches can be created by users or groups to work on new features or versions of a project.

- Checkout: Switch between branches in a repo and copies files down to your local environment.

- Merge: Overwrite changes/files from one branch into another.

- "Pull request": If you do not have permissions to push a change to a branch, you can issue a pull request that asks to commit changes you have made to a branch.

- Merge: Merge together multiple commits to a branch. Also commits pull requests.

github hello world

There is a 10-minute tutorial you can walk through at github: hello world intro and guide (https://guides.github.com/activities/hello-world/)

Demo: Create github account, create new repository, share it/collaborate

So first off, let's set up a new github repo for a class group project. After logging into the github account for one of your members, create a new repo. In my screenshots below you can see a sample "dogproject" I set up. In my examples you can see how I will build a testproject. [image http://iyawebdev.com/acad276/lecture_examples/gitss1.png]

As pat of the set up we want to add people (collaborators) to the project -- such as the members of your team. In the project go to Settings, and then Collaborators (or Manage Access then Collaborators). [image http://iyawebdev.com/acad276/lecture_examples/gitss2.png]

Ok so we've got the repo set up, and it has various files and directories. Now we want to get it downloaded to our local environment to work on it. So we could Download the whole project as an archive, and unpack on our computer: [image http://iyawebdev.com/acad276/lecture_examples/gitss3.png]

or (Recommended) we could use a GUI utility like Github Desktop to add a local repository, at which point it would have not only set up the local project but cloned/downloaded the files (see important NOTE below): [image http://iyawebdev.com/acad276/lecture_examples/gitss5.png] [image http://iyawebdev.com/acad276/lecture_examples/githubdesktop_clone_repo.png]

NOTE: The default "local path" where github desktop stores repositories of pages/sites is in a relatively obscure location. You can choose to a different location on your computer. But when first setting up your project's site/repo (pulling down the initial site build) it might be best to start from a new location on your computer. Which also means you'll need to find those files/location in your editor. Good news is front the homescreen of an active repo in Github Desktop, there is an option to Open Your Repo in Visual Studio Code, as well as one to View the files (repo) in Finder/Explorer and to launch the repo (in a web browser) on github.com.

Are we good? Review.

Well, at this point you could open those files (from the repo) on your computer and edit them, but they would not be pushed up to the server for testing. Some elements to consider:

- There are two cloud or server models at play: github to/from your computer and iyaserver to/from your computer. You may or may not need to worry about the second model if you are not the official site host and/or are not writing the backend database/php scripts.

- The project will exist TWICE for you: 1) the github central repo, which ALL of the members of your group share. This is where the official "build". 2) Your local copy of the repo, on which you make edits and deploy to iyaserver to TEST. But then periodically push/commit back up to github to update the shared cloud versions of files.

- So the basic workflow is (assuming the repo has already been created by a member of your team):

- (One Time, in github desktop) Clone Repository to your computer (again note the Local path (where it stores it) may not be where you are expecting it. So in your Editor you may need to search and find the new location of the site folder.

- (In github desktop) Periodically Fetch to see if there are any changes to the repo in the cloud, and if so PULL down to your computer the changes (to integrate changes from other members).

- Edit files in your local copy of the repo.

- (Optional but recommended) Periodically perform commits (but NOT push) to save your changes/edits in versions. Doing a push WITHOUT a commmit logs your changes (in source control) but does NOT overwrite/copy changes up to your group's shared repo.

- Periodically PUSH and COMMIT your changes to the github repo, merging your changes to files with others (and in the case of new files adding them to the repo).

What to do if you are not seeing the project folder in your editor

What if you did the recommended setup but you are not seeing the project/folder in our editor? If you quickly hit "Clone" when setting up the repo in github desktop and did NOT edit the Local path, then the local repo you created/copied down from github is in a different location on your computer (typically a git documents folder).

If you did that, and have not made any edits to files, the simplest solution is to remove the repo from your computer and re-set it up (Clone). To do that, in github desktop go to Repository > Remove. Then in github desktop redo the File > Clone Repository step, being careful to change the Local path box to where you want it on your computer. Then relaunch your editor and Open > Folder to show it where the files are.

	- In github desktop add the repo (File > Clone Repository). This should trigger it to download the repo's contents (files) to your computer.

	- In github desktop, with the repo selected, there should be an option like "View the files of your repository in Finder/Explorer". Click on that button. It should open the folder containing the repo in Finder/Explorer.

	- Leaving the folder open, close github desktop.

	- In phpstorm, select the top folder of your site and right-click and select Open in > Finder/Explorer. This should open up a finder/explorer directory window (like github desktop did). 

	- With both folders open, drag the github repo folder (named to your repo) to the phpstorm project root folder.

	- Back in phpstorm, the folder should appear in your folder list. If not you might have to right-click on the top folder and select Reload from disk.

	- Delete the repo folder (that you just copied to phpstorm) from the git directory.

	- Now re-run github desktop. It will immediately be unhappy because it cannot find the repo on your computer (because you moved then deleted it). Click on the Locate button and go through your computer until you get to the folder with the repo (for me that is Users> dent> phpstorm projects/. Select the repo folder (not the project folder in phpstorm, but the sub-folder named after the repo).

	- To test that all is working, in phpstorm open up an html or php file and launch it in a browser through phpstorm. This should verify that the file is coming up through http://iyaserver.com. Make one edit to the file and save. Back in github desktop, it should have highlighted the changed in the file.

So at this point, you can use github desktop to sync your local (laptop) version of project files with the cloud repository, using phpstorm to edit and upload the files to the server for testing. So you can periodically commit and push your changes up to the cloud  repo, where your groupmates can pull them to get the updated/latest versions, And  periodically pulling changes from the repo (changes your groupmates have made) down to your computer so you have the latest versions.
-->

Setup Summary: Setting up on your computer github deskstop for your group repo

Note: Steps 1-3 only need to be completed ONCE by a single member of your group, not individually.

- CREATE REPO: Have ONE person in your group set up the repo through http://github.com. Only need to do this ONCE (not for every member). So the repo will live under the github username of one member, such as https://github.com/iyawebdev/groupproject.

- POPULATE REPO: (Recommended) Have one person upload an intial build (of folders and files) to the repo as a starting point for all members, i.e. upload html (and css and/or js) files. You can do this through drag-and-drop through Upload Files, BUT then you have to click on the Commit button (in the github.com website).

- ADD COLLABORATORS: Once the repo is set up, have the creator ADD (#add) every member of the group to the repo. One of the links on an initial repo in github is often add collaborators, but you can also in github go to Settings > Collaborators

Steps every individual member needs to complete

- CLONE REPO TO YOUR COMPUTER: In github desktop add the repo (File > Clone repository) BUT do not use the default local (computer) path. The first time you do this it will try to put any new repo in a git folder on your computer. Instead of putting it in a folder like /documents/github/projec2, you might want to put it in a custom folder/location on your computer. When the repo is added on the default github desktop screen there should be a button "Open files in Finder/Explorer". Select that. Look at the file path. As above, make sure it is NOT something like /documents/github/project2 but something like /users/dent/acad274project.

 Clone Repository or from the website github.com, when you have the repo open, under the Code menu (lower right) there should an "Open in Github Desktop" option. This should trigger it to create a folder download the repo's contents (files) to your computer. At this point if the repo has folders and files github desktop should copy all of the repo's contents to your computer.-->github desktop, with the repo selected, there should be an option like "View the files of your repository in Finder/Explorer". Click on that button. It should open the folder containing the repo in Finder/Explorer.

		- Leaving the folder open, close the github desktop application.

		- In phpstorm, select teh top folder of your site and right-click and select New > Directory, and name it something related to your project (like its name).

		- In phpstorm, select the top folder of your site and right-click and select Open in > Finder/Explorer. This should open up a finder/explorer directory window (like github desktop did) show the (empty) folder for your project files. 

		- In finder/explorer, With both folders open, drag the CONTENTS of github repo folder (named to your repo) to the corresponding phpstorm project root folder. When you have verified that the phpstorm folder contains the repo contents, go back to the github desktop folder and delete it (the entire folder, including its contents). When you have done this and hit Clone it you should see messages and it downloads all of the file and folders in the github repo down to your computer.

-->back to phpstorm, and under the main folder root of your project you should see a NEW directory named for your repo. If you the folder (and the repo files), they are in your computer and you can edit them in phpstorm, but they have NOT been uploaded to the iyaserver to test yet. You can open, edit and save files to trigger phpstorm to upload them to the server. You can also right-click on one or more files or folders and select  Deployment > Upload to... to manually push the project up to the iya server,  prior to making any edits).

-->finder/explorer, delete the repo folder (that you just copied to phpstorm) from the git directory.

		- Now re-run/launch github desktop. It will immediately be unhappy because it cannot find the repo on your computer (because you moved then deleted it). Click on the Locate button and go through your computer until you get to the folder with the phpstorm directory that now contains your repo files (for me that is Users> dent> phpstorm projects). Select the repo folder (not the project folder in phpstorm, but the sub-folder named after the repo).

-->
- TEST SITE/pages: To test that all is working, open up say the homepage in your editor and a web browser. Are all the images showing, are there issues with styles, etc?

- MAKE CHANGE, COMMIT AND PUSH TO github REPO: Finally, make one edit to a file (can be a simple text edit of a page) and save. Back in github desktop, it should have highlighted brought up a prompt showing your changes to the file (saying it needs to be updated in the repo). On the left make a Commit (have to enter a comment), then when successful github desktop should prompt you to Push Origin. If that is successful, then you hae your workflow working b/t github, githubdesktop, and your computer (and made a change that others in your group can fetch and pull down to their computers).