import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/App'
import createStore from './store/create'
import './index.css'

const store = createStore()

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
