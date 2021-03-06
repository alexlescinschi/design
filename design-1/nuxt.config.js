export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.sass'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: "@/plugins/aos",
      ssr: false
    },
    {
      src: "@/plugins/vuelidate",
      ssr: false
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [{
          name: 'Romanian',
          code: 'ro',
          iso: 'ro-RO',
          file: 'ro-RO.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'ro',
    }],
  ],

  env: {
    appName: 'Lescinschi Art Studio'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
