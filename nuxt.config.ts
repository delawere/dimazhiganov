// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "nuxt-gtag"],
  css: ["@/assets/styles/main.css"],
  googleFonts: {
    families: {
      Merriweather: true,
      "Word+Sans": true,
    },
  },
  gtag: {
    id: "G-SCWMKXDDNV",
  },
  router: {
    options: {
      linkActiveClass: "active-link",
      linkExactActiveClass: "exact-active-link",
    },
  },
});
