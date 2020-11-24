---
title: CSS Custom Properties
date: 2020-11-24T16:03:57.225Z
description: also known as css variables
---
CSS Variables have been around for a while and designed to try and reduce duplication in CSS. They are prefixed with `--` and can be used in declarations using `var()` function e.g.

```css
:root {
  --header-background-color: red;
  --secondary-background-color: blue;
  --text-color: white;
}

header {
  background-color: var(--header-background-color);
  color: var(--text-color);
}

p {
  background-color: var(--secondary-background-color);
  color: var(--text-color);
}

```

**It is important to note that these are _case sensitive_** so `--bg-color` and `--BG-color` are seen as two separate properties.