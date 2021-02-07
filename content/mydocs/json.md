---
title: JSON
description: JavaScript Object Notation
position: 7
---

JSON stands for JavaScript Object Notation and can be any data type not just arrays and objects e.g. a single number or string is valid JSON.

### Methods

`JSON.parse()` - converts from a string back to an object

`JSON.stringify()` - converts object to a string

You can set XHR request to convert JSON response directly to JS object using:
`request.responseType = 'json'` if not you can use `JSON.parse(object)` to convert from a string back to an object to be able to access data.

XHR.open('GET', url) - these are the mandatory requirements but there is an otpional 3rd parameter `async` - it is probably best not to include as if this is set as true or not it is processed asynchronously. It is rare to use synchronous as it is will often negatively UX.
