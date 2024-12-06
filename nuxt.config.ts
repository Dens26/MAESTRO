// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },

  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],
  i18n: {
    vueI18n: '~/plugins/i18n.config.ts'
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})