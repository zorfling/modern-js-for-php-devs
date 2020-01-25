---
title: Why React or Vue and not jQuery?
date: '2018-01-28T22:55:32.169Z'
path: '/why-react-vue-not-jquery/'
featuredImage: './feature-image.png'
attribution: 'Illustration from unDraw'
status: 'PUBLISHED'
ad: 'jquery'
---

One of my colleagues has been playing devil's advocate and hitting me with variations of the following question for a week or two now.

His question, "Chris, jQuery is so quick and easy to get going, why would I possibly use something like React or Vue that has such a steep setup curve? And it has so many plugins! And why wouldn't I just keep using jQuery anyway? There's nothing wrong with it!"

So there's a couple of questions in that, so I'll try here to break it down. I'll start with the latter.

## Why shouldn't I keep using jQuery?

So the bottom line here is, because you probably don't need it anymore. jQuery was born in an age of ES5, when it was truly difficult to maintain browser compatibility, when functional paradigms were the bastion of mad scientist types (I'm looking at you, Haskell devs!) and as JavaScript as a web language was growing from the dark old days of DHTML, where JavaScript was used for nothing more than image rollovers, to a burgeoning new age of web application.

If you really don't believe that you don't need it, check out the great list at [You Might Not Need jQuery](http://youmightnotneedjquery.com/), and while you're at it, reconsider underscore/lodash with [You Don't Need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) and the accompanying eslint plugin.

## jQuery is so quick, how can React or Vue compete, and why bother?

The other argument for jQuery is speed to implement. We've all seen [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f), and yes, the more modern libraries need a build step. And yes, if you _just_ want to make a button click hide a div, one line of jQuery can get that out quick smart, no build required.

But with the advent of [zero-config (#0CJS) toolkits](https://github.com/reyronald/awesome-toolkits) such as [Create React App](https://github.com/facebook/create-react-app) and [vue-cli](https://github.com/vuejs/vue-cli), a fully featured build process and install is one node command away, then you're off to the races, with added bells and whistles such as hot module reload and the chance to use modern JavaScript features from ES6 and beyond.

And with tools such as [CodeSandbox](https://codesandbox.io) you can hack out a quick prototype quicker than you can say `<script src="https://`...

But really, it's what comes next that is the reason to leave jQuery for React or Vue. How often have you _only_ made a single button click hide a div?

Does this look familiar?

![Building software is often patches on top of patches on top of patches...](./building-software.png 'Building software is often patches on top of patches on top of patches...')
Image by [Manu Cornet](http://bonkersworld.net/building-software)

The reason to use one of these new component based libraries is that it makes you design your app in a different way (or actually design it at all). You think in components, you have a defined structure and data model, with predictable and maintainable structure.

## But what about all the plugins? Won't someone please think of the plugins?!

Yes, jQuery has been around so long it's basically got the "there's ~~an app~~ a plugin for that" covered.

But both Vue and React communities are growing so fast, and their component based systems are tailor made for plug and play functionality.

Next time you're looking for a drop in feature, try the amazing search over at devarchy for [React](https://devarchy.com/react) and [Vue](https://devarchy.com/vue).

Still not enough? You could always build a wrapper component for your fave library. Check out this post over on Medium to find out [How to Use jQuery Libraries in the React Ecosystem](https://notes.devlabs.bg/how-to-use-jquery-libraries-in-the-react-ecosystem-7dfeb1aafde0)

## So this is the end?

jQuery is an amazing library that changed the JavaScript landscape. But maybe it's time to hang up the dollar sign and use some pure JavaScript. Add a component based library and you'll never think about your code the same way again.
