<!-- TEMPATE -->
<template>
    <div class="d-flex flex-column">
        <div class="bubble-container">
            <div class="speech-bubble">
                <span class="text-bubble">{{ $t('welcome.hello') }}</span>
            </div>
        </div>
        <DotLottieVue class="gif-container" :style="{ height: 500, width: 500 }" autoplay loop :speed="1.5"
            src="https://lottie.host/33516c0b-d578-4512-981e-b17d8946e566/LggGaQ6PgC.lottie" />
    </div>
    <WelcomeHeadband class="headband"></WelcomeHeadband>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

const globalStore = useGlobalStore()
const marginTop = ref('')
const handleHeight = () => {
    marginTop.value = (window.innerHeight - 400 -1) / 2 + 'px'
}

onMounted(() => {
    marginTop.value = (window.innerHeight - 400 -1) / 2 + 'px'
    globalStore.setBackgroundColor("rgb(19, 31, 36)")
    window.addEventListener('resize', handleHeight)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleHeight)
})

</script>


<!-- STYLE -->
<style scoped>
.bubble-container {
    margin: 0 auto;
    margin-top: v-bind(marginTop);
}
.gif-container {
    width: 500px;
    margin: 0 auto;
}

.text-bubble {
    margin: 0 auto;
    color: white;
}

.speech-bubble {
    position: relative;
    display: inline-block;
    border: 3px solid rgb(55, 70, 80);
    border-radius: 0.5rem;
    padding: 10px 20px;
    background-color: transparent;
    margin: 0 auto;
    margin-bottom: 20px;
}

.speech-bubble:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: rgb(55, 70, 80);
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: 10px;
}

.headband {
    position: relative;
    margin-top: v-bind(marginTop);
}
</style>