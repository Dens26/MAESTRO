import htmlLogo from '@/assets/images/logos/html.png'
import cssLogo from '@/assets/images/logos/css.png'
import javaScriptLogo from '@/assets/images/logos/javascript.png'
import phpLogo from '@/assets/images/logos/php.png'
import sqlLogo from '@/assets/images/logos/sql.png'
import vueLogo from '@/assets/images/logos/vue.png'
import reactLogo from '@/assets/images/logos/react.png'
import angularLogo from '@/assets/images/logos/angular.png'
import laravelLogo from '@/assets/images/logos/laravel.png'
import symfonyLogo from '@/assets/images/logos/symfony.png'
import pythonLogo from '@/assets/images/logos/python.png'
import javaLogo from '@/assets/images/logos/java.png'

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        step: 0,
        lessonStep: 1,
        steps: [
            { index: 0, src: "https://lottie.host/33516c0b-d578-4512-981e-b17d8946e566/LggGaQ6PgC.lottie" },
            { index: 1, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" },
            { index: 2, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" },
            { index: 3, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" },
            { index: 4, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" },
            { index: 5, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" },
            { index: 6, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" },
            { index: 7, src: "https://lottie.host/d3090489-7a1d-4b1b-a63c-7221b84c3165/wRdtUzuUTr.lottie" }
        ],
        backgroundColor: 'rgb(20, 30, 35)',
        windowWidth: 0,
        footer: {
            heigth: 75
        },
        languages: [
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "JavaScript", logo: javaScriptLogo },
            { name: "PHP", logo: phpLogo },
            { name: "SQL", logo: sqlLogo },
            { name: "Vue js", logo: vueLogo },
            { name: "React", logo: reactLogo },
            { name: "Angular", logo: angularLogo },
            { name: "Laravel", logo: laravelLogo },
            { name: "Symfony", logo: symfonyLogo },
            { name: "Python", logo: pythonLogo },
            { name: "Java", logo: javaLogo },
        ],
        bubbleText: '',
        fadeKey: 0
    }),
    actions: {
        setWindowWidth(width: number) {
            this.windowWidth = width
        },
        setBackgroundColor(backgroundColor: string) {
            this.backgroundColor = backgroundColor
        },
        setStep(step: number) {
            this.step = step
        },
        nextStep() {
            this.step++
        },
        setLessonStep(lessonStep: number) {
            this.lessonStep = lessonStep
        },
        nextLessonStep() {
            this.lessonStep++
        },
        previousStep() {
            this.step--
        },
        incrementFadeKey() {
            this.fadeKey++
        },
        setBubbleText(value: string) {
            this.bubbleText = value
        }
    }
}) 