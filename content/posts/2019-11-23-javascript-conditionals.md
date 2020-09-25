---
layout: posts
title: 'JavaScript Conditionals'
date: 2019-11-23
---

Conditionals are a key part of every programming language but this post is specifically related to JavaScript.<br>

**Why use them?** They can used to compare or check values e.g. a simple quiz if the answer is correct add 10 points to score if not no points added.

The simplest version is the use of if/else statements e.g.

```javascript
if(condition is true){
    // do something
} else {
    // do something else
}
```

You can chain any number of else if statements e.g.

```javascript
if (true) {
  // do something
} else if (condition) {
} else if (condition) {
} else if (condition) {
} else {
  // do something
}
```

While this will work if you have multiple conditions it can quite quickly get messy, but there is a shorthand you can use to make it less verbose. This is known as the tertary operator `?` which follows format:

```javascript
(condition) ? iftrue : iffalse;
```

It is important to remember that **_all_** values in JavaScript are considered <abbr title="Truthy value is a value considered true in a Boolean context.">truthy</abbr> _except_ those defined as <abbr title="A value considered false in a Boolean context.">falsy</abbr> these are:

- false
- undefined
- null
- NaN (Not a Number)
- 0
- ' ' (empty string)
- 0n


