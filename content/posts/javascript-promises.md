---
title: JavaScript Promises
date: 2021-02-14T17:09:13.997Z
description: used asynchronously e.g Fetch API
---
JavScript Promises have three states:

- pending - this is the default or intialised state
- resolved - 
- rejected - when failed

A Promise is a constructor function e.g.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // do something
})
```