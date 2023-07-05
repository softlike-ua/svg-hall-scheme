import {writable} from "svelte/store";
export const __url = writable(window.location.pathname)
