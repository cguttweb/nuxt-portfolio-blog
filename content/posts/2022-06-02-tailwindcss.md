---
title: TailwindCSS
date: 2022-05-01T09:04:25.373Z
description: a css framework
---
[TailwindCSS](https://tailwindcss.com/) is as described on their website:
>"a utility-first CSS framework packed with classes... that can be composed to build any design, directly in your markup

It can be setup using tailwind CLI, postcss or there are a series of guides for a number of different frameworks on the website ranging from the likes of vite, vue to laravel and svelte.

Like many others I was initially hesistant about CSS frameworks as a result of the messy looking markup adding all those classes to your HTML creates. My first experience was using bootstrap as is likely the case for most developers and although I could see why it would be useful pre-defined components and a series of presets so you don't have to create your own framework. When learning to code you are taught to keep the layers separate HTML markup then CSS for presentation and JavaScript for anything more interactive. I am a self-confessed convert especially since using it with vue. Why am I a convert?

- It's easy to get setup
- Syntax is straightforward especially if you have tailwind intellisense extension installed
- The documentation is great and it's easy to find what classes you need

Here are some examples where I have used tailwind:

The 'cards' for my personal site which uses Nuxt a Vue based framework:

```vue
<template>
  <div>
    <h2 class="font-bold text-2xl text-red-600">{{ title }}</h2>
    <p class="py-2 text-white">{{ information }}</p>
    <p class="text-red-400">Technology used: {{ techused }}</p>
    <a class="text-green-300 py-4"
      :href="repo"
      target="_blank"
      rel="noopener noreferrer"
    >Git Repo: {{ repo }}</a><br/>
    <button type="button" class="bg-red-800 my-4 px-4 py-2 rounded"><a class="text-white" :href="link" rel="noopener noreferrer" target="_blank">{{title}}</a></button>
  </div>
</template>
```

Another useful thing is the option to use `@apply` directive to add multiple standard classes to your own css class e.g. 

```css
.h3 {
  @apply pb-2 pt-3 text-blue-700 text-xl uppercase;
}
```

