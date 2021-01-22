
import { writable } from "svelte/store"

const init = []

let store = writable(init)

export default {
  subscribe: store.subscribe,
  add: (name) => {
    store.update(c => [...c, { name, score: 0 }])
  },
  update: (detail) => {
    store.update(c => {
      c[detail.id] = detail
      return c
    })

  },
  remove: (id) => {
    store.update(c => {
      c.splice(id, 1)
      return c
    })
  }
}


