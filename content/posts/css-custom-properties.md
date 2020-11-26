---
title: CSS Variables
date: 2020-11-24T16:03:57.225Z
description: also known as custom properties
---
CSS Variables have been around for a while and designed to try and reduce duplication in CSS. They are prefixed with `--` and can be used in declarations using `var()` function e.g.

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

**It is important to note that these _are_ case sensitive** so `--bg-colour` and `--BG-colour` are seen as two separate properties.

To see the current support see [caniuse.com](https://caniuse.com/?search=css%20variables) fairly good support in modern browsers although if you need to support IE they won't work.

#### Inheritance

Custom properties do inherit meaning if no value is set it will inherit from its parent e.g.

```css
\\ add examples
```

