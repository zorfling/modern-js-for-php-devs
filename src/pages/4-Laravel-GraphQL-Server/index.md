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

### Add a database

I'll use [Laradock](http://laradock.io) to serve and provide a MySQL database for our users, but you could just as easily use Homestead or a locally installed Mysql database with Valet.

Configuration of this step is beyond the scope of this post, but see the [repo](https://github.com/zorfling/laravel-graphql-server) and [Laradock docs](http://laradock.io/getting-started/) for a configured Laradock setup, or the docs for [Homestead](https://laravel.com/docs/5.6/homestead) or [Valet](https://laravel.com/docs/5.6/valet)

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
        'type' => Type::nonNull(Type::int()),
        'description' => 'The id of the user'
    ],
    'first_name' => [
        'type' => Type::nonNull(Type::string()),
        'description' => 'The firstName of the user'
    ],
    'last_name' => [
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
    ],
    'friends' => [
        'type' => Type::listOf(GraphQL::type('Person')),
        'description' => 'Person\'s friends'
    ]
];
```

### Add People Data

So we have something for our GraphQL API to return, let's add some people to the database.

```bash
$ ./artisan make:model Person -m
$ ./artisan make:seeder PeopleTableSeeder
$ ./artisan make:seeder FriendshipsTableSeeder
```

We'll add our columns to our `people` and our `friendships` table and some seed data for each.

```php
// database/migrations/2018_04_16_045416_create_people_table
...
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('username');
            $table->string('email');
            $table->timestamps();
        });
    }
...
```

```php
// database/seeds/PeopleTableSeeder.php

use Illuminate\Database\Seeder;

class PeopleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('people')->insert([
            'id' => 1,
            'first_name' => 'Kyle',
            'last_name' => 'Reyes',
            'username' => 'kreyes',
            'email' => 'kyle.reyes@example.com',
        ]);
        DB::table('people')->insert([
            'id' => 2,
            'first_name' => 'Emma',
            'last_name' => 'Thomsen',
            'username' => 'ethomsen',
            'email' => 'emma.thomsen@example.com',
        ]);
        DB::table('people')->insert([
            'id' => 3,
            'first_name' => 'Crispim',
            'last_name' => 'Ramos',
            'username' => 'cramos',
            'email' => 'crispim.ramos@example.com',
        ]);
    }
}
```

```php
// database/migrations/2018_04_16_051549_create_friendships_table.php
...
    public function up()
    {
        Schema::create('friendships', function (Blueprint $table) {
            $table->integer('person_id');
            $table->integer('friend_id');
            $table->timestamps();
        });
    }
...
```

```php
// database/seeds/FriendshipsTableSeeder.php

use Illuminate\Database\Seeder;

class FriendshipsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('friendships')->insert([
            'person_id' => 1,
            'friend_id' => 2,
        ]);
        DB::table('friendships')->insert([
            'person_id' => 1,
            'friend_id' => 3,
        ]);
        DB::table('friendships')->insert([
            'person_id' => 2,
            'friend_id' => 1,
        ]);
        DB::table('friendships')->insert([
            'person_id' => 2,
            'friend_id' => 3,
        ]);
        DB::table('friendships')->insert([
            'person_id' => 3,
            'friend_id' => 1,
        ]);
        DB::table('friendships')->insert([
            'person_id' => 3,
            'friend_id' => 2,
        ]);
    }
}
```

And add our Person model

```php
// app/Person.php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    public function friends()
    {
        return $this->belongsToMany('App\Person', 'friendships', 'person_id', 'friend_id');
    }
}
```

### GraphQL Queries

Now we're ready to add our GraphQL queries. I should probably rabbit about what a GraphQL query is about now.

#### All People Query

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
public function type()
{
    return Type::listOf(GraphQL::type('Person'));
}
```

And add our resolver

```php
public function resolve($root, $args)
{
    return Person::all();
}
```

#### Person Query

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
public function type()
{
    return GraphQL::type('Person');
}
```

And add our resolver

```php
public function args()
{
    // this allows us to query a particular id
    // it is passed to resolve() below
    return [
        'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())],
    ];
}

public function resolve($root, $args)
{
    if (isset($args['id'])) {
        return Person::where('id', $args['id'])->get()->first();
    }
}
```

### GraphiQL

GraphiQL is a handy web based GraphQL client, baked in when we installed Laravel GraphQL. It's similar to something like Postman which you might have used for testing REST APIs.

Access it by going to http://localhost/graphiql

Test out some queries:

Get the username, first name and last name of all users, as well as their friends' usernames.

```
{
  allPeople {
    username
    first_name
    last_name
    friends {
      username
    }
  }
}
```

```
{
  "data": {
    "allPeople": [
      {
        "username": "kreyes",
        "first_name": "Kyle",
        "last_name": "Reyes",
        "friends": [
          {
            "username": "ethomsen"
          },
          {
            "username": "cramos"
          }
        ]
      },
      {
        "username": "ethomsen",
        "first_name": "Emma",
        "last_name": "Thomsen",
        "friends": [
          {
            "username": "kreyes"
          },
          {
            "username": "cramos"
          }
        ]
      },
      {
        "username": "cramos",
        "first_name": "Crispim",
        "last_name": "Ramos",
        "friends": [
          {
            "username": "kreyes"
          },
          {
            "username": "ethomsen"
          }
        ]
      }
    ]
  }
}
```

Get the username of user id 1, along with the username, first name, last name and email of all his friends.

```
{
  person (id: 1) {
    username
    friends {
      username
      first_name
      last_name
      email
    }
  }
}
```

```
{
  "data": {
    "person": {
      "username": "kreyes",
      "friends": [
        {
          "username": "ethomsen",
          "first_name": "Emma",
          "last_name": "Thomsen",
          "email": "emma.thomsen@example.com"
        },
        {
          "username": "cramos",
          "first_name": "Crispim",
          "last_name": "Ramos",
          "email": "crispim.ramos@example.com"
        }
      ]
    }
  }
}
```

## Other cool GraphQL endpoints

https://github.com/APIs-guru/graphql-apis
