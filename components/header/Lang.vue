<template>
    <div class="d-flex px-2">
        <img :src="url">
        <button class="dropdown-item" @click="setLocale(`${local}`)">{{ lang }}</button>
    </div>
</template>

<script setup lang="ts">
const { setLocale } = useI18n()

const props = defineProps<{
    local: String,
    lang: String,
    flag: String
}>()

const url = ref('')

onMounted(() => {
    url.value = 'https://flagsapi.com/' + props.flag + '/shiny/32.png'
})
</script>