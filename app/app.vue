<script setup lang="ts">
import { useHead, useRuntimeConfig } from "nuxt/app";

const base = useRuntimeConfig().app.baseURL;

useHead({
  link: [
    { rel: "icon", type: "image/svg+xml", href: `${base}favicon.svg` },
    { rel: "icon", type: "image/png", sizes: "96x96", href: `${base}favicon-96x96.png` },
    { rel: "shortcut icon", href: `${base}favicon.ico` },
    { rel: "apple-touch-icon", sizes: "180x180", href: `${base}apple-touch-icon.png` },
    { rel: "manifest", href: `${base}site.webmanifest` }
  ]
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
