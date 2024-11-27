<!-- TEMPLATE -->
<template>
    <div class="container">
        <div class="d-flex account-container">
            <div>
                <DotLottieVue style="height: 500px; width: 500px" autoplay loop :speed="1.5"
                    src="https://lottie.host/09f2c5f6-f987-40f8-b4d2-1c8edb730930/7SzUqMGZq0.lottie" />

            </div>
            <div>
                <p class="fs-1 text-center m-0">{{ $t('index.text_1') }}</p>
                <p class="fs-1 text-center m-0">{{ $t('index.text_2') }}</p>
                <p class="fs-1 text-center m-0">{{ $t('index.text_3') }}</p>
                <div ref="buttonRef">
                    <Button class="d-flex w-75 mt-5 m-auto" :buttonClass="'primary'"
                        :buttonName="$t('button.start').toLocaleUpperCase()"></Button>
                    <Button class="d-flex w-75 mt-3 m-auto" :buttonClass="'secondary'"
                        :buttonName="$t('button.already_account').toUpperCase()"></Button>
                </div>
            </div>
        </div>
    </div>

    <Headband class="headband"></Headband>
</template>


<!-- SCRIPT -->
<script setup lang="ts">

import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const visibilityStore = useVisibilityStore()
const globalStore = useGlobalStore()
const rootMargin = `-${globalStore.navBarHeight} 0px 0px 0px`

const buttonRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        visibilityStore.setButtonVisibility(entry.isIntersecting);
    })
}

onMounted(() => {
    observer = new IntersectionObserver(handleVisibilityChange, {
        root: null,
        rootMargin,
        threshold: 0.1,
    });

    if (buttonRef.value) {
        observer.observe(buttonRef.value); // buttonRef.value est maintenant un HTMLElement
    }
})

onBeforeUnmount(() => {
    if (observer && buttonRef.value) {
        observer.unobserve(buttonRef.value);
        observer.disconnect();
    }
})
</script>


<!-- STYLE -->
<style scoped>
.account-container {
    margin-top: 100px;
    align-items: center;
    justify-content: center;
}

.headband{
    margin-top: 100px;
}

@media screen and (max-width:1080px) {
    .account-container {
        display: flex;
        flex-direction: column;
    }
}
</style>