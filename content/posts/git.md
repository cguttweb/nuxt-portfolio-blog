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
```

```javascript
git add . // using dot will add all of your files instead of having to do them individually
```

* `git commit`: this commits or finalised your changes when using this you need to add `-m` which is a relevant message explaining your changes e.g.

```git
git commit -m 'first file'

[master (root-commit) 13ae2e2] first file
 1 file changed, 12 insertions(+)
 create mode 100644 index.html
```

* `git push`: this 'pushes' any changes to the remote repo on Github so it is accessible to everyone. Using the test repo because it is the first push up to an empty repo you'll need to include `-u` to make sure branch is setup to track correctly e.g.

```javascript
git push -u origin master // command to push up to git repo then you'll see something like this:

Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 398 bytes | 398.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:cguttweb/test-repo.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

* `git pull`: this opposite to push this will 'pull' any updates into your local repo so you have the most recent changes available to you
* `git status`: this will give you information about your files e.g. whether or not changes have been made and whether they have been tracked e.g.

```javascript
// Using git status on my test repo:

Your branch is up-to-date with 'origin/master'.

nothing to commit, working tree clean // meaning there are no untracked changes and everything is up to date

If I make changes to my index file:

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")

You'll need to add a new commit message then when using git status again:

Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

then finally because this branch is being tracked you'll just need to use:

```
git push // You'll see something like:

Writing objects: 100% (3/3), 394 bytes | 394.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:cguttweb/test-repo.git
   13ae2e2..c8037ac  master -> master
```


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