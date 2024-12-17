<!-- TEMPLATE -->
<template>
    <nav class="nav-container" :class="{ 'border': scrollPosition > 1 }">
        <div class="menu-container" :class="{ 'justify-content-between': !isButtonVisible }">
            <div class="d-flex align-items-center gap-3">
                <img width="45" height="45" src="~@/assets/images/logos/maestro.png" :alt="$t('alt.company-logo')">
                <IndexCompanyName v-if="isButtonVisible || windowWidth > 768"></IndexCompanyName>
            </div>
            <div v-if="isButtonVisible || route.name === 'register'" class="dropdown-container">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="fs-5">{{ $t('header.language-of-the-site').toUpperCase() }}</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li v-for="(language, index) in languages" :key="index">
                            <HeaderLang :local="language.local" :lang="language.lang" :flag="language.flag" />
                        </li>
                    </ul>
                </div>
            </div>
            <nuxt-link  v-if="!isButtonVisible && route.name === 'index'" :to="selectedLanguage.name === '' ? { name: 'register' } : { name: 'welcome' }">
                <ButtonPrimary :width="175">{{ $t('pages.index.button-start').toUpperCase()
                    }}</ButtonPrimary>
            </nuxt-link>
        </div>
    </nav>
</template>



<!-- SCRIPT -->
<script setup lang="ts">
const route = useRoute()
const visibilityStore = useVisibilityStore()
const globalStore = useGlobalStore()
const profilStore = useProfilStore()

const isButtonVisible = computed(() => visibilityStore.isButtonVisible)
const windowWidth = computed(() => globalStore.windowWidth)
const selectedLanguage = computed(() => profilStore.selectedLanguage)
const scrollPosition = ref(0)

const languages = [
    { local: 'fr', lang: 'Français', flag: 'FR' },
    { local: 'en', lang: 'English', flag: 'US' },
    { local: 'es', lang: 'Español', flag: 'ES' },
]

const handleScroll = () => {
    scrollPosition.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>



<!-- STYLE -->
<style scoped>
.nav-container {
    position: sticky;
    z-index: 1000;
    top: 0;
    height: 75px;
    background-color: white;
    align-content: center;
    padding: 0 50px;
}

.border {
    border-bottom: 2px solid;
    border-color: rgb(200, 200, 200);
}

.menu-container {
    display: flex;
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
    justify-content: center;
}

.dropdown-container {
    display: none;
}


/* MEDIA QUERIES */
@media screen and (min-width: 1080px) {
    .menu-container {
        justify-content: space-between;
    }

    .dropdown-container {
        display: flex;
    }
}
</style>