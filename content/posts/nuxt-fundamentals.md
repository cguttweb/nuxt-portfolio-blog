---
title: Nuxt Fundamentals
date: 2020-11-16T12:20:40.160Z
---
Nuxt is a Vue-based framework for SSR or Server Side Rendering but it can also be used for static site generation.

### Routing

Routing is straightforward in Nuxt whereas in Vue apps you need to set the router and a routes file in Nuxt it is done via the creation of folders and files. Any pages created in the pages folders are automatically saved to the router config file which you can see in the .nuxt folder. If you only have a few pages just creating pages is fine however if you intend on creating a large number of files use a folder structure with an `index.vue` <- this is important it needs to be called index. 

**Dynamic** - this can be used with files or folders and uses an underscore e.g. `_id.vue` to tell Nuxt that it is dynamic.

If you are using the folder structure important to note whatever this is called will show in routing so this is recommended for sub-routes.

Look up nuxt-child...

#### Linking between pages

When routing between pages to often the generation of many requests you should use `<nuxt-link>` this wil prevent the default behaviour of generating an additional HTTP request and will instead function in the same way as a Single Page Application.

#### Layouts

An important one to create is an `error.vue` file as the name suggests if someone puts in the wrong link this is the page that will show. This is created the layouts folder but it works the same way as any Vue component.