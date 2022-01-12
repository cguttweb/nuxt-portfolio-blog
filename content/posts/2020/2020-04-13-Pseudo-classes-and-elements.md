---
layout: posts
title: "Pseudo Classes and Elements"
date: 2020-04-13
excerpt: A post on some powerful and often underused pseudo classes and elements
---

There are a number of pseudo classes and elements you can use in your code including
`::first-letter`
`::first-line`
`:root`
`:before`
`:nth-child`
among others.

### So what are they and when would you use them?

A pseudo element in CSS allows you to style a particular part of a selector e.g.

```css
p::first-letter {
  font-size: 4rem;
}
```

This will change the first letter of every paragraph element to font-size of 4rem. A fairly common use case for this would be drop caps for a newsletter/magazine article I ahve created a simple example on [codepen](https://codepen.io/cgweb/pen/VwvLdzR) 


Other common examples of pseudo elements include `::before`, `::after` (which can be used for generated content using the content property - more on this later) and `::first-line`. First-letter and first-line are often used to draw attention to a section or create a newspaper type layout.

The double colon (`::`) as shown above is to differentiate it from pseudo classes which are represented by a single colon e.g. `:nth-child`

One thing to note is you can only use **one** pseudo element per selector if you wished to use both first-letter and first-line for example you would need to declare to separate rulesets.

As I mentioned above both the before and after pseudo elements can be used to 'generate' content either before or after an element which is done using the content property e.g. styling items in the list with custom images. When using these with selectors it is important to note that you cannot use HTML markup you will need to use HTML entities e.g. `&lt;` or `&gt;` a site I've used to find these is [amp-what.com](https://www.amp-what.com) or unicode characters if you prefer.

Pseudo classes vary in that they are related to the element state e.g. `a:hover` to change styling when a link is hoevered over. Unlike pseudo elements you can chain multiple classes to the same element e.g. ...

Some of the most popular are those related to link states e.g. `:hover`, `:visited` as well as `:focus`, `:checked`, `:valid` and `:invalid` for styling form elements. Others I use regularly include `:root` for setting base font-sizes and `:nth-child` which is a powerful option that can be used in many ways (note: this is not supported in Internet Explorer) e.g.

```css
:nth-child(odd) {
  background-color: #999999;
}
```

You can target certain elements e.g. in a list `li:nth-child(3)` to select the 3rd list item or `li:nth-child(2n)` to select every 2nd item on the list. Negative values can also be used e.g. `:nth-child(-n+3)` to select the first 3 elements in the list.

Other nth-classes include `:nth-last-child`, `:nth-of-type`, `:nth-last-of-type`

I have created some simple examples using these on [codepen](https://codepen.io/cgweb/pen/ZEbGRwx)

`:not('any css selector')` is an interesting one as it needs a comma separated list of one or more selectors (this is experimental) it is known as negation pseudo-class - **any** elements that do not match the list are selected. (Use cases??)

`:root` is one I use often to set base font sizes the root element is usually the `<html>` element however this has a higher specificity. Useful for any global CSS variables it has good support e.g. 

```css
:root { font-size: 16px; }
```

`:empty` - this represents any element without children but note these children can be either elements nodes or text which will include any whitespace.