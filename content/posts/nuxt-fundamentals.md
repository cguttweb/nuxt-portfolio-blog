---
title: Nuxt Fundamentals
date: 2020-11-16T12:20:40.160Z
---
Nuxt is a Vue-based framework for SSR or Server Side Rendering but it can also be used for static site generation.

### Getting started

Unlike with Vue, you don't need to install a cli tool to scaffold a Nuxt app as long as you have yarn or npm installed it is easy

```javascript
npx create-nuxt-app APPNAME // OR

yarn create nuxt-app APPNAME
```

#### Page Title and Meta Tags

These can be set in pages using the head function (this can only be used in page components) which returns an object e.g.

```javascript
head() {
  return {
    title: 'Homepage'
  }
}
```

If this isn't set up on any pages it will default to whatever is included in the config file.

Meta tags use vue-meta under the hood and a full list of supported properties can be found in [the docs](https://vue-meta.nuxtjs.org/api/#metainfo-properties). 

### Styling

There are multiple ways to style pages in Nuxt.js. 

- You can add a global CSS file for some base styling and then add this to the `nuxt.config.js` file in the CSS section which will add the styles to all pages e.g.

```javascript
  css: [
    '~/assets/styles.css'
  ],
```

- You can style individual components using the scoped property in your CSS.
- Application wide CSS could also be added to the default.vue layout however if using multiple layouts this will not work. 


### Routing

Nuxt uses the Vue Router behind the scenes therefore routing is straightforward in Nuxt whereas in Vue apps you need to set the router and a routes file in Nuxt it is done via the creation of folders and files. Any pages created in the pages folders are automatically saved to the router config file which you can see in the .nuxt folder. If you only have a few pages just creating pages is fine however if you intend on creating a large number of files use a folder structure with an `index.vue` <- this is important it needs to be called index. 

**Dynamic** - this can be used with files or folders and uses an underscore e.g. `_id.vue` to tell Nuxt that it is dynamic. To access this for example you would use `$route.params.id` but this value depends on what your pages so if it is called users it would be `$route.params.users`.

If you are using the folder structure important to note whatever this is called will show in routing so this is recommended for sub-routes.

<!-- look up nuxt-child... -->

#### Linking between pages

When routing between pages to prevent the generation of many requests you should use `<nuxt-link>` this will prevent the default behaviour of generating an additional HTTP request and will instead function in the same way as a Single Page Application.

#### Layouts

Layouts are a wrapper for pages which work in the same way as other Vue components and can contain small reusable component e.g. a navbar or footer. The default.vue layout will be used for all of your pages until a custom one is specified using layout property in the script section of your page e.g.

```javascript
<template>...</template>
export default {
  layout: 'blog'
}
```

An important one to create is an `error.vue` file as the name suggests if someone puts in the wrong link this is the page that will show. This is created the layouts folder but it works the same way as any Vue component.

If you would like to get started with learning Nuxt check the [great docs](https://nuxtjs.org/docs/2.x/get-started/installation) and this [fundamentals course](https://vueschool.io/courses/nuxtjs-fundamentals) from Vue School. 

### Nuxt and netlifyCMS

**asyncData()** - important to note this method can be only be used in page components. "this" is not accessible in this method as it is called before the initialisation of the component.

You can use a callback with context, but it is recommended to use either:
1. return a promise
2. use async/await

The new content module in Nuxt allows the creation of content using markdown

The content module has the following properties:
- dir
- path
- slug
- extension (.md)
- createdAt
- updatedAt