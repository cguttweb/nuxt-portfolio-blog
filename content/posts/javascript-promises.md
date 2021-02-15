---
title: JavaScript Promises
date: 2021-02-14T17:09:13.997Z
description: used asynchronously e.g Fetch API
---
A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. It is a returned object to which you attach callbacks instead of passing callbacks to a function.

JavaScript Promises have three states:

- pending - this is the default or initialised state
- resolved - this means that the operation was successfully completed
- rejected - when the operation has failed

### Creating Promises

A Promise is a constructor function so the `new` keyword is needed e.g.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // do something
})
```