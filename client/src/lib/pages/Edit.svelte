<script>
    import Svg from "../shapes/Svg.svelte";
    import {api} from "../../services/axios.service.js";
    import {image, seat} from "../../store/seats.store.js";

    export let id
    $image = null

    // let title = ''
    // image.subscribe(item=>title = item.title)

    let __seat
    seat.subscribe(item => __seat = item)

    api.get(`/img/${id}`).then(res => {
        $image = res.data
    })

    let svgObject = null

    async function handleSubmit() {
        $image = null
        const result = await api.put('/img/update', {seat: $seat, id})
        $image = result.data
    }

</script>

<div id="img-container">
    {#if $image}
        <Svg/>
        <div id="data">
            <h3>Data</h3>
            <form on:submit|preventDefault={handleSubmit}>
                <div>
                    <div>Title</div>
                    <input name="title" value={$image.title}>
                </div>

                <div>
                    <div>ID</div>
                    <input name="id" bind:value={__seat.id} disabled>
                </div>

                <div>
                    <div>Sector</div>
                    <input name="group" bind:value={__seat.group}>
                </div>


                <div>
                    <div>Seat</div>
                    <input name="number" bind:value={__seat.number}>
                </div>
                <div>
                    <div>price</div>
                    <input name="price" bind:value={__seat.price}>
                </div>

                <div>
                    <p></p>
                    <button>Save</button>
                </div>

            </form>
        </div>
    {/if}
</div>

