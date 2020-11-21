<template>
<div class="bg-gray-900">
    <div class="flex justify-center">
        <SearchPosts />
    </div>
    <ul class="block md:flex flex-wrap mx-auto lg:w-1/2">
        <li class="p-5 shadow-lg md:w-1/2" v-for="post in posts" :key="post.id">
            <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                <p class="text-small text-green-500">{{ formatDate(post.date) }}</p>
                <h3 class="py-4 text-white">{{ post.title }}</h3>
                <!-- <p class="py-2 text-white">{{ post.description }}</p>-->
                <a :to="{ name: 'blog-slug', params: { slug: post.slug }}" class="bg-red-800 px-3 py-2 rounded text-white hover:bg-blue-800 ">Read More</a>
            </nuxt-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    async asyncData({
        $content,
        params
    }) {
        const posts = await $content('posts', params.slug)
            .only(['title', 'slug', 'date'])
            .sortBy('createdAt', 'desc')
            .fetch()

        return {
            posts
        }
    },
    head() {
        return {
            title: 'Web Development Blog'
        }
    },
    methods: {
        formatDate(date) {
            const dateFormatting = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('en-gb', dateFormatting)
        },
    }
}
</script>

<style>
li {
    @apply py-2;
    @apply text-lg;
}
</style>
