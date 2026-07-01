<template>
  <section class="video-section" aria-label="Contenido educativo en video">
    <div class="container">
      <div class="learning">
        <header class="section-header section-header--center">
          <p class="eyebrow">Aprendamos juntos</p>
          <h2>Educación legal en video</h2>
          <p class="section-header__desc">
            Videos cortos donde explicamos tus derechos y el proceso penal en lenguaje sencillo.
          </p>
        </header>

        <div class="learning__carousel">
          <button
            type="button"
            class="learning__nav learning__nav--prev"
            aria-label="Ver video anterior"
            @click="scrollCarousel(-1)"
          >‹</button>

          <ul ref="carouselEl" class="learning__grid">
            <li v-for="video in tiktokVideos" :key="video.id" class="learning__item">
              <blockquote class="tiktok-embed" :cite="video.url" :data-video-id="video.id" style="width: 100%">
                <section />
              </blockquote>
            </li>
          </ul>

          <button
            type="button"
            class="learning__nav learning__nav--next"
            aria-label="Ver video siguiente"
            @click="scrollCarousel(1)"
          >›</button>
        </div>

        <a
          class="btn btn--outline"
          href="https://www.tiktok.com/@elabogadodelcorba"
          target="_blank"
          rel="noopener noreferrer"
          v-analytics="'cta_tiktok'"
        >Ver más en TikTok</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'

useHead({
  script: [{ src: 'https://www.tiktok.com/embed.js', async: true }]
})

const carouselEl = ref<HTMLUListElement | null>(null)

function scrollCarousel(direction: -1 | 1) {
  const el = carouselEl.value
  if (!el) return
  const item = el.querySelector<HTMLElement>('.learning__item')
  const step = item ? item.offsetWidth + 24 : el.clientWidth * 0.8
  el.scrollBy({ left: direction * step, behavior: 'smooth' })
}

// Para agregar más videos: copia el link al compartir el video en TikTok y añade
// un objeto { id: '<data-video-id de la URL>', url: '<link completo>' } a este arreglo.
const tiktokVideos = [
  {
    id: '7652131683679882504',
    url: 'https://www.tiktok.com/@elabogadodelcorba/video/7652131683679882504'
  },
  {
    id: '7623795159762849045',
    url: 'https://www.tiktok.com/@elabogadodelcorba/video/7623795159762849045'
  },
  {
    id: '7624941348860333333',
    url: 'https://www.tiktok.com/@elabogadodelcorba/video/7624941348860333333'
  },
  {
    id: '7637611392815598869',
    url: 'https://www.tiktok.com/@elabogadodelcorba/video/7637611392815598869'
  }
]
</script>