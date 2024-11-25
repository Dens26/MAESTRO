<!-- TEMPLATE -->
<template>
    <button class="btn">
        {{ name }}
    </button>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
defineProps<{
    name: String
}>()
</script>


<!-- STYLE -->
<style scoped>
.btn {
    padding-left: 20px;
    padding-right: 20px;
    height: 42px;
    color: white;
    background: rgb(55, 205, 35);
    box-shadow: 0px 5px rgb(35, 160, 35);
    border: 5px solid rgb(55, 205, 35);
    border-radius: 15px;
    transition: all ease-in 0.2s;
    font-weight: 750;
}
</style>