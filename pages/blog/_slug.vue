<template>
    <div>
        <nav>
            <ul>
                <li v-for="link of post.toc" :key="link.id">
                    <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
                </li>
            </ul>
        </nav>

        <h1>{{ post.title }}</h1>

        <p>{{ post.description }}</p>
        <p>Post created on: {{ formatDate(post.createdAt) }} || Updated: {{ formatDate(post.updatedAt) }} </p>

        <nuxt-content :document="post" />

        <prev-next :prev="prev" :next="next" />
    </div>
</template>

<script>
    export default {
        async asyncData({ $content, params }){
            const post = await $content('posts', params.slug).fetch()

            const [prev, next] = await $content('posts')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'desc')
            .fetch()

            return { 
                post,
                prev,
                next
                }
        },
        methods: {
            formatDate(date) {
                const dateFormatting = { year: 'numeric', month: 'numeric', day: 'numeric' }
                return new Date(date).toLocaleDateString('en-gb', dateFormatting)
            }
        }
    }
</script>

<style>

</style>