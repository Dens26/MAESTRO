<!-- TEMPLATE -->
<template>
    <div v-if="!profilStore.selectedLanguage.name" class="headband d-flex justify-content-around">
        <button class="btn" @click="previous"><img width="34" src="~@/assets/images/icons/left_arrow.png" alt=""></button>
        <button :class="'btn gap-1'" v-for="(language, index) in visibleLanguages" :key="index"
            class="d-flex align-items-center" @click="selectedLanguage(language)">
            <img class="rotating" :src="language.logo" width="48" :alt="language.name">
            <p class="language-text">{{ language.name }}</p>
        </button>
        <button class="btn" @click="next"><img width="34" src="~@/assets/images/icons/right_arrow.png" alt=""></button>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center gap-3">
        <img :class="{'d-none':windowWidth<=576}" width="48" :src="profilStore.selectedLanguage.logo" alt="">
        <p class="language-text fs-5 text-center">{{ $t('pages.index.headband.language_description') + profilStore.selectedLanguage.name }}</p>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const windowWidth = computed(() => globalStore.windowWidth)

const profilStore = useProfilStore()
const selectedLanguage = (language: any) => {
    profilStore.setSelectedLanguage(language)
    profilStore.setIsAuthenticated(true)
}
const languages = globalStore.languages
const currentIndex = ref(0)
const visibleCount = computed(() => {
    if (windowWidth.value >= 768){
        return 4
    }
    return 2
})

const visibleLanguages = computed(() => {
    return languages.slice(currentIndex.value, currentIndex.value + visibleCount.value)
})

const next = () => {
    if (currentIndex.value + visibleCount.value < languages.length) {
        currentIndex.value++
    }
}

const previous = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}
</script>

<!-- STYLE -->
<style scoped>
.headband {
    border-top: solid 2px rgb(190, 190, 190);
    border-bottom: solid 2px rgb(190, 190, 190);
    height: 75px;
}

.language-text {
    margin: 0;
    font-size: 1.3rem;
}

/* EFFECTS */
@keyframes rotating {
    from {
        transform: rotateY(0deg)
    }

    to {
        transform: rotateY(360deg);
    }
}
.rotating{
    animation: rotating 10s linear infinite;
}
</style>