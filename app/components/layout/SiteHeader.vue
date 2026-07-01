<script setup lang="ts">
const isNavOpen = ref(false)

function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}

function closeNav() {
  isNavOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <BrandLogo />

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isNavOpen"
        aria-controls="primaryNav"
        :aria-label="isNavOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        @click="toggleNav"
      >
        <span class="nav-toggle__bar" />
        <span class="nav-toggle__bar" />
        <span class="nav-toggle__bar" />
      </button>

      <nav id="primaryNav" class="nav" :class="{ 'is-open': isNavOpen }" aria-label="Navegación principal">
        <ul class="nav__list">
          <li><a href="#areas-practica" @click="closeNav">Áreas de práctica</a></li>
          <li><a href="#como-funciona" @click="closeNav">Cómo funciona</a></li>
          <li><a href="#confianza" @click="closeNav">Preguntas frecuentes</a></li>
          <li>
            <a
              href="#contacto"
              class="btn btn--primary btn--sm"
              v-analytics="'cta_nav'"
              @click="closeNav"
            >Agendar consulta</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
