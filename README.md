# pure-builder

pure-builder wraps any virtual-hyperscript compatible function
so that its first argument can be a builder function.

When combined with JSX, it lets me create components by writing
only pure functions and composing them together.

## Usage

```js
const vdom = require('virtual-dom')
const h = pureBuilder(vdom.h)

// Matches parameters to function arguments
function Link(href) {
  return h('a', {href})
}

// Supports passing in props instead of being explicit with arguments as possible
function Important(props) {
  return h('strong', {}, props.text)
}

h(Link, {href: 'http://testing.com'})
h(Important, {text: 'Testing'})
```
