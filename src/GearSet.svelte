<script>
  import Crankset from "./Crankset.svelte";
  import Cassette from "./Cassette.svelte";
  export let id;
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
  .times {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    justify-content: center;
    flex: 0.25;
    font-size: 3rem;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
</style>

<div class="container">
  <span class="col">
    <Crankset gearSetId={id} />
  </span>
  <span class="times">X</span>
  <span class="col">
    <Cassette gearSetId={id} />
  </span>
</div>
