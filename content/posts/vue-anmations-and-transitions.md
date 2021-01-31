---
title: Vue animations and transitions
date: 2020-11-16T15:45:44.136Z
---
Transitions - can include multiple elements but can only show one at a time.

In most cases use v-show and v-if to show/hide elements in most cases

There are a number of classes available for transitions in CSS these are:

* \*-enter
* \*-enter-active
* \*-leave
* \*-leave-active
* \= is the name given to the transition. These same classes can be used with animations as well as setting up a keyframe.

Note if using transitions and animations together can cause issues so make sure to specify the type on the transition e.g. `<transition name="fade" type="animation">`

There is the option to set up an initial on-load animation by adding the "appear" property to the transition.

`animate.css` for CSS classes can be used with/via a CDN option. To be able to use and override the default classes and can instead add attributes to transitions e.g.
```
enter-active-class = "animated bounce"
```

The names on transitions can be dynamic - bind as you would with any other element

It is important to note when transitioning between two elements `v-show` will *not* work but you can use `v-if/v-else` in most cases. They will need a unique key on each and set a mode either `in-out` or `out-in` for example fading out the first element before adding the second element.

Transition event hooks - these can be used instead of CSS classes but can be used with CSS.

`:css="false"` can be added to skip any CSS checks

enter and leave are the places to set any animations -  done needs to be passed as a parameter and called as a function on these two hooks.

**You can mix CSS and JS when creating animations**

You can bind dynamic components with is e.g.

```html
<component :is="name"></component>
```

You can use transition-group to animate a list. Unlike transition which does not render to DOM transition group _**does**_ render a new HTML tag. If using this you must include a key so vue can determine elements. You also have access to additional CSS class of move