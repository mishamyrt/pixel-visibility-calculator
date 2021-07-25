<script lang="ts">
  export let width
  export let height
</script>

<div class="resolutionInput">
  <input type="number" placeholder="width" class="input" bind:value={width} />
  <span class="resolutionInput-divider">×</span>
  <input type="number" placeholder="height" class="input" bind:value={height} />
</div>

<style lang="scss">
  .resolutionInput {
    display: grid;
    grid-template-columns: 1fr 21px 1fr;
    align-items: center;
    align-content: center;

    .input {
      width: 100%;
    }

    &-divider {
      text-align: center;
    }
  }
</style>
