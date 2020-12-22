<script>
  import GearRatio from './GearRatio.svelte'
  import { ratios } from './store'
  import { flip } from 'svelte/animate'
  import { cubicInOut } from 'svelte/easing'
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    height: 100%;
    width: 100%;
  }
  .item {
    width: 100%;
  }
</style>

<div class="container">
  {#each $ratios as { color, id, tireSize, gearInches, display } (id)}
    <span class="item" animate:flip={{ easying: cubicInOut }}>
      <GearRatio {color} {gearInches} {display} />
    </span>
  {/each}
</div>
