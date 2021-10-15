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
.main-nav {
  display: flex;
}
```

## Sibling and adjacent selectors

### General Sibling combinator

`~`

### Adjacent sibling combinator

`+`

```css
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