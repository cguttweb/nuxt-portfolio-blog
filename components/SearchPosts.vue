<template>
    <div class="pl-5 py-4">
        <input 
        class="border border-red-600 pl-2 py-1"
        type="search" 
        name="searchposts"
        placeholder="Search Posts"
        v-model="searchPosts">
        <!-- <div> -->
            <ul>
                <li v-for="post in posts" :key="post.date">
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                        {{ post.title }}
                    </nuxt-link>
                </li>
            </ul>
        <!-- </div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchPosts: '',
                posts: []
            }
        },
        watch: {
            async searchPosts(searchPosts){
                if(!searchPosts){
                    this.posts = []
                    return
                }
                this.posts = await this.$content('posts')
                .limit(10)
                .search(searchPosts)
                .fetch()
            }
        }
    }
</script>
