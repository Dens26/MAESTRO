<template>
    <Header></Header>
    <Index></Index>
</template>

<script setup lang="ts">
const globalStore = useGlobalStore()

onMounted(() => {
    globalStore.setBackgroundColor('white')
})
</script>