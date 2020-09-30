<template>
    <div class="py-4">
        <footer class="flex justify-center">
                Made by <a href="" target="_blank" rel="noopener noreferrer">Chloe</a> in {{ getYear() }} &nbsp;<a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer" title="Nuxtjs"><img src="~/assets/built-with-nuxt.svg" alt="nuxt svg logo" width="150"></a>&nbsp;and hosted on&nbsp; <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
        </footer>
    </div>
</template>

<script>
    export default {
        methods: {
            getYear(){
                return new Date().getFullYear()
            }
        }
    }
</script>

<style>
footer a {
    @apply underline;
}
</style>