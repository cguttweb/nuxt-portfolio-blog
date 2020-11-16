---
title: Vue anmations and transitions
date: 2020-11-16T15:45:44.136Z
---
Transitions - can include multiple elements but can oinly show  one at a time.

In most cases use v-show and v-if to show/hide elements in most cases

There are a number of classes aavialble for transitions in css these are:
- *-enter
- *-enter-active
- *-leave
- *-leave-active

* = is the name given to the transition. These same classes can be used with animations as well as setting up a keyframe.

Note if using transitions and animations together can cause issues so make sure to specifiy the type on the transition e.g. `<transition name="fade" type="animation">`

There is the option to setup an initial on-load animation by adding "appear" property to the transition.