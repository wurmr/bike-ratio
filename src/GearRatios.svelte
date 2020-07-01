<script>
  import GearRatio from "./GearRatio.svelte";
  import { ratios, tireSize } from "./store";
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
</style>

<div class="container">
  {#each $ratios as ratio}
    <GearRatio ratio={ratio.value} color={ratio.color} tireSize={$tireSize} />
  {/each}
</div>
