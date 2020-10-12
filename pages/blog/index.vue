<template>
    <div class="bg-gray-900">
        <div class="flex justify-center">
            <SearchPosts />
        </div>
        <div>
            <Pagination
            :current-page="currentPage"
            :page-count="pageCount" 
            @nextPage="changePage('next')"
            @previousPage="changePage('previous')"
            />
        </div>
            <ul class="pl-5">
                <li v-for="post in posts" :key="post.id">
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                        <p class="text-small text-green-500">{{ formatDate(post.date) }}</p>
                        <h3 class="py-1 text-white">{{ post.title }}</h3>
                        <p class="text-white">{{ post.description }}</p>
                        <a :to="{ name: 'blog-slug', params: { slug: post.slug }}" class="text-red-600">Read More</a>
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
                title: 'Web Development Blog'
            }
        },
        data(){
            return {
                currentPage: 1,
                pageCount: 0
            }
        },
        methods: {
            formatDate(date) {
                const dateFormatting = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en-gb', dateFormatting)
            },
            async changePage(){
                switch (value) {
                    case 'next':
                        this.currentPage += 1
                        break;
                    case 'previous':
                    this.currentPage -= 1
                    default:
                        this.currentPage = value
                }
            }
        }
    }
</script>

<style>
li {
    @apply py-2;
    @apply text-lg;
}
</style>