<script>
    import {__url} from "./routerStore.js";
    import {navigate} from "./index.js";

    export let params = null
    export let href = '/'

    function go() {
        navigate(href, params)
    }

</script>
<a {href} on:click|preventDefault={go} class:active={$__url===href} {...$$props}>
    <slot/>
</a>
