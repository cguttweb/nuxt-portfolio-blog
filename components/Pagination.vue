<template>
<<<<<<< HEAD
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
=======
  <div class="text-white text-center">
    <button
      :disabled="PreviousButtonDisabled"
      @click="previousPage"
    >
      ←
    </button>
        <PaginationTrigger 
    :pageNumber="currentPage"
    @loadPage="onLoadPage"
    />
    <button
      :disabled="NextButtonDisabled"
      @click="nextPage"
    >
      →
    </button>

  </div>
>>>>>>> 450f148556dc29f6e55c284f126d5115696ff26e
</template>

<script>
    export default {
        props: {
<<<<<<< HEAD
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
=======
            currentPage: {
                type: Number,
                required: true
            },
            pageCount: {
                type: Number,
                required: true
            }
        },
        computed: {
            PreviousButtonDisabled(){
                return this.currentPage === 1
            },
            NextButtonDisabled(){
                return this.currentPage === this.pageCount
            }
>>>>>>> 450f148556dc29f6e55c284f126d5115696ff26e
        },
        methods: {
            nextPage(){
                this.$emit('nextPage')
            },
            previousPage(){
                this.$emit('previousPage')
            }
        }
    }
</script>