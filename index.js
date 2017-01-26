const getParamNames = require('get-parameter-names')

module.exports = wrap

function wrap (h) {
  return function (tag, options, children) {
    if (typeof tag !== 'function')
      return h(tag, options, children)

    return tag.apply({children}, getParamNames(tag).map(name => {
      return (name === 'props')
        ? Object.assign({children}, options)
        : options[name]
    }))
  }
}
