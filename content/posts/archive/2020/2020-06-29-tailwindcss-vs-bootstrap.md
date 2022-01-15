---
layout: posts
title: Tailwind vs Bootstrap
date: 2020-06-29
---

TailwindCSS and Bootstrap are CSS frameworks. I discovered [TailwindCSS](https://tailwindcss.com/) fairly recently and have started using it in a couple of my projects, but how does it differ to much better known [Bootstrap](https://getbootstrap.com/)?

As per their websites they are described as the following:

> **Tailwind** is a highly customizable, low-level framework that gives you all the building blocks you need to build bespoke designs
>
> With **Bootstrap** You can quickly design and cutomize responsive mobile-first websites... The world's most popular front-end open toolkit

As with many developers my first experience with a CSS framework was Bootstrap as it is the most popular widely used framework out there and fairly straightforward to learn the basics thanks to the detailed documentation. 

It is easy to get started if all you want to use is the CSS all you need to do is add a link to the CDN before your other stylesheets:

```html
<link rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
crossorigin="anonymous">
```

It makes it easy to build a pretty good looking page with a few classes and their documentation is great with many examples and pre-built components you can use for cards, forms and many many others. For example a common card design:

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

Tailwind is different in that it doesn't have pre-built components and instead provides a variety of utility classes.

There is an available CDN for tailwind:

```html
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```

however this is not recommended as many of its great features are unavailable. The recommended way is to install it via npm (or yarn depending on which package manager you prefer):

```javascript
npm install tailwindcss // or yarn add tailwindcss
```

Then import the tailwing directives into your css as below:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

You can use the provided utility classesto create your own custom designs. An example card component with tailwind classes:

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
```

A useful concept I have recently learnt is being able to extract common patterns to component classes a directive called `@apply`. I have found this particularly useful when being used with Vue-based projects as with Single File Components these styles can be scoped to components e.g.

```css
h1 {
    @apply text-center text-xl;
}

p {
    @apply text-sm;
    @apply font-semibold;
    @apply text-center;
}
```

These styles can be written either all on one line or separately. I am still learning to use tailwind and although admittedly (as with bootstrap) I was spectical at first I can see the benefits to using a framework. I enjoy writing css most of the time, but it can quite quickly become verbose and hard to maintain as your sites and apps get larger therefore something like this can be very useful. 

You can also create a config file to customise your installation using: 

```javascript
npx tailwindcss init
```

which creates the following basic config:

```javascript
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
}
```

You can set your own fonts, colours and sizes (as indicated by the [configuration docs](https://tailwindcss.com/docs/configuration/))  which I've yet to do as I'm still a beginner.

 I'd highly recommend giving it a go as it is a great framework which I'm slowly beginning to understand and will use again in the future. 
