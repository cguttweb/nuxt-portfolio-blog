---
title: Connecting to servers via http
date: 2020-11-18T16:20:02.797Z
---
This is done using vue-resource `npm install vue-resource -D` to install as a dev dependency and add it to `main.js` file like this:

```javascript
import VueResource from 'vue-resource'

Vue.use(VueResource)
```
this.$http.post(url, data to send) e.g. in example project

```javascript
this.$http.post(firebase + json, this.user)
.then(resp => { 
  console.log(resp) 
})
```

vue resource uses promises so can use .then() to get/see trhe response and then log to the console
