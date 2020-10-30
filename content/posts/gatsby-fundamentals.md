---
title: Gatsby Fundamentals
date: 2020-10-30T17:55:12.306Z
---
First install the CLI:
`npm install -g gatsby-cli`

Creating a project is easy `gatsby new project-name` if no link is included it will use the default starter. If you want to start with a blank template use hello-world example.

Anything in `{}` is read as javascript

### CSS

There are multiple ways to use CSS in gatsby projects:
- usual css stylesheets - global stylesheet and import into `layout.js`
- sass/scss but will need to install node-sass/sass-loader
- styled components - emotion? - need to look this up at some point
- inline for small components
- css modules... use className not class as class is reserved word

(Look up gatsby remark plugins e.g. gatsby-remark-images will only work with .png and jpeg files. MDX plugin??)

(See design history for how I setup different colours for the pages using a function but I'm sure there must be an easier way to do it.)

Use React components for pages they can be functional or class based but now usually functional. 

Error page is used if navigating to page that doesn't exist it has to be 404.js as page name but function must be named different e.g. `errorPage`

Link component import from gatsby e.g.
`import { Link } from 'gatsby'`

You can only return one thing from a component but can use fragment `<></>` or can user semantic HTML e.g. `<main></main>`


#### GraphQL

pagequery = only in pages
static query = in components

useStaticQuery hook introduced after React hooks were added in most cases will use this

can setup variable outside the functional component and then assign useStaticQuery to the variable

field alias e.g. instead of siteMetadata use info this is done by adding alias: fieldname e.g. `info: siteMetadata {...}`

can use query name but they must be unique even if using in different components

allField field - nodes - all files listed depending on where the source-filesystem plugin is pointed to e.g. `src or src/images`

can use with contentful - a headless cms try with netlifycms?