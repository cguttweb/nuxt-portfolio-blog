<template>
    <div class="py-3">
        <nuxt-link 
        v-if="prev" 
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
            &lt;&lt; prev
        </nuxt-link>
        <span v-else>&nbsp;</span>
        <nuxt-link 
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }">
            next &gt;&gt;
        </nuxt-link>
        <span v-else>&nbsp;</span>
    </div>
</template>

<script>
    export default {
        props: {
            prev: {
                type: Object,
                default: () => null
            },
            next: {
                type: Object,
                default: () => null
            }
        }
    }
</script>