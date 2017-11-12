import React from 'react'
import { render } from 'react-dom'
import createStore from 'store/createStore'

// Version
const VERSION = '0.0.1'
console.log(VERSION)

// App
const store = createStore()
const App = require('./containers/App').default
const routes = require('./routes/index').default(store)

render(<App store={store} routes={routes} />, document.getElementById('root'))
