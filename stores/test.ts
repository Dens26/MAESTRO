export const useTestStore = defineStore('testStore', {
    state: () => ({
        name: 'test',
    }),
    actions: {
        setName(value: string) {
            this.name = value;
        }
    },
});
