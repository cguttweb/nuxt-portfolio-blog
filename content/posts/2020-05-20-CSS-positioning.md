---
layout: posts
title: CSS positioning
date: 2020-05-20
excerpt:
---

## CSS Positioning

A key part of layout on the web is CSS positioning of which there are 6 values these are:

- Static
- Relative
- Absolute
- Fixed
- Inherit
- Sticky

* `position: static` - this is the default option meaning elements will be added to the standard position in the flow of the document.

* `position: relative` - an element will be moved relative to its original position, however using its own will do nothing you need to use top, bottom, left and right to position the element. (You can use px, % any other type of unit for these values)

* `position: absolute` - this will remove an element from the standard flow of a document meaning that the parent of the absolute positioned element will ignore it and behave as though it isn't there. Setting top, bottom, let and right will relate to the whole document and not the parent element.

* `position: fixed` - this is similar to absolute but is unaffected by scrolling as it will help you position an element relative to the document. This could be used for sticky navigation or footer as it is removed from the document flow the only difference is fixed elements are always relative to the document.

* `position: inherit` - the position value does not cascade so this is used in circumstances where you need to specifically force it to.

* `position: sticky` - this is experimental with an element treated as if it were relatively positioned until you scroll and the viewpoint reaches threshold and the element 'stick' to a fixed position.
