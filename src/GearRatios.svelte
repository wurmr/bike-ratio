<script>
  import GearRatio from './GearRatio.svelte'
  import { ratios, tireSize } from './store'
  import { flip } from 'svelte/animate'
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
  {#each $ratios as { value, color, id } (id)}
    <span class="item" animate:flip>
      <GearRatio ratio={value} {color} tireSize={$tireSize} />
    </span>
  {/each}
</div>
