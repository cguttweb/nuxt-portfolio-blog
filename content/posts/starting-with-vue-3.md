---
title: Starting with Vue 3
date: 2020-11-29T16:55:13.588Z
description: Vue Mastery intro course
---
I bought myself a year-long subscription to [Vue Mastery](https://www.vuemastery.com) in the Black Friday Sale and although I know some Vue (version 2) I'm keen to learn more and also see the differences between Vue 2 and Vue 3. As a starting point today I have completed the Intro to Vue 3 course on the site and much of the syntax appears to be the same, but there are a few differences. For example, initialising a basic Vue app after setting up and a basic index.html page and importing Vue through the CDN as its the quickest way to get started

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

### Conditional Rendering

This is done using a Vue directive called `v-if` this can be used with `v-else` or on its own e.g.

```html
<p v-if="inStock">Product is in stock</p>
<p v-else>Out of stock</p>

```

### List Rendering
