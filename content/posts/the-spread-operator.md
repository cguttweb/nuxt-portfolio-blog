---
title: The Spread Operator
date: 2021-04-11T18:37:59.880Z
description: A great addition to modern javascript
---
The Spread Operator which uses the `...` syntax was introduced in ES6 as a way of easily extracting all the elements from an array and it can be used where you would write comma separated values e.g. arrays or passing values to a function.

It can be used to create a shallow copy of an array like using `array.slice` it will not mutate the existing array e.g.

```javascript
const myArr = [12, 24, 'hello', 'world']
const myNewArr = [...myArr] // [12, 24, 'hello', 'world]
```

It is useful as a more succinct way of joining/concatenating arrays e.g.

```javascript
// Easily concat arrays
const myNumsArr = [24, 36, 48, 56]

const myNumsArr2 = [5, 10, 12, ...myNumsArr]
// [5, 10, 12, 24, 36, 48, 56]

// or join two arrays together note this will not work with multidimensonial arrays

const myTextArr = ['Hello', 'world', 'let\'s']
const myTextArr2 = ['learn', 'javascript']

const fullText = [...myTextArr, ...myTextArr2]
// ['hello', 'world', 'let\'s', 'learn', 'javascript']

```

Since ES2018 the spread operator can now also be used with objects. 

```javascript
const myObj = {
  name: 'Sarah',
  age: 28
}

const anotherObj = {...myObj}

const myObjCopy = {...myObj} 
myObjCopy.name = 'Jessica' // this will name of the new copied object not the original

// { name: 'Jessica', age: 28 }

```