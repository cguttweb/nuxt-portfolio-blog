<template>
  <div>
    <h2 class="font-bold text-2xl text-red-800">{{ title }}</h2>
    <p class="py-2 text-gray-900">{{ information }}</p>
    <p class="text-red-800">Technology used: {{ techused }}</p>
    <a class="text-green-800 py-4"
      :href="repo"
      target="_blank"
      rel="noopener noreferrer"
    >Git Repo: {{ repo }}</a><br/>
    <button type="button" class="bg-red-700 my-4 px-4 py-2 rounded"><a class="text-white" :href="link" target="_blank">Link</a></button>
  </div>
</template>

<script>
export default {
  props: ["title", "information", "techused", "link", "repo"]
};
</script>

<style scoped>
p,
a {
  @apply text-lg;
}
</style>
