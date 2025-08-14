// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
                'data-n-head': 'lang'
            },
            title: 'SenexPay: Buy, Sell & Store Bitcoin, Ethereum and USDT in Nigeria',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!`
                },
                {
                    name: 'keywords',
                    content: 'bitcoin, exchange, transfer, tether, trade, btc, sell, buy, nigeria, sell bitcoin, buy bitcoin, otc, buy bitcoins in nigeria, sell bitcoins in nigeria, fast, secure, reliable, senex, senexpay, senex payment services, money, credit card, debit card, payment, buy bitcoin with card, blockchain, network, block, hash, confirmations, KYC, 24/7 exchange, currency exchange, crypto exchange, senex services payment'
                },
                {name: 'theme-color', content: '041d45'},
                {
                    property: 'og:title',
                    content: 'SenexPay: Buy, Sell & Store Bitcoin, USDT and more'
                },
                {
                    property: 'og:image',
                    content: '/img/senexpay-og-image.png'
                },
                {
                    property: 'al:ios:url',
                    content: 'senexpay://'
                },
                {
                    property: 'al:ios:app_store_id',
                    content: '1627864145'
                },
                {
                    property: 'al:ios:app_name',
                    content: 'SenexPay: Buy & Store Bitcoin'
                },
                {
                    property: 'al:android:url',
                    content: 'senexpay://'
                },
                {
                    property: 'al:android:package',
                    content: 'com.senexpay.mobile'
                },
                {
                    property: 'al:android:app_name',
                    content: 'SenexPay: Buy & Store Bitcoin'
                },
                {
                    property: 'og:image:width',
                    content: '740'
                },
                {
                    property: 'og:image:height',
                    content: '300'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:locale',
                    content: 'en_NG'
                },
                {
                    property: 'og:description',
                    content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!`
                },
                {
                    property: 'og:url',
                    content: 'https://senexpay.com/'
                },
                {
                    name: 'twitter:title',
                    content: 'SenexPay: Buy, Sell & Store Bitcoin, USDT and more'
                },
                {
                    property: 'twitter:card',
                    content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure.`
                },
                {
                    name: 'twitter:description',
                    content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure.`
                },
                {
                    name: 'twitter:image',
                    content: '/img/senexpay-og-image-sq.png'
                },
                {
                    property: 'twitter:image:src',
                    content: '/img/senexpay-og-image-sq.png'
                }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png'
                },
                {
                    rel: 'mask-icon',
                    href: '/favicon.ico',
                    color: '#041d45'
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                },
                {
                    rel: 'preload stylesheet',
                    href: 'http://fonts.cdnfonts.com/css/sf-pro-display'
                },
            ],
        },
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        // Keys within public, will be also exposed to the client-side
        public: {
            apiUrl: "https://api.senexpay.com",
            siteUrl: "https://senexpay.com",
            appUrl: "https://app.senexpay.com",
            sentryDsn: "https://30faafef647f46ca864da4032d66cea2@o1015449.ingest.sentry.io/5981040",
            googleAnalyticsId: "UA-143592303-1",
            language: "en",
        },
    },    modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', // '@nuxtjs/tailwindcss',
        '@nuxt/ui', 'nuxt-svgo', 'nuxt-gtag', '@sentry/nuxt/module', 'nuxt-jsonld'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'dark'
    },
    svgo: {
        svgoConfig: {
            multipass: true,
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            // customize default plugin options
                            inlineStyles: {
                                onlyMatchedOnce: false,
                            },

                            // or disable plugins
                            removeDoctype: false,
                            removeViewBox: false,
                        },
                    },
                },
            ],
        },
    },
})