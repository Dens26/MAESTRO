<template>
    <div class="description-container">
        <DotLottieVue v-if="gifFirst && windowWidth >= 1080" :style="{ height: imgSize, width: imgSize }" autoplay loop
            :speed="1.5" :src="img" />
        <div class="text-button-container">
            <div>
                <p class="title">{{ title }}</p>
                <p class="text">{{ text }}</p>
            </div>
            <ButtonSecondary v-if="buttonName" class="btn">{{ buttonName }}</ButtonSecondary>
        </div>
        <DotLottieVue v-if="!gifFirst || windowWidth < 1080" :style="{ height: imgSize, width: imgSize }" autoplay loop
            :speed="1.5" :src="img" />
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
const globalStore = useGlobalStore()

defineProps<{
    gifFirst: boolean,
    title: string,
    text: string,
    img: string,
    imgSize: string,
    buttonName?: string
}>()

const windowWidth = computed(() => globalStore.windowWidth)
</script>


<!-- STYLE -->
<style scoped>
.btn {
    margin: 0 auto;
}

.description-container {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.text-button-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(90, 205, 0);
}

.text {
    text-align: center;
    font-size: 1rem;
    padding-left: 25px;
    padding-right: 25px;
    max-width: 576px;
    margin: 0;
}

@media screen and (min-width: 1080px) {
    .description-container {
        flex-direction: row;
        justify-content: center;
        gap: 5rem;
    }

    .text-button-container {
        margin-top: 75px;
    }
}
</style>