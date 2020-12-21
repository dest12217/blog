export default {
  // The target Property (https://go.nuxtjs.dev/config-target)
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
      { hid: 'description', name: 'description', content: '青色の紙切れはHTML/CSS/JavaScriptなどフロントエンド技術を中心としたテックブログです。' },
      { hid: 'og:site_name', name: 'og:site_name', content: '青色の紙切れ' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.desto.me/blog/' },
      { hid: 'og:title', name: 'og:title', content: '青色の紙切れ' },
      { hid: 'og:description', name: 'og:description', content: '青色の紙切れはHTML/CSS/JavaScriptなどフロントエンド技術を中心としたテックブログです。' },
      { hid: 'og:image', name: 'og:image', content: 'https://www.desto.me/blog/ogp.png' },
      { hid: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.desto.me/blog/favicon.ico' }
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
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm'
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

  // The router Property
  router: {
    base: '/blog/'
  },

  // Google Tag Manager Module for Nuxt.js
  gtm: {
    id: 'GTM-KFFH22H'
  },

  // Build sitemap.xml
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.desto.me',
    routes: async () => {
      const routes = []
      const { $content } = require('@nuxt/content')
      const posts = await $content('article').fetch()

      for (const post of posts) {
        routes.push(`${post.slug}/`)
      }

      return routes
    }
  }
}
