---
title: Starting with Vue 3
date: 2020-11-29T16:55:13.588Z
description: Vue Mastery intro course
---
I bought myself a year-long subscription to [Vue Mastery](https://www.vuemastery.com) in the Black Friday Sale and although I know some Vue (version 2) I'm keen to learn more and also see the differences between Vue 2 and Vue 3. 

As a starting point today I have completed the Intro to Vue 3 course on the site and much of the syntax appears to be the same, but there are a few differences. For example, initialising a basic Vue app after setting up and a basic index.html page and importing Vue through the CDN as its the quickest way to get started

```Vue
// Vue 2

const app = new Vue({
  el: '#app',
  data: {
   name: 'Jane'
  }
})

// Vue 3

const app = Vue.createApp({
  data(){
    return {
      name: 'Jane'
    }
  }
})
```
Once this is set up you need to import and 'mount' the app to the DOM e.g.

```javascript
const mountedApp = app.mount('#app')
```

### Attribute Binding

This dynamically binds an attribute to an expression e.g.

```Vue

<a v-bind href="url">My Website</a>
...
data(){
  return {
    url: 'https://mywebsite.com'
  }
}
```
Shorthand for this is simple `:`

### Conditional Rendering

This is done using a Vue directive called `v-if` this can be used with `v-else` or on its own e.g.

```html
<p v-if="inStock">Product is in stock</p>
<p v-else>Out of stock</p>
```

You can also chain logic using `v-if/v-else-if/v-else` like a standard js if-else conditional.

Another option is to use `v-show` this is different because instead of removing the element from the DOM as v-if does instead it toggles the visibility. This is the better option for performance if you have an element that changes often.

### List Rendering

This uses `v-for` directive and it works like a classic for loop in javascript e.g.

```html
<li v-for="items in items" :key="item.id">{{ item }}</li>
```
MAke asure to add a key to give each element a unique key for Vue to be able to keep track of them.

### Event Handling

You listen for events using the `v-on` directive and its event type e.g. click, mouseover(equivalent to hover)

```html
<button v-on:click="dosomething">
// using shorthand
<button @click="doSomething">
```

A simple example would be adding values to keep score or add values to a cart e.g.

```html
<button @click="addToScore">
```

```Vue
methods: {
  addToScore(){
    this.score += 1
  }
}
```

### Class and Style Binding

### Computed Properties

These calculate values and are useful because they cache these values and will only update when one of the dependencies change e.g.

```vue
computed: {
  title(){
    return this.myName +  ' ' + this.myProduct
  },
  onSale(){
    if(this.onSale) {
      return this.myName + ' ' + this.myProduct + ' is on sale!'
    }
      return ' '
  }
}
```

### Components and Props

Components are the building blocks of Vue apps that are reusable. When creating an example the structure is as follows:

```vue
app.component('component-name', {
props: (to pass values),
template: `` (add html here),
data(){ },
methods: {},
computed:{}
})
```

In most cases you will use Single File Components (SFCs) which are what is created when using the Vue-CLI to scaffold an app.

### Communicating Events