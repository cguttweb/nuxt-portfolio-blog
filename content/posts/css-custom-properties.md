---
title: CSS Variables
date: 2020-11-24T16:03:57.225Z
description: also known as custom properties
---
CSS Variables have been around for a while and designed to try and reduce duplication in CSS. They are useful way to change multiple values at the same time. To create them you use prefix with `--` and can be used in declarations using `var()` function e.g.

```css
:root {
  --header-background-colour: red;
  --secondary-background-colour: blue;
  --text-colour: white;
}

header {
  background-color: var(--header-background-colour);
  color: var(--text-colour);
}

p {
  background-color: var(--secondary-background-colour);
  color: var(--text-colour);
}
```

**It is important to note that these *are* case sensitive** so `--bg-colour` and `--BG-colour` are seen as two separate properties.

To see the current support see [caniuse.com](https://caniuse.com/?search=css%20variables) there is good support in modern browsers although if you need to support everyone's favourite IE they won't work and instead, you will need to set a separate background property before using var e.g.

```css
background-color: red; // this will work in IE
background-color: var(--header-background-color); // this will not work in IE
```

#### Inheritance

As with other CSS properties, variables will inherit so a good idea to set them in `:root` as shown above to make them globally available and therefore accessibleto every element. You can then set in specific individual elements to overwrite these global values. 

I have setup a simple example on codepen:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cgweb" data-slug-hash="YzGoqLQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Variables">
  <span>See the Pen <a href="https://codepen.io/cgweb/pen/YzGoqLQ">
  CSS Variables</a> by Chloe (<a href="https://codepen.io/cgweb">@cgweb</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>