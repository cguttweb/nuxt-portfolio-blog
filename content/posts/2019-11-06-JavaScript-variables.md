---
layout: posts
title: 'JavaScript variables'
date: 2019-11-06
---

Prior to the release of ECMASCript 6 (it may also be referred to as ES6 or ES2015) there was only one way to declare variables in JavaScript and that was using `var` e.g. `var score = 0`. However there were sometimes issues with using this as they could either be in the local or global scope so values could be overwritten or accidentally reassigned.

In ES6 there were two new options for declaring variables introduced const and let.

`const` or constant should be used as the default option when declaring variables.

`let` is for local declarations or any value that is set to change e.g. a counter or score variable.

The major difference between these two options and var is they are _block_ scoped. Before this if a variable was declared within a block, it is local to the function in which it is declared meaning there is the possibility that a variable could be overwritten.
