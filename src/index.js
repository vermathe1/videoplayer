import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import { loadStorage, saveStorage } from './localStorage/localStorageApi'

const store = configureStore(loadStorage())

store.subscribe(() => {
  saveStorage({
    playList: store.getState().playList,
    currentIndex: store.getState().currentIndex,
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
