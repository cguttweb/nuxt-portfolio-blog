---
title: Generating RSS Feed using Nuxt feed module
date: 2020-10-05T13:40:28.967Z
---
Moving from Gridsome to Nuxt for most of this was fairly straightforward as it is from one vue framework to another the majority of the content stayed the same including the use of netlifyCMS for creating my blog posts. I had to setup pulling posts differently using `asyncData` but reading the docs I found that more straightforward than trying to use GraphQL (which I don't know much about) as I did with Gridsome. This was done with the help of great post in the official Nuxt blog [here](https://nuxtjs.org/blog/creating-blog-with-nuxt-content).  

The main issue I have come across was setting up the RSS feed to be able to cross post on [dev.to](https://dev.to), but I have managed to get it setup using a combination of the docs and a post I found on dev.to

First install the module through npm or yarn and add it to modules in your `nuxt.config.js` file and make sure to add it after the content module.

```javascript
...
modules: [
    '@nuxt/content', 
    '@nuxtjs/feed',
]
...
```

There are a couple of different ways to it setup depending on your particular use case and setup as explained in the [docs](https://github.com/nuxt-community/feed-module). The main difficulty I had was being able to access the markdown through nuxt/content and so back to the nuxt docs I went

There are a few different hooks available when using the content module in my case I'm using the `content:file.beforeInsert` hook which as detailed on the docs `Allows you to add data to a document before it is stored`. I used this to be able to get down the body content of my blog posts

The end result of a few hours of playing around and reading docs was this setup in `nuxt.config.js` in the default export with the create function setup outside this at the top of the file: 

```javascript
  feed: [
    {
      path: '/feed.xml',
      create, // outside the default export at the top of the config file
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: [ 'blog', 'xml' ]
    },
  ], 
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {      
        document.bodyPlainText = document.text;
      }
    },
  },
```

This is the create function referenced above:

```javascript
let posts = [];

const constructFeedItem = (post, dir) => {  
  const url = `https://cgweb.co.uk/blog/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.bodyPlainText
  }
} 

const create = async (feed) => {
  feed.options = {
    title: "My Web Dev Blog",
    description: "Documenting my web dev learnings",
    link: `https://cgweb.co.uk/feed.xml`
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content('posts').sortBy('createdAt', 'desc').fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post);
    feed.addItem(feedItem);
  }
  return feed;
}
```