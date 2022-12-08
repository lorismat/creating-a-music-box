// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Sounds Sanbox',
      meta: [
        { name: 'description', content: 'A sandbox for experiments with p5.js and Tone.js' }
      ],
    }
  }, 
  // for main scss
  css: ["@/assets/scss/main.scss"],
  vite: {
    // for extra files scss
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "@/assets/scss/_config.scss" as *;',
          ]
        }
      }
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
})

