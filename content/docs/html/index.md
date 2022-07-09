---
title: HTML
description: The building blocks of web development
position: 1
---

## Getting started

HTML stands for **H**yper**T**ext **M**arkup **L**anguage it is the structure of web pages. You can create a very basic HTML5 structure using the [emmet plugin](https://www.emmet.io/) `html:5` or simply `!` which gives this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Your content added here -->
</body>
</html>
```

To learn more about emmet check out this great [cheat sheet](https://docs.emmet.io/cheat-sheet/)

When HTML5 was released it introduced a number of semantic elements including `<header>, <footer>, <article>, <aside>` and others.


```html
  <main>
    <section>
        <header>My section heading</header>
        <p>This is a great article about HTML.</p>
        <footer>Copyright 2020 by The Author<footer>
    </section>
  </main>
```

**Nav** elements generally appear at top or left of a site, but can be used elsewhere e.g. to contains links in a footer element although this isn't strictly necessary. Pages can quite often contain multiple nav elements - one for main site navigation and another for intra-page navigation. If doing this it is a good idea to use [`aria-labelledby`](https://a11yproject.com) attribute for those using screen readers.

**Article** is used for a self-contained content not related to the page e.g. a news site would have multiple article elements. Note each of these elements should contain a heading tag as a child element.

**Aside** is used for content indirectly related to the main content of the page usually a sidebar or some sort of call out box.

**Section** element is a standalone section within a page (usually containing a heading) which as MDN states:

> which doesn't have a more specific semantic element to represent it

It should not be used as a generic container for content this is what divs are used for. A general rule of thumb is if it appears in a document outline it should be in its own section.

**div** - this is for content that doesn't fit in any of the other examples