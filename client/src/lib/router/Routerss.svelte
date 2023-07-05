<script>
    import {__url} from "./routerStore.js";
    export let routes = [];

    let url
    __url.subscribe(prev => url = prev)
    let component
    $:{
        const route = routes.find(item => (item.path === url) || (item.path === '*'))
        component = route.page
    }
</script>

<svelte:component this={component}/>

