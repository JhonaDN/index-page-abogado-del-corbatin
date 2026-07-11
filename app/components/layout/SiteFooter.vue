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

        <h2>Sígueme</h2>
        <div class="footer__social">
          <a
            class="footer__social-link"
            href="https://www.instagram.com/elabogadodelcorbatinn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de El Abogado del Corbatín"
            v-analytics="'footer_instagram'"
          >
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2" />
              <path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </a>
          <a
            class="footer__social-link"
            href="https://www.tiktok.com/@elabogadodelcorba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de El Abogado del Corbatín"
            v-analytics="'footer_tiktok'"
          >
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path
                d="M16.6 5.82c-.97-.67-1.6-1.77-1.6-3.02h-3.13v13.4a2.6 2.6 0 1 1-1.86-2.49v-3.18a5.75 5.75 0 1 0 5 5.7V9.4a6.3 6.3 0 0 0 3.6 1.13V7.4a3.68 3.68 0 0 1-2.01-1.58z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>&copy; {{ currentYear }} El Abogado del Corbatín. Todos los derechos reservados.</p>
      <p class="footer__disclaimer">
        Esta página tiene fines informativos y no constituye asesoría legal. Ningún resultado de
        casos anteriores garantiza un resultado similar en casos futuros.
      </p>
      <p class="footer__credits">
        Hecho por
        <!-- TODO: reemplazar "#" por la URL de Zunna Creative Studio cuando esté disponible -->
        <a href="#" target="_blank" rel="noopener noreferrer">Zunna Creative Studio</a>
      </p>
    </div>
  </footer>
</template>
