<script lang="ts">
  import ResolutionInput from "../components/ResolutionInput.svelte";
  import MultiInput from "../components/MultiInput.svelte";
  import { calculateDPI, calculateVisibilityFactor } from "../modules/display";
  import { metersToInches } from "../modules/units";

  let distance = 0;
  let size = 0;
  let width = 0;
  let height = 0;

  function getFactorClass(val: number) {
    if (val > 0) {
      return 1;
    } else if (val >= -0.005) {
      return 0;
    } else {
      return -1;
    }
  }

  $: density = calculateDPI(metersToInches(size), width, height);
  $: visibilityFactor = getFactorClass(
    calculateVisibilityFactor(distance, density)
  );
</script>

<div class="fields">
  <span class="fields-title">Distance:</span>
  <MultiInput placeholder="3.5" bind:value={distance} />
  <span class="fields-title">Size:</span>
  <MultiInput placeholder="43" unit="in" bind:value={size} />
  <span class="fields-title">Resolution:</span>
  <ResolutionInput bind:width bind:height />
  {#if density}
    <span class="fields-title">DPI:</span>
    <span>{Math.floor(density)}</span>
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
<div class="description">
  <p>
    Marketing companies are increasing demands on the screens, offering more and
    more affordable 4k screens. That's great, but do we really need these
    resolutions?
  </p>
  <p>
    The resolution of your eyesight won't get any higher from this purchase.
    With this calculator you can verify if you can see the difference between
    the screens in real life.
  </p>
  <p>
    For example, if you watch a 4k 43" screen from 3 meters away, you won't
    notice the difference if it' replaced with a 1080p.
  </p>
</div>
