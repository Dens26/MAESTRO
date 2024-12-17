<!-- TEMPLATE -->
<template>
    <Header></Header>
    <div class="container my-4">
        <h1 class="title">{{ $t('pages.register.title') }}</h1>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-2 mt-2">
            <div v-for="(language, index) in languages" :key="index" class="col">
                <nuxt-link :to="{ name: 'welcome' }" v-on:click="selectedLanguage(language)"
                    class="btn text-decoration-none card h-100" @click="selectedLanguage(language)">
                    <div class="d-flex flex-column h-100 w-75 m-auto">
                        <img :src="language.logo" class="card-img-top p-2" :alt="language.name">
                        <div>
                            <h5 class="card-title text-center fs-5">{{ language.name }}</h5>
                            <p class="card-text">{{ $t(`pages.register.language_description.${language.name}`)}}</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>


<!-- SCRIPT -->
 <script setup lang="ts">
 const profilStore = useProfilStore()
 const globalStore = useGlobalStore()
 const languages = computed(() => globalStore.languages)
 const selectedLanguage = (language: any) => {
    profilStore.setSelectedLanguage(language)
    profilStore.setIsAuthenticated(true)
 }

 onMounted(() => {
    profilStore.resetChoice()
    globalStore.setStep(0)
 })
</script>


<!-- STYLE -->
 <style scoped>
.title{
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-top: 50px;
}

/* MEDIA QUERIES */
@media screen and (min-width:576px){
    .title{
        margin-top: 150px;
    }
}
</style>