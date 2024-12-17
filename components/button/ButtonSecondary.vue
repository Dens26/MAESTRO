<!-- TEMPATE -->
<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const props = defineProps<{
    width?: number
}>()

const buttonWidth = props.width + 'px'
</script>

<!-- STYLE -->
<style scoped>
.btn {
    border: 1px solid rgb(175, 175, 175);
    font-size: 1.25rem;
    border-radius: 1rem;
    background-color: transparent;
    box-shadow: 0 3px rgb(175, 175, 175);
    color: rgb(0, 165, 255);
    width: v-bind(buttonWidth);
    align-items: center;
}
</style>