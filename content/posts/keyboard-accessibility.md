---
title: Keyboard Events and Accessibility
date: 2021-01-27T18:38:07.300Z
description: post on keyboard events
---
## Keyboard Events
input; // targets any input click, focus etc
focus; // e.g. when you click into input
blur; // when you click away from input

- **keyup**
- **keydown**
- **keypress**

accesskey - this is used to specify a shortcut key to focus on a particular element on the page and is useful for keyboard-only users.

tabindex - the behaviour is determined by the value given the default is 0. This value can be positive or negative. The default order is determined by HTML markup if you set values to 1, 2, 3 etc these will override the markup and is generally best avoided best to just stick to 0 values so when tabbing it will follow the order of the markup.

Some elements e.g. links and input are focusable by default