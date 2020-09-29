<template>
    <div class="flex justify-center">
        <!-- <nav>
            <ul>
                <li v-for="link of post.toc" :key="link.id">
                    <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
                </li>
            </ul>
        </nav> -->
        <div class="w-4/5">
            <h1 class="pl-2 py-2 text-red-700 text-2xl">{{ post.title }}</h1>

            <p class="pl-2">Post created on: {{ formatDate(post.date) }} || Updated: {{ formatDate(post.updatedAt) }} </p>

            <nuxt-content :document="post" />

            <prev-next :prev="prev" :next="next" />
        </div>
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
        head(){
            return {
                title: this.post.title
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
.nuxt-content h1 {
    text-align: center;
}

.nuxt-content h3,
.nuxt-content h4 {
    color: #CC0000;
    padding: 0.5rem;
}

.nuxt-content p {
    padding: 0.5rem;
}

.nuxt-content li {
    padding: 0.25rem 0.5rem;
}
</style>