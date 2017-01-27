const test = require('tape')
const vdom = require('virtual-dom')

const h = require('.')(vdom.h)

test('works like as virtual-dom', t => {
  let params = ['a', {href: 'http://www.testing.com'}]

  t.deepEqual(h.apply(null, params), vdom.h.apply(null, params))
  t.end()
})

test('works when tag is passed a function', t => {
  let expected = vdom.h('a', {href: 'http://www.testing.com'})
  let actual = h(() => h('a', {href: 'http://www.testing.com'}))
  t.deepEqual(actual, expected)
  t.end()
})

test('passes in props ', t => {
  let expected = vdom.h('a', {href: 'http://www.testing.com'})
  let actual = h((props) => h('a', {href: props.href}), {href: 'http://www.testing.com'})
  t.deepEqual(actual, expected)
  t.end()
})

test('destrucuting props is supported', t => {
  let expected = vdom.h('a', {href: 'http://www.testing.com'})
  let actual = h(({href}) => h('a', {href}), {href: 'http://www.testing.com'})
  t.deepEqual(actual, expected)
  t.end()
})
