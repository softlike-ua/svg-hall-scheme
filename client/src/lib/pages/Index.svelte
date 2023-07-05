<script>
    import {api} from "../../services/axios.service.js";
    import {Link, navigate} from "svelte-routing";

    let allImgProm = api.get('/img')
</script>

<div style="border-bottom: 1px solid greenyellow;margin-bottom: 10px;padding: 10px 0">
    <button on:click={()=>navigate('/create')}>Add Image</button>
</div>
<div>
    {#await allImgProm}
        <div> No data</div>
    {:then {data}}
        <table>
            <tr>
                <th>Title</th>
            </tr>
            {#each data as img}
                <tr>
                    <td>
                        <Link to="/edit/{img._id}">{img.title}</Link>
                    </td>
                </tr>
            {/each}
        </table>
    {:catch error}
        <h1 style="color:red">{error}</h1>
    {/await}
</div>