---
title: Keyboard events
date: 2021-07-04T18:39:58.266Z
description: some accessibility
---
There are 3 keyboard events:

* `keyup` - this event activates when lifting off a key
* `keydown` - this event is called when you hit any key
* `keypress` - triggered on any keypress

```javascript
const getKeyNames = event => {
  console.log(event) // this will log the object with information on the event

  if(event.key === 'Enter'){
    return `You hit the Enter key`
  } else if (event.key === 'Tab') {
     return `You hit the tab key`
  } else {
    return `You hit a different key`
  }
}

document.addEventListener('keypress', getKeyNames)
```

* `accesskey` - this is used to specify a shortcut key to focus on a particular element on the page and is useful for keyboard-only users.
* `tabindex` - the behaviour is determined by the value given the default is 0. This value can be positive or negative. The default order is determined by HTML markup if you set values to 1, 2, 3, etc these will override the markup and is generally best avoided best to just stick to 0 values so when tabbing it will follow the order of the markup.

Some elements e.g. links and input are focusable by default