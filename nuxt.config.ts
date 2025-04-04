// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "author", content: "ichbinbobby" },
        { name: "charset", content: "utf-8" },
        {
          name: "description",
          content: "Hier findest du alle Links zu meinen Empfehlungen.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content: "referrals, recommendations, links, ichbinbobby",
        },
        { name: "robots", content: "index, follow" },
        {
          property: "og:description",
          content: "Hier findest du alle Links zu meinen Empfehlungen.",
        },
        {
          property: "og:image",
          content: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        },
        { property: "og:title", content: "Bobby's Referal-Links" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "http://referals.ichbinbobby.de/" },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: "Bobby's Referal-Links" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: "@yourTwitterHandle" },
        { property: "twitter:title", content: "Bobby's Referal-Links" },
        {
          property: "twitter:description",
          content: "Hier findest du alle Links zu meinen Empfehlungen.",
        },
        {
          property: "twitter:image",
          content: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        },
        { name: "theme-color", content: "#4CAF50" },
        { name: "mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "msapplication-TileColor", content: "#4CAF50" },
        { name: "msapplication-TileImage", content: "/favicon.ico" },
      ],
      title: "Bobby's Referal-Links",
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  ssr: false,

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  css: [],
  modules: ["@nuxt/fonts", "vuetify-nuxt-module", "@nuxt/eslint"],

  vuetify: {
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: false,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: "assets/settings.scss",
      },
    },
  },
});
