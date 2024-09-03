// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/main.scss", "@/assets/main.css"],
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
    "nuxt-lodash",
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
    usePrimeVue: false,
  },
});
