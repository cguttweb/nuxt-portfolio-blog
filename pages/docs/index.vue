<template>
  <main class="bg-gray-900">
  <h1 class="text-center text-white text-2xl">Web Development Docs</h1>
      <ul class="mx-auto lg:w-1/2">
          <li class="hover:text-red-700" v-for="doc in docs" :key="doc.id">
              <!-- <nuxt-link :to="{ name: 'docs-slug', params: { slug: doc.slug } }"> -->
                <nuxt-link :to="doc.path">
                  <h2 class="py-4 text-white underline">{{ doc.title }}</h2>
                  <p>{{ doc.description }}</p>
              </nuxt-link>
          </li>
      </ul>
  </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const docs = await $content('docs', { deep: true }, params.slug)
        .sortBy(['position'])
        .fetch()

        return {
            docs
        }
    },
    head() {
        return {
            title: 'My Web Development Docs'
        }
    }
}
</script>

<style>
</style>
