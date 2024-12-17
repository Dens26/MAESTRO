<!-- TEMPATE -->
<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<!-- SCRIPT -->
<script setup lang="ts">

</script>

<!-- STYLE -->
<style scoped>
.btn {
    font-size: 1.25rem;
    border-radius: 1rem;
    background-color: rgb(90, 205, 0);
    box-shadow: 0 4px rgb(90, 165, 0);
    color: white;
    align-items: center;
}
</style>