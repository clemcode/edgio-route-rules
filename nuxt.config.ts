// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: 
    {
      '/prerender': { prerender: true},
      'server': { swr: 60 }
    },
    nitro: {
      preset: 'edgio'
    }
})
