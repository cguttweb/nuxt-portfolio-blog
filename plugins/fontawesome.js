import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faTwitter,
    faDev,
    faCodepen,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons"

// disable the CSS
config.autoAddCss = false

library.add(faGithub, faTwitter, faDev, faCodepen, faInstagram, fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)