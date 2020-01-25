---
title: React starter repo with Symfony 4 and Webpack Encore
date: '2018-01-14T23:17:32.169Z'
path: '/react-symfony-4-starter-repo/'
featuredImage: './final-result.png'
status: 'PUBLISHED'
ad: 'react'
---

In the [last post](/symfony-webpack-encore/), we introduced Webpack Encore and why it makes for a quick start for modern JS with Symfony.

In this post, we'll set up a basic starter repo for a React frontend using Symfony and Webpack Encore.

As a bonus, as Symfony 4 was released at the end of last year, let's use the latest and greatest and start with that.

## Set up a new Symfony 4 project

I'll assume that you've got a basic understanding of composer and Symfony, but if not, go check out the [Symfony quick start](http://symfony.com/doc/current/quick_tour/the_big_picture.html).

Ready? Ok let's go!

`$ composer create-project symfony/skeleton my-project`

Tip: you'll need composer to be installed globally for this to work.

This will create a directory called `my-project` in the current directory with a Symfony skeleton site, and use composer to install all the dependencies.

Next we'll set up some basic dependencies for our site.

```bash
$ composer require annotations twig asset
$ composer require server --dev
```

## Configure Webpack Encore to add React

Webpack Encore is simply a node package, so we can install it using npm (or yarn). But since we're using composer flex, let's use it to bootstrap things.

```bash
# Create package.json, webpack.config.js and add node_modules to .gitignore
$ composer require encore

# Add react deps
$ yarn add --dev react react-dom prop-types babel-preset-react

# Actually install node package
$ yarn install
```

And finally, we need to enable the React preset in our `webpack.config.js`.

```js
// webpack.config.js
…
Encore
  …
  .enableReactPreset();
```

## Set up a demo JSON API

We'll set up a basic JSON endpoint to display some dummy data. We'll hard code it for this demo, but you could hit the database, or other APIs at this point.

```php
// src/Controller/DefaultController.php
/**
 * @Route('/data')
 */
public function dataAction()
{
    return new JsonResponse([
        [
            'id' => 1,
            'author' => 'Chris Colborne',
            'avatarUrl' => 'http://1.gravatar.com/avatar/13dbc56733c2cc66fbc698cdb07fec12',
            'title' => 'Bitter Predation',
            'description' => 'Thirteen thin, round towers …',
        ],
        [
            'id' => 2,
            'author' => 'Louanne Perez',
            'avatarUrl' => 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
            'title' => 'Strangers of the Ambitious',
            'description' => "A huge gate with thick metal doors …",
        ],
        [
            'id' => 3,
            'author' => 'Theodorus Dietvorst',
            'avatarUrl' => 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
            'title' => 'Outsiders of the Mysterious',
            'description' => "Plain fields of a type of grass cover …",
        ],
    ]);
}
```

## Set up a React frontend which uses it

Ok, finally we need to setup React to use our JSON endpoint.

First add a div with an id of root to `index.html.twig`. This will be our react mount point.

```html
<!-- templates/Default/index.html.twig -->
…
<div id="root"></div>
```

Next we'll create our react component, and fetch the data from our endpoint. We'll use [Material UI](http://www.material-ui.com) for quick good looking components, but you could just as easily build your own.

We'll include Material UI with yarn.

```bash
yarn add material-ui
```

And we'll create an ItemCard component using Material UI …

```js
// assets/js/Components/ItemCard.js
import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

const ItemCard = ({ author, avatarUrl, title, subtitle, style, children }) => (
  <Card style={style}>
    <CardHeader title={author} avatar={avatarUrl} />
    <CardTitle title={title} subtitle={subtitle} />
    <CardText>{children}</CardText>
  </Card>
);

export default ItemCard;
```

… and an App component which lists a few cards based on our endpoint above.

```js
// assets/js/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ItemCard from './Components/ItemCard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(entries => {
        this.setState({
          entries
        });
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ display: 'flex' }}>
          {this.state.entries.map(
            ({ id, author, avatarUrl, title, description }) => (
              <ItemCard
                key={id}
                author={author}
                title={title}
                avatarUrl={avatarUrl}
                style={{ flex: 1, margin: 10 }}
              >
                {description}
              </ItemCard>
            )
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Finally we need to add our application JavaScript as an entrypoint to our `webpack.config.js`.

```js
// webpack.config.js
  …
  .addEntry('js/app', './assets/js/app.js')
```

We'll then include the built JavaScript in our twig template and we're done!

```twig
<!-- templates/Default/index.html.twig -->
{% extends 'base.html.twig' %}

{% block body %}
<div id="root"></div>
<script type="text/javascript" src="{{ asset('build/js/app.js') }}"></script>
{% endblock %}
```

To view the final product, we need to compile the assets using Webpack Encore.

```bash
$ yarn run encore dev
# yarn run encore dev --watch to automatically rebuild on every change
```

And then use the Symfony WebServerBundle we installed above to start the server.

```bash
# This will start a server at http://127.0.0.1:8000.

$ ./bin/console server:start # stop with server:stop
```

The final result is three React cards that fill the available space on the page.

![The final result is three Material Design cards with an author, title and content](./final-result.png 'The final result is three Material Design cards with an author, title and content')

Check out the [Github repo](https://github.com/zorfling/react-symfony-4-starter) to clone the finished starter repo.
