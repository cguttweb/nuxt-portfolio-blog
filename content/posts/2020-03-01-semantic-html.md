---
layout: posts
title: "Semantic HTML"
date: 2020-03-01
tags: ["html", "semantics"]
---

So what are semantics and why are they important?
Semantics in HTML refers to the purpose/role of the code rather than its styling/presentation. As a general rule any styling should done in CSS.
<br>

### Benefits of using semantic code:

- **SEO** (Search Engine Optimisation) using semantic tags provides information about the document helping communication making it clear what the page meaning is and what the contents are. All of this information is communicated to search engines which improves SEO and your page ranking.
- It will help visually impaired users navigate your pages more easily
- It makes it easier to find sections of meaningful code instead of nested divs

With the HTML5 specification several new tags were added including header, footer, nav, section and several others.

Let's start with probably the most commonly used elements - header, footer and nav. The **header** and **footer** elements as the name suggests would be used globally throughout a whole site but can also be used within sections e.g.

```html
  <section>
      <header>My section heading</header>
      <p>This is a great article about HTML.</p>
      <footer>Copyright 2020 by The Author<footer>
  </section>
```

**Nav** elements are the same generally they appear at top or left of a site, but can be used elsewhere e.g. to contains links in a footer element although this isn't strictly necessary. Pages can quite often contain multiple nav elements - one for main site navigation and another for intra-page navigation. If doing this it is a good idea to use `aria-labelledby` attribute for those using screen readers.

**Article** element is used for a self-contained content not related to the page e.g. a news site would have multiple article elements. Note each of these elements should contain a heading tag as a child element.

**Aside** element is used for content indirectly related to the main content of the page usually a sidebar or some sort of call out box.

**Section** element is a standalone section within a page (usually containing a heading) which as MDN states:

> which doesn't have a more specific semantic element to represent it

It should not be used as a generic container for content this is what divs are used for. A general rule of thumb is if it appears in a document outline it should be in its own section.

**Figure** (_and optional figcaption_) element usually contains an image, diagram, illustration etc that is referenced in the main document flow, but can be moved elsewhere without affecting the document flow. The figure could contain an image without figcaption or include the figcaption as either the first or last child.
