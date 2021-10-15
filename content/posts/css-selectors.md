---
title: CSS Selectors
date: 2021-09-23T18:48:48.766Z
description: CSS Selectors
---
## Element/tags

Target all `p` elements

```css
p {
  color: red;
}
```

## IDs

IDs must be unique on a page and are targeted using a `#` (hash) e.g.

```css
#my-page {
  background-color: yellow;
  color: red;
}
```

## Classes

Classes are reusable and can be added to multiple elements to target them use `.` (dot) notation

```css
.some-nav {
  display: flex;
}
```

## Sibling and adjacent selectors

### General Sibling combinator

`~` - this will match all iterations of the second element following the first and are children of the same parent

```css
// Targets any paragraphs that are siblings of and follow h2
h2 ~ p {
  color: blue;
}
```

### Adjacent sibling combinator

`+` - this will match the second element only if it directly follows the first element and both have the same parent

```css
// Any paragraphs that follows a h2 element
h2 + p {
  color: red;
}
```

## Pseudo Selectors

These are added to a selector that allows styling of a specific part of the selected element(s) and there are few that are available some of which I've never used but probably the most common are:

- `::first-line` - style the first line of a paragraph
- `::first-letter` - targets the first letter e.g.in a newspaper style
- `::before` - the first child of the selected element often used with content for UI improvements
- `::after` - as above but the last child of the selected element

```css
.intro::first-letter {
  font-size: 3rem;
  padding-right: 1rem;
}
```

## Pseudo Classes

I have used several of these around several projects but there are a couple I use for every project these are:

- `:root` - this targets the root element usually this is `<html>`
- `:hover` - can use this to change styling of an element when hovering over it with a pointing device e.g.

```css
a {
 color: #CC0000;
}

a:hover {
  color: #000000;
  font-weight: bold;
}
```

## Attribute Selectors

```css
```