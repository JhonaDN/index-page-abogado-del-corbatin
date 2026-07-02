// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/variables.css', '~/assets/css/styles.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  runtimeConfig: {
    public: {
      // Origen del sitio (sin path). El path base ("/index-page-abogado-del-corbatin/")
      // ya se maneja aparte vía NUXT_APP_BASE_URL en el workflow de despliegue.
      siteOrigin: 'https://jhonadn.github.io'
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es-CO' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ],
      meta: [{ name: 'theme-color', content: '#1E3A5F' }]
    }
  }
})
