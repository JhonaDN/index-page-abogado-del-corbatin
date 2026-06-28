<script setup lang="ts">
// Sub-especialidades de ejemplo — confirmar con el abogado cuáles aplican realmente antes de publicar.
const areas = [
  {
    title: '[Delitos contra el patrimonio]',
    desc: 'Hurto, estafa, abuso de confianza y fraude.',
    paths: ['M12 3v18M5 7h14M5 7l-3 6a3 3 0 006 0L5 7zM19 7l-3 6a3 3 0 006 0l-3-6z']
  },
  {
    title: '[Delitos contra la vida e integridad personal]',
    desc: 'Defensa técnica en casos de violencia o lesiones.',
    paths: ['M12 22s8-7.58 8-13a8 8 0 10-16 0c0 5.42 8 13 8 13z', 'M9.5 12.5l1.8 1.8 3.2-3.6']
  },
  {
    title: '[Delitos económicos y de cuello blanco]',
    desc: 'Investigaciones por presunto fraude o lavado de activos.',
    paths: ['M6 3h9l3 3v15H6V3z', 'M9 9h6M9 13h6M9 17h4']
  },
  {
    title: '[Libertad provisional y medidas de aseguramiento]',
    desc: 'Solicitudes para recuperar la libertad durante el proceso.',
    paths: ['M7 11V8a5 5 0 0110 0v3'],
    rect: { x: 3, y: 11, width: 18, height: 9, rx: 1.5 }
  },
  {
    title: '[Audiencias y juicio oral]',
    desc: 'Representación en audiencias, imputación y juicio.',
    paths: ['M4 4h16v12H8l-4 4V4z', 'M8 9h8M8 12h5']
  },
  {
    title: '[Recursos de apelación y casación]',
    desc: 'Impugnación de decisiones ante instancias superiores.',
    paths: ['M4 19l5-1 10-10-4-4L5 14l-1 5z', 'M14 5l4 4']
  }
]
</script>

<template>
  <section id="areas-practica" class="section">
    <div class="container">
      <header class="section-header">
        <p class="eyebrow">Áreas de práctica</p>
        <h2>Defensa penal especializada</h2>
        <p class="section-header__desc">
          Concentro mi práctica en derecho penal para ofrecer una defensa técnica y estratégica, no soluciones
          genéricas.
        </p>
      </header>

      <ul class="practice-grid">
        <li v-for="area in areas" :key="area.title" class="practice-card">
          <span class="practice-card__icon">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
              <rect v-if="area.rect" :x="area.rect.x" :y="area.rect.y" :width="area.rect.width" :height="area.rect.height" :rx="area.rect.rx" />
              <path v-for="d in area.paths" :key="d" :d="d" />
            </svg>
          </span>
          <div>
            <h3>{{ area.title }}</h3>
            <p>{{ area.desc }}</p>
          </div>
        </li>
      </ul>

      <p class="practice-areas__note">
        [Lista de áreas de ejemplo, pendiente de confirmar con el abogado cuáles refleja realmente su práctica.]
      </p>
    </div>
  </section>
</template>
