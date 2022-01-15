<template>
  <div class="bg-gray-800 text-white flex justify-center">
    <div class="w-4/5">
    <header>
      <h1 class="pl-2 text-2xl text-yellow-400">{{ post.title }}</h1>
    </header>
    <main>
      <p class="pl-2 pb-2">{{ post.description }}</p>

      <p class="pl-2">Post created on: {{ formatDate(post.date) }}</p>
      
      <nuxt-content :document="post" />

      <prev-next :prev="prev" :next="next" />

    </main>

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content(
      "posts/archive",
      `${params.subfolder}/${params.slug}`
    ).fetch();

    const [prev, next] = await $content("posts")
      .only(["title", "slug", "date"])
      .sortBy("date", "desc")
      .surround(params.slug)
      .fetch();

    return {
      post,
      prev,
      next,
    };
  },
  head() {
    return {
      title: this.post.title,
    };
  },
  methods: {
    formatDate(date) {
      const dateFormatting = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("en-gb", dateFormatting);
    },
  },
};
</script>