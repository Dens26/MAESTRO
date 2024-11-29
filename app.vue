<template>
  <Header></Header>
  <NuxtPage></NuxtPage>
</template>

<script setup>
const globalStore = useGlobalStore()

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