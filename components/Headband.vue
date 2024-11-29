<!-- TEMPLATE -->
<template>
    <div v-if="!profil.selectedLanguage.name" class="headband d-flex justify-content-around">
        <button class="btn" @click="previous"><img width="34" src="/assets/icons/left_arrow.png" alt=""></button>
        <button :class="'btn gap-3'" v-for="(language, index) in visibleLanguages" :key="index"
            class="d-flex align-items-center" @click="selectedLanguage(language)">
            <img :src="language.logo" width="48" :alt="language.name">
            <p class="language-text">{{ language.name }}</p>
        </button>
        <button class="btn" @click="next"><img width="34" src="/assets/icons/right_arrow.png" alt=""></button>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center gap-3">
        <img :class="{'d-none':windowWidth<=576}" width="48" :src="profil.selectedLanguage.logo" alt="">
        <p class="language-text fs-5 text-center">{{ $t('headband.language_description') + profil.selectedLanguage.name }}</p>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const windowWidth = computed(() => globalStore.windowWidth)

const profil = useProfilStore()
const selectedLanguage = (language: any) => {
    profil.setSelectedLanguage(language)
    console.log(profil.selectedLanguage)
}
const languages = [
    { name: "HTML", logo: "/assets/logos/html.png" },
    { name: "CSS", logo: "/assets/logos/css.png" },
    { name: "JavaScript", logo: "/assets/logos/javascript.png" },
    { name: "PHP", logo: "/assets/logos/php.png" },
    { name: "SQL", logo: "/assets/logos/sql.png" },
    { name: "Vue.js", logo: "/assets/logos/vue.png" },
    { name: "React", logo: "/assets/logos/react.png" },
    { name: "Angular", logo: "/assets/logos/angular.png" },
    { name: "Laravel", logo: "/assets/logos/laravel.png" },
    { name: "Symfony", logo: "/assets/logos/symfony.png" },
    { name: "Python", logo: "/assets/logos/python.png" },
    { name: "Java", logo: "/assets/logos/java.png" },
]
const currentIndex = ref(0)
const visibleCount = computed(() => {
    if (windowWidth.value >= 768){
        return 4
    }
    if (windowWidth.value >= 576){
        return 2
    }
    return 1
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
</style>