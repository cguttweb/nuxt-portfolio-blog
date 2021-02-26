---
title: Git
date: 2021-02-25T14:47:55.024Z
description: version control system
---
Git is a version control system for everything for small sites to large scale apps and sites.

The first step is to download and install it on your machine whether your OS of choice is (Windows, MacOS, Linux). Although there are GUIs available e.g. Github Desktop it is easy to get started on the CLI (Command Line Interface) which could be the terminal like or git bash or the built-in terminal in your editor.

You can get started by creating an empty repository (or repo) on your host of choice usually [Github](https://github.com) you then clone that empty repo into your files which creates a copy of this locally and then add your files to this folder. If you already have a folder with files you wish to add to git you can do this with the following commands (which will be shown to you):

```javascript
git remote add origin git@github.com:'YOUR_USERNAME'/'REPO_NAME'.git
git push -u origin master
```

### Key Commands

- `git add`: this command add files to git and makes sure any changes are 'tracked' which are added to thestaging area' - this is the middle man where you ca check any updates/changes before committing
- `git commit`: 
- `git push`: this 'pushes' any changes to the remote repo on github so it is accessible to everyone
- `git pull`: this opposite to push this will 'pull' any updates into your local repo so you have the most recent changes available to you
- git status: this will give you information around your files e.g. whether or not changes have been made and whether they have been tracked
- git rm: remove a file from the 'staging area' if updated by accident
- git log: this will give a list of the most recent commits e.g. date and who committed the updates


### Branching and Merging
