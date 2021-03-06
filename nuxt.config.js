export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YumJs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  axios: {
    // proxy: true
    Proxy:true,
    retry: { retries: 3 }
  },

  proxy: {
    '/api/': 'http://api.example.com',
    '/api2/': 'http://api.another-website.com',
    '/api/': { target: 'http://api.example.com', pathRewrite: {'^/api/': ''} }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
