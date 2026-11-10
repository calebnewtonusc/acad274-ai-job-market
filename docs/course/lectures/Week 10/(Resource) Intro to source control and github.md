
Note: This is a resource version of a source control and github introduction I normally do in ACAD-275. There may be references to prep (create git accounts, downloads) that are specific to particular class versions of this info. 

If you want to try to do some of the demo portions the link/url to access/paste into github desktop is:

- https://github.com/iyawebdev/testproject20241 (https://github.com/iyawebdev/testproject20241)

Source control

In creating a software project, including a web site, it is useful to use some kind of version control system (VCS), and crucial to use one when working on group projects.

When collaborating on a software project, how do teammates:

- Exchange/distribute code

- Make sure they are working off the most corrent version

- Track (and potentially undo) changes

- Split off different version, such as live/production, betas, new modules, etc

Without a VCS the development can be chaotic, with members using strange mechanisms to share code like google drives, emailing files around, working off outdated code and overwriting each others changes, etc.

[image https://www.iyawebev.com/acad275/lecture_examples/git_v_github_ss.png] (https://www.iyawebdev.com/acad275/lecture_examples/git_gh_comparison.png)
Click for an extended comparison ofgit vs github (https://www.iyawebdev.com/acad275/lecture_examples/git_gh_comparison.png) from the site geeksforgeeks (https://www.geeksforgeeks.org/difference-between-git-and-github/).

Git (as a system) and github (as a web-based platforma) are a dominant option -- around 100M developers and almost 400M repos (37M or so public).

Git -- source/version control system and commands and a command-line tool (software). Like all vcs, it allows for tracking changes and resolving/merging code in software projects (web, but also mobile app programming, software engineering, etc.), particularly for group projects. And although perhaps less important for the Dev1 project, it also allows for working on multiple versions/branches of code.

Github -- online/cloud storage/implementation of git repositories (repos). It can be used for project development and for project documentation and distribution (such as open source releases).

Github Desktop -- software (download for ios and windows) that provides a visual interface to run git commands and procedures on your computer, syncing files between your computer (and its file system and local repos) to github repositories.

Git basics and terms

So first you create a repository or project in which you will create (or import) files and track changes. This can be any kind of software project from a website to a mobile app to enterprise software. For the purpose of this demo, we will assume you are creating repos through Github (and sometimes check their status) and generally accessing them through Github Desktop. (Of course on one end of the spectrum you can use command-line Git for all operations (old school, manual developers) and on the other end could only use Github and use upload/download or web-based editing (more for tech ludites).

The basic workflow for git repos is:

- Set up repo: (One time) Through Github, create and set up repo -- name new repo and if you have multiple gh accounts specify which account it should be created under, specify public or private, write repo description, choose whether to incude a readme file. You should now have a repo url of account/reponame (such as https://github.com/iyawebdev/testrepo or just iyawebdev/testrepo), and gh will suggest/prompt you to create a new file, set the repo up through Github Desktop, etc. You could also go to Settings > Collaborators and add other gh members to your repo using github account names OR email addresses.

[image https://www.iyawebev.com/acad275/lecture_examples/git_commands_table2.png]

- Clone (download) Repo: (One time) Through Github Desktop (logged in under your gh account) go to File >  clone repository, which will set up a git folder/directory on your computer and download the latest code there. Note that GH Desktop may offer to open the project for you in VS Code, through Finder/Explorer, or through Github (in a web browser).

- Publish default/main branch: (One time) This is kind of a weird step, but when you first add a file to the repo (by creating a new one or importing/uploading existing ones), that official creates and published the main/default branch. If you do this through Github Desktop, you have to actually click on the Publish Branch button. If you do it through hithub (website), it happens automatically.

- (One time to start, then repeatedly later) Locally (on your computer) add one or more files and folders. Note: If adding folders through github (web), it does not actually create a folder/directory until you place a file in it.

- Commit (local save): (One time to start, then repeatedly) Save changes to your local repo = Commit -- in GH Desktop, it shoud list "changes" you have made to the repo (b file and line by line), which includes both creating and editing files. Under those changes there is a Commit button, and a box to document your changes. Note you HAVE to enter at least a short summary for every Commit. When you do this, these changes have not been made to the cloud/shared repo. What!?! You have both a local git repo (on your computer) and the shared/cloud gh repo. Think of it kind of like the difference between editing web pages on your computer versus "publishing" then (FTPing) to a web server. You have both local and server versions. So the fact that you saved a change to your local repo does not mean you have changed the cloud/shared/group repo.

-  Push (copy/save changes from local to cloud repo): "Push" changes you made locally (on your computer) to the main (cloud) repo on github. In GH Desktop, once you do a commit you may notice that a Push to origin button appears. This pushes/updates your changes from your local repo to the cloud/guthub repo. Only THEN would members of your team see the changes you have made (and download them to update their code).

- Ok, so now what about getting changes from other members of your team?

- Fetch: Check to see if there are changes to the code/project in github (from other members), and if so copy them down to your local repo. BUT, this has NOT updated your files yet. Copy files from cloud repo to your local repo, but NOT yet to your file system. So after Fetch you generally want to Pull.<.li>

- Pull: Copy/update/pull down changes into your actual codebase/files/file system from your local repo (which has been updated with fetch).

Branches: You can also fork "branches" from your code, basically different versions of the project that are separate from each other. This can be because a person or team is working on a new aspect of a project/product, or it could be that a developer wants to work on a separate branch and intentionally pick when to merge their code into a main branch. For the Dev1 projects, you may or may not need different branches with the relatively short timeline and limited number of builds. Some developers will work on their own separate branches, whereas other teams may commit changes directly to the main branch. Some branch-related git terms of workflow:

- Fork (create new branch): Create a new branch of the project, based on/copied from an existing branch (most often from the "main" branch).

- Clone, fetch and pull, commit and push: All of the normal operations with the repo working on files, but just within a branch.

- Pull Request: Ask (the team/administrator) to migrate/update changes from your branch to the main branch... i.e. update or push code from one branch to another.

For a broader intro to git, please see below two guest lecture decks from former class assistant and ACAD student Anupam Batra.