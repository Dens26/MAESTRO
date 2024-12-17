export const useVisibilityStore = defineStore('visibilityStore', {
    state: () => ({
        isButtonVisible: true,
    }),
    actions: {
        setButtonVisibility(isVisible: boolean) {
            this.isButtonVisible = isVisible
        }
    },
});
