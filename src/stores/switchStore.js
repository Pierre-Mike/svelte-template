
import { writable } from "svelte/store"

const init = false

let {subscribe,update} = writable(init)

const turn = () => update(c => !c)

export default {
  subscribe, turn
}