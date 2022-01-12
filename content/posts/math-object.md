---
title: Math object
date: 2021-07-04T15:58:28.174Z
description: a built-in object
---
As described by MDN: 
> This is a built-in object that has properties and methods for mathematical constants and functions

This is not an extensive list but includes some of the most commonly used options

**Math.PI()** - this static property gives the ratio of the circumference of a circle to its diameter c.3.14159 e.g.
```javascript
console.log(Math.PI) // 3.141592653589793
```

**Math.random()** - this generates a random number between 0 and 1 (exclusive) often used with other methods

**Math.floor()** - this returns the largest integer/whole number less than or equal to a given number

**Math.ceil()** - this rounds a numberup to the nearest integer

**Math.round()** - returns the value of a number rounded to nearest integer

**Math.trunc()** - returns integer part of a number removing fractional digits

**Math.max()** - this returns the biggest of zero or more numbers given as parameters, or NaN if any parameter isn't a number and can't convert into 1

**Math.min()** - a static function returns lowest-valued number passed to it, or NaN if any isn't a number

**Math.abs()** - this returns the absolute value of a number. A static method if passed empty object, undefined/empty value or non-numeric string returns NaN and null, empty string or an empty array returns 0

**Math.sqrt()** - returns the square root of a number