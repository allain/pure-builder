# pure-builder

pure-builder wraps any virtual-hyperscript compatible function
so that its first argument can be a builder function.

When combined with JSX, it lets me create components by writing
only pure functions and composing them together.

## Usage

```js
const h = pureBuilder(require('virtual-dom').h)

function Important(props) {
  return h('strong', {}, props.text)
}

// Using some ES6 magic to destructure props
function Link({href, label}) {
  return h('a', {href}, label)
}

console.log(h(Link, {href: 'http://testing.com'}))
console.log(h(Important, {text: 'Testing'}))
```

## Usuage with JSX (the preferred way)

Configure babel using a transform in .babelrc:
```json
{
  "presets": [
    "es2015"
  ],
  "plugins": [
    [
      "transform-react-jsx", { 
        "pragma": "h"
      }
    ]
  ]
}
```

Then use it in your JavaScript code like so:

```js
// We're using virtual-dom's function here
const h = pureBuilder(require('virtual-dom').h)

function Important(props) {
  return <strong>{props.text}</strong>
}

// Using some ES6 magic to destructure props
function Link({href}) {
  return <a href={href}>{label}</a>
}

console.log(<Link href="http://testing.com" label="Testing" />)

console.log(<Important text="Testing" />)
```

