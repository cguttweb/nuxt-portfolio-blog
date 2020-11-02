---
title: State management with Vuex
date: 2020-10-25T17:45:22.153Z
---
[Vuex](https://vuex.vuejs.org/) is the state management library for larger apps where state management is really needed.

If using the vue-cli to scaffold an app you have the option to select it as part of your setup but if you're adding it to an existing app use `npm install vuex`. 

Common way of using it is to create a `store.js` file in the store folder and inside that:

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex) // this is to register it

// then create a new store

export const store = new Vuex Store({
  counter: 0
})

```

you need to import into `main.js` and ass you would the router:

```javascript
new Vue({
...
store
})
```

To be able to access this in components use $store e.g.
```javascript
methods: {
  addOne(){
    this.$store.counter++
  }
}
```