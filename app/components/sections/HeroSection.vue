<template>
  <section id="hero" class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <h1 class="hero__title">
          Defiendo tus derechos
          <span>cuando más lo necesitas.</span>
        </h1>

        <div class="hero__intro">
          <span class="hero__intro-line" aria-hidden="true"></span>
          <p class="hero__subtitle">
            Si enfrentas una investigación o un proceso penal, te acompaño con claridad, discreción
            y una estrategia construida para tu caso — desde la primera llamada.
          </p>
        </div>

        <div class="hero__actions">
          <a href="#contacto" class="hero__cta" v-analytics="'cta_hero'">Agendar consulta</a>
          <a href="tel:+57 3229730276" class="hero__call" v-analytics="'call_hero'">
            <svg
              class="hero__call-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path
                d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z"
              />
            </svg>
            Llamar ahora
          </a>
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
          Consulta confidencial: tu información está protegida por el secreto profesional del
          abogado.
        </p>
      </div>

      <div class="hero__media">
        <div class="hero__media-bg" aria-hidden="true"></div>
        <div class="hero__media-frame" aria-hidden="true"></div>
        <img
          src="~/assets/img/foto-practice-area.png"
          alt="Abogado, foto profesional de cuerpo completo"
          class="hero__photo"
          fetchpriority="high"
        />
        <div class="hero__photo-caption-bar">
          <span class="hero__photo-caption">Tu abogado de confianza</span>
        </div>
      </div>
    </div>
  </section>
</template>
