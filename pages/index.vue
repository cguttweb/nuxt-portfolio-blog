<template>
  <div class="container">
    <main class="px-3 text-gray-900 text-lg" role="main">
    <p class="mx-auto text-center w-4/5">
      I'm Chloe a web developer based in Hampshire, UK I'm currently learning and creating projects with anything Vue based Gridsome which this site is built from. See my latest posts on my <g-link class="font-bold" to="/blog/">blog</g-link>
    </p>

    <h2 class="py-3 text-gray-900 text-center text-2xl">Projects</h2>
    <section>
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="Portfolio"
          information="This website itself is built with Gridsome and uses Tailwind CSS for styling. I have also added netlifyCMS to make it easier to create posts with markdown."
          repo="https://github.com/cguttweb/portfolio-and-blog"
          link="https://www.cgweb.co.uk"
          techused="Gridsome, Vue, Tailwindcss"
        />
        <a href="https://www.cgweb.co.uk" target="_blank">
          <g-image
            alt="Portfolio screenshot"
            src="~/assets/portfolio-blog.png"
            width="300"
          />
        </a>
        <p>Learn more about <a href="https://www.netlifycms.org/" target="_blank">NetlifyCMS</a> which can be used with a variety of frameworks including Gridsome and Gatsby.</p>
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="Array Helper"
          information="This app is the first I built with the Vue-cli and uses the Twitter Bootstrap framework for styling."
          repo="https://github.com/cguttweb/array-helper"
          link="https://array-helper.netlify.com/"
          techused="Vue, Bootstrap"
        />
        <a href="https://array-helper.netlify.com/" target="_blank">
          <g-image
            alt="Array Helper screenshot"
            src="~/assets/array-helper-small.png"
            width="400"
          />
        </a>
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="Design History"
          information="A project built using Gatsby a static site generator based on the React JavaScript framework with Forestry.io as the CMS. A work in progress"
          repo="https://github.com/cguttweb/design-history"
          link="https://www.designhistory.co.uk/"
          techused="Gatsby, React, Markdown"
        />
        <a href="https://designhistory.co.uk" target="_blank">
          <g-image
            alt="Design History screenshot"
            src="~/assets/design-history.png"
            width="400"
          />
        </a>
        <p>Learn more about <a href="https://forestry.io/" target="_blank">Forestry</a></p>
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="Gym Site"
          information="A small site I built in a weekend with Gatsby using the default starter. It's far from perfect as I'm a beginner to Gatsby"
          repo="https://github.com/cguttweb/gym-site"
          link="https://github.com/cguttweb/gym-site"
          techused="Gatsby, CSS"
        />
        <a href="https://github.com/cguttweb/gym-site" target="_blank">
        <g-image 
        alt="simple gym site using gatsby" 
        src="~/assets/gym-site.png" 
        width="400" />
        </a>
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="LFC Euro Champions"
          information="An app built with the Vue cli"
          repo="https://github.com/cguttweb/lfc-euro-champions"
          link="https://github.com/cguttweb/lfc-euro-champions"
          techused="Vue, CSS" />
        <a href="#" target="_blank">
          <g-image
            alt="LFC Euro Champions screenshot"
            src="~/assets/lfc-euro-champs.png"
            width="400"
          />
        </a>
      </div>
      <div class="p-4 shadow-lg">
        <ProjectCard
          title="All about coffee"
          information="A site I'm building using Gridsome and tailwindcss for styling"
          repo="https://github.com/cguttweb/all-about-coffee"
          techused="Gridsome, Vue, TailwindCSS"
          link="https://github.com/cguttweb/all-about-coffee"
        />
        <a href="https://github.com/cguttweb/all-about-coffee" target="_blank">
          <g-image 
          alt="All About Coffee site homepage" 
          src="~/assets/all-about-coffee.png" 
          width="300" />
        </a>
      </div>
    </div>
    </section>
      <section class="my-4 flex justify-center">
        Contact me on following networks:
        <a
          class="px-2 text-red-700"
          href="https://dev.to/cguttweb"
          target="_blank"
          aria-label="devto badge"
        >
          <font-awesome :icon="['fab', 'dev']" title="cguttweb's DEV Profile" size="lg"></font-awesome>
        </a>&nbsp;
        <a
          class="px-2 text-red-700"
          href="https://twitter.com/cguttweb"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="twitter icon"
        >
          <font-awesome :icon="['fab', 'twitter']" title="Twitter" size="lg"></font-awesome>
        </a>&nbsp;
        <a
          class="px-2 text-red-700"
          href="https://github.com/cguttweb"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="github icon"
        >
          <font-awesome :icon="['fab', 'github']" title="Github" size="lg"></font-awesome>
        </a>
        <a
          class="px-2 text-red-700"
          href="https://codepen.io/cgweb"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="codepen icon"
        >
          <font-awesome :icon="['fab', 'codepen']" title="Codepen" size="lg"></font-awesome>
        </a>
        <a
          class="px-2 text-red-700"
          href="https://instagram.com/cguttweb2017"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="codepen icon"
        >
         <font-awesome :icon="['fab', 'instagram']" title="Instagram" size="lg"></font-awesome>
        </a>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>
