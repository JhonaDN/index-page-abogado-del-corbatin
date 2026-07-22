<script setup lang="ts">
const clients = [
  { name: 'Central Shots Bar', instagram: 'Centralshotsoficial' },
  { name: 'El Poderoso Nea', instagram: '_el_nea' },
  { name: 'Luis Borrero', instagram: 'luiisborrerodj' },
  { name: 'Funcionarios Públicos', instagram: null }
]
</script>

<template>
  <section id="clientes" class="section section--light">
    <div class="container">
      <header class="section-header section-header--center">
        <h2>Algunas personas que he defendido</h2>
        <p class="section-header__desc">
          Casos reales, personas que hoy pueden mirar hacia adelante con tranquilidad.
        </p>
      </header>

      <ul class="clients__grid">
        <li v-for="client in clients" :key="client.name" class="client-card">
          <span class="client-card__avatar" aria-hidden="true">{{ client.name.charAt(0) }}</span>
          <span class="client-card__name">{{ client.name }}</span>
          <a
            v-if="client.instagram"
            class="client-card__ig"
            :href="`https://www.instagram.com/${client.instagram}/`"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Instagram de ${client.name}`"
            v-analytics="`client_ig_${client.instagram}`"
          >
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="17.5"
                y1="6.5"
                x2="17.51"
                y2="6.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            @{{ client.instagram }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
