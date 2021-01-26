
import { writable } from "svelte/store"

const init = []

let { update, subscribe } = writable(init)

const addPlayer = (name) => {
  console.log(`adding player ${name}`)
  update(c => [...c, { name, score: 0 }])
}
const updatePlayer = (detail) => {
  console.log(`updating player ${detail.name}`)
  update(c => {
    c[detail.id] = detail
    return c
  })

}
const removePlayer = (id) => {
  update(c => {
    c.splice(id, 1)
    return c
  })
}

export default {
  subscribe,
  addPlayer, removePlayer, updatePlayer
}