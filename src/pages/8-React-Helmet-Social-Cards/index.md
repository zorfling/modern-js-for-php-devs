---
title: Can I use React Helmet to add social card meta tags for Twitter and Facebook?
date: '2020-02-18T08:30:00.000Z'
path: '/react-helmet-social-card-meta-tags/'
featuredImage: './featured-image.jpg'
attribution: 'Photo by Bank Phrom on Unsplash'
status: 'DRAFT'
ad: 'react'
---

So you've built an awesome React powered site. It's shiny, and cool, and does everything you need... until your client/boss/best mate's dad asks about social sharing meta tags. 'Hey mate, I've heard you can put some tags in and I'll get the cool card when I share my pages on Twitter and Facebook?' Uhhh sure, just chuck them in [React Helmet](https://github.com/nfl/react-helmet) and you'll be sweet right? But hang on, it's not working!

So what's the deal, can you add social share meta tags with React Helmet?

Absolutely... with a caveat.

See, the problem is that the various social networks don't run your JavaScript and so won't see your dynamically updated meta tags as they're added on page load.

So the answer is that you need a way to either statically generate, or server-side render your React app.

Whilst not exhaustive, here are a couple of ways you can do that.

## React Snapshot

Probably the easiest if you've just got a Create React App (CRA) app, is to use [React Snapshot](https://github.com/geelen/react-snapshot).

React Snapshot takes your CRA app, follows any internal links it can find and generates a static site.

Just a simple npm install, update 3 lines and you've got a statically generated site.

## static-site-generator-webpack-plugin

If you've got a custom Webpack setup, you can use the [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)

This plugin formed the basis of Gatsby (mentioned next) before version 2.

## Gatsby

As primarily a static site generator, [Gatsby](https://www.gatsbyjs.org/) can do this out of the box. If you use the [blog starter](https://github.com/gatsbyjs/gatsby-starter-blog), you can use the [SEO component](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/src/components/seo.js)

Even if you're not using the blog starter, you can use the SEO component for inspiration and implement it in your site.

## Next.js

[Next.js](https://nextjs.org/) has a feature called [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export) which can statically render your site.

`$ next build && next export`

And if you're not using `getInitialProps`, you might not even need to use `next export`.

Next.js has a feature called [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization) which will automatically prerender `.html` files for those it can.

## Testing your social cards

Once you've set up your social card meta tags, you can test your meta tags using the following tools.

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
