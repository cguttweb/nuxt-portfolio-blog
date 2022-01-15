---
title: 'Setting up RSS feed for my Gridsome blog'
date: 2019-10-26
---

I've spent a couple (read a few) hours yesterday and today attempting to setup an RSS feed for my blog which is built using [Gridsome](https://gridsome.org/) primarily so I could cross post on dev.to community. I initially had a look at the Gridsome plugins and decided to try using the [gridsome-plugin-rss](https://gridsome.org/plugins/gridsome-plugin-rss) adding the following to my gridsome.config.js file:

```
plugins: [
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'My Blog',
          feed_url: 'https://www.cgweb.co.uk/rss.xml',
          site_url: 'https://www.cgweb.co.uk/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://www.cgweb.co.uk/content/posts/' + node.slug
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
]
```

This partially successful as it generated the RSS page on my site and was correctly displaying the title of the posts, but not the links and the main content of the posts I think because I was using node.slug which was showing as undefined in the feed. I tried a couple of things which partially worked, but after a quick google I found a couple of posts for setting this up using the other available Gridsome plugin called [gridsome-plugin-feed](https://gridsome.org/plugins/gridsome-plugin-feed) so I went back to the docs installed it via npm and using the docs as my base added the following to my config file (there are additional options you can setup such as atom or JSON outputs but I have no need for these):

```
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Dev Blog',
          description:
            'My web dev blog'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        maxItems: 25,
        filterNodes: node => true,
        nodeToFeedItem: node => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content
        })
      }
    }
```

On a side note I also learnt how to add images to my markdown posts which is done using the following formatting:

```
![alt text](imageurl)
```

From this great [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet)
