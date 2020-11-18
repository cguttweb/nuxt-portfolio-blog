---
title: Connecting to servers via http
date: 2020-11-18T16:20:02.797Z
---
This is done using vue-resource `npm install vue-resource -D` to install as a dev dependency and add it to `main.js` file like this:

```javascript
import VueResource from 'vue-resource'

Vue.use(VueResource)
```
To send a POST request: 

this.$http.post(url, data to send) e.g. in example project

```javascript
this.$http.post('filename.json', this.user)
.then(resp => { 
  console.log(resp) 
})
```

vue resource uses promises so can use .then() to get/see the response and then log to the console

vue resource gives some helper methods to use e.g. configuring globally for URL as repeating in get/post requests in `main.js` use:

```javascript
Vue.http.options.root = 'url'
```

POST = appends to data (on firebase)
PUT = will overwrite data (on firebase)

You have the option to dynamically set parts of the URL using custom resources