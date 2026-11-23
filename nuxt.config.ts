export default defineNuxtConfig({
  compatibilityDate: '2025-01-24',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, { rel: 'preconnect', href: 'https://fonts.googleapis.com' }, { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@400;700&family=Raleway:wght@400;500;600;700&display=swap' }],
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Estúdio Almeida',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Estúdio Almeida — Odontologia Integrada.' },
      ],
    },
  },
})
