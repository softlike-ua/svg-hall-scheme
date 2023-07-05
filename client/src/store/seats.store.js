import {writable} from "svelte/store"

export const seat = writable({
    id: null,
    group: 'dd',
    number: '',
    price: '',
})

export const image = writable(null)
