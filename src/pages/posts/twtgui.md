---
layout: ../../layouts/MarkdownPostLayout.astro
title: developing twtGUI
author: taxevaiden
description: tbh i just need something to write about and i thought this was interesting enough,
pubDate: 2026-2-26
url: /posts/twtgui/
---

for a while now i've been working on a GUI client for the twtxt protocol ([what is twtxt?](https://twtxt.readthedocs.io/en/latest/))

i started making one when i was first introduced to twtxt by mango-ki. i started using it and thought it was pretty neat, but i was getting tired of having to use the terminal. (this was the first [twtxt client by buckket](https://github.com/buckket/twtxt)) so i made by own!

## electron

i decided to use electron to make the client. this was a time i worked on websites A LOT so i thought this was a good choice. it would also be easier to style, since i also had experience with tailwindcss (i love you tailwind)

i also used the astro framework for it aswell. now that i talk about it astro lowk was an odd choice for electron (at least i think it was) since this client literally started a web server on your pc, and had electron connect to it but uhh oh well i'm not even working on this version anymore

it just used node.js to call the twtxt client's commands, and then parsed the output to display it in the GUI. very weird but it worked! but i knew this wasn't going to be good for the future. i'd imagine one day if i actually committed to working on this version of twtGUI i would go insane

"why the Fuck did i call twtxt's commands instead of downloading the feeds myself????"

"i was a terrible dev oml"

so eventually i stopped working on it. imo it was the coolest looking client!

![the inital client](../../images/postImages/twtgui/index-v0.1.0-alpha.png)

## qt

when developing the electron client, someone suggested that i should use qt instead. (qt's a really cool cross-platform framework for developing GUI applications) i didn't have any expereince with c++, so i continued to work on the electron client. after realizing that the electron client wouldn't be a good expereince to further develop, i started looking at qt.

even though i still had no experience with c++, i applied my general knowledge of coding and thought this would be a good way to learn c++ and qt!

instead of calling the twtxt client's commands, i did the parsing and downloading myself. appending lines to the end of a twtxt.txt file and parsing were trivial to implement in c++, but downloading was a little more complicated. i had to use the libcurl library to implement downloading. it wasn't like TONSSS of work but i hadn't really done this before so understanding how it worked and how i should use it in my c++ code took a little while. i got it to work tho! and it looked great!

![the Qt client](../../images/postImages/twtgui/cutietwtGUI.png)

i made the client start new threads for each feed that it has to download, so it
  - wouldn't block the GUI (it doesn't run on the GUI thread)
  - it just loads faster
  
  
i also made it automatically cache the feeds you download, so you don't have to unnecessarily make requests and process an Entire feed
  
overtime, i started adding more and more features (like colored names), but then i hit a roadblock.

for some reason, when i clicked the Refresh button in either the timeline or the view page, the client would crash with an exception saying "Unknown signal." i suspected it had something to do with the way i was handling the threads, after all the code for deleting threads that were completed *did* seem a little risky,,

or maybe i was clearing the feed wrong? or adding tweets to the feed wrong? i don't know!!

a while ago, i did find out that it downloaded the feeds just fine, and it even got to the parsing stage! it only crashed when it had to add tweets,,,,, 

i knew that in c++ i had to manage memory myself but that seemed really painful so....

screw c++ we are rewriting twtGUI in rust!!

(to this day i still don't know what caused the unknown signal)

## rust

### egui

for this first iteration of the rust twtGUI rewrite i decided to use egui.

egui is an immediate-style gui framework. it's designed for game engines as far as i know, but it can also be used for desktop applications too!

again, parsing and appending lines to the twtxt.txt were trivial in rust (and were actually even better for this imo) and then i had to implement downloading.

and then i quit because i did NOT want to continue using an immediate-style gui framework. don't get me wrong, egui is a great gui framework for prototyping or game engines, but i don't think it's great for something like this.

so, i had to use a different one....

![the egui client](../../images/postImages/twtgui/eguitwtGUI.png)

tbh i think the custom titlebar was cool. i don't know if you could implement it in something like the gui framework i'm about to talk about,

### iced

iced is a gui framework inspired by [The Elm Architecture](https://guide.elm-lang.org/architecture/). instead of defining what something like a button does in an if statement for when it's clicked, you can make a button fire a message which makes like some counter go up.

[halloy, an IRC client](https://halloy.chat/index.html) also uses iced, so i could ~~steal~~ look at their code to see how they implement some things

again, i implemented much of the same features as the c++ client. parsing, appending lines, donwloading, all the good stuff. eventually, i had a working twtxt client!

![the iced client, showing the inital timeline](../../images/postImages/twtgui/icedtwtGUI.png)

then, i decided to implement the [twtxt v2 specification](https://twtxt.dev), developed by the devs of [twtxt.net](https://twtxt.net). it adds on a couple of extensions to the twtxt format, like metadata defining the feed's author, description, and even its avatar, or tweet hashes.

tweet hashes and metadata were easy to implement. i had to change my downloading code a litte to allow for avatars to be downloaded, but with only these two added, twtGUI was looking cooler than before! 

![the iced client, in the view page with cool avatars!](../../images/postImages/twtgui/icedtwtGUI2.png)

implementing the tweet subjects extension was a little involved. i had to use regexes to find where mentions and subject hashes are placed in a tweet, and do that without making the entire client block for like 10 seconds

i'm not going into detail, but it did work out in the end. i don't have something like *threads* shown in the timeline, for now it just only shows when a tweet is a reply to another.

![replies](../../images/postImages/twtgui/twtGUIreplies.png)

i plan on doing this soon tho, so stay tuned !!

i'll also mention, even when running on a laptop that is MUCH SLOWER than my pc, it downloads and parses 11 feeds really fast! probably because it's on linux, but still!

anyway, i really do hope this is something i can maintain for like weeks or months or even years

![the iced client as of writing](../../images/postImages/twtgui/icedTimeline.png)

[source code](https://github.com/taxevaiden/twtGUI)

## what now

i think once i get twtGUI in a good state i'll use twtxt more often. i haven't posted to my feed in a while and i'm mostly just using twitter (the shit i keep finding on there is crazy)

if you're reading this post and you have a twtxt feed but you don't have some metadata Can you please add it i want my timeline feed to look cool. all you have to do is put something like

```
# nick = john
# description = My (awesome) personal feed!
# url = https://example.com/twtxt.txt
# avatar = https://example.com/avatar.png
# following = jane https://example.com/twtxt.txt
# following = joe https://example.com/twtxt.txt
```

at the top of your file

ok bye
