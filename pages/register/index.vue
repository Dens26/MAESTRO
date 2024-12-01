<!-- TEMPLATE -->
<template>
    <Header></Header>
    <div class="container">
        <h1 class="title">{{ $t('register.select_language.title') }}</h1>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-4">
            <div v-for="(language, index) in languages" :key="index" class="col">
                <button class="card h-100" @click="selectedLanguage(language)">
                    <nuxt-link class="text-decoration-none language-container" :to="{ name: 'welcome' }">
                        <img :src="language.logo" class="card-img-top p-4" :alt="language.name">
                        <div class="card-body">
                            <h5 class="card-title text-center fs-2">{{ language.name }}</h5>
                            <p class="card-text">{{ $t(`register.select_language.language_description.${language.name}`)
                                }}
                            </p>
                        </div>
                    </nuxt-link>
                </button>
            </div>
        </div>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const profilStore = useProfilStore()
const languages = globalStore.languages

const selectedLanguage = (language: any) => {
    profilStore.setSelectedLanguage(language)
    console.log(profilStore.selectedLanguage)
}

onMounted(() => {
    globalStore.setBackgroundColor('rgb(255, 255, 255)')
})
</script>


<!-- STYLE -->
<style>
.title {
    color: rgb(75, 75, 75);
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-weight: 900;
}

.language-container {
    color: rgb(75, 75, 75)
}

.container {
    max-width: 1080px;
}

.card-body {
    align-content: end;
    text-align: center;
}
</style>