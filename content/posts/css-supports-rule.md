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

These simple examples can be made more complex through the use of `not`, `and` and `or` operators. Firstly the `not` operator is used to check if a property/value is not supported e.g. display grid in the example above will be matched in IE but ignored in modern browsers.