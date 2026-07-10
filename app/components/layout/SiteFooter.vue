<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <BrandLogo />
        <p>Defensor de tus derechos y experto en soluciones legales en toda Colombia.</p>
      </div>

      <div class="footer__contact">
        <h2>Contacto</h2>
        <p class="footer__contact-item">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.71-1.11a2 2 0 0 1 2.11-.45c.77.24 1.56.42 2.37.54A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <a href="tel:+57 3229730276">+57 3229730276</a>
        </p>
        <p class="footer__contact-item">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <a href="mailto:lorduy.aso@outlook.es">lorduy.aso@outlook.es</a>
        </p>
      </div>

      <div class="footer__legal">
        <h2>Información legal</h2>
        <p class="footer__legal-item">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16v12H8l-4 4V4z" />
          </svg>
          <NuxtLink to="/legal/privacidad">Política de privacidad y tratamiento de datos</NuxtLink>
        </p>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>&copy; {{ currentYear }} El Abogado del Corbatín. Todos los derechos reservados.</p>
      <p class="footer__disclaimer">
        Esta página tiene fines informativos y no constituye asesoría legal. Ningún resultado de
        casos anteriores garantiza un resultado similar en casos futuros.
      </p>
    </div>
  </footer>
</template>
