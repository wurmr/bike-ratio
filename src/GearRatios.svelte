<script>
  import GearRatio from "./GearRatio.svelte";
  import { ratios, tireSize } from "./store";
  import { slide } from "svelte/transition";
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
  <h2>Gear Inches</h2>

  {#each $ratios as { value, color }}
    <span class="item" in:slide>
      <GearRatio ratio={value} {color} tireSize={$tireSize} />
    </span>
  {/each}
</div>
