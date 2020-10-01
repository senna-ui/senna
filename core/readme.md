# @senna-ui/core

The Senna Core package contains the Web Components that make up the reusable UI building blocks of Senna UI. These components are designed to be used in traditional frontend view libraries/frameworks (such as [Stencil](https://stenciljs.com/), React, Angular, or Vue), or on their own through traditional JavaScript in the browser.


## Features

* Tiny, highly optimized components built with [Stencil](https://stenciljs.com/)
* Styling for both iOS and Material Design
* No build or compiling required
* Simply add the static files to any project
* Lazy-loaded components without configuration
* Asynchronous rendering
* Theming through CSS Variables


## How to use

### Vanilla HTML

Easiest way to start using Senna Core is by adding a script tag to the CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@senna-ui/core/dist/senna/senna.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@senna-ui/core/dist/senna/senna.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@senna-ui/core/css/senna.bundle.css" rel="stylesheet">
```

Any Senna component added to the webpage will automatically load. This includes writing the component tag directly in HTML, or using JavaScript such as `document.createElement('sen-button')`.

Additionally, within this package is a `dist/senna.js` file and accompanying `dist/senna/` directory. These are the same files which are used by the CDN, and they're available in this package so they can be apart of an app's local development.


## Framework Bindings

The `@senna/core` package can by used in simple HTML, or by vanilla JavaScript without any framework at all. Senna also has packages that make it easier to integrate Senna into a framework's traditional ecosystem and patterns. (However, at the lowest-level framework bindings are still just using Senna Core and Web Components).

* [@senna-ui/react](https://www.npmjs.com/package/@senna-ui/react)


## How to contribute

[Check out the CONTRIBUTE guide](CONTRIBUTING.md)

## Related

* [Senna Documentation](https://docs.senna-ui.com/docs/)
* [Stencil](https://stenciljs.com/)

## License

TODO