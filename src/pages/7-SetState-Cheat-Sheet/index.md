---
title: Is it ever OK to set state directly? A setState cheat sheet
date: '2020-02-04T08:30:00.000Z'
path: '/setstate-cheat-sheet/'
featuredImage: './featured-image.jpg'
attribution: 'Photo by Robert Ruggiero on Unsplash'
status: 'PUBLISHED'
ad: 'react'
---

One of the parts of React that trips people up is understanding state and how to update it. A lot of this confusion comes from the fact that setState is asynchronous.

As they write in the [React docs](https://reactjs.org/docs/react-component.html#setstate):

> Think of setState() as a **request** rather than an immediate command to update the component.

(Note: I'll be referring to setState, but it applies equally to the useState hook which we'll cover later)

## So if I want to update immediately, I should just update the state object directly... right?

`this.state.myValue = 'newValue';`

NO! If you do this, you're opting out of React's handling, and your component won't re-render.

The reason setState exists is to allow React to produce a more efficient and better experience for the end user. By batching the state updates, it can prevent needless re-renders and can allow React to do even more smart handling of different priority updates, aka [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html).

## OK, OK, I'll use setState. But what about the weird updater function syntax? Surely I don't need that?

Actually you do.

setState (and useState) have two forms, the updater function and the stateChange object syntax.

```js
// Updater function
// pass a function to show what to update
this.setState(prevState => {
  return { count: prevState.count + 1 };
});

// stateChange object
// pass an object to show what to update
this.setState({ name: 'New Name' });
```

## Which one should I use when?

Here's a quick rule of thumb.

**If your next state depends on the current state, use the updater function. Otherwise you're fine to pass an object in the stateChange syntax.**

For example:

- updating a count (updater function)
- updating an object (updater function)
- toggling a boolean (updater function)
- setting a new string value (stateChange object)

## What about hooks and useState?

All the cases above apply equally to the useState hook.

Where you would use the updater function in setState, use the updater function in your hook setter function.

See the below examples in both setState and useState hook.

## So how about that cheat sheet?

Most situations can be boiled down to one of a few examples, shown below:

### Updating a count

Relies on previous state, use updater function

```js
// this.setState()
this.setState(prevState => {
  return { count: prevState.count + 1 };
});

// useState hook
const [count, setCount] = useState(0);
setCount(prevCount => count + 1);
```

### Updating an object

Relies on previous state, use updater function

```js
// this.setState()
this.setState(prevState => {
  return { config: { ...prevState.config, ...updatedValues } };
});

// useState hook
const [config, setConfig] = useState({});
setConfig(prevConfig => ({ ...prevConfig, ...updatedValues }));
```

### Toggling a boolean

Relies on previous state, use updater function

```js
// this.setState()
this.setState(prevState => {
  return { isEnabled: !prevState.isEnabled };
});

// useState hook
const [isEnabled, setIsEnabled] = useState(true);
setIsEnabled(prevIsEnabled => !prevIsEnabled);
```

### Setting a new string value

Doesn't rely on previous state, use stateChange object

```js
// this.setState()
this.setState({ stringValue: "doesn't rely on previous state" });

// useState hook
const [stringValue, setStringValue] = useState('a default string');
setStringValue("doesn't rely on the previous state");
```

## To wrap up

Component state is one of the main concepts you need to understand in React. Remember these simple rules and you'll never be confused by setState again!

1. **Never change state directly: always use setState or the useState setter function.**
2. **If your next state depends on the current state, use the updater function.**
