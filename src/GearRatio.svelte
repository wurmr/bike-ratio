<script>
  export let color
  export let gearInches
  export let display
  import { fade } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  //   $: gearInches = Math.round(ratio * tireSize * 100, 2) / 100
  //   $: width = (ratio / 4) * 100
  $: width = gearInches

  function grow(node, { duration = 750, easing = cubicOut }) {
    return {
      duration,
      easing,
      css: t => `width: ${width * t}%;`
    }
  }
</script>

<style>
  .ratio {
    display: flex;
    max-height: 2rem;
    flex: 1;
    border: 1px solid black;
    margin: 0.05rem 0;
  }
  .text {
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;
    width: 100%;
    flex-basis: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.5rem;
  }
</style>

<span in:grow class="ratio" style="width: {width}%; background: {color}">
  <span class="text">{gearInches} ({display})</span>
</span>
