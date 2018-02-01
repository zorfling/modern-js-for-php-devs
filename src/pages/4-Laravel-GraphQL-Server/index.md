---
title: Build a GraphQL server with Laravel
date: "2018-01-17T09:19:32.169Z"
path: "/laravel-graphql-server/"
status: "DRAFT"
---

One of the cool new things coming out from Facebook Open Source is GraphQL.

## What is GraphQL?

GraphQL is a specification for communicating with APIs. You can think of GraphQL as an equivalent to REST, where GraphQL and REST are both just specifications for how to communicate with an API.

## Why is GraphQL awesome?

GraphQL is awesome because it

* has a single endpoint
* allows for relational queries
* eliminates over-requesting and under-requesting
* All the data in one request
* Versioning can be mitigated
* Can combine disparate data sources into a single API

## How do we do it?

To use GraphQL, we need two parts. First we need a GraphQL server, and then we need a GraphQL client. In this post we'll build out a GraphQL server in Laravel, and then in a following post, we'll build a client app which uses our new server to display some data.

## Let's go!

Maybe we should look here too https://github.com/steveluscher/zero-to-graphql

Let's use https://github.com/Folkloreatelier/laravel-graphql to create a GraphQL server with Laravel

* Crank up a new laravel app
* Install laravel-graphql
* New controller action
* Pump it out!
* GraphiQL

## Other cool GraphQL endpoints


https://github.com/APIs-guru/graphql-apis
