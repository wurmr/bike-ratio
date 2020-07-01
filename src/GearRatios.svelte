<script>
  import GearRatio from "./GearRatio.svelte";
  import { ratios } from "./store.ts";
  export let tireSize;

  //   let ratios = [];

  //   let ratios = $gearSets.map(set =>
  //     set.ratios.map(value => {
  //       return { value, color: set.color };
  //     })
  //   );
  $: myRatios = $ratios;
  $: console.log("ratios:", myRatios, $ratios);
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
  {#each myRatios as ratio}
    <GearRatio ratio={ratio.value} color={ratio.color} {tireSize} />
  {/each}
</div>
