// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ["@/assets/scss/_main.scss"],
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-svgo'
    ],
    googleFonts: {
        families: {
            Montserrat: '200..700',
            Lato: '200..800',
        },
        display: 'swap'
    },
})
