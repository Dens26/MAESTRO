<!-- TEMPLATE -->
<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>



<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const handleWindowWidth = () => {
  globalStore.setWindowWidth(window.innerWidth)
}


onMounted(() => {
  window.addEventListener('resize', handleWindowWidth)
  globalStore.setWindowWidth(window.innerWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowWidth)
})
</script>



<!-- STYLE -->
<style>
@font-face {
    font-family: CroissantOne;
    src: url('/assets/fonts/CroissantOne-Regular.ttf');
}
</style>