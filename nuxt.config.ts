// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Фронтенд-разработчик с более 10 лет опыта',
      meta: [
        { name: 'title', content: 'Дмитрий Шевчук | Front-end developer' },
        { name: 'description', content: 'В рабзработке с 2012 года. За это время успел поработать в заказной разработке и в продуктовых компаниях.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.dshevchuk.me' },
        { property: 'og:title', content: 'Дмитрий Шевчук | Front-end developer' },
        { property: 'og:description', content: 'В рабзработке с 2012 года. За это время успел поработать в заказной разработке и в продуктовых компаниях.' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://www.dshevchuk.me' },
        { property: 'twitter:title', content: 'Дмитрий Шевчук | Front-end developer' },
        { property: 'twitter:title', content: 'В рабзработке с 2012 года. За это время успел поработать в заказной разработке и в продуктовых компаниях.' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;0,900;1,700&display=swap' }
      ],
    }
  },

  devtools: { enabled: true },

  css: [
    './assets/styles/main.css'
  ],

  compatibilityDate: '2024-11-11',

  modules: ['yandex-metrika-module-nuxt3'],
  yandexMetrika: {
    id: '98890348',
    webvisor: true,
  }
})