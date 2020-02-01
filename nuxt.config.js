export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Ralph Dugue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // Doc: https://vue-composition-api-rfc.netlify.com/
    "@/plugins/composition-api"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //"@nuxtjs/eslint-module",
    // Doc: https://typescript.nuxtjs.org/guide/
    "@nuxt/typescript-build"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/sessions", method: "post", propertyName: "token" },
          logout: { url: "/sessions", method: "delete" },
          user: {
            url: "/sessions/user",
            method: "get",
            propertyName: "data.attributes"
          }
        }
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  }
};
