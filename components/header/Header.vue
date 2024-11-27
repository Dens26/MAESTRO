<!-- TEMPLATE -->
<template>
    <nav class="menu-container" :class="{ 'menu-container-bg': scrollPosition > 1 }">
        <div class="header-container mx-5"
            :class="{ 'justify-content-between': !isButtonVisible, 'justify-content-center': windowWidth<1080 }">
            <div>
                <nuxt-link class="text-decoration-none text-success d-flex gap-2" to="/">
                    <img src="~/assets/logo/logo.png" width="48" alt="">
                    <span class="company-name fs-2">Maestro</span>
                </nuxt-link>
            </div>
            <div>
                <Button v-if="!isButtonVisible" :buttonClass="'primary'" :buttonName="name.toUpperCase()">c'est parti!</Button>
            </div>
            <div class="dropdown-container" :class="{'d-none': !isButtonVisible}">
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
    {
        local: 'fr',
        lang: 'Français',
        flag: 'FR'
    },
    {
        local: 'en',
        lang: 'English',
        flag: 'US'
    },
    {
        local: 'es',
        lang: 'español',
        flag: 'ES'
    },
]

const scrollPosition = ref(0)
const windowWidth = ref(0)
const handleScroll = () => {
    scrollPosition.value = window.scrollY
}
const handleWidth = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleWidth)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleWidth)
})

const visibilityStore = useVisibilityStore()
const globalStore = useGlobalStore()
const navBarHeight = computed(() => globalStore.navBarHeight)

const isButtonVisible = computed(() => visibilityStore.isButtonVisible)
const name = ref('c\'est parti !')
</script>


<!-- STYLE -->
<style scoped>
.dropdown-container {
    display: none;
}

.menu-container {
    position: sticky;
    top: 0;
    height: v-bind(navBarHeight);
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

@media screen and (min-width: 1080px) {
    .dropdown-container {
        display: flex;
    }

    .header-container {
        justify-content: space-between;
    }
}
</style>