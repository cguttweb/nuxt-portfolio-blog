<template>
    <div class="py-3">
        <nuxt-link 
        v-if="prevpage" 
        :to="{ name: 'blog-slug', params: { slug: prevpage.slug } }">
            &lt;&lt; prev
        </nuxt-link>
        <span v-else>&nbsp;</span>
        <nuxt-link 
        v-if="nextpage"
        :to="{ name: 'blog-slug', params: { slug: nextpage.slug } }">
            next &gt;&gt;
        </nuxt-link>
        <span v-else>&nbsp;</span>
    </div>
</template>

<script>
    export default {
        props: {
            prevpage: {
                type: Object,
                default: () => null
            },
            nextpage: {
                type: Object,
                default: () => null
            }
        },
        async asyncData({ $content, params }){
            const post = await $content('posts', params.slug).fetch()

            const [prev, next] = await $content('posts')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .fetch()

            return { post }
        },
    }
</script>