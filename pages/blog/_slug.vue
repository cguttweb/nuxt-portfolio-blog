<template>
    <div class="bg-gray-800 text-white flex justify-center">
        <div class="w-4/5">
            <h1>{{ post.title }}</h1>

            <p class="pl-2 pb-2">{{ post.description }}</p>

            <p class="pl-2">Post created on: {{ formatDate(post.date) }} </p>

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
            .only(['title', 'slug', 'date'])
            .sortBy('date', 'desc')
            .surround(params.slug)
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
h1 {
    @apply pl-2;
    @apply text-red-700;
    @apply text-2xl;
}

.nuxt-content h1 {
    text-align: center;
}

.nuxt-content h3,
.nuxt-content h4 {
    color: #CC0000;
    padding: 0.5rem;
}

.nuxt-content h3 {
    font-size: 20px;
}

.nuxt-content h4 {
    font-size: 18px;
}

.nuxt-content p {
    padding: 0.5rem;
}

.nuxt-content li {
    list-style: disc;
    margin-left: 0.5rem;
    padding: 0.5rem;
}

.nuxt-content a {
    text-decoration: underline;
}
</style>
