<script>
  import Crankset from "./Crankset.svelte";
  import Cassette from "./Cassette.svelte";
  export let set;

  let crankset = [30];
  let cassette = [11, 15];

  $: set = {
    ratios: crankset.map(cs => cassette.map(cog => cs / cog)).flat(),
    color: set.color
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid black;
    justify-content: space-around;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  .times {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    justify-content: center;
    flex: 0.25;
    font-size: 3rem;
  }
</style>

<div class="container">
  <Crankset class="col" bind:cogs={crankset} />
  <span class="times">X</span>
  <Cassette class="col" bind:cogs={cassette} />
</div>
