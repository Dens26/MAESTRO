export const useGlobalStore = defineStore('global', {
    state: () => ({
        backgroundColor: 'rgb(255, 255, 255)',
        windowWidth: 0,
        primary: 'rgb(55, 205, 35)',
        secondary: 'rgb(255, 255, 255)',
        languages: [
            { name: "HTML", logo: "/assets/logos/html.png", description:"" },
            { name: "CSS", logo: "/assets/logos/css.png" },
            { name: "JavaScript", logo: "/assets/logos/javascript.png" },
            { name: "PHP", logo: "/assets/logos/php.png" },
            { name: "SQL", logo: "/assets/logos/sql.png" },
            { name: "Vue js", logo: "/assets/logos/vue.png" },
            { name: "React", logo: "/assets/logos/react.png" },
            { name: "Angular", logo: "/assets/logos/angular.png" },
            { name: "Laravel", logo: "/assets/logos/laravel.png" },
            { name: "Symfony", logo: "/assets/logos/symfony.png" },
            { name: "Python", logo: "/assets/logos/python.png" },
            { name: "Java", logo: "/assets/logos/java.png" },
        ]
    }),
    actions: {
        setWindowWidth(width: number) {
            this.windowWidth = width
        },
        setBackgroundColor(backgroundColor: string){
            this.backgroundColor = backgroundColor
        }
    }
})