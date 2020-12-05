export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon_16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon_32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon_48.png', sizes: '48x48' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' }
    ]
  },

  css: ['~/assets/styles/index.scss'],

  styleResources: {
    scss: '~/assets/styles/theme.scss'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/graphcms.js', ssr: true },
    { src: '~/plugins/filters.js', ssr: true },
    { src: '~/plugins/vue-waypoint', ssr: false },
    { src: '@/plugins/vee-validate.js', ssr: false },
    { src: '~/plugins/v-tooltip', ssr: false },
    { src: '~/plugins/vue-touch.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources', '@nuxtjs/markdownit',
    ['vue-scrollto/nuxt', { offset: -100 }]
  ],

  buildModules: [
      '@nuxtjs/dotenv'
  ],

  markdownit: {
    injected: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
