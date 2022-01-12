<template>
  <main class="bg-gray-900">
    <h1 class="text-center text-white">My Blog</h1>
    <div class="flex justify-center">
      <SearchPosts />
    </div>
    <ul class="block md:flex flex-wrap mx-auto lg:w-1/2">
      <li class="p-5 shadow-lg md:w-1/2" v-for="post in posts" :key="post.id">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <p class="text-small text-green-400">{{ formatDate(post.date) }}</p>
          <h2 class="py-4 text-white">{{ post.title }}</h2>
          <a class="bg-red-800 px-3 py-2 rounded text-white hover:bg-blue-800"
            >Read More</a
          >
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("posts", params.slug)
      .only(["title", "slug", "date"])
      .sortBy("date", "desc")
      .fetch();

    return {
      posts,
    };
  },
  head() {
    return {
      title: "Web Development Blog",
    };
  },
  methods: {
    formatDate(date) {
      const dateFormatting = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("en-gb", dateFormatting);
    },
  },
};
</script>
