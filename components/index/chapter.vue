<!-- TEMPLATE -->
<template>
    <div class="d-flex chapter-container">
        <div v-if="gifFirst && windowWidth >= 1080">
            <DotLottieVue :style="{ height: size, width: size }" autoplay loop :speed="1" :src="img" />
        </div>
        <div class="description-container">
            <p class="title alignement m-auto" :style="titleStyle">{{ title }}</p>
            <p class="content alignement m-auto">{{ text }}</p>
            <Button class="btn" v-if="buttonName && buttonClass" :button-class="buttonClass" :button-name="buttonName"></Button>
        </div>
        <div v-if="!gifFirst || windowWidth < 1080">
            <DotLottieVue class="m-0 p-0" :style="{ height: size, width: size }" autoplay loop :speed="1" :src="img" />
        </div>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const globalStore = useGlobalStore()
const windowWidth = computed(() => globalStore.windowWidth)
const size = computed(() => {
    return windowWidth.value >= 1080 ? '400px' : '300px'
})
const titleStyle = computed(() => {
    return {
        color: globalStore.primary,
    }
})

const props = defineProps<{
    gifFirst: boolean,
    title: string,
    text: string,
    img: string,
    buttonName?: string,
    buttonClass?: string
}>()
</script>


<!-- STYLE -->
<style scoped>
.description-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.chapter-container {
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
}

.headband {
    margin-top: 100px;
}

.title {
    font-size: 2rem;
    padding: 0 50px;
    font-weight: 900;
}

.content {
    font-size: 1rem;
    padding: 0 50px;
}

.alignement {
    text-align: center;
}
.btn{
    width: 250px;
    margin-top: 1rem;
}

@media screen and (min-width:576px) {
    .chapter-container {
        padding: 0 125px;
    }

    .title {
        font-size: 3rem;
        padding: 0 50px;
    }
}

@media screen and (min-width:768px) {
    .chapter-container {
        padding: 0 200px;
    }
}

@media screen and (min-width:1080px) {
    .chapter-container {
        flex-direction: row;
        padding: 0 50px;
        margin-top: 50px;
    }

    .title {
        font-size: 2.5rem;
    }

    .alignement {
        text-align: start;
    }
}
</style>