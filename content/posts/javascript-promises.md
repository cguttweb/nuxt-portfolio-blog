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

A Promise is a constructor function so the `new` keyword is needed. It takes a function as an argument with two parameters - resolve and reject e.g.

```javascript
const myPromise = new Promise((resolve, reject) => {
  if(condition is true) {
    resolve('Promise resolved')
  } else {
    reject('Promise rejected')
  }
})
```

### Resolved Promises

Once a Promise is resolved you'll want to do something with the response you get back this is where the `then` method is used. This will execute **as soon as** the Promise is resolved.

```javascript
... resolve('Promise resolved')
.then(response => {
  console.log(response)
}
```

### Rejected Promises

If a Promise is rejected the method used to handle this is `catch` e.g.

```javascript
... reject('Promise failed')
.catch(error => {
  console.log(error)
}
```

There is an additional method that can be used with Promises called `finally` which is useful for doing some cleaning up once the Promise is finished regardless of whether it was resolved or rejected.

This is an example using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) which uses Promises under the hood and the free open source [Random User API](https://randomuser.me/) from a tutorial I found which helped me understand the Fetch API  better.

```javascript

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const url = 'https://randomuser.me/api/?results=10';

fetch(url)
 .then((resp) => resp.json())
 .then((data) => {
   let authors = data.results;
   return authors.map((author) => {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
   img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
     })
   })
  .catch((error) => {
    console.log(error);
});
```