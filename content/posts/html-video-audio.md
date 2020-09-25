---
title: HTML Video and Audio
date: 2020-09-02T14:55:48.543Z
---
A quick post looking at HTML5 `<video>` and `<audio>` elements

`video src=""` works the same way as image src add the type for video/mp4 and controls attribute - this is boolean so either true or false. You could also use autoplay but this is not the best idea.

could use self-closing tag or opening and closing `<video>` tags - with multiple sources this is the best option e.g. 

```html
<video controls>
    <source src="#" type="video/mp4">
    <source src="#" type="video/ogg">
</video>

<audio controls>
    <source src="#" type="audio/mp3">
</audio>
```

### Video captions

web vvt format `.vtt` - needs to be in particular file format

add track attribute under video sources then kind="" - technically captions but use subtitles for better capability e.g.
`lang="en" src="captions.vtt"` the default attribute displays them by default