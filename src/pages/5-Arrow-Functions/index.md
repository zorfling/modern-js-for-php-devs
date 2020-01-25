---
title: Arrow functions coming soon to PHP 7.4
date: '2019-09-08T18:00:00.000Z'
path: '/php-74-arrow-functions/'
featuredImage: './featured-image.jpg'
attribution: 'Photo by Stephan Henning on Unsplash'
status: 'PUBLISHED'
ad: 'arrow'
---

The latest version of PHP 7.4 is coming soon. Release candidate 1 (the first of 6 planned RCs) was just released on 5th September and 7.4 is scheduled for General Availability on November 28, 2019.

If you're like me, one of the cooler additions to look forward to coming to the language is [arrow functions](https://wiki.php.net/rfc/arrow_functions_v2).

## Arrow functions in ES6

If you've done any modern JavaScript, you're probably familiar with arrow functions which came in ES6. In case you're not, they look like this:

```js
// in JavaScript arrow functions looks like this

// add numbers and return the result
const addSomeNumbers = (a, b) => a + b;

// echo out a message and return the input parameter
const doTheThing = theThing => {
  console.log(`I'm doing ${theThing}`);
  return theThing;
};
```

## Arrow functions in PHP

- prefix with `fn`
- only single statement implicit return style arrow functions are implemented currently, no block based style like the first JavaScript example (although the block style is in the future scope - named multi-statement bodies [in the RFC](https://wiki.php.net/rfc/arrow_functions_v2))
- supports implicit variable binding, in other words, `use` is not required

Here are the examples from the RFC showing the arrow syntax and implicit variable binding:

```php
// in PHP arrow functions look like this

// long version required currently
function array_values_from_keys($arr, $keys) {
    return array_map(
      function ($x) use ($arr) { return $arr[$x]; }, // long
      $keys
    );
};

// with arrow functions
function array_values_from_keys($arr, $keys) {
    return array_map(
      fn($x) => $arr[$x], // short
      $keys
    );
}

// note the difference
$long  = function ($x) use ($arr) { return $arr[$x]; };
$short = fn($x) => $arr[$x];
```

## Try it out

I've created a simple test repo so you can try them out now.

Check out https://github.com/zorfling/php-74-arrow-functions
