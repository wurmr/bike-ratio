<script>
  export let name;
  import GearRatios from "./GearRatios.svelte";
  import GearSet from "./GearSet.svelte";
  import { gearSetsStore } from "./store";

  function addGearSet() {
    gearSetsStore.addGearSet();
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
      <GearRatios />
    </span>
    <span class="col">
      {#each $gearSetsStore as gearSet, id}
        <GearSet {id} />
      {/each}
      <button on:click={addGearSet}>+</button>
    </span>
  </div>
  <button on:click={gearSetsStore.reset}>Reset</button>
</main>
