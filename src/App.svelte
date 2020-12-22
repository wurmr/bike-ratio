<script>
  import GearRatios from './GearRatios.svelte'
  import GearSet from './GearSet.svelte'
  import { gearSetsStore } from './store'

  function addGearSet() {
    gearSetsStore.addGearSet()
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    font: 1em 'Fira Sans', sans-serif;
    background-color: #364558;
    color: #333;
    height: 95vh;
    width: 95vw;
  }

  h1 {
    color: darkgray;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  @media (max-width: 639px) {
    main {
      height: 100vh;
      width: 100vw;
      max-width: none;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
    height: 100px;
  }
  .container > * {
    margin: 0.5rem 0;
  }
  .gearSets {
    display: flex;
    flex-direction: row;
    flex-basis: content;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .ratios {
    display: flex;
    flex: 4;
    flex-basis: content;
  }
  .gearSet {
    display: flex;
    flex: 0 50%;
    width: 100%;
    min-height: 10rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    flex: 0 50%;
    width: 100%;
  }
</style>

<main>
  <h1>Gear Set Compare</h1>

  <div class="container">

    <span class="gearSets">
      {#each $gearSetsStore as gearSet, id (id)}
        <span class="gearSet">
          <GearSet {id} />
        </span>
      {/each}
      {#if $gearSetsStore.length < 4}
        <button class="gearSet" on:click={addGearSet}>+</button>
      {/if}
    </span>
    <span class="ratios">
      <GearRatios />
    </span>
    <span class="buttons">
      {#if $gearSetsStore.length > 0}
        <button on:click={gearSetsStore.reset}>Reset</button>
      {/if}
    </span>
  </div>
</main>
