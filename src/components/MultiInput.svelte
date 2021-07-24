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
            z-index: 2;
            pointer-events: none;
        }

        &-select {
            position: absolute;
            right: 0;
            top: 2px;
            background: transparent;
            text-align: center;
            padding: 0;
            margin: 0;
            width: 52px;
            height: 34px;
            color: transparent;
            border-radius: 0 4px 4px 0;
            background-color: transparent;
            z-index: 1;
            transition: background-color 0.3s ease-out;

            &:hover {
                transition: background-color 0s ease-out;
                background-color: rgba(0, 122, 255, 0.18);
            }
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
