---
title: Which Headless CMS should I use for a new Gatsby site?
date: '2020-04-19T21:00:00.000Z'
path: '/which-headless-cms-for-gatsby/'
featuredImage: './featured-image.png'
attribution: 'Illustration from unDraw'
status: 'PUBLISHED'
ad: 'react'
---

Gatsby is an awesome static site generator, but you need to get your data from somewhere. What are your options for headless CMSs?

## What is Gatsby?

[Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on React that helps developers build blazing fast websites and apps. It basically bashes together React, GraphQL and the so called JAM Stack to make some serious awesomeness.

## What is the JAM Stack?

The JAM Stack is a name standing for a modern way of building sites/apps with JavaScript, APIs and Markup. Commonly it involves server side generated code from Markdown and/or API endpoints.

## What is a headless CMS?

In this new JAM Stack world, your CMS backend and your frontend site are split. A headless CMS is simply a CMS which instead of pumping out HTML and CSS views, produces an API. There are many options from open source, to paid SaaS options, to trusty old WordPress.

## What are the options?

### Open source options

#### [Netlify CMS](https://www.netlifycms.org/)

Netlify is one of the most common hosting providers for the JAM stack. They've built an open source SPA which you can install as an npm module on your site, to provide a CMS experience over GitHub and Markdown, complete with editorial workflow using pull requests.

[Try it out](https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/)

#### [Strapi](https://strapi.io/)

Strapi is an open source, self hosted headless CMS written in Node. It provides both REST and GraphQL endpoints, with a customisable admin portal and API.

[Try it out](https://github.com/strapi/strapi-starter-gatsby-blog)

#### [Keystone](https://www.keystonejs.com/)

Keystone is a scalable, extensible and open-source platform to build NodeJS applications. It has first-class GraphQL support, and a great Admin UI.

[Try it out](https://www.gatsbyjs.org/docs/third-party-graphql/)

#### [WordPress](https://www.wordpress.org)

Even though WordPress is obviously a full CMS and blogging platform, it can also be used as a headless CMS by using its [REST API](https://developer.wordpress.org/rest-api/) or using the [WPGraphQL plugin](https://www.wpgraphql.com/) to provide a GraphQL endpoint. One thing to note is that you may have more or less success depending on how many plugins you use.

[Try it out](https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-starter-wordpress/)

### Software as a Service (SaaS)

#### [Sanity](https://sanity.io/)

Sanity is one of the new breed of SaaS headless CMSs. It consists of an open source CMS admin UI which you install as an npm package and host. This allows you to easily extend for your own workflow with their extension ecosystem. The admin then connects to Sanity for storing the data, and for authentication.

[Try it out](https://github.com/sanity-io/gatsby-source-sanity) |
[Pricing](https://www.sanity.io/pricing)

#### [Contentful](https://www.contentful.com/)

Contentful is one of the larger SaaS headless CMSs, and the oldest on our list here, being launched back in 2014. Clearly pitching themselves as the Enterprise solution, Contentful has the most clout, but also the price point to match. One thing to watch is that they may not have the features and extensibility common in the current generation of SaaS headless CMSs.

[Try it out](https://www.gatsbyjs.org/starters/contentful-userland/gatsby-contentful-starter/) |
[Pricing](https://www.contentful.com/pricing/)

#### [Prismic](https://prismic.io/)

Prismic is another of the new breed of SaaS headless CMSs. It provides an excellent hosted admin with the ability to easily add custom types, and publishes a REST and GraphQL API.

[Try it out](https://github.com/prismicio/gatsby-blog) |
[Pricing](https://prismic.io/pricing)

#### [Forestry](https://www.forestry.io/)

Forestry has been described as Netlify CMS on steroids. Like Netlify CMS, it connects to GitHub to store markdown files which is great for portability. Unlike Netlify CMS however, Forestry also provides a hosted CMS admin UI, providing a more polished, managed solution. However you can also deploy the editor to your own site with [Forestry Remote Admin](https://forestry.io/docs/editing/remote-admin/).

[Try it out](https://github.com/forestryio/gatsby-starter-blog) |
[Pricing](https://www.forestry.io/pricing/)

## Which one should you use?

Like everything, it depends! 🤷‍♂️

A lot of it comes down to how you want to store your data (git / hosted service) and the editing experience.

If it's a commercial site, you've got the money, or just really want something turnkey, then try one of the SaaS options. They all have free plans to start, so sign up and try them out to see what fits.

If it's a simple blog, Netlify CMS will do great. (in fact I'll be using it for the new version of this blog!)

If it's a bigger site / application, give a more full powered solution a go such as Keystone or Strapi.

And if you need to work with clients, you might be stuck with WordPress, but at least you can have some shiny front end tech and they get the benefits of a performant, secure site.
