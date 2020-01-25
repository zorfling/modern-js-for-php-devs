---
title: Modern JS in Symfony with Webpack Encore
date: '2017-11-27T22:22:32.169Z'
path: '/symfony-webpack-encore/'
featuredImage: './featured-image.png'
attribution: 'Illustration from unDraw'
status: 'PUBLISHED'
---

Symfony 2 introduced Assetic to provide asset management. Back in 2011, in the days of server rendered application, this pure PHP solution was good choice, but in 2017, Single Page Apps (SPA) and other more heavily javascript driven websites are the norm.

Assetic didn't quite handle this modern world of JavaScript, where WebPack is the tool du jour for packaging and transpiling javascript, and including static JS straight from the file system is becoming somewhat of a faux pas.

That's why, in June this year, Symfony released [Webpack Encore](https://symfony.com/blog/introducing-webpack-encore-for-asset-management).

Webpack Encore is an abstraction over webpack which simplifies the configuration and provides a number of common transformations for a modern frontend toolchain. It brings best of breed asset bundling to your Symfony applications.

It also works great with Symfony and Twig, with the JSON manifest strategy introduced in Symfony 3.3. With one line of code, you can introduce asset versioning, and even configure a CDN.

Here's an example webpack Encore webpack.config.js and the webpack config it generates. Notice the Webpack Encore is 23 lines (including comments) vs 168 lines of pure webpack config. 😮

```javascript
// Webpack Encore - webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
  // the project directory where all compiled assets will be stored
  .setOutputPath('web/build/')
  // the public path used by the web server to access the previous directory
  .setPublicPath('/build')
  // will create web/build/app.js and web/build/app.css
  .addEntry('app', './assets/js/app.js')
  // allow sass/scss files to be processed
  .enableSassLoader()
  // allow legacy applications to use $/jQuery as a global variable
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  // empty the outputPath dir before each build
  .cleanupOutputBeforeBuild()
  // show OS notifications when builds finish/fail
  .enableBuildNotifications()
  // create hashed filenames (e.g. app.abc123.css)
  .enableVersioning();

// export the final configuration
module.exports = Encore.getWebpackConfig();
```

```javascript
// Pure webpack - webpack.config.js
module.exports = {
  context: '/Users/modern-js/Code/php/encore-test',
  entry: { app: './assets/js/app.js' },
  output: {
    path: '/Users/modern-js/Code/php/encore-test/web/build',
    filename: '[name].[chunkhash].js',
    publicPath: '/build/',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: {},
        exclude: {},
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  'env',
                  {
                    modules: false,
                    targets: { browsers: '> 1%', uglify: true },
                    useBuiltIns: true
                  }
                ]
              ],
              plugins: []
            }
          }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              '/Users/modern-js/Code/php/encore-test/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: { omit: 1, remove: true }
          },
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { minimize: true, sourceMap: false, importLoaders: 0 }
          }
        ]
      },
      {
        test: {},
        loader: 'file-loader',
        options: { name: 'images/[name].[hash:8].[ext]', publicPath: '/build/' }
      },
      {
        test: {},
        loader: 'file-loader',
        options: { name: 'fonts/[name].[hash:8].[ext]', publicPath: '/build/' }
      },
      {
        test: {},
        use: [
          {
            loader:
              '/Users/modern-js/Code/php/encore-test/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: { omit: 1, remove: true }
          },
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { minimize: true, sourceMap: false, importLoaders: 0 }
          },
          { loader: 'resolve-url-loader', options: { sourceMap: false } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    {
      filename: '[name].[contenthash].css',
      id: 1,
      options: { allChunks: false }
    },
    { entriesToDelete: [] },
    {
      opts: {
        basePath: 'build/',
        publicPath: '/build/',
        fileName: 'manifest.json',
        stripSrc: null,
        transformExtensions: {},
        writeToFileEmit: true,
        cache: null
      }
    },
    {
      options: {
        debug: false,
        options: {
          context: '/Users/modern-js/Code/php/encore-test',
          output: { path: '/Users/modern-js/Code/php/encore-test/web/build' }
        },
        test: {}
      }
    },
    {
      options: {
        hashFunction: 'md5',
        hashDigest: 'base64',
        hashDigestLength: 4
      }
    },
    { algorithm: 'md5', digest: 'hex' },
    {
      definitions: { $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' }
    },
    {
      paths: ['**/*'],
      options: {
        root: '/Users/modern-js/Code/php/encore-test/web/build',
        verbose: false,
        allowExternal: false,
        dry: false
      }
    },
    { definitions: { 'process.env': { NODE_ENV: '"production"' } } },
    { options: { sourceMap: false } },
    {
      options: { title: 'Webpack Encore' },
      lastBuildSucceeded: false,
      isFirstBuild: true
    },
    {
      compilationSuccessInfo: { messages: [] },
      shouldClearConsole: false,
      formatters: [null, null, null, null, null, null],
      transformers: [null, null, null, null, null, null]
    },
    {
      outputPath: 'web/build',
      friendlyErrorsPlugin: {
        compilationSuccessInfo: { messages: [] },
        shouldClearConsole: false,
        formatters: [null, null, null, null, null, null],
        transformers: [null, null, null, null, null, null]
      }
    }
  ],
  performance: { hints: false },
  stats: {
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    maxModules: 0,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    publicPath: false
  },
  resolve: { extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'], alias: {} }
};
```

Stay tuned for an [upcoming post](/react-symfony-4-starter-repo/) where I'll set up a simple starter repo for Symfony with a React frontend.
