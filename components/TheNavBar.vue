<template>
    <div>
    <nav
      role="navigation"
      class="flex font-bold my-2 justify-center text-xl text-red-800 uppercase"
    >
      <nuxt-link class="pr-5" to="/">Home</nuxt-link>
      <nuxt-link class="pr-5" to="/blog/">Blog</nuxt-link>
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
         <SearchPosts />
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>