// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    ssr: false,
    modules: [
        "@vueuse/nuxt",
        "nuxt-vitest",
        "@pinia/nuxt",
        "@nuxt/ui",
        "nuxt-quasar-ui",
    ],
});
