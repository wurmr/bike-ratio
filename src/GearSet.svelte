<script>
  import Crankset from './Crankset.svelte'
  import Cassette from './Cassette.svelte'
  import { gearSetsStore } from './store'
  import { fly } from 'svelte/transition'
  export let id
</script>

<style>
  .container {
    border: 1px solid black;
    justify-content: space-around;
    margin-bottom: 1em;
    width: 100%;
    height: 100%;
  }
  .times {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    justify-content: center;
    flex: 0.25;
    font-size: 3rem;
  }
  .colContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .col {
    color: black;
    opacity: 1;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  .colorInput {
    margin: 0.4em;
  }
</style>

<div
  in:fly={{ x: 200, duration: 500 }}
  class="container"
  style="background-color: {$gearSetsStore[id].color}">
  <!-- <span>
    <input
      class="colorInput"
      type="color"
      bind:value={$gearSetsStore[id].color}
      name="head" />
    <label for="color">Color</label>
  </span> -->
  <span>
    <input
      class="number"
      type="tireSize"
      bind:value={$gearSetsStore[id].tireSize}
      name="tireSize" />
    <label for="tireSize">TireSize</label>
  </span>
  <div class="colContainer">
    <span class="col">
      <Crankset gearSetId={id} />
    </span>
    <span class="times">X</span>
    <span class="col">
      <Cassette gearSetId={id} />
    </span>
  </div>
</div>
