---
title: ES6/ES2015
category: JavaScript
position: 4
---

**ES6** or **ES2015** was the 6th version of ECMAScript. (Wes Bos does a great course on this [es6.io](https://es6.io))

## Arrow Functions

### JavaScript Modules

Using modules can help with maintainability of your code. **Note they won't work in IE**

- use of import and export keywords
- control access
- encapsulate code
- reference its own dependencies

Things to note:

- 1 module per file
- exports are static
- modules are singleton whichever file uses it receives the same instance
- properties are bound

#### Named Exports

If you are exporting at the bottom of a file rather than through a function it needs to be a list e.g. `export { getSessions }` curly braces are important as it will not work without them.

#### Default Exports

You can only have one as a default e.g.

```javascript
export { getSessions as default, named exports list }
```

#### Aggregating Modules

This makes everything into one import

You'll need to add `type="module"` onto the script tag e.g. `<script src="app.js" type="module"></script>`

use `*` to import everything from a file
