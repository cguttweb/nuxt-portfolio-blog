---
title: Generating RSS Feed using Nuxt feed module
date: 2020-10-05T13:40:28.967Z
---
Moving from Gridsome to Nuxt for most of this was fairly straightforward as from one vue framework to another the majority of the content stayed the same including the use of netlifyCMS for creating my blog posts. I had to setup pulling posts differently using `asyncData` but reading the docs I found that more straightforward than trying to use GraphQL (which I don't know much about) as I did with Gridsome. This was done with the help of great post in the official Nuxt blog [here](https://nuxtjs.org/blog/creating-blog-with-nuxt-content).  

The main issue I have come across was setting up the rss feed to be able to cross post on [dev.to](https://dev.to), but I have managed to get it setup using a combination of the docs and a post I found on dev.to

First install the module through npm or yarn and add to module in your `nuxt.config.js` file and make sure to add it after the content module.

```javascript
...
modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content', 
    '@nuxtjs/feed',
]
...
```

There are a couple of different ways to it setup depending on your particular use case and setup as explained in the [docs](https://github.com/nuxt-community/feed-module)