---
title: CSS @supports rule
date: 2021-07-29T13:23:03.564Z
description: feature queries
---
This is described by MDN as allowing you to "specify declarations that depend on a browsers support for specific CSS features".

A couple of simple examples to check if a feature is supported or not:

```css
@supports (display:grid){
  main { display: grid; }
}

@supports not (display:grid){
  main { display: block; }
}
```

These simple examples can be made more complex through the use of `not`, `and` and `or` operators. Firstly the `not` operator is used to check if a property/value is not supported e.g. display grid in the example above will be matched in Internet Explorer but ignored in modern browsers.

The `and` operator will only be matched when all expressions evaluate to true - multiple options can be chained together e.g. 

```css
@supports (display:grid) and (display:inline-grid) {
// do something
}
```

The `or` operator will match if any of the given expressions are matched e.g.

```css
@supports (display:grid) or (display: flex){
// do something
}
```

I also learnt it is possible to check for support of custom properties e.g.

```css
@supports (--bgcolor: red){
  body { background-color: var(--bgcolor); }
}
```