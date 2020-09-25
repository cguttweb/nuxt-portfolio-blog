---
layout: posts
title: 'Quiz App Update'
date: 2018-07-20
---

So it's been a while (again) although I am keeping my journal going not every day but at least a couple of times a week. There has been a World Cup this summer so I've spent rather a lot of time watching and then Wimbledon started watched quite a bit of that too.  

I have started building a quiz app called Quizzy using electron with gulp and sass with live reload and it was a bit of a faff setup took the best part of an afternoon to get it mostly working as I am using scss partial files imported into a main scss file and complied into a single CSS file. A work colleague fixed the live reload bit with sass as I had both const and a function called sass (whoops) spent best part of an hour he fixed it in about 10 mins always fun looking at your own code and don't see an obvious error so very easily done.

I've tried a couple of different options to try and pull in the questions I started with a basic text file to pull in the questions before scraping that and trying to use JSON. I restore JSON to remove a level of complexity so I could just pull out the relevant pieces of info.

I did attempt to use the Fetch API but it is quite new and I don't really understand it so I've reverted back to the tried and tested XHR or ```XMLHttpRequest()``` to at least get it to work I figure if I can get that far (with some ok probably quite a bit of help) I get then look at how to write the code much more efficiently using something like Fetch/Promises or maybe even something else I have yet to learn (we shall see)...

In other things Liverpool FC have made some great signings in Keita, Fabinho, Shaqiri (for £13m) and a world record fee of £66m for a goalkeeper in Alison Becker. Welcome to the best club in the world! I really am looking forward to this season.