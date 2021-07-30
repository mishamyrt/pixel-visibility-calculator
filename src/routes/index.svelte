<script lang="ts">
  import ResolutionInput from '../components/ResolutionInput.svelte'
  import MultiInput from '../components/MultiInput.svelte'
  import { calculateDPI, calculateVisibilityFactor } from '../modules/display'
  import { metersToInches } from '../modules/units'
  import clsx from 'clsx'
  import '../style.scss'

  export const prerender = true

  let distance = 0
  let size = 0
  let width: number
  let height: number

  function getFactorClass(val: number) {
    if (val > 0) {
      return 1
    } else if (val >= -0.005) {
      return 0
    } else {
      return -1
    }
  }

  $: density = calculateDPI(metersToInches(size), width, height)
  $: visibilityFactor = getFactorClass(
    calculateVisibilityFactor(distance, density)
  )
  $: isDpiVisible = size * width * height > 0
  $: isResultVisible = isDpiVisible && distance > 0
</script>

<div class="fields-container">
  <div class="fieldsGroup">
    <span class="fields-title">Resolution</span>
    <ResolutionInput bind:width bind:height />
  </div>
  <div class="fieldsGroup">
    <span class="fields-title">Size</span>
    <MultiInput unit="in" bind:value={size} />
  </div>
  <div class="fieldsGroup">
    <span class="fields-title">Distance</span>
    <MultiInput bind:value={distance} />
  </div>
  <div class={clsx('fieldsGroup __forceGrid', { __hidden: !isDpiVisible })}>
    <span class="fields-title">DPI</span>
    <span>{Math.floor(density)}</span>
  </div>
  <div class={clsx('fieldsGroup __forceGrid', { __hidden: !isResultVisible })}>
    <span class="fields-title">Pixel visibility</span>
    {#if visibilityFactor === 1}
      <span class="visibility __none">None</span>
    {:else if visibilityFactor === 0}
      <span class="visibility __low">Low</span>
    {:else}
      <span class="visibility __high">High</span>
    {/if}
  </div>
</div>
<div class="description">
  <p>
    Marketing companies are increasing demands on the screens, offering more and
    more affordable 4K screens. That's great, but do we really need these
    resolutions?
  </p>
  <p>
    The resolution of your eyesight won't get any higher from this purchase.
    With this calculator you can verify if you can see the difference between
    the screens in real life.
  </p>
  <p>
    For example, if you watch a 4K 43" screen from 3 meters away, you won't
    notice the difference if it' replaced with a 1080p.
  </p>
</div>
