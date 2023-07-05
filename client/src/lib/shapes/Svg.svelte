<script>
    import SvgPath from "./SvgPath.svelte";
    import Rect from "./Rect.svelte";
    import Circle from "./Circle.svelte";
    import {image} from "../../store/seats.store.js";
    import {parse} from "node-html-parser";

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
    const [svg] = svgObject.getElementsByTagName('svg')
    const size = 1000
    svg.setAttribute('width', size.toString())
    svg.setAttribute('height', size.toString())
</script>

<div style="display: flex;justify-content: center;align-items: center;padding: 20px">
    <svg {...svg.attributes}>
        {#each elements as element,index}
            {#if element.rawTagName === 'rect'}
                <Rect {...element.attributes}/>
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