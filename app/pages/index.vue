<template>
  <div>
    <a class="skip-link" href="#main-content">Saltar al contenido principal</a>

    <SiteHeader />

    <main id="main-content">
      <HeroSection />
      <CredentialsSection />
      <PracticeAreasSection />
      <EmpathySection />
      <ProcessSection />
      <TestimonialsSection />
      <TrustFaqSection />
      <ContactFormSection />
    </main>

    <SiteFooter />
    <WhatsappFloatButton />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Abogado Penalista en [CIUDAD], Colombia | El Abogado del Corbatín',
  description:
    'Defensa penal experta en [CIUDAD], Colombia. Agenda una consulta confidencial con El Abogado del Corbatín y protege tus derechos desde el primer momento.',
  robots: 'index, follow'
})
</script>
