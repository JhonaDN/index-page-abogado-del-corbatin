<script setup lang="ts">
withDefaults(defineProps<{ to?: string }>(), { to: '/' })
</script>

<template>
  <a :href="to" class="logo" aria-label="El Abogado del Corbatín — ir al inicio">
    <img
      class="logo__icon"
      src="~/assets/img/corbatin.png"
      alt=""
      aria-hidden="true"
      width="67"
      height="32"
    />
    <span class="logo__text">El Abogado <strong>del Corbatín</strong></span>
  </a>
</template>
