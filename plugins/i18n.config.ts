import en from '~/locales/en.EN.json'
import fr from '~/locales/fr-FR.json'
import es from '~/locales/es-ES.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
        en,
        fr,
        es
    }
}))