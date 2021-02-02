---
title: JavaScript Objects
date: 2021-02-02T18:42:37.516Z
description: A post on objects in javascript
---
Objects are a key part of JavaScript. 

### Checking Properties

To check if an object has a specific property you can use the `hasOwnProperty(propname)` method this will return a boolean based on the outcome of this check against property e.g.

```javascript
var myDog {
  name: 'Hector'
  age: 9
}

myDog.hasOwnProperty('age') // returns true as this prop exists in the object
myDog.hasOwnProperty('loves') // returns false as this prop does not exist in the object
```