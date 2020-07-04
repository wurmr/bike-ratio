<script>
  import Cog from './Cog.svelte'
  import { gearSetsStore } from './store'
  export let gearSetId

  function addCog() {
    gearSetsStore.addCranksetCog(gearSetId)
  }
</script>

<div>
  <p>Crankset</p>
  <p>
    {#each $gearSetsStore[gearSetId].crankset as { teeth }}
      <Cog bind:teeth />
    {/each}
  </p>

  <button on:click={addCog}>+</button>
</div>
