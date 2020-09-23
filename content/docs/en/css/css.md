---
title: CSS
category: css
position: 3
---

## Getting started

CSS stands for **C**ascading **S**tyle **S**heets and is the styling layer of a website or application.

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
