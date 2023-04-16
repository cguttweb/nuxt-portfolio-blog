<template>
  <div>
    <h2 class="font-bold text-2xl text-green-300">{{ title }}</h2>
    <p class="py-2 text-white">{{ information }}</p>
    <p class="text-blue-300">Technology used: {{ techused }}</p>
    <a
      class="text-green-300 py-4"
      :href="repo"
      target="_blank"
      rel="noopener noreferrer"
      >Git Repo: {{ repo }}</a
    ><br />
    <button type="button" class="bg-red-800 my-4 px-4 py-2 rounded">
      <a
        class="text-white"
        :href="link"
        rel="noopener noreferrer"
        target="_blank"
        >{{ title }}</a
      >
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    techused: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    repo: {
      type: String,
    },
  },
};
</script>

<style scoped>
p,
a {
  @apply text-lg;
}
</style>
