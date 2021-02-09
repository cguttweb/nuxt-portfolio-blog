<template>
    <div class="bg-gray-800 text-white flex justify-center">
        <nav class="mx-auto">
            <ul>
                <li v-for="link of docs.toc" :key="link.id">
                    <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="w-4/5">
            <h1 class="text-red-700 text-2xl pl-2">{{ docs.title }}</h1>

            <nuxt-content :document="docs" />

        </div>
    </div>
</template>

<script>
    export default {
        async asyncData({ $content, params }){
            const docs = await $content('mydocs', { deep: true }, params.slug).fetch()
            return {
                docs
            }
        },
        head(){
            return {
                title: this.docs.title
            }
        },
    }
</script>

<style>

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4 {
    color: #CC0000;
    padding: 0.5rem;
}

.nuxt-content h3 {
    font-size: 22px;
}

.nuxt-content h4 {
    font-size: 20px;
}

.nuxt-content a {
  text-decoration: underline;
}

.nuxt-content a:hover {
  font-weight: bold;
}

.nuxt-content p {
    padding: 0.5rem;
} 

.nuxt-content blockquote {
    font-size: 22px;
    font-style:italic;
}

.nuxt-content li {
    font-size: 18px;
    list-style: disc;
    margin-left: 0.5rem;
    padding: 0.5rem;
}

</style>
