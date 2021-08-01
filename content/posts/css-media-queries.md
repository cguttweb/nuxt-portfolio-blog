---
title: CSS Media Queries
date: 2021-08-01T15:11:26.485Z
description: responsive design
image: null
---
Media queries are used to modify your site or app depending on a devices types or specific characteristics e.g. width or screen resolution. They include the media type and the feature(s) to be checked against.

Possible media types are:

- all - this is implied when using just `@media` without a specific type
- screen - for all screens e.g. pc or phone/tablet
- print - docs viewed on screen in print preview mode and paged material
- speech - for speech synthesizers

Media features are specific characteristics of browser (user agent), device or environment and possible features include width, height and orientation.

The most common example is the use of width (which means view of viewport) for responsive design e.g.

```css
@media (max-width: 480px) {
  .main-nav { display: none; }
}
```

You can use either min or max-width or a combination of them e.g.

```css
@media (min-width: 481px) and (max-width: 768px) {
  .main-nav { display: block; }
}
```

- **orientation** - checks the orientation of the viewport **NOT** device orientation value can be portrait or landscape
- ** height** - as with width this is based on the _viewport_ height and can use min and max-height

There are some newer queries that were added in [level 5](https://drafts.csswg.org/mediaqueries-5/) of the specification including `prefers-color-scheme` and `prefers-reduced-motion`. 

- **prefers-color-scheme** - this is used to check if a user has indicated a preference for a light or dark theme either via their operating system or a user agent setting e.g.

```css
/* this is the default option if no preference is set */
@media (prefers-color-scheme: light){
  :root {
    background-color: #ffffff;
    color: #333333;
  }
}

@media (prefers-color-scheme: dark){
  :root {
    background-color: #333333;
    color: #ffffff;
  }
}
```

- **prefers-reduced-motion** - this checks if a user has requested the system minimize the amount of non-essential motion it uses. This is enabled in accessibility preferences and animation is reduced to a simple dissolve which help avoid motion sickness triggers. The options available for this are `reduce` or `no-preference`. 

```css
@media (prefers-reduced-motion: reduce){
  .main-nav {
    animation: none;
  }
}
// OR
@media (prefers-reduced-motion: no-preference)
```

**Note**: These are **not** supported in Internet Explorer but is in all other major browsers*

Complex media queries can be created with logical operators `and`, `or` and `only` and several queries can be added into a single rule. If using `only` operator a media type e.g. screen must be included

```css
@media screen and (min-width:320px) and (max-width:500px) and (orientation: portrait){
}

To match this query a viewport must be between 320px and 500px and have a portrait orientation
```

A full list of features can be seen on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features) although many of these don't yet have much support in browsers.