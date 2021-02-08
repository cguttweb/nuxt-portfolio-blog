---
title: State management with Vuex
date: 2020-10-25T17:45:22.153Z
---
[Vuex](https://vuex.vuejs.org/) is the state management library for larger apps where state management is really needed.

If using the vue-cli to scaffold an app you have the option to select it as part of your setup but if you're adding it to an existing app use `npm install vuex`. 

A common way of using it is to create a `store.js` file in the store folder and inside that:

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex) // this is done to register it

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

It can improve things but it won't fix all issues as if using in multiple components can lead to duplicated code so problematic for large apps if using this way. 

Instead of directly accessing the state use a getter. Getters are added as a property in store.js file. You can add as many as needed and name them however you wish. However you can come across issues though as if using getters in an component e.g.
```
computed: {
  counter(){
    return this.$store.getters.countDouble
  }
}
```

if you have several getters in computed properties there can also be issues. There is a helper function called `mapGetters`
`import { mapGetters } from 'vuex'`

you can update computed properties to do calculations in the background, however, when adding mapGetters you will be unable to your own computed properties. There is a way around this in ES6 using a spread operator e.g. 

```vue
computed: {
...mapGetters([
  'countDouble',
  'countClicks'
  ]),
  myComputedProp(){}
}
```

### Mutations

These change state and work the same way as getters and can be set up in the `store.js` file. As with getters, you can also use mapMutations e.g.

```javascript
import { mapMutations } from 'vuex

methods: {
  ...mapMutations([
    'addOne'
  ]),
// can add own methods here
}
```

The important thing to remember when using mutations **cannot** use asynchronous code e.g. setTimeout in them as can get lost on when the mutation is happening. **They must run synchronously**.

To get around this you can use actions e.g. 
```javascript
...
asyncaddOne: ({ commit }, payload) => {
  setTimeout(() => {
    commit('addone') payload.by)
  }, payload.duration)}
  })
}
```
```javascript
import { mapActions } from 'vuex'

...mapActions([
'addone'...
])

...
<button... asyncaddOne({ by: 50, duration: 500 })>
```

The payload is the data passed to mutate the state