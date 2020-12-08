export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '青色の紙切れ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', name: 'og:site_name', content: '青色の紙切れ' },
      { hid: 'og:type', name: 'og:type', content: 'article' },
      { hid: 'og:url', name: 'og:url', content: 'https://desto.me' },
      { hid: 'og:title', name: 'og:title', content: '青色の紙切れ' },
      { hid: 'og:description', name: 'og:description', content: '' },
      { hid: 'og:image', name: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/ogp.ts'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-KFFH22H' }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  },

  router: {
    base: '/blog/'
  }
}
