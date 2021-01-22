
import { writable } from "svelte/store"

function createStore(init, reducer) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect()

  const { update, subscribe } = writable(init)

  function dispatch(action) {
    update(state => {
      devTools && devTools.send(action, state)
      return reducer(state, action)
    })
  }

  return {
    subscribe,
    dispatch
  }
}

function reducerVisible(state, action) {
  switch (action) {
    case "SHOW":
      return true
    case "HIDE":
      return false
    default:
      return state
  }
}


export const storeVisible = createStore(false, reducerVisible)
export const playerStore = createStore([], playerReducer)