<!-- TEMPLATE -->
<template>
    <div class="main-container">
        <div class="header">
            <!-- ProgressBar -->
            <WelcomeProgressBar :step="step" :max="8"></WelcomeProgressBar>

            <!-- Question -->
            <div :class="step < 2 ? 'order-container-center' : 'order-container-top rotating-and-translate'">
                <!-- Bubble dialog -->
                <div :class="step < 2 ? 'bubble-container-center' : 'bubble-container-top'">
                    <div :class="step < 2 ? 'speech-bubble' : 'speech-bubble-left'">
                        <span :key="fadeKey1" v-if="globalStore.bubbleText === ''" class="text-bubble fade">
                            {{ $t('pages.welcome.step_' + step) }}
                            {{ step === 3 || step === 4 ? selectedLanguage.name + ' ?' : '' }}
                        </span>
                        <span v-else :key="fadeKey" class="text-bubble fade">
                            {{ $t(globalStore.bubbleText + '.bubbleText') }}
                        </span>
                    </div>
                </div>

                <!-- gif -->
                <div :class="step < 2 ? 'gif-container' : 'gif-container-left'">
                    <DotLottieVue :class="step >= 1 && step != 2 ? 'rotating' : ''"
                        :style="{ height: 360, width: 360 }" autoplay loop :speed="1.5" :src="steps[step].src"
                        :key="step" />
                </div>
            </div>
        </div>
        <!-- Answer -->
        <transition>
            <div v-if="step >= 2 && step < 5 || step >=6" class="answer-container row row-cols-1 row-cols-md-2 g-3 mx-2">
                <WelcomeAnswer v-if="step === 2" :step="step" :answers="heards" :size="64"></WelcomeAnswer>
                <WelcomeAnswer v-if="step === 3" :step="step" :answers="why" :size="64"></WelcomeAnswer>
                <WelcomeAnswer v-if="step === 4" :step="step" :answers="knowledge"  :size="64"></WelcomeAnswer>
                <WelcomeAnswer v-if="step === 6" :step="step" :answers="goal"></WelcomeAnswer>
                <WelcomeAnswer v-if="step === 7" :step="step" :answers="start"  :size="128"></WelcomeAnswer>
            </div>
        </transition>

        <!-- Description -->
        <div v-if="step === 5" class="description-container">
            <div v-for="(d, index) in description" :key="index">
                <WelcomeDescription :src="d"></WelcomeDescription>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

const heards = [
    'pages.welcome.heard.twitter',
    'pages.welcome.heard.facebook',
    'pages.welcome.heard.tiktok',
    'pages.welcome.heard.family_friends',
    'pages.welcome.heard.tv',
    'pages.welcome.heard.news',
    'pages.welcome.heard.youtube',
    'pages.welcome.heard.google_search',
    'pages.welcome.heard.other',
]

const why = [
    'pages.welcome.why.study',
    'pages.welcome.why.hobby',
    'pages.welcome.why.job',
    'pages.welcome.why.train'
]

const knowledge = [
    'pages.welcome.knowledge.noob',
    'pages.welcome.knowledge.beginning',
    'pages.welcome.knowledge.intermediate',
    'pages.welcome.knowledge.good',
    'pages.welcome.knowledge.expert',
]

const description = [
    'pages.welcome.description.learn',
    'pages.welcome.description.practice',
    'pages.welcome.description.reminder'
]

const goal = [
    'pages.welcome.goal.calm',
    'pages.welcome.goal.normal',
    'pages.welcome.goal.intensive',
    'pages.welcome.goal.extreme',
]
const start = [
    'pages.welcome.start.begin',
    'pages.welcome.start.find',
]

const fadeKey = computed(() => globalStore.fadeKey);
const fadeKey1 = computed(() => globalStore.fadeKey);

const globalStore = useGlobalStore()
const profilStore = useProfilStore()
const step = computed(() => globalStore.step)
const steps = computed(() => globalStore.steps)
const backgroundColor = computed(() => globalStore.backgroundColor)
const footerHeight = computed(() => globalStore.footer.heigth)
const selectedLanguage = computed(() => profilStore.selectedLanguage)
const marginTop = ref('')
const handleHeight = () => {
    marginTop.value = ((window.innerHeight) / 2) - footerHeight.value + 'px'
}
onMounted(() => {
    globalStore.setBackgroundColor("rgb(19, 31, 36)")
    marginTop.value = ((window.innerHeight) / 2) - footerHeight.value + 'px'
    window.addEventListener('resize', handleHeight)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleHeight)
})

</script>


<!-- STYLE -->
<style scoped>
.header {
    position: sticky;
    background-color: v-bind(backgroundColor);
    z-index: 1000;
    top: 0;
}

.answer-container {
    padding-bottom: 100px;
}

.description-container {
    padding-bottom: 100px;
}

.main-container {
    overflow-x: hidden;
    background-color: v-bind(backgroundColor);
    height: 100vh;
}

.order-container-center {
    display: flex;
    flex-direction: column;
}

.order-container-top {
    flex-direction: row-reverse;
    padding: 30px 30px;
}

.bubble-container-center {
    display: flex;
    justify-content: center;
    padding-top: v-bind(marginTop)
}

.bubble-container-top {
    display: flex;
    height: 100%;
}

.text-bubble {
    margin: 0 auto;
    color: white;
}

.speech-bubble {
    position: relative;
    border: 3px solid rgb(55, 70, 80);
    border-radius: 0.5rem;
    padding: 10px 20px;
    background-color: transparent;
}

.speech-bubble-left {
    position: relative;
    border: 3px solid rgb(55, 70, 80);
    border-radius: 0.5rem;
    padding: 10px 20px;
    background-color: transparent;
}

.speech-bubble:after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: rgb(55, 70, 80);
    border-bottom: 0;
    border-left: 0;
    margin-left: -15px;
    margin-bottom: 15px;
    left: 60%;
    top: 100%;
}

.speech-bubble-left:after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: rgb(55, 70, 80);
    border-bottom: 0;
    border-left: 0;
    margin-left: -15px;
    margin-bottom: 15px;
    left: 25%;
    top: 100%;
}

.gif-container {
    display: flex;
    align-items: center;
    margin: 0.5rem auto;
}

.gif-container-left {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    left: -80px;
}

.btn-previous {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5rem
}

/* EFFECT */
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.rotating {
    animation: rotate 2s;
}

@keyframes rotateAndTranslate {
    from {
        transform: rotate(0deg) translateY(20rem);
    }

    to {
        transform: rotate(360deg) translateY(0);
    }
}

.rotating-and-translate {
    animation: rotateAndTranslate 2s ease;
}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.fade {
    animation: fade 1s ease-in-out;
    animation-fill-mode: forwards;
}

/* TRANSITION */
.v-enter-active {
    transition: opacity 1s ease;
    transition-delay: 1.5s;
}

.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>