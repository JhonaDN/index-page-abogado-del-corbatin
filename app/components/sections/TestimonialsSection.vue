<script setup lang="ts">
const testimonials = [
  {
    quote: '“[Texto de testimonio pendiente]: me sentí escuchado y acompañado en cada audiencia.”',
    author: '[J. M.]',
    result: '[Resultado del caso, ej: medida de aseguramiento revocada]'
  },
  {
    quote: '“[Texto de testimonio pendiente]: explicó cada paso del proceso con mucha paciencia.”',
    author: '[A. R.]',
    result: '[Resultado del caso, ej: absolución en juicio oral]'
  },
  {
    quote: '“[Texto de testimonio pendiente]: respuesta rápida incluso en un fin de semana complicado.”',
    author: '[L. T.]',
    result: '[Resultado del caso, ej: principio de oportunidad aplicado]'
  }
]
</script>

<template>
  <section id="testimonios" class="section section--light">
    <div class="container">
      <header class="section-header section-header--center">
        <p class="eyebrow">Casos de éxito</p>
        <h2>Lo que dicen quienes confiaron su caso</h2>
        <p class="section-header__desc">
          Se muestran solo iniciales para proteger la confidencialidad de cada cliente.
        </p>
      </header>

      <ul class="testimonials__grid">
        <li v-for="item in testimonials" :key="item.author" class="testimonial-card">
          <div class="testimonial-card__stars" aria-hidden="true">
            <svg v-for="n in 5" :key="n" class="icon" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          </div>
          <blockquote>{{ item.quote }}</blockquote>
          <footer>— <strong>{{ item.author }}</strong>, {{ item.result }}</footer>
        </li>
      </ul>

      <p class="testimonials__disclaimer">
        [Testimonios de ejemplo — reemplazar por reseñas reales y verificables, idealmente enlazadas a Google u otra
        fuente pública, antes de publicar.]
      </p>
    </div>
  </section>
</template>
