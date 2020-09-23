---
title: Regular Expressions
category: Miscellaneous
---

There are number of functions are used with regular expressions more comminly known as regex.

- `exec()` - returns result in array/null
- `test()` - returns a boolean value

#### Flags

```javascript
let regEx

regEx = /hello/i // case insensitve
regEx = /hello/ g // global
```

- `match()` - returns result of array or null

```javascript
const str = `Hello there`
const result = str.match(regEx)
```

- `search()` - returns the index of 1st match if not returns -1 (works the same as using indexOf)

`const result = str.search(regEx)`

- `Replace()` - returns a new string with some/all matches of a pattern e.g.

```javascript
const myStr = `Hello World!`
const myNewStr = myStr.replace(regEx, `Hi`)
```

#### Metacharacter Symbols

`^` - must start with this
`$` - must end with (word/character) e.g. 

```javascript
myRegEx = /^hello$/i
```

`.` - will match any single character
`*` - will match any characters 0 or more times (wildcard)
`?` - optional character e.g.

```javascript
regEx = /gre?a?y/i
```

`\` - escape characters as per JavaScript e.g.

```javascript
regEx = /gre?a?y\/i
```

#### Character sets and quantifiers

- `[]` - character set or range
e.g. `regEx = /gr[ae]y/i` - value **must** be an a or e
`regEx = /[^GF]ray/i` - match any except G or F because it is inside
`regEx = [A-Za-z]` - will match any letter of any case
`[A-Z]` - uppercase only
`[a-z]` - lowercase only
`[0-9]` - any digit

- `{}` - quantifiers

```
regEx = /Hel{2}o/i
``` 
character goes before braces it must match the exact number specified

```
regEx = /Hel{2,4}o/i
```
can include a range between 2 or 4

```
regEx = /Hel{2,}o/i
``` 
must occur at least x number of times in this case 2

- `()` - grouping e.g.
```
regEx = /([0-9]x){3}$/
str = 3x3x3x
```

#### Shorthand character classes

`\w` - word character
`\w+` - + = one or more
`\W` - non world character
`\d` - match any digit
`\D` - match any non digit
`\d` - match any digital 0 or more times
`\s` - match whitespace character
`/S` - match any non whitespace character
`\b` -  word boundary

e.g. `regEx = /Hell\b/i`

#### Assertions (like conditionals)

e.g. `regEx = /x(?=y)/` - match only if x is followed by y

`regEx = /x(?!y)/` - match if x not followed by y
