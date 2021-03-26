# Blog Post Ideas

- Gridsome - setup and thoughts on it so far...
  - vue meta-gridsome - need to look at this
- Vue - anything new I learn
- Tailwind CSS (adding to Gridsome/webpack/projects)
- dev.to community
- vscode and its plugins e.g prettier/eslint
- people who have non-tech degrees getting into tech/programming
- JAMstack once I've learnt about it
- webpack?
- PostCSS?
- General web dev thoughts
- HTML emails
- font awesome/icon fonts
- accesibility as I increase my understanding e.g. aria-label
- React/Gatsby when I start to learn although playing around with gatsby very similar to gridsome but the styling is in the JS which I'm not sure I like.
- Attribute selectors, psuedo classes and elements e.g. nth-child, :root, :not, ::first-letter
- Anything else when inspiration strikes
- GatsbyJS + netlifyCMS/forestry CMS
- CSS selectors which could be used as a reference
- ES6+ ?
- font awesome icons
- nuxt config file
- setting up own web dev docs
- setting up rss feed on nuxt with content module
- setting up sitemap.xml file
- coding challenges
- working with gatsby/graph ql
- anything nuxt based?

Coding challenge

  // You're given two integer arrays (n and m) and an integer k. Using the digits from n and m return the largest number you can of length k.
  let n = [3, 4, 6, 5]
  let m = [9, 0, 2, 5, 8, 3]
  let k = 5

  let largestNum = []
  const maxNum = function(n, m, k){
    // Iterate over both arrays find largest number
    let mMaxNum = Math.max(...m)
    let nMaxNum = Math.max(...n)

    m.forEach(num => {
      
    });

    largestNum.push(mMaxNum, nMaxNum)

    return largestNum
  }

  maxNum(n, m, k);
  // should return 98655