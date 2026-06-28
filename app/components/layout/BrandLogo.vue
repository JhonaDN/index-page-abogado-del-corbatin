<script setup lang="ts">
withDefaults(defineProps<{ to?: string }>(), { to: '/#hero' })
</script>

<template>
  <NuxtLink :to="to" class="logo" aria-label="El Abogado del Corbatín — ir al inicio">
    <svg class="logo__icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M2 7v10l8-5-8-5z" />
      <path d="M22 7v10l-8-5 8-5z" />
      <rect x="10" y="9.5" width="4" height="5" rx="1" />
    </svg>
    <span class="logo__text">El Abogado <strong>del Corbatín</strong></span>
  </NuxtLink>
</template>
