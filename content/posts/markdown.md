---
title: Markdown
date: 2021-10-03T11:21:44.741Z
description: A lightweight markup language
---
Markdown was created in 2004 by John Gruber and Aaron Swartz as a lightweight markup language with the goal of enabling people to write using an easy-to-write and read plain text format with the option to convert it to structurally valid XHTML/HTML. There have several implementations since it was initially created with the need for additional features e.g. tables and footnotes.

## Basic Syntax

### Headings

Headings are indicated by `#` these range from `#` (h1) to `######` (h6)

```markdown
# This top level h1 heading
## h2 heading
### h3
#### h4
##### h5
###### h6
```

### Text Formatting

bold text - wrap text in double asterisks **this text will be bold** or double underscores and __so will this__

italic text - wrap text in underscores `_text_` or single asterisk `*more text*` so _this is in italics_ and so *is this text*

### Block quote

Use `>` to create a blockquote which can be also be nested:

> This will be a blockquote

```
> This is a block quote
>
>> This will be a nested quote
```

> This is a block quote
>
>> This will be a nested quote

### Lists

To create an unordered lists use `-`

```
- item 1
- item 2
- item 3
```

For ordered lists use `1., 2.` etc

```
1. item 1
2. item 2
3. item 3
```

### Code Blocks

You can create code blocks by wrapping the text in 3 backticks ` ``` ` with the option to add language for syntax highlighting e.g. ` ```css `

```css
h1 {
  font-size: 32px;
}

h2 {
  font-size: 26px;
}
```

### Links

To add links wrap text squarebrackets `[]` and the url in `()` e.g.

```markdown
[this is a link](https://duckduckgo.com "DuckDuckGo") // use quotes to add an optional title to your link
```

### Images

```markdown
![alt text goes here](image url here "add title text here")
```

I particularly like using it for my blog posts because it is easy to use and makes formatting text and code blocks straightforward. I use [prism](https://prismjs.com/) to provide syntax highlighting for my code blocks for info on how to do this with nuxt check out the [docs](https://nuxtjs.org/docs/directory-structure/content#syntax-highlighting)

If you're interested in learning more check out [Markdown Guide](https://www.markdownguide.org/) and the [cheat sheet](https://www.markdownguide.org/cheat-sheet/)