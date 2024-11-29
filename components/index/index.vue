<!-- TEMPLATE -->
<template>
    <div class="d-flex intro ">
        <div>
            <DotLottieVue :style="{ height: size, width: size }" autoplay loop :speed="1.5"
                src="https://lottie.host/09f2c5f6-f987-40f8-b4d2-1c8edb730930/7SzUqMGZq0.lottie" />

        </div>
        <div>
            <p class="text-center m-auto">{{ $t('presentation.intro.text.first') }}</p>
            <p class="text-center m-auto">{{ $t('presentation.intro.text.second') }}</p>
            <p class="text-center m-auto">{{ $t('presentation.intro.text.third') }}</p>
            <div ref="buttonRef">
                <nuxt-link class="text-decoration-none" :to="selectedLanguage.name === ''? {name: 'register-selectLanguage'} : {name:'register'}">
                    <Button class="d-flex mt-5 m-auto w-100" :buttonClass="'primary'"
                        :buttonName="$t('button.start').toLocaleUpperCase()"></Button>
                </nuxt-link>
                <Button class="d-flex mt-3 m-auto w-100" :buttonClass="'secondary'"
                    :buttonName="$t('button.already_account').toUpperCase()"></Button>
            </div>
        </div>
    </div>

    <Headband v-if="windowWidth > 360" class="headband"></Headband>

    <IndexChapter :gifFirst="false" :title="$t('presentation.chapter_1.title')"
        :text="$t('presentation.chapter_1.text')" :img="$t('presentation.chapter_1.img')" />
    <IndexChapter :gifFirst="true" :title="$t('presentation.chapter_2.title')" :text="$t('presentation.chapter_2.text')"
        :img="$t('presentation.chapter_2.img')" />
    <IndexChapter :gifFirst="false" :title="$t('presentation.chapter_3.title')"
        :text="$t('presentation.chapter_3.text')" :img="$t('presentation.chapter_3.img')" />
    <IndexChapter :gifFirst="false" :title="$t('presentation.chapter_4.title')"
        :text="$t('presentation.chapter_4.text')" :img="$t('presentation.chapter_4.img')" />
    <IndexChapter :gifFirst="true" :title="$t('presentation.chapter_5.title')" :text="$t('presentation.chapter_5.text')"
        :button-class="'secondary'" :button-name="$t('presentation.chapter_5.button')"
        :img="$t('presentation.chapter_5.img')" />
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const profilStore = useProfilStore()
const selectedLanguage = computed(() => profilStore.selectedLanguage)
const windowWidth = computed(() => globalStore.windowWidth)
const size = computed(() => {
    return windowWidth.value >= 1080 ? '500px' : '300px'
})

import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
const visibilityStore = useVisibilityStore()

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
        rootMargin: '-95px',
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
.intro {
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 1.8rem;
    font-weight: 900;
    color: rgb(75, 75, 75)
}

.headband {
    margin-top: 205px;
}

@media screen and (min-width:1080px) {
    .intro {
        display: flex;
        flex-direction: row;
        margin-top: 100px
    }

    .headband {
        margin-top: 190px;
    }
}
</style>