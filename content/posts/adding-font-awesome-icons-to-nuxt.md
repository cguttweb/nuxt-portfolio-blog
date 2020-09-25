---
title: Adding font awesome icons to Nuxt
date: 2020-09-25T14:57:31.422Z
---
Why did I want t use these? Well simply for my various social networks and I've used them in the past but not with Nuxt but it was simpler than I expected it to be. Firstly install the packages you wish to use in my case this was:

```javascript
yarn install @fortawesome/vue-fontawesome 
@fortawesome/font-awesome-svg-core 
@fortawesome/free-brands-svg-icons
```

then in plugins folder create a `fontawesome.js` file and add the following:
```
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// this disables the default css and instead you can use nuxt or in my case tailwind styles
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
```
as the documentation found [here](https://github.com/FortAwesome/vue-fontawesome#nuxtjs)

It was simply a case of import whichever icons you require in my example it was github, twitter, codepen, instagram and dev and then add them to the library:

```
library.add(faGithub, faTwitter, faDev, faCodepen, faInstagram, fas)
```

Modify `nuxt.config.js` to include references to your plugins file and the global css from font-awesome:

```javascript
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  plugins: [
    '~/plugins/fontawesome.js'
  ],
```

Add your icon using `<font-awesome-icon />` explicitly binding to your chosen icons.

My completed navigation with font awesome icons with tailwind used for styling:

```html
      <a class="px-2 text-red-700"
          href="https://dev.to/cguttweb"
          target="_blank"
          rel="noopener"
          aria-label="devto badge"
        >
          <font-awesome-icon :icon="['fab', 'dev']" title="cguttweb's DEV Profile" />
        </a>&nbsp;
        <a
          class="px-2 text-red-700"
          href="https://twitter.com/cguttweb"
          target="_blank"
          aria-label="twitter icon"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" title="Twitter" />
        </a>&nbsp;
        <a
          class="px-2 text-red-700"
          href="https://github.com/cguttweb"
          target="_blank"
          aria-label="github icon"
        >
          <font-awesome-icon :icon="['fab', 'github']" title="Github" />
        </a>
        <a
          class="px-2 text-red-700"
          href="https://codepen.io/cgweb"
          target="_blank"
          aria-label="codepen icon"
        >
          <font-awesome-icon :icon="['fab', 'codepen']" title="Codepen" />
        </a>
        <a
          class="px-2 text-red-700"
          href="https://instagram.com/cguttweb2017"
          target="_blank"
          aria-label="codepen icon"
        >
         <font-awesome-icon :icon="['fab', 'instagram']" title="Instagram" />
         </a>
```
