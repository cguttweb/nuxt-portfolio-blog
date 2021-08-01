---
title: CSS Media Queries
date: 2021-08-01T15:11:26.485Z
description: responsive design
image: null
---
Media queries are used to modify your site or app depending on a devices types or specific characteristics e.g. width or screen resolution. They include the media type and the feature to be checked against.

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
@media (min-width: 481px) and (max-width: 768px) and (orientation: portrait){
  .main-nav { display: block; }
}
```

A full list of features can be seen on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)

There are some newer queries that were added in [level 5](https://drafts.csswg.org/mediaqueries-5/) of the specification including `prefers-color-scheme` and `prefers-reduced-motion`. 

- **prefers-color-scheme** - this is used to check if a user has indicated a preference for a light or dark theme either via their operating system or a user agent setting e.g.

```css
/* this is the default option if no preference is set */
@media (prefers-color-scheme: light){
  :root {
    background: #ffffff;
    color: #333333;
  }
}

@media (prefers-color-scheme: dark){
  :root {
    background: #333333;
    color: #ffffff;
  }
}
```


- **prefers-reduced-motion** - this checks if a user has requested the system minimize the amount of non-essential motion it uses.

**Note**: These are **not** supported in Internet Explorer but is in all other major browsers*
