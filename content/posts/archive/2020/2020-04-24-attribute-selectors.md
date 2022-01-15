---
layout: posts
title: "Attribute Selectors"
date: 2020-04-25
excerpt: Attributes are part of HTML markup...
---

#### What is an attribute selector?

Attributes are part of HTML markup giving elements further details e.g href on a tags using CSS you can target these attributes and their values. 

Attribute selectors are shown by square brackets `[]` e.g.

```css 
a[title]{
    color: #000000;
}

a[href="https://"] {
    color: #CC0000;
}

div[lang|="en"] {
    font-style: italic;
}
```

The first example will match a tags with a title attribute, the second will target any a tags with mailto links and the final will match any divs with the exact lang value of en _or_ en followed by a hyphen. 

#### Substring matching selectors

- `[att^="val"]` = begins with
- `[att$="val"]` = ends with
- `[att*="val"]` = contains

```css

a[href^="https://"]{
    background: green;
    color: white;
}

a[href$=".pdf"] {
    background: yellow;
}

img[src*="thumb"] {
    border: 2px solid #CC0000;
}
```

I've created some examples are on [codepen](https://codepen.io/cgweb/pen/gOamEEz)
