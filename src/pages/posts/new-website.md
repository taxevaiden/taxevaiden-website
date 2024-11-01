---
layout: ../../layouts/MarkdownPostLayout.astro
title: the new website is here!
author: taxevaiden
description: i am ASTRO-nomically shocked (please laugh PLEASE LAUGH)
pubDate: 2024-10-31
url: /posts/new-website/
---

welcome to the new website!

also happy halloween oooooo.....

this will be the new website from now on. i'll uh explain why i rewrote the site

## the code sucks bro :sob:

when i first made the og site, i was sort of a beginner. yes, i did have experience, but it was kinda limited. i didn't know the **secret cool practices of html**. that kinda resulted in me having pretty terrible code. and i continued to do this :') most of the code was somewhat good, but it felt very unorganized even with those little folders i put in to *attempt* to organize the code. (you can see these folders at [the old website's repo on github.](https://github.com/taxevaiden/taxevaiden-website-old))

it was also just, spaghetti

```html
<li>c++</li>
<li>c#</li>
<li>lua</li>
<li>luau (basically lua but it's roblox)</li>
<li>javascript</li>
<li>scratch</li>
<li>geometry dash (yes i am serious gd has triggers)<li>
```

i mean i guess it's not that bad but some other pieces of code are a bit,, worse

also most of the time i used chatgpt to help :skull:

## i wanted to try astro

i saw someone else use astro for their site and said, "hey maybe i can do that"

if you don't know what astro is, it's a web framework for making websites. it makes it easier. if you don't know what a framework is, astro is just something that helps making websites easier

that's another reason why i rewrote the site. once i found out about astro and started using it, oh my GOD it was so simple for my peanut brain... astro has these things called components and oml they are so useful

you basically just put a bit of html code into a component and you can reuse it. no more ctrl+c ctrl+v brah!! this helps a lot with making things like the "projects" tab (which is just bullet points at the time of writing this) MUCH easier, as the cards are now less tedious to type. and even if i can just do
```astro
<ProjectCardThingyIMightMakeLaterIDK><ProjectCardThingyIMightMakeLaterIDK>
``` 

there is another way to NOT type that!

you can set variables at the top of .astro files, and have the html code down below use those variables to automatically create the components for you

(sorry if you don't get it i can't explain very well :pensive:)

## making blog posts are so much easier (WOOO!!!!!)

for each blog post i had to copy and paste the index.html, remove everything, and write. yes this meant i had to do 

```html

<h1>hey what's up</h1>

<p>hello</p>

<p>still water...</p>

```

for every blog post. you can see why it was bad. but now, with astro, astro automatically converts markdown to html, and lets the user use **layouts** to let astro know what to do. yes layouts are in html.

"what is a layout"

i dunno search it up yourself :)

## conclusion,,,..,.,.,.

so basically i rewrote the site because the old one was trash (the code was awful) and also i wanted to try astro

ok bye