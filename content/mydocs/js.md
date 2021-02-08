---
title: JavaScript
description: Interactive level of web dev that has morphed into a large ecosystem
position: 3
---
### Variables

These are used to store and keep track of information

ECMAScript is the standard and JavaScript is the implementation. JavaScript has become the dominant in web development in the frontend with progress in the support of newer EMCAScript versions being supported in browsers and the use of frameworks like Vue, React and Angular. On the backend Node.js is used in a majority of cases.

`parseInt()`- converts strings to integers
`parseFloat()`- converts to decimal numbers

`Math.random()` - generates a random number between 0 & 1
`Math.floor()` - rounds number down
`Math.ceil()` - rounds number up

<!-- Look up math object -->

### Functions

The key part of JavaScript - a set of instructions to be used over and over again.

**function expression** is a function assigned to a variable e.g.

```javascript
var myFunction = function(){
    alert('This is a test')
}

myFunction() // then you need to call or invoke function
```

Function can be anonymous as above or they can be passed parameters e.g.

```javascript
myFunction2(para1, para2){
  // do something
}
```

**return** keyword = function will stop when it hits return keyword so it will be the last line of function. It can only return _one_ thing - a string, number, Boolean value or the contents of a variable.

Scope is a key thing to remember e.g. global means it can be accessed everywhere local means it is limited to the function in which it is declared.

### Conditionals

```javascript
if(condition is true){
    // do something
} else {
    // do something
}
```

#### Comparison operators

- `</<=` - less than/less than or equal to
- `>/>=` - greater than/greater than or equal to
- `===` - strict equal to
- `!==` - strict not equal to

#### Logical operators

- `&&` - and
- `||` - or

**Truthy** - a value considered true in a Boolean context

- true
- any integer
- any string
- floating point numbers
- `{}`
- `[]`

**Falsy** - a value that evaluates to false in a Boolean context in JS these are:

- false
- null
- NaN (Not a Number)
- undefined
- empty string
- 0 (integer/floating value)

### Loops, Arrays and Objects

Loops are a way of repeating code so are particularly useful for any repetitive tasks. There are different types of loops which one you use depends on your use case.

#### For Loops

A for loop will run until the condition evaluates to false.

```javascript
for(var numbers = 0; numbers < 20; numbers++){
    console.log(numbers)
}
```

#### While Loops

The code inside the loop will run over and over as the condition is met

```javascript
while(condition here is true){
  // Do something
}

var count = 0
while(count < 25){
    console.log(count)
    count += 1
}
```

#### Do While Loops

These will run until the condition evaluates to false

```javascript
var myNumber = 0;

do {
    myNumber += 1
    console.log(myNumber)
} while(myNumber < 10)
```

### JavaScript and the DOM

#### Getting and setting text

There are a couple of ways to get and update text using JavaScript.

- **textContent** - this will get the content of all elements including any hidden elements
- **innerText** -  similar to textContent but it will ignore any hidden elements
- **innerHTML** - this functions the same way as textContent it will read and replace elements on a page. It will replace everything between the opening and closing tag.

```javascript
let myHeading = document.querySelector('h1')
// this gets the text
myHeading.textContent
// this is assigning of a new value and changes text
myHeading.textContent = 'This is my new header'
```

You have `<ul>` element with `<li>` and assign a new value it will replace existing values e.g.

```javascript
let list = document.querySelector('ul')
ul.innerHTML = `<li>new list value</li>`
```

#### Selecting Elements

There are a number of ways to select elements with javascript but the two most commonly used are:

- document.getElementById('name')
- document.querySelector('any css selector')

**getElementById** - select an element based on its id

```javascript
<input type="text" id="firstname" name="firstname">

var firstName = document.getElementById('firstname')
```

**querySelector** - this will match the first element of given selector

**querySelectorAll** - this will match all elements of given selector and return a nodelist. (A nodelist could be a static collection meaning any changes to DOM are not reflected or it could be live collection e.g. Node.childnodes so DOM changes are shown in the collection. convert to an array?)

**getElementsByClassName** - this will return an HTMLCollection of matching elements

**getElementsByTagName** - this returns an HTMLCollection which is 'live' meaning any updates to DOM are automatically reflected

#### Creating elements

To create new elements use

`document.createElement('selector')`

```javascript
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is my new paragraph';

// Elements need to be added to the DOM before it appears on the page
body.appendChild('newParagraph')
```

### Array Methods

An array is a way of storing multiple elements I built a Vue app to try and help me remember these called [array-helper](https://array-helper.vercel.app)

**push** - add element to an array
**pop** - remove element from an array
**indexOf** - gives index value of a given element (starting from 0)
**shift** - removes first element of an array
**unshift** - add elements to the front of an array
**join** - add elements of an array together in a string
**sort** - sorts an array alphabetically
**concat** - join two arrays together
**slice** - return a copy of portion of an array into a new array. It does not modify existing array
**splice** - changes array contents by removing existing elements and/or adding new elements

**Array.from** - converts an array-like structure into an actual array

### Events

The event interface represents an event that happens in the DOM. These can either be user generated e.g. mouse click or keyboard press or through APIs e.g. a paused video.

There are many types of events e.g. click, mouseover, mouseoff, keypress (see MDN list)

**Event handler/listener** - these are the functions that handles or responds to the event

**Event target** - this is the object on which the event occured or is associated with. When referring to an event both the type and target need to be included e.g. a click event on a button or load on a window object.

<!-- PROMISES -->
