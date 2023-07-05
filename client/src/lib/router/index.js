import {__url} from "./routerStore.js";

export const navigate = (href, params) => {
    document.title = 'SVG'
    __url.update(() => href)
    let res = href
    if (params) {
        res = href + '?' + new URLSearchParams(params).toString()
    }
    window.history.replaceState(params, '', res);
    // window.history.pushState(params, '', res);
}