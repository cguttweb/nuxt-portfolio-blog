<template>
  <div class="bg-gray-900">
    <main class="container px-3 text-white text-lg mx-auto" role="main">
    <p class="mx-auto py-4 text-center text-md w-4/5">
      I'm Chloe a web developer based in Hampshire, UK. I'm currently focusing on vanilla JavaScript and creating projects with anything Vue based including <a class="underline hover:font-bold" href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt</a> which this site is built from. Check out the latest posts on my <nuxt-link class="underline hover:font-bold" to="/blog/">blog</nuxt-link>.
    </p>

    <h1 class="py-3 text-white text-center text-3xl">Projects</h1>
    <section>
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="Array Helper"
          information="This app is the first I built with the Vue-cli. It uses the Twitter Bootstrap framework for styling and is deployed on vercel."
          repo="https://github.com/cguttweb/array-helper"
          link="https://array-helper.vercel.app/"
          techused="Vue, Bootstrap"
        />
          <img
            alt="Array Helper screenshot"
            src="~/assets/array-helper-small.png"
            width="300"
          />
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="Coffee Matcher"
          information="This app is built with Vue-cli and uses the Twitter Bootstrap framework for styling and is deployed on vercel."
          repo="https://github.com/cguttweb/coffee-matcher"
          link="https://coffee-matcher.vercel.app/"
          techused="Vue, Bootstrap"
        />
          <img
            alt="Coffee Matcher"
            src="~/assets/coffee-matcher-small.png"
            width="300"
          />
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="LFC Euro Champions"
          information="A small app built with the Vue cli deployed on vercel"
          repo="https://github.com/cguttweb/lfc-euro-champions"
          link="https://lfc-euro-champions.vercel.app/"
          techused="Vue, Vue Router, CSS" />
          <img
            alt="LFC Euro Champions screenshot"
            src="~/assets/lfc-euro-champs.png"
            width="300"
          />

      </div>
      <!-- <div class="p-4 shadow-lg">
        <ProjectCard
          title="All about coffee"
          information="A site I'm building using Gridsome and bootstrap for styling"
          repo="https://github.com/cguttweb/all-about-coffee"
          techused="Gridsome, Vue, Bootstrap"
          link="https://github.com/cguttweb/all-about-coffee"
        />
        <img
          alt="All About Coffee site homepage"
          src="~/assets/all-about-coffee.png"
          width="300" 
          />
      </div> -->
      <!-- <div class="p-4 shadow-lg">
        <ProjectCard
          title="Design History"
          information="A project built using Gatsby a static site generator based on the React JavaScript framework with Forestry.io as the CMS. A work in progress"
          repo="https://github.com/cguttweb/design-history"
          link="https://www.designhistory.co.uk/"
          techused="Gatsby, React, Markdown"
        />
          <img
            alt="Design History screenshot"
            src="~/assets/design-history-small.png"
            width="300"
          />
        <p class="text-sm">Learn more about <a class="underline" href="https://forestry.io/" rel="noopener noreferrer" target="_blank">Forestry</a></p>
      </div> -->
    </div>
    </section>
    </main>
  </div>
</template>

<script>
export default {
  head(){
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }],
    }
  }
}
</script>

<style>
</style>
