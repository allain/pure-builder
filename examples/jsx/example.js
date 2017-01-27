const vdom = require('virtual-dom')
const createElement = require('virtual-dom/create-element')

const h = require('..')(vdom.h)

function Menu ({items, active}) {
  return <ul>
           {items.map(item => {
              let link = <a href={item.url}>
                           {item.label}
                         </a>
              return <li>
                       {active === item.label ? <strong>{link}</strong> : link}
                     </li>
            })}
         </ul>
}

let items = [
  {label: 'a', url: 'http://a.com'},
  {label: 'b', url: 'http://b.com'},
  {label: 'c', url: 'http://c.com'}
]

const menu = <Menu items={items} active='b' />

document.body.appendChild(createElement(menu))
