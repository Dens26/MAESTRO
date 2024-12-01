<!-- TEMPLATE -->
<template>
    <nav class="menu-container" :class="{ 'menu-container-bg': scrollPosition > 1 }">
        <div class="header-container mx-5 align-items-center"
            :class="{ 'justify-content-between': !isButtonVisible, 'justify-content-center': windowWidth < 1080 }">
            <div>
                <nuxt-link class="text-decoration-none text-success align-items-center d-flex gap-2" to="/">
                    <img src="/assets/logos/logo.png" width="32" height="32" alt="">
                    <span :class="{ 'disable': !isButtonVisible }" class="company-name fs-2">Maestro</span>
                </nuxt-link>
            </div>
            <nuxt-link v-if="route.name === 'index'" class="text-decoration-none"
                :to="selectedLanguage.name === '' ? { name: 'register' } : { name: 'welcome' }">
                <Button :class="'w-100'" v-if="!isButtonVisible" :buttonClass="'primary'"
                    :buttonName="$t('button.start').toUpperCase()">
                </Button>
            </nuxt-link>
            <div class="dropdown-container" :class="{ 'd-none': !isButtonVisible }">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="fs-6">{{ $t('header.language_of_the_site').toUpperCase() }} : {{
                            $t('header.lang').toUpperCase() }}</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li v-for="(language, index) in languages" :key="index">
                            <HeaderLang :local="language.local" :lang="language.lang" :flag="language.flag">
                            </HeaderLang>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const languages = [
    { local: 'fr', lang: 'Français', flag: 'FR' },
    { local: 'en', lang: 'English', flag: 'US' },
    { local: 'es', lang: 'español', flag: 'ES' },
]
const globalStore = useGlobalStore()
const profilStore = useProfilStore()
const windowWidth = computed(() => globalStore.windowWidth)
const selectedLanguage = computed(() => profilStore.selectedLanguage)

const scrollPosition = ref(0)
const handleScroll = () => {
    scrollPosition.value = window.scrollY
}
const route = useRoute()
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

const visibilityStore = useVisibilityStore()
const isButtonVisible = computed(() => visibilityStore.isButtonVisible)
</script>


<!-- STYLE -->
<style scoped>
.disable {
    display: none;
}

.dropdown-container {
    display: none;
}

.menu-container {
    position: sticky;
    z-index: 1000;
    top: 0;
    height: 75px;
    background-color: white;
    align-content: center;
}

.menu-container-bg {
    border-bottom: solid 2px;
    border-color: rgb(200, 200, 200);
}

.header-container {
    display: flex;
}

@media screen and (min-width: 576px) {
    .company-name {
        display: flex;
    }
}

@media screen and (min-width: 1080px) {
    .dropdown-container {
        display: flex;
    }

    .header-container {
        justify-content: space-between;
    }
}
</style>