//  import { $content } from "@nuxt/content";
// import { create } from "core-js/fn/object";

const fs = require('fs').promises;
const path = require('path');

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
  // const hostname = process.NODE_ENV === 'production' ? 'https://cgweb.co.uk' : 'http://localhost:3000';
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


export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en-gb'
    },
    title: 'Web Developer Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Developer Portfolio and Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content', 
    '@nuxtjs/feed',
    '@nuxtjs/sitemap'
  ],

  feed: [
    {
      path: '/feed.xml',
      create,
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

  sitemap: {
    hostname: 'https://cgweb.co.uk'
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-xonokai.css'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
