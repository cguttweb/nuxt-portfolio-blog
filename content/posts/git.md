---
title: Working with Git
date: 2021-02-25T14:47:55.024Z
description: version control system
---
Git is a version control system for everything from small sites to large-scale apps and sites.

The first step is to [download](https://git-scm.com/download) and install Git on your machine whether your OS of choice is (Windows, macOS, Linux). Although there are GUIs available e.g. Github Desktop it is easy to get started on the CLI (Command Line Interface) which could be the terminal like git bash or the built-in terminal in your editor.

You can get started by creating an empty repository (or repo) on your host of choice mine is [Github](https://github.com) you then clone that empty repo into your files which creates a copy of this locally and then add your files to this folder. I created an empty test repo on Github and I get the following instructions:

![empty git repo](/uploads/empty-repo.png "empty git repo")

You can create a new repo on the command line with the instructions shown above or if you already have a folder with files you wish to add to git you can do this with the following commands (as shown above):

```git
git remote add origin git@github.com:'YOUR_USERNAME'/'REPO_NAME'.git

git push -u origin master
```

In this case, I'm going to use the quick setup option and simply clone/copy the repo onto my PC

![git quick setup](/uploads/git-quick-setup.png "quick start")

```javascript
git clone git@github.com:cguttweb/test-repo.git // it's recommended to use SSH rather than HTTPS option
// It will say the following
Cloning into 'test-repo'...
warning: You appear to have cloned an empty repository. // this is fine as we've not created anything yet

cd test-repo then I use git status command and see:

Cloning into 'test-repo'...
warning: You appear to have cloned an empty repository.
```

Create a file `index.html` in the folder and then run git status again this time you will see:

```javascript
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)
``` 

Next you run `git add index.html` this will enable got to recognise your file and track any changes to it. 

### Key Commands

* `git add`: this command add files to git and makes sure any changes are 'tracked' which are added to the 'staging area' - this is the middle man where you can check any updates/changes before committing

```javascript
// using the repo above

git add index.html // adds the file to track any changes
```

Then using git status you'll see the following:

```javascript
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   index.html

git add . // using dot will add all of your files instead of having to do them individually
```

* `git commit`: this commits or finalised your changes when using this you need to add `-m` which is a relevant message explaining your changes e.g.

```git
git commit -m 'updated footer'
```

* `git push`: this 'pushes' any changes to the remote repo on Github so it is accessible to everyone
* `git pull`: this opposite to push this will 'pull' any updates into your local repo so you have the most recent changes available to you
* `git status`: this will give you information around your files e.g. whether or not changes have been made and whether they have been tracked
* `git rm`: remove a file from the 'staging area' if updated by accident
* `git log`: this will give a list of the most recent commits e.g. date and who committed the updates
* `git diff`: this will show differences between original files and the most recent updates

### Branching and Merging

* `git branch`: this is most useful for larger software/app projects where you can complete updates without modifying the original content e.g.

```git
git branch
* master

git branch footerfix // creates a new branch called footerfix

git branch
 - master
 - footerfix
```

The default branch will be the `master` but you can create several updates for different things you may be working on. 

Switching branches use the `git checkout BRANCH_NAME` e.g.

```git
git branch
* master // this will be the default

git branch footerfix // switches from the master to the new footer-fix branch
```

Once you are happy with the fix you merge this back into your `master` branch:

```git
git checkout master // switch from footerfix to master branch

git merge footerfix // merge the fix back into the master branch then you can push to production
```

To delete a branch use the `-d` flag:

```git
git branch -d footerfix
```