<template>
    <div class="pl-5 py-4">
        <label for="searchposts" class="hidden">Search Posts</label>
        <input 
        class="bg-gray-900 border border-red-600 flex justify-center pl-2 py-1"
        type="search" 
        name="searchposts"
        placeholder="Search Posts"
        v-model="searchPosts">
            <ul>
                <li class="flex" v-for="post in posts" :key="post.date">
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                        {{ post.title }}
                    </nuxt-link>
                </li>
            </ul>
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
