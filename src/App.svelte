<script>
  export let name;
  import GearRatios from "./GearRatios.svelte";
  import GearSet from "./GearSet.svelte";
  import { gearSets } from "./store.ts";

  let ratios = [];

  const colors = ["blue", "red", "orange", "green"];

  function addGearSet() {
    gearSets.update(gs => [...gs, { color: colors[gs.length], ratios: [] }]);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
</style>

<main>
  <h1>Hello {name}!</h1>

  <div class="container">
    <span class="col">
      <GearRatios {ratios} tireSize={29} />
    </span>
    <span class="col">
      {#each $gearSets as gearSet}
        <GearSet bind:set={gearSet} />
      {/each}
      <button on:click={addGearSet}>+</button>
    </span>
  </div>
</main>
