<template>
  <div class="bg-gray-900 text-center text-white py-10">
    <p class="text-lg" v-if="error.statusCode === 404">Sorry we cannot find that page</p>
    <p v-else>An error occured</p>
    <p class="block text-lg underline"><nuxt-link to="/">Back to homepage <font-awesome-icon :icon="['fas', 'home']" title="Home" /></nuxt-link></p>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style scoped>
div {
  min-height: 85vh;
}
</style>
