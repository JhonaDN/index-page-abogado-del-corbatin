<template>
  <section id="hero" class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <h1 class="hero__title">
          Abogado penalista
          <span>Defiendo tus derechos cuando más lo necesitas.</span>
        </h1>
        <p class="hero__subtitle">
          Defensor de tus derechos y experto en soluciones legales. Si enfrentas una investigación o un proceso
          penal, te acompaño con claridad, discreción y una estrategia construida específicamente para tu caso.
        </p>

        <div class="hero__actions">
          <a href="#contacto" class="btn btn--primary btn--lg" v-analytics="'cta_hero'">Agendar consulta</a>
          <a href="tel:+57 3229730276" class="btn btn--ghost btn--lg" v-analytics="'call_hero'">Llamar ahora</a>
        </div>

        <p class="hero__trust-note">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Consulta confidencial: tu información está protegida por el secreto profesional del abogado.
        </p>
      </div>

      <div class="hero__media">
        <img
          src="~/assets/img/foto-practice-area.png"
          alt="Abogado penalista, foto profesional de cuerpo completo"
          class="hero__photo"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>
