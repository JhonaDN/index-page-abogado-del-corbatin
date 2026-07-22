<template>
  <div>
    <a class="skip-link" href="#main-content">Saltar al contenido principal</a>

    <SiteHeader />

    <main id="main-content">
      <HeroSection />
      <PracticeAreasSection />
      <VideoSection />
      <ClientsSection />
      <ProcessSection />
      <ContactFormSection />
      <TrustFaqSection />
    </main>

    <SiteFooter />
    <WhatsappFloatButton />
  </div>
</template>

<script setup lang="ts">
import { useHead, useRuntimeConfig, useSeoMeta } from 'nuxt/app'

const {
  public: { siteOrigin }
} = useRuntimeConfig()
const baseURL = useRuntimeConfig().app.baseURL
const canonicalUrl = `${siteOrigin}${baseURL}`
const ogImageUrl = `${siteOrigin}${baseURL}og-image.jpg`

const title = 'Abogado en Colombia | El Abogado del Corbatín'
const description =
  'Defensa penal experta y asesoría en derecho de familia y laboral. Agenda una consulta confidencial con El Abogado del Corbatín y protege tus derechos desde el primer momento.'

useSeoMeta({
  title,
  description,
  robots: 'index, follow',
  ogType: 'website',
  ogSiteName: 'El Abogado del Corbatín',
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageAlt: 'El Abogado del Corbatín — defensa penal y derecho de familia en Colombia',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/jpeg',
  ogLocale: 'es_CO',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImageUrl
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Attorney',
        name: 'El Abogado del Corbatín',
        description,
        url: canonicalUrl,
        image: ogImageUrl,
        telephone: '+573229730276',
        areaServed: 'Colombia',
        knowsLanguage: 'es',
        sameAs: [
          'https://www.tiktok.com/@elabogadodelcorba',
          'https://www.instagram.com/elabogadodelcorbatinn/'
        ]
      })
    }
  ]
})
</script>
