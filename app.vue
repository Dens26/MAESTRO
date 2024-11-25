<template>
  {{ $t('hello_world') }}
  {{ testStore.name }}
</template>

<script setup lang="ts">
const testStore = useTestStore()

const name = testStore.name

console.log(name)
</script>