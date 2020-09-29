import { $content } from "@nuxt/content";
import { create } from "core-js/fn/object";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Web Developer Portfolio and Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@nuxtjs/feed', {
      feed: [
        {
          path: '/feed.xml',
          async create(feed){
            // add details here
            feed.options = {
              title: 'My Web Dev Blog',
              description: 'My web dev blog feed',
              link: 'https://cgweb.co.uk/feed.xml'
            }

            const { $content } = require('@nuxt/content')

            const posts = await $content('posts').fetch()

            posts.forEach((post) => {
              const url = `https://cgweb.co.uk/blog/${post.slug}`

              feed.addItem({
                title: post.title,
                id: post.url,
                link: post.url,
                description: post.description,
                content: post.content
              })
            })

          },


          cacheTime: 1000 * 60 * 15,
          type: 'rss2'
        }
      ]
    }
  ],

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
