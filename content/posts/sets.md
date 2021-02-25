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
