<template>
    <div class="bg-gray-900 py-5">
        <footer class="block text-center md:flex justify-center text-white">
            Made by<a
          class="px-2"
          href="https://github.com/cguttweb"
          target="_blank"
          aria-label="github icon"
          rel="noopener noreferrer" 
        >Chloe
          <font-awesome-icon :icon="['fab', 'github']" title="Github" />
        </a> in {{ getYear() }} &nbsp;<a class="flex justify-center" href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer" title="Nuxtjs"><img class="align-top inline" src="~/assets/built-with-nuxt.svg" alt="nuxt svg logo" width="130"></a>&nbsp;and hosted on&nbsp; <a class="underline" href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
        </footer>
    </div>
</template>

<script>
    export default {
        methods: {
            getYear(){
                return "2020" + "-"+new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
/* img {
    vertical-align: top;
} */
</style>