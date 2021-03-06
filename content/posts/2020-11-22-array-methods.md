---
title: Array Methods
date: 2020-11-22T12:06:31.591Z
description: A post on some array methods
---
There are many array methods available in JavaScript with more being added all the time as a new version of ECMAScript is released. 

- **includes** - this method will check whether a 



There are a few methods which do the same thing and can reduce the need to use for loops in many cases it is knowing when to use each of them.

```javascript
let colours = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']

// Using for loop

for(var i = 0; i < colours.length; i++){
  console.log(colours[i])
}

```

- **forEach** - this works in the same way as a for loop but uses less code and is a more efficient way of coding. It provides an iterator function when called on an array and runs once for each element in your array. e.g.

```javascript
let images = [ 
  { height: 100, width: 400 }, 
  { height: 40, width: 200 }
]

let areas = []

images.forEach((image) => {
  let imageArea = image.height * image.width
  areas.push(imageArea)
})

// areas = [40000, 8000]
```

- **map** - this is perhaps the most commonly used method as it will create a new array instead of mutating or changing an existing array e.g.

```javascript
let images = [ 
  { height: '100px', width: '400px' }, 
  { height: '40px', width: '200' }
]

let imageHeights = images.map(image => image.height)

// returns ["100px", "40px"]
```

- **filter** - this creates a new array with elements that pass the test of a given function and is commonly used for filtering lists e.g.

```javascript
const numbers =  [12, 34, 56, 43, 21, 19, 65, 78, 38]

let filterNumbers = []
filterNumbers = numbers.filter((number) => number < 50 )
// returns [ 12, 34, 43, 21, 19, 38 ]

```

- **find** - this is used to iterate over an array until it returns true when this happens it will exit and return the value it finds e.g.

```javascript
// Simple Example

let users = [
  { name: 'Jennifer' },
  { name: 'Rachel' },
  { name: 'Simon' }
]

users.find((user) => user.name === 'Simon')
```

- **every** - this will look at all array values and is like using `&&` operator so unless all values match this will return false.

```javascript

let users = [
  { id: 1, hasSubmittedForm: true },
  { id: 3, hasSubmittedForm: false },
  { id: 8, hasSubmittedForm: true }
]

let hasSubmitted = users.every(user => user.hasSubmittedForm === true)

// returns false as not everyone has submitted the form
```

- **some** - this works by looking at some values like using `||` operator between values so if at least one matches value returned it will be true e.g.

```javascript

let users = [
  { id: 1, hasSubmittedForm: true },
  { id: 3, hasSubmittedForm: false },
  { id: 8, hasSubmittedForm: true }
]

let hasSubmitted = users.some(user => user.hasSubmittedForm === true)

// returns true
```

- **reduce** - this method is one of the most flexible. You pass in an initial value which is sent to function through every iteration. It will condense to a single value e.g.

```javascript
let trips = [ {distance: 22 }, { distance: 35 }, { distance: 5 }]

let totalDistance = trips.reduce((previous, trip) => { return previous + trip.distance }, 0)

// totalDistance returns 62
```

