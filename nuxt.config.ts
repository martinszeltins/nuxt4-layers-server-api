// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './app/bands',
    './app/common',
    './app/concerts',
    './app/events',
    './app/staff',
    './app/tours',
  ]
})
