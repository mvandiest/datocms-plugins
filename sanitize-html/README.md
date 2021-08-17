# Sanitize Html DatoCMS plugin

A simple field add on that allows you to sanitize messy Html.

## Configuration

This plugin uses the [sanitize-html](https://github.com/apostrophecms/sanitize-html) package to perform sanitization. The [default sanitize-html settings](https://github.com/apostrophecms/sanitize-html#default-options) are passed as a global plugin setting called `Sanitizer Options`. You can change these sanitizing options in the Plugin editor.

## Development

Install all the project dependencies with:

```
yarn install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
yarn addToProject
```

Start the local development server with:

```
yarn start
```

The plugin will be served from [http://localhost:5000/](http://localhost:5000/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).

## Publishing

Before publishing this plugin, make sure:

* you've properly described any configuration parameters in this README file;
* you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/plugins/publishing/);
* you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, just run:

```
yarn publish
```
