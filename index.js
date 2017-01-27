module.exports = wrap

function wrap (h) {
  return function (tag, options, children) {
    return (typeof tag !== 'function')
      ? h(tag, options, children)
      : tag(options)
  }
}
