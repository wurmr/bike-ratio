<script>
  import Cog from './Cog.svelte'
  import { gearSetsStore } from './store'
  export let gearSetId

  function addCog() {
    gearSetsStore.addCassetteCog(gearSetId)
  }
</script>

<div>
  <p>Cassette</p>
  <p>
    {#each $gearSetsStore[gearSetId].cassette as { teeth }}
      <Cog bind:teeth />
    {/each}
  </p>

  <button on:click={addCog}>+</button>
</div>
