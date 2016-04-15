import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'

export default function configureStore(initialState) {
  return createStore(
    todoApp,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )
}
