---
title: React starter repo with Symfony 4 and Webpack Encore
date: "2017-12-07T22:22:32.169Z"
path: "/react-symfony-4-starter-repo/"
status: "DRAFT"
---

In the last post, we introduced Webpack Encore and why it makes for a quick start for modern JS with Symfony.

In this post, we'll set up a basic starter repo for a React frontend using Symfony and Webpack Encore.

As a bonus, as Symfony 4 was just released on November 30th 2017, let's use the latest and greatest and start with that.

## Set up a new Symfony 4 project

I'll assume that you've got a basic understanding of composer and Symfony, but if not, go check out the [Symfony quick start](http://symfony.com/doc/current/quick_tour/the_big_picture.html).

Ready? Ok let's go!

`$ composer create-project symfony/skeleton my-project`

Tip: you'll need composer to be installed globally for this to work.

This will create a directory called `my-project` in the current directory with a Symfony skeleton site, and use composer to install all the dependencies.

Next we'll set up some basic dependencies for our site.

`$ composer require annotations twig`

And we'll add a base template with a mount point for our react app.

## Configure Webpack Encore to add React

Webpack Encore is simply a node package, so we can install it using npm (or yarn). But since we're using composer flex, let's use it to bootstrap things.

```bash
# Create package.json, webpack.config.js and add node_modules to .gitignore
$ composer require encore

# Add react deps
$  yarn add --dev react react-dom prop-types babel-preset-react

# Actually install node package
$ yarn install
```

And finally, we need to enable the React preset in our `webpack.config.js`.

```js
// webpack.config.js
// ...
Encore
  // ...
  .enableReactPreset();
```

http://symfony.com/doc/current/frontend/encore/reactjs.html

## Set up a demo JSON API

We'll set up a basic JSON endpoint to display some dummy data.

```php
/**
 * @Route('/data')
 */
public function dataAction()
{
    return JsonResponse([
        [
            'title' => 'Item 1',
            'description' => 'Description 1',
        ],
        [
            'title' => 'Item 2',
            'description' => 'Description 2',
        ]
    ]);
}
```

## Set up a React frontend which uses it

Ok, finally we need to setup React to use our JSON endpoint.

First add a div with an id of root to index.html.twig. This will be our react mount point.

```html
<div id="root"><div>
```

Next we'll create our react component, and fetch the data from our endpoint. We'll use [Material UI](http://www.material-ui.com) for quick good looking components, but you could just as easily build your own.

We'll include Material UI with yarn.

```bash
yarn add material-ui
```

And we'll create an ItemCard component using Material UI, and an App component which lists a few cards based on our endpoint above.

```js
import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

const ItemCard = props => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
      pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
      interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
      dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default ItemCard;
```

Finally we need to add our application JavaScript to create and mount our react component, and add it as an entrypoint to our webpack.config.js.

We'll then include the built JavaScript in our twig template and we're done!

Check out the [Github repo](https://github.com/zorfling/react-symfony-4-starter) to clone the finished starter repo.
