---
layout: posts
title: 'String methods'
date: 2020-02-22
author: 'Chloe'
---

Some commonly used methods for strings include:

- **indexOf** - this method returns the index of the specified search term. If multiple versions it will give the index of the first instance and will return -1 if the search term cannot be found. This method can also be used for arrays which are also zero indexed. **This method is case-sensitive**

```javascript
const myStr = 'Monday is the first day of the week';
myStr.indexOf('w'); // returns 31
myStr.indexOf('first'); // returns 14
myStr.indexOf('First'); // returns -1 as this does not exist in the string
```

- **lastIndexOf** - works the same way as the above but starts at the end of the string
- **slice** - it takes part of string and returns a new string it does _not_ modify the original. Note it is zero indexed and spaces count as characters.The first parameters is the starting index and the optional 2nd parameter if included is the ending index. Negative numbers will count backwards from the end of the string.

```javascript
const myString = 'This is a randomly typed string';
myString.slice(8); // returns a randomly typed string
myString.slice(1, 7); // returns his is
myString.slice(-6); // returns string
myString.slice(-6, -4); // returns st
```

- **toLowerCase** - this method will convert values to all lowercase particularly useful when creating anything with searches, comparisons or sorting data

```javascript
const searchTerm = document.querySelector('#search').value;
searchTerm.toLowerCase();
```

- **toUpperCase** - as above but converts values to uppercase
- **concat** - combines the text of 2 strings and return a new string e.g.

```javascript
const myStr = 'This is a string ';
const myStr2 = 'This is another string ';

myStr.concat(myStr); // returns `This is a string This is another string`
```

- **replace** - this method as the name suggests will take part of an existing string and replace it.

```javascript
const myStr = 'This is an example string used for testing purposes';
const myNewStr = 'and this is my replacement string.';
myStr.replace('purposes', myNewStr); // returns This is an example string used for testing and this is my replacement string
```

- **split** - this method turns a string into an array of strings separating it at each occurence of the specified separator e.g.

```javascript
const myUrlString = `https://www.google.co.uk?blog=newpost&testing=mytest`;
myUrlString.split('?'); // returns (2) ["https://www.google.co.uk", "blog=newpost&testing=mytest"]
myURLString.split('?')[0]; // returns "https://www.google.co.uk"
myURLString.split('?')[1]; // returns "blog=newpost&testing=mytest"
```

- **length\***- gives the length of string in characters (note spaces count towards this number)

```javascript
const myStr = 'This is a new string created for showing an example';
myStr.length; // returns 51
```

- **trim** - another super useful method used to remove any whitespace at the beginning and end of a string e.g.

```javascript
const myString = '   This is a string with a lof whitespace at either end    ';
myString.trim(); // returns 'This is a string with a lof whitespace at either end';
```

- **match** - returns the result of matching a string against regex

With the introduction of ES2015 (ES6) there were some new string methods added to the specification. These methods are:

**startsWith**
**endsWith**
**includes**

All of these can take an optional parameter

**startsWith** - This method checks whether a strings starts with specific character(s) and will return the according Boolean value. The second parameter is the index of where the search should start.

**endsWith** - It works as above but checks the end of a string.

```javascript
let myStr = 'Liverpool FC are the best team in the world!';
myStr.endsWith('world!'); // returns true
myStr.endsWith('?'); // returns false
```

**includes** - This method is used to search for a matching string and will return the relevant Boolean value.

\***N.B.** this method is case-sensitive

A simple example:

```javascript
const myString = 'This is a random string!';
const myString2 = 'This is another string!';

myString2.includes(myString); // returns false
myString.includes('random'); // return true
```
