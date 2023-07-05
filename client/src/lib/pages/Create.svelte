<script>
    import {parse} from "node-html-parser";
    import {api} from "../../services/axios.service.js";
    import {navigate} from "svelte-routing";

    let svgObject = null

    let data = {}

    function change(e) {
        svgObject = null
        const [file] = e.target.files
        const reader = new FileReader()
        reader.onloadend = function () {
            // data.body = reader.result.toLowerCase().replace(/\n|\r\n|\r/g, '')
            // console.log(data)
            let tmpSvgObject = parse(reader.result.toString().replace(/\n|\r\n|\r/g, ''))
            const [svgObject] = tmpSvgObject.getElementsByTagName('svg')
            console.log(svgObject)

            let index = 0
            for (const el of svgObject.childNodes) {
                el.setAttribute('data-id', index++)

            }
            data.body = svgObject.toString()
        }

        reader.readAsText(file)
    }

    async function handleSubmit() {
        try {
            const res = await api.post('img/create', {data})
            console.log(res)
            navigate('/')
        } catch (e) {
            console.error(e)
        }

    }
</script>


<form on:submit|preventDefault={handleSubmit}>
    <div>
        <div>file</div>
        <input type="file" accept=".svg" on:change={change}>
    </div>
    <div>
        <div>title</div>
        <input name="title" bind:value={data.title}>
    </div>
    <div>
        <p></p>
        <button>Save</button>
    </div>
</form>