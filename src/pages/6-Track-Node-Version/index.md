---
title: Avoid npm build errors by tracking your Node version with nvm
date: '2020-01-21T08:15:00.000Z'
path: '/avoid-npm-build-errors-with-nvm/'
featuredImage: './featured-image.jpg'
attribution: 'Photo by Tim Gouw on Unsplash'
status: 'DRAFT'
ad: 'node'
---

You know the feeling. You get a spare moment jump in and do some updates on an old app. But you try to get it running and the dreaded npm errors come up.

Oftentimes, the issue is that you've updated Node since you last ran it. Many issues with dependencies and npm can been easily solved by switching Node versions.

Easy, so just go back to the version of node you used when you originally developed it. But how do you know which version to jump to? Just guess and check?

Perhaps you can leave a note in your README saying "This works in Node version X." And sure, that's certainly one way of solving it.

But using `nvm`, we can track the version, as well as automate the switch back, and that's what we'll talk about today.

`nvm` is [Node Version Manager](https://nvm.sh). It primarily allows you to switch between isolated Node environments for different versions. If you've used rvm/rbenv in Ruby, it's similar to that.

For our purposes today however, the killer feature is the `.nvmrc` file. `.nvmrc` is a file you commit with your project which contains a single line with the version of Node to use for this project.

In a project with an `.nvmrc` file, you can type `nvm use` and it will automatically switch back to the version you've stated. If you're really keen, you can (and I'd say you should) also set up your shell to [automatically `nvm use`](https://github.com/nvm-sh/nvm/blob/master/README.md#deeper-shell-integration) when it encounters an `.nvmrc` file.

So start using `nvm` and `.nvmrc` in your projects and next time you're returning to an old project, you're just an `nvm use` away from being back up and running quick smart.
