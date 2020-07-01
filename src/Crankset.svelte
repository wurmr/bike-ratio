<script>
  import Cog from "./Cog.svelte";
  import { gearSetsStore } from "./store";
  export let gearSetId;

  function addCog() {
    gearSetsStore.addCranksetCog(gearSetId);
  }
</script>

<div>
  <p>Crankset</p>
  <p>
    {#each $gearSetsStore[gearSetId].crankset as cog}
      <Cog bind:teeth={cog} />
    {/each}
  </p>

  <button on:click={addCog}>+</button>
</div>
