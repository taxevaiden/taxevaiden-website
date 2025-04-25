---
layout: ../../layouts/MarkdownPostLayout.astro
title: making my own dithering filter... kinda - part 2
author: taxevaiden
description: tax dithering in the comfort of your own terminal
pubDate: 2025-4-24
url: /posts/dither-filter-pt2/
---

*the previous post on this topic can be found [here](https://taxevaiden.pages.dev/posts/dither-filter/)*

ever since i've worked on that filter that's somewhat similar to actual dithering, i've been working on a command line tool to make it easier to apply it. (no i didn't work on it for a month i just procrastinated on making this post) i just named it cmdFilter, and it supports windows only! i don't think i'll have to care much since i'll only use windows from now on, right?

*foreshadowing*

## how did you do it?

this is uh, basically what i used:

- Love2D
- Lua
- Some GLSL shaders (for the filters ofc)

as you can tell, it's the same tools i used to make the examples in the last post. i was the most comfortable using Lua to make something like this, since i *think* it might be good for making command line tools but i don't know

## the process

i'm not giving out code examples since i'm too lazy but umm i will say the entire thing is in like one file (except for another one for like config and others for the filters but whatever)

### getting started

by this, i mean making the window become very small. 1 by 1 pixels small. i also made it a borderless window so it's not really visible. not much more to it.

### loading the image

the first parameter is the image file path.

what i did was i FIRST checked if the image actually existed. if it did, i used Love2D to load the image. there's not really much going on in this section so,,,, yeah

### loading the shader

the second parameter is a filter. there's a provided selection, more than just the filter i made,, i made like,

- dithering (for reals, saves file space)
- chromatic abberation
- jpeg, just for funsies. (this isn't on the repo, i never commited the changes and it's forever on my windows PC which i might not boot up)

so yeah, that's a fun selection. anyway, i had a table, with information about each filter. the code looks through this table, looking for a match between the filter name and the second parameter. after it finds a match, it loads the shader file.

### rendering to a canvas

using Love2D's canvas feature, i created a canvas with the same dimensions of the input image that was provided. i applied shaders with ease, and rendered the image to the canvas. after that i pulled the resulting ImageData from the canvas and stored it in a variable to use in the next step!

if you weren't able to pull the ImageData from the canvas i would be BEYOND cooked.

### saving to an image

i used a mix of Lua's built in file functions and Love2D's image features to do this.

i genuinely forgot what was going on (since i don't want to look at the code) BUT i think i can infer something idk

using Lua's file functions, i opened a new file to write to. i then wrote the ImageData to the file, and closed the file. there was also encoding going on, but i'm not really sure where that would go.

success!! new image file with the filter you want applied.

## "i'll only use windows from now on, right?"

i lied to myself LMAO

as you know,, a relative gave me their mac mini. it has an M1 processor, and it's really really fast, but that introduces a problem with using this.

i can't use this tool i made on macOS.

i made this tool entirely on windows, before i got the mac mini, so um... i might be cooked. it's not like i can use Boot Camp, since windows obviously does not support the ARM based M1 processor. i know i said i was going to implement thumbnails for my blog posts soon, but i'm not sure if i'll be able to do that on macOS. i'll have to figure that out later. i'll also have to figure out how to make this tool work on macOS.

that's a problem for another day.

i might develop a whole new tool that's better than the current version of cmdFilter in c++ or something, but i'm not sure where to start. it's ok though... i'll figure it out like i said...

## the future,,,

again, i'll have to make something like this work on macOS. after that, i might get started working on the blog post thumbnails.

i have a design in mind that i'll probably draw out later. after i do that i might edit this post to add the sketches here.

this might be *completely* wrong, but since macOS is Unix based, the new tool i'll develop might also support linux, since it's Unix-like. not entirely sure if this is true, but um i'll probably wait for someone to test it on linux so i can confirm it's supported. (maybe i can test this on my laptop that i mess around with?)

ok bye
