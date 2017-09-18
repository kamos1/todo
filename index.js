import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { loadState, saveState } from './helpers/storage'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedState = loadState()

let store = createStore(todoApp, persistedState, devTools )

store.subscribe(() => {
  saveState({todos: store.getState().todos})
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
