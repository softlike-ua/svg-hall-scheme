<script>
    import {image, seat} from "../../store/seats.store.js";

    let clicked = false
    let done = false
    let partial = false
    let id = $$props['data-id']
    let __seat = $image.seats.find(item => (item && item.id === id))
    if (__seat) {
        if (__seat.id && __seat.group && __seat.number && __seat.price) {
            done = true
        } else {
            partial = true
        }
    }

    function click(e) {
        // const id = e.target.dataset.id
        let __seat = $image.seats.find(item => (item && item.id === id))
        $seat = __seat || {id}
        let [clickedEl] = document.getElementsByClassName('clicked')
        clickedEl && clickedEl.classList.remove('clicked')
    }
</script>

<circle
        {...$$props}
        on:click={click}
        class:clicked={clicked}
        class:done={done}
        class:partial={partial}
></circle>