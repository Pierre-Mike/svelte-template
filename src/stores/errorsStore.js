import {writable} from "svelte/store";
import {ID} from '../utils/utils'

//let appErrorsInit = {[ID()]: {msg: "test", timeout: 1000}}
let appErrorsInit = {}

let errors = writable(appErrorsInit);

const addErrors = (msg, timeout = 1000) => {
    let newID = ID()
    errors.update(old => {
        old[newID] = {msg, timeout}
        return old
    })
    setTimeout(() =>
        errors.update(old => {
            delete old[newID]
            return old
        }), timeout
    )
}

const removeError = id =>
    errors.update(old => {
        delete old[id]
        return old
    })

export {errors,addErrors,removeError}
