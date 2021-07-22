<script lang="ts">
    import ResolutionInput from "../components/ResolutionInput.svelte";
    import MultiInput from "../components/MultiInput.svelte";

    let distance;
    let size;
    let width;
    let height;

    function calculateDensity(size, width, height) {
        const value = Math.round(
            Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / size
        );
        return value || 0;
    }

    function getFactorClass(val: number) {
        if (val > 0) {
            return 1;
        } else if (val >= -0.005) {
            return 0;
        } else {
            return -1;
        }
    }

    $: density = calculateDensity(size, width, height);
    $: visibilityFactor = getFactorClass(
        (distance * 2 * Math.PI) / 21600 - 2.54 / density
    );
</script>

<!-- <input name="distance" type="number" value={distance} /> -->
<div class="fields">
    <span class="fields-title">Distance:</span>
    <MultiInput bind:value={distance} />
    <span class="fields-title">Size:</span>
    <MultiInput bind:value={size} />
    <span class="fields-title">Resolution:</span>
    <ResolutionInput bind:width bind:height />
    {#if density}
        <span class="fields-title">Density:</span>
        <span>{density}</span>
        <span class="fields-title">Pixel visibility:</span>
        {#if visibilityFactor === 1}
            <span class="visibility __none">None</span>
        {:else if visibilityFactor === 0}
            <span class="visibility __low">Low</span>
        {:else}
            <span class="visibility __high">High</span>
        {/if}
    {/if}
</div>

<!-- <input name="size" type="number" bind:value={size} /> -->
<!-- <input name="width" type="number" bind:value={width} />
<input name="height" type="number" bind:value={height} /> -->
<!-- <span>Pixel visibilty:</span><span></span> -->
