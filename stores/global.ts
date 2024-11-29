export const useGlobalStore = defineStore('global', {
    state: () => ({
        windowWidth: 0,
        primary: 'rgb(55, 205, 35)',
        secondary: 'rgb(255, 255, 255)'
    }),
    actions: {
        setWindowWidth(value: number) {
            this.windowWidth = value
        }
    }
})