<template>
    <div class="flex justify-center">
        <p v-if="error.statusCode === 404">Page not found</p>
        <p v-else>An error occured</p>
        <p class="block"><nuxt-link to="/">Back to homepage</nuxt-link></p>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style>

</style>