<script lang="ts">
  import type { UnitsType } from '../modules/units'
  import { UNITS_CONFIG, UNITS_NAMES, convertToMeter } from '../modules/units'

  export let value
  export let unit: UnitsType = 'm'
  let rawValue

  function handleChange() {
    value = convertToMeter(rawValue, unit)
  }
</script>

<div class="multiInput">
  <input
    placeholder={`in ${UNITS_NAMES[unit]}`}
    type="number"
    bind:value={rawValue}
    on:keyup={handleChange}
    class="multiInput-input input"
  />
  <span class="multiInput-value">{unit}</span>
  <select bind:value={unit} on:change={handleChange} class="multiInput-select">
    {#each Object.keys(UNITS_CONFIG) as key}
      <option value={key}>{key}</option>
    {/each}
  </select>
</div>

<style lang="scss">
  .multiInput {
    position: relative;
    width: 100%;

    &-input {
      width: 100%;
    }

    &-value {
      position: absolute;
      right: 2px;
      top: 14px;
      width: 48px;
      line-height: 1;
      text-align: center;
      z-index: 2;
      pointer-events: none;
      color: var(--color-text-secondary);
    }

    &-select {
      position: absolute;
      right: 0;
      top: 0;
      background: transparent;
      text-align: center;
      padding: 0;
      margin: 0;
      width: 51px;
      height: 47px;
      color: transparent;
      border-radius: 0 12px 12px 0;
      background-color: transparent;
      z-index: 1;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 46px;
      width: 1px;
      background-color: var(--color-gray);
      top: 0;
      right: 50px;
    }
  }
</style>
