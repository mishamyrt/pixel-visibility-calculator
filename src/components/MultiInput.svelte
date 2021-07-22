<script lang="ts">
    let originalValue
    export let value

    function handleChange () {
        value = originalValue
        console.log(originalValue)
    }
</script>

<input type="number" bind:value={originalValue} on:keyup={handleChange}>

<style lang="css">

</style>