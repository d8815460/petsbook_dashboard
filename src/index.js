import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import App from './components/App'
import configureStore from './configureStore'
import 'babel-polyfill'
import {fetchData} from './actions'

//let store = createStore(todoApp)
const initialState = {
  todos: [{
    timestamp: 1460713414
  }]
}
let store = configureStore(initialState)

store.dispatch(fetchData('data_list'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
