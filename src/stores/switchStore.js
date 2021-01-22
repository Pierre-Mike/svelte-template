
import { writable } from "svelte/store"

const init = false

let store = writable(init)


export default {
  subscribe: store.subscribe,
  switch: () => {
    store.update(c => !c)
  }
}