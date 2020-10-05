---
title: Vue Router
date: 2020-08-23T14:24:54.891Z
---
I spent some time yesterday going through and finishing the Router section of my Vue course. You can either add to your project as an option during the initial setup of the vue-cli or you could add it afterwards using `vue add router`. 

The [documentation](https://router.vuejs.org/) is very good it's well laid out and has some good examples and use cases for particular aspects and how to use the router. There is also a course on Vue School I intend to go over for a few things e.g. creating a 404 page or experimenting with transitions for my routes. 

After installing the router import it into `main.js` using `import Router from 'vue-router'` then add `Vue.use(Router)` and initialise it and add your routes e.g.

```javascript
const router = new Router({
  routes
})
```

In this example there is a `routes.js` file which is an array of objects and then imported into `main.js` `import { routes } from './routes` an example file would be:

```javascript
export const routes = [
{ 
  path: '/',
  name: 'Home'
},
{
  path: '/page2',
  name: 'Page 2'
}
]
```

Then add `<router-view></router-view>` into `App.vue` to match this visible in the Vue instance. 

The default mode is using hash e.g. `localhost:3000/#/` this hash mode is common in SPA as without `#` it will send a request to the server. To change this you can add `mode: history` a new Router either in a separate router file or in App.vue e.g.

```javascript
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
});
```

### Navigation using router links

using `<router-link></router-link>` has the advantage of having an implicit eventListener added so it will listen to click and will load the correct route instead of the default behaviour of reloading the page sending a server request. You can also trigger the navigation through code as well as `router-link` e.g.

```javascript

..methods: {
  goHome(){
    this.$router.push('/')
  }
}
..
```

this method can then be added to element e.g.button.

### Route Parameters

To add dynamic parts of a URL e.g.an id by using colon using params property is an object holding key value pairs in routes.js:
`... path: '/user/:id...` then in your component:

```javascript
..
data(){
..id: this.$route.params.id
}
```

### Child Routes

To add child routes add the children property e.g. 

```
{ path: '/person', component: Person, children: [
{ path: '', component: myComp }
...
]
```

### Named Routes

When creating routes can add a name property to any route (it cna be anything) e.g. 

```
{ path: ':id/edit', name: 'editUser' }
```

this can then be added to your navigation or wherever it is needed e.g.

`:to="{ name: 'editUser', params: { id: $route.params.id }}"`

You can also add these in the code e.g. `this.$router.push({ name: 'home' })`

### Query Parameters

These can setup/added directly in your navigation or use the object syntax e.g. `..to="/?a=1000&locale=en"` or `:to=...query: { locale: 'en' }`

To extract these can do this in same way as params but using query e.g.

`Locale: {{ $route.query.locale }}`

You can also have multiple router views by naming them e.g. 
<router view name="header"></router-view>

Then update routes to include this:

```
...path: '', name: 'home', components: {
default: Home,
'header': Header
}
```

#### Catch All Routes

This is setup through the use of wildcard e.g. 

```
{ path: *, redirect: '/' }
```

This will catch any anything not included in your `routes.js` file and redirect your use back to the homepage.

### Guards

AS the name suggests these are used to protect routes. Firstly the `beforeEnter` guard this can be setup globally for generic checks as it will execute all the time e.g.

```
router.beforeEach((to, from, next) => {
next() // this needs to be included
})
```

This can be set on individual routes inside the `routes.js` setup:

```
...path: '', component: '', beforeEnter: (to, from, next) => {
next()
}...
```

It can also be setup in the component like lifecycle hook e.g.

```
beforeRouteEnter(to, from, next) {
  if(true){
    next()
  } else {
    next(false)
  }
}
```

It is important to note that this guard does NOT have access to this, because it is called before the route rendering the component in confirmed.

beforeLeave guard needs to be added on a component level.

### Lazy Loading

You can setup async functions in route for each component whuch returns a promise and you need to resolve them. This will improve performance e.g.

```
... const User = resolve => {
   require.ensure(['./components/...'], () => {
     resolve(require('./components/...'))
  })
}
```