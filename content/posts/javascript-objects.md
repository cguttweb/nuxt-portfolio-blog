---
title: JavaScript Objects
date: 2021-02-02T18:42:37.516Z
description: A post on objects in javascript
---
Objects are a key part of JavaScript. In their most simple form, they are simply key-value pairs made up of properties (keys) and values e.g.

```javascript
let myTeam {
  name: 'Liverpool',
  stadium: 'Anfield',
  city: 'Liverpool',
}

// In this example the properties/keys are name, stadium and city with Liverpool, Anfield and Liverpool being the values
```

### Adding Properties

### Checking Properties

To check if an object has a specific property you can use the `hasOwnProperty(propname)` method this will return a boolean based on the outcome of this check against property e.g.

```javascript
let myDog {
  name: 'Hector'
  age: 9
}

myDog.hasOwnProperty('age') // returns true as this prop exists in the object
myDog.hasOwnProperty('loves') // returns false as this prop does not exist in the object
```

### Remove Properties

To remove properties from an object use the `delete` keyword e.g.

```javascript
let myTeam = {
  name: 'Liverpool',
  stadium: 'Anfield',
  city: 'Liverpool',
}

delete myTeam.city // myTeam: { name: 'Liverpool', stadium: 'Anfield' }
```

- **Object.keys()** - This method will return an array of all the keys stored in an object which you pass in as a parameter e.g. 

```javascript
let teams = {
  Liverpool: {
    founded: 1892,
    manager: 'Jurgen Klopp'
  },
  Everton: {
    founded: 1888,
    manager: 'Carlo Ancelotti'
  },
  Southampton: {
    founded: 1885,
    manager: 'Ralph Hasenhuttl'
  }
}

Object.keys(teams) // ['Liverpool', 'Everton', 'Southampton']
```
