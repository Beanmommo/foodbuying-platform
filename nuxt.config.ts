import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/global.scss"; ',
        },
      },
    },
  },
  modules: [
    "@primevue/nuxt-module",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          Inter: [400, 500, 600, 700],
        },
        download: true,
      },
    ],
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
