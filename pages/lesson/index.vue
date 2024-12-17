<!-- TEMPLATE -->
<template>
    <div class="main-container">
        index
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const backgroundColor = computed(() => globalStore.backgroundColor)
</script>


<!-- STYLE -->
 <style scoped>
.main-container{
    background-color: v-bind(backgroundColor);
    height: 100vh;
}
</style>
