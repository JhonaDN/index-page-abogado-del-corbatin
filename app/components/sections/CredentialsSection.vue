<template>
  <section class="credentials" aria-label="Credenciales y experiencia">
    <div class="container">
      <div class="credentials__grid">
        <div v-for="item in credentials" :key="item.label" class="credential-card">
          <span class="credential-card__number">{{ item.number }}</span>
          <span class="credential-card__label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const credentials = [
  { number: '+[X]', label: 'años de experiencia' },
  { number: '+[X]', label: 'casos atendidos' }
]
</script>
