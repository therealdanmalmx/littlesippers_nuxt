// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
  },
  modules: [
    'nuxt3-leaflet'
  ],

  app: {
    head: {
      script: [
        {
            src: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`,
            async: true,
            defer: true,
          }
      ]
    },
  }


});