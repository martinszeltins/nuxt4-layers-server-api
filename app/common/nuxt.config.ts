// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  routeRules: {
        '/': {
            redirect: { to: '/events', statusCode: 302 }
        }
    },
})
