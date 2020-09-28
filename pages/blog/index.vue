<template>
    <div>
        <SearchPosts />
        <ul class="pl-5">
            <li v-for="post in posts" :key="post.id">
                <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                    <div>
                        <p class="text-green-800">{{ formatDate(post.date) }}</p>
                        <h3 class="text-red-700">{{ post.title }}</h3>
                        <a :to="{ name: 'blog-slug', params: { slug: post.slug }}" class="text-blue-800">Read More</a>
                    </div>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        async asyncData({ $content, params }){
            const posts = await $content('posts', params.slug)
            .only(['title', 'slug', 'date'])
            .sortBy('createdAt', 'desc')
            .fetch()

            return { posts }
        },
        head(){
            return {
                title: 'Blog Posts || cgweb.co.uk'
            }
        },
        methods: {
            formatDate(date) {
                const dateFormatting = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en-gb', dateFormatting)
            }
        }
    }
</script>

<style>

</style>