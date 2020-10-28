export default {
    srcDir: 'src/',
    mode: 'universal',
    target: 'static',

    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'NUXT101',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    plugins: [
        '~/plugins/fontawesome.js',
        { src: '~/plugins/VueExcelEditor.js', mode: 'client' },
    ],

    components: true,

    buildModules: [
    ],

    modules: [
        '@nuxtjs/axios',
        [
            'nuxt-gmaps', {
            }
        ]
    ],

    axios: {
    },

    build: {
    },

    generate: {
        dir: 'public'
    }
}
