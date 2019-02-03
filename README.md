# Loading Bear

A lightweight and shitty (for now) progress bar which hides everything else.

## Installation

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@pinguinosod/loading-bear@2/dist/loading-bear.min.js"></script>
```

### npm
```bash
$ npm i @pinguinosod/loading-bear
```

## Example

You should see the basic example from the official repo [here](https://github.com/pinguinosod/loading-bear/blob/master/examples/basic.html).

## Usage

Execute the function:
```javascript
loadingBear();
```

### Options

You can send an options object as parameter to the loadingBear function:
```javascript
loadingBear({
    'duration': 3000, // The duration in milliseconds
    'height': '20px', // The height of the progress bar
    'lBearClassContainer': 'container', // Container element's class
    'lBearClass': 'progress', // Wrapper bar element's class
    'lBearInnerClass': 'progress-bar' // Inner bar element's class
  });
```

---

## License

MIT
