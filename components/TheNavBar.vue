<template>
  <div class="bg-gray-900">
    <nav
      role="navigation"
      class="block text-center md:flex flex-row justify-center py-2 text-xl text-white uppercase"
    >
      <nuxt-link class="block md:pr-5 hover:underline" to="/">Home</nuxt-link>
      <nuxt-link class="block md:pr-5 hover:underline" to="/blog/"
        >Blog</nuxt-link
      >
      <nuxt-link class="block pr-5 hover:underline" to="/uses/">Uses</nuxt-link>
      <a
        class="block"
        href="https://dev.to/cguttweb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="devto badge"
      >
        <font-awesome-icon
          :icon="['fab', 'dev']"
          title="cguttweb's DEV Profile"
        />
      </a>
      <a
        class="block"
        href="https://github.com/cguttweb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github icon"
      >
        <font-awesome-icon :icon="['fab', 'github']" title="Github" />
      </a>
      <a
        class="block"
        href="https://codepen.io/cgweb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="codepen icon"
      >
        <font-awesome-icon :icon="['fab', 'codepen']" title="Codepen" />
      </a>
      <a
        class="block"
        href="https://instagram.com/cguttweb2017/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="codepen icon"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" title="Instagram" />
      </a>
      <a
        class="block"
        rel="me nopener noreferrer"
        href="https://techhub.social/@cguttweb"
      >
        <i class="fa fa-mastodon" aria-hidden="true"></i>
      </a>
      <a style="display: none" rel="me" href="https://techhub.social/@cguttweb"
        >Mastodon</a
      >
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  @apply px-2;
  @apply text-white;
}
</style>
