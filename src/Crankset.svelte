<script>
  import Cog from "./Cog.svelte";
  export let cogs = [];

  function addCog() {
    cogs = [...cogs, 30];
  }
</script>

<div>
  <p>Crankset</p>
  <p>
    {#each cogs as cog}
      <Cog bind:teeth={cog} />
    {/each}
  </p>

  <button on:click={addCog}>+</button>
</div>
