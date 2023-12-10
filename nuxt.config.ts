// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
  },
  devtools: { enabled: true },
  imports: {
    dirs: [
      'composables/**'
    ]
  }
})
