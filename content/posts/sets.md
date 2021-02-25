---
title: Sets
date: 2021-02-24T20:24:39.004Z
description: similar to arrays
---
Sets were introduced as part of the ES2015 specification. As described by MDN they:


> let you store unique values of any type, whether [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) or object references.

They are similar to arrays but as described above the values must be unique duplicates are not allowed.

They can be initialised through the constructor or with an array of values e.g.#

```javascript
const mySet = new Set()

const mySet2 = new Set(['hello', 'world', 2021])
```

There are a number of methods you can use depending on what you are trying to achieve e.g. size to get the number of values

```javascript
mySet2.size // 3
```

To add and remove values you use the `use` and `delete` methods respectively e.g.

```javascript
mySet2.add(4) // ['hello', 'world', 2021, 4 ]

mySet2.delete(2021) // ['hello', 'world', 4 ]
```

If you wish to remove all the values from a Set, use the `clear` method e.g.

```javascript
mySet2.clear() // Set []
```

You can iterate/loop through a Set using `forEach` or a `for...of` loop e.g.

```javascript
for(let [key, value] of mySet){
  // do something
}

mySet.forEach( (val) => {
  console.log(val)
}
```

To check if an element is present in a Set use the `has` method which will return a Boolean e.g.

```javascript
mySet.has('hello') // true

mySet.has(2021) // false
```

The values and entries methods


You convert to an array if needed e.g. 

```javascript
Array.from(mySet) // Array: ['hello', 'world', 4]
```