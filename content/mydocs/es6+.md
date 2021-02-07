---
title: ES6/ES2015
description: ES2015+ includes some of the new additions to the latest JS spec
position: 4
---

**ES6** or **ES2015** was the 6th version of ECMAScript and although browser support has improved. (Wes Bos has a great course on these updates [here](https://es6.io))

### Variables

**const** - as the name suggests the value is constant it should not change and is usually the best option. These cannot be redefined and prevents arrays and objects from being overwritten or reassigned.

**let** - this is used in the same way as `var` for any changing values e.g. a score or counter variable. This is useful in for loops e.g.

```javascript
const buttons = document.getElementsByTagName('button')
for(let i = 0; i < buttons.length; > i++){
  const button = buttons[i];
  button.addEventListener('click', function(){
    alert('Button' + i + 'pressed')
  });
}
```

**_Const_** should be used to declare variables should be the first option when creating variables. Both of these have block level scoping unlike `var` which can be global and local and can result in some variables being accidentally overwritten or reassigned.

### Template Literals

These work in the same way as strings and use backticks ` `` ` rather than single or double quotes and are particularly useful for multi-line strings e.g.

```javascript
const listOfFruits =
'<ul>' + '<li>Oranges</li>' + '<li>Strawberries</li>' +
'<li>Blueberries</li>' +
'<li>Bananas</li>' +
'</ul>' // converting this to template literal is straightforward as shown below

const fruitsList =
`
<ul>
  <li>Oranges</li>
  <li>Strawberries</li>
  <li>Blueberries</li>
  <li>Bananas</li>
</ul>
`

```

#### String Interpolation

You can add variables directly into a string e.g.

```javascript
const name = `Simon`
console.log(`Hello ${name}`) // JS expressions can be added to curly braces

function whatILike(item){
  return 'I like ' + item
}

const sentence = `<p> ${WhatILike(apples)}`

```

### Arrow Functions

This can make code smaller

```javascript
var sayName = function(){
  // do something
}

// this becomes

const sayName = () => {
  // do something
}
```

Using arguments work the same way with a single or multiple argument in a function e.g.

```javascript
const add = (a, b) => {
  return a + b
}
```

#### Concise arrow function syntax

If using a single argument you can remove the partheses and if using one line return keyword and curly braces can be removed e.g.

```javascript
const addValues = (a, b) => a + b;
```

This is an implicit return meaning that the results of expression are automatically returned.

```javascript
const numbers = [2, 4, 6, 8]
// ES5 syntax
numbers.map(function(number){
  return number * 2
})
// ES6 syntax
numbers.map(number => number * 2)

```

### Default Function Arguments

As the name suggests rather than simple passing parameters to a function you can pass default values e.g.

```javascript
function addNumbers(a, b){
  if(a === undefined){
    a = 0;
  }
  if(b === undefined){
    b = 0;
  }
  return a + b
}

// refactored with default values
function addNumbers(a = 0, b = 0){
  return a + b
}

```

### Rest and Spread Operators

Both the rest and spread operators are indicated by `...` syntax but they have slightly difference use cases.

**Rest operator** - this collects all the arguments passed to a function e.g.

```javascript
function totalSum(num1, num2, ...otherNums){
  let numbers = [1, 2, 3, 4, 5]
  return numbers.reduce(function(acc, number){
    return acc * number
  }, 1)
}
// refactored
function totalSum(...numbers){
  return numbers.reduce(function(acc, number){
    return acc * number
  }, 1)
}
```

**_Important_** you can only use one rest parameter and it must be the last parameter included as shown above using multiple e.g.

```javascript
function numbers(...num1, ...num2, ...otherNums){
 // will not work
}
```

**Spread operator** - this is an alternative to using the concat method as it gathers all the values of multiple arrays together e.g.

```javascript
let iceCreamFlavours = ['mint chocolate', 'raspberry', 'vanilla']

let otherFlavours = ['chocolate', 'strawberry', 'toffee']

let allFlavours = [...iceCreamFlavours, ...otherFlavours]
```

### Destructuring

Destructuring was introduced in ES2015 (ES6) as a way to reduce duplicate code and can be used with array and objects e.g.

```javascript
// simple array example
const footballTeams = ['Liverpool', 'Everton', 'Chelsea', 'Manchester City', 'Southampton']

const [ team ] = footballTeams
// this will pull out the first value in this case Liverpool

// simple object example
// ES5
var myExpenses = {
  type: 'Business',
  amount: '£40'
}
var type = myExpenses.type
var amount = myExpenses.amount

// destructuring - using {} is creating a new variable that references the original object
const { type } = myExpenses
const { amount } = myExpenses
// this can be further reduced to a single line
const { type, amount } = expense
```

You can also use destructuring with objects and arrays at the same time/together e.g.

```javascript

const teams = [
  { name: 'Liverpool', location: 'Liverpool' },
  { name: 'Chelsea', location: 'London' },
  { name: 'Everton', location: 'Liverpool' },
  { name: 'Southampton', location: 'Southampton' },
  { name: 'Manchester City', location: 'Manchester' }
]

const [{ location }] = teams

// This works outside in so will access the array first and then the object so in this case it will log Liverpool
```

### Classes

Classes are special functions they have been described as syntacical sugar as underneath the hood they are still prototype based.

```javascript
// A simple example

class Name {
  constructor(data){
    this.name = data.name
    this.age = data.age
  }
}

let Sarah = new Name({
  name: 'Sarah',
  age: 22
})
```

```javascript
class Car {
  constructor({ title }){
    this.title = title
  },
  // this is a method
  drive() {
    return 'vroom'
  }
}
```

Classes can inherit from other classes this is known as extending classes e.g.

```javascript
class Toyota extends Car {
  constructor(options){
    super(options) // Car.constructor
    this.color = options.color
  }
  honk(){
    return beep
  }
}


const toyota = new Toyota({
  color: 'red',
  title: 'driver'
})

toyota.drive() // returns vroom
```

**extends** - this gives access to methods/setup for the initial Car class

***super** keyword - this calls the parent constructor in this case Car - don't use destructuring for this.

### JavaScript Modules

Using modules can help with maintainability of your code. **Note they won't work in IE**

- use of import and export keywords
- control access
- encapsulate code
- reference its own dependencies

Things to note:

- 1 module per file
- exports are static
- modules are singleton whichever file uses it receives the same instance
- properties are bound

#### Named Exports

If you are exporting at the bottom of a file rather than through a function it needs to be a list e.g. `export { getSessions }` curly braces are important as it will not work without them.

#### Default Exports

You can only have one as a default e.g.

```javascript
export { getSessions as default, named exports list }
```

#### Aggregating Modules

This makes everything into one import

You'll need to add `type="module"` onto the script tag e.g. `<script src="app.js" type="module"></script>`

use `*` to import everything from a file
