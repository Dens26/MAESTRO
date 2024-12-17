<!-- TEMPLATE -->
<template>
    <!-- Header -->
    <Header></Header>

    <!-- Main description -->
    <div class="description-container">
        <DotLottieVue :style="{ height: size, width: size }" autoplay loop :speed="1.5"
            src="https://lottie.host/09f2c5f6-f987-40f8-b4d2-1c8edb730930/7SzUqMGZq0.lottie" />
        <div class="text-button-container">
            <div>
                <p class="text">{{ $t('pages.index.description.first') }}</p>
                <p class="text">{{ $t('pages.index.description.second') }}</p>
                <p class="text">{{ $t('pages.index.description.third') }}</p>
            </div>
            <div>
                <div ref="buttonRef">
                    <nuxt-link :to="selectedLanguage.name === ''? {name:'register'}: {name:'welcome'}">
                        <ButtonPrimary class="btn">{{ $t('pages.index.button-start').toUpperCase() }}
                        </ButtonPrimary>
                    </nuxt-link>
                </div>
                <div class="mt-2">
                    <ButtonSecondary class="btn">{{ $t('pages.index.button-account').toUpperCase() }}
                    </ButtonSecondary>
                </div>
            </div>
        </div>
    </div>

    <!-- Headband -->
    <IndexHeadband class="headband" v-if="globalStore.windowWidth > 576"></IndexHeadband>

    <!-- Other description -->
    <IndexChapter :size="size" :gif-first="false" :title="$t('pages.index.chapter_1.title')"
        :text="$t('pages.index.chapter_1.text')" :img="$t('pages.index.chapter_1.img')" :imgSize="size">
    </IndexChapter>
    <IndexChapter :size="size" :gif-first="true" :title="$t('pages.index.chapter_2.title')"
        :text="$t('pages.index.chapter_2.text')" :img="$t('pages.index.chapter_2.img')" :imgSize="size">
    </IndexChapter>
    <IndexChapter :size="size" :gif-first="false" :title="$t('pages.index.chapter_3.title')"
        :text="$t('pages.index.chapter_3.text')" :img="$t('pages.index.chapter_3.img')" :imgSize="size">
    </IndexChapter>
    <IndexChapter :size="size" :gif-first="true" :title="$t('pages.index.chapter_4.title')"
        :text="$t('pages.index.chapter_4.text')" :img="$t('pages.index.chapter_4.img')" :imgSize="size">
    </IndexChapter>
    <IndexChapter :size="size" :gif-first="false" :title="$t('pages.index.chapter_5.title')"
        :text="$t('pages.index.chapter_5.text')" :img="$t('pages.index.chapter_5.img')" :imgSize="size"
        :buttonName="$t('pages.index.chapter_5.button')">
    </IndexChapter>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
const visibilityStore = useVisibilityStore()
const globalStore = useGlobalStore()
const profilStore = useProfilStore()

const buttonRef = ref<HTMLElement | null>(null)
const selectedLanguage = computed(() => profilStore.selectedLanguage)

let observer: IntersectionObserver | null = null

const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        visibilityStore.setButtonVisibility(entry.isIntersecting)
    })
}

const size = computed(() => {
    return globalStore.windowWidth >= 768 ? '500px' : '300px'
})

onMounted(() => {
    observer = new IntersectionObserver(handleVisibilityChange, {
        root: null,
        rootMargin: '-75px',
        threshold: 0.1,
    });

    if (buttonRef.value) {
        observer.observe(buttonRef.value)
    }
    profilStore.resetChoice()
    globalStore.setStep(0)
})

onBeforeUnmount(() => {
    if (observer && buttonRef.value) {
        observer.unobserve(buttonRef.value)
        observer.disconnect()
    }
})
</script>


<!-- STYLE -->
<style scoped>
.description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.text-button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.text {
    text-align: center;
    font-size: 1.75rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
}

.headband {
    margin-top: 220px;
}
.btn{
    width: 300px;
}

@media screen and (min-width: 768px) {
    .headband {
        margin-top: 20px;
    }
}

@media screen and (min-width: 1080px) {
    .headband {
        margin-top: 290px;
    }

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