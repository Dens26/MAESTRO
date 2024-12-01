<!-- TEMPLATE -->
<template>
    <div class="main-container">
        <NuxtPage></NuxtPage>
    </div>
</template>


<!-- SCRIPT -->
<script setup>
const globalStore = useGlobalStore()
const backgroundColor = computed(() => globalStore.backgroundColor)

const handleWidth = () => {
    globalStore.setWindowWidth(window.innerWidth)
}

onMounted(() => {
    window.addEventListener('resize', handleWidth)
    globalStore.setWindowWidth(window.innerWidth)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleWidth)
})
</script>

<style>
.main-container {
    background-color: v-bind(backgroundColor);
}

.body {
    background-color: v-bind(backgroundColor);
}
</style>