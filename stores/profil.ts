export const useProfilStore = defineStore('profil', {
    state: () => ({
        selectedLanguage: {
            name: '',
            logo: ''
        }
    }),
    actions: {
        setSelectedLanguage(language: any) {
            this.selectedLanguage.name = language.name
            this.selectedLanguage.logo = language.logo
        }
    }
})