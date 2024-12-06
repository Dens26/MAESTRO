export const useVisibilityStore = defineStore('visibility', {
    state: () => ({
        isButtonVisible: true,
    }),
    actions: {
        setButtonVisibility(isVisible: boolean) {
            this.isButtonVisible = isVisible
            console.log(this.isButtonVisible)
        }
    },
});
