<script lang="ts">
    import { UNITS_CONFIG, convertToMeter } from "../modules/units";
    import type { UnitsType } from "../modules/units";

    export let value;
    export let unit: UnitsType = "m";
    export let placeholder = "";
    let rawValue;

    function handleChange() {
        value = convertToMeter(rawValue, unit);
    }
</script>

<div class="multiInput">
    <input
        {placeholder}
        type="number"
        bind:value={rawValue}
        on:keyup={handleChange}
        class="multiInput-input input"
    />
    <span class="multiInput-value">{unit}</span>
    <select
        bind:value={unit}
        on:change={handleChange}
        class="multiInput-select"
    >
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
            top: 8px;
            width: 48px;
            line-height: 1;
            text-align: center;
        }

        &-select {
            position: absolute;
            right: 2px;
            top: 3px;
            background: transparent;
            text-align: center;
            padding: 0;
            margin: 0;
            width: 48px;
            height: 31px;
            opacity: 0;
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            height: 32px;
            width: 2px;
            background-color: var(--color-accent);
            top: 3px;
            right: 50px;
        }
    }
</style>
