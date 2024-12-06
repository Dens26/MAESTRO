<!-- TEMPATE -->
<template>
    <button class="btn">{{ $t('pages.index.button-start').toUpperCase()}}</button>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const props = defineProps<{
    width: number
}>()

const buttonWidth = props.width + 'px'
</script>

<!-- STYLE -->
<style scoped>
.btn {
    font-size: 1.3rem;
    border-radius: 1rem;
    background-color: rgb(90, 205, 0);
    box-shadow: 0 5px rgb(90, 165, 0);
    color: white;
    width: v-bind(buttonWidth);
    text-align: center;
    
}
</style>