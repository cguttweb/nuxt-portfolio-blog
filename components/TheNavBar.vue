<template>
    <div class="bg-gray-900">
    <nav
      role="navigation"
      class="flex flex-row justify-center py-2 text-xl text-white uppercase">
      <nuxt-link class="pr-5 hover:underline" to="/">Home</nuxt-link>
      <nuxt-link class="pr-5 hover:underline" to="/blog/">Blog</nuxt-link>
      <nuxt-link class="pr-5 hover:underline" to="/docs/">Docs</nuxt-link>
      <a href="https://dev.to/cguttweb"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="devto badge"
        >
          <font-awesome-icon :icon="['fab', 'dev']" title="cguttweb's DEV Profile" />
        </a>&nbsp;
        <a
          href="https://twitter.com/cguttweb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter icon"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" title="Twitter" />
        </a>&nbsp;
        <a
          href="https://github.com/cguttweb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github icon"
        >
          <font-awesome-icon :icon="['fab', 'github']" title="Github" />
        </a>
        <a
          href="https://codepen.io/cgweb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="codepen icon"
        >
          <font-awesome-icon :icon="['fab', 'codepen']" title="Codepen" />
        </a>
        <a
          class="text-red-700"
          href="https://instagram.com/cguttweb2017"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="codepen icon"
        >
         <font-awesome-icon :icon="['fab', 'instagram']" title="Instagram" />
         </a>
    </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
a {
  @apply px-2;
  @apply text-white
}
</style>
