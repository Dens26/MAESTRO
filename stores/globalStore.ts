export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        windowWidth: 0
    }),
    actions: {
        setWindowWidth(width: number) {
            this.windowWidth = width
        }
    }
}) 