import {writable} from "svelte/store";
import {addErrors} from "./errorsStore";

let starterPlayer = {"Pierre": {score: 10}}

let playersStore = writable(starterPlayer);

const addPlayer = name =>
    playersStore.update(old => {
        if (!(name in old)) {
            old[name] = {score: 0}
            return old
        }
        addErrors("Name already used.",2000)
        return old
        // add errors
    })

const removePlayer = name =>
    playersStore.update(old => {
        delete old[name]
        return old
    })


const scored = (name, plus = 1) => {
    playersStore.update(old => {
        old[name].score += plus
        return old
    })
}

const loss = (name, minus = 1) => {
    playersStore.update(old => {
        old[name].score -= minus
        return old
    })
}

export {playersStore, addPlayer, loss, removePlayer, scored}
