export const useProfilStore = defineStore('profilStore', {
    state: () => ({
        isAuthenticated: false,
        selectedLanguage: {
            name: '',
            logo: ''
        },
        heard: '',
        why: '',
        knowledge: '',
        goal: '',
        start: '',
        heart: 5,
        lesson: {
            chapter_1: {
                lesson_1: {
                    score: 0,
                    time: 0,
                }
            }
        }
    }),
    actions: {
        setSelectedLanguage(language: any) {
            this.selectedLanguage.name = language.name,
                this.selectedLanguage.logo = language.logo
        },
        setIsAuthenticated(value: boolean) {
            this.isAuthenticated = value
        },
        setHeard(heard: string) {
            this.heard = heard
        },
        setWhy(why: string) {
            this.why = why
        },
        setKnowledge(knowledge: string) {
            this.knowledge = knowledge
        },
        setGoal(goal: string) {
            this.goal = goal
        },
        setStart(start: string) {
            this.start = start
        },
        resetChoice() {
            this.heard = ''
            this.why = ''
            this.knowledge = ''
            this.goal = ''
            this.start = ''
            this.selectedLanguage.name = ''
            this.selectedLanguage.logo = ''
        }
    }
})