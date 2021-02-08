---
title: CSS
description: The styling/presentation layer to make everything look great
position: 2
---

## Getting started

CSS stands for **C**ascading **S**tyle **S**heets and is the styling layer of a website or application.

### Selectors

When targeting elements in CSS you have multiple options for how to target them using selectors.

```css
h1 {} /* targets h1 elements */

.title {} /* targets any elements for a class of title */

#headline {} /* target the element with id of headline */
```

### Positioning

**Absolute** - elements with absolute positioning do not affect and are not affected by other elements on the page. You use positioning offsets to position anywhere on the page e.g. `left: 0; top: 0;` will place your element at the top left of the page. You can use `%` or `ems` if you prefer for offset values.

This offset value is based on the parent container as the positioning contectt e.g. browser window but this can be changed.

**Relative** - this works hand in hand with absolute positioning. Absolute positioning is relative to first parent with relative positioning __BUT__ if no parent has relative positioning it is relative to the browser viewport by default.

**Fixed** - this is relative to the browser viewport and does not affect other elements on the page. Most common use case is for navigation and maybe footers so if it is a long page the user does not have continually scroll up or down.

### Z-Index

This will position elements based on stacking rule, so those elements later in the code will appear to 'stack' on top of those shown below. 0 is the default value. The higher the z-index value the further up the 'stacjk' an element is. This only works on absolute, relative and fixed positioned elements. 


### CSS Calc() function

As with any function this will perform calculations and return a result. It can be used in property values wherever length and number values are accepted e.g. height and width:

```css
.myContainer {
    height: calc(100%);
    width: calc(1300px - 50px);
}
```

It is at its most useful when mixing different types of measurements/values e.g.

```css
.myClass {
    height: calc(100% - 100px);
}
```

Another possible use case would be to create your own fluid grid (although with CSS grid this is perhaps not as useful but it is still an option) e.g.

```css
.col-1 {
    width: calc(100% / 12);
}
.col-2 {
    width: calc(100% / 12 * 2)
}
.col-3 {
    width: calc(100% / 12 * 3)
}...
```

### CSS Variables (CSS Custom Properties)

CSS Variables have been around for a while and designed to try and reduce duplication in CSS. They are a useful way to change multiple values at the same time. To create them you use a prefix with `--` and can be used in declarations using `var()` function e.g.

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