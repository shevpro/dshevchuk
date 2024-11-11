// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Фронтенд-разработчик с более 10 лет опыта'
    }
  },

  devtools: { enabled: true },

  css: [
    './assets/styles/main.css'
  ],

  compatibilityDate: '2024-11-11'
})