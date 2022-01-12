---
title: Attempting React and failing
date: 2020-11-01T16:31:21.078Z
---
Recently I have attempted to get started with React although its very different to Vue I thought knowing some ES6 and a bot about JSX having dabbled with Gatsby I had enough knowledge of some fundamentals to start learning React. 

I thought I'd have a go at re-creating one of my Vue apps using React as I built it with vue-cli I figured I'd use the React equivalent to scaffold the app:

`npx create-react-app My-React-App`

Fairly straightforward gave me a base folder structure pretty similar to Vue so I copied the HTML from my vue version removed all the vue related elements such as v-model etc added the same bootstrap styling all except I realised as class is a reserved word I needed to change everything to className quick find and replace job done...

Now to generate the list on the left-hand side of all of the different methods I copied my array object and thought that should be easier enough I'll just loop through the array and display each method on an `<li>` but no React doesn't like you cannot loop over an array of objects erm what? why? (I'm still unclear as to why you cannot do this in React...) but after failing miserably I googled and found an answer on stackoverflow doing this: 

```javascript
let methodsList = arrayMethods.map((method) => <li className="list-group-item" key={method.name}><strong>{method.name}</strong> {method.method}</li>)
```

which works and successfully loads the list of elements but what I thought would be simple turned out to not be. How you work with forms with React I've still no idea as their docs I don't find useful. Most of the examples in docs use class-based components which is for an older version of React as I understand it and using CRA now gives functional ones which make more sense to me. That's as far as I've gotten because I've attempted to use state with the form as people have suggested when I've asked and gotten absolutely nowhere. FOr the time being, React is being put on the back burner as my attempting to dive in was a dismal and utter failure so I clearly need to learn it from the ground up. 

[React version of array-helper](https://array-helper-react.vercel.app/)

Instead I'm going to focus on Vue/Nuxt fora while and come back to React early next year as I'm clearly not ready for it despite my thoughts overwise...

Lesson learnt React is going to be a lot harder to learn than I initially thought and yet everyone seems to think it is straightforward I disagree Vue is definitely an easier place to start.


