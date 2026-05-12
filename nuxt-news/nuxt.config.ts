import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["./app/style/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["shadcn-nuxt", "@pinia/nuxt"],
  runtimeConfig: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEWS_API_URL: process.env.NEWS_API_URL,
  },
});
