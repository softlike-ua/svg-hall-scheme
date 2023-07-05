<script>
    import SvgPath from "./SvgPath.svelte";
    import Rect from "./Rect.svelte";
    import Circle from "./Circle.svelte";
    import {image} from "../../store/seats.store.js";
    import {parse} from "node-html-parser";
    import {loop_guard} from "svelte/internal";

    let svgObject
    svgObject = parse($image.body)
    let elements = svgObject.childNodes[0].childNodes
    elements.sort((a, b) => {
        if (a.rawTagName < b.rawTagName) {
            return 1;
        }
        if (a.rawTagName > b.rawTagName) {
            return -1;
        }
        return 0;
    })

    console.log(elements)
    const [svg] = svgObject.getElementsByTagName('svg')
    console.log(svg.attributes)
    const size = 1000
    svg.setAttribute('width', size.toString())
    svg.setAttribute('height', size.toString())

</script>

<div style="display: flex;justify-content: center;align-items: center;padding: 20px">
    <svg {...svg.attributes}>
        <defs>
            <linearGradient id="MyGradient">
                <stop offset="5%" stop-color='blue'/>
                <stop offset="95%" stop-color="green"/>
            </linearGradient>
        </defs>
        {#each elements as element,index}
            {#if element.rawTagName === 'rect'}
                <Rect {...element.attributes} fill={element.attributes.fill??'transparent'}/>
            {/if}

            {#if element.rawTagName === 'circle'}
                <Circle {...element.attributes}/>
            {/if}

            {#if element.rawTagName === 'path'}
                <SvgPath {...element.attributes}/>
            {/if}

        {/each}
    </svg>
</div>