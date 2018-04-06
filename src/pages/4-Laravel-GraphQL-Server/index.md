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

We'll be building upon Steve Luscher's awesome zero-to-graphql [talk](https://www.youtube.com/watch?v=UBGzsb2UkeY) and [repository](https://github.com/steveluscher/zero-to-graphql). In the talk he spun up a GraphQL endpoint in Django, Rails and Node inside 30 minutes.

It exposes a person model as follows:

```php
class Person
{
    /** @var string */
    public $id;

    /** @var string */
    public $firstName;

    /** @var string */
    public $lastName;

    /** @var string */
    public $username;

    /** @var string */
    public $email;

    /** @var Person[] */
    public $friends;
}
```

And two queries, `allPeople` to list all, and `person` to retrieve a Person by id.

We'll use Laravel and [Laravel GraphQL](https://github.com/Folkloreatelier/laravel-graphql) to create our very own GraphQL server with Laravel that meets this schema.

### Set up a new Laravel app

```bash
$ laravel new zero-graphql
```

### Add Laravel GraphQL

```bash
# Require the library
$ composer require folklore/graphql
# publish the graphql config and graphiql route
$ artisan vendor:publish --provider="Folklore\GraphQL\ServiceProvider"
```

### Add Person Type

```bash
$ ./artisan make:graphql:type PersonType
```

And add our fields

```php
return [
    'id' => [
        'type' => Type::nonNull(Type::string()),
        'description' => 'The id of the user'
    ],
    'firstName' => [
        'type' => Type::nonNull(Type::string()),
        'description' => 'The firstName of the user'
    ],
    'lastName' => [
        'type' => Type::nonNull(Type::string()),
        'description' => 'The lastName of the user'
    ],
    'username' => [
        'type' => Type::nonNull(Type::string()),
        'description' => 'The username of the user'
    ],
    'email' => [
        'type' => Type::nonNull(Type::string()),
        'description' => 'The email of user'
    ]
];
```

### Add All People Query

```bash
# Query to return everyone
$ ./artisan make:graphql:query AllPeopleQuery
```

Update the name to allPeople

```php
protected $attributes = [
    'name' => 'allPeople'
];
```

Update the type to a list of People

```php
return Type::listOf(GraphQL::type('Person'));
```

And add our resolver

### Add Person Query

```bash
# Query to return a person by ID
$ ./artisan make:graphql:query PersonQuery
```

Update the name to person

```php
protected $attributes = [
    'name' => 'person'
];
```

Update the type to a Person

```php
return GraphQL::type('Person');
```

And add our resolver

* New controller action
* Pump it out!
* GraphiQL

## Other cool GraphQL endpoints

https://github.com/APIs-guru/graphql-apis
