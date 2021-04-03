---
title: javascript scoping
date: 2021-04-03T12:24:24.531Z
description: different types of scope
---
<!-- While working on my way through my [complete js course](https://www.udemy.com/course/the-complete-javascript-course/) there has been a few videos on how javascript works behind the scenes.-->

Scoping = the organisation and access of variables

**Lexical scoping** - where scoping is controlled by how functions and blocks are placed in the code e.g. a function inside another function has access to the variables from the first function. 

Scope = space or environment where the variable is declared

- **global scope** - top-level code variables are available everywhere e.g. `var`
- **function scope** - also known as local scope variables are only available inside the function. If attempting to access outside of the function there will be a reference error.
- **block-level scoping** - this as introduced in ES6 and is **only** available to variables declared with `let` and `const`

**Note: ES6 in strict mode functions are also block scoped**