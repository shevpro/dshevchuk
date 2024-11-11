// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Фронтенд-разработчик с более 10 лет опыта',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;0,900;1,700&display=swap' }
      ],
    }
  },

  devtools: { enabled: true },

  css: [
    './assets/styles/main.css'
  ],

  compatibilityDate: '2024-11-11'
})