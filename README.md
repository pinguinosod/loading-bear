# Loading Bear

A lightweight progress bar which runs for a desired duration.

[![License: MIT](https://img.shields.io/github/license/pinguinosod/loading-bear.svg?style=flat)](https://github.com/pinguinosod/loading-bear/blob/master/LICENSE)
[![](https://img.shields.io/npm/v/@pinguinosod/loading-bear.svg?style=flat)](https://www.npmjs.com/package/@pinguinosod/loading-bear)
[![Less than 1kB](https://img.shields.io/bundlephobia/minzip/@pinguinosod/loading-bear.svg?style=flat)](https://bundlephobia.com/result?p=@pinguinosod/loading-bear)
[![](https://img.shields.io/npm/dt/@pinguinosod/loading-bear.svg?style=flat)](https://www.npmjs.com/package/@pinguinosod/loading-bear)

## Examples

* [jsFiddle](https://jsfiddle.net/pinguinosod/gv7uoLp2/)
* [examples folder on github](https://github.com/pinguinosod/loading-bear/tree/master/examples)

## Installation

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@pinguinosod/loading-bear@2/dist/loading-bear.min.js"></script>
```

### npm
```bash
$ npm i @pinguinosod/loading-bear
```

## Usage

Execute the function:
```javascript
loadingBear();
```

### Options

You can send an options object as parameter to the loadingBear function:
```javascript
loadingBear({
    'duration': 3200, // The duration in milliseconds
    'height': '20px', // The height of the progress bar
    'lBearContainerClass': 'container', // Container element's class
    'lBearClass': 'progress', // Wrapper bar element's class
    'lBearInnerClass': 'progress-bar' // Inner bar element's class
  });
```

---

## License

MIT
