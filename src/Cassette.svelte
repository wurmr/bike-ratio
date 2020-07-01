<script>
  import Cog from "./Cog.svelte";
  export let cogs = [];
  function addCog() {
    cogs = [...cogs, cogs[cogs.length - 1] + 2];
  }
</script>

<div>
  <p>Cassette</p>
  <p>
    {#each cogs as cog}
      <Cog bind:teeth={cog} />
    {/each}
  </p>

  <button on:click={addCog}>+</button>
</div>
