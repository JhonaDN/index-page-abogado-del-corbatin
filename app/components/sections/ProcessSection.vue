<script setup lang="ts">
const steps = [
  { title: 'Agendas tu consulta', desc: 'Cuentas brevemente tu situación a través del formulario o por WhatsApp.' },
  { title: 'Analizamos tu caso', desc: 'Revisamos los hechos, documentos y el estado actual del proceso con cuidado.' },
  { title: 'Definimos la estrategia', desc: 'Te explico las opciones reales y trazamos juntos el camino a seguir.' }
]
</script>

<template>
  <section id="como-funciona" class="section">
    <div class="container">
      <header class="section-header section-header--center">
        <p class="eyebrow">Proceso simple, sin sorpresas</p>
        <h2>Cómo funciona</h2>
        <p class="section-header__desc">Tres pasos claros para empezar a actuar sobre tu caso.</p>
      </header>

      <ol class="process__steps">
        <li v-for="(step, index) in steps" :key="step.title" class="process__step">
          <span class="process__step-number">{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
